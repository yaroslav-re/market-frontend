import {PartsViewModel} from "./PartsViewModel"

const model = {
  parts: [{
    id: "1",
    name: "Воздухозаборник",
    description: "Ford",
    price: 12700,
    rating: 3,
    img: "testing"
  }],
  loading: false,
  filter: {
    price: {
      gte: "0",
      lte: "20000"
    }
  }
}

const handlers = {
  setParts: jest.fn(),
  setFilter: jest.fn(),
  setLoading: jest.fn(),
}

describe('PartsViewModel', () => { 
  it(' should return a correct view when provided model', () => { 
    const actual = new PartsViewModel(model, handlers).create().view
    const expected = {
      parts: [{
        id: "1",
        name: "Воздухозаборник",
        description: "Ford",
        price: 12700,
        rating: 3,
        img: "testing"
      }],
      loading: false,
      filter: {
        price: {
          gte: "0",
          lte: "20000"
        }
      }
    }

    expect(actual).toEqual(expected)
   })
})

// тесты: проверка на наличие кнопки Add To Cart, при клике должен отправляться запрос