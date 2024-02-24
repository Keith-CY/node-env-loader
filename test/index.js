const test = require('ava')
const envLoader = require('../lib')
const shell = require('shelljs')

test.beforeEach((t) => {
  delete process.env.NODE_ENV
  delete process.env.LOCAL
})

test('envLoader(path)', (t) => {
  envLoader('./test/env.json')
  t.is(process.env.NODE_ENV, 'test')
  t.is(process.env.LOCAL, 'true')
})

test('envLoader({path, encoding})', (t) => {
  envLoader({
    path: './test/env.json',
    encoding: 'utf8',
  })
  t.is(process.env.NODE_ENV, 'test')
  t.is(process.env.LOCAL, 'true')
})

test('envLoader({path})', (t) => {
  envLoader({
    path: './test/env.json',
  })
  t.is(process.env.NODE_ENV, 'test')
  t.is(process.env.LOCAL, 'true')
})

test('envLoader({encoding})', (t) => {
  envLoader({
    encoding: 'utf8',
  })
  t.is(process.env.NODE_ENV, undefined)
  t.is(process.env.LOCAL, undefined)
})
