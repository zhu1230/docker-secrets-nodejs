import * as secrets from '../src/index'
import {expect} from 'chai'


describe('Secrets', function() {
	
	beforeEach(()=> {
		secrets.setupSecretsDir("./test/test_secrets")
	})

	it('get secrets from docker', ()=>{
		expect(secrets.get("test_a")).to.equal('123123')
		expect(secrets.get("TEST_b")).to.equal('456456')
	})

	it('take precedence over ENVs', ()=> {
		process.env['TEST_A'] = '1111'
		expect(secrets.get("test_a")).to.equal('123123')
	})

	it('get secrets from ENVs', ()=>{
		process.env['TEST_ENV'] = 'true'
		expect(secrets.get("test_env")).to.equal('true')
	})
})