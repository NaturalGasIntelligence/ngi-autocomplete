import React from "react";
import ReactDOM from "react-dom";

import { namespaceClassName } from "../../utils/props";
import AutocompleteInput from "./AutocompleteInput";

const nc = namespaceClassName("c-wagtailautocomplete");

const initAutocompleteInput = autocompleteNode => {
  const wagtailadminHome = autocompleteNode.dataset.autocompleteWagtailadminHome;
  const name = autocompleteNode.dataset.autocompleteInputName;
  const value = JSON.parse(autocompleteNode.dataset.autocompleteInputValue);
  const type = autocompleteNode.dataset.autocompleteInputType;
  const labelId = autocompleteNode.dataset.autocompleteInputId;
  const canCreate = autocompleteNode.dataset.autocompleteInputCanCreate === "";
  const isSingle = autocompleteNode.dataset.autocompleteInputIsSingle === "";
  const filters = autocompleteNode.dataset.autocompleteInputFilters;
  
  const hasValidData = name && type;
  if (!hasValidData) {
    return;
  }

  ReactDOM.render(
    <AutocompleteInput
      name={name}
      value={value}
      type={type}
      labelId={labelId}
      canCreate={canCreate}
      isSingle={isSingle}
      filters={filters}
      apiBase={wagtailadminHome + "ngiautocomplete/"}
    />,
    autocompleteNode
  );
};

export default AutocompleteInput;

export { initAutocompleteInput, nc };
