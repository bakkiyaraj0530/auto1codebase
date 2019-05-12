/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SORT_CARS = 'CarList/SORT_CARS';
export const GET_CARS_LIST = 'CarList/GET_CARS_LIST';
export const GET_CARS_LIST_SUCCESS = 'CarList/GET_CARS_LIST_SUCCESS';
export const GET_CARS_LIST_FAILURE = 'CarList/GET_CARS_LIST_FAILURE';
export const SET_COLOR_NAME = 'CarList/SET_COLOR_NAME';
export const SET_MANUFACTORER = 'CarList/SET_MANUFACTORER';
export const GET_COLORS = 'CarList/GET_COLORS';
export const GET_COLORS_SUCCESS = 'CarList/GET_COLORS_SUCCESS';
export const GET_COLORS_FAILURE = 'CarList/GET_COLORS_FAILURE';
export const GET_MANUFACTORERS = 'CarList/GET_MANUFACTORERS';
export const GET_MANUFACTORERS_SUCCESS = 'CarList/GET_MANUFACTORERS_SUCCESS';
export const GET_MANUFACTORERS_FAILURE = 'CarList/GET_MANUFACTORERS_FAILURE';
