import { Builder } from "builder-pattern";
import {
  PartsHandler,
  PartsModel,
  PartsView,
  PriceInputChange,
} from "../types";

export class PartsViewModel {
  private _view!: PartsView;
  private model: PartsModel;
  private handlers: PartsHandler;

  constructor(model: PartsModel, handlers: PartsHandler) {
    this.model = model;
    this.handlers = handlers;
  }

  get view(): PartsView {
    return this._view;
  }

  setPriceRange = (val: number[]) => {
    this.handlers.setPriceRange(val);
  };

  onInputCommitHandler = () => this.handlers.onInputCommitHandler();

  handlePriceInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: PriceInputChange
  ) => this.handlers.handlePriceInputChange(e, type);

  create(): PartsViewModel {
    this._view = Builder<PartsView>()
      .parts(this.model.parts)
      .loading(this.model.loading)
      .filter(this.model.filter)
      .priceRange(this.model.priceRange)
      .build();

    return this;
  }
}
