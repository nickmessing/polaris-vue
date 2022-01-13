import type { IconSource, Action } from 'types/type';

export interface IconableAction extends Action {
  /** Source of the icon */
  icon?: IconSource;
}

export interface DisableableAction extends Action {
  /** Whether or not the action is disabled */
  disabled?: boolean;
}

export interface BadgeAction {
  badge?: {
    status: 'new';
    content: string;
  };
}

export interface DestructableAction extends Action {
  /** Destructive action */
  destructive?: boolean;
}

export interface ActionListItemDescriptor
  extends IconableAction,
  DisableableAction,
  BadgeAction,
  DestructableAction {
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** Additional hint text to display with item */
  helpText?: string;
  /** Image source */
  image?: string;
  /** Prefix source */
  prefixId?: string;
  /** Suffix source */
  suffixId?: string;
  /**  Add an ellipsis suffix to action content */
  ellipsis?: boolean;
  /** Whether the action is active or not */
  active?: boolean;
  /** Defines a role for the action */
  role?: string;
}

export interface ActionListSection {
  /** Section title */
  title?: string;
  /** Collection of action items for the list */
  items: readonly ActionListItemDescriptor[];
}

export type ItemProps = ActionListItemDescriptor;
