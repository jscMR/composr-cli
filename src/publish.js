'use strict'

import print from './print'
import build from './build'
import rimraf from 'rimraf'
import envs from './environments'
import inquirer from 'inquirer'
import _ from 'highland'
/**
 * Publish Module Entry
 * @param  {Object} config
 * @param  {Object} options
 * @return {void}
 */
const Publish = (config, options) => {
    if (options.force){
        config.force = true
    }
    // Before build manage environments
    envs(config, (err, envList) => {
        const envNamesList = envList.map((m) => {
            return m.name
        })
        if (options.env && envNamesList[options.env[0]] !== -1) {
            // Only get first environment passes throw cli args
            let selectedEnv = getUrlBase(options.env[0], envList)
            // Call to build phrases and snippets models
            goToBuild(selectedEnv.name, selectedEnv.composrEndpoint, config)
        } else {

            inquirer.prompt([{
                type: 'list',
                name: 'environment',
                message: 'Which environment do you want to choose?',
                choices: envNamesList,
                default: 1
            }], (answers) => {
                goToBuild(answers['environment'], getUrlBase(answers['environment'], envList), config)
            })
        }
    })
}

/**
 * goToBuild
 * @param  {String} envName
 * @param  {String} envUrlBase
 * @param  {Object} config
 * @return {void}
 */
const goToBuild = (envName, envUrlBase, config) => {
    // Environment selected
    process.env.NODE_ENV = envName;
    process.env.ENV_ENDPOINT = envUrlBase;
    print.ok('You have selected :' + process.env.ENV_ENDPOINT);
    // Execution all tasks in serie
    build(config, (err, results) => {
        if (err) return print.error(err)
        print.ok('Publishing...')
        console.log(JSON.stringify(results, null, 2))
        
    })
}

/**
 * getUrlBase
 * @param  {String} selectedEnv
 * @param  {Array} envList    
 * @return {String}            
 */
const getUrlBase = (selectedEnv, envList) => {
    let currentEnv = null
    envList.forEach(e => {
        if (e.name === selectedEnv) currentEnv = e
    })
    return currentEnv
}

const pubToEnv = (item) => {
    console.log('Publicando :', item)
}

module.exports = Publish