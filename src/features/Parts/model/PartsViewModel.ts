import {Builder} from "builder-pattern"
import { PartsHandler, PartsModel, PartsView, PriceInputChange } from "../types";


export class PartsViewModel {
  private _view!: PartsView
  private model: PartsModel
  private handlers: PartsHandler

  constructor(model: PartsModel, handlers: PartsHandler) {
    this.model = model
    this.handlers = handlers
  }

  get view(): PartsView {
    return this._view
  }

  setPriceRange = (val: number | number[]) => {
    this.handlers.setPriceRange(val)
  }

  handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: PriceInputChange) => {
    let newRange
    if (type === "lower") {
      newRange = [...[this.model.priceRange]]
      newRange[0] = Number(e.target.value)
      this.setPriceRange(newRange as number | number[])
    }
    if (type === "upper") {
      newRange = [...[this.model.priceRange]]
      newRange[1] = Number(e.target.value)
      this.setPriceRange(newRange as number | number[])
    }
  }

  create(): PartsViewModel {
    this._view = Builder<PartsView>()
      .parts(this.model.parts)
      .loading(this.model.loading)
      .filter(this.model.filter)
      .build()
    
    return this
  }
}