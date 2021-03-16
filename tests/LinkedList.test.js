const LinkedList = require('../Linked/LinkedList')

describe('Test LinkedList Class', () => {
  let linkedList
  beforeEach(() => {
    linkedList = new LinkedList()
  })
  afterEach(() => {
    linkedList = null
  })

  test('linkedList find head', () => {
    expect(linkedList.find('head').element).toBe('head')
    expect(linkedList.find('head').next).toBeNull()
  })

  test('linkedList set head', () => {
    linkedList = new LinkedList('self')
    expect(linkedList.find('self').element).toBe('self')
  })

  test('linkedList insert', () => {
    linkedList.insert('first', 'head')
    expect(linkedList.find('head').next).not.toBeNull()
    expect(linkedList.find('head').next.element).toBe('first')
    expect(linkedList.find('first').next).toBeNull()
  })

  describe('linkedList remove and findPrevious', () => {
    beforeEach(() => {
      linkedList.insert('first', 'head')
      linkedList.insert('sec', 'first')
    })

    test('linkedList findPrevious', () => {
      expect(linkedList.findPrevious('head')).toBeNull()
      expect(linkedList.findPrevious('first').element).toBe('head')
      expect(linkedList.findPrevious('sec').element).toBe('first')
    })

    test('linkedList remove', () => {
      linkedList.remove('first')
      expect(linkedList.findPrevious('sec').element).toBe('head')
    })
  })
})