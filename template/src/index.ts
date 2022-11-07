/**
 * Import styles library
 */
import styles from './index.css';

import ToolboxIcon from './assets/toolbox-icon.svg';

import { VAR_TOOL_NAMEData, VAR_TOOL_NAMEConfig } from './types';
import { API, BlockAPI, BlockTool } from '@editorjs/editorjs';

/**
 * VAR_TOOL_NAME Tool for Editor.js
 */
export default class VAR_TOOL_NAME implements BlockTool {
  /**
   * Code API — public methods to work with Editor
   * 
   * @link https://editorjs.io/api
   */
   private readonly api: API;

  /**
   * Block API — methods and properties to work with Block instance
   * 
   * @link https://editorjs.io/blockapi
   */
  private readonly block: BlockAPI;

  /**
   * Read-only mode flag
   */
  private readonly readOnly: boolean;

  /**
   * Tool data for input and output
   */
  private data: VAR_TOOL_NAMEData;

  /**
   * Configuration object that passed through the initial Editor configuration.
   */
  private config: VAR_TOOL_NAMEConfig;

  /**
   * Tool's HTML nodes
   */
  private nodes: {[key: string]: HTMLElement|null};

  /**
   * Class constructor
   * 
   * @link https://editorjs.io/tools-api#class-constructor
   */
  constructor({ data, config, api, block, readOnly }: { data: VAR_TOOL_NAMEData, config: VAR_TOOL_NAMEConfig, api: API, block: BlockAPI, readOnly: boolean }) {
    this.data = data;
    this.config = config;
    this.api = api;
    this.block = block;
    this.readOnly = readOnly;

    /**
     * Declare Tool's nodes
     */
    this.nodes = {
      wrapper: null,
    };
  }

  /**
   * PUBLIC METHODS
   * 
   * @link https://editorjs.io/tools-api#public-methods
   */

  /**
   * Creates UI of a Block
   * Required
   * @link https://editorjs.io/tools-api#render
   * 
   * @returns {HTMLElement}
   */
  render() {
    this.nodes.wrapper = document.createElement('div');
    this.nodes.wrapper.classList.add(styles['VAR_TOOL_NAME-tool']);

    return this.nodes.wrapper;
  }

  /**
   * Extracts Block data from the UI
   * Required
   * @link https://editorjs.io/tools-api#save
   * 
   * @returns {VAR_TOOL_NAMEData} saved data
   */
  save(): VAR_TOOL_NAMEData {
    return {};
  }

  /**
   * Validates Block data after saving
   * @link https://editorjs.io/tools-api#validate
   * 
   * @param {VAR_TOOL_NAMEData} savedData
   * @returns {boolean} true if data is valid, otherwise false
   */ 
  // validate() {}

  /**
   * 
   * Returns HTML that will be appended at the top of Block-settings
   * @link https://editorjs.io/tools-api#render-settings
   * 
   * @returns {HTMLElement}
   */ 
  // renderSettings() {}

  /**
   * Clear Tools stuff: cache, variables, events.
   * Called when Editor instance is destroying.
   * @link https://editorjs.io/tools-api#destroy
   * 
   * @returns {void}
   */
  // destroy() {}

  /**
   * Handle content pasted by ways that described by pasteConfig static getter
   * @link https://editorjs.io/tools-api#on-paste
   * 
   * @param {PasteEvent} event - event with pasted content
   * @returns {void}
   */  
  // onPaste() {}

  /**
   * Specifies how to merge two similar Blocks
   * @link https://editorjs.io/tools-api#merge
   * 
   * @param {VAR_TOOL_NAMEData} data - data of second Block
   * @returns {VAR_TOOL_NAMEData} - merged data
   */
  // merge() {} 

  /**
   * STATIC GETTERS
   * 
   * @link https://editorjs.io/tools-api#static-getters
   */

  /**
   * Process pasted content before appending to the Editor
   * @link https://editorjs.io/tools-api#pasteconfig
   * 
   * @returns {tags?: string[], files?: { mimeTypes: string[], extensions: string[] }, patterns?: { [string]: RegEx }}
   */ 
  // static get pasteConfig() {
  //   // return {
  //   //   /**
  //   //    * Paste HTML into Editor
  //   //    */
  //   //   tags: [ 'img' ],
  //   //
  //   //   /**
  //   //    * Paste URL of image into the Editor
  //   //    */
  //   //   patterns: {
  //   //     image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
  //   //   },
  //   // 
  //   //   /**
  //   //    * Drag n drop file from into the Editor
  //   //    */
  //   //   files: {
  //   //     mimeTypes: [ 'image/*' ],
  //   //   },
  //   // };
  // }

  /**
   * Clean unwanted HTML tags or attributes
   * @link https://editorjs.io/tools-api#sanitize
   * 
   * @returns {{[string]: boolean|object}} - Sanitizer rules
   */
  // static get sanitize() {
  //   // return {
  //   //   a: {
  //   //     href: true,
  //   //     target: '_blank',
  //   //     rel: 'nofollow',
  //   //   },
  //   // };
  // } 

  /**
   * Describe an icon and title here
   * Required if Tools should be added to the Toolbox
   * @link https://editorjs.io/tools-api#toolbox
   * 
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'VAR_TOOL_NAME',
      icon: ToolboxIcon,
    };
  }

  /**
   * Shortcut that fires render method and inserts new Block
   * @link https://editorjs.io/tools-api#shortcut
   * 
   * @returns {string}
   */
  // static get shortcut() {
  //   // return 'CMD+SHIFT+I';
  // }

  /**
   * Config allows Tool to specify how it can be converted into/from another Tool
   * 
   * @link https://editorjs.io/tools-api#conversionconfig
   * 
   * @returns {{export: string|function, import: string|function}}
   */
  // static get conversionConfig() {
  //   // return {
  //   //   export: (data) => {
  //   //     return data.items.join('.'); // in this example, all list items will be concatenated to an export string
  //   //   },
  //   //  
  //   //   /**
  //   //    * In this example, List Tool creates items by splitting original text by a dot symbol. 
  //   //    */
  //   //   import: (string) => {
  //   //     const items = string.split('.');
  //   //
  //   //     return {
  //   //       items: items.filter( (text) => text.trim() !== ''),
  //   //       type: 'unordered'
  //   //     };
  //   //   }
  //   // };
  // }

  /**
   * With this option, Editor.js won't handle Enter keydowns
   * @link https://editorjs.io/tools-api#enablelinebreaks
   * 
   * @returns {boolean}
   */ 
  // static get enableLineBreaks() {
  //   return true;
  // }

  /**
   * This flag tells core that current tool supports the read-only mode
   * @link https://editorjs.io/tools-api#isreadonlysupported
   * 
   * @returns {boolean}
   */
  // static get isReadOnlySupported() {
  //   return true;
  // } 

  /**
   * LIFE CYCLE HOOKS
   * 
   * These methods are called by Editor.js core
   * @link https://editorjs.io/tools-api#lifecycle-hooks
   */

  /**
   * Called after Block contents is added to the page
   */
  // rendered() {}

  /**
   * Called each time Block contents is updated
   */
  // updated() {}

  /**
   * Called after Block contents is removed from the page but before Block instance deleted
   */
  // removed() {}

  /**
   * Called after Block is moved by move tunes or through API
   * 
   * @param {MoveEvent} event 
   */
  // moved(event) {}
};