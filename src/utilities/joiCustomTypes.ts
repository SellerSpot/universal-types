export type TJoiAnyMessages = 'any.required';

export type TJoiStringMessages =
    | 'string.base'
    | 'string.min'
    | 'string.max'
    | 'string.domain'
    | 'string.empty';

// make an entry for further addition of messages
export type TJoiCollectiveMessages = TJoiStringMessages | TJoiAnyMessages;

export type TJoiErrorMessages = { [key in TJoiCollectiveMessages]: string };
