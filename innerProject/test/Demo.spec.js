import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Demo1 from '@/components/Demo1'

let wrapper

beforeEach(() => {
  wrapper = mount(Demo1)
})

test('点击自增按钮后, 当前值应该1。', () => {
  const btnSync = wrapper.find('button.btn-sync')
  const counter = wrapper.find('label.count')
  btnSync.trigger('click')
  expect(Number(counter.text())).toEqual(1)
})

test('点击异步自增按钮后, 当前值应为1。', () => {
  const btnAsync = wrapper.find('button.btn-async')
  const counter = wrapper.find('label.count')
  btnAsync.trigger('click')
  setTimeout(() => {
    expect(Number(counter.text())).toEqual(1)
  }, 1000)
})

test('设置count值为3。', () => {
  const counter = wrapper.find('label.count')
  wrapper.setData({
    count: 3
  })
  expect(Number(counter.text())).toEqual(3)
})
