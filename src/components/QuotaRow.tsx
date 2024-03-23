import { Component, Setter } from "solid-js";
import { Quota } from "../App";

const QuotaRow: Component<Quota & { setter: Setter<Quota[]> }> = (props) => {
  props.setter(prev => prev);

  return <div class="p-4 flex gap-4">{props.sold}</div>;
};

export { QuotaRow };
