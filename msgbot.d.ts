/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module xfl {
		export module msgbot {
			export class BR {
				public static class: java.lang.Class<com.xfl.msgbot.BR>;
				public static _all: number;
				public static click: number;
				public static isLongText: number;
				public static nameVisibility: number;
				public static profileImageVisibility: number;
				public static sender: number;
				public static text: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export class BuildConfig {
				public static class: java.lang.Class<com.xfl.msgbot.BuildConfig>;
				public static APPLICATION_ID: string;
				public static AdmobID: string;
				public static BUILD_TYPE: string;
				public static DEBUG: boolean;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export class DataBinderMapperImpl {
				public static class: java.lang.Class<com.xfl.msgbot.DataBinderMapperImpl>;
				public static a: globalAndroid.util.SparseIntArray;
				public static "<clinit>"(): void;
				public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: androidNative.Array<globalAndroid.view.View>, param2: number): androidx.databinding.ViewDataBinding;
				public collectDependencies(): java.util.List<androidx.databinding.DataBinderMapper>;
				public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View, param2: number): androidx.databinding.ViewDataBinding;
				public convertBrIdToString(param0: number): string;
				public getLayoutId(param0: string): number;
				public constructor();
			}
			export module DataBinderMapperImpl {
				export class a {
					public static class: java.lang.Class<com.xfl.msgbot.DataBinderMapperImpl.a>;
					public static a: globalAndroid.util.SparseArray<string>;
					public static "<clinit>"(): void;
				}
				export class b {
					public static class: java.lang.Class<com.xfl.msgbot.DataBinderMapperImpl.b>;
					public static a: java.util.HashMap<string,java.lang.Integer>;
					public static "<clinit>"(): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export class DataBindingTriggerClass {
				public static class: java.lang.Class<com.xfl.msgbot.DataBindingTriggerClass>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export class R {
				public static class: java.lang.Class<com.xfl.msgbot.R>;
				public constructor();
			}
			export module R {
				export class anim {
					public static class: java.lang.Class<com.xfl.msgbot.R.anim>;
					public static abc_fade_in: number;
					public static abc_fade_out: number;
					public static abc_grow_fade_in_from_bottom: number;
					public static abc_popup_enter: number;
					public static abc_popup_exit: number;
					public static abc_shrink_fade_out_from_bottom: number;
					public static abc_slide_in_bottom: number;
					public static abc_slide_in_top: number;
					public static abc_slide_out_bottom: number;
					public static abc_slide_out_top: number;
					public static abc_tooltip_enter: number;
					public static abc_tooltip_exit: number;
					public static btn_checkbox_to_checked_box_inner_merged_animation: number;
					public static btn_checkbox_to_checked_box_outer_merged_animation: number;
					public static btn_checkbox_to_checked_icon_null_animation: number;
					public static btn_checkbox_to_unchecked_box_inner_merged_animation: number;
					public static btn_checkbox_to_unchecked_check_path_merged_animation: number;
					public static btn_checkbox_to_unchecked_icon_null_animation: number;
					public static btn_radio_to_off_mtrl_dot_group_animation: number;
					public static btn_radio_to_off_mtrl_ring_outer_animation: number;
					public static btn_radio_to_off_mtrl_ring_outer_path_animation: number;
					public static btn_radio_to_on_mtrl_dot_group_animation: number;
					public static btn_radio_to_on_mtrl_ring_outer_animation: number;
					public static btn_radio_to_on_mtrl_ring_outer_path_animation: number;
					public static design_bottom_sheet_slide_in: number;
					public static design_bottom_sheet_slide_out: number;
					public static design_snackbar_in: number;
					public static design_snackbar_out: number;
					public static fab_scale_down: number;
					public static fab_scale_up: number;
					public static fab_slide_in_from_left: number;
					public static fab_slide_in_from_right: number;
					public static fab_slide_out_to_left: number;
					public static fab_slide_out_to_right: number;
					public static fragment_close_enter: number;
					public static fragment_close_exit: number;
					public static fragment_fade_enter: number;
					public static fragment_fade_exit: number;
					public static fragment_fast_out_extra_slow_in: number;
					public static fragment_open_enter: number;
					public static fragment_open_exit: number;
					public static infinite_rotation: number;
					public static item_animation_fall_down: number;
					public static layout_animation_fall_down: number;
					public static leak_canary_enter_alpha: number;
					public static leak_canary_enter_backward: number;
					public static leak_canary_enter_forward: number;
					public static leak_canary_exit_alpha: number;
					public static leak_canary_exit_backward: number;
					public static leak_canary_exit_forward: number;
					public static mtrl_bottom_sheet_slide_in: number;
					public static mtrl_bottom_sheet_slide_out: number;
					public static mtrl_card_lowers_interpolator: number;
					public static nav_default_enter_anim: number;
					public static nav_default_exit_anim: number;
					public static nav_default_pop_enter_anim: number;
					public static nav_default_pop_exit_anim: number;
					public static scale_up_splash: number;
					public static slide_in_right: number;
					public static slide_out_left: number;
					public static ucrop_loader_circle_path: number;
					public static ucrop_loader_circle_scale: number;
					public constructor();
				}
				export class animator {
					public static class: java.lang.Class<com.xfl.msgbot.R.animator>;
					public static design_appbar_state_list_animator: number;
					public static design_fab_hide_motion_spec: number;
					public static design_fab_show_motion_spec: number;
					public static linear_indeterminate_line1_head_interpolator: number;
					public static linear_indeterminate_line1_tail_interpolator: number;
					public static linear_indeterminate_line2_head_interpolator: number;
					public static linear_indeterminate_line2_tail_interpolator: number;
					public static mtrl_btn_state_list_anim: number;
					public static mtrl_btn_unelevated_state_list_anim: number;
					public static mtrl_card_state_list_anim: number;
					public static mtrl_chip_state_list_anim: number;
					public static mtrl_extended_fab_change_size_motion_spec: number;
					public static mtrl_extended_fab_hide_motion_spec: number;
					public static mtrl_extended_fab_show_motion_spec: number;
					public static mtrl_extended_fab_state_list_animator: number;
					public static mtrl_fab_hide_motion_spec: number;
					public static mtrl_fab_show_motion_spec: number;
					public static mtrl_fab_transformation_sheet_collapse_spec: number;
					public static mtrl_fab_transformation_sheet_expand_spec: number;
					public constructor();
				}
				export class array {
					public static class: java.lang.Class<com.xfl.msgbot.R.array>;
					public static app_language_entries: number;
					public static app_language_entry_values: number;
					public static debug_long_click: number;
					public static editor_fonts: number;
					public static editor_fonts_values: number;
					public static list_preference_entries: number;
					public static list_preference_entry_values: number;
					public static multi_select_list_preference_default_value: number;
					public static reply_entries: number;
					public static reply_values: number;
					public static shortcut_bot_reload: number;
					public static shortcut_bot_start: number;
					public static shortcut_bot_stop: number;
					public constructor();
				}
				export class attr {
					public static class: java.lang.Class<com.xfl.msgbot.R.attr>;
					public static action: number;
					public static actionBarDivider: number;
					public static actionBarItemBackground: number;
					public static actionBarPopupTheme: number;
					public static actionBarSize: number;
					public static actionBarSplitStyle: number;
					public static actionBarStyle: number;
					public static actionBarTabBarStyle: number;
					public static actionBarTabStyle: number;
					public static actionBarTabTextStyle: number;
					public static actionBarTheme: number;
					public static actionBarWidgetTheme: number;
					public static actionButtonColor: number;
					public static actionButtonStyle: number;
					public static actionDropDownStyle: number;
					public static actionLayout: number;
					public static actionMenuTextAppearance: number;
					public static actionMenuTextColor: number;
					public static actionModeBackground: number;
					public static actionModeCloseButtonStyle: number;
					public static actionModeCloseDrawable: number;
					public static actionModeCopyDrawable: number;
					public static actionModeCutDrawable: number;
					public static actionModeFindDrawable: number;
					public static actionModePasteDrawable: number;
					public static actionModePopupWindowStyle: number;
					public static actionModeSelectAllDrawable: number;
					public static actionModeShareDrawable: number;
					public static actionModeSplitBackground: number;
					public static actionModeStyle: number;
					public static actionModeWebSearchDrawable: number;
					public static actionOverflowButtonStyle: number;
					public static actionOverflowMenuStyle: number;
					public static actionProviderClass: number;
					public static actionTextColorAlpha: number;
					public static actionViewClass: number;
					public static activityChooserViewStyle: number;
					public static adSize: number;
					public static adSizes: number;
					public static adUnitId: number;
					public static adjustable: number;
					public static album_dropdown_count_color: number;
					public static album_dropdown_title_color: number;
					public static album_element_color: number;
					public static album_emptyView: number;
					public static album_emptyView_textColor: number;
					public static album_thumbnail_placeholder: number;
					public static alertDialogButtonGroupStyle: number;
					public static alertDialogCenterButtons: number;
					public static alertDialogStyle: number;
					public static alertDialogTheme: number;
					public static allowDividerAbove: number;
					public static allowDividerAfterLastItem: number;
					public static allowDividerBelow: number;
					public static allowStacking: number;
					public static alpha: number;
					public static alphabeticModifiers: number;
					public static altSrc: number;
					public static animate_relativeTo: number;
					public static animationMode: number;
					public static appBarLayoutStyle: number;
					public static applyMotionScene: number;
					public static arcMode: number;
					public static argType: number;
					public static arrowHeadLength: number;
					public static arrowShaftLength: number;
					public static attributeName: number;
					public static autoCompleteTextViewStyle: number;
					public static autoHide: number;
					public static autoPlay: number;
					public static autoSizeMaxTextSize: number;
					public static autoSizeMinTextSize: number;
					public static autoSizePresetSizes: number;
					public static autoSizeStepGranularity: number;
					public static autoSizeTextType: number;
					public static autoTransition: number;
					public static background: number;
					public static backgroundColor: number;
					public static backgroundInsetBottom: number;
					public static backgroundInsetEnd: number;
					public static backgroundInsetStart: number;
					public static backgroundInsetTop: number;
					public static backgroundOverlayColorAlpha: number;
					public static backgroundSplit: number;
					public static backgroundStacked: number;
					public static backgroundTint: number;
					public static backgroundTintMode: number;
					public static badge: number;
					public static badgeGravity: number;
					public static badgeStyle: number;
					public static badgeTextColor: number;
					public static barLength: number;
					public static barrierAllowsGoneWidgets: number;
					public static barrierDirection: number;
					public static barrierMargin: number;
					public static behavior_autoHide: number;
					public static behavior_autoShrink: number;
					public static behavior_draggable: number;
					public static behavior_expandedOffset: number;
					public static behavior_fitToContents: number;
					public static behavior_halfExpandedRatio: number;
					public static behavior_hideable: number;
					public static behavior_overlapTop: number;
					public static behavior_peekHeight: number;
					public static behavior_saveFlags: number;
					public static behavior_skipCollapsed: number;
					public static borderWidth: number;
					public static borderlessButtonStyle: number;
					public static bottomAppBarStyle: number;
					public static bottomNavigationStyle: number;
					public static bottomSheetDialogTheme: number;
					public static bottomSheetStyle: number;
					public static bottomToolbar_apply_textColor: number;
					public static bottomToolbar_bg: number;
					public static bottomToolbar_preview_textColor: number;
					public static boxBackgroundColor: number;
					public static boxBackgroundMode: number;
					public static boxCollapsedPaddingTop: number;
					public static boxCornerRadiusBottomEnd: number;
					public static boxCornerRadiusBottomStart: number;
					public static boxCornerRadiusTopEnd: number;
					public static boxCornerRadiusTopStart: number;
					public static boxStrokeColor: number;
					public static boxStrokeErrorColor: number;
					public static boxStrokeWidth: number;
					public static boxStrokeWidthFocused: number;
					public static brightness: number;
					public static buttonBarButtonStyle: number;
					public static buttonBarNegativeButtonStyle: number;
					public static buttonBarNeutralButtonStyle: number;
					public static buttonBarPositiveButtonStyle: number;
					public static buttonBarStyle: number;
					public static buttonCompat: number;
					public static buttonGravity: number;
					public static buttonIconDimen: number;
					public static buttonPanelSideLayout: number;
					public static buttonStyle: number;
					public static buttonStyleSmall: number;
					public static buttonTint: number;
					public static buttonTintMode: number;
					public static capture_textColor: number;
					public static cardBackgroundColor: number;
					public static cardCornerRadius: number;
					public static cardElevation: number;
					public static cardForegroundColor: number;
					public static cardMaxElevation: number;
					public static cardPreventCornerOverlap: number;
					public static cardUseCompatPadding: number;
					public static cardViewStyle: number;
					public static chainUseRtl: number;
					public static chatColorMe: number;
					public static chatColorMeLink: number;
					public static chatColorMeText: number;
					public static chatColorOpponent: number;
					public static chatColorOpponentText: number;
					public static checkBoxPreferenceStyle: number;
					public static checkboxStyle: number;
					public static checkedButton: number;
					public static checkedChip: number;
					public static checkedIcon: number;
					public static checkedIconEnabled: number;
					public static checkedIconTint: number;
					public static checkedIconVisible: number;
					public static checkedTextViewStyle: number;
					public static chipBackgroundColor: number;
					public static chipCornerRadius: number;
					public static chipEndPadding: number;
					public static chipGroupStyle: number;
					public static chipIcon: number;
					public static chipIconEnabled: number;
					public static chipIconSize: number;
					public static chipIconTint: number;
					public static chipIconVisible: number;
					public static chipMinHeight: number;
					public static chipMinTouchTargetSize: number;
					public static chipSpacing: number;
					public static chipSpacingHorizontal: number;
					public static chipSpacingVertical: number;
					public static chipStandaloneStyle: number;
					public static chipStartPadding: number;
					public static chipStrokeColor: number;
					public static chipStrokeWidth: number;
					public static chipStyle: number;
					public static chipSurfaceColor: number;
					public static circleRadius: number;
					public static circularInset: number;
					public static circularRadius: number;
					public static civ_border_color: number;
					public static civ_border_overlay: number;
					public static civ_border_width: number;
					public static civ_circle_background_color: number;
					public static clickAction: number;
					public static closeIcon: number;
					public static closeIconEnabled: number;
					public static closeIconEndPadding: number;
					public static closeIconSize: number;
					public static closeIconStartPadding: number;
					public static closeIconTint: number;
					public static closeIconVisible: number;
					public static closeItemLayout: number;
					public static codeTheme: number;
					public static collapseContentDescription: number;
					public static collapseIcon: number;
					public static collapsedTitleGravity: number;
					public static collapsedTitleTextAppearance: number;
					public static color: number;
					public static colorAccent: number;
					public static colorBackgroundFloating: number;
					public static colorButtonNormal: number;
					public static colorControlActivated: number;
					public static colorControlHighlight: number;
					public static colorControlNormal: number;
					public static colorError: number;
					public static colorOnBackground: number;
					public static colorOnError: number;
					public static colorOnPrimary: number;
					public static colorOnPrimarySurface: number;
					public static colorOnSecondary: number;
					public static colorOnSurface: number;
					public static colorPrimary: number;
					public static colorPrimaryDark: number;
					public static colorPrimarySurface: number;
					public static colorPrimaryVariant: number;
					public static colorSecondary: number;
					public static colorSecondaryVariant: number;
					public static colorSurface: number;
					public static colorSwitchThumbNormal: number;
					public static commitIcon: number;
					public static constraintSet: number;
					public static constraintSetEnd: number;
					public static constraintSetStart: number;
					public static constraint_referenced_ids: number;
					public static constraints: number;
					public static content: number;
					public static contentDescription: number;
					public static contentInsetEnd: number;
					public static contentInsetEndWithActions: number;
					public static contentInsetLeft: number;
					public static contentInsetRight: number;
					public static contentInsetStart: number;
					public static contentInsetStartWithNavigation: number;
					public static contentPadding: number;
					public static contentPaddingBottom: number;
					public static contentPaddingLeft: number;
					public static contentPaddingRight: number;
					public static contentPaddingTop: number;
					public static contentScrim: number;
					public static contrast: number;
					public static controlBackground: number;
					public static coordinatorLayoutStyle: number;
					public static cornerFamily: number;
					public static cornerFamilyBottomLeft: number;
					public static cornerFamilyBottomRight: number;
					public static cornerFamilyTopLeft: number;
					public static cornerFamilyTopRight: number;
					public static cornerRadius: number;
					public static cornerSize: number;
					public static cornerSizeBottomLeft: number;
					public static cornerSizeBottomRight: number;
					public static cornerSizeTopLeft: number;
					public static cornerSizeTopRight: number;
					public static counterEnabled: number;
					public static counterMaxLength: number;
					public static counterOverflowTextAppearance: number;
					public static counterOverflowTextColor: number;
					public static counterTextAppearance: number;
					public static counterTextColor: number;
					public static crossfade: number;
					public static currentState: number;
					public static curveFit: number;
					public static customBoolean: number;
					public static customColorDrawableValue: number;
					public static customColorValue: number;
					public static customDimension: number;
					public static customFloatValue: number;
					public static customIntegerValue: number;
					public static customNavigationLayout: number;
					public static customPixelDimension: number;
					public static customStringValue: number;
					public static data: number;
					public static dataPattern: number;
					public static dayInvalidStyle: number;
					public static daySelectedStyle: number;
					public static dayStyle: number;
					public static dayTodayStyle: number;
					public static defaultDuration: number;
					public static defaultNavHost: number;
					public static defaultQueryHint: number;
					public static defaultState: number;
					public static defaultValue: number;
					public static deltaPolarAngle: number;
					public static deltaPolarRadius: number;
					public static dependency: number;
					public static deriveConstraintsFrom: number;
					public static destination: number;
					public static dialogCornerRadius: number;
					public static dialogIcon: number;
					public static dialogLayout: number;
					public static dialogMessage: number;
					public static dialogPreferenceStyle: number;
					public static dialogPreferredPadding: number;
					public static dialogTheme: number;
					public static dialogTitle: number;
					public static disableDependentsState: number;
					public static displayOptions: number;
					public static divider: number;
					public static dividerHorizontal: number;
					public static dividerPadding: number;
					public static dividerVertical: number;
					public static dragDirection: number;
					public static dragScale: number;
					public static drawPath: number;
					public static drawableBottomCompat: number;
					public static drawableEndCompat: number;
					public static drawableLeftCompat: number;
					public static drawableRightCompat: number;
					public static drawableSize: number;
					public static drawableStartCompat: number;
					public static drawableTint: number;
					public static drawableTintMode: number;
					public static drawableTopCompat: number;
					public static drawerArrowStyle: number;
					public static drawerLayoutStyle: number;
					public static dropDownListViewStyle: number;
					public static dropdownListPreferredItemHeight: number;
					public static dropdownPreferenceStyle: number;
					public static duration: number;
					public static editTextBackground: number;
					public static editTextColor: number;
					public static editTextPreferenceStyle: number;
					public static editTextStyle: number;
					public static elevation: number;
					public static elevationOverlayColor: number;
					public static elevationOverlayEnabled: number;
					public static enableAutomaticInitialization: number;
					public static enableCopying: number;
					public static enableLiveVideoUi: number;
					public static enabled: number;
					public static endIconCheckable: number;
					public static endIconContentDescription: number;
					public static endIconDrawable: number;
					public static endIconMode: number;
					public static endIconTint: number;
					public static endIconTintMode: number;
					public static enforceMaterialTheme: number;
					public static enforceTextAppearance: number;
					public static ensureMinTouchTargetSize: number;
					public static enterAnim: number;
					public static entries: number;
					public static entryValues: number;
					public static errorContentDescription: number;
					public static errorEnabled: number;
					public static errorIconDrawable: number;
					public static errorIconTint: number;
					public static errorIconTintMode: number;
					public static errorTextAppearance: number;
					public static errorTextColor: number;
					public static exitAnim: number;
					public static expandActivityOverflowButtonDrawable: number;
					public static expanded: number;
					public static expandedTitleGravity: number;
					public static expandedTitleMargin: number;
					public static expandedTitleMarginBottom: number;
					public static expandedTitleMarginEnd: number;
					public static expandedTitleMarginStart: number;
					public static expandedTitleMarginTop: number;
					public static expandedTitleTextAppearance: number;
					public static extendMotionSpec: number;
					public static extendedFloatingActionButtonStyle: number;
					public static fabAlignmentMode: number;
					public static fabAnimationMode: number;
					public static fabCradleMargin: number;
					public static fabCradleRoundedCornerRadius: number;
					public static fabCradleVerticalOffset: number;
					public static fabCustomSize: number;
					public static fabSize: number;
					public static fab_colorDisabled: number;
					public static fab_colorNormal: number;
					public static fab_colorPressed: number;
					public static fab_colorRipple: number;
					public static fab_elevationCompat: number;
					public static fab_hideAnimation: number;
					public static fab_label: number;
					public static fab_progress: number;
					public static fab_progress_backgroundColor: number;
					public static fab_progress_color: number;
					public static fab_progress_indeterminate: number;
					public static fab_progress_max: number;
					public static fab_progress_showBackground: number;
					public static fab_shadowColor: number;
					public static fab_shadowRadius: number;
					public static fab_shadowXOffset: number;
					public static fab_shadowYOffset: number;
					public static fab_showAnimation: number;
					public static fab_showShadow: number;
					public static fab_size: number;
					public static fastScrollAutoHide: number;
					public static fastScrollAutoHideDelay: number;
					public static fastScrollEnableThumbInactiveColor: number;
					public static fastScrollEnabled: number;
					public static fastScrollFABHide: number;
					public static fastScrollHorizontalThumbDrawable: number;
					public static fastScrollHorizontalTrackDrawable: number;
					public static fastScrollPopupBackgroundSize: number;
					public static fastScrollPopupBgColor: number;
					public static fastScrollPopupPosition: number;
					public static fastScrollPopupTextColor: number;
					public static fastScrollPopupTextSize: number;
					public static fastScrollThumbColor: number;
					public static fastScrollThumbEnabled: number;
					public static fastScrollThumbInactiveColor: number;
					public static fastScrollTrackColor: number;
					public static fastScrollVerticalThumbDrawable: number;
					public static fastScrollVerticalTrackDrawable: number;
					public static firstBaselineToTopHeight: number;
					public static floatingActionButtonStyle: number;
					public static flow_firstHorizontalBias: number;
					public static flow_firstHorizontalStyle: number;
					public static flow_firstVerticalBias: number;
					public static flow_firstVerticalStyle: number;
					public static flow_horizontalAlign: number;
					public static flow_horizontalBias: number;
					public static flow_horizontalGap: number;
					public static flow_horizontalStyle: number;
					public static flow_lastHorizontalBias: number;
					public static flow_lastHorizontalStyle: number;
					public static flow_lastVerticalBias: number;
					public static flow_lastVerticalStyle: number;
					public static flow_maxElementsWrap: number;
					public static flow_padding: number;
					public static flow_verticalAlign: number;
					public static flow_verticalBias: number;
					public static flow_verticalGap: number;
					public static flow_verticalStyle: number;
					public static flow_wrapMode: number;
					public static font: number;
					public static fontFamily: number;
					public static fontProviderAuthority: number;
					public static fontProviderCerts: number;
					public static fontProviderFetchStrategy: number;
					public static fontProviderFetchTimeout: number;
					public static fontProviderPackage: number;
					public static fontProviderQuery: number;
					public static fontSize: number;
					public static fontStyle: number;
					public static fontVariationSettings: number;
					public static fontWeight: number;
					public static foregroundInsidePadding: number;
					public static fragment: number;
					public static framePosition: number;
					public static freezesAnimation: number;
					public static gapBetweenBars: number;
					public static gestureInsetBottomIgnored: number;
					public static gifSource: number;
					public static goIcon: number;
					public static graph: number;
					public static growMode: number;
					public static hScroll: number;
					public static haloColor: number;
					public static haloRadius: number;
					public static handleNetworkEvents: number;
					public static headerLayout: number;
					public static height: number;
					public static helperText: number;
					public static helperTextEnabled: number;
					public static helperTextTextAppearance: number;
					public static helperTextTextColor: number;
					public static hideMotionSpec: number;
					public static hideOnContentScroll: number;
					public static hideOnScroll: number;
					public static hintAnimationEnabled: number;
					public static hintEnabled: number;
					public static hintTextAppearance: number;
					public static hintTextColor: number;
					public static homeAsUpIndicator: number;
					public static homeLayout: number;
					public static horizontalOffset: number;
					public static hoveredFocusedTranslationZ: number;
					public static icon: number;
					public static iconEndPadding: number;
					public static iconGravity: number;
					public static iconPadding: number;
					public static iconSize: number;
					public static iconSpaceReserved: number;
					public static iconStartPadding: number;
					public static iconTint: number;
					public static iconTintMode: number;
					public static iconifiedByDefault: number;
					public static imageButtonStyle: number;
					public static indeterminateProgressStyle: number;
					public static indicatorColor: number;
					public static indicatorColors: number;
					public static indicatorCornerRadius: number;
					public static indicatorType: number;
					public static indicatorWidth: number;
					public static initialActivityCount: number;
					public static initialExpandedChildrenCount: number;
					public static insetForeground: number;
					public static inverse: number;
					public static isLightTheme: number;
					public static isMaterialTheme: number;
					public static isOpaque: number;
					public static isPreferenceVisible: number;
					public static itemBackground: number;
					public static itemFillColor: number;
					public static itemHorizontalPadding: number;
					public static itemHorizontalTranslationEnabled: number;
					public static itemIconPadding: number;
					public static itemIconSize: number;
					public static itemIconTint: number;
					public static itemMaxLines: number;
					public static itemPadding: number;
					public static itemRippleColor: number;
					public static itemShapeAppearance: number;
					public static itemShapeAppearanceOverlay: number;
					public static itemShapeFillColor: number;
					public static itemShapeInsetBottom: number;
					public static itemShapeInsetEnd: number;
					public static itemShapeInsetStart: number;
					public static itemShapeInsetTop: number;
					public static itemSpacing: number;
					public static itemStrokeColor: number;
					public static itemStrokeWidth: number;
					public static itemTextAppearance: number;
					public static itemTextAppearanceActive: number;
					public static itemTextAppearanceInactive: number;
					public static itemTextColor: number;
					public static item_checkCircle_backgroundColor: number;
					public static item_checkCircle_borderColor: number;
					public static item_placeholder: number;
					public static key: number;
					public static keyPositionType: number;
					public static keylines: number;
					public static labelBehavior: number;
					public static labelStyle: number;
					public static labelVisibilityMode: number;
					public static lastBaselineToBottomHeight: number;
					public static launchSingleTop: number;
					public static layout: number;
					public static layoutDescription: number;
					public static layoutDuringTransition: number;
					public static layoutManager: number;
					public static layout_anchor: number;
					public static layout_anchorGravity: number;
					public static layout_behavior: number;
					public static layout_collapseMode: number;
					public static layout_collapseParallaxMultiplier: number;
					public static layout_constrainedHeight: number;
					public static layout_constrainedWidth: number;
					public static layout_constraintBaseline_creator: number;
					public static layout_constraintBaseline_toBaselineOf: number;
					public static layout_constraintBottom_creator: number;
					public static layout_constraintBottom_toBottomOf: number;
					public static layout_constraintBottom_toTopOf: number;
					public static layout_constraintCircle: number;
					public static layout_constraintCircleAngle: number;
					public static layout_constraintCircleRadius: number;
					public static layout_constraintDimensionRatio: number;
					public static layout_constraintEnd_toEndOf: number;
					public static layout_constraintEnd_toStartOf: number;
					public static layout_constraintGuide_begin: number;
					public static layout_constraintGuide_end: number;
					public static layout_constraintGuide_percent: number;
					public static layout_constraintHeight_default: number;
					public static layout_constraintHeight_max: number;
					public static layout_constraintHeight_min: number;
					public static layout_constraintHeight_percent: number;
					public static layout_constraintHorizontal_bias: number;
					public static layout_constraintHorizontal_chainStyle: number;
					public static layout_constraintHorizontal_weight: number;
					public static layout_constraintLeft_creator: number;
					public static layout_constraintLeft_toLeftOf: number;
					public static layout_constraintLeft_toRightOf: number;
					public static layout_constraintRight_creator: number;
					public static layout_constraintRight_toLeftOf: number;
					public static layout_constraintRight_toRightOf: number;
					public static layout_constraintStart_toEndOf: number;
					public static layout_constraintStart_toStartOf: number;
					public static layout_constraintTag: number;
					public static layout_constraintTop_creator: number;
					public static layout_constraintTop_toBottomOf: number;
					public static layout_constraintTop_toTopOf: number;
					public static layout_constraintVertical_bias: number;
					public static layout_constraintVertical_chainStyle: number;
					public static layout_constraintVertical_weight: number;
					public static layout_constraintWidth_default: number;
					public static layout_constraintWidth_max: number;
					public static layout_constraintWidth_min: number;
					public static layout_constraintWidth_percent: number;
					public static layout_dodgeInsetEdges: number;
					public static layout_editor_absoluteX: number;
					public static layout_editor_absoluteY: number;
					public static layout_goneMarginBottom: number;
					public static layout_goneMarginEnd: number;
					public static layout_goneMarginLeft: number;
					public static layout_goneMarginRight: number;
					public static layout_goneMarginStart: number;
					public static layout_goneMarginTop: number;
					public static layout_insetEdge: number;
					public static layout_keyline: number;
					public static layout_optimizationLevel: number;
					public static layout_scrollFlags: number;
					public static layout_scrollInterpolator: number;
					public static leak_canary_plus_color: number;
					public static leftIcon: number;
					public static leftIconTint: number;
					public static leftIconTintMode: number;
					public static liftOnScroll: number;
					public static liftOnScrollTargetViewId: number;
					public static limitBoundsTo: number;
					public static lineHeight: number;
					public static lineSpacing: number;
					public static linearSeamless: number;
					public static listChoiceBackgroundIndicator: number;
					public static listChoiceIndicatorMultipleAnimated: number;
					public static listChoiceIndicatorSingleAnimated: number;
					public static listDividerAlertDialog: number;
					public static listItemLayout: number;
					public static listLayout: number;
					public static listMenuViewStyle: number;
					public static listPopupWindowStyle: number;
					public static listPreferredItemHeight: number;
					public static listPreferredItemHeightLarge: number;
					public static listPreferredItemHeightSmall: number;
					public static listPreferredItemPaddingEnd: number;
					public static listPreferredItemPaddingLeft: number;
					public static listPreferredItemPaddingRight: number;
					public static listPreferredItemPaddingStart: number;
					public static logo: number;
					public static logoDescription: number;
					public static loopCount: number;
					public static materialAlertDialogBodyTextStyle: number;
					public static materialAlertDialogTheme: number;
					public static materialAlertDialogTitleIconStyle: number;
					public static materialAlertDialogTitlePanelStyle: number;
					public static materialAlertDialogTitleTextStyle: number;
					public static materialButtonOutlinedStyle: number;
					public static materialButtonStyle: number;
					public static materialButtonToggleGroupStyle: number;
					public static materialCalendarDay: number;
					public static materialCalendarFullscreenTheme: number;
					public static materialCalendarHeaderConfirmButton: number;
					public static materialCalendarHeaderDivider: number;
					public static materialCalendarHeaderLayout: number;
					public static materialCalendarHeaderSelection: number;
					public static materialCalendarHeaderTitle: number;
					public static materialCalendarHeaderToggleButton: number;
					public static materialCalendarStyle: number;
					public static materialCalendarTheme: number;
					public static materialCardViewStyle: number;
					public static materialCircleRadius: number;
					public static materialThemeOverlay: number;
					public static materialTimePickerTheme: number;
					public static maxAcceleration: number;
					public static maxActionInlineWidth: number;
					public static maxButtonHeight: number;
					public static maxCharacterCount: number;
					public static maxHeight: number;
					public static maxImageSize: number;
					public static maxLines: number;
					public static maxVelocity: number;
					public static maxWidth: number;
					public static measureWithLargestChild: number;
					public static menu: number;
					public static menuIconColor: number;
					public static menu_animationDelayPerItem: number;
					public static menu_backgroundColor: number;
					public static menu_buttonSpacing: number;
					public static menu_buttonToggleAnimation: number;
					public static menu_colorNormal: number;
					public static menu_colorPressed: number;
					public static menu_colorRipple: number;
					public static menu_fab_hide_animation: number;
					public static menu_fab_label: number;
					public static menu_fab_show_animation: number;
					public static menu_fab_size: number;
					public static menu_icon: number;
					public static menu_labels_colorNormal: number;
					public static menu_labels_colorPressed: number;
					public static menu_labels_colorRipple: number;
					public static menu_labels_cornerRadius: number;
					public static menu_labels_customFont: number;
					public static menu_labels_ellipsize: number;
					public static menu_labels_hideAnimation: number;
					public static menu_labels_margin: number;
					public static menu_labels_maxLines: number;
					public static menu_labels_padding: number;
					public static menu_labels_paddingBottom: number;
					public static menu_labels_paddingLeft: number;
					public static menu_labels_paddingRight: number;
					public static menu_labels_paddingTop: number;
					public static menu_labels_position: number;
					public static menu_labels_showAnimation: number;
					public static menu_labels_showShadow: number;
					public static menu_labels_singleLine: number;
					public static menu_labels_style: number;
					public static menu_labels_textColor: number;
					public static menu_labels_textSize: number;
					public static menu_openDirection: number;
					public static menu_shadowColor: number;
					public static menu_shadowRadius: number;
					public static menu_shadowXOffset: number;
					public static menu_shadowYOffset: number;
					public static menu_showShadow: number;
					public static metaButtonBarButtonStyle: number;
					public static metaButtonBarStyle: number;
					public static mimeType: number;
					public static min: number;
					public static minHeight: number;
					public static minHideDelay: number;
					public static minSeparation: number;
					public static minTouchTargetSize: number;
					public static minWidth: number;
					public static mock_diagonalsColor: number;
					public static mock_label: number;
					public static mock_labelBackgroundColor: number;
					public static mock_labelColor: number;
					public static mock_showDiagonals: number;
					public static mock_showLabel: number;
					public static motionDebug: number;
					public static motionInterpolator: number;
					public static motionPathRotate: number;
					public static motionProgress: number;
					public static motionStagger: number;
					public static motionTarget: number;
					public static motion_postLayoutCollision: number;
					public static motion_triggerOnCollision: number;
					public static moveWhenScrollAtTop: number;
					public static multiChoiceItemLayout: number;
					public static navGraph: number;
					public static navigationContentDescription: number;
					public static navigationIcon: number;
					public static navigationMode: number;
					public static navigationViewStyle: number;
					public static negativeButtonText: number;
					public static nestedScrollFlags: number;
					public static nullable: number;
					public static number: number;
					public static numericModifiers: number;
					public static onCross: number;
					public static onHide: number;
					public static onNegativeCross: number;
					public static onPositiveCross: number;
					public static onShow: number;
					public static onTouchUp: number;
					public static order: number;
					public static orderingFromXml: number;
					public static overlapAnchor: number;
					public static overlay: number;
					public static paddingBottomNoButtons: number;
					public static paddingBottomSystemWindowInsets: number;
					public static paddingEnd: number;
					public static paddingLeftSystemWindowInsets: number;
					public static paddingRightSystemWindowInsets: number;
					public static paddingStart: number;
					public static paddingTopNoTitle: number;
					public static page_bg: number;
					public static panelBackground: number;
					public static panelMenuListTheme: number;
					public static panelMenuListWidth: number;
					public static passwordToggleContentDescription: number;
					public static passwordToggleDrawable: number;
					public static passwordToggleEnabled: number;
					public static passwordToggleTint: number;
					public static passwordToggleTintMode: number;
					public static pathMotionArc: number;
					public static path_percent: number;
					public static percentHeight: number;
					public static percentWidth: number;
					public static percentX: number;
					public static percentY: number;
					public static perpendicularPath_percent: number;
					public static persistent: number;
					public static pivotAnchor: number;
					public static pivotX: number;
					public static pivotY: number;
					public static placeholderText: number;
					public static placeholderTextAppearance: number;
					public static placeholderTextColor: number;
					public static placeholder_emptyVisibility: number;
					public static popEnterAnim: number;
					public static popExitAnim: number;
					public static popUpTo: number;
					public static popUpToInclusive: number;
					public static popupMenuBackground: number;
					public static popupMenuStyle: number;
					public static popupTheme: number;
					public static popupWindowStyle: number;
					public static positiveButtonText: number;
					public static preferenceCategoryStyle: number;
					public static preferenceCategoryTitleTextAppearance: number;
					public static preferenceFragmentCompatStyle: number;
					public static preferenceFragmentListStyle: number;
					public static preferenceFragmentStyle: number;
					public static preferenceInformationStyle: number;
					public static preferenceScreenStyle: number;
					public static preferenceStyle: number;
					public static preferenceTheme: number;
					public static prefixText: number;
					public static prefixTextAppearance: number;
					public static prefixTextColor: number;
					public static preserveIconSpacing: number;
					public static pressedTranslationZ: number;
					public static preview_bottomToolbar_apply_textColor: number;
					public static preview_bottomToolbar_back_textColor: number;
					public static progress: number;
					public static progressBarPadding: number;
					public static progressBarStyle: number;
					public static progressIndicatorStyle: number;
					public static queryBackground: number;
					public static queryHint: number;
					public static radioButtonStyle: number;
					public static rangeFillColor: number;
					public static ratingBarStyle: number;
					public static ratingBarStyleIndicator: number;
					public static ratingBarStyleSmall: number;
					public static recyclerViewStyle: number;
					public static region_heightLessThan: number;
					public static region_heightMoreThan: number;
					public static region_widthLessThan: number;
					public static region_widthMoreThan: number;
					public static reverseLayout: number;
					public static rightIcon: number;
					public static rightIconTint: number;
					public static rightIconTintMode: number;
					public static rippleColor: number;
					public static round: number;
					public static roundPercent: number;
					public static saturation: number;
					public static scrimAnimationDuration: number;
					public static scrimBackground: number;
					public static scrimVisibleHeightTrigger: number;
					public static scroll: number;
					public static scrollRotation: number;
					public static scrollThumb: number;
					public static scrollThumbColor: number;
					public static scrollThumbRotation: number;
					public static scrollThumbTint: number;
					public static scrollThumbTintMode: number;
					public static searchHintIcon: number;
					public static searchIcon: number;
					public static searchViewStyle: number;
					public static seekBarIncrement: number;
					public static seekBarPreferenceStyle: number;
					public static seekBarStyle: number;
					public static selectable: number;
					public static selectableItemBackground: number;
					public static selectableItemBackgroundBorderless: number;
					public static selectionRequired: number;
					public static selectorSize: number;
					public static shapeAppearance: number;
					public static shapeAppearanceLargeComponent: number;
					public static shapeAppearanceMediumComponent: number;
					public static shapeAppearanceOverlay: number;
					public static shapeAppearanceSmallComponent: number;
					public static shouldDisableView: number;
					public static showAsAction: number;
					public static showDividers: number;
					public static showFullScreenButton: number;
					public static showMotionSpec: number;
					public static showPaths: number;
					public static showSeekBar: number;
					public static showSeekBarValue: number;
					public static showText: number;
					public static showTitle: number;
					public static showVideoCurrentTime: number;
					public static showVideoDuration: number;
					public static showYouTubeButton: number;
					public static shrinkMotionSpec: number;
					public static singleChoiceItemLayout: number;
					public static singleLine: number;
					public static singleLineTitle: number;
					public static singleSelection: number;
					public static sizePercent: number;
					public static sliderStyle: number;
					public static snackbarButtonStyle: number;
					public static snackbarStyle: number;
					public static snackbarTextViewStyle: number;
					public static spanCount: number;
					public static spinBars: number;
					public static spinnerDropDownItemStyle: number;
					public static spinnerStyle: number;
					public static splitTrack: number;
					public static srcCompat: number;
					public static stackFromEnd: number;
					public static staggered: number;
					public static startDestination: number;
					public static startIconCheckable: number;
					public static startIconContentDescription: number;
					public static startIconDrawable: number;
					public static startIconTint: number;
					public static startIconTintMode: number;
					public static state_above_anchor: number;
					public static state_collapsed: number;
					public static state_collapsible: number;
					public static state_dragged: number;
					public static state_liftable: number;
					public static state_lifted: number;
					public static statusBarBackground: number;
					public static statusBarForeground: number;
					public static statusBarScrim: number;
					public static strokeColor: number;
					public static strokeWidth: number;
					public static subMenuArrow: number;
					public static submitBackground: number;
					public static subtitle: number;
					public static subtitleTextAppearance: number;
					public static subtitleTextColor: number;
					public static subtitleTextStyle: number;
					public static suffixText: number;
					public static suffixTextAppearance: number;
					public static suffixTextColor: number;
					public static suggestionRowLayout: number;
					public static summary: number;
					public static summaryOff: number;
					public static summaryOn: number;
					public static switchMinWidth: number;
					public static switchPadding: number;
					public static switchPreferenceCompatStyle: number;
					public static switchPreferenceStyle: number;
					public static switchStyle: number;
					public static switchTextAppearance: number;
					public static switchTextOff: number;
					public static switchTextOn: number;
					public static tabBackground: number;
					public static tabContentStart: number;
					public static tabGravity: number;
					public static tabIconTint: number;
					public static tabIconTintMode: number;
					public static tabIndicator: number;
					public static tabIndicatorAnimationDuration: number;
					public static tabIndicatorColor: number;
					public static tabIndicatorFullWidth: number;
					public static tabIndicatorGravity: number;
					public static tabIndicatorHeight: number;
					public static tabInlineLabel: number;
					public static tabMaxWidth: number;
					public static tabMinWidth: number;
					public static tabMode: number;
					public static tabPadding: number;
					public static tabPaddingBottom: number;
					public static tabPaddingEnd: number;
					public static tabPaddingStart: number;
					public static tabPaddingTop: number;
					public static tabRippleColor: number;
					public static tabSelectedTextColor: number;
					public static tabStyle: number;
					public static tabTextAppearance: number;
					public static tabTextColor: number;
					public static tabUnboundedRipple: number;
					public static targetId: number;
					public static targetPackage: number;
					public static telltales_tailColor: number;
					public static telltales_tailScale: number;
					public static telltales_velocityMode: number;
					public static text: number;
					public static textAllCaps: number;
					public static textAppearanceBody1: number;
					public static textAppearanceBody2: number;
					public static textAppearanceButton: number;
					public static textAppearanceCaption: number;
					public static textAppearanceHeadline1: number;
					public static textAppearanceHeadline2: number;
					public static textAppearanceHeadline3: number;
					public static textAppearanceHeadline4: number;
					public static textAppearanceHeadline5: number;
					public static textAppearanceHeadline6: number;
					public static textAppearanceLargePopupMenu: number;
					public static textAppearanceLineHeightEnabled: number;
					public static textAppearanceListItem: number;
					public static textAppearanceListItemSecondary: number;
					public static textAppearanceListItemSmall: number;
					public static textAppearanceOverline: number;
					public static textAppearancePopupMenuHeader: number;
					public static textAppearanceSearchResultSubtitle: number;
					public static textAppearanceSearchResultTitle: number;
					public static textAppearanceSmallPopupMenu: number;
					public static textAppearanceSubtitle1: number;
					public static textAppearanceSubtitle2: number;
					public static textColorAlertDialogListItem: number;
					public static textColorSearchUrl: number;
					public static textEndPadding: number;
					public static textInputLayoutFocusedRectEnabled: number;
					public static textInputStyle: number;
					public static textLocale: number;
					public static textStartPadding: number;
					public static theme: number;
					public static themeIsLight: number;
					public static themeLineHeight: number;
					public static themeName: number;
					public static thickness: number;
					public static thumbColor: number;
					public static thumbElevation: number;
					public static thumbRadius: number;
					public static thumbTextPadding: number;
					public static thumbTint: number;
					public static thumbTintMode: number;
					public static tickColor: number;
					public static tickColorActive: number;
					public static tickColorInactive: number;
					public static tickMark: number;
					public static tickMarkTint: number;
					public static tickMarkTintMode: number;
					public static tint: number;
					public static tintMode: number;
					public static title: number;
					public static titleColor: number;
					public static titleEnabled: number;
					public static titleMargin: number;
					public static titleMarginBottom: number;
					public static titleMarginEnd: number;
					public static titleMarginStart: number;
					public static titleMarginTop: number;
					public static titleMargins: number;
					public static titleTextAppearance: number;
					public static titleTextColor: number;
					public static titleTextStyle: number;
					public static toolbar: number;
					public static toolbarId: number;
					public static toolbarNavigationButtonStyle: number;
					public static toolbarStyle: number;
					public static tooltipForegroundColor: number;
					public static tooltipFrameBackground: number;
					public static tooltipStyle: number;
					public static tooltipText: number;
					public static touchAnchorId: number;
					public static touchAnchorSide: number;
					public static touchRegionId: number;
					public static track: number;
					public static trackColor: number;
					public static trackColorActive: number;
					public static trackColorInactive: number;
					public static trackHeight: number;
					public static trackTint: number;
					public static trackTintMode: number;
					public static transitionDisable: number;
					public static transitionEasing: number;
					public static transitionPathRotate: number;
					public static transitionShapeAppearance: number;
					public static triggerId: number;
					public static triggerReceiver: number;
					public static triggerSlack: number;
					public static ttcIndex: number;
					public static ucrop_artv_ratio_title: number;
					public static ucrop_artv_ratio_x: number;
					public static ucrop_artv_ratio_y: number;
					public static ucrop_aspect_ratio_x: number;
					public static ucrop_aspect_ratio_y: number;
					public static ucrop_circle_dimmed_layer: number;
					public static ucrop_dimmed_color: number;
					public static ucrop_frame_color: number;
					public static ucrop_frame_stroke_size: number;
					public static ucrop_grid_color: number;
					public static ucrop_grid_column_count: number;
					public static ucrop_grid_row_count: number;
					public static ucrop_grid_stroke_size: number;
					public static ucrop_show_frame: number;
					public static ucrop_show_grid: number;
					public static ucrop_show_oval_crop_frame: number;
					public static updatesContinuously: number;
					public static uri: number;
					public static useCompatPadding: number;
					public static useMaterialThemeColors: number;
					public static useSimpleSummaryProvider: number;
					public static useWebUi: number;
					public static valueTextColor: number;
					public static values: number;
					public static verticalOffset: number;
					public static videoId: number;
					public static viewInflaterClass: number;
					public static visibilityMode: number;
					public static voiceIcon: number;
					public static warmth: number;
					public static waveDecay: number;
					public static waveOffset: number;
					public static wavePeriod: number;
					public static waveShape: number;
					public static waveVariesBy: number;
					public static widgetLayout: number;
					public static windowActionBar: number;
					public static windowActionBarOverlay: number;
					public static windowActionModeOverlay: number;
					public static windowFixedHeightMajor: number;
					public static windowFixedHeightMinor: number;
					public static windowFixedWidthMajor: number;
					public static windowFixedWidthMinor: number;
					public static windowLightStatusBar: number;
					public static windowMinWidthMajor: number;
					public static windowMinWidthMinor: number;
					public static windowNoTitle: number;
					public static wrapText: number;
					public static yearSelectedStyle: number;
					public static yearStyle: number;
					public static yearTodayStyle: number;
					public constructor();
				}
				export class bool {
					public static class: java.lang.Class<com.xfl.msgbot.R.bool>;
					public static abc_action_bar_embed_tabs: number;
					public static abc_allow_stacked_button_bar: number;
					public static abc_config_actionMenuItemAllCaps: number;
					public static atLeastKitKat: number;
					public static config_materialPreferenceIconSpaceReserved: number;
					public static enable_system_alarm_service_default: number;
					public static enable_system_job_service_default: number;
					public static isTablet: number;
					public static leak_canary_add_dynamic_shortcut: number;
					public static leak_canary_add_launcher_icon: number;
					public static mtrl_btn_textappearance_all_caps: number;
					public static workmanager_test_configuration: number;
					public constructor();
				}
				export class color {
					public static class: java.lang.Class<com.xfl.msgbot.R.color>;
					public static abc_background_cache_hint_selector_material_dark: number;
					public static abc_background_cache_hint_selector_material_light: number;
					public static abc_btn_colored_borderless_text_material: number;
					public static abc_btn_colored_text_material: number;
					public static abc_color_highlight_material: number;
					public static abc_decor_view_status_guard: number;
					public static abc_decor_view_status_guard_light: number;
					public static abc_hint_foreground_material_dark: number;
					public static abc_hint_foreground_material_light: number;
					public static abc_primary_text_disable_only_material_dark: number;
					public static abc_primary_text_disable_only_material_light: number;
					public static abc_primary_text_material_dark: number;
					public static abc_primary_text_material_light: number;
					public static abc_search_url_text: number;
					public static abc_search_url_text_normal: number;
					public static abc_search_url_text_pressed: number;
					public static abc_search_url_text_selected: number;
					public static abc_secondary_text_material_dark: number;
					public static abc_secondary_text_material_light: number;
					public static abc_tint_btn_checkable: number;
					public static abc_tint_default: number;
					public static abc_tint_edittext: number;
					public static abc_tint_seek_thumb: number;
					public static abc_tint_spinner: number;
					public static abc_tint_switch_track: number;
					public static accent_material_dark: number;
					public static accent_material_light: number;
					public static androidx_core_ripple_material_light: number;
					public static androidx_core_secondary_text_default_material_light: number;
					public static ayp_drop_shadow: number;
					public static ayp_item_selected: number;
					public static ayp_menu_icons: number;
					public static ayp_menu_text: number;
					public static ayp_red: number;
					public static background_floating_material_dark: number;
					public static background_floating_material_light: number;
					public static background_material_dark: number;
					public static background_material_light: number;
					public static black_overlay: number;
					public static bright_foreground_disabled_material_dark: number;
					public static bright_foreground_disabled_material_light: number;
					public static bright_foreground_inverse_material_dark: number;
					public static bright_foreground_inverse_material_light: number;
					public static bright_foreground_material_dark: number;
					public static bright_foreground_material_light: number;
					public static browser_actions_bg_grey: number;
					public static browser_actions_divider_color: number;
					public static browser_actions_text_color: number;
					public static browser_actions_title_color: number;
					public static button_material_dark: number;
					public static button_material_light: number;
					public static cardview_dark_background: number;
					public static cardview_light_background: number;
					public static cardview_shadow_end_color: number;
					public static cardview_shadow_start_color: number;
					public static checkbox_themeable_attribute_color: number;
					public static colorAccent: number;
					public static colorPrimary: number;
					public static colorPrimaryDark: number;
					public static design_bottom_navigation_shadow_color: number;
					public static design_box_stroke_color: number;
					public static design_dark_default_color_background: number;
					public static design_dark_default_color_error: number;
					public static design_dark_default_color_on_background: number;
					public static design_dark_default_color_on_error: number;
					public static design_dark_default_color_on_primary: number;
					public static design_dark_default_color_on_secondary: number;
					public static design_dark_default_color_on_surface: number;
					public static design_dark_default_color_primary: number;
					public static design_dark_default_color_primary_dark: number;
					public static design_dark_default_color_primary_variant: number;
					public static design_dark_default_color_secondary: number;
					public static design_dark_default_color_secondary_variant: number;
					public static design_dark_default_color_surface: number;
					public static design_default_color_background: number;
					public static design_default_color_error: number;
					public static design_default_color_on_background: number;
					public static design_default_color_on_error: number;
					public static design_default_color_on_primary: number;
					public static design_default_color_on_secondary: number;
					public static design_default_color_on_surface: number;
					public static design_default_color_primary: number;
					public static design_default_color_primary_dark: number;
					public static design_default_color_primary_variant: number;
					public static design_default_color_secondary: number;
					public static design_default_color_secondary_variant: number;
					public static design_default_color_surface: number;
					public static design_error: number;
					public static design_fab_shadow_end_color: number;
					public static design_fab_shadow_mid_color: number;
					public static design_fab_shadow_start_color: number;
					public static design_fab_stroke_end_inner_color: number;
					public static design_fab_stroke_end_outer_color: number;
					public static design_fab_stroke_top_inner_color: number;
					public static design_fab_stroke_top_outer_color: number;
					public static design_icon_tint: number;
					public static design_snackbar_background_color: number;
					public static dim_foreground_disabled_material_dark: number;
					public static dim_foreground_disabled_material_light: number;
					public static dim_foreground_material_dark: number;
					public static dim_foreground_material_light: number;
					public static dracula_album_dropdown_count_text: number;
					public static dracula_album_dropdown_thumbnail_placeholder: number;
					public static dracula_album_dropdown_title_text: number;
					public static dracula_album_empty_view: number;
					public static dracula_album_popup_bg: number;
					public static dracula_bottom_toolbar_apply: number;
					public static dracula_bottom_toolbar_apply_text: number;
					public static dracula_bottom_toolbar_apply_text_disable: number;
					public static dracula_bottom_toolbar_bg: number;
					public static dracula_bottom_toolbar_preview: number;
					public static dracula_bottom_toolbar_preview_text: number;
					public static dracula_bottom_toolbar_preview_text_disable: number;
					public static dracula_capture: number;
					public static dracula_item_checkCircle_backgroundColor: number;
					public static dracula_item_checkCircle_borderColor: number;
					public static dracula_item_placeholder: number;
					public static dracula_page_bg: number;
					public static dracula_preview_bottom_toolbar_apply: number;
					public static dracula_preview_bottom_toolbar_apply_text: number;
					public static dracula_preview_bottom_toolbar_apply_text_disable: number;
					public static dracula_preview_bottom_toolbar_back_text: number;
					public static dracula_primary: number;
					public static dracula_primary_dark: number;
					public static error_color_material_dark: number;
					public static error_color_material_light: number;
					public static foreground_material_dark: number;
					public static foreground_material_light: number;
					public static highlighted_text_material_dark: number;
					public static highlighted_text_material_light: number;
					public static leak_canary_background_color: number;
					public static leak_canary_bottom_menu: number;
					public static leak_canary_class_name: number;
					public static leak_canary_extra: number;
					public static leak_canary_gray: number;
					public static leak_canary_gray_darkest: number;
					public static leak_canary_gray_darkest_25p: number;
					public static leak_canary_gray_darkest_40p: number;
					public static leak_canary_gray_light: number;
					public static leak_canary_heap_app: number;
					public static leak_canary_heap_boolean_array: number;
					public static leak_canary_heap_byte_array: number;
					public static leak_canary_heap_char_array: number;
					public static leak_canary_heap_class_dump: number;
					public static leak_canary_heap_double_array: number;
					public static leak_canary_heap_float_array: number;
					public static leak_canary_heap_hprof_string: number;
					public static leak_canary_heap_image: number;
					public static leak_canary_heap_instance: number;
					public static leak_canary_heap_instance_string: number;
					public static leak_canary_heap_int_array: number;
					public static leak_canary_heap_load_class: number;
					public static leak_canary_heap_long_array: number;
					public static leak_canary_heap_object_array: number;
					public static leak_canary_heap_other: number;
					public static leak_canary_heap_short_array: number;
					public static leak_canary_heap_stack_trace: number;
					public static leak_canary_heap_zygote: number;
					public static leak_canary_help: number;
					public static leak_canary_leak: number;
					public static leak_canary_reference: number;
					public static leak_canary_white: number;
					public static leak_canary_yellow: number;
					public static leak_canary_yellow_15p: number;
					public static material_blue_grey_800: number;
					public static material_blue_grey_900: number;
					public static material_blue_grey_950: number;
					public static material_deep_teal_200: number;
					public static material_deep_teal_500: number;
					public static material_grey_100: number;
					public static material_grey_300: number;
					public static material_grey_50: number;
					public static material_grey_600: number;
					public static material_grey_800: number;
					public static material_grey_850: number;
					public static material_grey_900: number;
					public static material_on_background_disabled: number;
					public static material_on_background_emphasis_high_type: number;
					public static material_on_background_emphasis_medium: number;
					public static material_on_primary_disabled: number;
					public static material_on_primary_emphasis_high_type: number;
					public static material_on_primary_emphasis_medium: number;
					public static material_on_surface_disabled: number;
					public static material_on_surface_emphasis_high_type: number;
					public static material_on_surface_emphasis_medium: number;
					public static material_on_surface_stroke: number;
					public static material_slider_active_tick_marks_color: number;
					public static material_slider_active_track_color: number;
					public static material_slider_halo_color: number;
					public static material_slider_inactive_tick_marks_color: number;
					public static material_slider_inactive_track_color: number;
					public static material_slider_thumb_color: number;
					public static material_timepicker_button_background: number;
					public static material_timepicker_button_stroke: number;
					public static material_timepicker_clockface: number;
					public static material_timepicker_modebutton_tint: number;
					public static md_amber_100: number;
					public static md_amber_200: number;
					public static md_amber_300: number;
					public static md_amber_400: number;
					public static md_amber_50: number;
					public static md_amber_500: number;
					public static md_amber_600: number;
					public static md_amber_700: number;
					public static md_amber_800: number;
					public static md_amber_900: number;
					public static md_amber_A100: number;
					public static md_amber_A200: number;
					public static md_amber_A400: number;
					public static md_amber_A700: number;
					public static md_black_1000: number;
					public static md_blue_100: number;
					public static md_blue_200: number;
					public static md_blue_300: number;
					public static md_blue_400: number;
					public static md_blue_50: number;
					public static md_blue_500: number;
					public static md_blue_600: number;
					public static md_blue_700: number;
					public static md_blue_800: number;
					public static md_blue_900: number;
					public static md_blue_A100: number;
					public static md_blue_A200: number;
					public static md_blue_A400: number;
					public static md_blue_A700: number;
					public static md_blue_grey_100: number;
					public static md_blue_grey_200: number;
					public static md_blue_grey_300: number;
					public static md_blue_grey_400: number;
					public static md_blue_grey_50: number;
					public static md_blue_grey_500: number;
					public static md_blue_grey_600: number;
					public static md_blue_grey_700: number;
					public static md_blue_grey_800: number;
					public static md_blue_grey_900: number;
					public static md_brown_100: number;
					public static md_brown_200: number;
					public static md_brown_300: number;
					public static md_brown_400: number;
					public static md_brown_50: number;
					public static md_brown_500: number;
					public static md_brown_600: number;
					public static md_brown_700: number;
					public static md_brown_800: number;
					public static md_brown_900: number;
					public static md_cyan_100: number;
					public static md_cyan_200: number;
					public static md_cyan_300: number;
					public static md_cyan_400: number;
					public static md_cyan_50: number;
					public static md_cyan_500: number;
					public static md_cyan_600: number;
					public static md_cyan_700: number;
					public static md_cyan_800: number;
					public static md_cyan_900: number;
					public static md_cyan_A100: number;
					public static md_cyan_A200: number;
					public static md_cyan_A400: number;
					public static md_cyan_A700: number;
					public static md_deep_orange_100: number;
					public static md_deep_orange_200: number;
					public static md_deep_orange_300: number;
					public static md_deep_orange_400: number;
					public static md_deep_orange_50: number;
					public static md_deep_orange_500: number;
					public static md_deep_orange_600: number;
					public static md_deep_orange_700: number;
					public static md_deep_orange_800: number;
					public static md_deep_orange_900: number;
					public static md_deep_orange_A100: number;
					public static md_deep_orange_A200: number;
					public static md_deep_orange_A400: number;
					public static md_deep_orange_A700: number;
					public static md_deep_purple_100: number;
					public static md_deep_purple_200: number;
					public static md_deep_purple_300: number;
					public static md_deep_purple_400: number;
					public static md_deep_purple_50: number;
					public static md_deep_purple_500: number;
					public static md_deep_purple_600: number;
					public static md_deep_purple_700: number;
					public static md_deep_purple_800: number;
					public static md_deep_purple_900: number;
					public static md_deep_purple_A100: number;
					public static md_deep_purple_A200: number;
					public static md_deep_purple_A400: number;
					public static md_deep_purple_A700: number;
					public static md_green_100: number;
					public static md_green_200: number;
					public static md_green_300: number;
					public static md_green_400: number;
					public static md_green_50: number;
					public static md_green_500: number;
					public static md_green_600: number;
					public static md_green_700: number;
					public static md_green_800: number;
					public static md_green_900: number;
					public static md_green_A100: number;
					public static md_green_A200: number;
					public static md_green_A400: number;
					public static md_green_A700: number;
					public static md_grey_100: number;
					public static md_grey_200: number;
					public static md_grey_300: number;
					public static md_grey_400: number;
					public static md_grey_50: number;
					public static md_grey_500: number;
					public static md_grey_600: number;
					public static md_grey_700: number;
					public static md_grey_800: number;
					public static md_grey_900: number;
					public static md_indigo_100: number;
					public static md_indigo_200: number;
					public static md_indigo_300: number;
					public static md_indigo_400: number;
					public static md_indigo_50: number;
					public static md_indigo_500: number;
					public static md_indigo_600: number;
					public static md_indigo_700: number;
					public static md_indigo_800: number;
					public static md_indigo_900: number;
					public static md_indigo_A100: number;
					public static md_indigo_A200: number;
					public static md_indigo_A400: number;
					public static md_indigo_A700: number;
					public static md_light_blue_100: number;
					public static md_light_blue_200: number;
					public static md_light_blue_300: number;
					public static md_light_blue_400: number;
					public static md_light_blue_50: number;
					public static md_light_blue_500: number;
					public static md_light_blue_600: number;
					public static md_light_blue_700: number;
					public static md_light_blue_800: number;
					public static md_light_blue_900: number;
					public static md_light_blue_A100: number;
					public static md_light_blue_A200: number;
					public static md_light_blue_A400: number;
					public static md_light_blue_A700: number;
					public static md_light_green_100: number;
					public static md_light_green_200: number;
					public static md_light_green_300: number;
					public static md_light_green_400: number;
					public static md_light_green_50: number;
					public static md_light_green_500: number;
					public static md_light_green_600: number;
					public static md_light_green_700: number;
					public static md_light_green_800: number;
					public static md_light_green_900: number;
					public static md_light_green_A100: number;
					public static md_light_green_A200: number;
					public static md_light_green_A400: number;
					public static md_light_green_A700: number;
					public static md_lime_100: number;
					public static md_lime_200: number;
					public static md_lime_300: number;
					public static md_lime_400: number;
					public static md_lime_50: number;
					public static md_lime_500: number;
					public static md_lime_600: number;
					public static md_lime_700: number;
					public static md_lime_800: number;
					public static md_lime_900: number;
					public static md_lime_A100: number;
					public static md_lime_A200: number;
					public static md_lime_A400: number;
					public static md_lime_A700: number;
					public static md_orange_100: number;
					public static md_orange_200: number;
					public static md_orange_300: number;
					public static md_orange_400: number;
					public static md_orange_50: number;
					public static md_orange_500: number;
					public static md_orange_600: number;
					public static md_orange_700: number;
					public static md_orange_800: number;
					public static md_orange_900: number;
					public static md_orange_A100: number;
					public static md_orange_A200: number;
					public static md_orange_A400: number;
					public static md_orange_A700: number;
					public static md_pink_100: number;
					public static md_pink_200: number;
					public static md_pink_300: number;
					public static md_pink_400: number;
					public static md_pink_50: number;
					public static md_pink_500: number;
					public static md_pink_600: number;
					public static md_pink_700: number;
					public static md_pink_800: number;
					public static md_pink_900: number;
					public static md_pink_A100: number;
					public static md_pink_A200: number;
					public static md_pink_A400: number;
					public static md_pink_A700: number;
					public static md_purple_100: number;
					public static md_purple_200: number;
					public static md_purple_300: number;
					public static md_purple_400: number;
					public static md_purple_50: number;
					public static md_purple_500: number;
					public static md_purple_600: number;
					public static md_purple_700: number;
					public static md_purple_800: number;
					public static md_purple_900: number;
					public static md_purple_A100: number;
					public static md_purple_A200: number;
					public static md_purple_A400: number;
					public static md_purple_A700: number;
					public static md_red_100: number;
					public static md_red_200: number;
					public static md_red_300: number;
					public static md_red_400: number;
					public static md_red_50: number;
					public static md_red_500: number;
					public static md_red_600: number;
					public static md_red_700: number;
					public static md_red_800: number;
					public static md_red_900: number;
					public static md_red_A100: number;
					public static md_red_A200: number;
					public static md_red_A400: number;
					public static md_red_A700: number;
					public static md_teal_100: number;
					public static md_teal_200: number;
					public static md_teal_300: number;
					public static md_teal_400: number;
					public static md_teal_50: number;
					public static md_teal_500: number;
					public static md_teal_600: number;
					public static md_teal_700: number;
					public static md_teal_800: number;
					public static md_teal_900: number;
					public static md_teal_A100: number;
					public static md_teal_A200: number;
					public static md_teal_A400: number;
					public static md_teal_A700: number;
					public static md_transparent_1000: number;
					public static md_white_1000: number;
					public static md_yellow_100: number;
					public static md_yellow_200: number;
					public static md_yellow_300: number;
					public static md_yellow_400: number;
					public static md_yellow_50: number;
					public static md_yellow_500: number;
					public static md_yellow_600: number;
					public static md_yellow_700: number;
					public static md_yellow_800: number;
					public static md_yellow_900: number;
					public static md_yellow_A100: number;
					public static md_yellow_A200: number;
					public static md_yellow_A400: number;
					public static md_yellow_A700: number;
					public static mtrl_bottom_nav_colored_item_tint: number;
					public static mtrl_bottom_nav_colored_ripple_color: number;
					public static mtrl_bottom_nav_item_tint: number;
					public static mtrl_bottom_nav_ripple_color: number;
					public static mtrl_btn_bg_color_selector: number;
					public static mtrl_btn_ripple_color: number;
					public static mtrl_btn_stroke_color_selector: number;
					public static mtrl_btn_text_btn_bg_color_selector: number;
					public static mtrl_btn_text_btn_ripple_color: number;
					public static mtrl_btn_text_color_disabled: number;
					public static mtrl_btn_text_color_selector: number;
					public static mtrl_btn_transparent_bg_color: number;
					public static mtrl_calendar_item_stroke_color: number;
					public static mtrl_calendar_selected_range: number;
					public static mtrl_card_view_foreground: number;
					public static mtrl_card_view_ripple: number;
					public static mtrl_chip_background_color: number;
					public static mtrl_chip_close_icon_tint: number;
					public static mtrl_chip_ripple_color: number;
					public static mtrl_chip_surface_color: number;
					public static mtrl_chip_text_color: number;
					public static mtrl_choice_chip_background_color: number;
					public static mtrl_choice_chip_ripple_color: number;
					public static mtrl_choice_chip_text_color: number;
					public static mtrl_error: number;
					public static mtrl_fab_bg_color_selector: number;
					public static mtrl_fab_icon_text_color_selector: number;
					public static mtrl_fab_ripple_color: number;
					public static mtrl_filled_background_color: number;
					public static mtrl_filled_icon_tint: number;
					public static mtrl_filled_stroke_color: number;
					public static mtrl_indicator_text_color: number;
					public static mtrl_navigation_item_background_color: number;
					public static mtrl_navigation_item_icon_tint: number;
					public static mtrl_navigation_item_text_color: number;
					public static mtrl_on_primary_text_btn_text_color_selector: number;
					public static mtrl_outlined_icon_tint: number;
					public static mtrl_outlined_stroke_color: number;
					public static mtrl_popupmenu_overlay_color: number;
					public static mtrl_scrim_color: number;
					public static mtrl_tabs_colored_ripple_color: number;
					public static mtrl_tabs_icon_color_selector: number;
					public static mtrl_tabs_icon_color_selector_colored: number;
					public static mtrl_tabs_legacy_text_color_selector: number;
					public static mtrl_tabs_ripple_color: number;
					public static mtrl_text_btn_text_color_selector: number;
					public static mtrl_textinput_default_box_stroke_color: number;
					public static mtrl_textinput_disabled_color: number;
					public static mtrl_textinput_filled_box_default_background_color: number;
					public static mtrl_textinput_focused_box_stroke_color: number;
					public static mtrl_textinput_hovered_box_stroke_color: number;
					public static notification_action_color_filter: number;
					public static notification_icon_bg_color: number;
					public static notification_material_background_media_default_color: number;
					public static outline_color: number;
					public static preference_fallback_accent_color: number;
					public static preference_fallback_accent_color_custom: number;
					public static preview_bottom_size: number;
					public static preview_bottom_toolbar_bg: number;
					public static primary_dark_material_dark: number;
					public static primary_dark_material_light: number;
					public static primary_material_dark: number;
					public static primary_material_light: number;
					public static primary_text_default_material_dark: number;
					public static primary_text_default_material_light: number;
					public static primary_text_disabled_material_dark: number;
					public static primary_text_disabled_material_light: number;
					public static radiobutton_themeable_attribute_color: number;
					public static ripple_material_dark: number;
					public static ripple_material_light: number;
					public static secondary_text_default_material_dark: number;
					public static secondary_text_default_material_light: number;
					public static secondary_text_disabled_material_dark: number;
					public static secondary_text_disabled_material_light: number;
					public static switch_thumb_disabled_material_dark: number;
					public static switch_thumb_disabled_material_light: number;
					public static switch_thumb_material_dark: number;
					public static switch_thumb_material_light: number;
					public static switch_thumb_normal_material_dark: number;
					public static switch_thumb_normal_material_light: number;
					public static test_mtrl_calendar_day: number;
					public static test_mtrl_calendar_day_selected: number;
					public static tooltip_background_dark: number;
					public static tooltip_background_light: number;
					public static ucrop_color_active_aspect_ratio: number;
					public static ucrop_color_active_controls_color: number;
					public static ucrop_color_black: number;
					public static ucrop_color_blaze_orange: number;
					public static ucrop_color_crop_background: number;
					public static ucrop_color_default_crop_frame: number;
					public static ucrop_color_default_crop_grid: number;
					public static ucrop_color_default_dimmed: number;
					public static ucrop_color_default_logo: number;
					public static ucrop_color_ebony_clay: number;
					public static ucrop_color_heather: number;
					public static ucrop_color_inactive_aspect_ratio: number;
					public static ucrop_color_inactive_controls_color: number;
					public static ucrop_color_progress_wheel_line: number;
					public static ucrop_color_statusbar: number;
					public static ucrop_color_toolbar: number;
					public static ucrop_color_toolbar_widget: number;
					public static ucrop_color_white: number;
					public static ucrop_color_widget: number;
					public static ucrop_color_widget_active: number;
					public static ucrop_color_widget_background: number;
					public static ucrop_color_widget_rotate_angle: number;
					public static ucrop_color_widget_rotate_mid_line: number;
					public static ucrop_color_widget_text: number;
					public static ucrop_scale_text_view_selector: number;
					public static zhihu_album_dropdown_count_text: number;
					public static zhihu_album_dropdown_thumbnail_placeholder: number;
					public static zhihu_album_dropdown_title_text: number;
					public static zhihu_album_empty_view: number;
					public static zhihu_album_popup_bg: number;
					public static zhihu_bottom_toolbar_apply: number;
					public static zhihu_bottom_toolbar_apply_text: number;
					public static zhihu_bottom_toolbar_apply_text_disable: number;
					public static zhihu_bottom_toolbar_bg: number;
					public static zhihu_bottom_toolbar_preview: number;
					public static zhihu_bottom_toolbar_preview_text: number;
					public static zhihu_bottom_toolbar_preview_text_disable: number;
					public static zhihu_capture: number;
					public static zhihu_check_original_radio_disable: number;
					public static zhihu_item_checkCircle_backgroundColor: number;
					public static zhihu_item_checkCircle_borderColor: number;
					public static zhihu_item_placeholder: number;
					public static zhihu_page_bg: number;
					public static zhihu_preview_bottom_toolbar_apply: number;
					public static zhihu_preview_bottom_toolbar_apply_text: number;
					public static zhihu_preview_bottom_toolbar_apply_text_disable: number;
					public static zhihu_preview_bottom_toolbar_back_text: number;
					public static zhihu_primary: number;
					public static zhihu_primary_dark: number;
					public constructor();
				}
				export class dimen {
					public static class: java.lang.Class<com.xfl.msgbot.R.dimen>;
					public static abc_action_bar_content_inset_material: number;
					public static abc_action_bar_content_inset_with_nav: number;
					public static abc_action_bar_default_height_material: number;
					public static abc_action_bar_default_padding_end_material: number;
					public static abc_action_bar_default_padding_start_material: number;
					public static abc_action_bar_elevation_material: number;
					public static abc_action_bar_icon_vertical_padding_material: number;
					public static abc_action_bar_overflow_padding_end_material: number;
					public static abc_action_bar_overflow_padding_start_material: number;
					public static abc_action_bar_stacked_max_height: number;
					public static abc_action_bar_stacked_tab_max_width: number;
					public static abc_action_bar_subtitle_bottom_margin_material: number;
					public static abc_action_bar_subtitle_top_margin_material: number;
					public static abc_action_button_min_height_material: number;
					public static abc_action_button_min_width_material: number;
					public static abc_action_button_min_width_overflow_material: number;
					public static abc_alert_dialog_button_bar_height: number;
					public static abc_alert_dialog_button_dimen: number;
					public static abc_button_inset_horizontal_material: number;
					public static abc_button_inset_vertical_material: number;
					public static abc_button_padding_horizontal_material: number;
					public static abc_button_padding_vertical_material: number;
					public static abc_cascading_menus_min_smallest_width: number;
					public static abc_config_prefDialogWidth: number;
					public static abc_control_corner_material: number;
					public static abc_control_inset_material: number;
					public static abc_control_padding_material: number;
					public static abc_dialog_corner_radius_material: number;
					public static abc_dialog_fixed_height_major: number;
					public static abc_dialog_fixed_height_minor: number;
					public static abc_dialog_fixed_width_major: number;
					public static abc_dialog_fixed_width_minor: number;
					public static abc_dialog_list_padding_bottom_no_buttons: number;
					public static abc_dialog_list_padding_top_no_title: number;
					public static abc_dialog_min_width_major: number;
					public static abc_dialog_min_width_minor: number;
					public static abc_dialog_padding_material: number;
					public static abc_dialog_padding_top_material: number;
					public static abc_dialog_title_divider_material: number;
					public static abc_disabled_alpha_material_dark: number;
					public static abc_disabled_alpha_material_light: number;
					public static abc_dropdownitem_icon_width: number;
					public static abc_dropdownitem_text_padding_left: number;
					public static abc_dropdownitem_text_padding_right: number;
					public static abc_edit_text_inset_bottom_material: number;
					public static abc_edit_text_inset_horizontal_material: number;
					public static abc_edit_text_inset_top_material: number;
					public static abc_floating_window_z: number;
					public static abc_list_item_height_large_material: number;
					public static abc_list_item_height_material: number;
					public static abc_list_item_height_small_material: number;
					public static abc_list_item_padding_horizontal_material: number;
					public static abc_panel_menu_list_width: number;
					public static abc_progress_bar_height_material: number;
					public static abc_search_view_preferred_height: number;
					public static abc_search_view_preferred_width: number;
					public static abc_seekbar_track_background_height_material: number;
					public static abc_seekbar_track_progress_height_material: number;
					public static abc_select_dialog_padding_start_material: number;
					public static abc_switch_padding: number;
					public static abc_text_size_body_1_material: number;
					public static abc_text_size_body_2_material: number;
					public static abc_text_size_button_material: number;
					public static abc_text_size_caption_material: number;
					public static abc_text_size_display_1_material: number;
					public static abc_text_size_display_2_material: number;
					public static abc_text_size_display_3_material: number;
					public static abc_text_size_display_4_material: number;
					public static abc_text_size_headline_material: number;
					public static abc_text_size_large_material: number;
					public static abc_text_size_medium_material: number;
					public static abc_text_size_menu_header_material: number;
					public static abc_text_size_menu_material: number;
					public static abc_text_size_small_material: number;
					public static abc_text_size_subhead_material: number;
					public static abc_text_size_subtitle_material_toolbar: number;
					public static abc_text_size_title_material: number;
					public static abc_text_size_title_material_toolbar: number;
					public static action_bar_size: number;
					public static album_item_height: number;
					public static alert_dialog_padding_material: number;
					public static alert_dialog_padding_top_material: number;
					public static app_bar_expanded: number;
					public static app_bar_height: number;
					public static app_bar_height_small: number;
					public static appcompat_dialog_background_inset: number;
					public static ayp_12sp: number;
					public static ayp_8dp: number;
					public static ayp_menu_dialog_container_margin: number;
					public static ayp_menu_item_padding: number;
					public static ayp_menu_item_text_size: number;
					public static browser_actions_context_menu_max_width: number;
					public static browser_actions_context_menu_min_padding: number;
					public static cardview_compat_inset_shadow: number;
					public static cardview_default_elevation: number;
					public static cardview_default_radius: number;
					public static clock_face_margin_start: number;
					public static compat_button_inset_horizontal_material: number;
					public static compat_button_inset_vertical_material: number;
					public static compat_button_padding_horizontal_material: number;
					public static compat_button_padding_vertical_material: number;
					public static compat_control_corner_material: number;
					public static compat_notification_large_icon_max_height: number;
					public static compat_notification_large_icon_max_width: number;
					public static def_drawer_elevation: number;
					public static default_dimension: number;
					public static design_appbar_elevation: number;
					public static design_bottom_navigation_active_item_max_width: number;
					public static design_bottom_navigation_active_item_min_width: number;
					public static design_bottom_navigation_active_text_size: number;
					public static design_bottom_navigation_elevation: number;
					public static design_bottom_navigation_height: number;
					public static design_bottom_navigation_icon_size: number;
					public static design_bottom_navigation_item_max_width: number;
					public static design_bottom_navigation_item_min_width: number;
					public static design_bottom_navigation_margin: number;
					public static design_bottom_navigation_shadow_height: number;
					public static design_bottom_navigation_text_size: number;
					public static design_bottom_sheet_elevation: number;
					public static design_bottom_sheet_modal_elevation: number;
					public static design_bottom_sheet_peek_height_min: number;
					public static design_fab_border_width: number;
					public static design_fab_elevation: number;
					public static design_fab_image_size: number;
					public static design_fab_size_mini: number;
					public static design_fab_size_normal: number;
					public static design_fab_translation_z_hovered_focused: number;
					public static design_fab_translation_z_pressed: number;
					public static design_navigation_elevation: number;
					public static design_navigation_icon_padding: number;
					public static design_navigation_icon_size: number;
					public static design_navigation_item_horizontal_padding: number;
					public static design_navigation_item_icon_padding: number;
					public static design_navigation_max_width: number;
					public static design_navigation_padding_bottom: number;
					public static design_navigation_separator_vertical_padding: number;
					public static design_snackbar_action_inline_max_width: number;
					public static design_snackbar_action_text_color_alpha: number;
					public static design_snackbar_background_corner_radius: number;
					public static design_snackbar_elevation: number;
					public static design_snackbar_extra_spacing_horizontal: number;
					public static design_snackbar_max_width: number;
					public static design_snackbar_min_width: number;
					public static design_snackbar_padding_horizontal: number;
					public static design_snackbar_padding_vertical: number;
					public static design_snackbar_padding_vertical_2lines: number;
					public static design_snackbar_text_size: number;
					public static design_tab_max_width: number;
					public static design_tab_scrollable_min_width: number;
					public static design_tab_text_size: number;
					public static design_tab_text_size_2line: number;
					public static design_textinput_caption_translate_y: number;
					public static dialog_margin: number;
					public static disabled_alpha_material_dark: number;
					public static disabled_alpha_material_light: number;
					public static fab_margin: number;
					public static fab_size_mini: number;
					public static fab_size_normal: number;
					public static fastscroll_default_thickness: number;
					public static fastscroll_margin: number;
					public static fastscroll_minimum_range: number;
					public static grid_expected_size: number;
					public static highlight_alpha_material_colored: number;
					public static highlight_alpha_material_dark: number;
					public static highlight_alpha_material_light: number;
					public static hint_alpha_material_dark: number;
					public static hint_alpha_material_light: number;
					public static hint_pressed_alpha_material_dark: number;
					public static hint_pressed_alpha_material_light: number;
					public static item_touch_helper_max_drag_scroll_per_frame: number;
					public static item_touch_helper_swipe_escape_max_velocity: number;
					public static item_touch_helper_swipe_escape_velocity: number;
					public static labels_text_size: number;
					public static leak_canary_connector_center_y: number;
					public static leak_canary_connector_leak_dash_gap: number;
					public static leak_canary_connector_leak_dash_line: number;
					public static leak_canary_connector_stroke_size: number;
					public static leak_canary_connector_width: number;
					public static leak_canary_more_margin_top: number;
					public static leak_canary_more_size: number;
					public static leak_canary_more_stroke_width: number;
					public static leak_canary_row_margins: number;
					public static leak_canary_row_min: number;
					public static leak_canary_row_title_margin_top: number;
					public static leak_canary_squiggly_span_amplitude: number;
					public static leak_canary_squiggly_span_period_degrees: number;
					public static leak_canary_squiggly_span_stroke_width: number;
					public static leak_canary_toast_icon_size: number;
					public static material_clock_display_padding: number;
					public static material_clock_face_margin_top: number;
					public static material_clock_hand_center_dot_radius: number;
					public static material_clock_hand_padding: number;
					public static material_clock_hand_stroke_width: number;
					public static material_clock_number_text_size: number;
					public static material_clock_period_toggle_height: number;
					public static material_clock_period_toggle_margin_left: number;
					public static material_clock_period_toggle_width: number;
					public static material_clock_size: number;
					public static material_emphasis_disabled: number;
					public static material_emphasis_high_type: number;
					public static material_emphasis_medium: number;
					public static material_text_view_test_line_height: number;
					public static material_text_view_test_line_height_override: number;
					public static material_timepicker_dialog_buttons_margin_top: number;
					public static media_grid_size: number;
					public static media_grid_spacing: number;
					public static mtrl_alert_dialog_background_inset_bottom: number;
					public static mtrl_alert_dialog_background_inset_end: number;
					public static mtrl_alert_dialog_background_inset_start: number;
					public static mtrl_alert_dialog_background_inset_top: number;
					public static mtrl_alert_dialog_picker_background_inset: number;
					public static mtrl_badge_horizontal_edge_offset: number;
					public static mtrl_badge_long_text_horizontal_padding: number;
					public static mtrl_badge_radius: number;
					public static mtrl_badge_text_horizontal_edge_offset: number;
					public static mtrl_badge_text_size: number;
					public static mtrl_badge_with_text_radius: number;
					public static mtrl_bottomappbar_fabOffsetEndMode: number;
					public static mtrl_bottomappbar_fab_bottom_margin: number;
					public static mtrl_bottomappbar_fab_cradle_margin: number;
					public static mtrl_bottomappbar_fab_cradle_rounded_corner_radius: number;
					public static mtrl_bottomappbar_fab_cradle_vertical_offset: number;
					public static mtrl_bottomappbar_height: number;
					public static mtrl_btn_corner_radius: number;
					public static mtrl_btn_dialog_btn_min_width: number;
					public static mtrl_btn_disabled_elevation: number;
					public static mtrl_btn_disabled_z: number;
					public static mtrl_btn_elevation: number;
					public static mtrl_btn_focused_z: number;
					public static mtrl_btn_hovered_z: number;
					public static mtrl_btn_icon_btn_padding_left: number;
					public static mtrl_btn_icon_padding: number;
					public static mtrl_btn_inset: number;
					public static mtrl_btn_letter_spacing: number;
					public static mtrl_btn_padding_bottom: number;
					public static mtrl_btn_padding_left: number;
					public static mtrl_btn_padding_right: number;
					public static mtrl_btn_padding_top: number;
					public static mtrl_btn_pressed_z: number;
					public static mtrl_btn_stroke_size: number;
					public static mtrl_btn_text_btn_icon_padding: number;
					public static mtrl_btn_text_btn_padding_left: number;
					public static mtrl_btn_text_btn_padding_right: number;
					public static mtrl_btn_text_size: number;
					public static mtrl_btn_z: number;
					public static mtrl_calendar_action_confirm_button_min_width: number;
					public static mtrl_calendar_action_height: number;
					public static mtrl_calendar_action_padding: number;
					public static mtrl_calendar_bottom_padding: number;
					public static mtrl_calendar_content_padding: number;
					public static mtrl_calendar_day_corner: number;
					public static mtrl_calendar_day_height: number;
					public static mtrl_calendar_day_horizontal_padding: number;
					public static mtrl_calendar_day_today_stroke: number;
					public static mtrl_calendar_day_vertical_padding: number;
					public static mtrl_calendar_day_width: number;
					public static mtrl_calendar_days_of_week_height: number;
					public static mtrl_calendar_dialog_background_inset: number;
					public static mtrl_calendar_header_content_padding: number;
					public static mtrl_calendar_header_content_padding_fullscreen: number;
					public static mtrl_calendar_header_divider_thickness: number;
					public static mtrl_calendar_header_height: number;
					public static mtrl_calendar_header_height_fullscreen: number;
					public static mtrl_calendar_header_selection_line_height: number;
					public static mtrl_calendar_header_text_padding: number;
					public static mtrl_calendar_header_toggle_margin_bottom: number;
					public static mtrl_calendar_header_toggle_margin_top: number;
					public static mtrl_calendar_landscape_header_width: number;
					public static mtrl_calendar_maximum_default_fullscreen_minor_axis: number;
					public static mtrl_calendar_month_horizontal_padding: number;
					public static mtrl_calendar_month_vertical_padding: number;
					public static mtrl_calendar_navigation_bottom_padding: number;
					public static mtrl_calendar_navigation_height: number;
					public static mtrl_calendar_navigation_top_padding: number;
					public static mtrl_calendar_pre_l_text_clip_padding: number;
					public static mtrl_calendar_selection_baseline_to_top_fullscreen: number;
					public static mtrl_calendar_selection_text_baseline_to_bottom: number;
					public static mtrl_calendar_selection_text_baseline_to_bottom_fullscreen: number;
					public static mtrl_calendar_selection_text_baseline_to_top: number;
					public static mtrl_calendar_text_input_padding_top: number;
					public static mtrl_calendar_title_baseline_to_top: number;
					public static mtrl_calendar_title_baseline_to_top_fullscreen: number;
					public static mtrl_calendar_year_corner: number;
					public static mtrl_calendar_year_height: number;
					public static mtrl_calendar_year_horizontal_padding: number;
					public static mtrl_calendar_year_vertical_padding: number;
					public static mtrl_calendar_year_width: number;
					public static mtrl_card_checked_icon_margin: number;
					public static mtrl_card_checked_icon_size: number;
					public static mtrl_card_corner_radius: number;
					public static mtrl_card_dragged_z: number;
					public static mtrl_card_elevation: number;
					public static mtrl_card_spacing: number;
					public static mtrl_chip_pressed_translation_z: number;
					public static mtrl_chip_text_size: number;
					public static mtrl_edittext_rectangle_top_offset: number;
					public static mtrl_exposed_dropdown_menu_popup_elevation: number;
					public static mtrl_exposed_dropdown_menu_popup_vertical_offset: number;
					public static mtrl_exposed_dropdown_menu_popup_vertical_padding: number;
					public static mtrl_extended_fab_bottom_padding: number;
					public static mtrl_extended_fab_corner_radius: number;
					public static mtrl_extended_fab_disabled_elevation: number;
					public static mtrl_extended_fab_disabled_translation_z: number;
					public static mtrl_extended_fab_elevation: number;
					public static mtrl_extended_fab_end_padding: number;
					public static mtrl_extended_fab_end_padding_icon: number;
					public static mtrl_extended_fab_icon_size: number;
					public static mtrl_extended_fab_icon_text_spacing: number;
					public static mtrl_extended_fab_min_height: number;
					public static mtrl_extended_fab_min_width: number;
					public static mtrl_extended_fab_start_padding: number;
					public static mtrl_extended_fab_start_padding_icon: number;
					public static mtrl_extended_fab_top_padding: number;
					public static mtrl_extended_fab_translation_z_base: number;
					public static mtrl_extended_fab_translation_z_hovered_focused: number;
					public static mtrl_extended_fab_translation_z_pressed: number;
					public static mtrl_fab_elevation: number;
					public static mtrl_fab_min_touch_target: number;
					public static mtrl_fab_translation_z_hovered_focused: number;
					public static mtrl_fab_translation_z_pressed: number;
					public static mtrl_high_ripple_default_alpha: number;
					public static mtrl_high_ripple_focused_alpha: number;
					public static mtrl_high_ripple_hovered_alpha: number;
					public static mtrl_high_ripple_pressed_alpha: number;
					public static mtrl_large_touch_target: number;
					public static mtrl_low_ripple_default_alpha: number;
					public static mtrl_low_ripple_focused_alpha: number;
					public static mtrl_low_ripple_hovered_alpha: number;
					public static mtrl_low_ripple_pressed_alpha: number;
					public static mtrl_min_touch_target_size: number;
					public static mtrl_navigation_elevation: number;
					public static mtrl_navigation_item_horizontal_padding: number;
					public static mtrl_navigation_item_icon_padding: number;
					public static mtrl_navigation_item_icon_size: number;
					public static mtrl_navigation_item_shape_horizontal_margin: number;
					public static mtrl_navigation_item_shape_vertical_margin: number;
					public static mtrl_progress_circular_inset: number;
					public static mtrl_progress_circular_radius: number;
					public static mtrl_progress_indicator_full_rounded_corner_radius: number;
					public static mtrl_progress_indicator_width: number;
					public static mtrl_shape_corner_size_large_component: number;
					public static mtrl_shape_corner_size_medium_component: number;
					public static mtrl_shape_corner_size_small_component: number;
					public static mtrl_slider_halo_radius: number;
					public static mtrl_slider_label_padding: number;
					public static mtrl_slider_label_radius: number;
					public static mtrl_slider_label_square_side: number;
					public static mtrl_slider_thumb_elevation: number;
					public static mtrl_slider_thumb_radius: number;
					public static mtrl_slider_track_height: number;
					public static mtrl_slider_track_side_padding: number;
					public static mtrl_slider_track_top: number;
					public static mtrl_slider_widget_height: number;
					public static mtrl_snackbar_action_text_color_alpha: number;
					public static mtrl_snackbar_background_corner_radius: number;
					public static mtrl_snackbar_background_overlay_color_alpha: number;
					public static mtrl_snackbar_margin: number;
					public static mtrl_switch_thumb_elevation: number;
					public static mtrl_textinput_box_corner_radius_medium: number;
					public static mtrl_textinput_box_corner_radius_small: number;
					public static mtrl_textinput_box_label_cutout_padding: number;
					public static mtrl_textinput_box_stroke_width_default: number;
					public static mtrl_textinput_box_stroke_width_focused: number;
					public static mtrl_textinput_counter_margin_start: number;
					public static mtrl_textinput_end_icon_margin_start: number;
					public static mtrl_textinput_outline_box_expanded_padding: number;
					public static mtrl_textinput_start_icon_margin_end: number;
					public static mtrl_toolbar_default_height: number;
					public static mtrl_tooltip_arrowSize: number;
					public static mtrl_tooltip_cornerSize: number;
					public static mtrl_tooltip_minHeight: number;
					public static mtrl_tooltip_minWidth: number;
					public static mtrl_tooltip_padding: number;
					public static mtrl_transition_shared_axis_slide_distance: number;
					public static notification_action_icon_size: number;
					public static notification_action_text_size: number;
					public static notification_big_circle_margin: number;
					public static notification_content_margin_start: number;
					public static notification_large_icon_height: number;
					public static notification_large_icon_width: number;
					public static notification_main_column_padding_top: number;
					public static notification_media_narrow_margin: number;
					public static notification_right_icon_size: number;
					public static notification_right_side_padding_top: number;
					public static notification_small_icon_background_padding: number;
					public static notification_small_icon_size_as_large: number;
					public static notification_subtext_size: number;
					public static notification_top_pad: number;
					public static notification_top_pad_large_text: number;
					public static padding_large_24dp: number;
					public static padding_normal_16dp: number;
					public static preference_category_padding_start_custom: number;
					public static preference_dropdown_padding_start: number;
					public static preference_icon_minWidth: number;
					public static preference_seekbar_padding_horizontal: number;
					public static preference_seekbar_padding_vertical: number;
					public static preference_seekbar_value_minWidth: number;
					public static spacing_huge_64dp: number;
					public static spacing_large_32dp: number;
					public static spacing_micro_4dp: number;
					public static spacing_normal_8dp: number;
					public static spacing_xlarge_48dp: number;
					public static subtitle_corner_radius: number;
					public static subtitle_outline_width: number;
					public static subtitle_shadow_offset: number;
					public static subtitle_shadow_radius: number;
					public static test_mtrl_calendar_day_cornerSize: number;
					public static text_margin: number;
					public static tooltip_corner_radius: number;
					public static tooltip_horizontal_padding: number;
					public static tooltip_margin: number;
					public static tooltip_precise_anchor_extra_offset: number;
					public static tooltip_precise_anchor_threshold: number;
					public static tooltip_vertical_padding: number;
					public static tooltip_y_offset_non_touch: number;
					public static tooltip_y_offset_touch: number;
					public static ucrop_default_crop_frame_stoke_width: number;
					public static ucrop_default_crop_grid_stoke_width: number;
					public static ucrop_default_crop_logo_size: number;
					public static ucrop_default_crop_rect_corner_touch_area_line_length: number;
					public static ucrop_default_crop_rect_corner_touch_threshold: number;
					public static ucrop_default_crop_rect_min_size: number;
					public static ucrop_height_crop_aspect_ratio_text: number;
					public static ucrop_height_divider_shadow: number;
					public static ucrop_height_horizontal_wheel_progress_line: number;
					public static ucrop_height_wrapper_controls: number;
					public static ucrop_height_wrapper_states: number;
					public static ucrop_margin_horizontal_wheel_progress_line: number;
					public static ucrop_margin_top_controls_text: number;
					public static ucrop_margin_top_widget_text: number;
					public static ucrop_padding_crop_frame: number;
					public static ucrop_progress_size: number;
					public static ucrop_size_dot_scale_text_view: number;
					public static ucrop_size_wrapper_rotate_button: number;
					public static ucrop_text_size_controls_text: number;
					public static ucrop_text_size_widget_text: number;
					public static ucrop_width_horizontal_wheel_progress_line: number;
					public static ucrop_width_middle_wheel_progress_line: number;
					public static z_fab: number;
					public constructor();
				}
				export class drawable {
					public static class: java.lang.Class<com.xfl.msgbot.R.drawable>;
					public static abc_ab_share_pack_mtrl_alpha: number;
					public static abc_action_bar_item_background_material: number;
					public static abc_btn_borderless_material: number;
					public static abc_btn_check_material: number;
					public static abc_btn_check_material_anim: number;
					public static abc_btn_check_to_on_mtrl_000: number;
					public static abc_btn_check_to_on_mtrl_015: number;
					public static abc_btn_colored_material: number;
					public static abc_btn_default_mtrl_shape: number;
					public static abc_btn_radio_material: number;
					public static abc_btn_radio_material_anim: number;
					public static abc_btn_radio_to_on_mtrl_000: number;
					public static abc_btn_radio_to_on_mtrl_015: number;
					public static abc_btn_switch_to_on_mtrl_00001: number;
					public static abc_btn_switch_to_on_mtrl_00012: number;
					public static abc_cab_background_internal_bg: number;
					public static abc_cab_background_top_material: number;
					public static abc_cab_background_top_mtrl_alpha: number;
					public static abc_control_background_material: number;
					public static abc_dialog_material_background: number;
					public static abc_edit_text_material: number;
					public static abc_ic_ab_back_material: number;
					public static abc_ic_arrow_drop_right_black_24dp: number;
					public static abc_ic_clear_material: number;
					public static abc_ic_commit_search_api_mtrl_alpha: number;
					public static abc_ic_go_search_api_material: number;
					public static abc_ic_menu_copy_mtrl_am_alpha: number;
					public static abc_ic_menu_cut_mtrl_alpha: number;
					public static abc_ic_menu_overflow_material: number;
					public static abc_ic_menu_paste_mtrl_am_alpha: number;
					public static abc_ic_menu_selectall_mtrl_alpha: number;
					public static abc_ic_menu_share_mtrl_alpha: number;
					public static abc_ic_search_api_material: number;
					public static abc_ic_star_black_16dp: number;
					public static abc_ic_star_black_36dp: number;
					public static abc_ic_star_black_48dp: number;
					public static abc_ic_star_half_black_16dp: number;
					public static abc_ic_star_half_black_36dp: number;
					public static abc_ic_star_half_black_48dp: number;
					public static abc_ic_voice_search_api_material: number;
					public static abc_item_background_holo_dark: number;
					public static abc_item_background_holo_light: number;
					public static abc_list_divider_material: number;
					public static abc_list_divider_mtrl_alpha: number;
					public static abc_list_focused_holo: number;
					public static abc_list_longpressed_holo: number;
					public static abc_list_pressed_holo_dark: number;
					public static abc_list_pressed_holo_light: number;
					public static abc_list_selector_background_transition_holo_dark: number;
					public static abc_list_selector_background_transition_holo_light: number;
					public static abc_list_selector_disabled_holo_dark: number;
					public static abc_list_selector_disabled_holo_light: number;
					public static abc_list_selector_holo_dark: number;
					public static abc_list_selector_holo_light: number;
					public static abc_menu_hardkey_panel_mtrl_mult: number;
					public static abc_popup_background_mtrl_mult: number;
					public static abc_ratingbar_indicator_material: number;
					public static abc_ratingbar_material: number;
					public static abc_ratingbar_small_material: number;
					public static abc_scrubber_control_off_mtrl_alpha: number;
					public static abc_scrubber_control_to_pressed_mtrl_000: number;
					public static abc_scrubber_control_to_pressed_mtrl_005: number;
					public static abc_scrubber_primary_mtrl_alpha: number;
					public static abc_scrubber_track_mtrl_alpha: number;
					public static abc_seekbar_thumb_material: number;
					public static abc_seekbar_tick_mark_material: number;
					public static abc_seekbar_track_material: number;
					public static abc_spinner_mtrl_am_alpha: number;
					public static abc_spinner_textfield_background_material: number;
					public static abc_switch_thumb_material: number;
					public static abc_switch_track_mtrl_alpha: number;
					public static abc_tab_indicator_material: number;
					public static abc_tab_indicator_mtrl_alpha: number;
					public static abc_text_cursor_material: number;
					public static abc_text_select_handle_left_mtrl_dark: number;
					public static abc_text_select_handle_left_mtrl_light: number;
					public static abc_text_select_handle_middle_mtrl_dark: number;
					public static abc_text_select_handle_middle_mtrl_light: number;
					public static abc_text_select_handle_right_mtrl_dark: number;
					public static abc_text_select_handle_right_mtrl_light: number;
					public static abc_textfield_activated_mtrl_alpha: number;
					public static abc_textfield_default_mtrl_alpha: number;
					public static abc_textfield_search_activated_mtrl_alpha: number;
					public static abc_textfield_search_default_mtrl_alpha: number;
					public static abc_textfield_search_material: number;
					public static abc_vector_test: number;
					public static app_color_cursor: number;
					public static avd_hide_password: number;
					public static avd_show_password: number;
					public static ayp_background_item_selected: number;
					public static ayp_drop_shadow_bottom: number;
					public static ayp_drop_shadow_top: number;
					public static ayp_ic_fullscreen_24dp: number;
					public static ayp_ic_fullscreen_exit_24dp: number;
					public static ayp_ic_menu_24dp: number;
					public static ayp_ic_pause_36dp: number;
					public static ayp_ic_play_36dp: number;
					public static ayp_ic_youtube_24dp: number;
					public static ayp_shape_rounded_corners: number;
					public static background_with_shadow: number;
					public static btn_checkbox_checked_mtrl: number;
					public static btn_checkbox_checked_to_unchecked_mtrl_animation: number;
					public static btn_checkbox_unchecked_mtrl: number;
					public static btn_checkbox_unchecked_to_checked_mtrl_animation: number;
					public static btn_radio_off_mtrl: number;
					public static btn_radio_off_to_on_mtrl_animation: number;
					public static btn_radio_on_mtrl: number;
					public static btn_radio_on_to_off_mtrl_animation: number;
					public static debug_chat_gradient: number;
					public static design_bottom_navigation_item_background: number;
					public static design_fab_background: number;
					public static design_ic_visibility: number;
					public static design_ic_visibility_off: number;
					public static design_password_eye: number;
					public static design_snackbar_background: number;
					public static draw_background: number;
					public static draw_thumb: number;
					public static fab_add: number;
					public static ic_accessibility_black_24dp: number;
					public static ic_add_black_24dp: number;
					public static ic_android_black_24dp: number;
					public static ic_arrow_back_black_24dp: number;
					public static ic_arrow_down_24dp: number;
					public static ic_arrow_downward_black_24dp: number;
					public static ic_arrow_downward_gray_24dp: number;
					public static ic_arrow_drop_down_black_24dp: number;
					public static ic_arrow_drop_down_white_24dp: number;
					public static ic_arrow_drop_up_black_24dp: number;
					public static ic_arrow_forward_black_24dp: number;
					public static ic_arrow_forward_gray_24dp: number;
					public static ic_attach_money_black_24dp: number;
					public static ic_autorenew_black_24dp: number;
					public static ic_baseline_compare_arrows_24: number;
					public static ic_baseline_people_alt_24: number;
					public static ic_battery_alert_black_24dp: number;
					public static ic_bug_report_black_24dp: number;
					public static ic_build_black_24dp: number;
					public static ic_call_merge_black_24dp: number;
					public static ic_chat_black_24dp: number;
					public static ic_check_black_24dp: number;
					public static ic_check_white_18dp: number;
					public static ic_check_white_24dp: number;
					public static ic_clock_black_24dp: number;
					public static ic_close_black_24dp: number;
					public static ic_color_lens_black_24dp: number;
					public static ic_content_copy_black_24dp: number;
					public static ic_content_paste_black_24dp: number;
					public static ic_create_new_folder_black_24dp: number;
					public static ic_create_new_folder_white_24dp: number;
					public static ic_delete_black_24dp: number;
					public static ic_delete_forever_red_24dp: number;
					public static ic_description_black_24dp: number;
					public static ic_details_black_24dp: number;
					public static ic_developer_mode_black_24dp: number;
					public static ic_done_black_24dp: number;
					public static ic_edit_black_24dp: number;
					public static ic_edit_orange_24dp: number;
					public static ic_empty_dracula: number;
					public static ic_empty_zhihu: number;
					public static ic_error_outline_black_24dp: number;
					public static ic_error_red_24dp: number;
					public static ic_expand_less_black_24dp: number;
					public static ic_expand_more_black_24dp: number;
					public static ic_fast_forward_black_24dp: number;
					public static ic_folder_black_24dp: number;
					public static ic_font_download_black_24dp: number;
					public static ic_format_color_text_black_24dp: number;
					public static ic_format_list_numbered_black_24dp: number;
					public static ic_format_size_black_24dp: number;
					public static ic_function: number;
					public static ic_gif: number;
					public static ic_icon_gear: number;
					public static ic_info_24dp: number;
					public static ic_info_black_24dp: number;
					public static ic_keyboard_arrow_down_black_24dp: number;
					public static ic_keyboard_arrow_right_black_24dp: number;
					public static ic_keyboard_arrow_up_black_24dp: number;
					public static ic_keyboard_black_24dp: number;
					public static ic_keyboard_tab_black_24dp: number;
					public static ic_language_black_24dp: number;
					public static ic_launcher_background: number;
					public static ic_launcher_foreground: number;
					public static ic_library_books_black_24dp: number;
					public static ic_lock_black_24dp: number;
					public static ic_lock_open_black_24dp: number;
					public static ic_lock_outline_black_24dp: number;
					public static ic_looks_two_black_24dp: number;
					public static ic_more_vert_black_24dp: number;
					public static ic_move_to_inbox_black_24dp: number;
					public static ic_mtrl_checked_circle: number;
					public static ic_mtrl_chip_checked_black: number;
					public static ic_mtrl_chip_checked_circle: number;
					public static ic_mtrl_chip_close_circle: number;
					public static ic_notifications_black_24dp: number;
					public static ic_open_in_new_black_24dp: number;
					public static ic_pause_black_24dp: number;
					public static ic_person_black_24dp: number;
					public static ic_photo_camera_white_24dp: number;
					public static ic_play_arrow_black_24dp: number;
					public static ic_play_circle_outline_white_48dp: number;
					public static ic_playlist_add_black_24dp: number;
					public static ic_preview_radio_off: number;
					public static ic_preview_radio_on: number;
					public static ic_redo_black_24dp: number;
					public static ic_refresh_black_24dp: number;
					public static ic_remove_circle_red_24dp: number;
					public static ic_remove_from_queue_black_24dp: number;
					public static ic_replay_black_24dp: number;
					public static ic_save_black_24dp: number;
					public static ic_save_white_24dp: number;
					public static ic_search_black_24dp: number;
					public static ic_select_all_black_24dp: number;
					public static ic_send_black_24dp: number;
					public static ic_settings_applications_black_24dp: number;
					public static ic_settings_black_24dp: number;
					public static ic_share_black_24dp: number;
					public static ic_slideshow_black_24dp: number;
					public static ic_stop_black_24dp: number;
					public static ic_subject_black_24dp: number;
					public static ic_sync_black_24dp: number;
					public static ic_text_format_black_24dp: number;
					public static ic_timer_black_24dp: number;
					public static ic_uncompiled_dot: number;
					public static ic_undo_black_24dp: number;
					public static ic_vertical_align_center_black_24dp: number;
					public static ic_warning_black_24dp: number;
					public static ic_warning_red_24dp: number;
					public static ic_web_black_24dp: number;
					public static ic_whatshot_black_24dp: number;
					public static ic_widgets_black_24dp: number;
					public static ic_wrap_text_black_24dp: number;
					public static leak_canary_dump: number;
					public static leak_canary_gray_fill: number;
					public static leak_canary_icon: number;
					public static leak_canary_icon_foreground: number;
					public static leak_canary_info: number;
					public static leak_canary_info_rectangle: number;
					public static leak_canary_leak: number;
					public static leak_canary_tab_background: number;
					public static leak_canary_tab_selector_ripple: number;
					public static leak_canary_toast_background: number;
					public static leak_canary_yellow_fill: number;
					public static line: number;
					public static line_drawable: number;
					public static main_bottom_gradient: number;
					public static main_top_gradient: number;
					public static material_ic_calendar_black_24dp: number;
					public static material_ic_clear_black_24dp: number;
					public static material_ic_edit_black_24dp: number;
					public static material_ic_keyboard_arrow_left_black_24dp: number;
					public static material_ic_keyboard_arrow_right_black_24dp: number;
					public static material_ic_menu_arrow_down_black_24dp: number;
					public static material_ic_menu_arrow_up_black_24dp: number;
					public static mtrl_dialog_background: number;
					public static mtrl_dropdown_arrow: number;
					public static mtrl_ic_arrow_drop_down: number;
					public static mtrl_ic_arrow_drop_up: number;
					public static mtrl_ic_cancel: number;
					public static mtrl_ic_error: number;
					public static mtrl_popupmenu_background: number;
					public static mtrl_popupmenu_background_dark: number;
					public static mtrl_tabs_default_indicator: number;
					public static navigation_empty_icon: number;
					public static notification_action_background: number;
					public static notification_bg: number;
					public static notification_bg_low: number;
					public static notification_bg_low_normal: number;
					public static notification_bg_low_pressed: number;
					public static notification_bg_normal: number;
					public static notification_bg_normal_pressed: number;
					public static notification_icon_background: number;
					public static notification_template_icon_bg: number;
					public static notification_template_icon_low_bg: number;
					public static notification_tile_bg: number;
					public static notify_panel_notification_icon_bg: number;
					public static preference_list_divider_material: number;
					public static ripple_app_color: number;
					public static scroll_thumb: number;
					public static test_custom_background: number;
					public static thumb: number;
					public static thumb_drawable: number;
					public static tooltip_frame_dark: number;
					public static tooltip_frame_light: number;
					public static transparent_cursor: number;
					public static ucrop_crop: number;
					public static ucrop_ic_angle: number;
					public static ucrop_ic_crop: number;
					public static ucrop_ic_crop_unselected: number;
					public static ucrop_ic_cross: number;
					public static ucrop_ic_done: number;
					public static ucrop_ic_next: number;
					public static ucrop_ic_reset: number;
					public static ucrop_ic_rotate: number;
					public static ucrop_ic_rotate_unselected: number;
					public static ucrop_ic_scale: number;
					public static ucrop_ic_scale_unselected: number;
					public static ucrop_rotate: number;
					public static ucrop_scale: number;
					public static ucrop_shadow_upside: number;
					public static ucrop_vector_ic_crop: number;
					public static ucrop_vector_loader: number;
					public static ucrop_vector_loader_animated: number;
					public static ucrop_wrapper_controls_shape: number;
					public constructor();
				}
				export class font {
					public static class: java.lang.Class<com.xfl.msgbot.R.font>;
					public static d2coding: number;
					public static d2codingligature: number;
					public static dejavusans: number;
					public static droid_sans_mono: number;
					public static hack: number;
					public static inconsolata: number;
					public static jetbrainsmono: number;
					public static nanum_gothic_coding: number;
					public constructor();
				}
				export class id {
					public static class: java.lang.Class<com.xfl.msgbot.R.id>;
					public static ALT: number;
					public static BOTTOM_END: number;
					public static BOTTOM_START: number;
					public static CTRL: number;
					public static FUNCTION: number;
					public static META: number;
					public static NO_DEBUG: number;
					public static SHIFT: number;
					public static SHOW_ALL: number;
					public static SHOW_PATH: number;
					public static SHOW_PROGRESS: number;
					public static SYM: number;
					public static TOP_END: number;
					public static TOP_START: number;
					public static accelerate: number;
					public static accessibility_action_clickable_span: number;
					public static accessibility_custom_action_0: number;
					public static accessibility_custom_action_1: number;
					public static accessibility_custom_action_10: number;
					public static accessibility_custom_action_11: number;
					public static accessibility_custom_action_12: number;
					public static accessibility_custom_action_13: number;
					public static accessibility_custom_action_14: number;
					public static accessibility_custom_action_15: number;
					public static accessibility_custom_action_16: number;
					public static accessibility_custom_action_17: number;
					public static accessibility_custom_action_18: number;
					public static accessibility_custom_action_19: number;
					public static accessibility_custom_action_2: number;
					public static accessibility_custom_action_20: number;
					public static accessibility_custom_action_21: number;
					public static accessibility_custom_action_22: number;
					public static accessibility_custom_action_23: number;
					public static accessibility_custom_action_24: number;
					public static accessibility_custom_action_25: number;
					public static accessibility_custom_action_26: number;
					public static accessibility_custom_action_27: number;
					public static accessibility_custom_action_28: number;
					public static accessibility_custom_action_29: number;
					public static accessibility_custom_action_3: number;
					public static accessibility_custom_action_30: number;
					public static accessibility_custom_action_31: number;
					public static accessibility_custom_action_4: number;
					public static accessibility_custom_action_5: number;
					public static accessibility_custom_action_6: number;
					public static accessibility_custom_action_7: number;
					public static accessibility_custom_action_8: number;
					public static accessibility_custom_action_9: number;
					public static action0: number;
					public static action_bar: number;
					public static action_bar_activity_content: number;
					public static action_bar_container: number;
					public static action_bar_root: number;
					public static action_bar_spinner: number;
					public static action_bar_subtitle: number;
					public static action_bar_title: number;
					public static action_beautify: number;
					public static action_community: number;
					public static action_container: number;
					public static action_context_bar: number;
					public static action_divider: number;
					public static action_global_log: number;
					public static action_go_line: number;
					public static action_image: number;
					public static action_lock: number;
					public static action_menu_divider: number;
					public static action_menu_presenter: number;
					public static action_mode_bar: number;
					public static action_mode_bar_stub: number;
					public static action_mode_close_button: number;
					public static action_next: number;
					public static action_paste: number;
					public static action_prev: number;
					public static action_redo: number;
					public static action_replace: number;
					public static action_sandbox: number;
					public static action_save: number;
					public static action_save_and_compile: number;
					public static action_script_share: number;
					public static action_search: number;
					public static action_select_all: number;
					public static action_settings: number;
					public static action_share: number;
					public static action_stats: number;
					public static action_text: number;
					public static action_undo: number;
					public static actions: number;
					public static activity_chooser_view_content: number;
					public static adContainer: number;
					public static add: number;
					public static adjacent: number;
					public static album_cover: number;
					public static album_media_count: number;
					public static album_name: number;
					public static alertTitle: number;
					public static aligned: number;
					public static all: number;
					public static always: number;
					public static animateToEnd: number;
					public static animateToStart: number;
					public static appBar: number;
					public static appBarLayout: number;
					public static appBarLayout2: number;
					public static app_bar: number;
					public static app_name: number;
					public static appbar: number;
					public static asConfigured: number;
					public static as_txt: number;
					public static async: number;
					public static auto: number;
					public static autoComplete: number;
					public static autoCompleteToEnd: number;
					public static autoCompleteToStart: number;
					public static autocomplete_image: number;
					public static autocomplete_text: number;
					public static background: number;
					public static barrier: number;
					public static baseline: number;
					public static beginning: number;
					public static bidirectional: number;
					public static blocking: number;
					public static bottom: number;
					public static bottom_anchor: number;
					public static bottom_toolbar: number;
					public static bounce: number;
					public static browser_actions_header_text: number;
					public static browser_actions_menu_item_icon: number;
					public static browser_actions_menu_item_text: number;
					public static browser_actions_menu_items: number;
					public static browser_actions_menu_view: number;
					public static btn_0: number;
					public static btn_1: number;
					public static btn_2: number;
					public static btn_3: number;
					public static btn_4: number;
					public static btn_5: number;
					public static btn_6: number;
					public static btn_7: number;
					public static btn_8: number;
					public static btn_9: number;
					public static btn_compile: number;
					public static btn_debug: number;
					public static btn_edit: number;
					public static btn_expand: number;
					public static btn_log: number;
					public static btn_new_folder: number;
					public static btn_ok: number;
					public static btn_script_activity: number;
					public static btn_select: number;
					public static btn_settings: number;
					public static btn_sort: number;
					public static btns: number;
					public static button: number;
					public static button1: number;
					public static button2: number;
					public static button3: number;
					public static buttonPanel: number;
					public static button_apply: number;
					public static button_back: number;
					public static button_preview: number;
					public static cancel_action: number;
					public static cancel_button: number;
					public static cardView: number;
					public static case_sensitive: number;
					public static center: number;
					public static center_horizontal: number;
					public static center_vertical: number;
					public static chain: number;
					public static chains: number;
					public static chat_sender: number;
					public static chat_text: number;
					public static check_view: number;
					public static checkbox: number;
					public static checked: number;
					public static chip: number;
					public static chip1: number;
					public static chip2: number;
					public static chip3: number;
					public static chip_group: number;
					public static chronometer: number;
					public static circle_center: number;
					public static circular: number;
					public static clear: number;
					public static clear_text: number;
					public static clip_horizontal: number;
					public static clip_vertical: number;
					public static code_editor_holder: number;
					public static code_editor_view: number;
					public static coil_bitmap: number;
					public static coil_request_manager: number;
					public static collapseActionView: number;
					public static collect_errors: number;
					public static collect_warnings: number;
					public static color_picker_view: number;
					public static compile_progressBar: number;
					public static confirm_button: number;
					public static container: number;
					public static content: number;
					public static contentPanel: number;
					public static controls_container: number;
					public static controls_shadow: number;
					public static controls_wrapper: number;
					public static coordinator: number;
					public static coordinatorLayout: number;
					public static coordinatorLayout2: number;
					public static cos: number;
					public static crash_log: number;
					public static custom: number;
					public static customPanel: number;
					public static custom_action_left_button: number;
					public static custom_action_right_button: number;
					public static cut: number;
					public static darken: number;
					public static dataBinding: number;
					public static date_picker_actions: number;
					public static debugIsGroupChat: number;
					public static debugRoomInput: number;
					public static debugRoomInputBar: number;
					public static debugRoomPackageName: number;
					public static debugRoomRecycler: number;
					public static debugRoomRoomname: number;
					public static debugRoomSender: number;
					public static debugRoomSetbar: number;
					public static debugRoomToolbar: number;
					public static debug_room_clear: number;
					public static debug_room_copy: number;
					public static debug_room_go_edit: number;
					public static debug_room_settings: number;
					public static debug_room_share: number;
					public static decelerate: number;
					public static decelerateAndComplete: number;
					public static decor_content_parent: number;
					public static default_activity_button: number;
					public static deltaRelative: number;
					public static design_bottom_sheet: number;
					public static design_menu_item_action_area: number;
					public static design_menu_item_action_area_stub: number;
					public static design_menu_item_text: number;
					public static design_navigation_view: number;
					public static dialog: number;
					public static dialog_button: number;
					public static dimensions: number;
					public static direct: number;
					public static directory: number;
					public static directory_path: number;
					public static disableHome: number;
					public static disablePostScroll: number;
					public static disableScroll: number;
					public static divider: number;
					public static divider2: number;
					public static down: number;
					public static dragDown: number;
					public static dragEnd: number;
					public static dragLeft: number;
					public static dragRight: number;
					public static dragStart: number;
					public static dragUp: number;
					public static drawerLayout: number;
					public static drop_shadow_bottom: number;
					public static drop_shadow_top: number;
					public static dropdown_menu: number;
					public static dst: number;
					public static dst_atop: number;
					public static dst_in: number;
					public static dst_out: number;
					public static dst_over: number;
					public static easeIn: number;
					public static easeInOut: number;
					public static easeOut: number;
					public static editText: number;
					public static edit_query: number;
					public static empty: number;
					public static empty_view: number;
					public static empty_view_content: number;
					public static end: number;
					public static end_padder: number;
					public static enterAlways: number;
					public static enterAlwaysCollapsed: number;
					public static error_list: number;
					public static exitUntilCollapsed: number;
					public static expand_activities_button: number;
					public static expanded_menu: number;
					public static extra_views_container: number;
					public static fab: number;
					public static fab_label: number;
					public static fade: number;
					public static fastscroll: number;
					public static fileName: number;
					public static files_refresh: number;
					public static fill: number;
					public static fill_horizontal: number;
					public static fill_vertical: number;
					public static filled: number;
					public static fitToContents: number;
					public static fixed: number;
					public static flip: number;
					public static floating: number;
					public static forever: number;
					public static fragment_container_view_tag: number;
					public static frameLayout: number;
					public static frameLayout2: number;
					public static frameLayout4: number;
					public static fullscreen_button: number;
					public static ghost_view: number;
					public static ghost_view_holder: number;
					public static gif: number;
					public static glide_custom_view_target_tag: number;
					public static godown: number;
					public static gone: number;
					public static graph: number;
					public static graph_wrap: number;
					public static gridlayout: number;
					public static group_divider: number;
					public static groups: number;
					public static guideline: number;
					public static handle: number;
					public static header_title: number;
					public static hex_val: number;
					public static hideable: number;
					public static hint: number;
					public static home: number;
					public static homeAsUp: number;
					public static honorRequest: number;
					public static horizontalScroll: number;
					public static icon: number;
					public static icon_frame: number;
					public static icon_group: number;
					public static ifRoom: number;
					public static ignore: number;
					public static ignoreRequest: number;
					public static image: number;
					public static imageView: number;
					public static imageView2: number;
					public static image_view: number;
					public static image_view_crop: number;
					public static image_view_logo: number;
					public static image_view_state_aspect_ratio: number;
					public static image_view_state_rotate: number;
					public static image_view_state_scale: number;
					public static incoming: number;
					public static info: number;
					public static invisible: number;
					public static italic: number;
					public static item_touch_helper_previous_elevation: number;
					public static jumpToEnd: number;
					public static jumpToStart: number;
					public static labeled: number;
					public static largeLabel: number;
					public static launcher: number;
					public static layout: number;
					public static layout_aspect_ratio: number;
					public static layout_rotate_wheel: number;
					public static layout_scale_wheel: number;
					public static leak_canary_about_text: number;
					public static leak_canary_bottom_navigation_bar: number;
					public static leak_canary_count_text: number;
					public static leak_canary_dump_heap_now: number;
					public static leak_canary_explorer_list: number;
					public static leak_canary_explorer_title: number;
					public static leak_canary_header_text: number;
					public static leak_canary_heap_dump_leaks: number;
					public static leak_canary_heap_rendering: number;
					public static leak_canary_import_heap_dump: number;
					public static leak_canary_leak_text: number;
					public static leak_canary_list: number;
					public static leak_canary_loading: number;
					public static leak_canary_main_container: number;
					public static leak_canary_navigation_button_about: number;
					public static leak_canary_navigation_button_about_icon: number;
					public static leak_canary_navigation_button_heap_dumps: number;
					public static leak_canary_navigation_button_heap_dumps_icon: number;
					public static leak_canary_navigation_button_leaks: number;
					public static leak_canary_navigation_button_leaks_icon: number;
					public static leak_canary_notification_analysis_result: number;
					public static leak_canary_notification_analyzing_heap: number;
					public static leak_canary_notification_dumping_heap: number;
					public static leak_canary_notification_no_retained_object_on_tap: number;
					public static leak_canary_notification_retained_objects: number;
					public static leak_canary_notification_write_permission: number;
					public static leak_canary_row_connector: number;
					public static leak_canary_row_small_text: number;
					public static leak_canary_row_text: number;
					public static leak_canary_row_title: number;
					public static leak_canary_search_button: number;
					public static leak_canary_spinner: number;
					public static leak_canary_stacktrace: number;
					public static leak_canary_time_text: number;
					public static leak_canary_toast_icon: number;
					public static left: number;
					public static licenseToolbar: number;
					public static lighten: number;
					public static line: number;
					public static line1: number;
					public static line3: number;
					public static lineNumber: number;
					public static linear: number;
					public static linearLayout: number;
					public static list: number;
					public static listMode: number;
					public static list_item: number;
					public static live_video_indicator: number;
					public static log_card: number;
					public static log_clear: number;
					public static log_content: number;
					public static log_icon: number;
					public static log_recycler: number;
					public static log_time: number;
					public static logger_toolbar: number;
					public static main_toolbar: number;
					public static markdown_view: number;
					public static markwon_drawables_scheduler: number;
					public static markwon_drawables_scheduler_last_text_hashcode: number;
					public static marquee: number;
					public static masked: number;
					public static material_clock_display: number;
					public static material_clock_face: number;
					public static material_clock_hand: number;
					public static material_clock_period_am_button: number;
					public static material_clock_period_pm_button: number;
					public static material_clock_period_toggle: number;
					public static material_hour_text_input: number;
					public static material_hour_tv: number;
					public static material_label: number;
					public static material_minute_text_input: number;
					public static material_minute_tv: number;
					public static material_textinput_timepicker: number;
					public static material_timepicker_cancel_button: number;
					public static material_timepicker_container: number;
					public static material_timepicker_edit_text: number;
					public static material_timepicker_mode_button: number;
					public static material_timepicker_ok_button: number;
					public static material_timepicker_view: number;
					public static material_value_index: number;
					public static media_actions: number;
					public static media_thumbnail: number;
					public static menu_button: number;
					public static menu_crop: number;
					public static menu_loader: number;
					public static menu_root: number;
					public static menu_search: number;
					public static menu_toolbar: number;
					public static message: number;
					public static middle: number;
					public static mini: number;
					public static month_grid: number;
					public static month_navigation_bar: number;
					public static month_navigation_fragment_toggle: number;
					public static month_navigation_next: number;
					public static month_navigation_previous: number;
					public static month_title: number;
					public static more: number;
					public static motion_base: number;
					public static mtrl_calendar_day_selector_frame: number;
					public static mtrl_calendar_days_of_week: number;
					public static mtrl_calendar_frame: number;
					public static mtrl_calendar_main_pane: number;
					public static mtrl_calendar_months: number;
					public static mtrl_calendar_selection_frame: number;
					public static mtrl_calendar_text_input_frame: number;
					public static mtrl_calendar_year_selector_frame: number;
					public static mtrl_card_checked_layer_id: number;
					public static mtrl_child_content_container: number;
					public static mtrl_internal_children_alpha_tag: number;
					public static mtrl_motion_snapshot_view: number;
					public static mtrl_picker_fullscreen: number;
					public static mtrl_picker_header: number;
					public static mtrl_picker_header_selection_text: number;
					public static mtrl_picker_header_title_and_selection: number;
					public static mtrl_picker_header_toggle: number;
					public static mtrl_picker_text_input_date: number;
					public static mtrl_picker_text_input_range_end: number;
					public static mtrl_picker_text_input_range_start: number;
					public static mtrl_picker_title_text: number;
					public static multiply: number;
					public static nav_appbar: number;
					public static nav_controller_view_tag: number;
					public static nav_host_fragment_container: number;
					public static nav_option: number;
					public static nav_toolbar: number;
					public static navigationView: number;
					public static navigation_header_container: number;
					public static never: number;
					public static new_color_panel: number;
					public static noScroll: number;
					public static none: number;
					public static normal: number;
					public static notification_background: number;
					public static notification_main_column: number;
					public static notification_main_column_container: number;
					public static notification_type_spinner: number;
					public static off: number;
					public static old_color_panel: number;
					public static on: number;
					public static onAttachStateChangeListener: number;
					public static onDateChanged: number;
					public static onclick: number;
					public static one: number;
					public static open_settings: number;
					public static option_visibility: number;
					public static original: number;
					public static originalLayout: number;
					public static outgoing: number;
					public static outline: number;
					public static overlay: number;
					public static packed: number;
					public static pager: number;
					public static panel: number;
					public static parallax: number;
					public static parent: number;
					public static parentPanel: number;
					public static parentRelative: number;
					public static parent_matrix: number;
					public static password_toggle: number;
					public static path: number;
					public static pathRelative: number;
					public static peekHeight: number;
					public static percent: number;
					public static pin: number;
					public static play_pause_button: number;
					public static popupBtn: number;
					public static position: number;
					public static postLayout: number;
					public static profileImage: number;
					public static progress: number;
					public static progressBar: number;
					public static progressBar2: number;
					public static progress_circular: number;
					public static progress_horizontal: number;
					public static public_settings_frame: number;
					public static public_settings_insert: number;
					public static radio: number;
					public static ratio: number;
					public static rectangles: number;
					public static recycler: number;
					public static recycler_view: number;
					public static recyclerview: number;
					public static regex: number;
					public static replace: number;
					public static replace_view: number;
					public static reverseSawtooth: number;
					public static right: number;
					public static right_icon: number;
					public static right_side: number;
					public static root: number;
					public static rotate_scroll_wheel: number;
					public static rounded: number;
					public static row_index_key: number;
					public static save_non_transition_alpha: number;
					public static save_overlay_view: number;
					public static sawtooth: number;
					public static scale: number;
					public static scale_scroll_wheel: number;
					public static screen: number;
					public static script_menus: number;
					public static script_name: number;
					public static script_settings_frame: number;
					public static script_settings_insert: number;
					public static scripts_card: number;
					public static scripts_recycler: number;
					public static scripts_refresh: number;
					public static scroll: number;
					public static scrollIndicatorDown: number;
					public static scrollIndicatorUp: number;
					public static scrollView: number;
					public static scrollable: number;
					public static search: number;
					public static search_badge: number;
					public static search_bar: number;
					public static search_button: number;
					public static search_close_btn: number;
					public static search_edit_frame: number;
					public static search_from_start: number;
					public static search_go_btn: number;
					public static search_mag_icon: number;
					public static search_plate: number;
					public static search_src_text: number;
					public static search_toolbar: number;
					public static search_view: number;
					public static search_voice_btn: number;
					public static seekbar: number;
					public static seekbar_value: number;
					public static select_dialog_listview: number;
					public static selected: number;
					public static selected_album: number;
					public static selection_type: number;
					public static sendReport: number;
					public static send_btn: number;
					public static settings: number;
					public static shortcut: number;
					public static shortcuts_recycler: number;
					public static showCustom: number;
					public static showHome: number;
					public static showTitle: number;
					public static sin: number;
					public static size: number;
					public static skipCollapsed: number;
					public static slide: number;
					public static smallLabel: number;
					public static snackbar_action: number;
					public static snackbar_text: number;
					public static snap: number;
					public static snapMargins: number;
					public static sort: number;
					public static sort_parent: number;
					public static sort_refresh: number;
					public static space_top: number;
					public static spacer: number;
					public static spinner: number;
					public static spline: number;
					public static split_action_bar: number;
					public static spread: number;
					public static spread_inside: number;
					public static square: number;
					public static src: number;
					public static src_atop: number;
					public static src_in: number;
					public static src_out: number;
					public static src_over: number;
					public static standard: number;
					public static start: number;
					public static startHorizontal: number;
					public static startVertical: number;
					public static state_aspect_ratio: number;
					public static state_rotate: number;
					public static state_scale: number;
					public static staticLayout: number;
					public static staticPostLayout: number;
					public static status_bar_latest_event_content: number;
					public static stop: number;
					public static stretch: number;
					public static submenuarrow: number;
					public static submit_area: number;
					public static swit_open_socket_server: number;
					public static switchWidget: number;
					public static switch_activate: number;
					public static switch_botPower: number;
					public static tabMode: number;
					public static tabs: number;
					public static tag_accessibility_actions: number;
					public static tag_accessibility_clickable_spans: number;
					public static tag_accessibility_heading: number;
					public static tag_accessibility_pane_title: number;
					public static tag_screen_reader_focusable: number;
					public static tag_transition_group: number;
					public static tag_unhandled_key_event_manager: number;
					public static tag_unhandled_key_listeners: number;
					public static test_checkbox_android_button_tint: number;
					public static test_checkbox_app_button_tint: number;
					public static test_radiobutton_android_button_tint: number;
					public static test_radiobutton_app_button_tint: number;
					public static text: number;
					public static text2: number;
					public static textEnd: number;
					public static textInputLayout: number;
					public static textSpacerNoButtons: number;
					public static textSpacerNoTitle: number;
					public static textStart: number;
					public static textTop: number;
					public static textView: number;
					public static textView2: number;
					public static textView3: number;
					public static textWatcher: number;
					public static text_hex_wrapper: number;
					public static text_input_end_icon: number;
					public static text_input_start_icon: number;
					public static text_view_crop: number;
					public static text_view_rotate: number;
					public static text_view_scale: number;
					public static textinput_counter: number;
					public static textinput_error: number;
					public static textinput_helper_text: number;
					public static textinput_placeholder: number;
					public static textinput_prefix_text: number;
					public static textinput_suffix_text: number;
					public static time: number;
					public static title: number;
					public static titleDividerNoCustom: number;
					public static title_template: number;
					public static toggle: number;
					public static toolbar: number;
					public static toolbar_layout: number;
					public static toolbar_title: number;
					public static top: number;
					public static topPanel: number;
					public static top_toolbar: number;
					public static touch_outside: number;
					public static transitionToEnd: number;
					public static transitionToStart: number;
					public static transition_current_scene: number;
					public static transition_layout_save: number;
					public static transition_position: number;
					public static transition_scene_layoutid_cache: number;
					public static transition_transform: number;
					public static triangle: number;
					public static txt_port: number;
					public static txt_scriptName: number;
					public static txt_state: number;
					public static ucrop: number;
					public static ucrop_frame: number;
					public static ucrop_photobox: number;
					public static uncaughtErrorTxt: number;
					public static unchecked: number;
					public static uncompiled_dot: number;
					public static uniform: number;
					public static unlabeled: number;
					public static up: number;
					public static useBabel: number;
					public static useLegacy: number;
					public static useLogo: number;
					public static useOldSettings: number;
					public static useUnifiedParams: number;
					public static verticalScroll: number;
					public static video_duration: number;
					public static video_play_button: number;
					public static video_title: number;
					public static view: number;
					public static view_offset_helper: number;
					public static view_overlay: number;
					public static viewpager: number;
					public static visible: number;
					public static visible_removing_fragment_view_tag: number;
					public static withText: number;
					public static withinBounds: number;
					public static wrap: number;
					public static wrap_content: number;
					public static wrapper: number;
					public static wrapper_controls: number;
					public static wrapper_reset_rotate: number;
					public static wrapper_rotate_by_angle: number;
					public static wrapper_states: number;
					public static xor: number;
					public static youtube_button: number;
					public static youtube_player_seekbar: number;
					public static zero_corner_chip: number;
					public constructor();
				}
				export class integer {
					public static class: java.lang.Class<com.xfl.msgbot.R.integer>;
					public static abc_config_activityDefaultDur: number;
					public static abc_config_activityShortDur: number;
					public static app_bar_elevation_anim_duration: number;
					public static bottom_sheet_slide_duration: number;
					public static cancel_button_image_alpha: number;
					public static config_navAnimTime: number;
					public static config_tooltipAnimTime: number;
					public static design_snackbar_text_max_lines: number;
					public static design_tab_indicator_anim_duration_ms: number;
					public static google_play_services_version: number;
					public static hide_password_duration: number;
					public static mtrl_badge_max_character_count: number;
					public static mtrl_btn_anim_delay_ms: number;
					public static mtrl_btn_anim_duration_ms: number;
					public static mtrl_calendar_header_orientation: number;
					public static mtrl_calendar_selection_text_lines: number;
					public static mtrl_calendar_year_selector_span: number;
					public static mtrl_card_anim_delay_ms: number;
					public static mtrl_card_anim_duration_ms: number;
					public static mtrl_chip_anim_duration: number;
					public static mtrl_tab_indicator_anim_duration_ms: number;
					public static show_password_duration: number;
					public static status_bar_notification_info_maxnum: number;
					public static ucrop_progress_loading_anim_time: number;
					public constructor();
				}
				export class interpolator {
					public static class: java.lang.Class<com.xfl.msgbot.R.interpolator>;
					public static btn_checkbox_checked_mtrl_animation_interpolator_0: number;
					public static btn_checkbox_checked_mtrl_animation_interpolator_1: number;
					public static btn_checkbox_unchecked_mtrl_animation_interpolator_0: number;
					public static btn_checkbox_unchecked_mtrl_animation_interpolator_1: number;
					public static btn_radio_to_off_mtrl_animation_interpolator_0: number;
					public static btn_radio_to_on_mtrl_animation_interpolator_0: number;
					public static fast_out_slow_in: number;
					public static mtrl_fast_out_linear_in: number;
					public static mtrl_fast_out_slow_in: number;
					public static mtrl_linear: number;
					public static mtrl_linear_out_slow_in: number;
					public constructor();
				}
				export class layout {
					public static class: java.lang.Class<com.xfl.msgbot.R.layout>;
					public static abc_action_bar_title_item: number;
					public static abc_action_bar_up_container: number;
					public static abc_action_menu_item_layout: number;
					public static abc_action_menu_layout: number;
					public static abc_action_mode_bar: number;
					public static abc_action_mode_close_item_material: number;
					public static abc_activity_chooser_view: number;
					public static abc_activity_chooser_view_list_item: number;
					public static abc_alert_dialog_button_bar_material: number;
					public static abc_alert_dialog_material: number;
					public static abc_alert_dialog_title_material: number;
					public static abc_cascading_menu_item_layout: number;
					public static abc_dialog_title_material: number;
					public static abc_expanded_menu_layout: number;
					public static abc_list_menu_item_checkbox: number;
					public static abc_list_menu_item_icon: number;
					public static abc_list_menu_item_layout: number;
					public static abc_list_menu_item_radio: number;
					public static abc_popup_menu_header_item_layout: number;
					public static abc_popup_menu_item_layout: number;
					public static abc_screen_content_include: number;
					public static abc_screen_simple: number;
					public static abc_screen_simple_overlay_action_mode: number;
					public static abc_screen_toolbar: number;
					public static abc_search_dropdown_item_icons_2line: number;
					public static abc_search_view: number;
					public static abc_select_dialog_material: number;
					public static abc_tooltip: number;
					public static activity_crash_log: number;
					public static activity_debug_room: number;
					public static activity_directory_selector: number;
					public static activity_license: number;
					public static activity_lock: number;
					public static activity_logger_screen: number;
					public static activity_main: number;
					public static activity_matisse: number;
					public static activity_media_preview: number;
					public static activity_more: number;
					public static activity_package_select: number;
					public static activity_public_settings: number;
					public static activity_sand_box: number;
					public static activity_script: number;
					public static activity_script_editor: number;
					public static activity_script_settings: number;
					public static activity_splash: number;
					public static activity_test: number;
					public static activity_test2: number;
					public static activity_uncaught_exception: number;
					public static adsettings_activity: number;
					public static album_list_item: number;
					public static autocomplete_row: number;
					public static ayp_default_player_ui: number;
					public static ayp_empty_layout: number;
					public static ayp_menu_item: number;
					public static ayp_player_menu: number;
					public static browser_actions_context_menu_page: number;
					public static browser_actions_context_menu_row: number;
					public static content_test2: number;
					public static custom_alert: number;
					public static custom_dialog: number;
					public static debug_room_settings_activity: number;
					public static design_bottom_navigation_item: number;
					public static design_bottom_sheet_dialog: number;
					public static design_layout_snackbar: number;
					public static design_layout_snackbar_include: number;
					public static design_layout_tab_icon: number;
					public static design_layout_tab_text: number;
					public static design_menu_item_action_area: number;
					public static design_navigation_item: number;
					public static design_navigation_item_header: number;
					public static design_navigation_item_separator: number;
					public static design_navigation_item_subheader: number;
					public static design_navigation_menu: number;
					public static design_navigation_menu_item: number;
					public static design_text_input_end_icon: number;
					public static design_text_input_start_icon: number;
					public static dialog_color_picker: number;
					public static dialog_editor_loading: number;
					public static expand_button: number;
					public static fragment_media_selection: number;
					public static fragment_preview_item: number;
					public static fragment_public_package_view: number;
					public static fragment_socket_connection: number;
					public static image_frame: number;
					public static item_chat_me: number;
					public static item_chat_opponent: number;
					public static item_developer: number;
					public static item_dir_view: number;
					public static item_directory_selector: number;
					public static item_edit_bottom: number;
					public static item_error_list: number;
					public static item_log_card: number;
					public static item_package: number;
					public static item_script_card: number;
					public static layout_code_editor: number;
					public static layout_code_editor_wrapped: number;
					public static layout_script_edit_popup: number;
					public static leak_canary_about_screen: number;
					public static leak_canary_heap_analysis_failure_screen: number;
					public static leak_canary_heap_dump_leak_title: number;
					public static leak_canary_heap_dump_toast: number;
					public static leak_canary_heap_dumps_screen: number;
					public static leak_canary_heap_render: number;
					public static leak_canary_hprof_explorer: number;
					public static leak_canary_leak_activity: number;
					public static leak_canary_leak_header: number;
					public static leak_canary_leak_row: number;
					public static leak_canary_leak_screen: number;
					public static leak_canary_list: number;
					public static leak_canary_ref_row: number;
					public static leak_canary_simple_row: number;
					public static material_chip_input_combo: number;
					public static material_clock_display: number;
					public static material_clock_display_divider: number;
					public static material_clock_period_toggle: number;
					public static material_clock_period_toggle_land: number;
					public static material_clockface_textview: number;
					public static material_clockface_view: number;
					public static material_radial_view_group: number;
					public static material_textinput_timepicker: number;
					public static material_time_chip: number;
					public static material_time_input: number;
					public static material_timepicker: number;
					public static material_timepicker_dialog: number;
					public static material_timepicker_textinput_display: number;
					public static media_grid_content: number;
					public static media_grid_item: number;
					public static mtrl_alert_dialog: number;
					public static mtrl_alert_dialog_actions: number;
					public static mtrl_alert_dialog_title: number;
					public static mtrl_alert_select_dialog_item: number;
					public static mtrl_alert_select_dialog_multichoice: number;
					public static mtrl_alert_select_dialog_singlechoice: number;
					public static mtrl_calendar_day: number;
					public static mtrl_calendar_day_of_week: number;
					public static mtrl_calendar_days_of_week: number;
					public static mtrl_calendar_horizontal: number;
					public static mtrl_calendar_month: number;
					public static mtrl_calendar_month_labeled: number;
					public static mtrl_calendar_month_navigation: number;
					public static mtrl_calendar_months: number;
					public static mtrl_calendar_vertical: number;
					public static mtrl_calendar_year: number;
					public static mtrl_layout_snackbar: number;
					public static mtrl_layout_snackbar_include: number;
					public static mtrl_picker_actions: number;
					public static mtrl_picker_dialog: number;
					public static mtrl_picker_fullscreen: number;
					public static mtrl_picker_header_dialog: number;
					public static mtrl_picker_header_fullscreen: number;
					public static mtrl_picker_header_selection_text: number;
					public static mtrl_picker_header_title_text: number;
					public static mtrl_picker_header_toggle: number;
					public static mtrl_picker_text_input_date: number;
					public static mtrl_picker_text_input_date_range: number;
					public static notification_action: number;
					public static notification_action_tombstone: number;
					public static notification_media_action: number;
					public static notification_media_cancel_action: number;
					public static notification_template_big_media: number;
					public static notification_template_big_media_custom: number;
					public static notification_template_big_media_narrow: number;
					public static notification_template_big_media_narrow_custom: number;
					public static notification_template_custom_big: number;
					public static notification_template_icon_group: number;
					public static notification_template_lines_media: number;
					public static notification_template_media: number;
					public static notification_template_media_custom: number;
					public static notification_template_part_chronometer: number;
					public static notification_template_part_time: number;
					public static page_lock_v1: number;
					public static page_lock_v2: number;
					public static page_sandbox: number;
					public static page_script_create: number;
					public static page_script_editor_search: number;
					public static photo_capture_item: number;
					public static preference: number;
					public static preference_category: number;
					public static preference_category_material: number;
					public static preference_category_material_custom: number;
					public static preference_dialog_edittext: number;
					public static preference_dropdown: number;
					public static preference_dropdown_material: number;
					public static preference_information: number;
					public static preference_information_material: number;
					public static preference_list_fragment: number;
					public static preference_material: number;
					public static preference_recyclerview: number;
					public static preference_widget_checkbox: number;
					public static preference_widget_seekbar: number;
					public static preference_widget_seekbar_material: number;
					public static preference_widget_switch: number;
					public static preference_widget_switch_compat: number;
					public static scroll_view: number;
					public static select_dialog_item_material: number;
					public static select_dialog_multichoice_material: number;
					public static select_dialog_singlechoice_material: number;
					public static simple_dropdown_item_1line_small: number;
					public static support_simple_spinner_dropdown_item: number;
					public static switch_item: number;
					public static test_action_chip: number;
					public static test_chip_zero_corner_radius: number;
					public static test_design_checkbox: number;
					public static test_design_radiobutton: number;
					public static test_reflow_chipgroup: number;
					public static test_toolbar: number;
					public static test_toolbar_custom_background: number;
					public static test_toolbar_elevation: number;
					public static test_toolbar_surface: number;
					public static text_view_with_line_height_from_appearance: number;
					public static text_view_with_line_height_from_layout: number;
					public static text_view_with_line_height_from_style: number;
					public static text_view_with_theme_line_height: number;
					public static text_view_without_line_height: number;
					public static thin_dropdown_item_1line: number;
					public static ucrop_activity_photobox: number;
					public static ucrop_aspect_ratio: number;
					public static ucrop_controls: number;
					public static ucrop_fragment_photobox: number;
					public static ucrop_layout_rotate_wheel: number;
					public static ucrop_layout_scale_wheel: number;
					public static ucrop_view: number;
					public static very_simple_item_1: number;
					public static widget_floating_text_button: number;
					public constructor();
				}
				export class menu {
					public static class: java.lang.Class<com.xfl.msgbot.R.menu>;
					public static action_mode_menu: number;
					public static menu_debug_room: number;
					public static menu_logger: number;
					public static menu_main: number;
					public static menu_more: number;
					public static menu_package: number;
					public static menu_popup: number;
					public static menu_script_editor: number;
					public static menu_script_editor_search: number;
					public static menu_test_activity2: number;
					public static ucrop_menu_activity: number;
					public constructor();
				}
				export class mipmap {
					public static class: java.lang.Class<com.xfl.msgbot.R.mipmap>;
					public static ic_launcher: number;
					public static ic_launcher_background: number;
					public static ic_launcher_foreground: number;
					public static ic_launcher_round: number;
					public static leak_canary_icon: number;
					public constructor();
				}
				export class plurals {
					public static class: java.lang.Class<com.xfl.msgbot.R.plurals>;
					public static leak_canary_distinct_leaks: number;
					public static leak_canary_group_screen_title: number;
					public static mtrl_badge_content_description: number;
					public constructor();
				}
				export class raw {
					public static class: java.lang.Class<com.xfl.msgbot.R.raw>;
					public static ayp_youtube_player: number;
					public static debug_profile: number;
					public static dev_small: number;
					public static dev_small_cp: number;
					public static intro_scale: number;
					public static miku: number;
					public static penchi: number;
					public static under_the_water: number;
					public static zyahi: number;
					public constructor();
				}
				export class style {
					public static class: java.lang.Class<com.xfl.msgbot.R.style>;
					public static AlertDialog_AppCompat: number;
					public static AlertDialog_AppCompat_Light: number;
					public static AndroidThemeColorAccentYellow: number;
					public static Animation_AppCompat_Dialog: number;
					public static Animation_AppCompat_DropDownUp: number;
					public static Animation_AppCompat_Tooltip: number;
					public static Animation_Design_BottomSheetDialog: number;
					public static Animation_MaterialComponents_BottomSheetDialog: number;
					public static AppTheme: number;
					public static AppTheme_AppBarOverlay: number;
					public static AppTheme_Colored: number;
					public static AppTheme_DarkActionBar: number;
					public static AppTheme_PopupOverlay: number;
					public static AppTheme_Transparent: number;
					public static AppTheme_Transparent_TextAppearance: number;
					public static Base_AlertDialog_AppCompat: number;
					public static Base_AlertDialog_AppCompat_Light: number;
					public static Base_Animation_AppCompat_Dialog: number;
					public static Base_Animation_AppCompat_DropDownUp: number;
					public static Base_Animation_AppCompat_Tooltip: number;
					public static Base_CardView: number;
					public static Base_DialogWindowTitleBackground_AppCompat: number;
					public static Base_DialogWindowTitle_AppCompat: number;
					public static Base_MaterialAlertDialog_MaterialComponents_Title_Icon: number;
					public static Base_MaterialAlertDialog_MaterialComponents_Title_Panel: number;
					public static Base_MaterialAlertDialog_MaterialComponents_Title_Text: number;
					public static Base_TextAppearance_AppCompat: number;
					public static Base_TextAppearance_AppCompat_Body1: number;
					public static Base_TextAppearance_AppCompat_Body2: number;
					public static Base_TextAppearance_AppCompat_Button: number;
					public static Base_TextAppearance_AppCompat_Caption: number;
					public static Base_TextAppearance_AppCompat_Display1: number;
					public static Base_TextAppearance_AppCompat_Display2: number;
					public static Base_TextAppearance_AppCompat_Display3: number;
					public static Base_TextAppearance_AppCompat_Display4: number;
					public static Base_TextAppearance_AppCompat_Headline: number;
					public static Base_TextAppearance_AppCompat_Inverse: number;
					public static Base_TextAppearance_AppCompat_Large: number;
					public static Base_TextAppearance_AppCompat_Large_Inverse: number;
					public static Base_TextAppearance_AppCompat_Light_Widget_PopupMenu_Large: number;
					public static Base_TextAppearance_AppCompat_Light_Widget_PopupMenu_Small: number;
					public static Base_TextAppearance_AppCompat_Medium: number;
					public static Base_TextAppearance_AppCompat_Medium_Inverse: number;
					public static Base_TextAppearance_AppCompat_Menu: number;
					public static Base_TextAppearance_AppCompat_SearchResult: number;
					public static Base_TextAppearance_AppCompat_SearchResult_Subtitle: number;
					public static Base_TextAppearance_AppCompat_SearchResult_Title: number;
					public static Base_TextAppearance_AppCompat_Small: number;
					public static Base_TextAppearance_AppCompat_Small_Inverse: number;
					public static Base_TextAppearance_AppCompat_Subhead: number;
					public static Base_TextAppearance_AppCompat_Subhead_Inverse: number;
					public static Base_TextAppearance_AppCompat_Title: number;
					public static Base_TextAppearance_AppCompat_Title_Inverse: number;
					public static Base_TextAppearance_AppCompat_Tooltip: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionBar_Menu: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionBar_Subtitle: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionBar_Subtitle_Inverse: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionBar_Title: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionBar_Title_Inverse: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionMode_Subtitle: number;
					public static Base_TextAppearance_AppCompat_Widget_ActionMode_Title: number;
					public static Base_TextAppearance_AppCompat_Widget_Button: number;
					public static Base_TextAppearance_AppCompat_Widget_Button_Borderless_Colored: number;
					public static Base_TextAppearance_AppCompat_Widget_Button_Colored: number;
					public static Base_TextAppearance_AppCompat_Widget_Button_Inverse: number;
					public static Base_TextAppearance_AppCompat_Widget_DropDownItem: number;
					public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Header: number;
					public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Large: number;
					public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Small: number;
					public static Base_TextAppearance_AppCompat_Widget_Switch: number;
					public static Base_TextAppearance_AppCompat_Widget_TextView_SpinnerItem: number;
					public static Base_TextAppearance_MaterialComponents_Badge: number;
					public static Base_TextAppearance_MaterialComponents_Button: number;
					public static Base_TextAppearance_MaterialComponents_Headline6: number;
					public static Base_TextAppearance_MaterialComponents_Subtitle2: number;
					public static Base_TextAppearance_Widget_AppCompat_ExpandedMenu_Item: number;
					public static Base_TextAppearance_Widget_AppCompat_Toolbar_Subtitle: number;
					public static Base_TextAppearance_Widget_AppCompat_Toolbar_Title: number;
					public static Base_ThemeOverlay_AppCompat: number;
					public static Base_ThemeOverlay_AppCompat_ActionBar: number;
					public static Base_ThemeOverlay_AppCompat_Dark: number;
					public static Base_ThemeOverlay_AppCompat_Dark_ActionBar: number;
					public static Base_ThemeOverlay_AppCompat_Dialog: number;
					public static Base_ThemeOverlay_AppCompat_Dialog_Alert: number;
					public static Base_ThemeOverlay_AppCompat_Light: number;
					public static Base_ThemeOverlay_MaterialComponents_Dialog: number;
					public static Base_ThemeOverlay_MaterialComponents_Dialog_Alert: number;
					public static Base_ThemeOverlay_MaterialComponents_Dialog_Alert_Framework: number;
					public static Base_ThemeOverlay_MaterialComponents_Light_Dialog_Alert_Framework: number;
					public static Base_ThemeOverlay_MaterialComponents_MaterialAlertDialog: number;
					public static Base_Theme_AppCompat: number;
					public static Base_Theme_AppCompat_CompactMenu: number;
					public static Base_Theme_AppCompat_Dialog: number;
					public static Base_Theme_AppCompat_DialogWhenLarge: number;
					public static Base_Theme_AppCompat_Dialog_Alert: number;
					public static Base_Theme_AppCompat_Dialog_FixedSize: number;
					public static Base_Theme_AppCompat_Dialog_MinWidth: number;
					public static Base_Theme_AppCompat_Light: number;
					public static Base_Theme_AppCompat_Light_DarkActionBar: number;
					public static Base_Theme_AppCompat_Light_Dialog: number;
					public static Base_Theme_AppCompat_Light_DialogWhenLarge: number;
					public static Base_Theme_AppCompat_Light_Dialog_Alert: number;
					public static Base_Theme_AppCompat_Light_Dialog_FixedSize: number;
					public static Base_Theme_AppCompat_Light_Dialog_MinWidth: number;
					public static Base_Theme_MaterialComponents: number;
					public static Base_Theme_MaterialComponents_Bridge: number;
					public static Base_Theme_MaterialComponents_CompactMenu: number;
					public static Base_Theme_MaterialComponents_Dialog: number;
					public static Base_Theme_MaterialComponents_DialogWhenLarge: number;
					public static Base_Theme_MaterialComponents_Dialog_Alert: number;
					public static Base_Theme_MaterialComponents_Dialog_Bridge: number;
					public static Base_Theme_MaterialComponents_Dialog_FixedSize: number;
					public static Base_Theme_MaterialComponents_Dialog_MinWidth: number;
					public static Base_Theme_MaterialComponents_Light: number;
					public static Base_Theme_MaterialComponents_Light_Bridge: number;
					public static Base_Theme_MaterialComponents_Light_DarkActionBar: number;
					public static Base_Theme_MaterialComponents_Light_DarkActionBar_Bridge: number;
					public static Base_Theme_MaterialComponents_Light_Dialog: number;
					public static Base_Theme_MaterialComponents_Light_DialogWhenLarge: number;
					public static Base_Theme_MaterialComponents_Light_Dialog_Alert: number;
					public static Base_Theme_MaterialComponents_Light_Dialog_Bridge: number;
					public static Base_Theme_MaterialComponents_Light_Dialog_FixedSize: number;
					public static Base_Theme_MaterialComponents_Light_Dialog_MinWidth: number;
					public static Base_V14_ThemeOverlay_MaterialComponents_Dialog: number;
					public static Base_V14_ThemeOverlay_MaterialComponents_Dialog_Alert: number;
					public static Base_V14_ThemeOverlay_MaterialComponents_MaterialAlertDialog: number;
					public static Base_V14_Theme_MaterialComponents: number;
					public static Base_V14_Theme_MaterialComponents_Bridge: number;
					public static Base_V14_Theme_MaterialComponents_Dialog: number;
					public static Base_V14_Theme_MaterialComponents_Dialog_Bridge: number;
					public static Base_V14_Theme_MaterialComponents_Light: number;
					public static Base_V14_Theme_MaterialComponents_Light_Bridge: number;
					public static Base_V14_Theme_MaterialComponents_Light_DarkActionBar_Bridge: number;
					public static Base_V14_Theme_MaterialComponents_Light_Dialog: number;
					public static Base_V14_Theme_MaterialComponents_Light_Dialog_Bridge: number;
					public static Base_V21_ThemeOverlay_AppCompat_Dialog: number;
					public static Base_V21_Theme_AppCompat: number;
					public static Base_V21_Theme_AppCompat_Dialog: number;
					public static Base_V21_Theme_AppCompat_Light: number;
					public static Base_V21_Theme_AppCompat_Light_Dialog: number;
					public static Base_V21_Theme_MaterialComponents: number;
					public static Base_V21_Theme_MaterialComponents_Dialog: number;
					public static Base_V21_Theme_MaterialComponents_Light: number;
					public static Base_V21_Theme_MaterialComponents_Light_Dialog: number;
					public static Base_V22_Theme_AppCompat: number;
					public static Base_V22_Theme_AppCompat_Light: number;
					public static Base_V23_Theme_AppCompat: number;
					public static Base_V23_Theme_AppCompat_Light: number;
					public static Base_V26_Theme_AppCompat: number;
					public static Base_V26_Theme_AppCompat_Light: number;
					public static Base_V26_Widget_AppCompat_Toolbar: number;
					public static Base_V28_Theme_AppCompat: number;
					public static Base_V28_Theme_AppCompat_Light: number;
					public static Base_V7_ThemeOverlay_AppCompat_Dialog: number;
					public static Base_V7_Theme_AppCompat: number;
					public static Base_V7_Theme_AppCompat_Dialog: number;
					public static Base_V7_Theme_AppCompat_Light: number;
					public static Base_V7_Theme_AppCompat_Light_Dialog: number;
					public static Base_V7_Widget_AppCompat_AutoCompleteTextView: number;
					public static Base_V7_Widget_AppCompat_EditText: number;
					public static Base_V7_Widget_AppCompat_Toolbar: number;
					public static Base_Widget_AppCompat_ActionBar: number;
					public static Base_Widget_AppCompat_ActionBar_Solid: number;
					public static Base_Widget_AppCompat_ActionBar_TabBar: number;
					public static Base_Widget_AppCompat_ActionBar_TabText: number;
					public static Base_Widget_AppCompat_ActionBar_TabView: number;
					public static Base_Widget_AppCompat_ActionButton: number;
					public static Base_Widget_AppCompat_ActionButton_CloseMode: number;
					public static Base_Widget_AppCompat_ActionButton_Overflow: number;
					public static Base_Widget_AppCompat_ActionMode: number;
					public static Base_Widget_AppCompat_ActivityChooserView: number;
					public static Base_Widget_AppCompat_AutoCompleteTextView: number;
					public static Base_Widget_AppCompat_Button: number;
					public static Base_Widget_AppCompat_ButtonBar: number;
					public static Base_Widget_AppCompat_ButtonBar_AlertDialog: number;
					public static Base_Widget_AppCompat_Button_Borderless: number;
					public static Base_Widget_AppCompat_Button_Borderless_Colored: number;
					public static Base_Widget_AppCompat_Button_ButtonBar_AlertDialog: number;
					public static Base_Widget_AppCompat_Button_Colored: number;
					public static Base_Widget_AppCompat_Button_Small: number;
					public static Base_Widget_AppCompat_CompoundButton_CheckBox: number;
					public static Base_Widget_AppCompat_CompoundButton_RadioButton: number;
					public static Base_Widget_AppCompat_CompoundButton_Switch: number;
					public static Base_Widget_AppCompat_DrawerArrowToggle: number;
					public static Base_Widget_AppCompat_DrawerArrowToggle_Common: number;
					public static Base_Widget_AppCompat_DropDownItem_Spinner: number;
					public static Base_Widget_AppCompat_EditText: number;
					public static Base_Widget_AppCompat_ImageButton: number;
					public static Base_Widget_AppCompat_Light_ActionBar: number;
					public static Base_Widget_AppCompat_Light_ActionBar_Solid: number;
					public static Base_Widget_AppCompat_Light_ActionBar_TabBar: number;
					public static Base_Widget_AppCompat_Light_ActionBar_TabText: number;
					public static Base_Widget_AppCompat_Light_ActionBar_TabText_Inverse: number;
					public static Base_Widget_AppCompat_Light_ActionBar_TabView: number;
					public static Base_Widget_AppCompat_Light_PopupMenu: number;
					public static Base_Widget_AppCompat_Light_PopupMenu_Overflow: number;
					public static Base_Widget_AppCompat_ListMenuView: number;
					public static Base_Widget_AppCompat_ListPopupWindow: number;
					public static Base_Widget_AppCompat_ListView: number;
					public static Base_Widget_AppCompat_ListView_DropDown: number;
					public static Base_Widget_AppCompat_ListView_Menu: number;
					public static Base_Widget_AppCompat_PopupMenu: number;
					public static Base_Widget_AppCompat_PopupMenu_Overflow: number;
					public static Base_Widget_AppCompat_PopupWindow: number;
					public static Base_Widget_AppCompat_ProgressBar: number;
					public static Base_Widget_AppCompat_ProgressBar_Horizontal: number;
					public static Base_Widget_AppCompat_RatingBar: number;
					public static Base_Widget_AppCompat_RatingBar_Indicator: number;
					public static Base_Widget_AppCompat_RatingBar_Small: number;
					public static Base_Widget_AppCompat_SearchView: number;
					public static Base_Widget_AppCompat_SearchView_ActionBar: number;
					public static Base_Widget_AppCompat_SeekBar: number;
					public static Base_Widget_AppCompat_SeekBar_Discrete: number;
					public static Base_Widget_AppCompat_Spinner: number;
					public static Base_Widget_AppCompat_Spinner_Underlined: number;
					public static Base_Widget_AppCompat_TextView: number;
					public static Base_Widget_AppCompat_TextView_SpinnerItem: number;
					public static Base_Widget_AppCompat_Toolbar: number;
					public static Base_Widget_AppCompat_Toolbar_Button_Navigation: number;
					public static Base_Widget_Design_TabLayout: number;
					public static Base_Widget_MaterialComponents_AutoCompleteTextView: number;
					public static Base_Widget_MaterialComponents_CheckedTextView: number;
					public static Base_Widget_MaterialComponents_Chip: number;
					public static Base_Widget_MaterialComponents_PopupMenu: number;
					public static Base_Widget_MaterialComponents_PopupMenu_ContextMenu: number;
					public static Base_Widget_MaterialComponents_PopupMenu_ListPopupWindow: number;
					public static Base_Widget_MaterialComponents_PopupMenu_Overflow: number;
					public static Base_Widget_MaterialComponents_ProgressIndicator: number;
					public static Base_Widget_MaterialComponents_ProgressIndicator_Circular: number;
					public static Base_Widget_MaterialComponents_ProgressIndicator_Custom: number;
					public static Base_Widget_MaterialComponents_ProgressIndicator_Linear: number;
					public static Base_Widget_MaterialComponents_Slider: number;
					public static Base_Widget_MaterialComponents_TextInputEditText: number;
					public static Base_Widget_MaterialComponents_TextInputLayout: number;
					public static Base_Widget_MaterialComponents_TextView: number;
					public static BlackTheme: number;
					public static BlackTheme_NoActionBar: number;
					public static BlackTheme_PopupOverlay: number;
					public static BrightTheme: number;
					public static BrightTheme_NoActionBar: number;
					public static BrightTheme_NoActionBar_AppBarOverlay: number;
					public static BrightTheme_NoActionBar_NoActionBar: number;
					public static BrightTheme_NoActionBar_PopupOverlay: number;
					public static BrightTheme_PopupOverlay: number;
					public static CardView: number;
					public static CardViewStyle: number;
					public static CardView_Dark: number;
					public static CardView_Light: number;
					public static DialogFab: number;
					public static EmptyTheme: number;
					public static FullscreenActionBarStyle: number;
					public static FullscreenTheme: number;
					public static MaterialAlertDialog_MaterialComponents: number;
					public static MaterialAlertDialog_MaterialComponents_Body_Text: number;
					public static MaterialAlertDialog_MaterialComponents_Picker_Date_Calendar: number;
					public static MaterialAlertDialog_MaterialComponents_Picker_Date_Spinner: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Icon: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Icon_CenterStacked: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Panel: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Panel_CenterStacked: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Text: number;
					public static MaterialAlertDialog_MaterialComponents_Title_Text_CenterStacked: number;
					public static Matisse_Dracula: number;
					public static Matisse_Zhihu: number;
					public static MikuTheme: number;
					public static MikuTheme_NoActionBar: number;
					public static MikuTheme_PopupOverlay: number;
					public static PastTheme: number;
					public static PastTheme_NoActionBar: number;
					public static PastTheme_PopupOverlay: number;
					public static Platform_AppCompat: number;
					public static Platform_AppCompat_Light: number;
					public static Platform_MaterialComponents: number;
					public static Platform_MaterialComponents_Dialog: number;
					public static Platform_MaterialComponents_Light: number;
					public static Platform_MaterialComponents_Light_Dialog: number;
					public static Platform_ThemeOverlay_AppCompat: number;
					public static Platform_ThemeOverlay_AppCompat_Dark: number;
					public static Platform_ThemeOverlay_AppCompat_Light: number;
					public static Platform_V21_AppCompat: number;
					public static Platform_V21_AppCompat_Light: number;
					public static Platform_V25_AppCompat: number;
					public static Platform_V25_AppCompat_Light: number;
					public static Platform_Widget_AppCompat_Spinner: number;
					public static Popup_Dracula: number;
					public static Popup_Zhihu: number;
					public static Preference: number;
					public static PreferenceCategoryTitleTextStyle: number;
					public static PreferenceFragment: number;
					public static PreferenceFragmentList: number;
					public static PreferenceFragmentList_Material: number;
					public static PreferenceFragment_Material: number;
					public static PreferenceSummaryTextStyle: number;
					public static PreferenceThemeOverlay: number;
					public static PreferenceThemeOverlay_v14: number;
					public static PreferenceThemeOverlay_v14_Material: number;
					public static Preference_Category: number;
					public static Preference_Category_Material: number;
					public static Preference_CheckBoxPreference: number;
					public static Preference_CheckBoxPreference_Material: number;
					public static Preference_DialogPreference: number;
					public static Preference_DialogPreference_EditTextPreference: number;
					public static Preference_DialogPreference_EditTextPreference_Material: number;
					public static Preference_DialogPreference_Material: number;
					public static Preference_DropDown: number;
					public static Preference_DropDown_Material: number;
					public static Preference_Information: number;
					public static Preference_Information_Material: number;
					public static Preference_Material: number;
					public static Preference_PreferenceScreen: number;
					public static Preference_PreferenceScreen_Material: number;
					public static Preference_SeekBarPreference: number;
					public static Preference_SeekBarPreference_Material: number;
					public static Preference_SwitchPreference: number;
					public static Preference_SwitchPreferenceCompat: number;
					public static Preference_SwitchPreferenceCompat_Material: number;
					public static Preference_SwitchPreference_Material: number;
					public static Preference_TextAppearanceMaterialSubhead: number;
					public static RtlOverlay_DialogWindowTitle_AppCompat: number;
					public static RtlOverlay_Widget_AppCompat_ActionBar_TitleItem: number;
					public static RtlOverlay_Widget_AppCompat_DialogTitle_Icon: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem_InternalGroup: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Shortcut: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem_SubmenuArrow: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Text: number;
					public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Title: number;
					public static RtlOverlay_Widget_AppCompat_SearchView_MagIcon: number;
					public static RtlOverlay_Widget_AppCompat_Search_DropDown: number;
					public static RtlOverlay_Widget_AppCompat_Search_DropDown_Icon1: number;
					public static RtlOverlay_Widget_AppCompat_Search_DropDown_Icon2: number;
					public static RtlOverlay_Widget_AppCompat_Search_DropDown_Query: number;
					public static RtlOverlay_Widget_AppCompat_Search_DropDown_Text: number;
					public static RtlUnderlay_Widget_AppCompat_ActionButton: number;
					public static RtlUnderlay_Widget_AppCompat_ActionButton_Overflow: number;
					public static ShapeAppearanceOverlay: number;
					public static ShapeAppearanceOverlay_BottomLeftDifferentCornerSize: number;
					public static ShapeAppearanceOverlay_BottomRightCut: number;
					public static ShapeAppearanceOverlay_Cut: number;
					public static ShapeAppearanceOverlay_DifferentCornerSize: number;
					public static ShapeAppearanceOverlay_MaterialComponents_BottomSheet: number;
					public static ShapeAppearanceOverlay_MaterialComponents_Chip: number;
					public static ShapeAppearanceOverlay_MaterialComponents_ExtendedFloatingActionButton: number;
					public static ShapeAppearanceOverlay_MaterialComponents_FloatingActionButton: number;
					public static ShapeAppearanceOverlay_MaterialComponents_MaterialCalendar_Day: number;
					public static ShapeAppearanceOverlay_MaterialComponents_MaterialCalendar_Window_Fullscreen: number;
					public static ShapeAppearanceOverlay_MaterialComponents_MaterialCalendar_Year: number;
					public static ShapeAppearanceOverlay_MaterialComponents_TextInputLayout_FilledBox: number;
					public static ShapeAppearanceOverlay_TopLeftCut: number;
					public static ShapeAppearanceOverlay_TopRightDifferentCornerSize: number;
					public static ShapeAppearance_MaterialComponents: number;
					public static ShapeAppearance_MaterialComponents_LargeComponent: number;
					public static ShapeAppearance_MaterialComponents_MediumComponent: number;
					public static ShapeAppearance_MaterialComponents_SmallComponent: number;
					public static ShapeAppearance_MaterialComponents_Test: number;
					public static ShapeAppearance_MaterialComponents_Tooltip: number;
					public static SplashStyle: number;
					public static TestStyleWithLineHeight: number;
					public static TestStyleWithLineHeightAppearance: number;
					public static TestStyleWithThemeLineHeightAttribute: number;
					public static TestStyleWithoutLineHeight: number;
					public static TestThemeWithLineHeight: number;
					public static TestThemeWithLineHeightDisabled: number;
					public static Test_ShapeAppearanceOverlay_MaterialComponents_MaterialCalendar_Day: number;
					public static Test_Theme_MaterialComponents_MaterialCalendar: number;
					public static Test_Widget_MaterialComponents_MaterialCalendar: number;
					public static Test_Widget_MaterialComponents_MaterialCalendar_Day: number;
					public static Test_Widget_MaterialComponents_MaterialCalendar_Day_Selected: number;
					public static TextAppearance_AppCompat: number;
					public static TextAppearance_AppCompat_Body1: number;
					public static TextAppearance_AppCompat_Body2: number;
					public static TextAppearance_AppCompat_Button: number;
					public static TextAppearance_AppCompat_Caption: number;
					public static TextAppearance_AppCompat_Display1: number;
					public static TextAppearance_AppCompat_Display2: number;
					public static TextAppearance_AppCompat_Display3: number;
					public static TextAppearance_AppCompat_Display4: number;
					public static TextAppearance_AppCompat_Headline: number;
					public static TextAppearance_AppCompat_Inverse: number;
					public static TextAppearance_AppCompat_Large: number;
					public static TextAppearance_AppCompat_Large_Inverse: number;
					public static TextAppearance_AppCompat_Light_SearchResult_Subtitle: number;
					public static TextAppearance_AppCompat_Light_SearchResult_Title: number;
					public static TextAppearance_AppCompat_Light_Widget_PopupMenu_Large: number;
					public static TextAppearance_AppCompat_Light_Widget_PopupMenu_Small: number;
					public static TextAppearance_AppCompat_Medium: number;
					public static TextAppearance_AppCompat_Medium_Inverse: number;
					public static TextAppearance_AppCompat_Menu: number;
					public static TextAppearance_AppCompat_SearchResult_Subtitle: number;
					public static TextAppearance_AppCompat_SearchResult_Title: number;
					public static TextAppearance_AppCompat_Small: number;
					public static TextAppearance_AppCompat_Small_Inverse: number;
					public static TextAppearance_AppCompat_Subhead: number;
					public static TextAppearance_AppCompat_Subhead_Inverse: number;
					public static TextAppearance_AppCompat_Title: number;
					public static TextAppearance_AppCompat_Title_Inverse: number;
					public static TextAppearance_AppCompat_Tooltip: number;
					public static TextAppearance_AppCompat_Widget_ActionBar_Menu: number;
					public static TextAppearance_AppCompat_Widget_ActionBar_Subtitle: number;
					public static TextAppearance_AppCompat_Widget_ActionBar_Subtitle_Inverse: number;
					public static TextAppearance_AppCompat_Widget_ActionBar_Title: number;
					public static TextAppearance_AppCompat_Widget_ActionBar_Title_Inverse: number;
					public static TextAppearance_AppCompat_Widget_ActionMode_Subtitle: number;
					public static TextAppearance_AppCompat_Widget_ActionMode_Subtitle_Inverse: number;
					public static TextAppearance_AppCompat_Widget_ActionMode_Title: number;
					public static TextAppearance_AppCompat_Widget_ActionMode_Title_Inverse: number;
					public static TextAppearance_AppCompat_Widget_Button: number;
					public static TextAppearance_AppCompat_Widget_Button_Borderless_Colored: number;
					public static TextAppearance_AppCompat_Widget_Button_Colored: number;
					public static TextAppearance_AppCompat_Widget_Button_Inverse: number;
					public static TextAppearance_AppCompat_Widget_DropDownItem: number;
					public static TextAppearance_AppCompat_Widget_PopupMenu_Header: number;
					public static TextAppearance_AppCompat_Widget_PopupMenu_Large: number;
					public static TextAppearance_AppCompat_Widget_PopupMenu_Small: number;
					public static TextAppearance_AppCompat_Widget_Switch: number;
					public static TextAppearance_AppCompat_Widget_TextView_SpinnerItem: number;
					public static TextAppearance_Compat_Notification: number;
					public static TextAppearance_Compat_Notification_Info: number;
					public static TextAppearance_Compat_Notification_Info_Media: number;
					public static TextAppearance_Compat_Notification_Line2: number;
					public static TextAppearance_Compat_Notification_Line2_Media: number;
					public static TextAppearance_Compat_Notification_Media: number;
					public static TextAppearance_Compat_Notification_Time: number;
					public static TextAppearance_Compat_Notification_Time_Media: number;
					public static TextAppearance_Compat_Notification_Title: number;
					public static TextAppearance_Compat_Notification_Title_Media: number;
					public static TextAppearance_Design_CollapsingToolbar_Expanded: number;
					public static TextAppearance_Design_Counter: number;
					public static TextAppearance_Design_Counter_Overflow: number;
					public static TextAppearance_Design_Error: number;
					public static TextAppearance_Design_HelperText: number;
					public static TextAppearance_Design_Hint: number;
					public static TextAppearance_Design_Placeholder: number;
					public static TextAppearance_Design_Prefix: number;
					public static TextAppearance_Design_Snackbar_Message: number;
					public static TextAppearance_Design_Suffix: number;
					public static TextAppearance_Design_Tab: number;
					public static TextAppearance_MaterialComponents_Badge: number;
					public static TextAppearance_MaterialComponents_Body1: number;
					public static TextAppearance_MaterialComponents_Body2: number;
					public static TextAppearance_MaterialComponents_Button: number;
					public static TextAppearance_MaterialComponents_Caption: number;
					public static TextAppearance_MaterialComponents_Chip: number;
					public static TextAppearance_MaterialComponents_Headline1: number;
					public static TextAppearance_MaterialComponents_Headline2: number;
					public static TextAppearance_MaterialComponents_Headline3: number;
					public static TextAppearance_MaterialComponents_Headline4: number;
					public static TextAppearance_MaterialComponents_Headline5: number;
					public static TextAppearance_MaterialComponents_Headline6: number;
					public static TextAppearance_MaterialComponents_Overline: number;
					public static TextAppearance_MaterialComponents_Subtitle1: number;
					public static TextAppearance_MaterialComponents_Subtitle2: number;
					public static TextAppearance_MaterialComponents_Tooltip: number;
					public static TextAppearance_Widget_AppCompat_ExpandedMenu_Item: number;
					public static TextAppearance_Widget_AppCompat_Toolbar_Subtitle: number;
					public static TextAppearance_Widget_AppCompat_Toolbar_Title: number;
					public static ThemeOverlayColorAccentRed: number;
					public static ThemeOverlay_AppCompat: number;
					public static ThemeOverlay_AppCompat_ActionBar: number;
					public static ThemeOverlay_AppCompat_Dark: number;
					public static ThemeOverlay_AppCompat_Dark_ActionBar: number;
					public static ThemeOverlay_AppCompat_DayNight: number;
					public static ThemeOverlay_AppCompat_DayNight_ActionBar: number;
					public static ThemeOverlay_AppCompat_Dialog: number;
					public static ThemeOverlay_AppCompat_Dialog_Alert: number;
					public static ThemeOverlay_AppCompat_Light: number;
					public static ThemeOverlay_Design_TextInputEditText: number;
					public static ThemeOverlay_MaterialComponents: number;
					public static ThemeOverlay_MaterialComponents_ActionBar: number;
					public static ThemeOverlay_MaterialComponents_ActionBar_Primary: number;
					public static ThemeOverlay_MaterialComponents_ActionBar_Surface: number;
					public static ThemeOverlay_MaterialComponents_AutoCompleteTextView: number;
					public static ThemeOverlay_MaterialComponents_AutoCompleteTextView_FilledBox: number;
					public static ThemeOverlay_MaterialComponents_AutoCompleteTextView_FilledBox_Dense: number;
					public static ThemeOverlay_MaterialComponents_AutoCompleteTextView_OutlinedBox: number;
					public static ThemeOverlay_MaterialComponents_AutoCompleteTextView_OutlinedBox_Dense: number;
					public static ThemeOverlay_MaterialComponents_BottomAppBar_Primary: number;
					public static ThemeOverlay_MaterialComponents_BottomAppBar_Surface: number;
					public static ThemeOverlay_MaterialComponents_BottomSheetDialog: number;
					public static ThemeOverlay_MaterialComponents_Dark: number;
					public static ThemeOverlay_MaterialComponents_Dark_ActionBar: number;
					public static ThemeOverlay_MaterialComponents_DayNight_BottomSheetDialog: number;
					public static ThemeOverlay_MaterialComponents_Dialog: number;
					public static ThemeOverlay_MaterialComponents_Dialog_Alert: number;
					public static ThemeOverlay_MaterialComponents_Dialog_Alert_Framework: number;
					public static ThemeOverlay_MaterialComponents_Light: number;
					public static ThemeOverlay_MaterialComponents_Light_BottomSheetDialog: number;
					public static ThemeOverlay_MaterialComponents_Light_Dialog_Alert_Framework: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Centered: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Picker_Date: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Picker_Date_Calendar: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Picker_Date_Header_Text: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Picker_Date_Header_Text_Day: number;
					public static ThemeOverlay_MaterialComponents_MaterialAlertDialog_Picker_Date_Spinner: number;
					public static ThemeOverlay_MaterialComponents_MaterialCalendar: number;
					public static ThemeOverlay_MaterialComponents_MaterialCalendar_Fullscreen: number;
					public static ThemeOverlay_MaterialComponents_TextInputEditText: number;
					public static ThemeOverlay_MaterialComponents_TextInputEditText_FilledBox: number;
					public static ThemeOverlay_MaterialComponents_TextInputEditText_FilledBox_Dense: number;
					public static ThemeOverlay_MaterialComponents_TextInputEditText_OutlinedBox: number;
					public static ThemeOverlay_MaterialComponents_TextInputEditText_OutlinedBox_Dense: number;
					public static ThemeOverlay_MaterialComponents_Toolbar_Primary: number;
					public static ThemeOverlay_MaterialComponents_Toolbar_Surface: number;
					public static Theme_AppCompat: number;
					public static Theme_AppCompat_CompactMenu: number;
					public static Theme_AppCompat_DayNight: number;
					public static Theme_AppCompat_DayNight_DarkActionBar: number;
					public static Theme_AppCompat_DayNight_Dialog: number;
					public static Theme_AppCompat_DayNight_DialogWhenLarge: number;
					public static Theme_AppCompat_DayNight_Dialog_Alert: number;
					public static Theme_AppCompat_DayNight_Dialog_MinWidth: number;
					public static Theme_AppCompat_DayNight_NoActionBar: number;
					public static Theme_AppCompat_Dialog: number;
					public static Theme_AppCompat_DialogWhenLarge: number;
					public static Theme_AppCompat_Dialog_Alert: number;
					public static Theme_AppCompat_Dialog_MinWidth: number;
					public static Theme_AppCompat_Empty: number;
					public static Theme_AppCompat_Light: number;
					public static Theme_AppCompat_Light_DarkActionBar: number;
					public static Theme_AppCompat_Light_Dialog: number;
					public static Theme_AppCompat_Light_DialogWhenLarge: number;
					public static Theme_AppCompat_Light_Dialog_Alert: number;
					public static Theme_AppCompat_Light_Dialog_MinWidth: number;
					public static Theme_AppCompat_Light_NoActionBar: number;
					public static Theme_AppCompat_NoActionBar: number;
					public static Theme_Design: number;
					public static Theme_Design_BottomSheetDialog: number;
					public static Theme_Design_Light: number;
					public static Theme_Design_Light_BottomSheetDialog: number;
					public static Theme_Design_Light_NoActionBar: number;
					public static Theme_Design_NoActionBar: number;
					public static Theme_IAPTheme: number;
					public static Theme_MaterialComponents: number;
					public static Theme_MaterialComponents_BottomSheetDialog: number;
					public static Theme_MaterialComponents_Bridge: number;
					public static Theme_MaterialComponents_CompactMenu: number;
					public static Theme_MaterialComponents_DayNight: number;
					public static Theme_MaterialComponents_DayNight_BottomSheetDialog: number;
					public static Theme_MaterialComponents_DayNight_Bridge: number;
					public static Theme_MaterialComponents_DayNight_DarkActionBar: number;
					public static Theme_MaterialComponents_DayNight_DarkActionBar_Bridge: number;
					public static Theme_MaterialComponents_DayNight_Dialog: number;
					public static Theme_MaterialComponents_DayNight_DialogWhenLarge: number;
					public static Theme_MaterialComponents_DayNight_Dialog_Alert: number;
					public static Theme_MaterialComponents_DayNight_Dialog_Alert_Bridge: number;
					public static Theme_MaterialComponents_DayNight_Dialog_Bridge: number;
					public static Theme_MaterialComponents_DayNight_Dialog_FixedSize: number;
					public static Theme_MaterialComponents_DayNight_Dialog_FixedSize_Bridge: number;
					public static Theme_MaterialComponents_DayNight_Dialog_MinWidth: number;
					public static Theme_MaterialComponents_DayNight_Dialog_MinWidth_Bridge: number;
					public static Theme_MaterialComponents_DayNight_NoActionBar: number;
					public static Theme_MaterialComponents_DayNight_NoActionBar_Bridge: number;
					public static Theme_MaterialComponents_Dialog: number;
					public static Theme_MaterialComponents_DialogWhenLarge: number;
					public static Theme_MaterialComponents_Dialog_Alert: number;
					public static Theme_MaterialComponents_Dialog_Alert_Bridge: number;
					public static Theme_MaterialComponents_Dialog_Bridge: number;
					public static Theme_MaterialComponents_Dialog_FixedSize: number;
					public static Theme_MaterialComponents_Dialog_FixedSize_Bridge: number;
					public static Theme_MaterialComponents_Dialog_MinWidth: number;
					public static Theme_MaterialComponents_Dialog_MinWidth_Bridge: number;
					public static Theme_MaterialComponents_Light: number;
					public static Theme_MaterialComponents_Light_BarSize: number;
					public static Theme_MaterialComponents_Light_BottomSheetDialog: number;
					public static Theme_MaterialComponents_Light_Bridge: number;
					public static Theme_MaterialComponents_Light_DarkActionBar: number;
					public static Theme_MaterialComponents_Light_DarkActionBar_Bridge: number;
					public static Theme_MaterialComponents_Light_Dialog: number;
					public static Theme_MaterialComponents_Light_DialogWhenLarge: number;
					public static Theme_MaterialComponents_Light_Dialog_Alert: number;
					public static Theme_MaterialComponents_Light_Dialog_Alert_Bridge: number;
					public static Theme_MaterialComponents_Light_Dialog_Bridge: number;
					public static Theme_MaterialComponents_Light_Dialog_FixedSize: number;
					public static Theme_MaterialComponents_Light_Dialog_FixedSize_Bridge: number;
					public static Theme_MaterialComponents_Light_Dialog_MinWidth: number;
					public static Theme_MaterialComponents_Light_Dialog_MinWidth_Bridge: number;
					public static Theme_MaterialComponents_Light_LargeTouch: number;
					public static Theme_MaterialComponents_Light_NoActionBar: number;
					public static Theme_MaterialComponents_Light_NoActionBar_Bridge: number;
					public static Theme_MaterialComponents_NoActionBar: number;
					public static Theme_MaterialComponents_NoActionBar_Bridge: number;
					public static Theme_PlayCore_Transparent: number;
					public static Toolbar_Dracula: number;
					public static Toolbar_Zhihu: number;
					public static Widget_AppCompat_ActionBar: number;
					public static Widget_AppCompat_ActionBar_Solid: number;
					public static Widget_AppCompat_ActionBar_TabBar: number;
					public static Widget_AppCompat_ActionBar_TabText: number;
					public static Widget_AppCompat_ActionBar_TabView: number;
					public static Widget_AppCompat_ActionButton: number;
					public static Widget_AppCompat_ActionButton_CloseMode: number;
					public static Widget_AppCompat_ActionButton_Overflow: number;
					public static Widget_AppCompat_ActionMode: number;
					public static Widget_AppCompat_ActivityChooserView: number;
					public static Widget_AppCompat_AutoCompleteTextView: number;
					public static Widget_AppCompat_Button: number;
					public static Widget_AppCompat_ButtonBar: number;
					public static Widget_AppCompat_ButtonBar_AlertDialog: number;
					public static Widget_AppCompat_Button_Borderless: number;
					public static Widget_AppCompat_Button_Borderless_Colored: number;
					public static Widget_AppCompat_Button_ButtonBar_AlertDialog: number;
					public static Widget_AppCompat_Button_Colored: number;
					public static Widget_AppCompat_Button_Small: number;
					public static Widget_AppCompat_CompoundButton_CheckBox: number;
					public static Widget_AppCompat_CompoundButton_RadioButton: number;
					public static Widget_AppCompat_CompoundButton_Switch: number;
					public static Widget_AppCompat_DrawerArrowToggle: number;
					public static Widget_AppCompat_DropDownItem_Spinner: number;
					public static Widget_AppCompat_EditText: number;
					public static Widget_AppCompat_ImageButton: number;
					public static Widget_AppCompat_Light_ActionBar: number;
					public static Widget_AppCompat_Light_ActionBar_Solid: number;
					public static Widget_AppCompat_Light_ActionBar_Solid_Inverse: number;
					public static Widget_AppCompat_Light_ActionBar_TabBar: number;
					public static Widget_AppCompat_Light_ActionBar_TabBar_Inverse: number;
					public static Widget_AppCompat_Light_ActionBar_TabText: number;
					public static Widget_AppCompat_Light_ActionBar_TabText_Inverse: number;
					public static Widget_AppCompat_Light_ActionBar_TabView: number;
					public static Widget_AppCompat_Light_ActionBar_TabView_Inverse: number;
					public static Widget_AppCompat_Light_ActionButton: number;
					public static Widget_AppCompat_Light_ActionButton_CloseMode: number;
					public static Widget_AppCompat_Light_ActionButton_Overflow: number;
					public static Widget_AppCompat_Light_ActionMode_Inverse: number;
					public static Widget_AppCompat_Light_ActivityChooserView: number;
					public static Widget_AppCompat_Light_AutoCompleteTextView: number;
					public static Widget_AppCompat_Light_DropDownItem_Spinner: number;
					public static Widget_AppCompat_Light_ListPopupWindow: number;
					public static Widget_AppCompat_Light_ListView_DropDown: number;
					public static Widget_AppCompat_Light_PopupMenu: number;
					public static Widget_AppCompat_Light_PopupMenu_Overflow: number;
					public static Widget_AppCompat_Light_SearchView: number;
					public static Widget_AppCompat_Light_Spinner_DropDown_ActionBar: number;
					public static Widget_AppCompat_ListMenuView: number;
					public static Widget_AppCompat_ListPopupWindow: number;
					public static Widget_AppCompat_ListView: number;
					public static Widget_AppCompat_ListView_DropDown: number;
					public static Widget_AppCompat_ListView_Menu: number;
					public static Widget_AppCompat_PopupMenu: number;
					public static Widget_AppCompat_PopupMenu_Overflow: number;
					public static Widget_AppCompat_PopupWindow: number;
					public static Widget_AppCompat_ProgressBar: number;
					public static Widget_AppCompat_ProgressBar_Horizontal: number;
					public static Widget_AppCompat_RatingBar: number;
					public static Widget_AppCompat_RatingBar_Indicator: number;
					public static Widget_AppCompat_RatingBar_Small: number;
					public static Widget_AppCompat_SearchView: number;
					public static Widget_AppCompat_SearchView_ActionBar: number;
					public static Widget_AppCompat_SeekBar: number;
					public static Widget_AppCompat_SeekBar_Discrete: number;
					public static Widget_AppCompat_Spinner: number;
					public static Widget_AppCompat_Spinner_DropDown: number;
					public static Widget_AppCompat_Spinner_DropDown_ActionBar: number;
					public static Widget_AppCompat_Spinner_Underlined: number;
					public static Widget_AppCompat_TextView: number;
					public static Widget_AppCompat_TextView_SpinnerItem: number;
					public static Widget_AppCompat_Toolbar: number;
					public static Widget_AppCompat_Toolbar_Button_Navigation: number;
					public static Widget_Compat_NotificationActionContainer: number;
					public static Widget_Compat_NotificationActionText: number;
					public static Widget_Design_AppBarLayout: number;
					public static Widget_Design_BottomNavigationView: number;
					public static Widget_Design_BottomSheet_Modal: number;
					public static Widget_Design_CollapsingToolbar: number;
					public static Widget_Design_FloatingActionButton: number;
					public static Widget_Design_NavigationView: number;
					public static Widget_Design_ScrimInsetsFrameLayout: number;
					public static Widget_Design_Snackbar: number;
					public static Widget_Design_TabLayout: number;
					public static Widget_Design_TextInputEditText: number;
					public static Widget_Design_TextInputLayout: number;
					public static Widget_MaterialComponents_ActionBar_Primary: number;
					public static Widget_MaterialComponents_ActionBar_PrimarySurface: number;
					public static Widget_MaterialComponents_ActionBar_Solid: number;
					public static Widget_MaterialComponents_ActionBar_Surface: number;
					public static Widget_MaterialComponents_AppBarLayout_Primary: number;
					public static Widget_MaterialComponents_AppBarLayout_PrimarySurface: number;
					public static Widget_MaterialComponents_AppBarLayout_Surface: number;
					public static Widget_MaterialComponents_AutoCompleteTextView_FilledBox: number;
					public static Widget_MaterialComponents_AutoCompleteTextView_FilledBox_Dense: number;
					public static Widget_MaterialComponents_AutoCompleteTextView_OutlinedBox: number;
					public static Widget_MaterialComponents_AutoCompleteTextView_OutlinedBox_Dense: number;
					public static Widget_MaterialComponents_Badge: number;
					public static Widget_MaterialComponents_BottomAppBar: number;
					public static Widget_MaterialComponents_BottomAppBar_Colored: number;
					public static Widget_MaterialComponents_BottomAppBar_PrimarySurface: number;
					public static Widget_MaterialComponents_BottomNavigationView: number;
					public static Widget_MaterialComponents_BottomNavigationView_Colored: number;
					public static Widget_MaterialComponents_BottomNavigationView_PrimarySurface: number;
					public static Widget_MaterialComponents_BottomSheet: number;
					public static Widget_MaterialComponents_BottomSheet_Modal: number;
					public static Widget_MaterialComponents_Button: number;
					public static Widget_MaterialComponents_Button_Icon: number;
					public static Widget_MaterialComponents_Button_OutlinedButton: number;
					public static Widget_MaterialComponents_Button_OutlinedButton_Icon: number;
					public static Widget_MaterialComponents_Button_TextButton: number;
					public static Widget_MaterialComponents_Button_TextButton_Dialog: number;
					public static Widget_MaterialComponents_Button_TextButton_Dialog_Flush: number;
					public static Widget_MaterialComponents_Button_TextButton_Dialog_Icon: number;
					public static Widget_MaterialComponents_Button_TextButton_Icon: number;
					public static Widget_MaterialComponents_Button_TextButton_Snackbar: number;
					public static Widget_MaterialComponents_Button_UnelevatedButton: number;
					public static Widget_MaterialComponents_Button_UnelevatedButton_Icon: number;
					public static Widget_MaterialComponents_CardView: number;
					public static Widget_MaterialComponents_CheckedTextView: number;
					public static Widget_MaterialComponents_ChipGroup: number;
					public static Widget_MaterialComponents_Chip_Action: number;
					public static Widget_MaterialComponents_Chip_Choice: number;
					public static Widget_MaterialComponents_Chip_Entry: number;
					public static Widget_MaterialComponents_Chip_Filter: number;
					public static Widget_MaterialComponents_CompoundButton_CheckBox: number;
					public static Widget_MaterialComponents_CompoundButton_RadioButton: number;
					public static Widget_MaterialComponents_CompoundButton_Switch: number;
					public static Widget_MaterialComponents_ExtendedFloatingActionButton: number;
					public static Widget_MaterialComponents_ExtendedFloatingActionButton_Icon: number;
					public static Widget_MaterialComponents_FloatingActionButton: number;
					public static Widget_MaterialComponents_Light_ActionBar_Solid: number;
					public static Widget_MaterialComponents_MaterialButtonToggleGroup: number;
					public static Widget_MaterialComponents_MaterialCalendar: number;
					public static Widget_MaterialComponents_MaterialCalendar_Day: number;
					public static Widget_MaterialComponents_MaterialCalendar_DayTextView: number;
					public static Widget_MaterialComponents_MaterialCalendar_Day_Invalid: number;
					public static Widget_MaterialComponents_MaterialCalendar_Day_Selected: number;
					public static Widget_MaterialComponents_MaterialCalendar_Day_Today: number;
					public static Widget_MaterialComponents_MaterialCalendar_Fullscreen: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderConfirmButton: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderDivider: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderLayout: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderSelection: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderSelection_Fullscreen: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderTitle: number;
					public static Widget_MaterialComponents_MaterialCalendar_HeaderToggleButton: number;
					public static Widget_MaterialComponents_MaterialCalendar_Item: number;
					public static Widget_MaterialComponents_MaterialCalendar_Year: number;
					public static Widget_MaterialComponents_MaterialCalendar_Year_Selected: number;
					public static Widget_MaterialComponents_MaterialCalendar_Year_Today: number;
					public static Widget_MaterialComponents_NavigationView: number;
					public static Widget_MaterialComponents_PopupMenu: number;
					public static Widget_MaterialComponents_PopupMenu_ContextMenu: number;
					public static Widget_MaterialComponents_PopupMenu_ListPopupWindow: number;
					public static Widget_MaterialComponents_PopupMenu_Overflow: number;
					public static Widget_MaterialComponents_ProgressIndicator_Circular_Determinate: number;
					public static Widget_MaterialComponents_ProgressIndicator_Circular_Indeterminate: number;
					public static Widget_MaterialComponents_ProgressIndicator_Linear_Determinate: number;
					public static Widget_MaterialComponents_ProgressIndicator_Linear_Indeterminate: number;
					public static Widget_MaterialComponents_ShapeableImageView: number;
					public static Widget_MaterialComponents_Slider: number;
					public static Widget_MaterialComponents_Snackbar: number;
					public static Widget_MaterialComponents_Snackbar_FullWidth: number;
					public static Widget_MaterialComponents_Snackbar_TextView: number;
					public static Widget_MaterialComponents_TabLayout: number;
					public static Widget_MaterialComponents_TabLayout_Colored: number;
					public static Widget_MaterialComponents_TabLayout_PrimarySurface: number;
					public static Widget_MaterialComponents_TextInputEditText_FilledBox: number;
					public static Widget_MaterialComponents_TextInputEditText_FilledBox_Dense: number;
					public static Widget_MaterialComponents_TextInputEditText_OutlinedBox: number;
					public static Widget_MaterialComponents_TextInputEditText_OutlinedBox_Dense: number;
					public static Widget_MaterialComponents_TextInputLayout_FilledBox: number;
					public static Widget_MaterialComponents_TextInputLayout_FilledBox_Dense: number;
					public static Widget_MaterialComponents_TextInputLayout_FilledBox_Dense_ExposedDropdownMenu: number;
					public static Widget_MaterialComponents_TextInputLayout_FilledBox_ExposedDropdownMenu: number;
					public static Widget_MaterialComponents_TextInputLayout_OutlinedBox: number;
					public static Widget_MaterialComponents_TextInputLayout_OutlinedBox_Dense: number;
					public static Widget_MaterialComponents_TextInputLayout_OutlinedBox_Dense_ExposedDropdownMenu: number;
					public static Widget_MaterialComponents_TextInputLayout_OutlinedBox_ExposedDropdownMenu: number;
					public static Widget_MaterialComponents_TextView: number;
					public static Widget_MaterialComponents_TimePicker: number;
					public static Widget_MaterialComponents_TimePicker_Button: number;
					public static Widget_MaterialComponents_TimePicker_Display: number;
					public static Widget_MaterialComponents_TimePicker_Display_TextInputEditText: number;
					public static Widget_MaterialComponents_Toolbar: number;
					public static Widget_MaterialComponents_Toolbar_Primary: number;
					public static Widget_MaterialComponents_Toolbar_PrimarySurface: number;
					public static Widget_MaterialComponents_Toolbar_Surface: number;
					public static Widget_MaterialComponents_Tooltip: number;
					public static Widget_Support_CoordinatorLayout: number;
					public static YellowTheme: number;
					public static YellowTheme_NoActionBar: number;
					public static YellowTheme_PopupOverlay: number;
					public static leak_canary_LeakCanary_Base: number;
					public static leak_canary_Theme_Transparent: number;
					public static leak_canary_Widget_ActionBar: number;
					public static ucrop_ImageViewWidgetIcon: number;
					public static ucrop_TextViewCropAspectRatio: number;
					public static ucrop_TextViewWidget: number;
					public static ucrop_TextViewWidgetText: number;
					public static ucrop_WrapperIconState: number;
					public static ucrop_WrapperRotateButton: number;
					public constructor();
				}
				export class styleable {
					public static class: java.lang.Class<com.xfl.msgbot.R.styleable>;
					public static ActionBar: androidNative.Array<number>;
					public static ActionBarLayout: androidNative.Array<number>;
					public static ActionBarLayout_android_layout_gravity: number;
					public static ActionBar_background: number;
					public static ActionBar_backgroundSplit: number;
					public static ActionBar_backgroundStacked: number;
					public static ActionBar_contentInsetEnd: number;
					public static ActionBar_contentInsetEndWithActions: number;
					public static ActionBar_contentInsetLeft: number;
					public static ActionBar_contentInsetRight: number;
					public static ActionBar_contentInsetStart: number;
					public static ActionBar_contentInsetStartWithNavigation: number;
					public static ActionBar_customNavigationLayout: number;
					public static ActionBar_displayOptions: number;
					public static ActionBar_divider: number;
					public static ActionBar_elevation: number;
					public static ActionBar_height: number;
					public static ActionBar_hideOnContentScroll: number;
					public static ActionBar_homeAsUpIndicator: number;
					public static ActionBar_homeLayout: number;
					public static ActionBar_icon: number;
					public static ActionBar_indeterminateProgressStyle: number;
					public static ActionBar_itemPadding: number;
					public static ActionBar_logo: number;
					public static ActionBar_navigationMode: number;
					public static ActionBar_popupTheme: number;
					public static ActionBar_progressBarPadding: number;
					public static ActionBar_progressBarStyle: number;
					public static ActionBar_subtitle: number;
					public static ActionBar_subtitleTextStyle: number;
					public static ActionBar_title: number;
					public static ActionBar_titleTextStyle: number;
					public static ActionMenuItemView: androidNative.Array<number>;
					public static ActionMenuItemView_android_minWidth: number;
					public static ActionMenuView: androidNative.Array<number>;
					public static ActionMode: androidNative.Array<number>;
					public static ActionMode_background: number;
					public static ActionMode_backgroundSplit: number;
					public static ActionMode_closeItemLayout: number;
					public static ActionMode_height: number;
					public static ActionMode_subtitleTextStyle: number;
					public static ActionMode_titleTextStyle: number;
					public static ActivityChooserView: androidNative.Array<number>;
					public static ActivityChooserView_expandActivityOverflowButtonDrawable: number;
					public static ActivityChooserView_initialActivityCount: number;
					public static ActivityNavigator: androidNative.Array<number>;
					public static ActivityNavigator_action: number;
					public static ActivityNavigator_android_name: number;
					public static ActivityNavigator_data: number;
					public static ActivityNavigator_dataPattern: number;
					public static ActivityNavigator_targetPackage: number;
					public static AdsAttrs: androidNative.Array<number>;
					public static AdsAttrs_adSize: number;
					public static AdsAttrs_adSizes: number;
					public static AdsAttrs_adUnitId: number;
					public static AlertDialog: androidNative.Array<number>;
					public static AlertDialog_android_layout: number;
					public static AlertDialog_buttonIconDimen: number;
					public static AlertDialog_buttonPanelSideLayout: number;
					public static AlertDialog_listItemLayout: number;
					public static AlertDialog_listLayout: number;
					public static AlertDialog_multiChoiceItemLayout: number;
					public static AlertDialog_showTitle: number;
					public static AlertDialog_singleChoiceItemLayout: number;
					public static AnimatedStateListDrawableCompat: androidNative.Array<number>;
					public static AnimatedStateListDrawableCompat_android_constantSize: number;
					public static AnimatedStateListDrawableCompat_android_dither: number;
					public static AnimatedStateListDrawableCompat_android_enterFadeDuration: number;
					public static AnimatedStateListDrawableCompat_android_exitFadeDuration: number;
					public static AnimatedStateListDrawableCompat_android_variablePadding: number;
					public static AnimatedStateListDrawableCompat_android_visible: number;
					public static AnimatedStateListDrawableItem: androidNative.Array<number>;
					public static AnimatedStateListDrawableItem_android_drawable: number;
					public static AnimatedStateListDrawableItem_android_id: number;
					public static AnimatedStateListDrawableTransition: androidNative.Array<number>;
					public static AnimatedStateListDrawableTransition_android_drawable: number;
					public static AnimatedStateListDrawableTransition_android_fromId: number;
					public static AnimatedStateListDrawableTransition_android_reversible: number;
					public static AnimatedStateListDrawableTransition_android_toId: number;
					public static AppBarLayout: androidNative.Array<number>;
					public static AppBarLayoutStates: androidNative.Array<number>;
					public static AppBarLayoutStates_state_collapsed: number;
					public static AppBarLayoutStates_state_collapsible: number;
					public static AppBarLayoutStates_state_liftable: number;
					public static AppBarLayoutStates_state_lifted: number;
					public static AppBarLayout_Layout: androidNative.Array<number>;
					public static AppBarLayout_Layout_layout_scrollFlags: number;
					public static AppBarLayout_Layout_layout_scrollInterpolator: number;
					public static AppBarLayout_android_background: number;
					public static AppBarLayout_android_keyboardNavigationCluster: number;
					public static AppBarLayout_android_touchscreenBlocksFocus: number;
					public static AppBarLayout_elevation: number;
					public static AppBarLayout_expanded: number;
					public static AppBarLayout_liftOnScroll: number;
					public static AppBarLayout_liftOnScrollTargetViewId: number;
					public static AppBarLayout_statusBarForeground: number;
					public static AppCompatImageView: androidNative.Array<number>;
					public static AppCompatImageView_android_src: number;
					public static AppCompatImageView_srcCompat: number;
					public static AppCompatImageView_tint: number;
					public static AppCompatImageView_tintMode: number;
					public static AppCompatSeekBar: androidNative.Array<number>;
					public static AppCompatSeekBar_android_thumb: number;
					public static AppCompatSeekBar_tickMark: number;
					public static AppCompatSeekBar_tickMarkTint: number;
					public static AppCompatSeekBar_tickMarkTintMode: number;
					public static AppCompatTextHelper: androidNative.Array<number>;
					public static AppCompatTextHelper_android_drawableBottom: number;
					public static AppCompatTextHelper_android_drawableEnd: number;
					public static AppCompatTextHelper_android_drawableLeft: number;
					public static AppCompatTextHelper_android_drawableRight: number;
					public static AppCompatTextHelper_android_drawableStart: number;
					public static AppCompatTextHelper_android_drawableTop: number;
					public static AppCompatTextHelper_android_textAppearance: number;
					public static AppCompatTextView: androidNative.Array<number>;
					public static AppCompatTextView_android_textAppearance: number;
					public static AppCompatTextView_autoSizeMaxTextSize: number;
					public static AppCompatTextView_autoSizeMinTextSize: number;
					public static AppCompatTextView_autoSizePresetSizes: number;
					public static AppCompatTextView_autoSizeStepGranularity: number;
					public static AppCompatTextView_autoSizeTextType: number;
					public static AppCompatTextView_drawableBottomCompat: number;
					public static AppCompatTextView_drawableEndCompat: number;
					public static AppCompatTextView_drawableLeftCompat: number;
					public static AppCompatTextView_drawableRightCompat: number;
					public static AppCompatTextView_drawableStartCompat: number;
					public static AppCompatTextView_drawableTint: number;
					public static AppCompatTextView_drawableTintMode: number;
					public static AppCompatTextView_drawableTopCompat: number;
					public static AppCompatTextView_firstBaselineToTopHeight: number;
					public static AppCompatTextView_fontFamily: number;
					public static AppCompatTextView_fontVariationSettings: number;
					public static AppCompatTextView_lastBaselineToBottomHeight: number;
					public static AppCompatTextView_lineHeight: number;
					public static AppCompatTextView_textAllCaps: number;
					public static AppCompatTextView_textLocale: number;
					public static AppCompatTheme: androidNative.Array<number>;
					public static AppCompatTheme_actionBarDivider: number;
					public static AppCompatTheme_actionBarItemBackground: number;
					public static AppCompatTheme_actionBarPopupTheme: number;
					public static AppCompatTheme_actionBarSize: number;
					public static AppCompatTheme_actionBarSplitStyle: number;
					public static AppCompatTheme_actionBarStyle: number;
					public static AppCompatTheme_actionBarTabBarStyle: number;
					public static AppCompatTheme_actionBarTabStyle: number;
					public static AppCompatTheme_actionBarTabTextStyle: number;
					public static AppCompatTheme_actionBarTheme: number;
					public static AppCompatTheme_actionBarWidgetTheme: number;
					public static AppCompatTheme_actionButtonStyle: number;
					public static AppCompatTheme_actionDropDownStyle: number;
					public static AppCompatTheme_actionMenuTextAppearance: number;
					public static AppCompatTheme_actionMenuTextColor: number;
					public static AppCompatTheme_actionModeBackground: number;
					public static AppCompatTheme_actionModeCloseButtonStyle: number;
					public static AppCompatTheme_actionModeCloseDrawable: number;
					public static AppCompatTheme_actionModeCopyDrawable: number;
					public static AppCompatTheme_actionModeCutDrawable: number;
					public static AppCompatTheme_actionModeFindDrawable: number;
					public static AppCompatTheme_actionModePasteDrawable: number;
					public static AppCompatTheme_actionModePopupWindowStyle: number;
					public static AppCompatTheme_actionModeSelectAllDrawable: number;
					public static AppCompatTheme_actionModeShareDrawable: number;
					public static AppCompatTheme_actionModeSplitBackground: number;
					public static AppCompatTheme_actionModeStyle: number;
					public static AppCompatTheme_actionModeWebSearchDrawable: number;
					public static AppCompatTheme_actionOverflowButtonStyle: number;
					public static AppCompatTheme_actionOverflowMenuStyle: number;
					public static AppCompatTheme_activityChooserViewStyle: number;
					public static AppCompatTheme_alertDialogButtonGroupStyle: number;
					public static AppCompatTheme_alertDialogCenterButtons: number;
					public static AppCompatTheme_alertDialogStyle: number;
					public static AppCompatTheme_alertDialogTheme: number;
					public static AppCompatTheme_android_windowAnimationStyle: number;
					public static AppCompatTheme_android_windowIsFloating: number;
					public static AppCompatTheme_autoCompleteTextViewStyle: number;
					public static AppCompatTheme_borderlessButtonStyle: number;
					public static AppCompatTheme_buttonBarButtonStyle: number;
					public static AppCompatTheme_buttonBarNegativeButtonStyle: number;
					public static AppCompatTheme_buttonBarNeutralButtonStyle: number;
					public static AppCompatTheme_buttonBarPositiveButtonStyle: number;
					public static AppCompatTheme_buttonBarStyle: number;
					public static AppCompatTheme_buttonStyle: number;
					public static AppCompatTheme_buttonStyleSmall: number;
					public static AppCompatTheme_checkboxStyle: number;
					public static AppCompatTheme_checkedTextViewStyle: number;
					public static AppCompatTheme_colorAccent: number;
					public static AppCompatTheme_colorBackgroundFloating: number;
					public static AppCompatTheme_colorButtonNormal: number;
					public static AppCompatTheme_colorControlActivated: number;
					public static AppCompatTheme_colorControlHighlight: number;
					public static AppCompatTheme_colorControlNormal: number;
					public static AppCompatTheme_colorError: number;
					public static AppCompatTheme_colorPrimary: number;
					public static AppCompatTheme_colorPrimaryDark: number;
					public static AppCompatTheme_colorSwitchThumbNormal: number;
					public static AppCompatTheme_controlBackground: number;
					public static AppCompatTheme_dialogCornerRadius: number;
					public static AppCompatTheme_dialogPreferredPadding: number;
					public static AppCompatTheme_dialogTheme: number;
					public static AppCompatTheme_dividerHorizontal: number;
					public static AppCompatTheme_dividerVertical: number;
					public static AppCompatTheme_dropDownListViewStyle: number;
					public static AppCompatTheme_dropdownListPreferredItemHeight: number;
					public static AppCompatTheme_editTextBackground: number;
					public static AppCompatTheme_editTextColor: number;
					public static AppCompatTheme_editTextStyle: number;
					public static AppCompatTheme_homeAsUpIndicator: number;
					public static AppCompatTheme_imageButtonStyle: number;
					public static AppCompatTheme_listChoiceBackgroundIndicator: number;
					public static AppCompatTheme_listChoiceIndicatorMultipleAnimated: number;
					public static AppCompatTheme_listChoiceIndicatorSingleAnimated: number;
					public static AppCompatTheme_listDividerAlertDialog: number;
					public static AppCompatTheme_listMenuViewStyle: number;
					public static AppCompatTheme_listPopupWindowStyle: number;
					public static AppCompatTheme_listPreferredItemHeight: number;
					public static AppCompatTheme_listPreferredItemHeightLarge: number;
					public static AppCompatTheme_listPreferredItemHeightSmall: number;
					public static AppCompatTheme_listPreferredItemPaddingEnd: number;
					public static AppCompatTheme_listPreferredItemPaddingLeft: number;
					public static AppCompatTheme_listPreferredItemPaddingRight: number;
					public static AppCompatTheme_listPreferredItemPaddingStart: number;
					public static AppCompatTheme_panelBackground: number;
					public static AppCompatTheme_panelMenuListTheme: number;
					public static AppCompatTheme_panelMenuListWidth: number;
					public static AppCompatTheme_popupMenuStyle: number;
					public static AppCompatTheme_popupWindowStyle: number;
					public static AppCompatTheme_radioButtonStyle: number;
					public static AppCompatTheme_ratingBarStyle: number;
					public static AppCompatTheme_ratingBarStyleIndicator: number;
					public static AppCompatTheme_ratingBarStyleSmall: number;
					public static AppCompatTheme_searchViewStyle: number;
					public static AppCompatTheme_seekBarStyle: number;
					public static AppCompatTheme_selectableItemBackground: number;
					public static AppCompatTheme_selectableItemBackgroundBorderless: number;
					public static AppCompatTheme_spinnerDropDownItemStyle: number;
					public static AppCompatTheme_spinnerStyle: number;
					public static AppCompatTheme_switchStyle: number;
					public static AppCompatTheme_textAppearanceLargePopupMenu: number;
					public static AppCompatTheme_textAppearanceListItem: number;
					public static AppCompatTheme_textAppearanceListItemSecondary: number;
					public static AppCompatTheme_textAppearanceListItemSmall: number;
					public static AppCompatTheme_textAppearancePopupMenuHeader: number;
					public static AppCompatTheme_textAppearanceSearchResultSubtitle: number;
					public static AppCompatTheme_textAppearanceSearchResultTitle: number;
					public static AppCompatTheme_textAppearanceSmallPopupMenu: number;
					public static AppCompatTheme_textColorAlertDialogListItem: number;
					public static AppCompatTheme_textColorSearchUrl: number;
					public static AppCompatTheme_toolbarNavigationButtonStyle: number;
					public static AppCompatTheme_toolbarStyle: number;
					public static AppCompatTheme_tooltipForegroundColor: number;
					public static AppCompatTheme_tooltipFrameBackground: number;
					public static AppCompatTheme_viewInflaterClass: number;
					public static AppCompatTheme_windowActionBar: number;
					public static AppCompatTheme_windowActionBarOverlay: number;
					public static AppCompatTheme_windowActionModeOverlay: number;
					public static AppCompatTheme_windowFixedHeightMajor: number;
					public static AppCompatTheme_windowFixedHeightMinor: number;
					public static AppCompatTheme_windowFixedWidthMajor: number;
					public static AppCompatTheme_windowFixedWidthMinor: number;
					public static AppCompatTheme_windowMinWidthMajor: number;
					public static AppCompatTheme_windowMinWidthMinor: number;
					public static AppCompatTheme_windowNoTitle: number;
					public static BackgroundStyle: androidNative.Array<number>;
					public static BackgroundStyle_android_selectableItemBackground: number;
					public static BackgroundStyle_selectableItemBackground: number;
					public static Badge: androidNative.Array<number>;
					public static Badge_backgroundColor: number;
					public static Badge_badgeGravity: number;
					public static Badge_badgeTextColor: number;
					public static Badge_horizontalOffset: number;
					public static Badge_maxCharacterCount: number;
					public static Badge_number: number;
					public static Badge_verticalOffset: number;
					public static BottomAppBar: androidNative.Array<number>;
					public static BottomAppBar_backgroundTint: number;
					public static BottomAppBar_elevation: number;
					public static BottomAppBar_fabAlignmentMode: number;
					public static BottomAppBar_fabAnimationMode: number;
					public static BottomAppBar_fabCradleMargin: number;
					public static BottomAppBar_fabCradleRoundedCornerRadius: number;
					public static BottomAppBar_fabCradleVerticalOffset: number;
					public static BottomAppBar_hideOnScroll: number;
					public static BottomAppBar_paddingBottomSystemWindowInsets: number;
					public static BottomAppBar_paddingLeftSystemWindowInsets: number;
					public static BottomAppBar_paddingRightSystemWindowInsets: number;
					public static BottomNavigationView: androidNative.Array<number>;
					public static BottomNavigationView_backgroundTint: number;
					public static BottomNavigationView_elevation: number;
					public static BottomNavigationView_itemBackground: number;
					public static BottomNavigationView_itemHorizontalTranslationEnabled: number;
					public static BottomNavigationView_itemIconSize: number;
					public static BottomNavigationView_itemIconTint: number;
					public static BottomNavigationView_itemRippleColor: number;
					public static BottomNavigationView_itemTextAppearanceActive: number;
					public static BottomNavigationView_itemTextAppearanceInactive: number;
					public static BottomNavigationView_itemTextColor: number;
					public static BottomNavigationView_labelVisibilityMode: number;
					public static BottomNavigationView_menu: number;
					public static BottomSheetBehavior_Layout: androidNative.Array<number>;
					public static BottomSheetBehavior_Layout_android_elevation: number;
					public static BottomSheetBehavior_Layout_backgroundTint: number;
					public static BottomSheetBehavior_Layout_behavior_draggable: number;
					public static BottomSheetBehavior_Layout_behavior_expandedOffset: number;
					public static BottomSheetBehavior_Layout_behavior_fitToContents: number;
					public static BottomSheetBehavior_Layout_behavior_halfExpandedRatio: number;
					public static BottomSheetBehavior_Layout_behavior_hideable: number;
					public static BottomSheetBehavior_Layout_behavior_peekHeight: number;
					public static BottomSheetBehavior_Layout_behavior_saveFlags: number;
					public static BottomSheetBehavior_Layout_behavior_skipCollapsed: number;
					public static BottomSheetBehavior_Layout_gestureInsetBottomIgnored: number;
					public static BottomSheetBehavior_Layout_shapeAppearance: number;
					public static BottomSheetBehavior_Layout_shapeAppearanceOverlay: number;
					public static ButtonBarContainerTheme: androidNative.Array<number>;
					public static ButtonBarContainerTheme_metaButtonBarButtonStyle: number;
					public static ButtonBarContainerTheme_metaButtonBarStyle: number;
					public static ButtonBarLayout: androidNative.Array<number>;
					public static ButtonBarLayout_allowStacking: number;
					public static CardView: androidNative.Array<number>;
					public static CardView_android_minHeight: number;
					public static CardView_android_minWidth: number;
					public static CardView_cardBackgroundColor: number;
					public static CardView_cardCornerRadius: number;
					public static CardView_cardElevation: number;
					public static CardView_cardMaxElevation: number;
					public static CardView_cardPreventCornerOverlap: number;
					public static CardView_cardUseCompatPadding: number;
					public static CardView_contentPadding: number;
					public static CardView_contentPaddingBottom: number;
					public static CardView_contentPaddingLeft: number;
					public static CardView_contentPaddingRight: number;
					public static CardView_contentPaddingTop: number;
					public static CheckBoxPreference: androidNative.Array<number>;
					public static CheckBoxPreference_android_disableDependentsState: number;
					public static CheckBoxPreference_android_summaryOff: number;
					public static CheckBoxPreference_android_summaryOn: number;
					public static CheckBoxPreference_disableDependentsState: number;
					public static CheckBoxPreference_summaryOff: number;
					public static CheckBoxPreference_summaryOn: number;
					public static Chip: androidNative.Array<number>;
					public static ChipGroup: androidNative.Array<number>;
					public static ChipGroup_checkedChip: number;
					public static ChipGroup_chipSpacing: number;
					public static ChipGroup_chipSpacingHorizontal: number;
					public static ChipGroup_chipSpacingVertical: number;
					public static ChipGroup_selectionRequired: number;
					public static ChipGroup_singleLine: number;
					public static ChipGroup_singleSelection: number;
					public static Chip_android_checkable: number;
					public static Chip_android_ellipsize: number;
					public static Chip_android_maxWidth: number;
					public static Chip_android_text: number;
					public static Chip_android_textAppearance: number;
					public static Chip_android_textColor: number;
					public static Chip_android_textSize: number;
					public static Chip_checkedIcon: number;
					public static Chip_checkedIconEnabled: number;
					public static Chip_checkedIconTint: number;
					public static Chip_checkedIconVisible: number;
					public static Chip_chipBackgroundColor: number;
					public static Chip_chipCornerRadius: number;
					public static Chip_chipEndPadding: number;
					public static Chip_chipIcon: number;
					public static Chip_chipIconEnabled: number;
					public static Chip_chipIconSize: number;
					public static Chip_chipIconTint: number;
					public static Chip_chipIconVisible: number;
					public static Chip_chipMinHeight: number;
					public static Chip_chipMinTouchTargetSize: number;
					public static Chip_chipStartPadding: number;
					public static Chip_chipStrokeColor: number;
					public static Chip_chipStrokeWidth: number;
					public static Chip_chipSurfaceColor: number;
					public static Chip_closeIcon: number;
					public static Chip_closeIconEnabled: number;
					public static Chip_closeIconEndPadding: number;
					public static Chip_closeIconSize: number;
					public static Chip_closeIconStartPadding: number;
					public static Chip_closeIconTint: number;
					public static Chip_closeIconVisible: number;
					public static Chip_ensureMinTouchTargetSize: number;
					public static Chip_hideMotionSpec: number;
					public static Chip_iconEndPadding: number;
					public static Chip_iconStartPadding: number;
					public static Chip_rippleColor: number;
					public static Chip_shapeAppearance: number;
					public static Chip_shapeAppearanceOverlay: number;
					public static Chip_showMotionSpec: number;
					public static Chip_textEndPadding: number;
					public static Chip_textStartPadding: number;
					public static CircleImageViewV2: androidNative.Array<number>;
					public static CircleImageViewV2_civ_border_color: number;
					public static CircleImageViewV2_civ_border_overlay: number;
					public static CircleImageViewV2_civ_border_width: number;
					public static CircleImageViewV2_civ_circle_background_color: number;
					public static ClockFaceView: androidNative.Array<number>;
					public static ClockFaceView_valueTextColor: number;
					public static ClockHandView: androidNative.Array<number>;
					public static ClockHandView_materialCircleRadius: number;
					public static ClockHandView_selectorSize: number;
					public static CodeEditorView: androidNative.Array<number>;
					public static CodeEditorView_hScroll: number;
					public static CodeEditorView_wrapText: number;
					public static CollapsingToolbarLayout: androidNative.Array<number>;
					public static CollapsingToolbarLayout_Layout: androidNative.Array<number>;
					public static CollapsingToolbarLayout_Layout_layout_collapseMode: number;
					public static CollapsingToolbarLayout_Layout_layout_collapseParallaxMultiplier: number;
					public static CollapsingToolbarLayout_collapsedTitleGravity: number;
					public static CollapsingToolbarLayout_collapsedTitleTextAppearance: number;
					public static CollapsingToolbarLayout_contentScrim: number;
					public static CollapsingToolbarLayout_expandedTitleGravity: number;
					public static CollapsingToolbarLayout_expandedTitleMargin: number;
					public static CollapsingToolbarLayout_expandedTitleMarginBottom: number;
					public static CollapsingToolbarLayout_expandedTitleMarginEnd: number;
					public static CollapsingToolbarLayout_expandedTitleMarginStart: number;
					public static CollapsingToolbarLayout_expandedTitleMarginTop: number;
					public static CollapsingToolbarLayout_expandedTitleTextAppearance: number;
					public static CollapsingToolbarLayout_maxLines: number;
					public static CollapsingToolbarLayout_scrimAnimationDuration: number;
					public static CollapsingToolbarLayout_scrimVisibleHeightTrigger: number;
					public static CollapsingToolbarLayout_statusBarScrim: number;
					public static CollapsingToolbarLayout_title: number;
					public static CollapsingToolbarLayout_titleEnabled: number;
					public static CollapsingToolbarLayout_toolbarId: number;
					public static ColorStateListItem: androidNative.Array<number>;
					public static ColorStateListItem_alpha: number;
					public static ColorStateListItem_android_alpha: number;
					public static ColorStateListItem_android_color: number;
					public static CompoundButton: androidNative.Array<number>;
					public static CompoundButton_android_button: number;
					public static CompoundButton_buttonCompat: number;
					public static CompoundButton_buttonTint: number;
					public static CompoundButton_buttonTintMode: number;
					public static Constraint: androidNative.Array<number>;
					public static ConstraintLayout_Layout: androidNative.Array<number>;
					public static ConstraintLayout_Layout_android_elevation: number;
					public static ConstraintLayout_Layout_android_maxHeight: number;
					public static ConstraintLayout_Layout_android_maxWidth: number;
					public static ConstraintLayout_Layout_android_minHeight: number;
					public static ConstraintLayout_Layout_android_minWidth: number;
					public static ConstraintLayout_Layout_android_orientation: number;
					public static ConstraintLayout_Layout_android_padding: number;
					public static ConstraintLayout_Layout_android_paddingBottom: number;
					public static ConstraintLayout_Layout_android_paddingEnd: number;
					public static ConstraintLayout_Layout_android_paddingLeft: number;
					public static ConstraintLayout_Layout_android_paddingRight: number;
					public static ConstraintLayout_Layout_android_paddingStart: number;
					public static ConstraintLayout_Layout_android_paddingTop: number;
					public static ConstraintLayout_Layout_android_visibility: number;
					public static ConstraintLayout_Layout_barrierAllowsGoneWidgets: number;
					public static ConstraintLayout_Layout_barrierDirection: number;
					public static ConstraintLayout_Layout_barrierMargin: number;
					public static ConstraintLayout_Layout_chainUseRtl: number;
					public static ConstraintLayout_Layout_constraintSet: number;
					public static ConstraintLayout_Layout_constraint_referenced_ids: number;
					public static ConstraintLayout_Layout_flow_firstHorizontalBias: number;
					public static ConstraintLayout_Layout_flow_firstHorizontalStyle: number;
					public static ConstraintLayout_Layout_flow_firstVerticalBias: number;
					public static ConstraintLayout_Layout_flow_firstVerticalStyle: number;
					public static ConstraintLayout_Layout_flow_horizontalAlign: number;
					public static ConstraintLayout_Layout_flow_horizontalBias: number;
					public static ConstraintLayout_Layout_flow_horizontalGap: number;
					public static ConstraintLayout_Layout_flow_horizontalStyle: number;
					public static ConstraintLayout_Layout_flow_lastHorizontalBias: number;
					public static ConstraintLayout_Layout_flow_lastHorizontalStyle: number;
					public static ConstraintLayout_Layout_flow_lastVerticalBias: number;
					public static ConstraintLayout_Layout_flow_lastVerticalStyle: number;
					public static ConstraintLayout_Layout_flow_maxElementsWrap: number;
					public static ConstraintLayout_Layout_flow_verticalAlign: number;
					public static ConstraintLayout_Layout_flow_verticalBias: number;
					public static ConstraintLayout_Layout_flow_verticalGap: number;
					public static ConstraintLayout_Layout_flow_verticalStyle: number;
					public static ConstraintLayout_Layout_flow_wrapMode: number;
					public static ConstraintLayout_Layout_layoutDescription: number;
					public static ConstraintLayout_Layout_layout_constrainedHeight: number;
					public static ConstraintLayout_Layout_layout_constrainedWidth: number;
					public static ConstraintLayout_Layout_layout_constraintBaseline_creator: number;
					public static ConstraintLayout_Layout_layout_constraintBaseline_toBaselineOf: number;
					public static ConstraintLayout_Layout_layout_constraintBottom_creator: number;
					public static ConstraintLayout_Layout_layout_constraintBottom_toBottomOf: number;
					public static ConstraintLayout_Layout_layout_constraintBottom_toTopOf: number;
					public static ConstraintLayout_Layout_layout_constraintCircle: number;
					public static ConstraintLayout_Layout_layout_constraintCircleAngle: number;
					public static ConstraintLayout_Layout_layout_constraintCircleRadius: number;
					public static ConstraintLayout_Layout_layout_constraintDimensionRatio: number;
					public static ConstraintLayout_Layout_layout_constraintEnd_toEndOf: number;
					public static ConstraintLayout_Layout_layout_constraintEnd_toStartOf: number;
					public static ConstraintLayout_Layout_layout_constraintGuide_begin: number;
					public static ConstraintLayout_Layout_layout_constraintGuide_end: number;
					public static ConstraintLayout_Layout_layout_constraintGuide_percent: number;
					public static ConstraintLayout_Layout_layout_constraintHeight_default: number;
					public static ConstraintLayout_Layout_layout_constraintHeight_max: number;
					public static ConstraintLayout_Layout_layout_constraintHeight_min: number;
					public static ConstraintLayout_Layout_layout_constraintHeight_percent: number;
					public static ConstraintLayout_Layout_layout_constraintHorizontal_bias: number;
					public static ConstraintLayout_Layout_layout_constraintHorizontal_chainStyle: number;
					public static ConstraintLayout_Layout_layout_constraintHorizontal_weight: number;
					public static ConstraintLayout_Layout_layout_constraintLeft_creator: number;
					public static ConstraintLayout_Layout_layout_constraintLeft_toLeftOf: number;
					public static ConstraintLayout_Layout_layout_constraintLeft_toRightOf: number;
					public static ConstraintLayout_Layout_layout_constraintRight_creator: number;
					public static ConstraintLayout_Layout_layout_constraintRight_toLeftOf: number;
					public static ConstraintLayout_Layout_layout_constraintRight_toRightOf: number;
					public static ConstraintLayout_Layout_layout_constraintStart_toEndOf: number;
					public static ConstraintLayout_Layout_layout_constraintStart_toStartOf: number;
					public static ConstraintLayout_Layout_layout_constraintTag: number;
					public static ConstraintLayout_Layout_layout_constraintTop_creator: number;
					public static ConstraintLayout_Layout_layout_constraintTop_toBottomOf: number;
					public static ConstraintLayout_Layout_layout_constraintTop_toTopOf: number;
					public static ConstraintLayout_Layout_layout_constraintVertical_bias: number;
					public static ConstraintLayout_Layout_layout_constraintVertical_chainStyle: number;
					public static ConstraintLayout_Layout_layout_constraintVertical_weight: number;
					public static ConstraintLayout_Layout_layout_constraintWidth_default: number;
					public static ConstraintLayout_Layout_layout_constraintWidth_max: number;
					public static ConstraintLayout_Layout_layout_constraintWidth_min: number;
					public static ConstraintLayout_Layout_layout_constraintWidth_percent: number;
					public static ConstraintLayout_Layout_layout_editor_absoluteX: number;
					public static ConstraintLayout_Layout_layout_editor_absoluteY: number;
					public static ConstraintLayout_Layout_layout_goneMarginBottom: number;
					public static ConstraintLayout_Layout_layout_goneMarginEnd: number;
					public static ConstraintLayout_Layout_layout_goneMarginLeft: number;
					public static ConstraintLayout_Layout_layout_goneMarginRight: number;
					public static ConstraintLayout_Layout_layout_goneMarginStart: number;
					public static ConstraintLayout_Layout_layout_goneMarginTop: number;
					public static ConstraintLayout_Layout_layout_optimizationLevel: number;
					public static ConstraintLayout_placeholder: androidNative.Array<number>;
					public static ConstraintLayout_placeholder_content: number;
					public static ConstraintLayout_placeholder_placeholder_emptyVisibility: number;
					public static ConstraintSet: androidNative.Array<number>;
					public static ConstraintSet_android_alpha: number;
					public static ConstraintSet_android_elevation: number;
					public static ConstraintSet_android_id: number;
					public static ConstraintSet_android_layout_height: number;
					public static ConstraintSet_android_layout_marginBottom: number;
					public static ConstraintSet_android_layout_marginEnd: number;
					public static ConstraintSet_android_layout_marginLeft: number;
					public static ConstraintSet_android_layout_marginRight: number;
					public static ConstraintSet_android_layout_marginStart: number;
					public static ConstraintSet_android_layout_marginTop: number;
					public static ConstraintSet_android_layout_width: number;
					public static ConstraintSet_android_maxHeight: number;
					public static ConstraintSet_android_maxWidth: number;
					public static ConstraintSet_android_minHeight: number;
					public static ConstraintSet_android_minWidth: number;
					public static ConstraintSet_android_orientation: number;
					public static ConstraintSet_android_pivotX: number;
					public static ConstraintSet_android_pivotY: number;
					public static ConstraintSet_android_rotation: number;
					public static ConstraintSet_android_rotationX: number;
					public static ConstraintSet_android_rotationY: number;
					public static ConstraintSet_android_scaleX: number;
					public static ConstraintSet_android_scaleY: number;
					public static ConstraintSet_android_transformPivotX: number;
					public static ConstraintSet_android_transformPivotY: number;
					public static ConstraintSet_android_translationX: number;
					public static ConstraintSet_android_translationY: number;
					public static ConstraintSet_android_translationZ: number;
					public static ConstraintSet_android_visibility: number;
					public static ConstraintSet_animate_relativeTo: number;
					public static ConstraintSet_barrierAllowsGoneWidgets: number;
					public static ConstraintSet_barrierDirection: number;
					public static ConstraintSet_barrierMargin: number;
					public static ConstraintSet_chainUseRtl: number;
					public static ConstraintSet_constraint_referenced_ids: number;
					public static ConstraintSet_deriveConstraintsFrom: number;
					public static ConstraintSet_drawPath: number;
					public static ConstraintSet_flow_firstHorizontalBias: number;
					public static ConstraintSet_flow_firstHorizontalStyle: number;
					public static ConstraintSet_flow_firstVerticalBias: number;
					public static ConstraintSet_flow_firstVerticalStyle: number;
					public static ConstraintSet_flow_horizontalAlign: number;
					public static ConstraintSet_flow_horizontalBias: number;
					public static ConstraintSet_flow_horizontalGap: number;
					public static ConstraintSet_flow_horizontalStyle: number;
					public static ConstraintSet_flow_lastHorizontalBias: number;
					public static ConstraintSet_flow_lastHorizontalStyle: number;
					public static ConstraintSet_flow_lastVerticalBias: number;
					public static ConstraintSet_flow_lastVerticalStyle: number;
					public static ConstraintSet_flow_maxElementsWrap: number;
					public static ConstraintSet_flow_verticalAlign: number;
					public static ConstraintSet_flow_verticalBias: number;
					public static ConstraintSet_flow_verticalGap: number;
					public static ConstraintSet_flow_verticalStyle: number;
					public static ConstraintSet_flow_wrapMode: number;
					public static ConstraintSet_layout_constrainedHeight: number;
					public static ConstraintSet_layout_constrainedWidth: number;
					public static ConstraintSet_layout_constraintBaseline_creator: number;
					public static ConstraintSet_layout_constraintBaseline_toBaselineOf: number;
					public static ConstraintSet_layout_constraintBottom_creator: number;
					public static ConstraintSet_layout_constraintBottom_toBottomOf: number;
					public static ConstraintSet_layout_constraintBottom_toTopOf: number;
					public static ConstraintSet_layout_constraintCircle: number;
					public static ConstraintSet_layout_constraintCircleAngle: number;
					public static ConstraintSet_layout_constraintCircleRadius: number;
					public static ConstraintSet_layout_constraintDimensionRatio: number;
					public static ConstraintSet_layout_constraintEnd_toEndOf: number;
					public static ConstraintSet_layout_constraintEnd_toStartOf: number;
					public static ConstraintSet_layout_constraintGuide_begin: number;
					public static ConstraintSet_layout_constraintGuide_end: number;
					public static ConstraintSet_layout_constraintGuide_percent: number;
					public static ConstraintSet_layout_constraintHeight_default: number;
					public static ConstraintSet_layout_constraintHeight_max: number;
					public static ConstraintSet_layout_constraintHeight_min: number;
					public static ConstraintSet_layout_constraintHeight_percent: number;
					public static ConstraintSet_layout_constraintHorizontal_bias: number;
					public static ConstraintSet_layout_constraintHorizontal_chainStyle: number;
					public static ConstraintSet_layout_constraintHorizontal_weight: number;
					public static ConstraintSet_layout_constraintLeft_creator: number;
					public static ConstraintSet_layout_constraintLeft_toLeftOf: number;
					public static ConstraintSet_layout_constraintLeft_toRightOf: number;
					public static ConstraintSet_layout_constraintRight_creator: number;
					public static ConstraintSet_layout_constraintRight_toLeftOf: number;
					public static ConstraintSet_layout_constraintRight_toRightOf: number;
					public static ConstraintSet_layout_constraintStart_toEndOf: number;
					public static ConstraintSet_layout_constraintStart_toStartOf: number;
					public static ConstraintSet_layout_constraintTag: number;
					public static ConstraintSet_layout_constraintTop_creator: number;
					public static ConstraintSet_layout_constraintTop_toBottomOf: number;
					public static ConstraintSet_layout_constraintTop_toTopOf: number;
					public static ConstraintSet_layout_constraintVertical_bias: number;
					public static ConstraintSet_layout_constraintVertical_chainStyle: number;
					public static ConstraintSet_layout_constraintVertical_weight: number;
					public static ConstraintSet_layout_constraintWidth_default: number;
					public static ConstraintSet_layout_constraintWidth_max: number;
					public static ConstraintSet_layout_constraintWidth_min: number;
					public static ConstraintSet_layout_constraintWidth_percent: number;
					public static ConstraintSet_layout_editor_absoluteX: number;
					public static ConstraintSet_layout_editor_absoluteY: number;
					public static ConstraintSet_layout_goneMarginBottom: number;
					public static ConstraintSet_layout_goneMarginEnd: number;
					public static ConstraintSet_layout_goneMarginLeft: number;
					public static ConstraintSet_layout_goneMarginRight: number;
					public static ConstraintSet_layout_goneMarginStart: number;
					public static ConstraintSet_layout_goneMarginTop: number;
					public static ConstraintSet_motionProgress: number;
					public static ConstraintSet_motionStagger: number;
					public static ConstraintSet_pathMotionArc: number;
					public static ConstraintSet_pivotAnchor: number;
					public static ConstraintSet_transitionEasing: number;
					public static ConstraintSet_transitionPathRotate: number;
					public static Constraint_android_alpha: number;
					public static Constraint_android_elevation: number;
					public static Constraint_android_id: number;
					public static Constraint_android_layout_height: number;
					public static Constraint_android_layout_marginBottom: number;
					public static Constraint_android_layout_marginEnd: number;
					public static Constraint_android_layout_marginLeft: number;
					public static Constraint_android_layout_marginRight: number;
					public static Constraint_android_layout_marginStart: number;
					public static Constraint_android_layout_marginTop: number;
					public static Constraint_android_layout_width: number;
					public static Constraint_android_maxHeight: number;
					public static Constraint_android_maxWidth: number;
					public static Constraint_android_minHeight: number;
					public static Constraint_android_minWidth: number;
					public static Constraint_android_orientation: number;
					public static Constraint_android_pivotX: number;
					public static Constraint_android_pivotY: number;
					public static Constraint_android_rotation: number;
					public static Constraint_android_rotationX: number;
					public static Constraint_android_rotationY: number;
					public static Constraint_android_scaleX: number;
					public static Constraint_android_scaleY: number;
					public static Constraint_android_transformPivotX: number;
					public static Constraint_android_transformPivotY: number;
					public static Constraint_android_translationX: number;
					public static Constraint_android_translationY: number;
					public static Constraint_android_translationZ: number;
					public static Constraint_android_visibility: number;
					public static Constraint_animate_relativeTo: number;
					public static Constraint_barrierAllowsGoneWidgets: number;
					public static Constraint_barrierDirection: number;
					public static Constraint_barrierMargin: number;
					public static Constraint_chainUseRtl: number;
					public static Constraint_constraint_referenced_ids: number;
					public static Constraint_drawPath: number;
					public static Constraint_flow_firstHorizontalBias: number;
					public static Constraint_flow_firstHorizontalStyle: number;
					public static Constraint_flow_firstVerticalBias: number;
					public static Constraint_flow_firstVerticalStyle: number;
					public static Constraint_flow_horizontalAlign: number;
					public static Constraint_flow_horizontalBias: number;
					public static Constraint_flow_horizontalGap: number;
					public static Constraint_flow_horizontalStyle: number;
					public static Constraint_flow_lastHorizontalBias: number;
					public static Constraint_flow_lastHorizontalStyle: number;
					public static Constraint_flow_lastVerticalBias: number;
					public static Constraint_flow_lastVerticalStyle: number;
					public static Constraint_flow_maxElementsWrap: number;
					public static Constraint_flow_verticalAlign: number;
					public static Constraint_flow_verticalBias: number;
					public static Constraint_flow_verticalGap: number;
					public static Constraint_flow_verticalStyle: number;
					public static Constraint_flow_wrapMode: number;
					public static Constraint_layout_constrainedHeight: number;
					public static Constraint_layout_constrainedWidth: number;
					public static Constraint_layout_constraintBaseline_creator: number;
					public static Constraint_layout_constraintBaseline_toBaselineOf: number;
					public static Constraint_layout_constraintBottom_creator: number;
					public static Constraint_layout_constraintBottom_toBottomOf: number;
					public static Constraint_layout_constraintBottom_toTopOf: number;
					public static Constraint_layout_constraintCircle: number;
					public static Constraint_layout_constraintCircleAngle: number;
					public static Constraint_layout_constraintCircleRadius: number;
					public static Constraint_layout_constraintDimensionRatio: number;
					public static Constraint_layout_constraintEnd_toEndOf: number;
					public static Constraint_layout_constraintEnd_toStartOf: number;
					public static Constraint_layout_constraintGuide_begin: number;
					public static Constraint_layout_constraintGuide_end: number;
					public static Constraint_layout_constraintGuide_percent: number;
					public static Constraint_layout_constraintHeight_default: number;
					public static Constraint_layout_constraintHeight_max: number;
					public static Constraint_layout_constraintHeight_min: number;
					public static Constraint_layout_constraintHeight_percent: number;
					public static Constraint_layout_constraintHorizontal_bias: number;
					public static Constraint_layout_constraintHorizontal_chainStyle: number;
					public static Constraint_layout_constraintHorizontal_weight: number;
					public static Constraint_layout_constraintLeft_creator: number;
					public static Constraint_layout_constraintLeft_toLeftOf: number;
					public static Constraint_layout_constraintLeft_toRightOf: number;
					public static Constraint_layout_constraintRight_creator: number;
					public static Constraint_layout_constraintRight_toLeftOf: number;
					public static Constraint_layout_constraintRight_toRightOf: number;
					public static Constraint_layout_constraintStart_toEndOf: number;
					public static Constraint_layout_constraintStart_toStartOf: number;
					public static Constraint_layout_constraintTag: number;
					public static Constraint_layout_constraintTop_creator: number;
					public static Constraint_layout_constraintTop_toBottomOf: number;
					public static Constraint_layout_constraintTop_toTopOf: number;
					public static Constraint_layout_constraintVertical_bias: number;
					public static Constraint_layout_constraintVertical_chainStyle: number;
					public static Constraint_layout_constraintVertical_weight: number;
					public static Constraint_layout_constraintWidth_default: number;
					public static Constraint_layout_constraintWidth_max: number;
					public static Constraint_layout_constraintWidth_min: number;
					public static Constraint_layout_constraintWidth_percent: number;
					public static Constraint_layout_editor_absoluteX: number;
					public static Constraint_layout_editor_absoluteY: number;
					public static Constraint_layout_goneMarginBottom: number;
					public static Constraint_layout_goneMarginEnd: number;
					public static Constraint_layout_goneMarginLeft: number;
					public static Constraint_layout_goneMarginRight: number;
					public static Constraint_layout_goneMarginStart: number;
					public static Constraint_layout_goneMarginTop: number;
					public static Constraint_motionStagger: number;
					public static Constraint_pathMotionArc: number;
					public static Constraint_pivotAnchor: number;
					public static Constraint_progress: number;
					public static Constraint_transitionEasing: number;
					public static Constraint_transitionPathRotate: number;
					public static Constraint_visibilityMode: number;
					public static CoordinatorLayout: androidNative.Array<number>;
					public static CoordinatorLayout_Layout: androidNative.Array<number>;
					public static CoordinatorLayout_Layout_android_layout_gravity: number;
					public static CoordinatorLayout_Layout_layout_anchor: number;
					public static CoordinatorLayout_Layout_layout_anchorGravity: number;
					public static CoordinatorLayout_Layout_layout_behavior: number;
					public static CoordinatorLayout_Layout_layout_dodgeInsetEdges: number;
					public static CoordinatorLayout_Layout_layout_insetEdge: number;
					public static CoordinatorLayout_Layout_layout_keyline: number;
					public static CoordinatorLayout_keylines: number;
					public static CoordinatorLayout_statusBarBackground: number;
					public static CustomAttribute: androidNative.Array<number>;
					public static CustomAttribute_attributeName: number;
					public static CustomAttribute_customBoolean: number;
					public static CustomAttribute_customColorDrawableValue: number;
					public static CustomAttribute_customColorValue: number;
					public static CustomAttribute_customDimension: number;
					public static CustomAttribute_customFloatValue: number;
					public static CustomAttribute_customIntegerValue: number;
					public static CustomAttribute_customPixelDimension: number;
					public static CustomAttribute_customStringValue: number;
					public static DialogFragmentNavigator: androidNative.Array<number>;
					public static DialogFragmentNavigator_android_name: number;
					public static DialogPreference: androidNative.Array<number>;
					public static DialogPreference_android_dialogIcon: number;
					public static DialogPreference_android_dialogLayout: number;
					public static DialogPreference_android_dialogMessage: number;
					public static DialogPreference_android_dialogTitle: number;
					public static DialogPreference_android_negativeButtonText: number;
					public static DialogPreference_android_positiveButtonText: number;
					public static DialogPreference_dialogIcon: number;
					public static DialogPreference_dialogLayout: number;
					public static DialogPreference_dialogMessage: number;
					public static DialogPreference_dialogTitle: number;
					public static DialogPreference_negativeButtonText: number;
					public static DialogPreference_positiveButtonText: number;
					public static DrawerArrowToggle: androidNative.Array<number>;
					public static DrawerArrowToggle_arrowHeadLength: number;
					public static DrawerArrowToggle_arrowShaftLength: number;
					public static DrawerArrowToggle_barLength: number;
					public static DrawerArrowToggle_color: number;
					public static DrawerArrowToggle_drawableSize: number;
					public static DrawerArrowToggle_gapBetweenBars: number;
					public static DrawerArrowToggle_spinBars: number;
					public static DrawerArrowToggle_thickness: number;
					public static DrawerLayout: androidNative.Array<number>;
					public static DrawerLayout_elevation: number;
					public static EditTextPreference: androidNative.Array<number>;
					public static EditTextPreference_useSimpleSummaryProvider: number;
					public static ExtendedFloatingActionButton: androidNative.Array<number>;
					public static ExtendedFloatingActionButton_Behavior_Layout: androidNative.Array<number>;
					public static ExtendedFloatingActionButton_Behavior_Layout_behavior_autoHide: number;
					public static ExtendedFloatingActionButton_Behavior_Layout_behavior_autoShrink: number;
					public static ExtendedFloatingActionButton_elevation: number;
					public static ExtendedFloatingActionButton_extendMotionSpec: number;
					public static ExtendedFloatingActionButton_hideMotionSpec: number;
					public static ExtendedFloatingActionButton_showMotionSpec: number;
					public static ExtendedFloatingActionButton_shrinkMotionSpec: number;
					public static FastScroll: androidNative.Array<number>;
					public static FastScrollRecyclerView: androidNative.Array<number>;
					public static FastScrollRecyclerView_fastScrollAutoHide: number;
					public static FastScrollRecyclerView_fastScrollAutoHideDelay: number;
					public static FastScrollRecyclerView_fastScrollEnableThumbInactiveColor: number;
					public static FastScrollRecyclerView_fastScrollFABHide: number;
					public static FastScrollRecyclerView_fastScrollPopupBackgroundSize: number;
					public static FastScrollRecyclerView_fastScrollPopupBgColor: number;
					public static FastScrollRecyclerView_fastScrollPopupPosition: number;
					public static FastScrollRecyclerView_fastScrollPopupTextColor: number;
					public static FastScrollRecyclerView_fastScrollPopupTextSize: number;
					public static FastScrollRecyclerView_fastScrollThumbColor: number;
					public static FastScrollRecyclerView_fastScrollThumbEnabled: number;
					public static FastScrollRecyclerView_fastScrollThumbInactiveColor: number;
					public static FastScrollRecyclerView_fastScrollTrackColor: number;
					public static FastScroll_autoHide: number;
					public static FastScroll_scroll: number;
					public static FastScroll_scrollThumb: number;
					public static FastScroll_scrollThumbColor: number;
					public static FastScroll_scrollThumbRotation: number;
					public static FastScroll_scrollThumbTint: number;
					public static FastScroll_scrollThumbTintMode: number;
					public static FloatingActionButton: androidNative.Array<number>;
					public static FloatingActionButton_Behavior_Layout: androidNative.Array<number>;
					public static FloatingActionButton_Behavior_Layout_behavior_autoHide: number;
					public static FloatingActionButton_android_enabled: number;
					public static FloatingActionButton_backgroundTint: number;
					public static FloatingActionButton_backgroundTintMode: number;
					public static FloatingActionButton_borderWidth: number;
					public static FloatingActionButton_elevation: number;
					public static FloatingActionButton_ensureMinTouchTargetSize: number;
					public static FloatingActionButton_fabCustomSize: number;
					public static FloatingActionButton_fabSize: number;
					public static FloatingActionButton_fab_colorDisabled: number;
					public static FloatingActionButton_fab_colorNormal: number;
					public static FloatingActionButton_fab_colorPressed: number;
					public static FloatingActionButton_fab_colorRipple: number;
					public static FloatingActionButton_fab_elevationCompat: number;
					public static FloatingActionButton_fab_hideAnimation: number;
					public static FloatingActionButton_fab_label: number;
					public static FloatingActionButton_fab_progress: number;
					public static FloatingActionButton_fab_progress_backgroundColor: number;
					public static FloatingActionButton_fab_progress_color: number;
					public static FloatingActionButton_fab_progress_indeterminate: number;
					public static FloatingActionButton_fab_progress_max: number;
					public static FloatingActionButton_fab_progress_showBackground: number;
					public static FloatingActionButton_fab_shadowColor: number;
					public static FloatingActionButton_fab_shadowRadius: number;
					public static FloatingActionButton_fab_shadowXOffset: number;
					public static FloatingActionButton_fab_shadowYOffset: number;
					public static FloatingActionButton_fab_showAnimation: number;
					public static FloatingActionButton_fab_showShadow: number;
					public static FloatingActionButton_fab_size: number;
					public static FloatingActionButton_hideMotionSpec: number;
					public static FloatingActionButton_hoveredFocusedTranslationZ: number;
					public static FloatingActionButton_maxImageSize: number;
					public static FloatingActionButton_pressedTranslationZ: number;
					public static FloatingActionButton_rippleColor: number;
					public static FloatingActionButton_shapeAppearance: number;
					public static FloatingActionButton_shapeAppearanceOverlay: number;
					public static FloatingActionButton_showMotionSpec: number;
					public static FloatingActionButton_useCompatPadding: number;
					public static FloatingActionMenu: androidNative.Array<number>;
					public static FloatingActionMenu_menu_animationDelayPerItem: number;
					public static FloatingActionMenu_menu_backgroundColor: number;
					public static FloatingActionMenu_menu_buttonSpacing: number;
					public static FloatingActionMenu_menu_buttonToggleAnimation: number;
					public static FloatingActionMenu_menu_colorNormal: number;
					public static FloatingActionMenu_menu_colorPressed: number;
					public static FloatingActionMenu_menu_colorRipple: number;
					public static FloatingActionMenu_menu_fab_hide_animation: number;
					public static FloatingActionMenu_menu_fab_label: number;
					public static FloatingActionMenu_menu_fab_show_animation: number;
					public static FloatingActionMenu_menu_fab_size: number;
					public static FloatingActionMenu_menu_icon: number;
					public static FloatingActionMenu_menu_labels_colorNormal: number;
					public static FloatingActionMenu_menu_labels_colorPressed: number;
					public static FloatingActionMenu_menu_labels_colorRipple: number;
					public static FloatingActionMenu_menu_labels_cornerRadius: number;
					public static FloatingActionMenu_menu_labels_customFont: number;
					public static FloatingActionMenu_menu_labels_ellipsize: number;
					public static FloatingActionMenu_menu_labels_hideAnimation: number;
					public static FloatingActionMenu_menu_labels_margin: number;
					public static FloatingActionMenu_menu_labels_maxLines: number;
					public static FloatingActionMenu_menu_labels_padding: number;
					public static FloatingActionMenu_menu_labels_paddingBottom: number;
					public static FloatingActionMenu_menu_labels_paddingLeft: number;
					public static FloatingActionMenu_menu_labels_paddingRight: number;
					public static FloatingActionMenu_menu_labels_paddingTop: number;
					public static FloatingActionMenu_menu_labels_position: number;
					public static FloatingActionMenu_menu_labels_showAnimation: number;
					public static FloatingActionMenu_menu_labels_showShadow: number;
					public static FloatingActionMenu_menu_labels_singleLine: number;
					public static FloatingActionMenu_menu_labels_style: number;
					public static FloatingActionMenu_menu_labels_textColor: number;
					public static FloatingActionMenu_menu_labels_textSize: number;
					public static FloatingActionMenu_menu_openDirection: number;
					public static FloatingActionMenu_menu_shadowColor: number;
					public static FloatingActionMenu_menu_shadowRadius: number;
					public static FloatingActionMenu_menu_shadowXOffset: number;
					public static FloatingActionMenu_menu_shadowYOffset: number;
					public static FloatingActionMenu_menu_showShadow: number;
					public static FloatingTextButton: androidNative.Array<number>;
					public static FloatingTextButton_backgroundColor: number;
					public static FloatingTextButton_leftIcon: number;
					public static FloatingTextButton_leftIconTint: number;
					public static FloatingTextButton_leftIconTintMode: number;
					public static FloatingTextButton_rightIcon: number;
					public static FloatingTextButton_rightIconTint: number;
					public static FloatingTextButton_rightIconTintMode: number;
					public static FloatingTextButton_title: number;
					public static FloatingTextButton_titleColor: number;
					public static FlowLayout: androidNative.Array<number>;
					public static FlowLayout_itemSpacing: number;
					public static FlowLayout_lineSpacing: number;
					public static FontFamily: androidNative.Array<number>;
					public static FontFamilyFont: androidNative.Array<number>;
					public static FontFamilyFont_android_font: number;
					public static FontFamilyFont_android_fontStyle: number;
					public static FontFamilyFont_android_fontVariationSettings: number;
					public static FontFamilyFont_android_fontWeight: number;
					public static FontFamilyFont_android_ttcIndex: number;
					public static FontFamilyFont_font: number;
					public static FontFamilyFont_fontStyle: number;
					public static FontFamilyFont_fontVariationSettings: number;
					public static FontFamilyFont_fontWeight: number;
					public static FontFamilyFont_ttcIndex: number;
					public static FontFamily_fontProviderAuthority: number;
					public static FontFamily_fontProviderCerts: number;
					public static FontFamily_fontProviderFetchStrategy: number;
					public static FontFamily_fontProviderFetchTimeout: number;
					public static FontFamily_fontProviderPackage: number;
					public static FontFamily_fontProviderQuery: number;
					public static ForegroundLinearLayout: androidNative.Array<number>;
					public static ForegroundLinearLayout_android_foreground: number;
					public static ForegroundLinearLayout_android_foregroundGravity: number;
					public static ForegroundLinearLayout_foregroundInsidePadding: number;
					public static Fragment: androidNative.Array<number>;
					public static FragmentContainerView: androidNative.Array<number>;
					public static FragmentContainerView_android_name: number;
					public static FragmentContainerView_android_tag: number;
					public static FragmentNavigator: androidNative.Array<number>;
					public static FragmentNavigator_android_name: number;
					public static Fragment_android_id: number;
					public static Fragment_android_name: number;
					public static Fragment_android_tag: number;
					public static GifTextureView: androidNative.Array<number>;
					public static GifTextureView_gifSource: number;
					public static GifTextureView_isOpaque: number;
					public static GifView: androidNative.Array<number>;
					public static GifView_freezesAnimation: number;
					public static GifView_loopCount: number;
					public static GradientColor: androidNative.Array<number>;
					public static GradientColorItem: androidNative.Array<number>;
					public static GradientColorItem_android_color: number;
					public static GradientColorItem_android_offset: number;
					public static GradientColor_android_centerColor: number;
					public static GradientColor_android_centerX: number;
					public static GradientColor_android_centerY: number;
					public static GradientColor_android_endColor: number;
					public static GradientColor_android_endX: number;
					public static GradientColor_android_endY: number;
					public static GradientColor_android_gradientRadius: number;
					public static GradientColor_android_startColor: number;
					public static GradientColor_android_startX: number;
					public static GradientColor_android_startY: number;
					public static GradientColor_android_tileMode: number;
					public static GradientColor_android_type: number;
					public static ImageFilterView: androidNative.Array<number>;
					public static ImageFilterView_altSrc: number;
					public static ImageFilterView_brightness: number;
					public static ImageFilterView_contrast: number;
					public static ImageFilterView_crossfade: number;
					public static ImageFilterView_overlay: number;
					public static ImageFilterView_round: number;
					public static ImageFilterView_roundPercent: number;
					public static ImageFilterView_saturation: number;
					public static ImageFilterView_warmth: number;
					public static Insets: androidNative.Array<number>;
					public static Insets_paddingBottomSystemWindowInsets: number;
					public static Insets_paddingLeftSystemWindowInsets: number;
					public static Insets_paddingRightSystemWindowInsets: number;
					public static KeyAttribute: androidNative.Array<number>;
					public static KeyAttribute_android_alpha: number;
					public static KeyAttribute_android_elevation: number;
					public static KeyAttribute_android_rotation: number;
					public static KeyAttribute_android_rotationX: number;
					public static KeyAttribute_android_rotationY: number;
					public static KeyAttribute_android_scaleX: number;
					public static KeyAttribute_android_scaleY: number;
					public static KeyAttribute_android_translationX: number;
					public static KeyAttribute_android_translationY: number;
					public static KeyAttribute_android_translationZ: number;
					public static KeyAttribute_curveFit: number;
					public static KeyAttribute_framePosition: number;
					public static KeyAttribute_motionProgress: number;
					public static KeyAttribute_motionTarget: number;
					public static KeyAttribute_transitionEasing: number;
					public static KeyAttribute_transitionPathRotate: number;
					public static KeyCycle: androidNative.Array<number>;
					public static KeyCycle_android_alpha: number;
					public static KeyCycle_android_elevation: number;
					public static KeyCycle_android_rotation: number;
					public static KeyCycle_android_rotationX: number;
					public static KeyCycle_android_rotationY: number;
					public static KeyCycle_android_scaleX: number;
					public static KeyCycle_android_scaleY: number;
					public static KeyCycle_android_translationX: number;
					public static KeyCycle_android_translationY: number;
					public static KeyCycle_android_translationZ: number;
					public static KeyCycle_curveFit: number;
					public static KeyCycle_framePosition: number;
					public static KeyCycle_motionProgress: number;
					public static KeyCycle_motionTarget: number;
					public static KeyCycle_transitionEasing: number;
					public static KeyCycle_transitionPathRotate: number;
					public static KeyCycle_waveOffset: number;
					public static KeyCycle_wavePeriod: number;
					public static KeyCycle_waveShape: number;
					public static KeyCycle_waveVariesBy: number;
					public static KeyFrame: androidNative.Array<number>;
					public static KeyFramesAcceleration: androidNative.Array<number>;
					public static KeyFramesVelocity: androidNative.Array<number>;
					public static KeyPosition: androidNative.Array<number>;
					public static KeyPosition_curveFit: number;
					public static KeyPosition_drawPath: number;
					public static KeyPosition_framePosition: number;
					public static KeyPosition_keyPositionType: number;
					public static KeyPosition_motionTarget: number;
					public static KeyPosition_pathMotionArc: number;
					public static KeyPosition_percentHeight: number;
					public static KeyPosition_percentWidth: number;
					public static KeyPosition_percentX: number;
					public static KeyPosition_percentY: number;
					public static KeyPosition_sizePercent: number;
					public static KeyPosition_transitionEasing: number;
					public static KeyTimeCycle: androidNative.Array<number>;
					public static KeyTimeCycle_android_alpha: number;
					public static KeyTimeCycle_android_elevation: number;
					public static KeyTimeCycle_android_rotation: number;
					public static KeyTimeCycle_android_rotationX: number;
					public static KeyTimeCycle_android_rotationY: number;
					public static KeyTimeCycle_android_scaleX: number;
					public static KeyTimeCycle_android_scaleY: number;
					public static KeyTimeCycle_android_translationX: number;
					public static KeyTimeCycle_android_translationY: number;
					public static KeyTimeCycle_android_translationZ: number;
					public static KeyTimeCycle_curveFit: number;
					public static KeyTimeCycle_framePosition: number;
					public static KeyTimeCycle_motionProgress: number;
					public static KeyTimeCycle_motionTarget: number;
					public static KeyTimeCycle_transitionEasing: number;
					public static KeyTimeCycle_transitionPathRotate: number;
					public static KeyTimeCycle_waveDecay: number;
					public static KeyTimeCycle_waveOffset: number;
					public static KeyTimeCycle_wavePeriod: number;
					public static KeyTimeCycle_waveShape: number;
					public static KeyTrigger: androidNative.Array<number>;
					public static KeyTrigger_framePosition: number;
					public static KeyTrigger_motionTarget: number;
					public static KeyTrigger_motion_postLayoutCollision: number;
					public static KeyTrigger_motion_triggerOnCollision: number;
					public static KeyTrigger_onCross: number;
					public static KeyTrigger_onNegativeCross: number;
					public static KeyTrigger_onPositiveCross: number;
					public static KeyTrigger_triggerId: number;
					public static KeyTrigger_triggerReceiver: number;
					public static KeyTrigger_triggerSlack: number;
					public static Layout: androidNative.Array<number>;
					public static Layout_android_layout_height: number;
					public static Layout_android_layout_marginBottom: number;
					public static Layout_android_layout_marginEnd: number;
					public static Layout_android_layout_marginLeft: number;
					public static Layout_android_layout_marginRight: number;
					public static Layout_android_layout_marginStart: number;
					public static Layout_android_layout_marginTop: number;
					public static Layout_android_layout_width: number;
					public static Layout_android_orientation: number;
					public static Layout_barrierAllowsGoneWidgets: number;
					public static Layout_barrierDirection: number;
					public static Layout_barrierMargin: number;
					public static Layout_chainUseRtl: number;
					public static Layout_constraint_referenced_ids: number;
					public static Layout_layout_constrainedHeight: number;
					public static Layout_layout_constrainedWidth: number;
					public static Layout_layout_constraintBaseline_creator: number;
					public static Layout_layout_constraintBaseline_toBaselineOf: number;
					public static Layout_layout_constraintBottom_creator: number;
					public static Layout_layout_constraintBottom_toBottomOf: number;
					public static Layout_layout_constraintBottom_toTopOf: number;
					public static Layout_layout_constraintCircle: number;
					public static Layout_layout_constraintCircleAngle: number;
					public static Layout_layout_constraintCircleRadius: number;
					public static Layout_layout_constraintDimensionRatio: number;
					public static Layout_layout_constraintEnd_toEndOf: number;
					public static Layout_layout_constraintEnd_toStartOf: number;
					public static Layout_layout_constraintGuide_begin: number;
					public static Layout_layout_constraintGuide_end: number;
					public static Layout_layout_constraintGuide_percent: number;
					public static Layout_layout_constraintHeight_default: number;
					public static Layout_layout_constraintHeight_max: number;
					public static Layout_layout_constraintHeight_min: number;
					public static Layout_layout_constraintHeight_percent: number;
					public static Layout_layout_constraintHorizontal_bias: number;
					public static Layout_layout_constraintHorizontal_chainStyle: number;
					public static Layout_layout_constraintHorizontal_weight: number;
					public static Layout_layout_constraintLeft_creator: number;
					public static Layout_layout_constraintLeft_toLeftOf: number;
					public static Layout_layout_constraintLeft_toRightOf: number;
					public static Layout_layout_constraintRight_creator: number;
					public static Layout_layout_constraintRight_toLeftOf: number;
					public static Layout_layout_constraintRight_toRightOf: number;
					public static Layout_layout_constraintStart_toEndOf: number;
					public static Layout_layout_constraintStart_toStartOf: number;
					public static Layout_layout_constraintTop_creator: number;
					public static Layout_layout_constraintTop_toBottomOf: number;
					public static Layout_layout_constraintTop_toTopOf: number;
					public static Layout_layout_constraintVertical_bias: number;
					public static Layout_layout_constraintVertical_chainStyle: number;
					public static Layout_layout_constraintVertical_weight: number;
					public static Layout_layout_constraintWidth_default: number;
					public static Layout_layout_constraintWidth_max: number;
					public static Layout_layout_constraintWidth_min: number;
					public static Layout_layout_constraintWidth_percent: number;
					public static Layout_layout_editor_absoluteX: number;
					public static Layout_layout_editor_absoluteY: number;
					public static Layout_layout_goneMarginBottom: number;
					public static Layout_layout_goneMarginEnd: number;
					public static Layout_layout_goneMarginLeft: number;
					public static Layout_layout_goneMarginRight: number;
					public static Layout_layout_goneMarginStart: number;
					public static Layout_layout_goneMarginTop: number;
					public static Layout_maxHeight: number;
					public static Layout_maxWidth: number;
					public static Layout_minHeight: number;
					public static Layout_minWidth: number;
					public static LinearLayoutCompat: androidNative.Array<number>;
					public static LinearLayoutCompat_Layout: androidNative.Array<number>;
					public static LinearLayoutCompat_Layout_android_layout_gravity: number;
					public static LinearLayoutCompat_Layout_android_layout_height: number;
					public static LinearLayoutCompat_Layout_android_layout_weight: number;
					public static LinearLayoutCompat_Layout_android_layout_width: number;
					public static LinearLayoutCompat_android_baselineAligned: number;
					public static LinearLayoutCompat_android_baselineAlignedChildIndex: number;
					public static LinearLayoutCompat_android_gravity: number;
					public static LinearLayoutCompat_android_orientation: number;
					public static LinearLayoutCompat_android_weightSum: number;
					public static LinearLayoutCompat_divider: number;
					public static LinearLayoutCompat_dividerPadding: number;
					public static LinearLayoutCompat_measureWithLargestChild: number;
					public static LinearLayoutCompat_showDividers: number;
					public static ListPopupWindow: androidNative.Array<number>;
					public static ListPopupWindow_android_dropDownHorizontalOffset: number;
					public static ListPopupWindow_android_dropDownVerticalOffset: number;
					public static ListPreference: androidNative.Array<number>;
					public static ListPreference_android_entries: number;
					public static ListPreference_android_entryValues: number;
					public static ListPreference_entries: number;
					public static ListPreference_entryValues: number;
					public static ListPreference_useSimpleSummaryProvider: number;
					public static MaterialAlertDialog: androidNative.Array<number>;
					public static MaterialAlertDialogTheme: androidNative.Array<number>;
					public static MaterialAlertDialogTheme_materialAlertDialogBodyTextStyle: number;
					public static MaterialAlertDialogTheme_materialAlertDialogTheme: number;
					public static MaterialAlertDialogTheme_materialAlertDialogTitleIconStyle: number;
					public static MaterialAlertDialogTheme_materialAlertDialogTitlePanelStyle: number;
					public static MaterialAlertDialogTheme_materialAlertDialogTitleTextStyle: number;
					public static MaterialAlertDialog_backgroundInsetBottom: number;
					public static MaterialAlertDialog_backgroundInsetEnd: number;
					public static MaterialAlertDialog_backgroundInsetStart: number;
					public static MaterialAlertDialog_backgroundInsetTop: number;
					public static MaterialAutoCompleteTextView: androidNative.Array<number>;
					public static MaterialAutoCompleteTextView_android_inputType: number;
					public static MaterialButton: androidNative.Array<number>;
					public static MaterialButtonToggleGroup: androidNative.Array<number>;
					public static MaterialButtonToggleGroup_checkedButton: number;
					public static MaterialButtonToggleGroup_selectionRequired: number;
					public static MaterialButtonToggleGroup_singleSelection: number;
					public static MaterialButton_android_background: number;
					public static MaterialButton_android_checkable: number;
					public static MaterialButton_android_insetBottom: number;
					public static MaterialButton_android_insetLeft: number;
					public static MaterialButton_android_insetRight: number;
					public static MaterialButton_android_insetTop: number;
					public static MaterialButton_backgroundTint: number;
					public static MaterialButton_backgroundTintMode: number;
					public static MaterialButton_cornerRadius: number;
					public static MaterialButton_elevation: number;
					public static MaterialButton_icon: number;
					public static MaterialButton_iconGravity: number;
					public static MaterialButton_iconPadding: number;
					public static MaterialButton_iconSize: number;
					public static MaterialButton_iconTint: number;
					public static MaterialButton_iconTintMode: number;
					public static MaterialButton_rippleColor: number;
					public static MaterialButton_shapeAppearance: number;
					public static MaterialButton_shapeAppearanceOverlay: number;
					public static MaterialButton_strokeColor: number;
					public static MaterialButton_strokeWidth: number;
					public static MaterialCalendar: androidNative.Array<number>;
					public static MaterialCalendarItem: androidNative.Array<number>;
					public static MaterialCalendarItem_android_insetBottom: number;
					public static MaterialCalendarItem_android_insetLeft: number;
					public static MaterialCalendarItem_android_insetRight: number;
					public static MaterialCalendarItem_android_insetTop: number;
					public static MaterialCalendarItem_itemFillColor: number;
					public static MaterialCalendarItem_itemShapeAppearance: number;
					public static MaterialCalendarItem_itemShapeAppearanceOverlay: number;
					public static MaterialCalendarItem_itemStrokeColor: number;
					public static MaterialCalendarItem_itemStrokeWidth: number;
					public static MaterialCalendarItem_itemTextColor: number;
					public static MaterialCalendar_android_windowFullscreen: number;
					public static MaterialCalendar_dayInvalidStyle: number;
					public static MaterialCalendar_daySelectedStyle: number;
					public static MaterialCalendar_dayStyle: number;
					public static MaterialCalendar_dayTodayStyle: number;
					public static MaterialCalendar_rangeFillColor: number;
					public static MaterialCalendar_yearSelectedStyle: number;
					public static MaterialCalendar_yearStyle: number;
					public static MaterialCalendar_yearTodayStyle: number;
					public static MaterialCardView: androidNative.Array<number>;
					public static MaterialCardView_android_checkable: number;
					public static MaterialCardView_cardForegroundColor: number;
					public static MaterialCardView_checkedIcon: number;
					public static MaterialCardView_checkedIconTint: number;
					public static MaterialCardView_rippleColor: number;
					public static MaterialCardView_shapeAppearance: number;
					public static MaterialCardView_shapeAppearanceOverlay: number;
					public static MaterialCardView_state_dragged: number;
					public static MaterialCardView_strokeColor: number;
					public static MaterialCardView_strokeWidth: number;
					public static MaterialCheckBox: androidNative.Array<number>;
					public static MaterialCheckBox_buttonTint: number;
					public static MaterialCheckBox_useMaterialThemeColors: number;
					public static MaterialRadioButton: androidNative.Array<number>;
					public static MaterialRadioButton_buttonTint: number;
					public static MaterialRadioButton_useMaterialThemeColors: number;
					public static MaterialShape: androidNative.Array<number>;
					public static MaterialShape_shapeAppearance: number;
					public static MaterialShape_shapeAppearanceOverlay: number;
					public static MaterialTextAppearance: androidNative.Array<number>;
					public static MaterialTextAppearance_android_lineHeight: number;
					public static MaterialTextAppearance_lineHeight: number;
					public static MaterialTextView: androidNative.Array<number>;
					public static MaterialTextView_android_lineHeight: number;
					public static MaterialTextView_android_textAppearance: number;
					public static MaterialTextView_lineHeight: number;
					public static MaxHeightFrameLayout: androidNative.Array<number>;
					public static MaxHeightFrameLayout_android_maxHeight: number;
					public static MaxHeightLinearLayout: androidNative.Array<number>;
					public static MaxHeightLinearLayout_android_maxHeight: number;
					public static MenuGroup: androidNative.Array<number>;
					public static MenuGroup_android_checkableBehavior: number;
					public static MenuGroup_android_enabled: number;
					public static MenuGroup_android_id: number;
					public static MenuGroup_android_menuCategory: number;
					public static MenuGroup_android_orderInCategory: number;
					public static MenuGroup_android_visible: number;
					public static MenuItem: androidNative.Array<number>;
					public static MenuItem_actionLayout: number;
					public static MenuItem_actionProviderClass: number;
					public static MenuItem_actionViewClass: number;
					public static MenuItem_alphabeticModifiers: number;
					public static MenuItem_android_alphabeticShortcut: number;
					public static MenuItem_android_checkable: number;
					public static MenuItem_android_checked: number;
					public static MenuItem_android_enabled: number;
					public static MenuItem_android_icon: number;
					public static MenuItem_android_id: number;
					public static MenuItem_android_menuCategory: number;
					public static MenuItem_android_numericShortcut: number;
					public static MenuItem_android_onClick: number;
					public static MenuItem_android_orderInCategory: number;
					public static MenuItem_android_title: number;
					public static MenuItem_android_titleCondensed: number;
					public static MenuItem_android_visible: number;
					public static MenuItem_contentDescription: number;
					public static MenuItem_iconTint: number;
					public static MenuItem_iconTintMode: number;
					public static MenuItem_numericModifiers: number;
					public static MenuItem_showAsAction: number;
					public static MenuItem_tooltipText: number;
					public static MenuView: androidNative.Array<number>;
					public static MenuView_android_headerBackground: number;
					public static MenuView_android_horizontalDivider: number;
					public static MenuView_android_itemBackground: number;
					public static MenuView_android_itemIconDisabledAlpha: number;
					public static MenuView_android_itemTextAppearance: number;
					public static MenuView_android_verticalDivider: number;
					public static MenuView_android_windowAnimationStyle: number;
					public static MenuView_preserveIconSpacing: number;
					public static MenuView_subMenuArrow: number;
					public static MockView: androidNative.Array<number>;
					public static MockView_mock_diagonalsColor: number;
					public static MockView_mock_label: number;
					public static MockView_mock_labelBackgroundColor: number;
					public static MockView_mock_labelColor: number;
					public static MockView_mock_showDiagonals: number;
					public static MockView_mock_showLabel: number;
					public static Motion: androidNative.Array<number>;
					public static MotionHelper: androidNative.Array<number>;
					public static MotionHelper_onHide: number;
					public static MotionHelper_onShow: number;
					public static MotionLayout: androidNative.Array<number>;
					public static MotionLayout_applyMotionScene: number;
					public static MotionLayout_currentState: number;
					public static MotionLayout_layoutDescription: number;
					public static MotionLayout_motionDebug: number;
					public static MotionLayout_motionProgress: number;
					public static MotionLayout_showPaths: number;
					public static MotionScene: androidNative.Array<number>;
					public static MotionScene_defaultDuration: number;
					public static MotionScene_layoutDuringTransition: number;
					public static MotionTelltales: androidNative.Array<number>;
					public static MotionTelltales_telltales_tailColor: number;
					public static MotionTelltales_telltales_tailScale: number;
					public static MotionTelltales_telltales_velocityMode: number;
					public static Motion_animate_relativeTo: number;
					public static Motion_drawPath: number;
					public static Motion_motionPathRotate: number;
					public static Motion_motionStagger: number;
					public static Motion_pathMotionArc: number;
					public static Motion_transitionEasing: number;
					public static MultiSelectListPreference: androidNative.Array<number>;
					public static MultiSelectListPreference_android_entries: number;
					public static MultiSelectListPreference_android_entryValues: number;
					public static MultiSelectListPreference_entries: number;
					public static MultiSelectListPreference_entryValues: number;
					public static NavAction: androidNative.Array<number>;
					public static NavAction_android_id: number;
					public static NavAction_destination: number;
					public static NavAction_enterAnim: number;
					public static NavAction_exitAnim: number;
					public static NavAction_launchSingleTop: number;
					public static NavAction_popEnterAnim: number;
					public static NavAction_popExitAnim: number;
					public static NavAction_popUpTo: number;
					public static NavAction_popUpToInclusive: number;
					public static NavArgument: androidNative.Array<number>;
					public static NavArgument_android_defaultValue: number;
					public static NavArgument_android_name: number;
					public static NavArgument_argType: number;
					public static NavArgument_nullable: number;
					public static NavDeepLink: androidNative.Array<number>;
					public static NavDeepLink_action: number;
					public static NavDeepLink_android_autoVerify: number;
					public static NavDeepLink_mimeType: number;
					public static NavDeepLink_uri: number;
					public static NavGraphNavigator: androidNative.Array<number>;
					public static NavGraphNavigator_startDestination: number;
					public static NavHost: androidNative.Array<number>;
					public static NavHostFragment: androidNative.Array<number>;
					public static NavHostFragment_defaultNavHost: number;
					public static NavHost_navGraph: number;
					public static NavInclude: androidNative.Array<number>;
					public static NavInclude_graph: number;
					public static NavigationView: androidNative.Array<number>;
					public static NavigationView_android_background: number;
					public static NavigationView_android_fitsSystemWindows: number;
					public static NavigationView_android_maxWidth: number;
					public static NavigationView_elevation: number;
					public static NavigationView_headerLayout: number;
					public static NavigationView_itemBackground: number;
					public static NavigationView_itemHorizontalPadding: number;
					public static NavigationView_itemIconPadding: number;
					public static NavigationView_itemIconSize: number;
					public static NavigationView_itemIconTint: number;
					public static NavigationView_itemMaxLines: number;
					public static NavigationView_itemShapeAppearance: number;
					public static NavigationView_itemShapeAppearanceOverlay: number;
					public static NavigationView_itemShapeFillColor: number;
					public static NavigationView_itemShapeInsetBottom: number;
					public static NavigationView_itemShapeInsetEnd: number;
					public static NavigationView_itemShapeInsetStart: number;
					public static NavigationView_itemShapeInsetTop: number;
					public static NavigationView_itemTextAppearance: number;
					public static NavigationView_itemTextColor: number;
					public static NavigationView_menu: number;
					public static Navigator: androidNative.Array<number>;
					public static Navigator_android_id: number;
					public static Navigator_android_label: number;
					public static OnClick: androidNative.Array<number>;
					public static OnClick_clickAction: number;
					public static OnClick_targetId: number;
					public static OnSwipe: androidNative.Array<number>;
					public static OnSwipe_dragDirection: number;
					public static OnSwipe_dragScale: number;
					public static OnSwipe_limitBoundsTo: number;
					public static OnSwipe_maxAcceleration: number;
					public static OnSwipe_maxVelocity: number;
					public static OnSwipe_moveWhenScrollAtTop: number;
					public static OnSwipe_nestedScrollFlags: number;
					public static OnSwipe_onTouchUp: number;
					public static OnSwipe_touchAnchorId: number;
					public static OnSwipe_touchAnchorSide: number;
					public static OnSwipe_touchRegionId: number;
					public static PopupWindow: androidNative.Array<number>;
					public static PopupWindowBackgroundState: androidNative.Array<number>;
					public static PopupWindowBackgroundState_state_above_anchor: number;
					public static PopupWindow_android_popupAnimationStyle: number;
					public static PopupWindow_android_popupBackground: number;
					public static PopupWindow_overlapAnchor: number;
					public static Preference: androidNative.Array<number>;
					public static PreferenceFragment: androidNative.Array<number>;
					public static PreferenceFragmentCompat: androidNative.Array<number>;
					public static PreferenceFragmentCompat_allowDividerAfterLastItem: number;
					public static PreferenceFragmentCompat_android_divider: number;
					public static PreferenceFragmentCompat_android_dividerHeight: number;
					public static PreferenceFragmentCompat_android_layout: number;
					public static PreferenceFragment_allowDividerAfterLastItem: number;
					public static PreferenceFragment_android_divider: number;
					public static PreferenceFragment_android_dividerHeight: number;
					public static PreferenceFragment_android_layout: number;
					public static PreferenceGroup: androidNative.Array<number>;
					public static PreferenceGroup_android_orderingFromXml: number;
					public static PreferenceGroup_initialExpandedChildrenCount: number;
					public static PreferenceGroup_orderingFromXml: number;
					public static PreferenceImageView: androidNative.Array<number>;
					public static PreferenceImageView_android_maxHeight: number;
					public static PreferenceImageView_android_maxWidth: number;
					public static PreferenceImageView_maxHeight: number;
					public static PreferenceImageView_maxWidth: number;
					public static PreferenceTheme: androidNative.Array<number>;
					public static PreferenceTheme_checkBoxPreferenceStyle: number;
					public static PreferenceTheme_dialogPreferenceStyle: number;
					public static PreferenceTheme_dropdownPreferenceStyle: number;
					public static PreferenceTheme_editTextPreferenceStyle: number;
					public static PreferenceTheme_preferenceCategoryStyle: number;
					public static PreferenceTheme_preferenceCategoryTitleTextAppearance: number;
					public static PreferenceTheme_preferenceFragmentCompatStyle: number;
					public static PreferenceTheme_preferenceFragmentListStyle: number;
					public static PreferenceTheme_preferenceFragmentStyle: number;
					public static PreferenceTheme_preferenceInformationStyle: number;
					public static PreferenceTheme_preferenceScreenStyle: number;
					public static PreferenceTheme_preferenceStyle: number;
					public static PreferenceTheme_preferenceTheme: number;
					public static PreferenceTheme_seekBarPreferenceStyle: number;
					public static PreferenceTheme_switchPreferenceCompatStyle: number;
					public static PreferenceTheme_switchPreferenceStyle: number;
					public static Preference_allowDividerAbove: number;
					public static Preference_allowDividerBelow: number;
					public static Preference_android_defaultValue: number;
					public static Preference_android_dependency: number;
					public static Preference_android_enabled: number;
					public static Preference_android_fragment: number;
					public static Preference_android_icon: number;
					public static Preference_android_iconSpaceReserved: number;
					public static Preference_android_key: number;
					public static Preference_android_layout: number;
					public static Preference_android_order: number;
					public static Preference_android_persistent: number;
					public static Preference_android_selectable: number;
					public static Preference_android_shouldDisableView: number;
					public static Preference_android_singleLineTitle: number;
					public static Preference_android_summary: number;
					public static Preference_android_title: number;
					public static Preference_android_widgetLayout: number;
					public static Preference_defaultValue: number;
					public static Preference_dependency: number;
					public static Preference_enableCopying: number;
					public static Preference_enabled: number;
					public static Preference_fragment: number;
					public static Preference_icon: number;
					public static Preference_iconSpaceReserved: number;
					public static Preference_isPreferenceVisible: number;
					public static Preference_key: number;
					public static Preference_layout: number;
					public static Preference_order: number;
					public static Preference_persistent: number;
					public static Preference_selectable: number;
					public static Preference_shouldDisableView: number;
					public static Preference_singleLineTitle: number;
					public static Preference_summary: number;
					public static Preference_title: number;
					public static Preference_widgetLayout: number;
					public static PreferencesBadge: androidNative.Array<number>;
					public static PreferencesBadge_badge: number;
					public static PreferencesCopyright: androidNative.Array<number>;
					public static PreferencesCopyright_text: number;
					public static ProgressIndicator: androidNative.Array<number>;
					public static ProgressIndicator_android_indeterminate: number;
					public static ProgressIndicator_circularInset: number;
					public static ProgressIndicator_circularRadius: number;
					public static ProgressIndicator_growMode: number;
					public static ProgressIndicator_indicatorColor: number;
					public static ProgressIndicator_indicatorColors: number;
					public static ProgressIndicator_indicatorCornerRadius: number;
					public static ProgressIndicator_indicatorType: number;
					public static ProgressIndicator_indicatorWidth: number;
					public static ProgressIndicator_inverse: number;
					public static ProgressIndicator_linearSeamless: number;
					public static ProgressIndicator_minHideDelay: number;
					public static ProgressIndicator_trackColor: number;
					public static PropertySet: androidNative.Array<number>;
					public static PropertySet_android_alpha: number;
					public static PropertySet_android_visibility: number;
					public static PropertySet_layout_constraintTag: number;
					public static PropertySet_motionProgress: number;
					public static PropertySet_visibilityMode: number;
					public static RadialViewGroup: androidNative.Array<number>;
					public static RadialViewGroup_materialCircleRadius: number;
					public static RangeSlider: androidNative.Array<number>;
					public static RangeSlider_minSeparation: number;
					public static RangeSlider_values: number;
					public static RecycleListView: androidNative.Array<number>;
					public static RecycleListView_paddingBottomNoButtons: number;
					public static RecycleListView_paddingTopNoTitle: number;
					public static RecyclerView: androidNative.Array<number>;
					public static RecyclerView_android_clipToPadding: number;
					public static RecyclerView_android_descendantFocusability: number;
					public static RecyclerView_android_orientation: number;
					public static RecyclerView_fastScrollEnabled: number;
					public static RecyclerView_fastScrollHorizontalThumbDrawable: number;
					public static RecyclerView_fastScrollHorizontalTrackDrawable: number;
					public static RecyclerView_fastScrollVerticalThumbDrawable: number;
					public static RecyclerView_fastScrollVerticalTrackDrawable: number;
					public static RecyclerView_layoutManager: number;
					public static RecyclerView_reverseLayout: number;
					public static RecyclerView_spanCount: number;
					public static RecyclerView_stackFromEnd: number;
					public static ScrimInsetsFrameLayout: androidNative.Array<number>;
					public static ScrimInsetsFrameLayout_insetForeground: number;
					public static Scroll: androidNative.Array<number>;
					public static Scroll_scrollRotation: number;
					public static ScrollingViewBehavior_Layout: androidNative.Array<number>;
					public static ScrollingViewBehavior_Layout_behavior_overlapTop: number;
					public static SearchView: androidNative.Array<number>;
					public static SearchView_android_focusable: number;
					public static SearchView_android_imeOptions: number;
					public static SearchView_android_inputType: number;
					public static SearchView_android_maxWidth: number;
					public static SearchView_closeIcon: number;
					public static SearchView_commitIcon: number;
					public static SearchView_defaultQueryHint: number;
					public static SearchView_goIcon: number;
					public static SearchView_iconifiedByDefault: number;
					public static SearchView_layout: number;
					public static SearchView_queryBackground: number;
					public static SearchView_queryHint: number;
					public static SearchView_searchHintIcon: number;
					public static SearchView_searchIcon: number;
					public static SearchView_submitBackground: number;
					public static SearchView_suggestionRowLayout: number;
					public static SearchView_voiceIcon: number;
					public static SeekBarPreference: androidNative.Array<number>;
					public static SeekBarPreference_adjustable: number;
					public static SeekBarPreference_android_layout: number;
					public static SeekBarPreference_android_max: number;
					public static SeekBarPreference_min: number;
					public static SeekBarPreference_seekBarIncrement: number;
					public static SeekBarPreference_showSeekBarValue: number;
					public static SeekBarPreference_updatesContinuously: number;
					public static ShapeAppearance: androidNative.Array<number>;
					public static ShapeAppearance_cornerFamily: number;
					public static ShapeAppearance_cornerFamilyBottomLeft: number;
					public static ShapeAppearance_cornerFamilyBottomRight: number;
					public static ShapeAppearance_cornerFamilyTopLeft: number;
					public static ShapeAppearance_cornerFamilyTopRight: number;
					public static ShapeAppearance_cornerSize: number;
					public static ShapeAppearance_cornerSizeBottomLeft: number;
					public static ShapeAppearance_cornerSizeBottomRight: number;
					public static ShapeAppearance_cornerSizeTopLeft: number;
					public static ShapeAppearance_cornerSizeTopRight: number;
					public static ShapeableImageView: androidNative.Array<number>;
					public static ShapeableImageView_shapeAppearance: number;
					public static ShapeableImageView_shapeAppearanceOverlay: number;
					public static ShapeableImageView_strokeColor: number;
					public static ShapeableImageView_strokeWidth: number;
					public static Slider: androidNative.Array<number>;
					public static Slider_android_stepSize: number;
					public static Slider_android_value: number;
					public static Slider_android_valueFrom: number;
					public static Slider_android_valueTo: number;
					public static Slider_haloColor: number;
					public static Slider_haloRadius: number;
					public static Slider_labelBehavior: number;
					public static Slider_labelStyle: number;
					public static Slider_thumbColor: number;
					public static Slider_thumbElevation: number;
					public static Slider_thumbRadius: number;
					public static Slider_tickColor: number;
					public static Slider_tickColorActive: number;
					public static Slider_tickColorInactive: number;
					public static Slider_trackColor: number;
					public static Slider_trackColorActive: number;
					public static Slider_trackColorInactive: number;
					public static Slider_trackHeight: number;
					public static Snackbar: androidNative.Array<number>;
					public static SnackbarLayout: androidNative.Array<number>;
					public static SnackbarLayout_actionTextColorAlpha: number;
					public static SnackbarLayout_android_maxWidth: number;
					public static SnackbarLayout_animationMode: number;
					public static SnackbarLayout_backgroundOverlayColorAlpha: number;
					public static SnackbarLayout_backgroundTint: number;
					public static SnackbarLayout_backgroundTintMode: number;
					public static SnackbarLayout_elevation: number;
					public static SnackbarLayout_maxActionInlineWidth: number;
					public static Snackbar_snackbarButtonStyle: number;
					public static Snackbar_snackbarStyle: number;
					public static Snackbar_snackbarTextViewStyle: number;
					public static Spinner: androidNative.Array<number>;
					public static Spinner_android_dropDownWidth: number;
					public static Spinner_android_entries: number;
					public static Spinner_android_popupBackground: number;
					public static Spinner_android_prompt: number;
					public static Spinner_popupTheme: number;
					public static State: androidNative.Array<number>;
					public static StateListDrawable: androidNative.Array<number>;
					public static StateListDrawableItem: androidNative.Array<number>;
					public static StateListDrawableItem_android_drawable: number;
					public static StateListDrawable_android_constantSize: number;
					public static StateListDrawable_android_dither: number;
					public static StateListDrawable_android_enterFadeDuration: number;
					public static StateListDrawable_android_exitFadeDuration: number;
					public static StateListDrawable_android_variablePadding: number;
					public static StateListDrawable_android_visible: number;
					public static StateSet: androidNative.Array<number>;
					public static StateSet_defaultState: number;
					public static State_android_id: number;
					public static State_constraints: number;
					public static SwitchCompat: androidNative.Array<number>;
					public static SwitchCompat_android_textOff: number;
					public static SwitchCompat_android_textOn: number;
					public static SwitchCompat_android_thumb: number;
					public static SwitchCompat_showText: number;
					public static SwitchCompat_splitTrack: number;
					public static SwitchCompat_switchMinWidth: number;
					public static SwitchCompat_switchPadding: number;
					public static SwitchCompat_switchTextAppearance: number;
					public static SwitchCompat_thumbTextPadding: number;
					public static SwitchCompat_thumbTint: number;
					public static SwitchCompat_thumbTintMode: number;
					public static SwitchCompat_track: number;
					public static SwitchCompat_trackTint: number;
					public static SwitchCompat_trackTintMode: number;
					public static SwitchMaterial: androidNative.Array<number>;
					public static SwitchMaterial_useMaterialThemeColors: number;
					public static SwitchPreference: androidNative.Array<number>;
					public static SwitchPreferenceCompat: androidNative.Array<number>;
					public static SwitchPreferenceCompat_android_disableDependentsState: number;
					public static SwitchPreferenceCompat_android_summaryOff: number;
					public static SwitchPreferenceCompat_android_summaryOn: number;
					public static SwitchPreferenceCompat_android_switchTextOff: number;
					public static SwitchPreferenceCompat_android_switchTextOn: number;
					public static SwitchPreferenceCompat_disableDependentsState: number;
					public static SwitchPreferenceCompat_summaryOff: number;
					public static SwitchPreferenceCompat_summaryOn: number;
					public static SwitchPreferenceCompat_switchTextOff: number;
					public static SwitchPreferenceCompat_switchTextOn: number;
					public static SwitchPreference_android_disableDependentsState: number;
					public static SwitchPreference_android_summaryOff: number;
					public static SwitchPreference_android_summaryOn: number;
					public static SwitchPreference_android_switchTextOff: number;
					public static SwitchPreference_android_switchTextOn: number;
					public static SwitchPreference_disableDependentsState: number;
					public static SwitchPreference_summaryOff: number;
					public static SwitchPreference_summaryOn: number;
					public static SwitchPreference_switchTextOff: number;
					public static SwitchPreference_switchTextOn: number;
					public static TabItem: androidNative.Array<number>;
					public static TabItem_android_icon: number;
					public static TabItem_android_layout: number;
					public static TabItem_android_text: number;
					public static TabLayout: androidNative.Array<number>;
					public static TabLayout_tabBackground: number;
					public static TabLayout_tabContentStart: number;
					public static TabLayout_tabGravity: number;
					public static TabLayout_tabIconTint: number;
					public static TabLayout_tabIconTintMode: number;
					public static TabLayout_tabIndicator: number;
					public static TabLayout_tabIndicatorAnimationDuration: number;
					public static TabLayout_tabIndicatorColor: number;
					public static TabLayout_tabIndicatorFullWidth: number;
					public static TabLayout_tabIndicatorGravity: number;
					public static TabLayout_tabIndicatorHeight: number;
					public static TabLayout_tabInlineLabel: number;
					public static TabLayout_tabMaxWidth: number;
					public static TabLayout_tabMinWidth: number;
					public static TabLayout_tabMode: number;
					public static TabLayout_tabPadding: number;
					public static TabLayout_tabPaddingBottom: number;
					public static TabLayout_tabPaddingEnd: number;
					public static TabLayout_tabPaddingStart: number;
					public static TabLayout_tabPaddingTop: number;
					public static TabLayout_tabRippleColor: number;
					public static TabLayout_tabSelectedTextColor: number;
					public static TabLayout_tabTextAppearance: number;
					public static TabLayout_tabTextColor: number;
					public static TabLayout_tabUnboundedRipple: number;
					public static TextAppearance: androidNative.Array<number>;
					public static TextAppearance_android_fontFamily: number;
					public static TextAppearance_android_shadowColor: number;
					public static TextAppearance_android_shadowDx: number;
					public static TextAppearance_android_shadowDy: number;
					public static TextAppearance_android_shadowRadius: number;
					public static TextAppearance_android_textColor: number;
					public static TextAppearance_android_textColorHint: number;
					public static TextAppearance_android_textColorLink: number;
					public static TextAppearance_android_textFontWeight: number;
					public static TextAppearance_android_textSize: number;
					public static TextAppearance_android_textStyle: number;
					public static TextAppearance_android_typeface: number;
					public static TextAppearance_fontFamily: number;
					public static TextAppearance_fontVariationSettings: number;
					public static TextAppearance_textAllCaps: number;
					public static TextAppearance_textLocale: number;
					public static TextInputEditText: androidNative.Array<number>;
					public static TextInputEditText_textInputLayoutFocusedRectEnabled: number;
					public static TextInputLayout: androidNative.Array<number>;
					public static TextInputLayout_android_enabled: number;
					public static TextInputLayout_android_hint: number;
					public static TextInputLayout_android_textColorHint: number;
					public static TextInputLayout_boxBackgroundColor: number;
					public static TextInputLayout_boxBackgroundMode: number;
					public static TextInputLayout_boxCollapsedPaddingTop: number;
					public static TextInputLayout_boxCornerRadiusBottomEnd: number;
					public static TextInputLayout_boxCornerRadiusBottomStart: number;
					public static TextInputLayout_boxCornerRadiusTopEnd: number;
					public static TextInputLayout_boxCornerRadiusTopStart: number;
					public static TextInputLayout_boxStrokeColor: number;
					public static TextInputLayout_boxStrokeErrorColor: number;
					public static TextInputLayout_boxStrokeWidth: number;
					public static TextInputLayout_boxStrokeWidthFocused: number;
					public static TextInputLayout_counterEnabled: number;
					public static TextInputLayout_counterMaxLength: number;
					public static TextInputLayout_counterOverflowTextAppearance: number;
					public static TextInputLayout_counterOverflowTextColor: number;
					public static TextInputLayout_counterTextAppearance: number;
					public static TextInputLayout_counterTextColor: number;
					public static TextInputLayout_endIconCheckable: number;
					public static TextInputLayout_endIconContentDescription: number;
					public static TextInputLayout_endIconDrawable: number;
					public static TextInputLayout_endIconMode: number;
					public static TextInputLayout_endIconTint: number;
					public static TextInputLayout_endIconTintMode: number;
					public static TextInputLayout_errorContentDescription: number;
					public static TextInputLayout_errorEnabled: number;
					public static TextInputLayout_errorIconDrawable: number;
					public static TextInputLayout_errorIconTint: number;
					public static TextInputLayout_errorIconTintMode: number;
					public static TextInputLayout_errorTextAppearance: number;
					public static TextInputLayout_errorTextColor: number;
					public static TextInputLayout_helperText: number;
					public static TextInputLayout_helperTextEnabled: number;
					public static TextInputLayout_helperTextTextAppearance: number;
					public static TextInputLayout_helperTextTextColor: number;
					public static TextInputLayout_hintAnimationEnabled: number;
					public static TextInputLayout_hintEnabled: number;
					public static TextInputLayout_hintTextAppearance: number;
					public static TextInputLayout_hintTextColor: number;
					public static TextInputLayout_passwordToggleContentDescription: number;
					public static TextInputLayout_passwordToggleDrawable: number;
					public static TextInputLayout_passwordToggleEnabled: number;
					public static TextInputLayout_passwordToggleTint: number;
					public static TextInputLayout_passwordToggleTintMode: number;
					public static TextInputLayout_placeholderText: number;
					public static TextInputLayout_placeholderTextAppearance: number;
					public static TextInputLayout_placeholderTextColor: number;
					public static TextInputLayout_prefixText: number;
					public static TextInputLayout_prefixTextAppearance: number;
					public static TextInputLayout_prefixTextColor: number;
					public static TextInputLayout_shapeAppearance: number;
					public static TextInputLayout_shapeAppearanceOverlay: number;
					public static TextInputLayout_startIconCheckable: number;
					public static TextInputLayout_startIconContentDescription: number;
					public static TextInputLayout_startIconDrawable: number;
					public static TextInputLayout_startIconTint: number;
					public static TextInputLayout_startIconTintMode: number;
					public static TextInputLayout_suffixText: number;
					public static TextInputLayout_suffixTextAppearance: number;
					public static TextInputLayout_suffixTextColor: number;
					public static ThemeEnforcement: androidNative.Array<number>;
					public static ThemeEnforcement_android_textAppearance: number;
					public static ThemeEnforcement_enforceMaterialTheme: number;
					public static ThemeEnforcement_enforceTextAppearance: number;
					public static Toolbar: androidNative.Array<number>;
					public static Toolbar_android_gravity: number;
					public static Toolbar_android_minHeight: number;
					public static Toolbar_buttonGravity: number;
					public static Toolbar_collapseContentDescription: number;
					public static Toolbar_collapseIcon: number;
					public static Toolbar_contentInsetEnd: number;
					public static Toolbar_contentInsetEndWithActions: number;
					public static Toolbar_contentInsetLeft: number;
					public static Toolbar_contentInsetRight: number;
					public static Toolbar_contentInsetStart: number;
					public static Toolbar_contentInsetStartWithNavigation: number;
					public static Toolbar_logo: number;
					public static Toolbar_logoDescription: number;
					public static Toolbar_maxButtonHeight: number;
					public static Toolbar_menu: number;
					public static Toolbar_navigationContentDescription: number;
					public static Toolbar_navigationIcon: number;
					public static Toolbar_popupTheme: number;
					public static Toolbar_subtitle: number;
					public static Toolbar_subtitleTextAppearance: number;
					public static Toolbar_subtitleTextColor: number;
					public static Toolbar_title: number;
					public static Toolbar_titleMargin: number;
					public static Toolbar_titleMarginBottom: number;
					public static Toolbar_titleMarginEnd: number;
					public static Toolbar_titleMarginStart: number;
					public static Toolbar_titleMarginTop: number;
					public static Toolbar_titleMargins: number;
					public static Toolbar_titleTextAppearance: number;
					public static Toolbar_titleTextColor: number;
					public static Tooltip: androidNative.Array<number>;
					public static Tooltip_android_layout_margin: number;
					public static Tooltip_android_minHeight: number;
					public static Tooltip_android_minWidth: number;
					public static Tooltip_android_padding: number;
					public static Tooltip_android_text: number;
					public static Tooltip_android_textAppearance: number;
					public static Tooltip_backgroundTint: number;
					public static Transform: androidNative.Array<number>;
					public static Transform_android_elevation: number;
					public static Transform_android_rotation: number;
					public static Transform_android_rotationX: number;
					public static Transform_android_rotationY: number;
					public static Transform_android_scaleX: number;
					public static Transform_android_scaleY: number;
					public static Transform_android_transformPivotX: number;
					public static Transform_android_transformPivotY: number;
					public static Transform_android_translationX: number;
					public static Transform_android_translationY: number;
					public static Transform_android_translationZ: number;
					public static Transform_pivotAnchor: number;
					public static Transform_pivotX: number;
					public static Transform_pivotY: number;
					public static Transition: androidNative.Array<number>;
					public static Transition_android_id: number;
					public static Transition_autoTransition: number;
					public static Transition_constraintSetEnd: number;
					public static Transition_constraintSetStart: number;
					public static Transition_duration: number;
					public static Transition_layoutDuringTransition: number;
					public static Transition_motionInterpolator: number;
					public static Transition_pathMotionArc: number;
					public static Transition_staggered: number;
					public static Transition_transitionDisable: number;
					public static Variant: androidNative.Array<number>;
					public static Variant_constraints: number;
					public static Variant_region_heightLessThan: number;
					public static Variant_region_heightMoreThan: number;
					public static Variant_region_widthLessThan: number;
					public static Variant_region_widthMoreThan: number;
					public static View: androidNative.Array<number>;
					public static ViewBackgroundHelper: androidNative.Array<number>;
					public static ViewBackgroundHelper_android_background: number;
					public static ViewBackgroundHelper_backgroundTint: number;
					public static ViewBackgroundHelper_backgroundTintMode: number;
					public static ViewPager2: androidNative.Array<number>;
					public static ViewPager2_android_orientation: number;
					public static ViewStubCompat: androidNative.Array<number>;
					public static ViewStubCompat_android_id: number;
					public static ViewStubCompat_android_inflatedId: number;
					public static ViewStubCompat_android_layout: number;
					public static View_android_focusable: number;
					public static View_android_theme: number;
					public static View_paddingEnd: number;
					public static View_paddingStart: number;
					public static View_theme: number;
					public static YouTubePlayerSeekBar: androidNative.Array<number>;
					public static YouTubePlayerSeekBar_color: number;
					public static YouTubePlayerSeekBar_fontSize: number;
					public static YouTubePlayerView: androidNative.Array<number>;
					public static YouTubePlayerView_autoPlay: number;
					public static YouTubePlayerView_enableAutomaticInitialization: number;
					public static YouTubePlayerView_enableLiveVideoUi: number;
					public static YouTubePlayerView_handleNetworkEvents: number;
					public static YouTubePlayerView_showFullScreenButton: number;
					public static YouTubePlayerView_showSeekBar: number;
					public static YouTubePlayerView_showVideoCurrentTime: number;
					public static YouTubePlayerView_showVideoDuration: number;
					public static YouTubePlayerView_showYouTubeButton: number;
					public static YouTubePlayerView_useWebUi: number;
					public static YouTubePlayerView_videoId: number;
					public static leak_canary_MoreDetailsView: androidNative.Array<number>;
					public static leak_canary_MoreDetailsView_leak_canary_plus_color: number;
					public static ucrop_AspectRatioTextView: androidNative.Array<number>;
					public static ucrop_AspectRatioTextView_ucrop_artv_ratio_title: number;
					public static ucrop_AspectRatioTextView_ucrop_artv_ratio_x: number;
					public static ucrop_AspectRatioTextView_ucrop_artv_ratio_y: number;
					public static ucrop_UCropView: androidNative.Array<number>;
					public static ucrop_UCropView_ucrop_aspect_ratio_x: number;
					public static ucrop_UCropView_ucrop_aspect_ratio_y: number;
					public static ucrop_UCropView_ucrop_circle_dimmed_layer: number;
					public static ucrop_UCropView_ucrop_dimmed_color: number;
					public static ucrop_UCropView_ucrop_frame_color: number;
					public static ucrop_UCropView_ucrop_frame_stroke_size: number;
					public static ucrop_UCropView_ucrop_grid_color: number;
					public static ucrop_UCropView_ucrop_grid_column_count: number;
					public static ucrop_UCropView_ucrop_grid_row_count: number;
					public static ucrop_UCropView_ucrop_grid_stroke_size: number;
					public static ucrop_UCropView_ucrop_show_frame: number;
					public static ucrop_UCropView_ucrop_show_grid: number;
					public static ucrop_UCropView_ucrop_show_oval_crop_frame: number;
					public static "<clinit>"(): void;
					public constructor();
				}
				export class transition {
					public static class: java.lang.Class<com.xfl.msgbot.R.transition>;
					public static change_transform_mix: number;
					public static test: number;
					public constructor();
				}
				export class xml {
					public static class: java.lang.Class<com.xfl.msgbot.R.xml>;
					public static adsettings_root_preferences: number;
					public static debug_room_root_preferences: number;
					public static developer_mode_preferences: number;
					public static image_share_filepaths: number;
					public static leak_canary_file_paths: number;
					public static provider_paths: number;
					public static public_custom_package: number;
					public static public_pref: number;
					public static script_pref: number;
					public static standalone_badge: number;
					public static standalone_badge_gravity_bottom_end: number;
					public static standalone_badge_gravity_bottom_start: number;
					public static standalone_badge_gravity_top_start: number;
					public static standalone_badge_offset: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export class ADBListener {
					public static class: java.lang.Class<com.xfl.msgbot.application.ADBListener>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export class AdManager {
					public static class: java.lang.Class<com.xfl.msgbot.application.AdManager>;
					public a: globalAndroid.app.Activity;
					public b: com.anjlab.android.iab.v3.BillingProcessor;
					public c: boolean;
					public container: com.xfl.msgbot.utils.view.AdContainerLayout;
					public realContainer: globalAndroid.widget.FrameLayout;
					public unitId: string;
					public view: com.google.android.gms.ads.AdView;
					public static "<clinit>"(): void;
					public showAd(): com.xfl.msgbot.application.AdManager;
					public getUnitId(): string;
					public getActivity(): globalAndroid.app.Activity;
					public constructor(param0: globalAndroid.app.Activity);
					public getAdSize(): com.google.android.gms.ads.AdSize;
					public getBillingProcessor(): com.anjlab.android.iab.v3.BillingProcessor;
					public getContainer(): com.xfl.msgbot.utils.view.AdContainerLayout;
					public setContainer(param0: com.xfl.msgbot.utils.view.AdContainerLayout): void;
					public getVisibility(): boolean;
					public setRealContainer(param0: globalAndroid.widget.FrameLayout): void;
					public setUnitId(param0: string): void;
					public setup(param0: com.xfl.msgbot.utils.view.AdContainerLayout, param1: com.google.android.gms.ads.AdView, param2: string, param3: com.anjlab.android.iab.v3.BillingProcessor): com.xfl.msgbot.application.AdManager;
					public applyPurchase(): void;
					public getRealContainer(): globalAndroid.widget.FrameLayout;
					public setView(param0: com.google.android.gms.ads.AdView): void;
					public getView(): com.google.android.gms.ads.AdView;
					public setBillingProcessor(param0: com.anjlab.android.iab.v3.BillingProcessor): void;
					public updateVisibility(param0: boolean): void;
				}
				export module AdManager {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.application.AdManager.Companion>;
						public setTestDevice(param0: com.google.android.gms.ads.AdRequest.Builder): com.google.android.gms.ads.AdRequest.Builder;
						public constructor();
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export class CompileActivity {
					public static class: java.lang.Class<com.xfl.msgbot.application.CompileActivity>;
					/**
					 * Constructs a new instance of the com.xfl.msgbot.application.CompileActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						popupSnackbar(param0: string): void;
					});
					public constructor();
					public popupSnackbar(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export class MainApplication {
					public static class: java.lang.Class<com.xfl.msgbot.application.MainApplication>;
					public static androidDefaultUEH: java.lang.Thread.UncaughtExceptionHandler;
					public static b: any;
					public static c: boolean;
					public static d: java.util.Timer;
					public static e: globalAndroid.os.Handler;
					public static f: globalAndroid.content.ContextWrapper;
					public static tick: number;
					public static "<clinit>"(): void;
					public onCreate(): void;
					public a(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: java.lang.Class<any>): any;
					public constructor();
					public onTerminate(): void;
				}
				export module MainApplication {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.application.MainApplication.Companion>;
						public constructor();
						public setAndroidDefaultUEH(param0: java.lang.Thread.UncaughtExceptionHandler): void;
						public getAndroidDefaultUEH(): java.lang.Thread.UncaughtExceptionHandler;
						public getUIHandler(): globalAndroid.os.Handler;
						public getHasMissingSplits(): boolean;
						public constructor(param0: any);
						public getBabelConverter(): any;
						public loadTheme(param0: globalAndroid.content.Context, param1: com.xfl.msgbot.utils.ThemeChanged): number;
						public showDialogs(param0: androidNative.Array<globalAndroid.app.Dialog>, param1: androidNative.Array<globalAndroid.app.AlertDialog>, param2: androidNative.Array<com.google.android.material.dialog.MaterialAlertDialogBuilder>, param3: androidNative.Array<androidx.appcompat.app.AlertDialog>, param4: androidNative.Array<com.google.android.material.dialog.MaterialAlertDialogBuilder>): void;
						public setHasMissingSplits(param0: boolean): void;
						public getContext(): globalAndroid.content.ContextWrapper;
						public getUsbSocketServer(): com.xfl.msgbot.application.UsbSocketServer;
						public showDialog(param0: globalAndroid.app.Dialog, param1: globalAndroid.app.AlertDialog, param2: com.google.android.material.dialog.MaterialAlertDialogBuilder, param3: androidx.appcompat.app.AlertDialog, param4: com.google.android.material.dialog.MaterialAlertDialogBuilder): void;
						public applicationRestart(param0: globalAndroid.app.Activity): void;
						public useCanary(param0: boolean): void;
						public buildFilesystem(param0: java.io.File): void;
						public getTickTimer(): java.util.Timer;
						public setBabelConverter(param0: any): void;
					}
					export class LeakUploader {
						public static class: java.lang.Class<com.xfl.msgbot.application.MainApplication.LeakUploader>;
						public a: leakcanary.OnHeapAnalyzedListener;
						public constructor();
						public onHeapAnalyzed(param0: shark.HeapAnalysis): void;
					}
					export class LifeCycleA {
						public static class: java.lang.Class<com.xfl.msgbot.application.MainApplication.LifeCycleA>;
						public static a: com.xfl.msgbot.application.MainApplication.LifeCycleA;
						public static b: any;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public constructor();
						public static "<clinit>"(): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export class UsbSocketServer {
					public static class: java.lang.Class<com.xfl.msgbot.application.UsbSocketServer>;
					public a: java.net.Socket;
					public b: java.lang.Thread;
					public c: java.io.InputStream;
					public d: java.io.BufferedReader;
					public e: java.io.BufferedWriter;
					public f: any;
					public g: java.net.ServerSocket;
					public h: boolean;
					public i: string;
					public setOnStateChangeListener(param0: any): void;
					public setState(param0: string): void;
					public isWorking(): boolean;
					public getOnStateChangeListener(): any;
					public send(param0: string): void;
					public setServerSocket(param0: java.net.ServerSocket): void;
					public constructor();
					public stop(): void;
					public getServerSocket(): java.net.ServerSocket;
					public getState(): string;
					public start(param0: number): void;
					public setWorking(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class CrashLogActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.CrashLogActivity>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class CustomScriptActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.CustomScriptActivity>;
						public i: org.mozilla.javascript.ScriptableObject;
						public j: string;
						public k: com.xfl.msgbot.script.ScriptContainer;
						public l: org.mozilla.javascript.Context;
						public m: boolean;
						public n: com.xfl.msgbot.script.api.modern.Bot;
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onResume(): void;
						public onBackPressed(): void;
						public onStop(): void;
						public _$_clearFindViewByIdCache(): void;
						public onPause(): void;
						public a(param0: com.xfl.msgbot.script.api.modern.Bot, param1: string, param2: androidNative.Array<any>, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.ScriptableObject): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public onRestart(): void;
						public onDestroy(): void;
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class DirectorySelectorActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.DirectorySelectorActivity>;
						public adapter: com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter;
						public currentTheme: globalAndroid.content.res.Resources.Theme;
						public i: java.io.File;
						public j: java.io.File;
						public k: any;
						public l: any;
						public constructor();
						public getCurrentDirectory(): java.io.File;
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public setCurrentDirectory(param0: java.io.File): void;
						public getCurrentTheme(): globalAndroid.content.res.Resources.Theme;
						public static access$getInflater(param0: com.xfl.msgbot.application.activity.DirectorySelectorActivity): globalAndroid.view.LayoutInflater;
						public onBackPressed(): void;
						public _$_clearFindViewByIdCache(): void;
						public setAdapter(param0: com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public getAdapter(): com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter;
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public setCurrentTheme(param0: globalAndroid.content.res.Resources.Theme): void;
						public constructor(param0: number);
						public static access$getItemDefaultLayoutParams(param0: com.xfl.msgbot.application.activity.DirectorySelectorActivity): globalAndroid.widget.LinearLayout.LayoutParams;
						public onCreate(param0: globalAndroid.os.Bundle): void;
					}
					export module DirectorySelectorActivity {
						export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerViewHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter>;
							public c: globalAndroid.content.Context;
							public d: java.util.ArrayList<any>;
							public getItemId(param0: number): number;
							public visitDirectory(param0: java.io.File): void;
							public getContext(): globalAndroid.content.Context;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerViewHolder;
							public getItemCount(): number;
							public add(param0: any): void;
							public getItems(): java.util.ArrayList<any>;
							public constructor(param0: globalAndroid.content.Context);
							public onBindViewHolder(param0: com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerViewHolder, param1: number): void;
						}
						export class RecyclerViewHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerViewHolder>;
							public s: com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter;
							public t: globalAndroid.view.View;
							public u: globalAndroid.widget.TextView;
							public v: globalAndroid.widget.ImageView;
							public w: globalAndroid.graphics.drawable.Drawable;
							public x: globalAndroid.content.res.ColorStateList;
							public getButton(): globalAndroid.view.View;
							public getFileName(): globalAndroid.widget.TextView;
							public constructor(param0: globalAndroid.view.View, param1: com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter);
							public getAdapter(): com.xfl.msgbot.application.activity.DirectorySelectorActivity.RecyclerAdapter;
							public onBind(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class MainActivity extends com.xfl.msgbot.utils.AppScopeActivity implements com.xfl.msgbot.application.CompileActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.MainActivity>;
						public static APP_CREATE_SCRIPT_REQUEST_CODE: number;
						public static APP_UPDATE_REQUEST_CODE: number;
						public static s: boolean;
						public static t: boolean;
						public static u: boolean;
						public i: com.google.android.gms.ads.AdView;
						public j: com.anjlab.android.iab.v3.BillingProcessor;
						public k: androidx.recyclerview.widget.RecyclerView;
						public l: com.xfl.msgbot.application.activity.ScriptListAdapter;
						public m: globalAndroid.content.SharedPreferences;
						public n: com.xfl.msgbot.application.AdManager;
						public o: com.google.android.play.core.appupdate.AppUpdateManager;
						public p: com.google.android.play.core.install.InstallStateUpdatedListener;
						public q: com.xfl.msgbot.application.activity.MainActivity.receiver[1];
						public r: com.xfl.msgbot.application.activity.MainActivity.scriptStateReceiver[1];
						public onBillingError(param0: number, param1: java.lang.Throwable): void;
						public constructor();
						public static "<clinit>"(): void;
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onResume(): void;
						public await(param0: com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>, param1: boolean, param2: any): any;
						public onBillingInitialized(): void;
						public onStop(): void;
						public _$_clearFindViewByIdCache(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public onDestroy(): void;
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public a(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public b(param0: globalAndroid.view.View): void;
						public popupSnackbar(param0: string): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onPurchaseHistoryRestored(): void;
						public onProductPurchased(param0: string, param1: com.anjlab.android.iab.v3.TransactionDetails): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					}
					export module MainActivity {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.MainActivity.Companion>;
							public constructor();
							public setLock(param0: boolean): void;
							public constructor(param0: any);
							public getLock(): boolean;
							public setCheckSplash(param0: boolean): void;
							public getCheckSplash(): boolean;
						}
						export class a<ResultT>  extends com.google.android.play.core.tasks.OnCompleteListener {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.MainActivity.a<any>>;
							public onComplete(param0: com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>): void;
							public constructor(param0: any);
						}
						export class b<ResultT>  extends com.google.android.play.core.tasks.OnSuccessListener {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.MainActivity.b<any>>;
							public onSuccess(param0: any): void;
							public constructor(param0: any);
						}
						export class c {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.MainActivity.c>;
							public onFailure(param0: java.lang.Exception): void;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class PackageSelectActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.PackageSelectActivity>;
						public static j: com.xfl.msgbot.utils.PackageItem;
						public i: io.reactivex.rxjava3.disposables.CompositeDisposable;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public static "<clinit>"(): void;
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onDestroy(): void;
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onBackPressed(): void;
						public _$_clearFindViewByIdCache(): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					}
					export module PackageSelectActivity {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.PackageSelectActivity.Companion>;
							public constructor();
							public setAdapter(param0: com.xfl.msgbot.utils.PackageItem): void;
							public constructor(param0: any);
							public getAdapter(): com.xfl.msgbot.utils.PackageItem;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class ScriptCreateAlertActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.ScriptCreateAlertActivity>;
						public i: com.xfl.msgbot.utils.view.AdContainerLayout;
						public j: com.google.android.gms.ads.AdView;
						public k: com.anjlab.android.iab.v3.BillingProcessor;
						public l: com.xfl.msgbot.application.AdManager;
						public onBillingError(param0: number, param1: java.lang.Throwable): void;
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public onBillingInitialized(): void;
						public dismiss(param0: globalAndroid.view.View): void;
						public onBackPressed(): void;
						public _$_clearFindViewByIdCache(): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public onDestroy(): void;
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onPurchaseHistoryRestored(): void;
						public onProductPurchased(param0: string, param1: com.anjlab.android.iab.v3.TransactionDetails): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class ScriptListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.ScriptListViewHolder> {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.ScriptListAdapter>;
						public static k: java.util.ArrayList<string>;
						public static l: java.util.ArrayList<string>;
						public c: globalAndroid.app.Activity;
						public d: java.util.ArrayList<string>;
						public e: any;
						public f: androidx.recyclerview.widget.RecyclerView;
						public g: java.util.ArrayList<string>;
						public h: globalAndroid.graphics.drawable.Drawable;
						public i: globalAndroid.content.res.ColorStateList;
						public j: globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.app.Activity);
						public static "<clinit>"(): void;
						public putOn(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean): void;
						public getItemViewType(param0: number): number;
						public set(param0: any, param1: any): any;
						public remove(param0: string): void;
						public addWithoutNotify(param0: string): void;
						public a(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
						public getItems(): java.util.ArrayList<string>;
						public getSortType(): java.util.ArrayList<string>;
						public sortItems(param0: string): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.ScriptListViewHolder;
						public onBindViewHolder(param0: com.xfl.msgbot.application.activity.ScriptListViewHolder, param1: number): void;
						public getItemCount(): number;
						public getItemId(param0: number): number;
						public onAttachedToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
						public clear(): void;
						public updateCompileState(param0: string, param1: boolean, param2: boolean): void;
					}
					export module ScriptListAdapter {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.ScriptListAdapter.Companion>;
							public constructor();
							public getCompilingList(): java.util.ArrayList<string>;
							public constructor(param0: any);
							public getSwitchOnList(): java.util.ArrayList<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class ScriptListViewHolder {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.ScriptListViewHolder>;
						public A: globalAndroid.widget.ImageButton;
						public B: globalAndroid.widget.ImageButton;
						public C: globalAndroid.widget.ImageButton;
						public D: globalAndroid.widget.ImageButton;
						public E: globalAndroid.widget.ImageButton;
						public F: globalAndroid.widget.TextView;
						public G: globalAndroid.widget.LinearLayout;
						public H: androidx.cardview.widget.CardView;
						public I: boolean;
						public J: number;
						public K: number;
						public L: number;
						public s: string;
						public v: globalAndroid.widget.ProgressBar;
						public w: androidx.appcompat.widget.SwitchCompat;
						public x: com.xfl.msgbot.utils.view.CheckBoxWithoutText;
						public y: globalAndroid.widget.ImageButton;
						public z: globalAndroid.widget.ImageButton;
						public getCompileProgressbar(): globalAndroid.widget.ProgressBar;
						public u(param0: globalAndroid.widget.ImageButton, param1: boolean): void;
						public setBtnCompile(param0: globalAndroid.widget.ImageButton): void;
						public setCompileProgressbar(param0: globalAndroid.widget.ProgressBar): void;
						public setTxtScriptName(param0: globalAndroid.widget.TextView): void;
						public setSwitchBotPower(param0: androidx.appcompat.widget.SwitchCompat): void;
						public setUncompiledDot(param0: globalAndroid.widget.ImageView): void;
						public setValue(param0: string): string;
						public getUncompiledDot(): globalAndroid.widget.ImageView;
						public getBtnSort(): com.xfl.msgbot.utils.view.CheckBoxWithoutText;
						public t(): void;
						public getBtnCompile(): globalAndroid.widget.ImageButton;
						public constructor(param0: globalAndroid.view.View, param1: string);
						public getTxtScriptName(): globalAndroid.widget.TextView;
						public getSwitchBotPower(): androidx.appcompat.widget.SwitchCompat;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class SplashActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.SplashActivity>;
						public i: boolean;
						public j: boolean;
						public constructor();
						public static "<clinit>"(): void;
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
						public c(): void;
						public onResume(): void;
						public _$_clearFindViewByIdCache(): void;
						public d(): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public a(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public b(): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					}
					export module SplashActivity {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.SplashActivity.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class TestActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.TestActivity>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class TestActivity2 {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.TestActivity2>;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export class UncaughtExceptionActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.activity.UncaughtExceptionActivity>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class DebugRoomActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomActivity>;
							public static REQUEST_CODE_SETTINGS: number;
							public i: java.io.File;
							public j: string;
							public k: com.xfl.msgbot.script.ScriptSettings;
							public l: com.xfl.msgbot.application.activity.debugroom.DebugRoomAdapter;
							public m: string;
							public n: com.xfl.msgbot.application.activity.debugroom.DebugRoomActivity.broadcastReceiver[1];
							public recyclerView: androidx.recyclerview.widget.RecyclerView;
							public constructor();
							public postUpdate(param0: string, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: boolean): void;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onDestroy(): void;
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public constructor(param0: number);
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public scrollToBottom(): void;
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public setRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public afterTextChanged(param0: globalAndroid.text.Editable): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public getRecyclerView(): androidx.recyclerview.widget.RecyclerView;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public static "<clinit>"(): void;
						}
						export module DebugRoomActivity {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomActivity.Companion>;
								public appendReply(param0: string, param1: string, param2: string, param3: string, param4: boolean): void;
								public constructor(param0: any);
								public constructor();
								public static access$saveChat(param0: com.xfl.msgbot.application.activity.debugroom.DebugRoomActivity.Companion, param1: string, param2: string, param3: string, param4: boolean, param5: number): org.json.JSONObject;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class DebugRoomAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomAdapter>;
							public c: string;
							public d: java.util.ArrayList<com.xfl.msgbot.application.activity.debugroom.UserMessage>;
							public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
							public getItemViewType(param0: number): number;
							public constructor(param0: string);
							public getItemCount(): number;
							public clear(): void;
							public addWithoutNotifying(param0: boolean, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
							public static "<clinit>"(): void;
							public add(param0: boolean, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
						}
						export module DebugRoomAdapter {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomAdapter.Companion>;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class DebugRoomSettings extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomSettings>;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class DebugRoomSettingsFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomSettingsFragment>;
							public j: string;
							public k: java.io.File;
							public l: androidx.preference.Preference;
							public m: androidx.preference.Preference;
							public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
							public constructor(param0: string);
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public _$_clearFindViewByIdCache(): void;
							public static "<clinit>"(): void;
						}
						export module DebugRoomSettingsFragment {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.DebugRoomSettingsFragment.Companion>;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class MeViewHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.MeViewHolder>;
							public s: string;
							public t: com.xfl.msgbot.databinding.ItemChatMeBinding;
							public u: string;
							public v: com.xfl.msgbot.application.activity.debugroom.UserMessage;
							public w: any;
							public constructor(param0: string, param1: com.xfl.msgbot.databinding.ItemChatMeBinding);
							public onLongClick(param0: globalAndroid.view.View): boolean;
							public onClick(param0: globalAndroid.view.View): void;
							public static access$fixTextView(param0: com.xfl.msgbot.application.activity.debugroom.MeViewHolder, param1: globalAndroid.widget.TextView, param2: com.xfl.msgbot.utils.DefensiveURLSpan.OnClickListener): void;
							public onBind(param0: com.xfl.msgbot.application.activity.debugroom.UserMessage): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class OpponentViewHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder>;
							public s: string;
							public t: com.xfl.msgbot.databinding.ItemChatOpponentBinding;
							public u: string;
							public v: com.xfl.msgbot.application.activity.debugroom.UserMessage;
							public w: any;
							public onLongClick(param0: globalAndroid.view.View): boolean;
							public onClick(param0: globalAndroid.view.View): void;
							public constructor(param0: string, param1: com.xfl.msgbot.databinding.ItemChatOpponentBinding);
							public static access$fixTextView(param0: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder, param1: globalAndroid.widget.TextView, param2: com.xfl.msgbot.utils.DefensiveURLSpan.OnClickListener): void;
							public onBind(param0: com.xfl.msgbot.application.activity.debugroom.UserMessage): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class ShowMoreActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.ShowMoreActivity>;
							public i: string;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public onBackPressed(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module debugroom {
						export class UserMessage {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.debugroom.UserMessage>;
							public a: string;
							public b: string;
							public c: string;
							public d: string;
							public e: boolean;
							public f: boolean;
							public g: number;
							public getCreatedAt$app_release(): number;
							public setRoom$app_release(param0: string): void;
							public setBot$app_release(param0: boolean): void;
							public setSender$app_release(param0: string): void;
							public getFullPath(): string;
							public constructor(param0: boolean, param1: string, param2: string, param3: string, param4: string, param5: boolean);
							public getRoom(): string;
							public isBot(): boolean;
							public setCreatedAt$app_release(param0: number): void;
							public setLong$app_release(param0: boolean): void;
							public getSender(): string;
							public setMessage$app_release(param0: string): void;
							public setFullPath$app_release(param0: string): void;
							public isLong(): boolean;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ActionModeCallback {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ActionModeCallback>;
							public constructor();
							public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
							public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
							public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
							public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class AutoCompleteAdapter extends globalAndroid.widget.ArrayAdapter<com.xfl.msgbot.application.activity.editor.AutoCompleteRow> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.AutoCompleteAdapter>;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: java.util.ArrayList<com.xfl.msgbot.application.activity.editor.AutoCompleteRow>);
							public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class AutoCompleteRow {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.AutoCompleteRow>;
							public a: string;
							public b: globalAndroid.graphics.Bitmap;
							public component2(): globalAndroid.graphics.Bitmap;
							public copy(param0: string, param1: globalAndroid.graphics.Bitmap): com.xfl.msgbot.application.activity.editor.AutoCompleteRow;
							public hashCode(): number;
							public constructor(param0: string, param1: globalAndroid.graphics.Bitmap);
							public getName(): string;
							public getImage(): globalAndroid.graphics.Bitmap;
							public setImage(param0: globalAndroid.graphics.Bitmap): void;
							public setName(param0: string): void;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class CodeEditorView {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.CodeEditorView>;
							public d: java.lang.Boolean;
							public e: globalAndroid.widget.HorizontalScrollView;
							public f: globalAndroid.graphics.Paint;
							public g: globalAndroid.graphics.Rect;
							public h: com.xfl.msgbot.application.activity.editor.CodeEditorView.OnSelectionChangedListener;
							public i: com.xfl.msgbot.application.activity.editor.LineNumberView;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
							public getWrapText(): java.lang.Boolean;
							public getFirstVisibleLine(param0: androidx.core.widget.NestedScrollView): number;
							public onSelectionChanged(param0: number, param1: number): void;
							public getHScrollView(): globalAndroid.widget.HorizontalScrollView;
							public setWrapText(param0: java.lang.Boolean): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public redo(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setHorizontalScrollView(param0: globalAndroid.widget.HorizontalScrollView): void;
							public undo(): void;
							public setLineColor(param0: number): void;
							public setOnSelectionChangedListener(param0: com.xfl.msgbot.application.activity.editor.CodeEditorView.OnSelectionChangedListener): void;
							public getLastVisibleLine(param0: androidx.core.widget.NestedScrollView): number;
							public setHScrollView(param0: globalAndroid.widget.HorizontalScrollView): void;
							public getILine(): com.xfl.msgbot.application.activity.editor.LineNumberView;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public _$_clearFindViewByIdCache(): void;
							public paste(): void;
							public setOnSelectionChangedListener(param0: any): void;
							public setWordWrap(param0: java.lang.Boolean): void;
							public gotoLine(param0: number): void;
							public setILine(param0: com.xfl.msgbot.application.activity.editor.LineNumberView): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module CodeEditorView {
							export class OnSelectionChangedListener {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.CodeEditorView.OnSelectionChangedListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.application.activity.editor.CodeEditorView$OnSelectionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSelectionChanged(param0: number, param1: number): void;
								});
								public constructor();
								public onSelectionChanged(param0: number, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ColorTheme {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ColorTheme>;
							public static DARCULA: com.xfl.msgbot.application.activity.editor.ColorTheme;
							public static MONOKAI: com.xfl.msgbot.application.activity.editor.ColorTheme;
							public static SOLARIZED_LIGHT: com.xfl.msgbot.application.activity.editor.ColorTheme;
							public getBgContent(): number;
							public getNoteColor(): number;
							public constructor(param0: com.xfl.msgbot.application.activity.editor.SyntaxColors, param1: number, param2: number, param3: number, param4: number);
							public getBgNum(): number;
							public static values(): androidNative.Array<com.xfl.msgbot.application.activity.editor.ColorTheme>;
							public static valueOf(param0: string): com.xfl.msgbot.application.activity.editor.ColorTheme;
							public getNumColor(): number;
							public getSyntaxColors(): com.xfl.msgbot.application.activity.editor.SyntaxColors;
							public static "<clinit>"(): void;
							public constructor(param0: string, param1: number, param2: com.xfl.msgbot.application.activity.editor.SyntaxColors, param3: number, param4: number, param5: number, param6: number, param7: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class CustomTabWidthSpan {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.CustomTabWidthSpan>;
							public a: number;
							public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
							public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ErrorListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.editor.ErrorListViewHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ErrorListAdapter>;
							public c: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity;
							public d: number;
							public e: java.util.ArrayList<org.mozilla.javascript.ast.ParseProblem>;
							public f: string;
							public onBindViewHolder(param0: com.xfl.msgbot.application.activity.editor.ErrorListViewHolder, param1: number): void;
							public updateItems(param0: java.util.Collection<any>, param1: string): void;
							public getItemCount(): number;
							public clear(): void;
							public setItems(param0: java.util.ArrayList<org.mozilla.javascript.ast.ParseProblem>): void;
							public updateItems(param0: androidNative.Array<org.mozilla.javascript.ast.ParseProblem>, param1: string): void;
							public getItems(): java.util.ArrayList<org.mozilla.javascript.ast.ParseProblem>;
							public constructor(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: number);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.editor.ErrorListViewHolder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ErrorListViewHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ErrorListViewHolder>;
							public s: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity;
							public u: globalAndroid.widget.TextView;
							public v: globalAndroid.widget.TextView;
							public getLine(): globalAndroid.widget.TextView;
							public constructor(param0: globalAndroid.view.View, param1: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param2: number);
							public onBind(param0: org.mozilla.javascript.ast.ParseProblem, param1: string): void;
							public getContent(): globalAndroid.widget.TextView;
							public getIcon(): globalAndroid.widget.ImageView;
							public t(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
						}
						export module ErrorListViewHolder {
							export class WhenMappings {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ErrorListViewHolder.WhenMappings>;
								public static "<clinit>"(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ErrorPopup {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ErrorPopup>;
							public a: globalAndroid.content.Context;
							public b: globalAndroid.widget.EditText;
							public c: java.util.HashMap<string,java.util.HashSet<string>>;
							public d: globalAndroid.widget.PopupWindow;
							public e: globalAndroid.view.View;
							public f: globalAndroid.os.Handler;
							public g: java.lang.Runnable;
							public h: java.util.Timer;
							public getMessageMap(): java.util.HashMap<string,java.util.HashSet<string>>;
							public setMessageAt(param0: number, param1: number, param2: string): void;
							public isShowing(): boolean;
							public getBaseEditText(): globalAndroid.widget.EditText;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.widget.EditText);
							public clearMessage(): void;
							public getCtx(): globalAndroid.content.Context;
							public show(param0: number, param1: number, param2: globalAndroid.view.View): void;
							public dismiss(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class LineNumberView {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.LineNumberView>;
							public a: com.xfl.msgbot.application.activity.editor.CodeEditorView;
							public b: number;
							public c: globalAndroid.graphics.Rect;
							public d: globalAndroid.graphics.Rect;
							public e: globalAndroid.graphics.Rect;
							public f: globalAndroid.text.TextPaint;
							public g: globalAndroid.graphics.Paint;
							public h: globalAndroid.graphics.Paint;
							public i: globalAndroid.graphics.Paint;
							public j: number;
							public k: globalAndroid.graphics.Typeface;
							public l: number;
							public m: number;
							public n: globalAndroid.graphics.Rect;
							public o: globalAndroid.graphics.Rect;
							public p: globalAndroid.graphics.Paint;
							public q: com.xfl.msgbot.utils.view.VerticalScrollView;
							public setBlockRange(param0: number, param1: number): void;
							public removeBlockRange(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setTypeface(param0: globalAndroid.graphics.Typeface): void;
							public getEditText(): com.xfl.msgbot.application.activity.editor.CodeEditorView;
							public getVScroll(): com.xfl.msgbot.utils.view.VerticalScrollView;
							public setEditText(param0: com.xfl.msgbot.application.activity.editor.CodeEditorView): void;
							public setVScroll(param0: com.xfl.msgbot.utils.view.VerticalScrollView): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public _$_clearFindViewByIdCache(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ParenthesisSpan {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ParenthesisSpan>;
							public a: globalAndroid.graphics.Paint;
							public b: number;
							public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
							public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptEditBottomItemAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.editor.ScriptEditBottomItemHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptEditBottomItemAdapter>;
							public c: globalAndroid.widget.EditText;
							public d: java.lang.Boolean;
							public e: androidNative.Array<string>;
							public getItems(): androidNative.Array<string>;
							public constructor(param0: globalAndroid.widget.EditText, param1: java.lang.Boolean, param2: number);
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.editor.ScriptEditBottomItemHolder;
							public getItemCount(): number;
							public setItems(param0: androidNative.Array<string>): void;
							public onBindViewHolder(param0: com.xfl.msgbot.application.activity.editor.ScriptEditBottomItemHolder, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptEditBottomItemHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptEditBottomItemHolder>;
							public s: globalAndroid.widget.TextView;
							public t: globalAndroid.widget.ImageView;
							public u: globalAndroid.widget.FrameLayout;
							public getButton(): globalAndroid.widget.FrameLayout;
							public constructor(param0: globalAndroid.view.View);
							public getText(): globalAndroid.widget.TextView;
							public getIcon(): globalAndroid.widget.ImageView;
							public setIcon(param0: globalAndroid.widget.ImageView): void;
							public setButton(param0: globalAndroid.widget.FrameLayout): void;
							public setText(param0: globalAndroid.widget.TextView): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptEditorActivity extends com.xfl.msgbot.utils.AppScopeActivity implements com.xfl.msgbot.application.CompileActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptEditorActivity>;
							public A: java.io.File;
							public B: string;
							public C: java.util.List<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public D: androidNative.Array<org.mozilla.javascript.ast.ParseProblem>;
							public E: java.util.List<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public F: boolean;
							public G: boolean;
							public H: boolean;
							public I: boolean;
							public J: androidNative.Array<string>;
							public K: boolean;
							public L: globalAndroid.widget.ArrayAdapter<string>;
							public M: number;
							public N: boolean;
							public O: number;
							public P: java.util.Timer;
							public Q: java.util.Timer;
							public R: boolean;
							public S: boolean;
							public T: boolean;
							public U: com.xfl.msgbot.application.activity.editor.ErrorPopup;
							public V: java.util.Timer;
							public W: com.xfl.msgbot.application.AdManager;
							public X: boolean;
							public Y: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity.textWatcher[1];
							public Z: com.google.android.gms.ads.AdView;
							public a0: java.util.concurrent.Future<any>;
							public b0: com.xfl.msgbot.utils.misc.AsyncTaskKt<string,java.lang.Integer,string>;
							public c0: androidx.appcompat.app.AlertDialog;
							public m: com.xfl.msgbot.application.activity.editor.CodeEditorView;
							public n: string;
							public o: com.anjlab.android.iab.v3.BillingProcessor;
							public p: any;
							public q: com.xfl.msgbot.utils.misc.BadgeDrawerArrowDrawable;
							public r: any;
							public s: com.xfl.msgbot.application.activity.editor.TextSearcher.SearchOption;
							public t: boolean;
							public u: string;
							public v: string;
							public w: boolean;
							public x: com.xfl.msgbot.application.activity.editor.TextSearcher;
							public y: boolean;
							public z: boolean;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public static a(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: globalAndroid.content.DialogInterface, param2: number): void;
							public isQuotClosed(param0: string, param1: number, param2: boolean): boolean;
							public popupSnackbar(param0: string): void;
							public onDestroy(): void;
							public g(param0: number): boolean;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public reloadFromStorage(): void;
							public static b(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: globalAndroid.content.DialogInterface, param2: number): void;
							public static access$autoBackup(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity): void;
							public onResume(): void;
							public h(): org.mozilla.javascript.ast.AstNode;
							public onPurchaseHistoryRestored(): void;
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public moveCursor(param0: number): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public onBillingError(param0: number, param1: java.lang.Throwable): void;
							public onBackPressed(): void;
							public static j(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: com.google.android.material.textfield.TextInputEditText, param2: com.google.android.material.textfield.TextInputEditText, param3: globalAndroid.widget.CheckBox, param4: globalAndroid.widget.CheckBox, param5: globalAndroid.widget.CheckBox): void;
							public d(): com.xfl.msgbot.application.activity.editor.ErrorListAdapter;
							public constructor();
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public static c(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: boolean, param2: number): void;
							public onStop(): void;
							public constructor(param0: number);
							public static access$highlightParenthesis(param0: com.xfl.msgbot.application.activity.editor.ScriptEditorActivity, param1: number): void;
							public onBillingInitialized(): void;
							public l(): void;
							public e(param0: com.xfl.msgbot.application.activity.editor.ScriptToken): number;
							public f(): void;
							public _$_clearFindViewByIdCache(): void;
							public onProductPurchased(param0: string, param1: com.anjlab.android.iab.v3.TransactionDetails): void;
							public k(param0: string, param1: boolean, param2: boolean): void;
							public i(): void;
						}
						export module ScriptEditorActivity {
							export class WhenMappings {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptEditorActivity.WhenMappings>;
								public static "<clinit>"(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptToken {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public a: number;
							public b: number;
							public c: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
							public constructor();
							public constructor(param0: number, param1: number, param2: com.xfl.msgbot.application.activity.editor.ScriptToken.Type);
							public getStart(): number;
							public getEnd(): number;
							public setEnd(param0: number): void;
							public setType(param0: com.xfl.msgbot.application.activity.editor.ScriptToken.Type): void;
							public getType(): com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
							public setStart(param0: number): void;
						}
						export module ScriptToken {
							export class Type {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptToken.Type>;
								public static COMMENT: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static DOC: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static FUNCTION_NAME: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static KEYWORD: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static NAME: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static NUMBER: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static OBJECT_NAME: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static PARAMETER: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static REGEXP: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static STRING: com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public static "<clinit>"(): void;
								public static values(): androidNative.Array<com.xfl.msgbot.application.activity.editor.ScriptToken.Type>;
								public static valueOf(param0: string): com.xfl.msgbot.application.activity.editor.ScriptToken.Type;
								public constructor(param0: string, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptTokenizer {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptTokenizer>;
							public static a: java.util.ArrayList<java.lang.Character>;
							public constructor();
							public findTokenStart(param0: string, param1: number): number;
							public findTokenEnd(param0: string, param1: number): number;
							public terminateToken(param0: string): string;
							public static "<clinit>"(): void;
						}
						export module ScriptTokenizer {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptTokenizer.Companion>;
								public constructor(param0: any);
								public getSeparator(): java.util.ArrayList<java.lang.Character>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class ScriptVisitor {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.ScriptVisitor>;
							public a: boolean;
							public b: boolean;
							public c: androidNative.Array<string>;
							public d: java.util.ArrayList<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public e: java.util.List<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public f: org.mozilla.javascript.ast.AstNode;
							public getFoundIdentifiers(): androidNative.Array<string>;
							public getFoundNoneCodes(): java.util.List<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public setFoundIdentifiers(param0: androidNative.Array<string>): void;
							public setFoundNoneCodes(param0: java.util.List<com.xfl.msgbot.application.activity.editor.ScriptToken>): void;
							public setRootNode(param0: org.mozilla.javascript.ast.AstNode): void;
							public constructor(param0: boolean, param1: boolean);
							public getFoundTokens(): java.util.ArrayList<com.xfl.msgbot.application.activity.editor.ScriptToken>;
							public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
							public getRootNode(): org.mozilla.javascript.ast.AstNode;
							public setFoundTokens(param0: java.util.ArrayList<com.xfl.msgbot.application.activity.editor.ScriptToken>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class SyntaxColors {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.SyntaxColors>;
							public a: number;
							public b: number;
							public c: number;
							public d: number;
							public e: number;
							public f: number;
							public g: number;
							public h: number;
							public i: number;
							public j: number;
							public k: number;
							public l: number;
							public m: number;
							public n: number;
							public o: number;
							public getType(): number;
							public hashCode(): number;
							public component2(): number;
							public getAttrName(): number;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number);
							public component11(): number;
							public component5(): number;
							public component14(): number;
							public component9(): number;
							public toString(): string;
							public getPunctuation(): number;
							public getTag(): number;
							public getParameter(): number;
							public component10(): number;
							public getLiteral(): number;
							public getDeclaration(): number;
							public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): com.xfl.msgbot.application.activity.editor.SyntaxColors;
							public getString(): number;
							public component6(): number;
							public getPlain(): number;
							public component3(): number;
							public constructor();
							public getKeyword(): number;
							public getRegex(): number;
							public component13(): number;
							public component7(): number;
							public getDoc(): number;
							public getComment(): number;
							public getFunction(): number;
							public getAttrValue(): number;
							public component1(): number;
							public component8(): number;
							public component4(): number;
							public component12(): number;
							public component15(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export class TextSearcher {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.TextSearcher>;
							public a: globalAndroid.widget.EditText;
							public b: number;
							public c: com.xfl.msgbot.application.activity.editor.TextSearcher.SearchOption;
							public d: string;
							public e: string;
							public f: number;
							public g: java.util.List<java.util.Map.Entry<java.lang.Integer,any>>;
							public h: number;
							public i: number;
							public constructor(param0: globalAndroid.widget.EditText);
							public next(): void;
							public startSearch(param0: string, param1: string, param2: com.xfl.msgbot.application.activity.editor.TextSearcher.SearchOption): void;
							public setRight(param0: number): void;
							public getLeft(): number;
							public getRight(): number;
							public replaceCurrent(): void;
							public prev(): void;
							public setLeft(param0: number): void;
						}
						export module TextSearcher {
							export class SearchOption {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.TextSearcher.SearchOption>;
								public a: boolean;
								public b: boolean;
								public c: boolean;
								public setUseRegex(param0: boolean): void;
								public getUseRegex(): boolean;
								public setCaseSensitive(param0: boolean): void;
								public constructor();
								public getCaseSensitive(): boolean;
								public getSearchFromStart(): boolean;
								public setSearchFromStart(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export module auto {
							export class ScriptEditBottomAutoAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.editor.auto.ScriptEditBottomAutoHolder> {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.auto.ScriptEditBottomAutoAdapter>;
								public c: java.lang.Boolean;
								public d: java.util.ArrayList<string>;
								public e: java.util.ArrayList<string>;
								public setItems(param0: java.util.ArrayList<string>): void;
								public getItems(): java.util.ArrayList<string>;
								public filter(param0: string, param1: any): void;
								public getItemCount(): number;
								public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.editor.auto.ScriptEditBottomAutoHolder;
								public constructor(param0: java.lang.Boolean, param1: java.lang.Iterable<string>);
								public onBindViewHolder(param0: com.xfl.msgbot.application.activity.editor.auto.ScriptEditBottomAutoHolder, param1: number): void;
								public updateItem(param0: java.lang.Iterable<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module editor {
						export module auto {
							export class ScriptEditBottomAutoHolder {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.editor.auto.ScriptEditBottomAutoHolder>;
								public s: globalAndroid.widget.TextView;
								public setText(param0: globalAndroid.widget.TextView): void;
								public getText(): globalAndroid.widget.TextView;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module lockscreen {
						export class LockActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.lockscreen.LockActivity>;
							public i: globalAndroid.view.View;
							public j: number;
							public k: string;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public a(param0: string): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module logger {
						export class LogItem {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LogItem>;
							public a: string;
							public b: number;
							public c: string;
							public constructor(param0: string, param1: number, param2: string);
							public getContent(): string;
							public getTimeString(): string;
							public getCategory(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module logger {
						export class LoggerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.logger.LoggerViewHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerAdapter>;
							public c: globalAndroid.content.Context;
							public d: java.util.ArrayList<com.xfl.msgbot.application.activity.logger.LogItem>;
							public add(param0: string, param1: number, param2: string): void;
							public getContext(): globalAndroid.content.Context;
							public onBindViewHolder(param0: com.xfl.msgbot.application.activity.logger.LoggerViewHolder, param1: number): void;
							public getItemCount(): number;
							public clear(): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.logger.LoggerViewHolder;
							public load(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module logger {
						export class LoggerCompat {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerCompat>;
							public static DEBUG: number;
							public static ERROR: number;
							public static INFO: number;
							public static INSTANCE: com.xfl.msgbot.application.activity.logger.LoggerCompat;
							public static a: java.util.ArrayList<com.xfl.msgbot.application.activity.logger.LogItem>;
							public static b: java.util.HashMap<string,java.util.ArrayList<com.xfl.msgbot.application.activity.logger.LogItem>>;
							public static c: java.util.concurrent.ExecutorService;
							public static d: java.util.HashMap<string,java.util.concurrent.ExecutorService>;
							public constructor();
							public appendGlobal(param0: string, param1: number, param2: boolean): void;
							public clear(param0: string): void;
							public clearGlobal(): void;
							public load(param0: string): java.util.ArrayList<com.xfl.msgbot.application.activity.logger.LogItem>;
							public save(param0: java.util.ArrayList<com.xfl.msgbot.application.activity.logger.LogItem>, param1: string): void;
							public invalidateCache(): void;
							public append(param0: string, param1: string, param2: number, param3: boolean): void;
							public static "<clinit>"(): void;
						}
						export module LoggerCompat {
							export class Category {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerCompat.Category>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.application.activity.logger.LoggerCompat$Category interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module logger {
						export class LoggerScreen extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerScreen>;
							public static p: java.util.HashMap<string,java.lang.Integer>;
							public i: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView;
							public j: com.xfl.msgbot.application.activity.logger.LoggerAdapter;
							public k: androidx.recyclerview.widget.LinearLayoutManager;
							public l: boolean;
							public m: java.io.File;
							public n: string;
							public o: com.xfl.msgbot.application.activity.logger.LoggerScreen.receiver[1];
							public constructor();
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onStop(): void;
							public onDestroy(): void;
							public constructor(param0: number);
							public showFab(): void;
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public static "<clinit>"(): void;
						}
						export module LoggerScreen {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerScreen.Companion>;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module logger {
						export class LoggerViewHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.logger.LoggerViewHolder>;
							public s: globalAndroid.widget.TextView;
							public t: globalAndroid.widget.TextView;
							public u: globalAndroid.widget.ImageView;
							public onBind(param0: globalAndroid.text.SpannableString, param1: globalAndroid.text.SpannableString): void;
							public setLog_time(param0: globalAndroid.widget.TextView): void;
							public getLog_content(): globalAndroid.widget.TextView;
							public constructor(param0: globalAndroid.view.View);
							public setLog_icon(param0: globalAndroid.widget.ImageView): void;
							public getLog_time(): globalAndroid.widget.TextView;
							public getLog_icon(): globalAndroid.widget.ImageView;
							public setLog_content(param0: globalAndroid.widget.TextView): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module sandbox {
						export class ItemAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.application.activity.sandbox.ItemHolder> {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.sandbox.ItemAdapter>;
							public c: number;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.xfl.msgbot.application.activity.sandbox.ItemHolder, param1: number): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.application.activity.sandbox.ItemHolder;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module sandbox {
						export class ItemHolder {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.sandbox.ItemHolder>;
							public s: globalAndroid.widget.TextView;
							public getText(): string;
							public constructor(param0: globalAndroid.view.View);
							public setText(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module sandbox {
						export class Page {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.sandbox.Page>;
							public constructor(param0: com.xfl.msgbot.script.ScriptContainer);
							public onStop(): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public onResume(): void;
							public onAttach(param0: globalAndroid.content.Context): void;
							public onDestroyView(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onDetach(): void;
							public _$_clearFindViewByIdCache(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module sandbox {
						export class SandBoxActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.sandbox.SandBoxActivity>;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module sandbox {
						export class SandBoxAdapter {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.sandbox.SandBoxAdapter>;
							public k: java.util.HashMap<string,com.xfl.msgbot.script.ScriptContainer>;
							public l: androidNative.Array<string>;
							public createFragment(param0: number): androidx.fragment.app.Fragment;
							public getList(): java.util.HashMap<string,com.xfl.msgbot.script.ScriptContainer>;
							public getItemCount(): number;
							public constructor(param0: androidx.fragment.app.FragmentManager, param1: androidx.lifecycle.Lifecycle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class CustomPackageSettingsFragment extends com.xfl.msgbot.utils.AppScopePreferenceFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.CustomPackageSettingsFragment>;
							public n: java.util.ArrayList<com.xfl.msgbot.utils.misc.PackageInfo>;
							public o: com.xfl.msgbot.utils.PackageItem;
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public _$_clearFindViewByIdCache(): void;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public b(param0: globalAndroid.app.Activity, param1: any): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
							public onResume(): void;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class DeveloperModeSettingsFragment extends com.xfl.msgbot.utils.AppScopePreferenceFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.DeveloperModeSettingsFragment>;
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public _$_clearFindViewByIdCache(): void;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class LicenseActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.LicenseActivity>;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class PublicSettings extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.PublicSettings>;
							public i: com.xfl.msgbot.application.activity.settings.PublicSettingsFragment;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public a(param0: androidx.fragment.app.FragmentManager, param1: any): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public onBackPressed(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class PublicSettingsFragment extends com.xfl.msgbot.utils.AppScopePreferenceFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.PublicSettingsFragment>;
							public n: boolean;
							public o: com.anjlab.android.iab.v3.BillingProcessor;
							public p: com.google.android.gms.ads.rewarded.RewardedAd;
							public q: number;
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public b(param0: globalAndroid.app.Activity, param1: net.margaritov.preference.colorpicker.ColorPickerPreference, param2: java.lang.Boolean): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onDestroy(): void;
							public onResume(): void;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
							public onPurchaseHistoryRestored(): void;
							public onBillingInitialized(): void;
							public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
							public getUpdate(): boolean;
							public c(param0: globalAndroid.content.Context): void;
							public _$_clearFindViewByIdCache(): void;
							public onBillingError(param0: number, param1: java.lang.Throwable): void;
							public onProductPurchased(param0: string, param1: com.anjlab.android.iab.v3.TransactionDetails): void;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
							public onDisplayPreferenceDialog(param0: androidx.preference.Preference): void;
							public setUpdate(param0: boolean): void;
						}
						export module PublicSettingsFragment {
							export class AdSettingsFragment {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.PublicSettingsFragment.AdSettingsFragment>;
								public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
								public _$_clearFindViewByIdCache(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class ScriptSettingsActivity extends com.xfl.msgbot.utils.AppScopeActivity {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.ScriptSettingsActivity>;
							public i: androidx.fragment.app.Fragment;
							public constructor();
							public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onThemeChanged(param0: string, param1: java.lang.Integer): void;
							public _$_clearFindViewByIdCache(): void;
							public a(param0: androidx.fragment.app.FragmentManager, param1: any): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public onBackPressed(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class ScriptSettingsFragment extends com.xfl.msgbot.utils.AppScopePreferenceFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.ScriptSettingsFragment>;
							public n: string;
							public o: com.xfl.msgbot.script.ScriptSettings;
							public p: java.util.Timer;
							public q: any;
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
							public onDestroy(): void;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
							public onCreatePreferences(param0: globalAndroid.os.Bundle, param1: string): void;
							public constructor(param0: string);
							public onPause(): void;
							public shutdownThreads(param0: any): void;
							public _$_clearFindViewByIdCache(): void;
							public b(): globalAndroid.content.SharedPreferences;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class SettingsFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.SettingsFragment>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.application.activity.settings.SettingsFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
								getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
								getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
								getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							});
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
						}
						export module SettingsFragment {
							export class DefaultImpls {
								public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.SettingsFragment.DefaultImpls>;
								public static getDrawableTint(param0: com.xfl.msgbot.application.activity.settings.SettingsFragment, param1: globalAndroid.content.Context, param2: number, param3: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
								public static getDrawableTint(param0: com.xfl.msgbot.application.activity.settings.SettingsFragment, param1: androidx.preference.Preference, param2: number, param3: java.lang.Integer): void;
								public static applyDrawableTint(param0: com.xfl.msgbot.application.activity.settings.SettingsFragment, param1: androidx.preference.PreferenceFragmentCompat, param2: string, param3: number, param4: java.lang.Integer): void;
								public static getColor(param0: com.xfl.msgbot.application.activity.settings.SettingsFragment, param1: globalAndroid.content.Context, param2: number, param3: java.lang.Boolean): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module activity {
					export module settings {
						export class SocketConnectionSettingsFragment implements com.xfl.msgbot.application.activity.settings.SettingsFragment {
							public static class: java.lang.Class<com.xfl.msgbot.application.activity.settings.SocketConnectionSettingsFragment>;
							public constructor();
							public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public _$_clearFindViewByIdCache(): void;
							public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
							public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
							public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module service {
					export class MsgBotQuick extends com.xfl.msgbot.utils.AppScopeTileService {
						public static class: java.lang.Class<com.xfl.msgbot.application.service.MsgBotQuick>;
						public e: any;
						public constructor();
						public onTileRemoved(): void;
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public c(): void;
						public onTileAdded(): void;
						public onClick(): void;
						public a(): boolean;
						public onStartListening(): void;
						public b(param0: boolean): void;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module service {
					export class NotificationListener {
						public static class: java.lang.Class<com.xfl.msgbot.application.service.NotificationListener>;
						public static NOTIFICATION_ID: number;
						public static NOTIFICATION_PENDING_INTENT: number;
						public static d: java.util.HashMap<string,java.util.HashMap<string,globalAndroid.app.Notification.Action>>;
						public static e: java.util.HashMap<string,globalAndroid.app.Notification.Action>;
						public static f: java.util.HashMap<string,java.util.HashMap<string,globalAndroid.app.Notification.Action>>;
						public b: com.xfl.msgbot.application.service.NotificationListener.receiver[1];
						public c: globalAndroid.app.Notification;
						public onNotificationPosted(param0: globalAndroid.service.notification.StatusBarNotification): void;
						public constructor();
						public static "<clinit>"(): void;
						public static access$updateNotification(param0: com.xfl.msgbot.application.service.NotificationListener, param1: string): void;
						public onCreate(): void;
						public a(param0: string): globalAndroid.app.Notification;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					}
					export module NotificationListener {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.application.service.NotificationListener.Companion>;
							public constructor();
							public getSessionByRoom(param0: string): globalAndroid.app.Notification.Action;
							public getMarkAsReadInAllPackages(param0: string): java.util.HashMap<string,globalAndroid.app.Notification.Action>;
							public getMarkAsRead(param0: string, param1: string): globalAndroid.app.Notification.Action;
							public getRooms(param0: string): java.util.List<string>;
							public hasSessionAnyPackage(param0: string): boolean;
							public resetSession(): void;
							public setMarkAsRead(param0: string, param1: string, param2: globalAndroid.app.Notification.Action): void;
							public updateNotification(param0: globalAndroid.content.Context, param1: java.util.List<string>): void;
							public setSession(param0: string, param1: string, param2: globalAndroid.app.Notification.Action): void;
							public constructor(param0: any);
							public hasSession(param0: string, param1: string): boolean;
							public getSession(param0: string, param1: string): globalAndroid.app.Notification.Action;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module service {
					export class TaskKilledCheck extends com.xfl.msgbot.utils.AppScopeService {
						public static class: java.lang.Class<com.xfl.msgbot.application.service.TaskKilledCheck>;
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onCreate(): void;
						public onTaskRemoved(param0: globalAndroid.content.Intent): void;
						public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module shortcut {
					export class Reload extends com.xfl.msgbot.application.shortcut.ShortcutActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.Reload>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module shortcut {
					export abstract class ShortcutActivity extends com.xfl.msgbot.utils.AppScopeActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.ShortcutActivity>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public finish(): void;
						public _$_clearFindViewByIdCache(): void;
					}
					export module ShortcutActivity {
						export class FinishAndRemoveTaskWithRetry {
							public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.ShortcutActivity.FinishAndRemoveTaskWithRetry>;
							public a: globalAndroid.app.Activity;
							public b: number;
							public constructor(param0: globalAndroid.app.Activity);
							public static "<clinit>"(): void;
							public run(): void;
						}
						export module FinishAndRemoveTaskWithRetry {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.ShortcutActivity.FinishAndRemoveTaskWithRetry.Companion>;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module shortcut {
					export class Start extends com.xfl.msgbot.application.shortcut.ShortcutActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.Start>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module shortcut {
					export class Stop extends com.xfl.msgbot.application.shortcut.ShortcutActivity {
						public static class: java.lang.Class<com.xfl.msgbot.application.shortcut.Stop>;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
						public constructor();
						public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
						public onThemeChanged(param0: string, param1: java.lang.Integer): void;
						public constructor(param0: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public _$_clearFindViewByIdCache(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module databinding {
				export abstract class ItemChatMeBinding {
					public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatMeBinding>;
					public chatSender: globalAndroid.widget.TextView;
					public chatText: globalAndroid.widget.TextView;
					public mClick: com.xfl.msgbot.application.activity.debugroom.MeViewHolder;
					public mIsLongText: java.lang.Boolean;
					public mProfileImageVisibility: java.lang.Integer;
					public mSender: string;
					public mText: string;
					public more: globalAndroid.widget.TextView;
					public profileImage: globalAndroid.widget.ImageView;
					public getText(): string;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: globalAndroid.widget.ImageView);
					public getIsLongText(): java.lang.Boolean;
					public getProfileImageVisibility(): java.lang.Integer;
					public getClick(): com.xfl.msgbot.application.activity.debugroom.MeViewHolder;
					public static bind(param0: globalAndroid.view.View): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public setSender(param0: string): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public setText(param0: string): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public static bind(param0: globalAndroid.view.View, param1: any): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public setProfileImageVisibility(param0: java.lang.Integer): void;
					public getSender(): string;
					public setIsLongText(param0: java.lang.Boolean): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.xfl.msgbot.databinding.ItemChatMeBinding;
					public setClick(param0: com.xfl.msgbot.application.activity.debugroom.MeViewHolder): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module databinding {
				export class ItemChatMeBindingImpl extends com.xfl.msgbot.databinding.ItemChatMeBinding {
					public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatMeBindingImpl>;
					public static B: globalAndroid.util.SparseIntArray;
					public A: number;
					public y: globalAndroid.widget.LinearLayout;
					public z: com.xfl.msgbot.databinding.ItemChatMeBindingImpl.OnClickListenerImpl;
					public static "<clinit>"(): void;
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: globalAndroid.widget.ImageView);
					public invalidateAll(): void;
					public setSender(param0: string): void;
					public setText(param0: string): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setProfileImageVisibility(param0: java.lang.Integer): void;
					public executeBindings(): void;
					public setIsLongText(param0: java.lang.Boolean): void;
					public setClick(param0: com.xfl.msgbot.application.activity.debugroom.MeViewHolder): void;
				}
				export module ItemChatMeBindingImpl {
					export class OnClickListenerImpl {
						public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatMeBindingImpl.OnClickListenerImpl>;
						public a: com.xfl.msgbot.application.activity.debugroom.MeViewHolder;
						public constructor();
						public onClick(param0: globalAndroid.view.View): void;
						public setValue(param0: com.xfl.msgbot.application.activity.debugroom.MeViewHolder): com.xfl.msgbot.databinding.ItemChatMeBindingImpl.OnClickListenerImpl;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module databinding {
				export abstract class ItemChatOpponentBinding {
					public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatOpponentBinding>;
					public chatSender: globalAndroid.widget.TextView;
					public chatText: globalAndroid.widget.TextView;
					public mClick: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder;
					public mIsLongText: java.lang.Boolean;
					public mNameVisibility: java.lang.Integer;
					public mProfileImageVisibility: java.lang.Integer;
					public mSender: string;
					public mText: string;
					public more: globalAndroid.widget.TextView;
					public profileImage: globalAndroid.widget.ImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public getText(): string;
					public getClick(): com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: globalAndroid.widget.ImageView);
					public getIsLongText(): java.lang.Boolean;
					public setClick(param0: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder): void;
					public getProfileImageVisibility(): java.lang.Integer;
					public static bind(param0: globalAndroid.view.View, param1: any): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public getNameVisibility(): java.lang.Integer;
					public setSender(param0: string): void;
					public setText(param0: string): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: any): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public setProfileImageVisibility(param0: java.lang.Integer): void;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean, param3: any): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public setNameVisibility(param0: java.lang.Integer): void;
					public getSender(): string;
					public static bind(param0: globalAndroid.view.View): com.xfl.msgbot.databinding.ItemChatOpponentBinding;
					public setIsLongText(param0: java.lang.Boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module databinding {
				export class ItemChatOpponentBindingImpl extends com.xfl.msgbot.databinding.ItemChatOpponentBinding {
					public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatOpponentBindingImpl>;
					public static B: globalAndroid.util.SparseIntArray;
					public A: number;
					public y: globalAndroid.widget.LinearLayout;
					public z: com.xfl.msgbot.databinding.ItemChatOpponentBindingImpl.OnClickListenerImpl;
					public static "<clinit>"(): void;
					public hasPendingBindings(): boolean;
					public constructor(param0: any, param1: globalAndroid.view.View, param2: number, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: globalAndroid.widget.TextView, param6: globalAndroid.widget.ImageView);
					public setClick(param0: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder): void;
					public invalidateAll(): void;
					public setSender(param0: string): void;
					public setText(param0: string): void;
					public constructor(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View);
					public setVariable(param0: number, param1: any): boolean;
					public onFieldChange(param0: number, param1: any, param2: number): boolean;
					public setProfileImageVisibility(param0: java.lang.Integer): void;
					public setNameVisibility(param0: java.lang.Integer): void;
					public executeBindings(): void;
					public setIsLongText(param0: java.lang.Boolean): void;
				}
				export module ItemChatOpponentBindingImpl {
					export class OnClickListenerImpl {
						public static class: java.lang.Class<com.xfl.msgbot.databinding.ItemChatOpponentBindingImpl.OnClickListenerImpl>;
						public a: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder;
						public constructor();
						public setValue(param0: com.xfl.msgbot.application.activity.debugroom.OpponentViewHolder): com.xfl.msgbot.databinding.ItemChatOpponentBindingImpl.OnClickListenerImpl;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class BotFinder {
					public static class: java.lang.Class<com.xfl.msgbot.script.BotFinder>;
					public static INSTANCE: com.xfl.msgbot.script.BotFinder;
					public static "<clinit>"(): void;
					public findAll(): java.util.ArrayList<java.io.File>;
					public findPoweredOn(param0: java.io.File): java.util.ArrayList<java.io.File>;
					public findAllUnderDirectory(param0: java.io.File): java.util.ArrayList<java.io.File>;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class MessageSender {
					public static class: java.lang.Class<com.xfl.msgbot.script.MessageSender>;
					public send(param0: string, param1: string): boolean;
					public constructor(param0: string);
					public markAsRead(param0: string, param1: string): boolean;
					public markAsRead(param0: string, param1: boolean): boolean;
					public send(param0: globalAndroid.app.Notification.Action, param1: string): boolean;
					public send(param0: string, param1: string, param2: string, param3: java.lang.Boolean): boolean;
					public markAsRead(param0: string): boolean;
					public getScriptName(): string;
					public markAsRead(param0: string, param1: string, param2: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class PrimitiveWrapFactory {
					public static class: java.lang.Class<com.xfl.msgbot.script.PrimitiveWrapFactory>;
					public constructor();
					public wrap(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ResponseParameters {
					public static class: java.lang.Class<com.xfl.msgbot.script.ResponseParameters>;
					public ImageDB: com.xfl.msgbot.script.api.legacy.ImageDB;
					public isGroupChat: java.lang.Boolean;
					public msg: string;
					public packageName: string;
					public replier: com.xfl.msgbot.script.api.legacy.SessionCacheReplier;
					public room: string;
					public sender: string;
					public toSource(): string;
					public component2(): string;
					public component5(): com.xfl.msgbot.script.api.legacy.SessionCacheReplier;
					public component7(): string;
					public component3(): string;
					public component6(): com.xfl.msgbot.script.api.legacy.ImageDB;
					public equals(param0: any): boolean;
					public component4(): java.lang.Boolean;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: com.xfl.msgbot.script.api.legacy.SessionCacheReplier, param5: com.xfl.msgbot.script.api.legacy.ImageDB, param6: string);
					public component1(): string;
					public hashCode(): number;
					public copy(param0: string, param1: string, param2: string, param3: java.lang.Boolean, param4: com.xfl.msgbot.script.api.legacy.SessionCacheReplier, param5: com.xfl.msgbot.script.api.legacy.ImageDB, param6: string): com.xfl.msgbot.script.ResponseParameters;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ScriptContainer {
					public static class: java.lang.Class<com.xfl.msgbot.script.ScriptContainer>;
					public setScope(param0: org.mozilla.javascript.ScriptableObject): com.xfl.msgbot.script.ScriptContainer;
					public getOnTick(): org.mozilla.javascript.Function;
					public setTickCount(param0: number): void;
					public getScope(): org.mozilla.javascript.ScriptableObject;
					public getOnCreate(): org.mozilla.javascript.Function;
					public setScriptActivity(param0: org.mozilla.javascript.Function, param1: org.mozilla.javascript.Function, param2: org.mozilla.javascript.Function, param3: org.mozilla.javascript.Function): com.xfl.msgbot.script.ScriptContainer;
					public getTickCount(): number;
					public getOnPause(): org.mozilla.javascript.Function;
					public setSettings$app_release(param0: com.xfl.msgbot.script.ScriptSettings): com.xfl.msgbot.script.ScriptContainer;
					public setResponder(param0: org.mozilla.javascript.Function): com.xfl.msgbot.script.ScriptContainer;
					public setTick(param0: org.mozilla.javascript.Function): com.xfl.msgbot.script.ScriptContainer;
					public setOnNotificationPosted(param0: org.mozilla.javascript.Function): com.xfl.msgbot.script.ScriptContainer;
					public setOnStartCompile(param0: org.mozilla.javascript.Function): com.xfl.msgbot.script.ScriptContainer;
					public constructor(param0: org.mozilla.javascript.Function, param1: org.mozilla.javascript.ScriptableObject, param2: org.mozilla.javascript.Function, param3: org.mozilla.javascript.ScriptableObject, param4: org.mozilla.javascript.Function);
					public getResponder(): org.mozilla.javascript.Function;
					public getOnNotificationPosted(): org.mozilla.javascript.Function;
					public constructor();
					public getOptimization(): number;
					public setOptimization(param0: number): com.xfl.msgbot.script.ScriptContainer;
					public getOnResume(): org.mozilla.javascript.Function;
					public getOnStop(): org.mozilla.javascript.Function;
					public getOnStartCompile(): org.mozilla.javascript.Function;
					public getSettings$app_release(): com.xfl.msgbot.script.ScriptSettings;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ScriptHolder {
					public static class: java.lang.Class<com.xfl.msgbot.script.ScriptHolder>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ScriptManagerCompat {
					public static class: java.lang.Class<com.xfl.msgbot.script.ScriptManagerCompat>;
					public static "<clinit>"(): void;
					public constructor();
				}
				export module ScriptManagerCompat {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.script.ScriptManagerCompat.Companion>;
						public shutdownThreads(param0: string): java.util.List<java.lang.Runnable>;
						public callResponder(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: com.xfl.msgbot.script.api.legacy.ImageDB, param6: string, param7: boolean, param8: globalAndroid.app.Notification.Action, param9: boolean): void;
						public initializeAll(param0: boolean): void;
						public putOn(param0: string, param1: boolean): void;
						public checkIsLegacy(param0: string): boolean;
						public unloadScript(param0: string): boolean;
						public safeDeleteScript(param0: string): boolean;
						public isTerminated(param0: string): boolean;
						public getDebugRoom(): java.util.HashMap<string,string>;
						public initializeScript(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: globalAndroid.app.Activity): any;
						public validateJson(param0: string): string;
						public enterRhinoContext(param0: string): org.mozilla.javascript.Context;
						public getProfileImageBitmap(param0: string, param1: boolean): globalAndroid.graphics.Bitmap;
						public getExecScope(param0: string): org.mozilla.javascript.Scriptable;
						public getActiveThreadsCount(param0: string): number;
						public isCompiled(param0: string): boolean;
						public setDebugRoom(param0: string, param1: string): void;
						public callOnNotificationPosted(param0: string, param1: globalAndroid.service.notification.StatusBarNotification, param2: com.xfl.msgbot.script.SessionManager): void;
						public getScriptContainer(): java.util.HashMap<string,com.xfl.msgbot.script.ScriptContainer>;
						public putOnAll(param0: boolean): void;
						public invalidateScript(param0: string): void;
						public isLegacyCache(): java.util.HashMap<string,java.lang.Boolean>;
						public getProfileImageForGlide(param0: string, param1: boolean): any;
						public isCompiling(): java.util.HashMap<string,java.lang.Boolean>;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ScriptNotification {
					public static class: java.lang.Class<com.xfl.msgbot.script.ScriptNotification>;
					public constructor(param0: globalAndroid.app.Activity, param1: string);
					public notifyCompileStart(): void;
					public notifyRuntimeError(param0: string, param1: boolean): void;
					public getScriptName(): string;
					public notifyCompileError(param0: string): void;
					public notifyCompileSuccess(): void;
					public getActivity(): globalAndroid.app.Activity;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class ScriptSettings {
					public static class: java.lang.Class<com.xfl.msgbot.script.ScriptSettings>;
					public hasMainFile(): boolean;
					public getDatabaseFolder(): java.io.File;
					public getScriptName(): string;
					public getSettingsFileName(): string;
					public setSettingsFileName(param0: string): void;
					public getBaseFile(): java.io.File;
					public getMainFile(): java.io.File;
					public getDebugRoomFolder(): java.io.File;
					public getOptionFile(): java.io.File;
					public getBotFolder(): java.io.File;
					public constructor(param0: string, param1: number);
					public hasOptionFile(): boolean;
					public remove(param0: string): boolean;
					public setBaseFile(param0: java.io.File): void;
				}
				export module ScriptSettings {
					export class Type {
						public static class: java.lang.Class<com.xfl.msgbot.script.ScriptSettings.Type>;
						/**
						 * Constructs a new instance of the com.xfl.msgbot.script.ScriptSettings$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"<clinit>"(): void;
						});
						public constructor();
						public static DEBUGROOM: number;
						public static SCRIPT: number;
					}
					export module Type {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.script.ScriptSettings.Type.Companion>;
							public static DEBUGROOM: number;
							public static SCRIPT: number;
							public static "<clinit>"(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class SessionManager {
					public static class: java.lang.Class<com.xfl.msgbot.script.SessionManager>;
					public setPackageName(param0: string): void;
					public bindSession(param0: string, param1: globalAndroid.app.Notification.Action): boolean;
					public getMarkAsReadAction(): globalAndroid.app.Notification.Action;
					public setReplyAction(param0: globalAndroid.app.Notification.Action): void;
					public setRoom(param0: string): void;
					public constructor(param0: string);
					public bindMarkAsRead(param0: string, param1: globalAndroid.app.Notification.Action): boolean;
					public bindSession(param0: string): boolean;
					public getPackageName(): string;
					public getRoom(): string;
					public bindMarkAsRead(param0: string): boolean;
					public setMarkAsReadAction(param0: globalAndroid.app.Notification.Action): void;
					public bindSession(param0: string, param1: string): boolean;
					public getReplyAction(): globalAndroid.app.Notification.Action;
					public bindSession(param0: string, param1: string, param2: globalAndroid.app.Notification.Action): boolean;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export class ArgumentResolver {
						public static class: java.lang.Class<com.xfl.msgbot.script.api.ArgumentResolver>;
						public constructor();
						public static "<clinit>"(): void;
					}
					export module ArgumentResolver {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.ArgumentResolver.Companion>;
							public getDefault(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class AppData {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.AppData>;
							public constructor();
							public static putInt(param0: string, param1: number): void;
							public static remove(param0: string): void;
							public getClassName(): string;
							public static getBoolean(param0: string, param1: boolean): boolean;
							public static putBoolean(param0: string, param1: boolean): void;
							public static clear(): void;
							public static getInt(param0: string, param1: number): java.lang.Integer;
							public static putString(param0: string, param1: string): void;
							public static "<clinit>"(): void;
							public static getString(param0: string, param1: string): string;
						}
						export module AppData {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.AppData.Companion>;
								public clear(): void;
								public getString(param0: string, param1: string): string;
								public putInt(param0: string, param1: number): void;
								public putString(param0: string, param1: string): void;
								public getBoolean(param0: string, param1: boolean): boolean;
								public remove(param0: string): void;
								public getInt(param0: string, param1: number): java.lang.Integer;
								public putBoolean(param0: string, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class Device {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.Device>;
							public getFreeMemory(): java.lang.Long;
							public toString(): string;
							public getTotalMemory(): java.lang.Long;
							public constructor(param0: org.mozilla.javascript.ScriptableObject);
							public acquireWakeLock(param0: any, param1: any, param2: any): void;
							public getWifiName(): string;
							public releaseWakeLock(param0: any): void;
							public isScreenOn(): boolean;
							public getClassName(): string;
							public getPlugType(): string;
							public getPhoneBrand(): string;
							public getBuild(): any;
							public getBatteryVoltage(): number;
							public getBatteryIntent(): globalAndroid.content.Intent;
							public getBatteryHealth(): number;
							public getBatteryLevel(): number;
							public getAndroidVersionCode(): number;
							public getBatteryTemperature(): number;
							public getFreeStorageSpace(param0: any): java.lang.Long;
							public isCharging(): boolean;
							public getPhoneModel(): string;
							public getAndroidVersionName(): string;
							public getBatteryStatus(): number;
							public isPowerSaveMode(): boolean;
							public getTotalStorageSpace(param0: any): java.lang.Long;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class FileStream {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.FileStream>;
							public constructor();
							public getClassName(): string;
							public static read(param0: string): string;
							public static remove(param0: string): boolean;
							public static append(param0: string, param1: string): string;
							public static write(param0: string, param1: string): string;
							public static create(param0: string): java.lang.Boolean;
							public static "<clinit>"(): void;
						}
						export module FileStream {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.FileStream.Companion>;
								public create(param0: string): java.lang.Boolean;
								public remove(param0: string): boolean;
								public write(param0: string, param1: string): string;
								public read(param0: string): string;
								public append(param0: string, param1: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class GlobalLog {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.GlobalLog>;
							public constructor(param0: org.mozilla.javascript.ScriptableObject);
							public e(param0: string, param1: boolean): void;
							public getClassName(): string;
							public debug(param0: string, param1: boolean): void;
							public d(param0: string, param1: boolean): void;
							public error(param0: string, param1: boolean): void;
							public clear(): void;
							public toString(): string;
							public info(param0: string, param1: boolean): void;
							public i(param0: string, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class Log {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.Log>;
							public d(param0: string, param1: java.lang.Boolean): void;
							public debug(param0: string, param1: java.lang.Boolean): void;
							public getClassName(): string;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public info(param0: string, param1: java.lang.Boolean): void;
							public clear(): void;
							public error(param0: string, param1: java.lang.Boolean): void;
							public toString(): string;
							public i(param0: string, param1: java.lang.Boolean): void;
							public e(param0: string, param1: java.lang.Boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class MsgBot {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.MsgBot>;
							public clearTimeout(param0: any): void;
							public getClassName(): string;
							public setTimeout(param0: org.mozilla.javascript.Function, param1: number, param2: any): number;
							public setInterval(param0: org.mozilla.javascript.Function, param1: number, param2: any): number;
							public clearInterval(param0: any): void;
							public toast(param0: string, param1: number): void;
							public constructor(param0: org.mozilla.javascript.Context, param1: java.lang.Boolean, param2: string);
							public toString(): string;
							public repeat(param0: any, param1: number, param2: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module compat {
						export class a {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.compat.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class Api {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.Api>;
							public makeNoti(param0: string, param1: string, param2: java.lang.Integer): boolean;
							public replyRoom(param0: string, param1: string, param2: boolean): boolean;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public prepare(param0: any, param1: java.lang.Boolean): number;
							public compile(param0: any, param1: java.lang.Boolean): boolean;
							public off(param0: any): boolean;
							public toString(): string;
							public unload(param0: any): boolean;
							public getClassName(): string;
							public getScriptNames(): org.mozilla.javascript.Scriptable;
							public interruptThreads(param0: any): org.mozilla.javascript.Scriptable;
							public UIThread(param0: org.mozilla.javascript.Function, param1: org.mozilla.javascript.Function): void;
							public isCompiling(param0: any): boolean;
							public getActiveThreadsCount(param0: any): number;
							public isCompiled(param0: any): boolean;
							public getContext(): globalAndroid.content.Context;
							public markAsRead(param0: string, param1: any): boolean;
							public papagoTranslate(param0: string, param1: string, param2: string, param3: java.lang.Boolean): string;
							public reload(param0: any, param1: java.lang.Boolean): boolean;
							public gc(): void;
							public isTerminated(param0: any): boolean;
							public canReply(param0: string): boolean;
							public showToast(param0: string, param1: number): void;
							public isOn(param0: any): boolean;
							public on(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class Bridge {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.Bridge>;
							public constructor();
							public getClassName(): string;
							public static isAllowed(param0: string): boolean;
							public static "<clinit>"(): void;
							public static getScopeOf(param0: string): org.mozilla.javascript.ScriptableObject;
						}
						export module Bridge {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.Bridge.Companion>;
								public getScopeOf(param0: string): org.mozilla.javascript.ScriptableObject;
								public isAllowed(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class DataBase {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.DataBase>;
							public getClassName(): string;
							public removeDataBase(param0: string): boolean;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public getDataBase(param0: string): string;
							public setDataBase(param0: string, param1: string): string;
							public appendDataBase(param0: string, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class ImageDB {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.ImageDB>;
							public getImageHash(): number;
							public getProfileSHA(): string;
							public getProfilePic(): globalAndroid.graphics.Bitmap;
							public getAttachedImage(): globalAndroid.graphics.Bitmap;
							public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap);
							public getImage(): string;
							public getImageBitmap(): globalAndroid.graphics.Bitmap;
							public getProfileBitmap(): globalAndroid.graphics.Bitmap;
							public getProfileHash(): number;
							public getProfileImage(): string;
							public getImageMD5(): string;
							public getProfileBase64(): string;
							public getProfileMD5(): string;
							public toSource(): string;
							public getImageSHA(): string;
							public getImageBase64(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class LegacyScriptManager {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.LegacyScriptManager>;
							public constructor();
							public static "<clinit>"(): void;
						}
						export module LegacyScriptManager {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.LegacyScriptManager.Companion>;
								public initializeScript(param0: string, param1: boolean, param2: boolean, param3: globalAndroid.app.Activity): any;
								public callResponder(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: com.xfl.msgbot.script.api.legacy.ImageDB, param6: string, param7: globalAndroid.app.Notification.Action, param8: boolean): void;
								public callOnNotificationPosted(param0: string, param1: globalAndroid.service.notification.StatusBarNotification, param2: com.xfl.msgbot.script.SessionManager): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class SessionCacheReplier {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.SessionCacheReplier>;
							public reply(param0: string, param1: string, param2: boolean): boolean;
							public replyDelayed(param0: string, param1: java.lang.Long): void;
							public markAsRead(): boolean;
							public markAsRead(param0: string): boolean;
							public replyDelayed(param0: string, param1: string, param2: java.lang.Long): boolean;
							public constructor(param0: string, param1: string);
							public reply(param0: string): void;
							public replyDelayed(param0: string, param1: string, param2: java.lang.Long, param3: boolean): boolean;
							public toString(): string;
							public reply(param0: string, param1: string): boolean;
							public markAsRead(param0: string, param1: string): boolean;
							public constructor(param0: string, param1: globalAndroid.app.Notification.Action, param2: string, param3: boolean, param4: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class Test {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.Test>;
							public getClassName(): string;
							public constructor(param0: string);
							public toString(): string;
							public go(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class Utils {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.Utils>;
							public isUndefined(param0: any): boolean;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public parse(param0: string): org.jsoup.nodes.Document;
							public toString(): string;
							public measureTimeMillis(param0: org.mozilla.javascript.Function): any;
							public xmlToJson(param0: string, param1: any): string;
							public getAndroidVersionCode(): number;
							public measureNanoTime(param0: org.mozilla.javascript.Function): any;
							public getClassName(): string;
							public getPhoneModel(): string;
							public getAndroidVersionName(): string;
							public getPhoneBrand(): string;
							public getRandomUserAgent(): string;
							public getWebText(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module legacy {
						export class a {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.legacy.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class App {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.App>;
							public getClassName(): string;
							public getContext(): globalAndroid.content.Context;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public runOnUiThread(param0: org.mozilla.javascript.Function, param1: org.mozilla.javascript.Function): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Bot {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Bot>;
							public getOneTimeListenersMap(): java.util.HashMap<string,java.util.LinkedList<org.mozilla.javascript.Function>>;
							public off(param0: string, param1: any): void;
							public setCommandPrefix(param0: string): void;
							public send(param0: string, param1: string, param2: any): boolean;
							public compile(): void;
							public listeners(param0: any): org.mozilla.javascript.Scriptable;
							public markAsRead(param0: string, param1: any): boolean;
							public unload(): void;
							public removeAllListeners(param0: any): void;
							public canReply(param0: string, param1: any): boolean;
							public prependListener(param0: string, param1: org.mozilla.javascript.Function): void;
							public removeListener(param0: string, param1: any): void;
							public setPower(param0: boolean): void;
							public addListener(param0: string, param1: org.mozilla.javascript.Function): void;
							public getClassName(): string;
							public getRootPath(): string;
							public on(param0: string, param1: org.mozilla.javascript.Function): void;
							public constructor(param0: java.io.File, param1: org.mozilla.javascript.ScriptableObject);
							public getCommandPrefix(): string;
							public getName(): string;
							public getPower(): boolean;
							public getListenersMap(): java.util.HashMap<string,java.util.LinkedList<org.mozilla.javascript.Function>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class BotManager {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.BotManager>;
							public getPower(param0: string): boolean;
							public setPower(param0: string, param1: boolean): void;
							public getBot(param0: string): any;
							public getBotList(): org.mozilla.javascript.Scriptable;
							public getCurrentBot(): com.xfl.msgbot.script.api.modern.Bot;
							public prepare(param0: string, param1: boolean): number;
							public getRooms(param0: any): org.mozilla.javascript.Scriptable;
							public unload(param0: string): void;
							public compileAll(): void;
							public prepareAll(param0: java.lang.Boolean): number;
							public constructor(param0: string, param1: com.xfl.msgbot.script.api.modern.Bot, param2: org.mozilla.javascript.ScriptableObject);
							public isCompiled(param0: string): boolean;
							public getClassName(): string;
							public compile(param0: string, param1: java.lang.Boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Broadcast {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Broadcast>;
							public getClassName(): string;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public send(param0: string, param1: any): void;
							public static "<clinit>"(): void;
							public unregister(param0: string, param1: org.mozilla.javascript.Function): void;
							public register(param0: string, param1: org.mozilla.javascript.Function): void;
							public unregisterAll(): void;
						}
						export module Broadcast {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Broadcast.Companion>;
								public destroy(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Database {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Database>;
							public writeObject(param0: string, param1: org.mozilla.javascript.Scriptable): void;
							public writeString(param0: string, param1: string): void;
							public getClassName(): string;
							public readString(param0: string): string;
							public readObject(param0: string): org.mozilla.javascript.Scriptable;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public getScriptName(): string;
							public exists(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Event {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Event>;
							public static COMMAND: string;
							public static MESSAGE: string;
							public static NOTIFICATION_POSTED: string;
							public static START_COMPILE: string;
							public static TICK: string;
							public constructor(param0: org.mozilla.javascript.ScriptableObject);
							public getClassName(): string;
							public static "<clinit>"(): void;
						}
						export module Event {
							export class Activity {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Event.Activity>;
								public static BACK_PRESSED: string;
								public static CREATE: string;
								public static DESTROY: string;
								public static PAUSE: string;
								public static RESTART: string;
								public static RESUME: string;
								public static START: string;
								public static STOP: string;
								public static "<clinit>"(): void;
								public constructor(param0: org.mozilla.javascript.ScriptableObject);
								public getClassName(): string;
							}
							export module Activity {
								export class Companion {
									public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Event.Activity.Companion>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Event.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Http {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Http>;
							public request(param0: any, param1: org.mozilla.javascript.Function): void;
							public getClassName(): string;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public requestSync(param0: any): org.jsoup.nodes.Document;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Image {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Image>;
							public constructor(param0: globalAndroid.graphics.Bitmap, param1: org.mozilla.javascript.ScriptableObject);
							public getClassName(): string;
							public getBase64(): string;
							public toString(): string;
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public toSource(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Message {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Message>;
							public reply(param0: string): boolean;
							public markAsRead(): boolean;
							public setContent(param0: string): void;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public isDebugRoom(): boolean;
							public setImage(param0: com.xfl.msgbot.script.api.modern.Image): void;
							public getAuthor(): com.xfl.msgbot.script.api.modern.User;
							public getRoom(): string;
							public setPackageName(param0: string): void;
							public setAuthor(param0: com.xfl.msgbot.script.api.modern.User): void;
							public setRoom(param0: string): void;
							public setMention(param0: boolean): void;
							public getImage(): com.xfl.msgbot.script.api.modern.Image;
							public getContent(): string;
							public getClassName(): string;
							public isMention(): boolean;
							public getPackageName(): string;
							public isGroupChat(): boolean;
							public setGroupChat(param0: boolean): void;
							public setDebugRoom(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class NativeUtils {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.NativeUtils>;
							public initPrototypeId(param0: number): void;
							public getClassName(): string;
							public constructor(param0: string);
							public findPrototypeId(param0: string): number;
							public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: androidNative.Array<any>): any;
							public static "<clinit>"(): void;
						}
						export module NativeUtils {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.NativeUtils.Companion>;
								public init(param0: string, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class ScriptManager {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.ScriptManager>;
							public constructor();
							public static "<clinit>"(): void;
						}
						export module ScriptManager {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.ScriptManager.Companion>;
								public callResponder(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: com.xfl.msgbot.script.api.legacy.ImageDB, param6: string, param7: boolean, param8: boolean): void;
								public getBots(): java.util.HashMap<string,com.xfl.msgbot.script.api.modern.Bot>;
								public initializeScript(param0: string, param1: boolean, param2: boolean, param3: globalAndroid.app.Activity): any;
								public callOnNotificationPosted(param0: string, param1: globalAndroid.service.notification.StatusBarNotification, param2: com.xfl.msgbot.script.SessionManager): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class ScriptTimer {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.ScriptTimer>;
							public getID(): number;
							public constructor(param0: string);
							public cancel(param0: string, param1: any): any;
							public static "<clinit>"(): void;
							public constructor(param0: number);
							public constructor(param0: kotlinx.coroutines.Job);
						}
						export module ScriptTimer {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.ScriptTimer.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class Security {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.Security>;
							public desEncode(param0: string, param1: string): string;
							public aesDecode(param0: string, param1: string, param2: string): string;
							public sha256(param0: string): string;
							public constructor(param0: string, param1: org.mozilla.javascript.ScriptableObject);
							public base32Decode(param0: string): string;
							public ariaDecode(param0: string, param1: string): string;
							public rc4Encode(param0: string, param1: string): string;
							public sha3_512(param0: string): string;
							public desDecode(param0: string, param1: string): string;
							public base64Encode(param0: string): string;
							public getClassName(): string;
							public eccKey(param0: string): org.mozilla.javascript.Scriptable;
							public md2(param0: string): string;
							public hashCode(param0: string): number;
							public sha3_224(param0: string): string;
							public ariaEncode(param0: string, param1: string): string;
							public sha(param0: string): string;
							public sha3_256(param0: string): string;
							public des3Decode(param0: string, param1: string): string;
							public seedEncode(param0: string, param1: string): string;
							public base64Decode(param0: string): string;
							public desKey(): string;
							public seedDecode(param0: string, param1: string): string;
							public aesEncode(param0: string, param1: string, param2: string): string;
							public des3Encode(param0: string, param1: string): string;
							public sha512(param0: string): string;
							public eccDecode(param0: string, param1: string): string;
							public sha384(param0: string): string;
							public rc4Decode(param0: string, param1: string): string;
							public base32Encode(param0: string): string;
							public md5(param0: string): string;
							public sha3_384(param0: string): string;
							public eccEncode(param0: string, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module api {
					export module modern {
						export class User {
							public static class: java.lang.Class<com.xfl.msgbot.script.api.modern.User>;
							public getClassName(): string;
							public toString(): string;
							public toSource(): string;
							public constructor(param0: string, param1: com.xfl.msgbot.script.api.modern.Image, param2: org.mozilla.javascript.ScriptableObject);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module babel {
					export class BabelConverter {
						public static class: java.lang.Class<com.xfl.msgbot.script.babel.BabelConverter>;
						public installModules(): void;
						public static "<clinit>"(): void;
						public constructor(param0: globalAndroid.content.Context);
						public init(): void;
						public contextInit(): void;
						public convert(param0: string, param1: string): string;
						public finalize(): void;
						public scopeInit(): void;
					}
					export module BabelConverter {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.script.babel.BabelConverter.Companion>;
							public getRhinoContext(): org.mozilla.javascript.Context;
							public setScope(param0: org.mozilla.javascript.ScriptableObject): void;
							public getScope(): org.mozilla.javascript.ScriptableObject;
							public setRhinoContext(param0: org.mozilla.javascript.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module requirefix {
					export class AstBuilder {
						public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder>;
						public constructor();
						public static newArray(param0: number): org.mozilla.javascript.NativeArray;
						public static newObject(): org.mozilla.javascript.NativeObject;
						public static "<clinit>"(): void;
						public getAst(): org.mozilla.javascript.NativeObject;
						public build(param0: string, param1: string): org.mozilla.javascript.NativeObject;
						public getRhinoNodes(): java.util.Map<string,org.mozilla.javascript.ast.AstNode>;
						public static newArray(param0: java.util.List<any>): org.mozilla.javascript.NativeArray;
						public reset(): void;
						public static getCurrentContext(): org.mozilla.javascript.Context;
						public static getCurrentScope(): org.mozilla.javascript.ScriptableObject;
					}
					export module AstBuilder {
						export class Entry extends java.util.HashMap<any,any> {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder.Entry>;
							public constructor(param0: com.xfl.msgbot.script.requirefix.AstBuilder);
						}
						export class HiddenProperties {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder.HiddenProperties>;
							public static NODE_ID: com.xfl.msgbot.script.requirefix.AstBuilder.HiddenProperties;
							public static valueOf(param0: string): com.xfl.msgbot.script.requirefix.AstBuilder.HiddenProperties;
							public static values(): androidNative.Array<com.xfl.msgbot.script.requirefix.AstBuilder.HiddenProperties>;
							public static "<clinit>"(): void;
							public getPropertyName(): string;
						}
						export class JsDocNode {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder.JsDocNode>;
							public static ARRAY_EXPRESSION: string;
							public static ARRAY_PATTERN: string;
							public static ASSIGNMENT_EXPRESSION: string;
							public static BINARY_EXPRESSION: string;
							public static BLOCK: string;
							public static BLOCK_STATEMENT: string;
							public static BREAK_STATEMENT: string;
							public static CALL_EXPRESSION: string;
							public static CATCH_CLAUSE: string;
							public static COMPREHENSION_BLOCK: string;
							public static COMPREHENSION_EXPRESSION: string;
							public static CONDITIONAL_EXPRESSION: string;
							public static CONTINUE_STATEMENT: string;
							public static DEBUGGER_STATEMENT: string;
							public static DO_WHILE_STATEMENT: string;
							public static EMPTY_STATEMENT: string;
							public static EXPRESSION_STATEMENT: string;
							public static FOR_IN_STATEMENT: string;
							public static FOR_OF_STATEMENT: string;
							public static FOR_STATEMENT: string;
							public static FUNCTION_DECLARATION: string;
							public static FUNCTION_EXPRESSION: string;
							public static IDENTIFIER: string;
							public static IF_STATEMENT: string;
							public static LABELED_STATEMENT: string;
							public static LET_STATEMENT: string;
							public static LITERAL: string;
							public static LOGICAL_EXPRESSION: string;
							public static MEMBER_EXPRESSION: string;
							public static NEW_EXPRESSION: string;
							public static OBJECT_EXPRESSION: string;
							public static OBJECT_PATTERN: string;
							public static PROGRAM: string;
							public static PROPERTY: string;
							public static RETURN_STATEMENT: string;
							public static SEQUENCE_EXPRESSION: string;
							public static SWITCH_CASE: string;
							public static SWITCH_STATEMENT: string;
							public static THIS_EXPRESSION: string;
							public static THROW_STATEMENT: string;
							public static TRY_STATEMENT: string;
							public static UNARY_EXPRESSION: string;
							public static UPDATE_EXPRESSION: string;
							public static VARIABLE_DECLARATION: string;
							public static VARIABLE_DECLARATOR: string;
							public static WHILE_STATEMENT: string;
							public static WITH_STATEMENT: string;
							public static YIELD_EXPRESSION: string;
							public get(param0: string): any;
							public getNativeObject(): org.mozilla.javascript.NativeObject;
							public constructor(param0: com.xfl.msgbot.script.requirefix.AstBuilder);
							public put(param0: string, param1: any): void;
							public constructor(param0: com.xfl.msgbot.script.requirefix.AstBuilder, param1: com.xfl.msgbot.script.requirefix.AstBuilder.Entry);
						}
						export class NodeTypes {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes>;
							public static ArrayComprehension: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ArrayComprehensionLoop: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ArrayLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Assignment: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static AstRoot: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Block: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static BreakStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static CatchClause: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Comment: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ConditionalExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ContinueStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static DoLoop: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ElementGet: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static EmptyExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ExpressionStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ForInLoop: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ForLoop: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static FunctionCall: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static FunctionNode: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static IfStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static InfixExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static KeywordLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Label: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static LabeledStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static LetNode: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Name: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static NewExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static NumberLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ObjectLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ObjectProperty: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ParenthesizedExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static PropertyGet: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static RegExpLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ReturnStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Scope: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static StringLiteral: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static SwitchCase: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static SwitchStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static ThrowStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static TryStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static UnaryExpression: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static VariableDeclaration: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static VariableInitializer: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static WhileLoop: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static WithStatement: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static Yield: com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
							public static values(): androidNative.Array<com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes>;
							public static "<clinit>"(): void;
							public static valueOf(param0: string): com.xfl.msgbot.script.requirefix.AstBuilder.NodeTypes;
						}
						export class Properties {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.AstBuilder.Properties>;
							public static TYPE: com.xfl.msgbot.script.requirefix.AstBuilder.Properties;
							public static valueOf(param0: string): com.xfl.msgbot.script.requirefix.AstBuilder.Properties;
							public static values(): androidNative.Array<com.xfl.msgbot.script.requirefix.AstBuilder.Properties>;
							public static "<clinit>"(): void;
							public getPropertyName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module requirefix {
					export class JsDocModuleProvider {
						public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.JsDocModuleProvider>;
						public constructor(param0: java.lang.Iterable<java.net.URI>, param1: java.lang.Iterable<java.net.URI>);
						public static "<clinit>"(): void;
						public loadFromUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
					}
					export module JsDocModuleProvider {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.JsDocModuleProvider.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export module requirefix {
					export class JsDocSourceReader {
						public static class: java.lang.Class<com.xfl.msgbot.script.requirefix.JsDocSourceReader>;
						public constructor();
						public static readFileOrUrl(param0: string, param1: boolean, param2: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module test {
				export class DataBases {
					public static class: java.lang.Class<com.xfl.msgbot.test.DataBases>;
					public constructor();
				}
				export module DataBases {
					export class CreateDB {
						public static class: java.lang.Class<com.xfl.msgbot.test.DataBases.CreateDB>;
						public static ID: string;
						public static INSTANCE: com.xfl.msgbot.test.DataBases.CreateDB;
						public static TEST: string;
						public static _CREATE0: string;
						public static _TABLENAME0: string;
						public constructor();
						public static "<clinit>"(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module test {
				export class DbOpenHelper {
					public static class: java.lang.Class<com.xfl.msgbot.test.DbOpenHelper>;
					public a: globalAndroid.database.sqlite.SQLiteDatabase;
					public b: com.xfl.msgbot.test.DbOpenHelper.a;
					public c: globalAndroid.content.Context;
					public static "<clinit>"(): void;
					public constructor(param0: globalAndroid.content.Context);
					public selectColumns(): globalAndroid.database.Cursor;
					public sortColumn(param0: string): globalAndroid.database.Cursor;
					public create(): void;
					public close(): void;
					public deleteAllColumns(): void;
					public insertColumn(param0: number, param1: string): java.lang.Long;
					public open(): com.xfl.msgbot.test.DbOpenHelper;
					public updateColumn(param0: number, param1: string): boolean;
					public deleteColumn(param0: number): boolean;
				}
				export module DbOpenHelper {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.test.DbOpenHelper.Companion>;
						public constructor();
						public constructor(param0: any);
					}
					export class a {
						public static class: java.lang.Class<com.xfl.msgbot.test.DbOpenHelper.a>;
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class AndroidVersionUtil {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AndroidVersionUtil>;
					public static INSTANCE: com.xfl.msgbot.utils.AndroidVersionUtil;
					public static "<clinit>"(): void;
					public constructor();
					public isGreaterThanL(): boolean;
					public isGreaterThanP(): boolean;
					public isGreaterThanN(): boolean;
					public isGreaterThanO(): boolean;
					public isGreaterThanM(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export abstract class AppBarStateChangeListener {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AppBarStateChangeListener>;
					public a: com.xfl.msgbot.utils.AppBarStateChangeListener.State;
					public constructor();
					public onStateChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: com.xfl.msgbot.utils.AppBarStateChangeListener.State): void;
					public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
					public getState(): com.xfl.msgbot.utils.AppBarStateChangeListener.State;
				}
				export module AppBarStateChangeListener {
					export class State {
						public static class: java.lang.Class<com.xfl.msgbot.utils.AppBarStateChangeListener.State>;
						public static COLLAPSED: com.xfl.msgbot.utils.AppBarStateChangeListener.State;
						public static EXPANDED: com.xfl.msgbot.utils.AppBarStateChangeListener.State;
						public static IDLE: com.xfl.msgbot.utils.AppBarStateChangeListener.State;
						public static "<clinit>"(): void;
						public static valueOf(param0: string): com.xfl.msgbot.utils.AppBarStateChangeListener.State;
						public constructor(param0: string, param1: number);
						public static values(): androidNative.Array<com.xfl.msgbot.utils.AppBarStateChangeListener.State>;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export abstract class AppScopeActivity implements com.xfl.msgbot.utils.ThemeChanged {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopeActivity>;
					public a: java.util.List<com.xfl.msgbot.application.AdManager>;
					public b: java.util.Timer;
					public c: any;
					public d: any;
					public e: kotlinx.coroutines.CoroutineDispatcher;
					public f: kotlinx.coroutines.Job;
					public g: number;
					public toast: com.xfl.msgbot.utils.AppScopeActivity.CreateToast;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
					public getJob(): kotlinx.coroutines.Job;
					public getCoroutineContext(): any;
					public getToast(): com.xfl.msgbot.utils.AppScopeActivity.CreateToast;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onDestroy(): void;
					public setJob(param0: kotlinx.coroutines.Job): void;
					public setDispatcher(param0: kotlinx.coroutines.CoroutineDispatcher): void;
					public clearAdManager(): void;
					public onResume(): void;
					public onThemeChanged(param0: string, param1: java.lang.Integer): void;
					public attachBaseContext(param0: globalAndroid.content.Context): void;
					public setToast(param0: com.xfl.msgbot.utils.AppScopeActivity.CreateToast): void;
					public addAdManager(param0: com.xfl.msgbot.application.AdManager): boolean;
					public getLocalBroadcastManager(): androidx.localbroadcastmanager.content.LocalBroadcastManager;
					public constructor(param0: number, param1: kotlinx.coroutines.CoroutineDispatcher);
					public removeAdManager(param0: com.xfl.msgbot.application.AdManager): boolean;
					public getDefaultPref(): globalAndroid.content.SharedPreferences;
					public constructor(param0: number);
					public getDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
				}
				export module AppScopeActivity {
					export class CreateToast {
						public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopeActivity.CreateToast>;
						public a: globalAndroid.content.Context;
						public b: any;
						public c: globalAndroid.widget.Toast;
						public plusAssign(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public timesAssign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export abstract class AppScopePreferenceFragment implements com.xfl.msgbot.application.activity.settings.SettingsFragment {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopePreferenceFragment>;
					public j: any;
					public k: any;
					public l: kotlinx.coroutines.CoroutineDispatcher;
					public m: kotlinx.coroutines.Job;
					public toast: com.xfl.msgbot.utils.AppScopePreferenceFragment.CreateToast;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
					public applyDrawableTint(param0: androidx.preference.PreferenceFragmentCompat, param1: string, param2: number, param3: java.lang.Integer): void;
					public getJob(): kotlinx.coroutines.Job;
					public getCoroutineContext(): any;
					public onDestroy(): void;
					public setJob(param0: kotlinx.coroutines.Job): void;
					public setDispatcher(param0: kotlinx.coroutines.CoroutineDispatcher): void;
					public getLocalBroadcast(): androidx.localbroadcastmanager.content.LocalBroadcastManager;
					public setToast(param0: com.xfl.msgbot.utils.AppScopePreferenceFragment.CreateToast): void;
					public constructor();
					public getToast(): com.xfl.msgbot.utils.AppScopePreferenceFragment.CreateToast;
					public getDrawableTint(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
					public getDrawableTint(param0: androidx.preference.Preference, param1: number, param2: java.lang.Integer): void;
					public getDefaultPref(): globalAndroid.content.SharedPreferences;
					public getColor(param0: globalAndroid.content.Context, param1: number, param2: java.lang.Boolean): number;
					public getDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
				}
				export module AppScopePreferenceFragment {
					export class CreateToast {
						public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopePreferenceFragment.CreateToast>;
						public a: globalAndroid.content.Context;
						public b: any;
						public c: globalAndroid.widget.Toast;
						public constructor(param0: globalAndroid.content.Context);
						public timesAssign(param0: string): void;
						public plusAssign(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export abstract class AppScopeService {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopeService>;
					public a: kotlinx.coroutines.CoroutineDispatcher;
					public b: any;
					public c: any;
					public d: kotlinx.coroutines.Job;
					public attachBaseContext(param0: globalAndroid.content.Context): void;
					public getLocalBroadcastManager(): androidx.localbroadcastmanager.content.LocalBroadcastManager;
					public onCreate(): void;
					public constructor();
					public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
					public getJob(): kotlinx.coroutines.Job;
					public getCoroutineContext(): any;
					public getDefaultPref(): globalAndroid.content.SharedPreferences;
					public onDestroy(): void;
					public setJob(param0: kotlinx.coroutines.Job): void;
					public setDispatcher(param0: kotlinx.coroutines.CoroutineDispatcher): void;
					public getDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export abstract class AppScopeTileService {
					public static class: java.lang.Class<com.xfl.msgbot.utils.AppScopeTileService>;
					public a: kotlinx.coroutines.CoroutineDispatcher;
					public b: any;
					public c: any;
					public d: kotlinx.coroutines.Job;
					public attachBaseContext(param0: globalAndroid.content.Context): void;
					public getLocalBroadcastManager(): androidx.localbroadcastmanager.content.LocalBroadcastManager;
					public onCreate(): void;
					public constructor();
					public constructor(param0: kotlinx.coroutines.CoroutineDispatcher);
					public getJob(): kotlinx.coroutines.Job;
					public getCoroutineContext(): any;
					public getDefaultPref(): globalAndroid.content.SharedPreferences;
					public onDestroy(): void;
					public setJob(param0: kotlinx.coroutines.Job): void;
					public setDispatcher(param0: kotlinx.coroutines.CoroutineDispatcher): void;
					public getDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class CaptureUtil {
					public static class: java.lang.Class<com.xfl.msgbot.utils.CaptureUtil>;
					public static INSTANCE: com.xfl.msgbot.utils.CaptureUtil;
					public static "<clinit>"(): void;
					public captureRecyclerView(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
					public captureRecyclerView(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
					public captureView(param0: globalAndroid.view.View): void;
					public constructor();
					public captureActivity(param0: globalAndroid.app.Activity): void;
					public a(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class Decompress {
					public static class: java.lang.Class<com.xfl.msgbot.utils.Decompress>;
					public static INSTANCE: com.xfl.msgbot.utils.Decompress;
					public static "<clinit>"(): void;
					public unzipFromAssets(param0: globalAndroid.content.Context, param1: string, param2: string): void;
					public constructor();
					public unzip(param0: java.io.InputStream, param1: string): void;
					public unzip(param0: string, param1: string): void;
					public unzipFromAssets(param0: globalAndroid.content.Context, param1: string, param2: java.io.File): void;
					public a(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class DefensiveURLSpan {
					public static class: java.lang.Class<com.xfl.msgbot.utils.DefensiveURLSpan>;
					public a: string;
					public b: com.xfl.msgbot.utils.DefensiveURLSpan.OnClickListener;
					public constructor(param0: string, param1: com.xfl.msgbot.utils.DefensiveURLSpan.OnClickListener);
					public onClick(param0: globalAndroid.view.View): void;
				}
				export module DefensiveURLSpan {
					export class OnClickListener {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DefensiveURLSpan.OnClickListener>;
						/**
						 * Constructs a new instance of the com.xfl.msgbot.utils.DefensiveURLSpan$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(param0: globalAndroid.view.View, param1: string): void;
						});
						public constructor();
						public onClick(param0: globalAndroid.view.View, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class DomesticBroadcast {
					public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast>;
					public static a: java.util.ArrayList<com.xfl.msgbot.utils.DomesticBroadcast.a>;
					public static b: com.xfl.msgbot.utils.DomesticBroadcast;
					public static "<clinit>"(): void;
					public constructor();
					public unregisterReceiver(param0: com.xfl.msgbot.utils.DomesticBroadcast.Receiver): void;
					public registerReceiver(param0: com.xfl.msgbot.utils.DomesticBroadcast.Receiver, param1: com.xfl.msgbot.utils.DomesticBroadcast.Filter): void;
					public registerReceiver(param0: com.xfl.msgbot.utils.DomesticBroadcast.Receiver): void;
				}
				export module DomesticBroadcast {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast.Companion>;
						public constructor();
						public constructor(param0: any);
						public getInstance(): com.xfl.msgbot.utils.DomesticBroadcast;
						public sendBroadcast(param0: any, param1: com.xfl.msgbot.utils.DomesticBroadcast.Filter): void;
					}
					export class Filter {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast.Filter>;
						public a: string;
						public getAction(): string;
						public constructor();
						public constructor(param0: string);
					}
					export class Receiver {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast.Receiver>;
						/**
						 * Constructs a new instance of the com.xfl.msgbot.utils.DomesticBroadcast$Receiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReceive(param0: com.xfl.msgbot.utils.DomesticBroadcast.Return<any>): void;
						});
						public constructor();
						public onReceive(param0: com.xfl.msgbot.utils.DomesticBroadcast.Return<any>): void;
					}
					export class Return<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast.Return<any>>;
						public a: T;
						public b: com.xfl.msgbot.utils.DomesticBroadcast.Filter;
						public copy(param0: T, param1: com.xfl.msgbot.utils.DomesticBroadcast.Filter): com.xfl.msgbot.utils.DomesticBroadcast.Return<T>;
						public constructor(param0: T, param1: com.xfl.msgbot.utils.DomesticBroadcast.Filter);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getValue(): T;
						public component2(): com.xfl.msgbot.utils.DomesticBroadcast.Filter;
						public component1(): T;
						public getFilter(): com.xfl.msgbot.utils.DomesticBroadcast.Filter;
						public toString(): string;
					}
					export class a {
						public static class: java.lang.Class<com.xfl.msgbot.utils.DomesticBroadcast.a>;
						public a: com.xfl.msgbot.utils.DomesticBroadcast.Receiver;
						public b: com.xfl.msgbot.utils.DomesticBroadcast.Filter;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: com.xfl.msgbot.utils.DomesticBroadcast.Receiver, param1: com.xfl.msgbot.utils.DomesticBroadcast.Filter);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class FileManager {
					public static class: java.lang.Class<com.xfl.msgbot.utils.FileManager>;
					public static INSTANCE: com.xfl.msgbot.utils.FileManager;
					public static "<clinit>"(): void;
					public append(param0: java.io.File, param1: string): void;
					public constructor();
					public write(param0: java.io.File, param1: string): void;
					public read(param0: java.io.File): string;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.xfl.msgbot.utils.FileUtils>;
					public static INSTANCE: com.xfl.msgbot.utils.FileUtils;
					public static "<clinit>"(): void;
					public delete(param0: string): boolean;
					public minus(param0: string): boolean;
					public constructor();
					public write(param0: string, param1: string, param2: boolean): string;
					public read(param0: string, param1: string): string;
					public get(param0: string, param1: string): string;
					public create(param0: string): java.lang.Boolean;
					public set(param0: string, param1: string): string;
					public rangeTo(param0: string): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class Glide4Engine {
					public static class: java.lang.Class<com.xfl.msgbot.utils.Glide4Engine>;
					public loadThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public constructor();
					public loadImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public loadGifThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public loadGifImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public supportAnimatedGif(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class KeyboardVisibilityUtils {
					public static class: java.lang.Class<com.xfl.msgbot.utils.KeyboardVisibilityUtils>;
					public a: globalAndroid.view.Window;
					public b: any;
					public c: any;
					public d: globalAndroid.graphics.Rect;
					public e: number;
					public f: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
					public static "<clinit>"(): void;
					public constructor(param0: globalAndroid.view.Window, param1: any, param2: any);
					public detachKeyboardListeners(): void;
				}
				export module KeyboardVisibilityUtils {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.utils.KeyboardVisibilityUtils.Companion>;
						public constructor();
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class LanguageContextWrapper {
					public static class: java.lang.Class<com.xfl.msgbot.utils.LanguageContextWrapper>;
					public static "<clinit>"(): void;
					public constructor(param0: globalAndroid.content.Context);
				}
				export module LanguageContextWrapper {
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.utils.LanguageContextWrapper.Companion>;
						public constructor();
						public constructor(param0: any);
						public setSystemLocale(param0: globalAndroid.content.res.Configuration, param1: java.util.Locale): void;
						public setSystemLocaleLegacy(param0: globalAndroid.content.res.Configuration, param1: java.util.Locale): void;
						public getSystemLocaleLegacy(param0: globalAndroid.content.res.Configuration): java.util.Locale;
						public wrap(param0: globalAndroid.content.Context, param1: java.util.Locale): com.xfl.msgbot.utils.LanguageContextWrapper;
						public getSystemLocale(param0: globalAndroid.content.res.Configuration): java.util.Locale;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class PackageItem extends androidx.recyclerview.widget.RecyclerView.Adapter<com.xfl.msgbot.utils.PackageItemHolder> implements com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.SectionedAdapter  {
					public static class: java.lang.Class<com.xfl.msgbot.utils.PackageItem>;
					public c: globalAndroid.content.Context;
					public d: boolean;
					public e: any;
					public f: globalAndroid.content.pm.PackageManager;
					public g: java.util.ArrayList<com.xfl.msgbot.utils.misc.PackageInfo>;
					public h: java.util.ArrayList<com.xfl.msgbot.utils.misc.PackageInfo>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.xfl.msgbot.utils.PackageItemHolder;
					public getItemCount(): number;
					public filter(param0: string): void;
					public onBindViewHolder(param0: com.xfl.msgbot.utils.PackageItemHolder, param1: number): void;
					public getItemViewType(param0: number): number;
					public setItem(param0: java.util.ArrayList<com.xfl.msgbot.utils.misc.PackageInfo>): void;
					public getItemId(param0: number): number;
					public getSectionName(param0: number): string;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.xfl.msgbot.utils.misc.PackageInfo>, param2: boolean, param3: any, param4: any);
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class PackageItemHolder {
					public static class: java.lang.Class<com.xfl.msgbot.utils.PackageItemHolder>;
					public s: globalAndroid.widget.ImageView;
					public t: globalAndroid.widget.TextView;
					public u: globalAndroid.widget.TextView;
					public v: globalAndroid.widget.ImageView;
					public w: globalAndroid.widget.Spinner;
					public x: globalAndroid.widget.TextView;
					public getTitle(): globalAndroid.widget.TextView;
					public getSpinner(): globalAndroid.widget.Spinner;
					public getDelete(): globalAndroid.widget.ImageView;
					public getIcon(): globalAndroid.widget.ImageView;
					public getTxtAs(): globalAndroid.widget.TextView;
					public constructor(param0: globalAndroid.view.View);
					public getContent(): globalAndroid.widget.TextView;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class ScriptMigrator {
					public static class: java.lang.Class<com.xfl.msgbot.utils.ScriptMigrator>;
					public constructor();
					public migrateDirection(param0: boolean, param1: boolean, param2: globalAndroid.app.Activity): void;
					public isDirectionMigrationNeeded(): boolean;
					public a(param0: globalAndroid.app.Activity, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class ScrollViewListener {
					public static class: java.lang.Class<com.xfl.msgbot.utils.ScrollViewListener>;
					/**
					 * Constructs a new instance of the com.xfl.msgbot.utils.ScrollViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScrollChanged(param0: com.xfl.msgbot.utils.view.VerticalScrollView, param1: number, param2: number, param3: number, param4: number): void;
					});
					public constructor();
					public onScrollChanged(param0: com.xfl.msgbot.utils.view.VerticalScrollView, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class SharedVar {
					public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar>;
					public static ACTION_APPEND_GLOBAL_LOG: string;
					public static ACTION_APPEND_LOCAL_LOG: string;
					public static ACTION_CLEAR_GLOBAL_LOG: string;
					public static ACTION_CLEAR_LOCAL_LOG: string;
					public static ACTION_COMPILE_STATE_CHANGED: string;
					public static ACTION_MAIN_SWITCH_VALUE: string;
					public static ACTION_RECREATE_MAIN: string;
					public static ACTION_REMOVE_SCRIPT: string;
					public static ACTION_START_SERVICE: string;
					public static ACTION_STOP_SERVICE: string;
					public static ACTION_UPDATE_DEBUG_ROOM: string;
					public static ACTION_UPDATE_NOTIFICATION: string;
					public static ACTION_UPDATE_SCRIPT_POWER: string;
					public static BOT_JSON_FILENAME: string;
					public static BOT_JSON_FINE: string;
					public static COMPILE_NOTIFICATION_CHANNEL_ID: string;
					public static DEBUG_ROOM_DATA_FILENAME: string;
					public static DEBUG_ROOM_DEFAULT_ROOMNAME: string;
					public static DEBUG_ROOM_DEFAULT_SENDER: string;
					public static DEBUG_ROOM_LONG_MSG_FOLDER: string;
					public static INDEX_JS: string;
					public static MAIN_JS: string;
					public static PACKAGE_JSON_FILENAME: string;
					public static PROFILE_BOT_FILENAME: string;
					public static PROFILE_USER_FILENAME: string;
					public static RUNTIME_ERROR_NOTIFICATION_CHANNEL_ID: string;
					public static SERVICE_NOTIFICATION_CHANNEL_ID: string;
					public static a: androidNative.Array<string>;
					public static b: string;
					public static c: string;
					public static d: java.io.File;
					public static e: java.io.File;
					public static f: java.io.File;
					public static "<clinit>"(): void;
					public static getMSGBOT_AGENT(): string;
					public constructor();
				}
				export module SharedVar {
					export class Billing {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Billing>;
						public static DONATION: string;
						public static REMOVE_ADS: string;
						public constructor();
						public static "<clinit>"(): void;
					}
					export module Billing {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Billing.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Companion>;
						public constructor();
						public getBotsPath(): string;
						public constructor(param0: any);
						public setBaseFile(param0: java.io.File): void;
						public getBaseFile(): java.io.File;
						public getGlobalModulesFolder(): java.io.File;
						public getBabelModulesFolder(): java.io.File;
						public getMSGBOT_PRIVATE_AGENT(): string;
						public setGlobalModulesFolder(param0: java.io.File): void;
						public getMSGBOT_AGENT(): string;
						public getDefaultMessengers(): androidNative.Array<string>;
					}
					export class Permission {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Permission>;
						public static CHANGE_THEME_WITH_REFRESH: string;
						public constructor();
						public static "<clinit>"(): void;
					}
					export module Permission {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Permission.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
					export class Pref {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Pref>;
						public static ABOUT_YOUR_PERSONAL_INFORMATION_SHOWN: string;
						public static ACTIVATION: string;
						public static BASE_PATH: string;
						public static CACHED_SETTINGS: string;
						public static DEBUG_ROOM: string;
						public static DEBUG_ROOM_IS_GROUP_CHAT: string;
						public static DEBUG_ROOM_NAME: string;
						public static DEBUG_ROOM_PACKAGE_NAME: string;
						public static DEBUG_ROOM_SENDER: string;
						public static EDITOR_COLLECT_ERRORS: string;
						public static EDITOR_COLLECT_WARNINGS: string;
						public static EDITOR_LAST_SELECTION: string;
						public static LAST_COMPILE_SUCCESS: string;
						public static LOGGER_SCROLL_STATE: string;
						public static NOTI_READ_ALERT_NEVER_SEE_AGAIN: string;
						public static OFF_ON_RUNTIME_ERROR: string;
						public static OPTIMIZATION: string;
						public static PACKAGE_NOTIFICATION_TYPE: string;
						public static PACKAGE_NOTIFICATION_TYPE_IS_CUSTOM: string;
						public static PACKAGE_NOTIFICATION_TYPE_NAME: string;
						public static PUBLIC_SETTINGS: string;
						public static SCRIPT_POWER: string;
						public static SCRIPT_SETTINGS: string;
						public static SCROLL_STATE: string;
						public static SHOW_BOT_NAME: string;
						public static SHOW_BOT_PROFILE_IMAGE: string;
						public static SHOW_USER_PROFILE_IMAGE: string;
						public static SOCKET_CONNECTION_SWITCH: string;
						public static SOCKET_PORT_NUMBER: string;
						public static TARGET_MESSENGERS: string;
						public static THEME: string;
						public static USE_LEGACY_API: string;
						public constructor();
						public static "<clinit>"(): void;
					}
					export module Pref {
						export class Pref {
							public static class: java.lang.Class<com.xfl.msgbot.utils.SharedVar.Pref.Pref>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class SwipeController {
					public static class: java.lang.Class<com.xfl.msgbot.utils.SwipeController>;
					public e: java.util.HashMap<java.lang.Integer,com.xfl.msgbot.utils.SwipeController.State>;
					public f: com.xfl.msgbot.utils.SwipeController.Action;
					public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public static c(param0: com.xfl.msgbot.utils.SwipeController, param1: globalAndroid.graphics.Canvas, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.ViewHolder, param4: number, param5: number, param6: boolean, param7: globalAndroid.view.View, param8: globalAndroid.view.MotionEvent): boolean;
					public onChildDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder, param3: number, param4: number, param5: number, param6: boolean): void;
					public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public convertToAbsoluteDirection(param0: number, param1: number): number;
					public d(param0: androidx.recyclerview.widget.RecyclerView, param1: boolean): void;
					public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public constructor(param0: com.xfl.msgbot.utils.SwipeController.Action);
				}
				export module SwipeController {
					export class Action {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SwipeController.Action>;
						/**
						 * Constructs a new instance of the com.xfl.msgbot.utils.SwipeController$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onState(param0: com.xfl.msgbot.utils.SwipeController.State, param1: number): void;
						});
						public constructor();
						public onState(param0: com.xfl.msgbot.utils.SwipeController.State, param1: number): void;
					}
					export module Action {
						export class DefaultImpls {
							public static class: java.lang.Class<com.xfl.msgbot.utils.SwipeController.Action.DefaultImpls>;
							public static onState(param0: com.xfl.msgbot.utils.SwipeController.Action, param1: com.xfl.msgbot.utils.SwipeController.State, param2: number): void;
						}
					}
					export class State {
						public static class: java.lang.Class<com.xfl.msgbot.utils.SwipeController.State>;
						public static LEFT_OPEN: com.xfl.msgbot.utils.SwipeController.State;
						public static NONE: com.xfl.msgbot.utils.SwipeController.State;
						public static RIGHT_OPEN: com.xfl.msgbot.utils.SwipeController.State;
						public static values(): androidNative.Array<com.xfl.msgbot.utils.SwipeController.State>;
						public static "<clinit>"(): void;
						public constructor(param0: string, param1: number);
						public static valueOf(param0: string): com.xfl.msgbot.utils.SwipeController.State;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class TextWatcherAuto {
					public static class: java.lang.Class<com.xfl.msgbot.utils.TextWatcherAuto>;
					public a: any;
					public b: any;
					public c: any;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public constructor();
					public constructor(param0: any, param1: any, param2: any);
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class ThemeChanged {
					public static class: java.lang.Class<com.xfl.msgbot.utils.ThemeChanged>;
					/**
					 * Constructs a new instance of the com.xfl.msgbot.utils.ThemeChanged interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onThemeChanged(param0: string, param1: java.lang.Integer): void;
					});
					public constructor();
					public onThemeChanged(param0: string, param1: java.lang.Integer): void;
				}
				export module ThemeChanged {
					export class DefaultImpls {
						public static class: java.lang.Class<com.xfl.msgbot.utils.ThemeChanged.DefaultImpls>;
						public static onThemeChanged(param0: com.xfl.msgbot.utils.ThemeChanged, param1: string, param2: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export class ThreadUtils {
					public static class: java.lang.Class<com.xfl.msgbot.utils.ThreadUtils>;
					public static INSTANCE: com.xfl.msgbot.utils.ThreadUtils;
					public static c: globalAndroid.os.Handler;
					public static d: boolean;
					public runOnUiThread(param0: java.util.concurrent.FutureTask<any>): java.util.concurrent.FutureTask<any>;
					public postOnUiThreadDelayed(param0: globalAndroid.app.Activity, param1: java.lang.Runnable, param2: number): void;
					public constructor();
					public setThreadPriorityAudio(param0: number): void;
					public postOnUiThread(param0: java.lang.Runnable): void;
					public runOnUiThreadBlocking(param0: java.util.concurrent.Callable<any>): any;
					public setWillOverrideUiThread(param0: boolean): void;
					public b(): boolean;
					public runOnUiThreadBlockingNoException(param0: java.util.concurrent.Callable<any>): any;
					public assertOnBackgroundThread(): void;
					public newSingleThreadExecutor(param0: string): java.util.concurrent.ExecutorService;
					public static "<clinit>"(): void;
					public newCachedThreadPool(param0: string): java.util.concurrent.ExecutorService;
					public newFixedThreadPool(param0: string, param1: number): java.util.concurrent.ExecutorService;
					public a(): globalAndroid.os.Handler;
					public setUiThread(param0: globalAndroid.os.Looper): void;
					public runOnUiThread(param0: java.lang.Runnable): any;
					public checkUiThread(): void;
					public postOnUiThread(param0: java.util.concurrent.FutureTask<any>): java.util.concurrent.FutureTask<any>;
					public runOnUiThread(param0: java.util.concurrent.Callable<any>): java.util.concurrent.FutureTask<any>;
					public runOnUiThreadBlocking(param0: java.lang.Runnable): void;
					public assertOnUiThread(): void;
					public getUiThreadLooper(): globalAndroid.os.Looper;
					public setThreadAssertsDisabledForTesting(param0: boolean): void;
					public postOnUiThreadDelayed(param0: java.lang.Runnable, param1: number): void;
				}
				export module ThreadUtils {
					export class CalledByNative {
						public static class: java.lang.Class<com.xfl.msgbot.utils.ThreadUtils.CalledByNative>;
						/**
						 * Constructs a new instance of the com.xfl.msgbot.utils.ThreadUtils$CalledByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
					export class CounterThreadFactory {
						public static class: java.lang.Class<com.xfl.msgbot.utils.ThreadUtils.CounterThreadFactory>;
						public a: number;
						public b: string;
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module coroutine {
					export class UICoroutineScope {
						public static class: java.lang.Class<com.xfl.msgbot.utils.coroutine.UICoroutineScope>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class ARIACipher {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.ARIACipher>;
						public a: com.xfl.msgbot.utils.misc.ARIAEngine;
						public constructor(param0: androidNative.Array<number>);
						public encrypt(param0: androidNative.Array<number>): androidNative.Array<number>;
						public static "<clinit>"(): void;
						public encryptString(param0: string): string;
						public encryptString(param0: string, param1: string): string;
						public decryptString(param0: string): string;
						public decryptString(param0: string, param1: string): string;
						public decrypt(param0: androidNative.Array<number>): androidNative.Array<number>;
						public constructor(param0: string);
					}
					export module ARIACipher {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.ARIACipher.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class ARIAEngine {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.ARIAEngine>;
						public static i: androidNative.Array<number>;
						public static j: androidNative.Array<number>;
						public static k: androidNative.Array<number>;
						public static l: androidNative.Array<number>;
						public static m: androidNative.Array<number>;
						public static n: androidNative.Array<number>;
						public static o: androidNative.Array<number>;
						public static p: androidNative.Array<number>;
						public static q: androidNative.Array<androidNative.Array<number>>;
						public static r: androidNative.Array<androidNative.Array<number>>;
						public setupDecRoundKeys(): void;
						public g(param0: number): number;
						public getKeySize(): number;
						public static "<clinit>"(): void;
						public b(param0: number): number;
						public a(param0: number): number;
						public encrypt(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
						public f(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number, param3: androidNative.Array<number>, param4: number): void;
						public setKeySize(param0: number): void;
						public h(param0: number, param1: number, param2: number, param3: number): number;
						public setupRoundKeys(): void;
						public decrypt(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
						public e(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number, param4: androidNative.Array<number>, param5: number): void;
						public constructor(param0: number);
						public setupEncRoundKeys(): void;
						public decrypt(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number): void;
						public encrypt(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number): void;
						public d(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number): void;
						public setKey(param0: androidNative.Array<number>): void;
						public c(param0: number): number;
						public reset(): void;
					}
					export module ARIAEngine {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.ARIAEngine.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class BadgeDrawerArrowDrawable {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.BadgeDrawerArrowDrawable>;
						public n: globalAndroid.graphics.Paint;
						public o: globalAndroid.graphics.Paint;
						public p: globalAndroid.text.TextPaint;
						public q: string;
						public r: boolean;
						public getBackgroundColor(): number;
						public setBackgroundMarginColor(param0: number): void;
						public static "<clinit>"(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getTextColor(): number;
						public isEnabled(): boolean;
						public getText(): string;
						public setEnabled(param0: boolean): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setText(param0: string): void;
						public setTextColor(param0: number): void;
						public getBackgroundMarginColor(): number;
						public setBackgroundColor(param0: number): void;
					}
					export module BadgeDrawerArrowDrawable {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.BadgeDrawerArrowDrawable.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class BlurDrawable {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.BlurDrawable>;
						public a: java.lang.ref.WeakReference<globalAndroid.view.View>;
						public b: globalAndroid.graphics.Bitmap;
						public c: globalAndroid.graphics.Paint;
						public d: number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.view.View);
						public getOpacity(): number;
						public constructor(param0: globalAndroid.view.View, param1: number);
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class Closer {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.Closer>;
						public static INSTANCE: com.xfl.msgbot.utils.misc.Closer;
						public constructor();
						public static "<clinit>"(): void;
						public closeSilently(param0: androidNative.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class DesEncrypter {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.DesEncrypter>;
						public a: javax.crypto.Cipher;
						public b: javax.crypto.Cipher;
						public constructor(param0: javax.crypto.SecretKey);
						public setDcipher(param0: javax.crypto.Cipher): void;
						public static "<clinit>"(): void;
						public decrypt(param0: string): string;
						public getEcipher(): javax.crypto.Cipher;
						public setEcipher(param0: javax.crypto.Cipher): void;
						public getDcipher(): javax.crypto.Cipher;
						public encrypt(param0: string): string;
					}
					export module DesEncrypter {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.DesEncrypter.Companion>;
							public constructor();
							public encrypt(param0: string, param1: string): androidNative.Array<number>;
							public constructor(param0: any);
							public decrypt(param0: string, param1: androidNative.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class LockableBottomSheetBehavior<V>  extends com.google.android.material.bottomsheet.BottomSheetBehavior<any> {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.LockableBottomSheetBehavior<any>>;
						public O: boolean;
						public constructor();
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public static "<clinit>"(): void;
						public constructor(param0: globalAndroid.content.Context);
						public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: androidNative.Array<number>): void;
						public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View): void;
						public setLocked(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public onNestedPreFling(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number): boolean;
						public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number): boolean;
					}
					export module LockableBottomSheetBehavior {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.LockableBottomSheetBehavior.Companion>;
							public constructor();
							public from(param0: globalAndroid.view.View): com.xfl.msgbot.utils.misc.LockableBottomSheetBehavior<any>;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class MaterialProgressDrawable {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable>;
						public static DEFAULT: number;
						public static LARGE: number;
						public static k: androidNative.Array<number>;
						public static l: globalAndroid.view.animation.LinearInterpolator;
						public static m: com.xfl.msgbot.utils.misc.MaterialProgressDrawable.a;
						public static n: com.xfl.msgbot.utils.misc.MaterialProgressDrawable.c;
						public static o: globalAndroid.view.animation.AccelerateDecelerateInterpolator;
						public b: java.util.ArrayList<globalAndroid.view.animation.Animation>;
						public c: com.xfl.msgbot.utils.misc.MaterialProgressDrawable.b;
						public d: number;
						public e: globalAndroid.content.res.Resources;
						public f: globalAndroid.view.animation.Animation;
						public g: number;
						public h: number;
						public i: number;
						public j: globalAndroid.view.animation.Animation;
						public a(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public setProgressRotation(param0: number): void;
						public getIntrinsicWidth(): number;
						public setArrowScale(param0: number): void;
						public static "<clinit>"(): void;
						public getIntrinsicHeight(): number;
						public showArrow(param0: boolean): void;
						public setStartEndTrim(param0: number, param1: number): void;
						public getAlpha(): number;
						public getOpacity(): number;
						public isRunning(): boolean;
						public setAlpha(param0: number): void;
						public stop(): void;
						public setColorSchemeColors(param0: androidNative.Array<number>): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public start(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
						public setBackgroundColor(param0: number): void;
						public updateSizes(param0: number): void;
					}
					export module MaterialProgressDrawable {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable.Companion>;
							public constructor();
							public constructor(param0: any);
						}
						export class ProgressDrawableSize {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable.ProgressDrawableSize>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.misc.MaterialProgressDrawable$ProgressDrawableSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class a {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable.a>;
							public constructor();
							public getInterpolation(param0: number): number;
						}
						export class b {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable.b>;
							public e: number;
							public f: number;
							public g: number;
							public h: number;
							public i: number;
							public j: androidNative.Array<number>;
							public k: number;
							public l: number;
							public m: number;
							public n: number;
							public o: boolean;
							public p: globalAndroid.graphics.Path;
							public q: number;
							public r: number;
							public s: number;
							public t: number;
							public u: number;
							public v: globalAndroid.graphics.Paint;
							public w: number;
							public d(): void;
							public a(): void;
							public c(param0: boolean): void;
							public b(): void;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable.Callback);
						}
						export class c {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.MaterialProgressDrawable.c>;
							public constructor();
							public getInterpolation(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class PKCS5Padding {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.PKCS5Padding>;
						public static INSTANCE: com.xfl.msgbot.utils.misc.PKCS5Padding;
						public unpad(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
						public constructor();
						public static "<clinit>"(): void;
						public pad(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class PackageInfo {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.PackageInfo>;
						public a: string;
						public b: string;
						public c: string;
						public d: java.lang.Long;
						public e: java.lang.Integer;
						public f: globalAndroid.graphics.drawable.Drawable;
						public getAppName(): string;
						public component6(): globalAndroid.graphics.drawable.Drawable;
						public component3(): string;
						public static "<clinit>"(): void;
						public component5(): java.lang.Integer;
						public prettyOutput(): string;
						public getIcon(): globalAndroid.graphics.drawable.Drawable;
						public component1(): string;
						public copy(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Integer, param5: globalAndroid.graphics.drawable.Drawable): com.xfl.msgbot.utils.misc.PackageInfo;
						public equals(param0: any): boolean;
						public getVersionName(): string;
						public hashCode(): number;
						public getVersionCode(): java.lang.Long;
						public getVersionCodeMajor(): java.lang.Integer;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Integer, param5: globalAndroid.graphics.drawable.Drawable);
						public component4(): java.lang.Long;
						public component2(): string;
						public getPackageName(): string;
					}
					export module PackageInfo {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.PackageInfo.Companion>;
							public constructor();
							public newInstance(param0: globalAndroid.content.Context, param1: string): com.xfl.msgbot.utils.misc.PackageInfo;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class RC4 {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RC4>;
						public static a: androidNative.Array<number>;
						public static b: androidNative.Array<number>;
						public static c: number;
						public constructor(param0: androidNative.Array<number>);
						public encrypt(param0: androidNative.Array<number>): androidNative.Array<number>;
						public static "<clinit>"(): void;
						public decrypt(param0: androidNative.Array<number>): androidNative.Array<number>;
					}
					export module RC4 {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RC4.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class RSA {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RSA>;
						public constructor();
						public buildKeyAlgorithm(param0: java.lang.Integer): java.security.KeyPair;
						public encrypt(param0: java.security.PrivateKey, param1: string): androidNative.Array<number>;
						public decrypt(param0: java.security.PublicKey, param1: androidNative.Array<number>): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class RandomUserAgent {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RandomUserAgent>;
						public static INSTANCE: com.xfl.msgbot.utils.misc.RandomUserAgent;
						public static a: java.util.HashMap<string,androidNative.Array<string>>;
						public static b: java.util.HashMap<string,java.lang.Double>;
						public constructor();
						public static "<clinit>"(): void;
						public static getRandomUserAgent(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class RecyclerItemClickListener {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RecyclerItemClickListener>;
						public a: com.xfl.msgbot.utils.misc.RecyclerItemClickListener.OnItemClickListener;
						public b: globalAndroid.view.GestureDetector;
						public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.xfl.msgbot.utils.misc.RecyclerItemClickListener.OnItemClickListener);
						public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export module RecyclerItemClickListener {
						export class OnItemClickListener {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.RecyclerItemClickListener.OnItemClickListener>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.misc.RecyclerItemClickListener$OnItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onItemClick(param0: globalAndroid.view.View, param1: number): void;
							});
							public constructor();
							public onItemClick(param0: globalAndroid.view.View, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class SmoothCanvas {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.SmoothCanvas>;
						public a: globalAndroid.graphics.Canvas;
						public b: globalAndroid.graphics.Paint;
						public save(): number;
						public skew(param0: number, param1: number): void;
						public drawBitmapMesh(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: androidNative.Array<number>, param4: number, param5: androidNative.Array<number>, param6: number, param7: globalAndroid.graphics.Paint): void;
						public restoreToCount(param0: number): void;
						public saveLayer(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Paint, param5: number): number;
						public saveLayerAlpha(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public clipRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Region.Op): boolean;
						public drawRGB(param0: number, param1: number, param2: number): void;
						public drawOval(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Paint): void;
						public drawVertices(param0: globalAndroid.graphics.Canvas.VertexMode, param1: number, param2: androidNative.Array<number>, param3: number, param4: androidNative.Array<number>, param5: number, param6: androidNative.Array<number>, param7: number, param8: androidNative.Array<number>, param9: number, param10: number, param11: globalAndroid.graphics.Paint): void;
						public drawRect(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Paint): void;
						public clipRect(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Region.Op): boolean;
						public drawLines(param0: androidNative.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public drawLines(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Paint): void;
						public drawText(param0: string, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public drawPoints(param0: androidNative.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public drawRoundRect(param0: globalAndroid.graphics.RectF, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public clipRect(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Region.Op): boolean;
						public setDelegate(param0: globalAndroid.graphics.Canvas): void;
						public concat(param0: globalAndroid.graphics.Matrix): void;
						public drawARGB(param0: number, param1: number, param2: number, param3: number): void;
						public drawLine(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Paint): void;
						public constructor();
						public drawBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Paint): void;
						public drawTextOnPath(param0: string, param1: globalAndroid.graphics.Path, param2: number, param3: number, param4: globalAndroid.graphics.Paint): void;
						public drawText(param0: androidNative.Array<string>, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						public setBitmap(param0: globalAndroid.graphics.Bitmap): void;
						public getClipBounds(param0: globalAndroid.graphics.Rect): boolean;
						public drawPicture(param0: globalAndroid.graphics.Picture, param1: globalAndroid.graphics.Rect): void;
						public drawPicture(param0: globalAndroid.graphics.Picture): void;
						public drawBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.Paint): void;
						public drawArc(param0: globalAndroid.graphics.RectF, param1: number, param2: number, param3: boolean, param4: globalAndroid.graphics.Paint): void;
						public quickReject(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Canvas.EdgeType): boolean;
						public isOpaque(): boolean;
						public drawPicture(param0: globalAndroid.graphics.Picture, param1: globalAndroid.graphics.RectF): void;
						public saveLayerAlpha(param0: globalAndroid.graphics.RectF, param1: number, param2: number): number;
						public quickReject(param0: globalAndroid.graphics.Path, param1: globalAndroid.graphics.Canvas.EdgeType): boolean;
						public clipRect(param0: number, param1: number, param2: number, param3: number): boolean;
						public drawText(param0: string, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Paint): void;
						public drawPosText(param0: string, param1: androidNative.Array<number>, param2: globalAndroid.graphics.Paint): void;
						public drawPosText(param0: androidNative.Array<string>, param1: number, param2: number, param3: androidNative.Array<number>, param4: globalAndroid.graphics.Paint): void;
						public clipPath(param0: globalAndroid.graphics.Path, param1: globalAndroid.graphics.Region.Op): boolean;
						public drawRect(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Paint): void;
						public rotate(param0: number): void;
						public clipPath(param0: globalAndroid.graphics.Path): boolean;
						public drawColor(param0: number): void;
						public drawColor(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public getDelegate(): globalAndroid.graphics.Canvas;
						public drawBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.RectF, param3: globalAndroid.graphics.Paint): void;
						public drawPaint(param0: globalAndroid.graphics.Paint): void;
						public restore(): void;
						public quickReject(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Canvas.EdgeType): boolean;
						public saveLayer(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Paint, param2: number): number;
						public getHeight(): number;
						public getDrawFilter(): globalAndroid.graphics.DrawFilter;
						public clipRect(param0: globalAndroid.graphics.RectF): boolean;
						public drawPoints(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Paint): void;
						public clipRect(param0: globalAndroid.graphics.Rect): boolean;
						public drawBitmap(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: globalAndroid.graphics.Paint): void;
						public setDrawFilter(param0: globalAndroid.graphics.DrawFilter): void;
						public setMatrix(param0: globalAndroid.graphics.Matrix): void;
						public drawBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public getWidth(): number;
						public drawPoint(param0: number, param1: number, param2: globalAndroid.graphics.Paint): void;
						public translate(param0: number, param1: number): void;
						public scale(param0: number, param1: number): void;
						public drawPath(param0: globalAndroid.graphics.Path, param1: globalAndroid.graphics.Paint): void;
						public getMatrix(param0: globalAndroid.graphics.Matrix): void;
						public drawRect(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Paint): void;
						public drawTextOnPath(param0: androidNative.Array<string>, param1: number, param2: number, param3: globalAndroid.graphics.Path, param4: number, param5: number, param6: globalAndroid.graphics.Paint): void;
						public drawCircle(param0: number, param1: number, param2: number, param3: globalAndroid.graphics.Paint): void;
						public getSaveCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export class TextViewUndoRedo {
						public static class: java.lang.Class<com.xfl.msgbot.utils.misc.TextViewUndoRedo>;
						public a: globalAndroid.widget.TextView;
						public b: boolean;
						public c: com.xfl.msgbot.utils.misc.TextViewUndoRedo.a;
						public d: com.xfl.msgbot.utils.misc.TextViewUndoRedo.c;
						public disconnect(): void;
						public getCanUndo(): boolean;
						public setMaxHistorySize(param0: number): void;
						public clearHistory(): void;
						public redo(): void;
						public restorePersistentState(param0: globalAndroid.content.SharedPreferences, param1: string): boolean;
						public getCanRedo(): boolean;
						public storePersistentState(param0: globalAndroid.content.SharedPreferences.Editor, param1: string): void;
						public connect(): void;
						public constructor(param0: globalAndroid.widget.TextView);
						public undo(): void;
					}
					export module TextViewUndoRedo {
						export class a {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.TextViewUndoRedo.a>;
							public a(param0: com.xfl.msgbot.utils.misc.TextViewUndoRedo.b): void;
							public c(): void;
							public constructor(param0: com.xfl.msgbot.utils.misc.TextViewUndoRedo);
							public b(): void;
						}
						export class b {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.TextViewUndoRedo.b>;
							public a: number;
							public b: string;
							public c: string;
							public constructor(param0: number, param1: string, param2: string);
						}
						export class c {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.TextViewUndoRedo.c>;
							public a: string;
							public b: string;
							public c: number;
							public d: number;
							public afterTextChanged(param0: globalAndroid.text.Editable): void;
							public constructor(param0: com.xfl.msgbot.utils.misc.TextViewUndoRedo);
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module motion {
						export class FabTransform {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.FabTransform>;
							public static e: androidNative.Array<string>;
							public b: number;
							public c: java.lang.Integer;
							public d: globalAndroid.graphics.PorterDuff.Mode;
							public createAnimator(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.transition.TransitionValues, param2: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
							public getTransitionProperties(): androidNative.Array<string>;
							public constructor(param0: number, param1: number, param2: java.lang.Integer, param3: globalAndroid.graphics.PorterDuff.Mode);
							public a(param0: globalAndroid.transition.TransitionValues): void;
							public static "<clinit>"(): void;
							public captureEndValues(param0: globalAndroid.transition.TransitionValues): void;
							public captureStartValues(param0: globalAndroid.transition.TransitionValues): void;
						}
						export module FabTransform {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.FabTransform.Companion>;
								public constructor(param0: any);
								public setup(param0: globalAndroid.app.Activity, param1: globalAndroid.view.View): boolean;
								public constructor();
								public addExtras(param0: globalAndroid.content.Intent, param1: number, param2: number, param3: java.lang.Integer, param4: globalAndroid.graphics.PorterDuff.Mode): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module motion {
						export class GravityArcMotion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.GravityArcMotion>;
							public static d: number;
							public a: number;
							public b: number;
							public c: number;
							public constructor();
							public getPath(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Path;
							public setMaximumAngle(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setMinimumHorizontalAngle(param0: number): void;
							public setMinimumVerticalAngle(param0: number): void;
							public static "<clinit>"(): void;
						}
						export module GravityArcMotion {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.GravityArcMotion.Companion>;
								public toTangent$app_release(param0: number): number;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module motion {
						export module google {
							export class AnimatorUtils {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.AnimatorUtils>;
								public static INSTANCE: com.xfl.msgbot.utils.misc.motion.google.AnimatorUtils;
								public startLoadingAnimation(param0: globalAndroid.widget.ImageView): void;
								public static "<clinit>"(): void;
								public constructor();
							}
							export module AnimatorUtils {
								export class NoPauseAnimator {
									public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.AnimatorUtils.NoPauseAnimator>;
									public a: globalAndroid.animation.Animator;
									public b: globalAndroid.util.ArrayMap<globalAndroid.animation.Animator.AnimatorListener,globalAndroid.animation.Animator.AnimatorListener>;
									public cancel(): void;
									public setupStartValues(): void;
									public getListeners(): java.util.ArrayList<globalAndroid.animation.Animator.AnimatorListener>;
									public setDuration(param0: number): globalAndroid.animation.Animator;
									public removeListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
									public isStarted(): boolean;
									public setupEndValues(): void;
									public addListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
									public getDuration(): number;
									public setInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
									public getInterpolator(): globalAndroid.animation.TimeInterpolator;
									public setStartDelay(param0: number): void;
									public isPaused(): boolean;
									public isRunning(): boolean;
									public setTarget(param0: any): void;
									public start(): void;
									public constructor(param0: globalAndroid.animation.Animator);
									public end(): void;
									public getStartDelay(): number;
									public removeAllListeners(): void;
								}
								export class a {
									public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.AnimatorUtils.a>;
									public a: globalAndroid.animation.Animator;
									public b: globalAndroid.animation.Animator.AnimatorListener;
									public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
									public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
									public constructor(param0: globalAndroid.animation.Animator, param1: globalAndroid.animation.Animator.AnimatorListener);
									public onAnimationStart(param0: globalAndroid.animation.Animator): void;
									public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module motion {
						export module google {
							export class ObservableColorMatrix {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.ObservableColorMatrix>;
								public static b: globalAndroid.util.Property<com.xfl.msgbot.utils.misc.motion.google.ObservableColorMatrix,java.lang.Float>;
								public a: number;
								public static "<clinit>"(): void;
								public getSaturation(): number;
								public constructor();
								public setSaturation(param0: number): void;
							}
							export module ObservableColorMatrix {
								export class Companion {
									public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.ObservableColorMatrix.Companion>;
									public constructor();
									public constructor(param0: any);
									public getSATURATION(): globalAndroid.util.Property<com.xfl.msgbot.utils.misc.motion.google.ObservableColorMatrix,java.lang.Float>;
								}
								export abstract class FloatProperty<T>  extends globalAndroid.util.Property<any,java.lang.Float> {
									public static class: java.lang.Class<com.xfl.msgbot.utils.misc.motion.google.ObservableColorMatrix.FloatProperty<any>>;
									public constructor(param0: string);
									public set(param0: any, param1: java.lang.Float): void;
									public setValue(param0: any, param1: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module topsheet {
						export class CustomDragHelper {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper>;
							public static DIRECTION_ALL: number;
							public static DIRECTION_HORIZONTAL: number;
							public static DIRECTION_VERTICAL: number;
							public static EDGE_ALL: number;
							public static EDGE_BOTTOM: number;
							public static EDGE_LEFT: number;
							public static EDGE_RIGHT: number;
							public static EDGE_TOP: number;
							public static INVALID_POINTER: number;
							public static STATE_DRAGGING: number;
							public static STATE_IDLE: number;
							public static STATE_SETTLING: number;
							public static w: globalAndroid.view.animation.Interpolator;
							public n: globalAndroid.view.VelocityTracker;
							public o: number;
							public p: number;
							public q: number;
							public r: number;
							public s: globalAndroid.widget.OverScroller;
							public t: globalAndroid.view.View;
							public u: boolean;
							public v: java.lang.Runnable;
							public settleCapturedViewAt(param0: number, param1: number): boolean;
							public tryCaptureViewForDrag$app_release(param0: globalAndroid.view.View, param1: number): boolean;
							public findTopChildUnder(param0: number, param1: number): globalAndroid.view.View;
							public flingCapturedView(param0: number, param1: number, param2: number, param3: number): void;
							public isPointerDown(param0: number): boolean;
							public setMinVelocity(param0: number): void;
							public shouldInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup, param2: com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper.Callback, param3: any);
							public g(param0: number, param1: number): void;
							public f(param0: number, param1: number, param2: java.lang.Integer): number;
							public isEdgeTouched(param0: number, param1: number): boolean;
							public l(param0: number, param1: number, param2: number): void;
							public processTouchEvent(param0: globalAndroid.view.MotionEvent): void;
							public getTouchSlop(): number;
							public smoothSlideViewTo(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public static "<clinit>"(): void;
							public getCapturedView(): globalAndroid.view.View;
							public canScroll(param0: globalAndroid.view.View, param1: boolean, param2: number, param3: number, param4: number, param5: number): boolean;
							public cancel(): void;
							public m(param0: globalAndroid.view.MotionEvent): void;
							public setEdgeTrackingEnabled(param0: number): void;
							public d(param0: number, param1: number, param2: number): number;
							public checkTouchSlop(param0: number): boolean;
							public getEdgeSize(): number;
							public captureChildView(param0: globalAndroid.view.View, param1: number): void;
							public getActivePointerId(): number;
							public j(): void;
							public i(param0: number): boolean;
							public continueSettling(param0: boolean): boolean;
							public getViewDragState(): number;
							public setDragState$app_release(param0: number): void;
							public checkTouchSlop(param0: number, param1: number): boolean;
							public h(param0: number, param1: number, param2: number, param3: number): boolean;
							public b(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public k(param0: number, param1: number, param2: number): void;
							public a(param0: number, param1: number, param2: number, param3: number): boolean;
							public isCapturedViewUnder(param0: number, param1: number): boolean;
							public isViewUnder(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public abort(): void;
							public c(param0: number, param1: number, param2: number): number;
							public getMinVelocity(): number;
							public isEdgeTouched(param0: number): boolean;
							public e(param0: number): void;
						}
						export module CustomDragHelper {
							export abstract class Callback {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper.Callback>;
								public getViewHorizontalDragRange(param0: globalAndroid.view.View): number;
								public tryCaptureView(param0: globalAndroid.view.View, param1: number): boolean;
								public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
								public constructor();
								public getOrderedChildIndex(param0: number): number;
								public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
								public clampViewPositionVertical(param0: globalAndroid.view.View, param1: java.lang.Integer, param2: java.lang.Integer): number;
								public onEdgeTouched(param0: number, param1: number): void;
								public getViewVerticalDragRange(param0: globalAndroid.view.View): number;
								public onViewCaptured(param0: globalAndroid.view.View, param1: number): void;
								public clampViewPositionHorizontal(param0: globalAndroid.view.View, param1: java.lang.Integer, param2: java.lang.Integer): number;
								public onViewDragStateChanged(param0: number): void;
								public onEdgeDragStarted(param0: number, param1: number): void;
								public onEdgeLock(param0: number): boolean;
							}
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper.Companion>;
								public constructor(param0: any);
								public create(param0: globalAndroid.view.ViewGroup, param1: com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper.Callback): com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper;
								public constructor();
								public create(param0: globalAndroid.view.ViewGroup, param1: number, param2: com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper.Callback): com.xfl.msgbot.utils.misc.topsheet.CustomDragHelper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module misc {
					export module topsheet {
						export class TopSheetBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
							public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior<any>>;
							public static STATE_COLLAPSED: number;
							public static STATE_DRAGGING: number;
							public static STATE_EXPANDED: number;
							public static STATE_HIDDEN: number;
							public static STATE_SETTLING: number;
							public e: boolean;
							public f: number;
							public g: androidx.customview.widget.ViewDragHelper;
							public h: boolean;
							public i: number;
							public j: boolean;
							public k: java.lang.ref.WeakReference<any>;
							public l: java.lang.ref.WeakReference<globalAndroid.view.View>;
							public m: com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.TopSheetCallback;
							public n: globalAndroid.view.VelocityTracker;
							public o: number;
							public p: number;
							public q: boolean;
							public r: number;
							public s: com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.mDragCallback[1];
							public b(param0: globalAndroid.view.View): globalAndroid.view.View;
							public onNestedPreFling(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number): boolean;
							public a(param0: number): void;
							public d(param0: globalAndroid.view.View, param1: number): boolean;
							public setTopSheetCallback(param0: com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.TopSheetCallback): void;
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number): boolean;
							public setHideable(param0: boolean): void;
							public onRestoreInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.os.Parcelable): void;
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
							public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
							public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View): void;
							public onSaveInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any): globalAndroid.os.Parcelable;
							public getOldState(): number;
							public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: androidNative.Array<number>): void;
							public isHideable(): boolean;
							public setOldState(param0: number): void;
							public static "<clinit>"(): void;
							public setPeekHeight(param0: number): void;
							public getState(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public getSkipCollapsed(): boolean;
							public setSkipCollapsed(param0: boolean): void;
							public setState(param0: number): void;
							public getPeekHeight(): number;
							public c(param0: number): void;
						}
						export module TopSheetBehavior {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.Companion>;
								public constrain$app_release(param0: number, param1: number, param2: number): number;
								public constructor(param0: any);
								public from(param0: globalAndroid.view.View): com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior<any>;
								public constructor();
							}
							export class SavedState {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.SavedState>;
								public b: number;
								public static "<clinit>"(): void;
								public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader, param2: number);
								public constructor(param0: globalAndroid.os.Parcelable, param1: number);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
							export module SavedState {
								export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.SavedState> {
									public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.SavedState.CREATOR>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.SavedState;
									public newArray(param0: number): androidNative.Array<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.SavedState>;
									public constructor(param0: any);
								}
							}
							export class State {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.State>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export abstract class TopSheetCallback {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.TopSheetCallback>;
								public onSlide(param0: globalAndroid.view.View, param1: number, param2: java.lang.Boolean): void;
								public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
								public constructor();
							}
							export class a {
								public static class: java.lang.Class<com.xfl.msgbot.utils.misc.topsheet.TopSheetBehavior.a>;
								public a: globalAndroid.view.View;
								public b: number;
								public run(): void;
								public constructor(param0: globalAndroid.view.View, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class AdContainerLayout {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.AdContainerLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public a(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getContainer(): globalAndroid.widget.FrameLayout;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public _$_clearFindViewByIdCache(): void;
						public useAnimation(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class CheckBoxWithoutText {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.CheckBoxWithoutText>;
						public constructor(param0: globalAndroid.content.Context);
						public getSuggestedMinimumWidth(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public _$_clearFindViewByIdCache(): void;
						public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class CircleImageView {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.CircleImageView>;
						public a: globalAndroid.view.animation.Animation.AnimationListener;
						public static "<clinit>"(): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
						public setAnimationListener(param0: globalAndroid.view.animation.Animation.AnimationListener): void;
						public setBackgroundColor(param0: number): void;
						public onAnimationEnd(): void;
						public onAnimationStart(): void;
						public onMeasure(param0: number, param1: number): void;
						public _$_clearFindViewByIdCache(): void;
					}
					export module CircleImageView {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.CircleImageView.Companion>;
							public constructor();
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class CircleImageViewV2 {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.CircleImageViewV2>;
						public static t: globalAndroid.widget.ImageView.ScaleType;
						public static u: globalAndroid.graphics.Bitmap.Config;
						public d: globalAndroid.graphics.Paint;
						public e: globalAndroid.graphics.Paint;
						public f: globalAndroid.graphics.Paint;
						public g: number;
						public h: number;
						public i: number;
						public j: globalAndroid.graphics.Bitmap;
						public k: globalAndroid.graphics.BitmapShader;
						public l: number;
						public m: number;
						public n: number;
						public o: number;
						public p: boolean;
						public q: boolean;
						public r: boolean;
						public s: boolean;
						public getBorderWidth(): number;
						public constructor(param0: globalAndroid.content.Context);
						public setDisableCircularTransformation(param0: boolean): void;
						public c(): void;
						public setCircleBackgroundColor(param0: number): void;
						public setImageResource(param0: number): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public a(): void;
						public setImageURI(param0: globalAndroid.net.Uri): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setAdjustViewBounds(param0: boolean): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setBorderColor(param0: number): void;
						public static "<clinit>"(): void;
						public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
						public isBorderOverlay(): boolean;
						public setBorderOverlay(param0: boolean): void;
						public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
						public _$_clearFindViewByIdCache(): void;
						public setBorderWidth(param0: number): void;
						public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
						public getBorderColor(): number;
						public isDisableCircularTransformation(): boolean;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public setCircleBackgroundColorResource(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public b(): void;
						public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
						public getCircleBackgroundColor(): number;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module CircleImageViewV2 {
						export class Companion {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.CircleImageViewV2.Companion>;
							public constructor();
							public constructor(param0: any);
						}
						export class a {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.CircleImageViewV2.a>;
							public constructor(param0: com.xfl.msgbot.utils.view.CircleImageViewV2);
							public getOutline(param0: globalAndroid.view.View, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class ConstraintLayoutWithEvent {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.ConstraintLayoutWithEvent>;
						public q: com.xfl.msgbot.utils.view.ConstraintLayoutWithEvent.MyKeyEventCallbackListener;
						public setMyKeyEventCallbackListener(param0: com.xfl.msgbot.utils.view.ConstraintLayoutWithEvent.MyKeyEventCallbackListener): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						public _$_clearFindViewByIdCache(): void;
					}
					export module ConstraintLayoutWithEvent {
						export class MyKeyEventCallbackListener {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.ConstraintLayoutWithEvent.MyKeyEventCallbackListener>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.view.ConstraintLayoutWithEvent$MyKeyEventCallbackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							});
							public constructor();
							public onKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class GoEditText {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.GoEditText>;
						public a: java.util.ArrayList<com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener>;
						public clearListener(): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public removeListener(param0: com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public addListener(param0: com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener): void;
						public onTextContextMenuItem(param0: number): boolean;
						public _$_clearFindViewByIdCache(): void;
					}
					export module GoEditText {
						export class GoEditTextListener {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.view.GoEditText$GoEditTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTextCopy(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
								onTextCut(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
								onTextPaste(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
							});
							public constructor();
							public onTextCut(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
							public onTextCopy(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
							public onTextPaste(param0: globalAndroid.widget.EditText, param1: globalAndroid.text.Editable): void;
						}
						export module GoEditTextListener {
							export class DefaultImpls {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener.DefaultImpls>;
								public static onTextCopy(param0: com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener, param1: globalAndroid.widget.EditText, param2: globalAndroid.text.Editable): void;
								public static onTextPaste(param0: com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener, param1: globalAndroid.widget.EditText, param2: globalAndroid.text.Editable): void;
								public static onTextCut(param0: com.xfl.msgbot.utils.view.GoEditText.GoEditTextListener, param1: globalAndroid.widget.EditText, param2: globalAndroid.text.Editable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class HorizontalScrollViewPlus {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.HorizontalScrollViewPlus>;
						public a: com.xfl.msgbot.utils.view.HorizontalScrollViewPlus.OnScrollChangedListener;
						public b: number;
						public c: number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setOnScrollChangeListener(param0: com.xfl.msgbot.utils.view.HorizontalScrollViewPlus.OnScrollChangedListener): void;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public _$_clearFindViewByIdCache(): void;
					}
					export module HorizontalScrollViewPlus {
						export class OnScrollChangedListener {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.HorizontalScrollViewPlus.OnScrollChangedListener>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.view.HorizontalScrollViewPlus$OnScrollChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrollChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
							});
							public constructor();
							public onScrollChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class MaxHeightFrameLayout {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.MaxHeightFrameLayout>;
						public setMaxHeight(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getMaxHeight(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public a(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
						public onMeasure(param0: number, param1: number): void;
						public _$_clearFindViewByIdCache(): void;
						public setMaxHeightDensity(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class MaxHeightLinearLayout {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.MaxHeightLinearLayout>;
						public setMaxHeight(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getMaxHeight(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public a(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
						public onMeasure(param0: number, param1: number): void;
						public _$_clearFindViewByIdCache(): void;
						public setMaxHeightDensity(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class ScrimInsetsFrameLayout {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.ScrimInsetsFrameLayout>;
						public a: globalAndroid.graphics.drawable.Drawable;
						public b: globalAndroid.graphics.Rect;
						public c: globalAndroid.graphics.Rect;
						public d: boolean;
						public e: boolean;
						public getInsetForeground(): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public setInsetForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onInsetsChanged(param0: androidx.core.view.WindowInsetsCompat): void;
						public _$_clearFindViewByIdCache(): void;
						public setDrawBottomInsetForeground(param0: boolean): void;
						public setInsets(param0: globalAndroid.graphics.Rect): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setScrimInsetForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getInsets(): globalAndroid.graphics.Rect;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setDrawTopInsetForeground(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class SlideItemView {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.SlideItemView>;
						public a: boolean;
						public b: com.xfl.msgbot.utils.view.SlideItemView.Action;
						public c: globalAndroid.view.View;
						public d: globalAndroid.view.View;
						public e: globalAndroid.view.View;
						public f: globalAndroid.widget.LinearLayout;
						public g: string;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public setSlideListener(param0: com.xfl.msgbot.utils.view.SlideItemView.Action): void;
						public _$_clearFindViewByIdCache(): void;
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						public resetSlideListener(): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public init(param0: java.lang.Boolean): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public addView(param0: globalAndroid.view.View, param1: number): void;
					}
					export module SlideItemView {
						export class Action {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.SlideItemView.Action>;
							/**
							 * Constructs a new instance of the com.xfl.msgbot.utils.view.SlideItemView$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSlide(param0: com.xfl.msgbot.utils.view.SlideItemView.Direction): void;
							});
							public constructor();
							public onSlide(param0: com.xfl.msgbot.utils.view.SlideItemView.Direction): void;
						}
						export module Action {
							export class DefaultImpls {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.SlideItemView.Action.DefaultImpls>;
								public static onSlide(param0: com.xfl.msgbot.utils.view.SlideItemView.Action, param1: com.xfl.msgbot.utils.view.SlideItemView.Direction): void;
							}
						}
						export class Direction {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.SlideItemView.Direction>;
							public static LEFT: com.xfl.msgbot.utils.view.SlideItemView.Direction;
							public static Right: com.xfl.msgbot.utils.view.SlideItemView.Direction;
							public static valueOf(param0: string): com.xfl.msgbot.utils.view.SlideItemView.Direction;
							public static values(): androidNative.Array<com.xfl.msgbot.utils.view.SlideItemView.Direction>;
							public static "<clinit>"(): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export class VerticalScrollView {
						public static class: java.lang.Class<com.xfl.msgbot.utils.view.VerticalScrollView>;
						public C: com.xfl.msgbot.utils.ScrollViewListener;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setOnScrollChangedListener(param0: com.xfl.msgbot.utils.ScrollViewListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module bottomswiperefresh {
						export class CircleImageView {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.CircleImageView>;
							public a: globalAndroid.view.animation.Animation;
							public b: globalAndroid.view.animation.Animation.AnimationListener;
							public onAnimationEnd(): void;
							public clearAnimation(): void;
							public onMeasure(param0: number, param1: number): void;
							public setAnimationListener(param0: globalAndroid.view.animation.Animation.AnimationListener): void;
							public setBackgroundColor(param0: number): void;
							public _$_clearFindViewByIdCache(): void;
							public setAnimation(param0: globalAndroid.view.animation.Animation): void;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
							public static "<clinit>"(): void;
							public onAnimationStart(): void;
						}
						export module CircleImageView {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.CircleImageView.Companion>;
								public constructor(param0: any);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module bottomswiperefresh {
						export class MaterialProgressDrawable {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable>;
							public static DEFAULT: number;
							public static LARGE: number;
							public static l: globalAndroid.view.animation.Interpolator;
							public static m: globalAndroid.view.animation.Interpolator;
							public static n: globalAndroid.view.animation.Interpolator;
							public static o: globalAndroid.view.animation.Interpolator;
							public b: java.util.ArrayList<globalAndroid.view.animation.Animation>;
							public c: com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.b;
							public d: number;
							public e: globalAndroid.content.res.Resources;
							public f: globalAndroid.view.animation.Animation;
							public g: number;
							public h: number;
							public i: number;
							public j: globalAndroid.view.animation.Animation;
							public k: globalAndroid.graphics.drawable.Drawable.Callback;
							public setArrowScale(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
							public a(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
							public setColorSchemeColors(param0: androidNative.Array<number>): void;
							public getAlpha(): number;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public updateSizes(param0: number): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public isRunning(): boolean;
							public setAlpha(param0: number): void;
							public setProgressRotation(param0: number): void;
							public stop(): void;
							public start(): void;
							public setBackgroundColor(param0: number): void;
							public getIntrinsicWidth(): number;
							public getOpacity(): number;
							public static "<clinit>"(): void;
							public setStartEndTrim(param0: number, param1: number): void;
							public showArrow(param0: boolean): void;
						}
						export module MaterialProgressDrawable {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.Companion>;
								public constructor(param0: any);
								public constructor();
							}
							export class ProgressDrawableSize {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.ProgressDrawableSize>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable$ProgressDrawableSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class a {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.a>;
								public constructor();
								public getInterpolation(param0: number): number;
							}
							export class b {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.b>;
								public f: number;
								public g: number;
								public h: number;
								public i: number;
								public j: number;
								public k: androidNative.Array<number>;
								public l: number;
								public m: number;
								public n: number;
								public o: number;
								public p: boolean;
								public q: globalAndroid.graphics.Path;
								public r: number;
								public s: number;
								public t: number;
								public u: number;
								public v: number;
								public w: globalAndroid.graphics.Paint;
								public x: number;
								public c(): void;
								public d(param0: boolean): void;
								public e(): void;
								public a(): void;
								public constructor(param0: globalAndroid.graphics.drawable.Drawable.Callback, param1: com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable);
								public b(): void;
							}
							export class c {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.MaterialProgressDrawable.c>;
								public constructor();
								public getInterpolation(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module bottomswiperefresh {
						export class SwipeRefreshLayoutBottom {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom>;
							public static DEFAULT: number;
							public static G: string;
							public static H: androidNative.Array<number>;
							public static LARGE: number;
							public A: number;
							public B: number;
							public C: boolean;
							public D: globalAndroid.view.animation.Animation.AnimationListener;
							public E: globalAndroid.view.animation.Animation;
							public F: globalAndroid.view.animation.Animation;
							public i: number;
							public j: boolean;
							public k: number;
							public l: boolean;
							public m: globalAndroid.view.animation.DecelerateInterpolator;
							public n: com.xfl.msgbot.utils.view.bottomswiperefresh.CircleImageView;
							public o: number;
							public p: number;
							public q: number;
							public r: number;
							public s: com.xfl.msgbot.utils.misc.MaterialProgressDrawable;
							public t: globalAndroid.view.animation.Animation;
							public u: globalAndroid.view.animation.Animation;
							public v: globalAndroid.view.animation.Animation;
							public w: globalAndroid.view.animation.Animation;
							public x: globalAndroid.view.animation.Animation;
							public y: number;
							public z: boolean;
							public setOnRefreshListener(param0: com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom.OnRefreshListener): void;
							public setColorSchemeColors(param0: androidNative.Array<number>): void;
							public setSize(param0: number): void;
							public h(param0: globalAndroid.view.animation.Animation.AnimationListener): void;
							public reset(): void;
							public setProgressViewOffset(param0: boolean, param1: number, param2: number): void;
							public e(param0: boolean, param1: boolean): void;
							public onMeasure(param0: number, param1: number): void;
							public setProgressViewEndTarget(param0: boolean, param1: number): void;
							public getMFrom(): number;
							public setColorSchemeResources(param0: androidNative.Array<number>): void;
							public isRefreshing(): boolean;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public setMFrom(param0: number): void;
							public setEnabled(param0: boolean): void;
							public c(param0: globalAndroid.view.animation.Animation): boolean;
							public static "<clinit>"(): void;
							public getMOriginalOffsetTop(): number;
							public canChildScrollUp(): boolean;
							public a(): void;
							public onDetachedFromWindow(): void;
							public canChildScrollDown(): boolean;
							public setProgressBackgroundColor(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public setRefreshing(param0: boolean): void;
							public b(param0: globalAndroid.view.MotionEvent, param1: number): number;
							public setOnRefreshListener(param0: any): void;
							public setColorScheme(param0: androidNative.Array<number>): void;
							public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public d(param0: globalAndroid.view.MotionEvent): void;
							public g(param0: number, param1: number): globalAndroid.view.animation.Animation;
							public requestDisallowInterceptTouchEvent(param0: boolean): void;
							public _$_clearFindViewByIdCache(): void;
							public setMOriginalOffsetTop(param0: number): void;
							public f(param0: number, param1: boolean): void;
							public getChildDrawingOrder(param0: number, param1: number): number;
							public static access$moveToStart(param0: com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom, param1: number): void;
							public setDistanceToTriggerSync(param0: number): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module SwipeRefreshLayoutBottom {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom.Companion>;
								public constructor(param0: any);
								public constructor();
							}
							export class OnRefreshListener {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom.OnRefreshListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.bottomswiperefresh.SwipeRefreshLayoutBottom$OnRefreshListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onRefresh(): void;
								});
								public constructor();
								public onRefresh(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module interfaces {
							export class MeasurableAdapterTemp<VH>  extends java.lang.Object {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.MeasurableAdapterTemp<any>>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.MeasurableAdapterTemp<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getViewTypeHeight(param0: androidx.recyclerview.widget.RecyclerView, param1: VH, param2: number): number;
								});
								public constructor();
								public getViewTypeHeight(param0: androidx.recyclerview.widget.RecyclerView, param1: VH, param2: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module interfaces {
							export class OnFastScrollStateChangeListener {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFastScrollStart(): void;
									onFastScrollStop(): void;
								});
								public constructor();
								public onFastScrollStop(): void;
								public onFastScrollStart(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module utils {
							export class Utils {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.utils.Utils>;
								public static INSTANCE: com.xfl.msgbot.utils.view.fastscrollrecyclerview.utils.Utils;
								public static "<clinit>"(): void;
								public static toPixels(param0: globalAndroid.content.res.Resources, param1: number): number;
								public constructor();
								public static toScreenPixels(param0: globalAndroid.content.res.Resources, param1: number): number;
								public static isRtl(param0: globalAndroid.content.res.Resources): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module views {
							export class FastScrollPopup {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollPopup>;
								public a: globalAndroid.content.res.Resources;
								public b: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView;
								public c: number;
								public d: number;
								public e: globalAndroid.graphics.Path;
								public f: globalAndroid.graphics.RectF;
								public g: globalAndroid.graphics.Paint;
								public h: number;
								public i: globalAndroid.graphics.Rect;
								public j: globalAndroid.graphics.Rect;
								public k: globalAndroid.graphics.Rect;
								public l: string;
								public m: globalAndroid.graphics.Paint;
								public n: globalAndroid.graphics.Rect;
								public o: number;
								public p: globalAndroid.animation.ObjectAnimator;
								public q: boolean;
								public r: number;
								public setTypeface(param0: globalAndroid.graphics.Typeface): void;
								public setTextSize(param0: number): void;
								public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
								public getPopupPosition(): number;
								public setAlpha(param0: number): void;
								public setBackgroundSize(param0: number): void;
								public updateFastScrollerBounds(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView, param1: number): globalAndroid.graphics.Rect;
								public setSectionName(param0: string): void;
								public getAlpha(): number;
								public setBgColor(param0: number): void;
								public setTextColor(param0: number): void;
								public animateVisibility(param0: boolean): void;
								public constructor(param0: globalAndroid.content.res.Resources, param1: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView);
								public isVisible(): boolean;
								public setPopupPosition(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module views {
							export class FastScrollRecyclerView {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView>;
								public D0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller;
								public E0: boolean;
								public F0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.ScrollPositionState;
								public G0: number;
								public H0: number;
								public I0: number;
								public J0: globalAndroid.util.SparseIntArray;
								public K0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.a;
								public L0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener;
								public M0: com.google.android.material.floatingactionbutton.FloatingActionButton;
								public N0: number;
								public O0: androidx.recyclerview.widget.RecyclerView.OnScrollListener;
								public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
								public getAvailableScrollBarHeight(): number;
								public setPopupTextColor(param0: number): void;
								public setAutoHideEnabled(param0: boolean): void;
								public scrollToPositionAtProgress(param0: number): string;
								public setFastScrollEnabled(param0: boolean): void;
								public setThumbInactiveColor(param0: boolean): void;
								public updateThumbPosition(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.ScrollPositionState, param1: number): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
								public getAvailableScrollHeight(param0: number, param1: number): number;
								public g0(param0: globalAndroid.view.MotionEvent): boolean;
								public onWindowFocusChanged(param0: boolean): void;
								public _$_clearFindViewByIdCache(): void;
								public d0(param0: number): number;
								public f0(param0: number, param1: globalAndroid.view.ViewGroup): void;
								public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
								public b0(): number;
								public setPopupTextSize(param0: number): void;
								public onFinishInflate(): void;
								public e0(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.ScrollPositionState): void;
								public getScrollBarWidth(): number;
								public setPopupPosition(param0: number): void;
								public showScrollbar(): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public setTrackColor(param0: number): void;
								public c0(param0: number): number;
								public setAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
								public setThumbInactiveColor(param0: number): void;
								public allowThumbInactiveColor(param0: boolean): void;
								public setOnFastScrollStateChangeListener(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener): void;
								public setStateChangeListener(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener): void;
								public onUpdateScrollbar(): void;
								public onDetachedFromWindow(): void;
								public setThumbEnabled(param0: boolean): void;
								public setPopupBgColor(param0: number): void;
								public draw(param0: globalAndroid.graphics.Canvas): void;
								public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
								public setThumbColor(param0: number): void;
								public static "<clinit>"(): void;
								public setPopUpTypeface(param0: globalAndroid.graphics.Typeface): void;
								public onAttachedToWindow(): void;
								public setScrollHideFAB(param0: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
								public getScrollBarThumbHeight(): number;
								public setAutoHideDelay(param0: number): void;
								public constructor(param0: globalAndroid.content.Context);
							}
							export module FastScrollRecyclerView {
								export class Companion {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.Companion>;
									public constructor();
									public constructor(param0: any);
								}
								export class MeasurableAdapter<VH>  extends java.lang.Object {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.MeasurableAdapter<any>>;
									/**
									 * Constructs a new instance of the com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView$MeasurableAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getViewTypeHeight(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number): number;
									});
									public constructor();
									public getViewTypeHeight(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number): number;
								}
								export class ScrollPositionState {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.ScrollPositionState>;
									public a: number;
									public b: number;
									public c: number;
									public constructor();
									public getRowTopOffset(): number;
									public setRowHeight(param0: number): void;
									public getRowHeight(): number;
									public getRowIndex(): number;
									public setRowTopOffset(param0: number): void;
									public setRowIndex(param0: number): void;
								}
								export class SectionedAdapter {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.SectionedAdapter>;
									/**
									 * Constructs a new instance of the com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView$SectionedAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getSectionName(param0: number): string;
									});
									public constructor();
									public getSectionName(param0: number): string;
								}
								export class a {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView.a>;
									public onItemRangeChanged(param0: number, param1: number): void;
									public onItemRangeRemoved(param0: number, param1: number): void;
									public onItemRangeInserted(param0: number, param1: number): void;
									public onItemRangeMoved(param0: number, param1: number, param2: number): void;
									public onChanged(): void;
									public onItemRangeChanged(param0: number, param1: number, param2: any): void;
									public constructor(param0: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView);
									public a(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module fastscrollrecyclerview {
						export module views {
							export class FastScroller {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller>;
								public b: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView;
								public c: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollPopup;
								public d: number;
								public e: number;
								public f: globalAndroid.graphics.Paint;
								public g: globalAndroid.graphics.Paint;
								public h: globalAndroid.graphics.Rect;
								public i: globalAndroid.graphics.Rect;
								public j: globalAndroid.graphics.Rect;
								public k: number;
								public l: number;
								public m: globalAndroid.graphics.Point;
								public n: globalAndroid.graphics.Point;
								public o: boolean;
								public p: globalAndroid.animation.Animator;
								public q: boolean;
								public r: number;
								public s: boolean;
								public t: number;
								public u: number;
								public v: boolean;
								public show(): void;
								public setPopupTextColor(param0: number): void;
								public setAutoHideEnabled(param0: boolean): void;
								public postAutoHideDelayed(): void;
								public cancelAutoHide(): void;
								public setThumbInactiveColor(param0: boolean): void;
								public getWidth(): number;
								public constructor(param0: globalAndroid.content.Context, param1: com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScrollRecyclerView, param2: globalAndroid.util.AttributeSet);
								public setOffsetX(param0: number): void;
								public setPopupTextSize(param0: number): void;
								public getThumbHeight(): number;
								public setPopupPosition(param0: number): void;
								public setTrackColor(param0: number): void;
								public setThumbInactiveColor(param0: number): void;
								public enableThumbInactiveColor(param0: boolean): void;
								public setPopupBgColor(param0: number): void;
								public draw(param0: globalAndroid.graphics.Canvas): void;
								public isDragging(): boolean;
								public setPopupTypeface(param0: globalAndroid.graphics.Typeface): void;
								public setThumbColor(param0: number): void;
								public static "<clinit>"(): void;
								public setOffset(param0: number, param1: number): void;
								public a(param0: number, param1: number): boolean;
								public setAutoHideDelay(param0: number): void;
								public getOffsetX(): number;
								public setThumbPosition(param0: number, param1: number): void;
								public handleTouchEvent(param0: globalAndroid.view.MotionEvent, param1: number, param2: number, param3: number, param4: com.xfl.msgbot.utils.view.fastscrollrecyclerview.interfaces.OnFastScrollStateChangeListener): void;
							}
							export module FastScroller {
								export class Companion {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller.Companion>;
									public constructor();
									public constructor(param0: any);
								}
								export class FastScrollerPopupPosition {
									public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller.FastScrollerPopupPosition>;
									/**
									 * Constructs a new instance of the com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller$FastScrollerPopupPosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										"<clinit>"(): void;
									});
									public constructor();
									public static ADJACENT: number;
									public static CENTER: number;
								}
								export module FastScrollerPopupPosition {
									export class Companion {
										public static class: java.lang.Class<com.xfl.msgbot.utils.view.fastscrollrecyclerview.views.FastScroller.FastScrollerPopupPosition.Companion>;
										public static ADJACENT: number;
										public static CENTER: number;
										public static "<clinit>"(): void;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class BadgeListPreference {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.BadgeListPreference>;
							public c0: globalAndroid.view.View;
							public d0: globalAndroid.graphics.drawable.Drawable;
							public e0: com.xfl.msgbot.utils.view.CircleImageViewV2;
							public e(param0: globalAndroid.util.AttributeSet, param1: java.lang.Integer, param2: java.lang.Integer): void;
							public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
							public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public getBadge(): globalAndroid.graphics.drawable.Drawable;
							public setBadge(param0: globalAndroid.graphics.drawable.Drawable): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class CopyrightPreference {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.CopyrightPreference>;
							public R: globalAndroid.view.View;
							public S: string;
							public T: globalAndroid.widget.TextView;
							public U: com.xfl.msgbot.utils.view.preference.CopyrightPreference.OnPreferenceLongClickListener;
							public e(param0: globalAndroid.util.AttributeSet, param1: java.lang.Integer, param2: java.lang.Integer): void;
							public getOnPreferenceLongClickListener(): com.xfl.msgbot.utils.view.preference.CopyrightPreference.OnPreferenceLongClickListener;
							public getText(): string;
							public setOnPreferenceLongClickListener(param0: com.xfl.msgbot.utils.view.preference.CopyrightPreference.OnPreferenceLongClickListener): void;
							public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setTexColort(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setText(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module CopyrightPreference {
							export class OnPreferenceLongClickListener {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.CopyrightPreference.OnPreferenceLongClickListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.preference.CopyrightPreference$OnPreferenceLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
								});
								public constructor();
								public onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class DialogPrefFragCompat {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.DialogPrefFragCompat>;
							public A: androidNative.Array<string>;
							public B: androidNative.Array<string>;
							public z: number;
							public constructor();
							public onDialogClosed(param0: boolean): void;
							public onPrepareDialogBuilder(param0: androidx.appcompat.app.AlertDialog.Builder): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public _$_clearFindViewByIdCache(): void;
							public static "<clinit>"(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
						export module DialogPrefFragCompat {
							export class Companion {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.DialogPrefFragCompat.Companion>;
								public constructor(param0: any);
								public newInstance(param0: string): com.xfl.msgbot.utils.view.preference.DialogPrefFragCompat;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class EditTextLongClickPreference {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference>;
							public Z: com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference.OnPreferenceLongClickListener;
							public getOnPreferenceLongClickListener(): com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference.OnPreferenceLongClickListener;
							public setOnPreferenceLongClickListener(param0: com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference.OnPreferenceLongClickListener): void;
							public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
						export module EditTextLongClickPreference {
							export class OnPreferenceLongClickListener {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference.OnPreferenceLongClickListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.preference.EditTextLongClickPreference$OnPreferenceLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
								});
								public constructor();
								public onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class LongClickablePreference {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.LongClickablePreference>;
							public R: com.xfl.msgbot.utils.view.preference.LongClickablePreference.OnPreferenceLongClickListener;
							public setOnPreferenceLongClickListener(param0: any): void;
							public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public getOnPreferenceLongClickListener(): com.xfl.msgbot.utils.view.preference.LongClickablePreference.OnPreferenceLongClickListener;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setOnPreferenceLongClickListener(param0: com.xfl.msgbot.utils.view.preference.LongClickablePreference.OnPreferenceLongClickListener): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module LongClickablePreference {
							export class OnPreferenceLongClickListener {
								public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.LongClickablePreference.OnPreferenceLongClickListener>;
								/**
								 * Constructs a new instance of the com.xfl.msgbot.utils.view.preference.LongClickablePreference$OnPreferenceLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
								});
								public constructor();
								public onPreferenceLongClick(param0: androidx.preference.Preference): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module utils {
				export module view {
					export module preference {
						export class PreferenceScreenCompat {
							public static class: java.lang.Class<com.xfl.msgbot.utils.view.preference.PreferenceScreenCompat>;
							public a0: boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setShouldUseGeneratedIds(param0: boolean): void;
							public onClick(): void;
							public shouldUseGeneratedIds(): boolean;
							public isOnSameScreenAsChildren(): boolean;
						}
					}
				}
			}
		}
	}
}
