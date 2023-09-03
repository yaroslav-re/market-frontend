import {Builder} from "builder-pattern"
import { PartsHandler, PartsModel, PartsView } from "../types";


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

  create(): PartsViewModel {
    this._view = Builder<PartsView>()
      .parts(this.model.parts)
      .loading(this.model.loading)
      .filter(this.model.filter)
      .build()
    
    return this
  }
}