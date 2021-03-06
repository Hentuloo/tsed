import {decorateMethodsOf, DecoratorTypes, UnsupportedDecoratorType} from "@tsed/core";
import {JsonEntityFn} from "../common/jsonEntityFn";

/**
 * Add deprecated metadata on the decorated element.
 *
 * ## Examples
 * ### On method
 *
 * ```typescript
 * class Model {
 *    @Deprecated()
 *    id: string;
 * }
 * ```
 * @class
 * @method
 * @decorator
 * @param deprecated
 */
export function Deprecated(deprecated: boolean = true) {
  return JsonEntityFn((store, args) => {
    switch (store.decoratorType) {
      case DecoratorTypes.METHOD:
        store.operation!.deprecated(deprecated);
        break;
      case DecoratorTypes.CLASS:
        decorateMethodsOf(args[0], Deprecated(deprecated));
        break;

      default:
        throw new UnsupportedDecoratorType(Deprecated, args);
    }
  });
}
