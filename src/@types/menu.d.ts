import { IBlockSize } from './monitor';

/**
 * Interface for the Checkbox View Component
 */
export interface ICheckboxProps {
    /** display name of the property applicable for the checkbox */
    name: string;

    /** method to toggle the state of the checkbox */
    onclick: (arg: boolean) => void;

    /** styles of the checkbox */
    className?: string;
}

/**
 * Interface for the Menu component's View props.
 */
export interface IMenuProps {
    /** `true` if auto hide is on else `false`. */
    autoHide: boolean;

    /** `true` if auto hide counter is on else `false`. */
    autoHideTemp: boolean;

    /** `true` if play submenu is visible else `false`. */
    playMenuVisible: boolean;

    /** `true` if settings submenu is visible else `false`. */
    settingsMenuVisible: boolean;

    /** `true` if project settings submenu is visible else `false`. */
    projectMenuVisible: boolean;

    /** `true` if language submenu is visible else `false`. */
    languageMenuVisible: boolean;

    /** `true` if blockSize submenu is visible else `false`. */
    blockSizeMenuVisible: boolean;

    /** `true` if music settings submenu is visible else `false`. */
    musicSettingsMenuVisible: boolean;

    /** list of languages available */
    languages: string[];

    /** list of blockSizes available */
    blockSizes: IBlockSize[];

    /** change the language to the selected option */
    changeLanguage: (language: string) => void;

    /** enable/disable horizontal scroll for the canvas */
    updateHorizontalScroll: (isEnabled: boolean) => void;

    /** enable/disable turtle wrap for the artwork */
    updateTurtleWrap: (isWrapOn: boolean) => void;

    /** update the block size of all the blocks */
    changeBlockSize: (blockSize: number) => void;

    /** update the application master volume */
    updateVolume: (volume: number) => void;

    /** Toggles the state of auto hide. */
    toggleAutoHide: () => void;

    /** Toggles the state of auto hide counter. */
    toggleAutoHideTemp: () => void;

    /** Toggles the state of play submenu. */
    togglePlayMenu: () => void;

    /** Toggles the state of settings submenu. */
    toggleSettingsMenu: () => void;

    /** Toggles the state of project settings submenu. */
    toggleProjectMenu: () => void;

    /** Toggles the state of language submenu. */
    toggleLanguageMenu: () => void;

    /** Toggles the state of block size submenu. */
    toggleBlockSizeMenu: () => void;

    /** Toggles the state of music settings submenu. */
    toggleMusicSettingsMenu: () => void;

    /** play the project */
    play: () => void;

    /** play the project step by step */
    playStepByStep: () => void;

    /** play the project slowly */
    playSlowly: () => void;

    /** hide the blocks in the project */
    hideBlocks: () => void;

    /** clean the artwork of the project */
    cleanArtwork: () => void;

    /**collapse all the collapsible blocks */
    collapseBlocks: () => void;

    /** undo project to the previous state */
    undo: () => void;

    /** redo project to the next state */
    redo: () => void;
}

/**
 * Interface for the Menu component's Model class.
 */
export interface IMenuModel {
    /** Whether auto hide is on or off. */
    autoHide: boolean;

    /** Counter to check for auto hide due to difference in z-indices */
    autoHideTemp: boolean;

    /** Whether the Play submenu is open or not */
    playMenuVisible: boolean;

    /** Whether the Settings submenu is open or not */
    settingsMenuVisible: boolean;

    /** Whether the Project Settings submenu is open or not */
    projectMenuVisible: boolean;

    /** Whether the Language submenu is open or not */
    languageMenuVisible: boolean;

    /** Whether the Block Size submenu is open or not */
    blockSizeMenuVisible: boolean;

    /** Whether the Music Settings submenu is open or not */
    musicSettingsMenuVisible: boolean;

    /** Toggles the state of auto hide. */
    toggleAutoHide: () => void;

    /** Toggles the state of auto hide counter. */
    toggleAutoHideTemp: () => void;

    /** Toggles the state of play submenu. */
    togglePlayMenu: () => void;

    /** Toggles the state of settings submenu. */
    toggleSettingsMenu: () => void;

    /** Toggles the state of project settings submenu. */
    toggleProjectMenu: () => void;

    /** Toggles the state of language submenu. */
    toggleLanguageMenu: () => void;

    /** Toggles the state of blockSize submenu. */
    toggleBlockSizeMenu: () => void;

    /** Toggles the state of music settings submenu. */
    toggleMusicSettingsMenu: () => void;
}
