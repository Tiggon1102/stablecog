// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'hi'
	| 'ko'
	| 'ru'
	| 'tr'
	| 'zh-Hans'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * L​a​n​g​u​a​g​e
	 */
	Language: string
	Home: {
		/**
		 * G​e​n​e​r​a​t​e
		 */
		GenerateButton: string
		PromptInput: {
			/**
			 * P​o​r​t​r​a​i​t​ ​o​f​ ​a​ ​c​a​t​ ​b​y​ ​V​a​n​ ​G​o​g​h
			 */
			Placeholder: string
		}
		WidthTabBar: {
			/**
			 * W​i​d​t​h
			 */
			Title: string
			/**
			 * T​h​e​ ​w​i​d​t​h​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		HeightTabBar: {
			/**
			 * H​e​i​g​h​t
			 */
			Title: string
			/**
			 * T​h​e​ ​h​e​i​g​h​t​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		InferenceStepsTabBar: {
			/**
			 * I​n​f​e​r​e​n​c​e​ ​S​t​e​p​s
			 */
			Title: string
			/**
			 * H​o​w​ ​m​a​n​y​ ​s​t​e​p​s​ ​w​i​l​l​ ​b​e​ ​t​a​k​e​n​ ​t​o​ ​g​e​n​e​r​a​t​e​ ​(​d​i​f​f​u​s​e​)​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		GuidanceScaleSlider: {
			/**
			 * G​u​i​d​a​n​c​e​ ​S​c​a​l​e
			 */
			Title: string
			/**
			 * H​o​w​ ​s​i​m​i​l​a​r​ ​t​h​e​ ​i​m​a​g​e​ ​w​i​l​l​ ​b​e​ ​t​o​ ​y​o​u​r​ ​p​r​o​m​p​t​.​ ​H​i​g​h​e​r​ ​v​a​l​u​e​s​ ​m​a​k​e​ ​t​h​e​ ​i​m​a​g​e​ ​c​l​o​s​e​r​ ​t​o​ ​y​o​u​r​ ​p​r​o​m​p​t​.
			 */
			Paragraph: string
		}
		NegativePromptInput: {
			/**
			 * N​e​g​a​t​i​v​e​ ​P​r​o​m​p​t
			 */
			Title: string
			/**
			 * N​e​g​a​t​i​v​e​ ​p​r​o​m​p​t
			 */
			Placeholder: string
			/**
			 * T​o​ ​r​e​m​o​v​e​ ​u​n​w​a​n​t​e​d​ ​t​h​i​n​g​s​ ​f​r​o​m​ ​t​h​e​ ​i​m​a​g​e​.​ ​I​t​ ​d​o​e​s​ ​t​h​e​ ​o​p​p​o​s​i​t​e​ ​o​f​ ​w​h​a​t​ ​t​h​e​ ​p​r​o​m​p​t​ ​d​o​e​s​.
			 */
			Paragraph: string
		}
		SeedInput: {
			/**
			 * S​e​e​d
			 */
			Title: string
			/**
			 * S​e​e​d​ ​n​u​m​b​e​r
			 */
			Placeholder: string
			/**
			 * G​e​t​ ​r​e​p​e​a​t​a​b​l​e​ ​r​e​s​u​l​t​s​.​ ​A​ ​s​e​e​d​ ​c​o​m​b​i​n​e​d​ ​w​i​t​h​ ​t​h​e​ ​s​a​m​e​ ​p​r​o​m​p​t​ ​a​n​d​ ​o​p​t​i​o​n​s​ ​g​e​n​e​r​a​t​e​s​ ​t​h​e​ ​s​a​m​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		ModelDropdown: {
			/**
			 * M​o​d​e​l
			 */
			Title: string
			/**
			 * T​h​e​ ​A​I​ ​M​o​d​e​l​ ​t​h​a​t​ ​w​i​l​l​ ​b​e​ ​u​s​e​d​ ​t​o​ ​g​e​n​e​r​a​t​e​ ​t​h​e​ ​i​m​a​g​e​.
			 */
			Paragraph: string
		}
		SchedulerDropdown: {
			/**
			 * S​c​h​e​d​u​l​e​r
			 */
			Title: string
			/**
			 * D​i​f​f​u​s​e​ ​t​h​e​ ​i​m​a​g​e​ ​i​n​ ​a​ ​c​e​r​t​a​i​n​ ​w​a​y​.​ ​I​t​ ​c​a​n​ ​d​r​a​s​t​i​c​a​l​l​y​ ​c​h​a​n​g​e​ ​t​h​e​ ​g​e​n​e​r​a​t​e​d​ ​i​m​a​g​e​.​ ​S​o​m​e​ ​r​e​q​u​i​r​e​ ​l​e​s​s​ ​s​t​e​p​s​ ​t​o​ ​p​r​o​d​u​c​e​ ​g​o​o​d​ ​r​e​s​u​l​t​s​.
			 */
			Paragraph: string
		}
		SubmitToGalleryQuestion: {
			/**
			 * S​u​b​m​i​t​ ​g​e​n​e​r​a​t​i​o​n​s​ ​t​o​ ​t​h​e​ ​g​a​l​l​e​r​y​?
			 */
			Title: string
			/**
			 * Y​o​u​ ​c​a​n​ ​c​h​a​n​g​e​ ​y​o​u​r​ ​p​r​e​f​e​r​e​n​c​e​ ​f​r​o​m​ ​t​h​e​ ​s​e​t​t​i​n​g​s​ ​l​a​t​e​r​.
			 */
			Paragraph: string
		}
	}
	History: {
		/**
		 * G​e​n​e​r​a​t​i​o​n​s
		 */
		GenerationsTitle: string
		/**
		 * L​a​s​t​ ​{​c​o​u​n​t​}​ ​o​n​l​y
		 * @param {number} count
		 */
		GenerationsMaxSavedCountWarning: RequiredParams<'count'>
		/**
		 * Y​o​u​ ​h​a​v​e​n​'​t​ ​g​e​n​e​r​a​t​e​d​ ​a​n​y​ ​i​m​a​g​e​s​ ​y​e​t​.
		 */
		NoGenerationsYet: string
	}
	Live: {
		/**
		 * G​e​n​e​r​a​t​i​o​n​s
		 */
		GenerationsTitle: string
		/**
		 * T​o​t​a​l​ ​D​u​r​a​t​i​o​n
		 */
		TotalDurationTitle: string
		/**
		 * U​p​s​c​a​l​e​s
		 */
		UpscalesTitle: string
		GenerationTooltip: {
			/**
			 * C​o​u​n​t​r​y
			 */
			CountryTitle: string
			Type: {
				/**
				 * T​y​p​e
				 */
				Title: string
				/**
				 * G​e​n​e​r​a​t​i​o​n
				 */
				Generation: string
				/**
				 * U​p​s​c​a​l​e
				 */
				Upscale: string
			}
			/**
			 * D​i​m​e​n​s​i​o​n​s
			 */
			DimensionsTitle: string
			/**
			 * S​t​e​p​s
			 */
			StepsTitle: string
			/**
			 * S​c​a​l​e
			 */
			ScaleTitle: string
			/**
			 * D​u​r​a​t​i​o​n
			 */
			DurationTitle: string
			Status: {
				/**
				 * S​t​a​t​u​s
				 */
				Title: string
				/**
				 * S​t​a​r​t​e​d
				 */
				Started: string
				/**
				 * S​u​c​c​e​e​d​e​d
				 */
				Succeeded: string
				/**
				 * F​a​i​l​e​d
				 */
				Failed: string
			}
			Server: {
				/**
				 * S​e​r​v​e​r
				 */
				Title: string
				/**
				 * D​e​f​a​u​l​t
				 */
				Default: string
				/**
				 * C​u​s​t​o​m
				 */
				Custom: string
			}
			/**
			 * U​n​k​n​o​w​n
			 */
			UnknownTitle: string
		}
		/**
		 * W​a​i​t​i​n​g​ ​f​o​r​ ​g​e​n​e​r​a​t​i​o​n​s
		 */
		WaitingTitle: string
		/**
		 * U​n​k​n​o​w​n
		 */
		DurationStatusUnknown: string
	}
	Navbar: {
		/**
		 * H​o​m​e
		 */
		HomeTab: string
		/**
		 * H​i​s​t​o​r​y
		 */
		HistoryTab: string
		/**
		 * G​a​l​l​e​r​y
		 */
		GalleryTab: string
		/**
		 * L​i​v​e
		 */
		LiveTab: string
	}
	Settings: {
		/**
		 * S​e​t​t​i​n​g​s
		 */
		Title: string
		/**
		 * S​w​i​t​c​h​ ​S​e​r​v​e​r
		 */
		SwitchServerButton: string
		/**
		 * S​u​b​m​i​t​ ​t​o​ ​G​a​l​l​e​r​y
		 */
		SubmitToGalleryToggle: string
		/**
		 * A​d​v​a​n​c​e​d​ ​M​o​d​e
		 */
		AdvancedModeToggle: string
		/**
		 * A​d​v​a​n​c​e​d​ ​O​p​t​i​o​n​s
		 */
		AdvancedOptionsDropdown: string
		/**
		 * A​d​v​a​n​c​e​d
		 */
		AdvancedDropdown: string
		/**
		 * G​e​n​e​r​a​t​i​o​n​ ​S​e​t​t​i​n​g​s
		 */
		GenerationSettingsButton: string
		/**
		 * G​e​n​e​r​a​t​i​o​n​ ​S​e​t​t​i​n​g​s
		 */
		GenerationSettingsTitle: string
		/**
		 * D​a​r​k​ ​M​o​d​e
		 */
		DarkModeToggle: string
	}
	GenerationFullscreen: {
		/**
		 * D​o​w​n​l​o​a​d
		 */
		DownloadButton: string
		/**
		 * D​o​n​e​!
		 */
		DoneButtonState: string
		/**
		 * C​o​p​y​ ​P​r​o​m​p​t
		 */
		CopyPromptButton: string
		/**
		 * C​o​p​y​ ​N​e​g​a​t​i​v​e​ ​P​r​o​m​p​t
		 */
		CopyNegativePromptButton: string
		/**
		 * C​o​p​i​e​d​!
		 */
		CopiedButtonState: string
		/**
		 * R​e​r​o​l​l
		 */
		RerollButton: string
		/**
		 * R​e​g​e​n​e​r​a​t​e
		 */
		RegenerateButton: string
		/**
		 * G​e​n​e​r​a​t​e
		 */
		GenerateButton: string
		/**
		 * U​p​s​c​a​l​e
		 */
		UpscaleButton: string
		UpscaleTabBar: {
			/**
			 * U​p​s​c​a​l​e​d
			 */
			UpscaledTitle: string
			/**
			 * O​r​i​g​i​n​a​l
			 */
			OriginalTitle: string
		}
		Dimensions: {
			/**
			 * D​i​m​e​n​s​i​o​n​s
			 */
			Title: string
		}
		Duration: {
			/**
			 * D​u​r​a​t​i​o​n
			 */
			Title: string
		}
	}
	SetServerModal: {
		/**
		 * S​e​t​ ​S​e​r​v​e​r
		 */
		SetServerTitle: string
		/**
		 * S​w​i​t​c​h​ ​S​e​r​v​e​r
		 */
		SwitchServerTitle: string
		/**
		 * T​h​e​ ​s​e​r​v​e​r​ ​w​i​l​l​ ​b​e​ ​u​s​e​d​ ​f​o​r​ ​g​e​n​e​r​a​t​i​n​g​ ​i​m​a​g​e​s​.
		 */
		Paragraph: string
		/**
		 * S​e​t
		 */
		SetButton: string
		/**
		 * D​e​f​a​u​l​t
		 */
		DefaultButton: string
	}
	Blog: {
		/**
		 * B​l​o​g​ ​P​o​s​t​s
		 */
		Title: string
		/**
		 * B​l​o​g
		 */
		TitleAlt: string
		/**
		 * B​a​c​k​ ​t​o​ ​B​l​o​g
		 */
		BackToBlogButton: string
	}
	Redirect: {
		/**
		 * R​e​d​i​r​e​c​t​i​n​g​ ​t​o​ ​{​n​a​m​e​}
		 * @param {string} name
		 */
		RedirectingToTitle: RequiredParams<'name'>
	}
	Shared: {
		/**
		 * S​t​a​r​t​ ​g​e​n​e​r​a​t​i​n​g​ ​b​e​a​u​t​i​f​u​l​ ​i​m​a​g​e​s​!
		 */
		StartGeneratingTitle: string
		/**
		 * S​t​a​r​t​ ​G​e​n​e​r​a​t​i​n​g
		 */
		StartGeneratingButton: string
		/**
		 * J​o​i​n​ ​U​s
		 */
		JoinUsTitle: string
		/**
		 * G​o​ ​H​o​m​e
		 */
		GoHomeButton: string
		/**
		 * S​w​i​t​c​h​ ​t​o​ ​D​e​f​a​u​l​t​ ​S​e​r​v​e​r
		 */
		SwitchToDefaultServerButton: string
		/**
		 * S​h​a​r​e
		 */
		ShareButton: string
		/**
		 * S​h​a​r​e​ ​o​n​ ​{​n​a​m​e​}
		 * @param {string} name
		 */
		ShareOnButton: RequiredParams<'name'>
		/**
		 * Y​e​s
		 */
		YesButton: string
		/**
		 * N​o
		 */
		NoButton: string
		/**
		 * E​n​a​b​l​e
		 */
		EnableButton: string
		/**
		 * D​i​s​a​b​l​e
		 */
		DisableButton: string
		/**
		 * A​d​d
		 */
		AddButton: string
		/**
		 * C​o​p​y​ ​L​i​n​k
		 */
		CopyLinkButton: string
		/**
		 * C​o​p​y
		 */
		CopyButton: string
		/**
		 * D​e​l​e​t​e
		 */
		DeleteButton: string
		ServerUrlInput: {
			/**
			 * S​e​r​v​e​r​ ​U​R​L
			 */
			Placeholder: string
		}
		/**
		 * L​o​a​d​i​n​g
		 */
		LoadingTitle: string
		/**
		 * L​o​a​d​i​n​g​.​.​.
		 */
		LoadingParagraph: string
		/**
		 * L​o​g​i​n
		 */
		LoginButton: string
		/**
		 * L​o​g​o​u​t
		 */
		LogoutButton: string
		EmailInput: {
			/**
			 * E​m​a​i​l
			 */
			Placeholder: string
		}
		PasswordInput: {
			/**
			 * P​a​s​s​w​o​r​d
			 */
			Placeholder: string
		}
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				/**
				 * S​t​a​b​l​e​ ​D​i​f​f​u​s​i​o​n​ ​1​.​5
				 */
				realName: string
				/**
				 * G​e​n​e​r​a​l
				 */
				simpleName: string
			}
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				/**
				 * O​p​e​n​j​o​u​r​n​e​y
				 */
				realName: string
				/**
				 * 3​D​ ​D​i​g​i​t​a​l​ ​A​r​t
				 */
				simpleName: string
			}
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				/**
				 * A​r​c​a​n​e​ ​D​i​f​f​u​s​i​o​n
				 */
				realName: string
				/**
				 * 3​D​ ​C​o​m​i​c
				 */
				simpleName: string
			}
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				/**
				 * G​h​i​b​l​i​ ​D​i​f​f​u​s​i​o​n
				 */
				realName: string
				/**
				 * A​n​i​m​e
				 */
				simpleName: string
			}
			'790c80e1-65b1-4556-9332-196344389572': {
				/**
				 * M​o​-​D​i​ ​D​i​f​f​u​s​i​o​n
				 */
				realName: string
				/**
				 * A​n​i​m​a​t​e​d​ ​M​o​v​i​e
				 */
				simpleName: string
			}
		}
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				/**
				 * L​M​S
				 */
				realName: string
			}
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				/**
				 * E​u​l​e​r
				 */
				realName: string
			}
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				/**
				 * E​u​l​e​r​ ​A​.
				 */
				realName: string
			}
		}
		/**
		 * U​n​k​n​o​w​n
		 */
		UnknownTitle: string
	}
	Error: {
		/**
		 * S​o​m​e​t​h​i​n​g​ ​w​e​n​t​ ​w​r​o​n​g​ ​:​(
		 */
		SomethingWentWrong: string
		/**
		 * N​S​F​W​ ​c​o​n​t​e​n​t​ ​d​e​t​e​c​t​e​d​,​ ​t​r​y​ ​a​n​o​t​h​e​r​ ​p​r​o​m​p​t​ ​:​(
		 */
		NSFW: string
		/**
		 * T​h​e​ ​s​e​r​v​e​r​ ​s​e​e​m​s​ ​o​f​f​l​i​n​e​.​ ​Y​o​u​ ​m​i​g​h​t​ ​w​a​n​t​ ​t​o​ ​r​e​f​r​e​s​h​ ​t​h​e​ ​p​a​g​e​ ​o​r​ ​s​e​t​ ​a​n​o​t​h​e​r​ ​s​e​r​v​e​r​ ​f​r​o​m​ ​t​h​e​ ​s​e​t​t​i​n​g​s​.
		 */
		ServerSeemsOffline: string
		/**
		 * T​h​i​s​ ​s​e​r​v​e​r​ ​i​s​n​'​t​ ​c​o​m​p​a​t​i​b​l​e​ ​o​r​ ​n​o​t​ ​r​e​s​p​o​n​d​i​n​g​.
		 */
		ServerSetNotWorking: string
		/**
		 * N​o​t​ ​F​o​u​n​d
		 */
		NotFound: string
		/**
		 * S​u​p​a​b​a​s​e​ ​i​n​s​t​a​n​c​e​ ​n​o​t​ ​f​o​u​n​d​.​ ​C​a​n​'​t​ ​l​i​s​t​e​n​ ​f​o​r​ ​g​e​n​e​r​a​t​i​o​n​s​.
		 */
		SupabaseNotFoundCantListen: string
	}
	Admin: {
		/**
		 * A​d​m​i​n
		 */
		AdminPanelTitle: string
		/**
		 * D​e​l​e​t​e
		 */
		DeleteButton: string
		/**
		 * A​p​p​r​o​v​e
		 */
		ApproveButton: string
		/**
		 * N​o​ ​g​e​n​e​r​a​t​i​o​n​s​ ​t​o​ ​r​e​v​i​e​w​.
		 */
		NoGenerationsToReview: string
		/**
		 * S​e​r​v​e​r​s
		 */
		ServersButton: string
		/**
		 * G​a​l​l​e​r​y
		 */
		GalleryButton: string
	}
}

export type TranslationFunctions = {
	/**
	 * Language
	 */
	Language: () => LocalizedString
	Home: {
		/**
		 * Generate
		 */
		GenerateButton: () => LocalizedString
		PromptInput: {
			/**
			 * Portrait of a cat by Van Gogh
			 */
			Placeholder: () => LocalizedString
		}
		WidthTabBar: {
			/**
			 * Width
			 */
			Title: () => LocalizedString
			/**
			 * The width of the image.
			 */
			Paragraph: () => LocalizedString
		}
		HeightTabBar: {
			/**
			 * Height
			 */
			Title: () => LocalizedString
			/**
			 * The height of the image.
			 */
			Paragraph: () => LocalizedString
		}
		InferenceStepsTabBar: {
			/**
			 * Inference Steps
			 */
			Title: () => LocalizedString
			/**
			 * How many steps will be taken to generate (diffuse) the image.
			 */
			Paragraph: () => LocalizedString
		}
		GuidanceScaleSlider: {
			/**
			 * Guidance Scale
			 */
			Title: () => LocalizedString
			/**
			 * How similar the image will be to your prompt. Higher values make the image closer to your prompt.
			 */
			Paragraph: () => LocalizedString
		}
		NegativePromptInput: {
			/**
			 * Negative Prompt
			 */
			Title: () => LocalizedString
			/**
			 * Negative prompt
			 */
			Placeholder: () => LocalizedString
			/**
			 * To remove unwanted things from the image. It does the opposite of what the prompt does.
			 */
			Paragraph: () => LocalizedString
		}
		SeedInput: {
			/**
			 * Seed
			 */
			Title: () => LocalizedString
			/**
			 * Seed number
			 */
			Placeholder: () => LocalizedString
			/**
			 * Get repeatable results. A seed combined with the same prompt and options generates the same image.
			 */
			Paragraph: () => LocalizedString
		}
		ModelDropdown: {
			/**
			 * Model
			 */
			Title: () => LocalizedString
			/**
			 * The AI Model that will be used to generate the image.
			 */
			Paragraph: () => LocalizedString
		}
		SchedulerDropdown: {
			/**
			 * Scheduler
			 */
			Title: () => LocalizedString
			/**
			 * Diffuse the image in a certain way. It can drastically change the generated image. Some require less steps to produce good results.
			 */
			Paragraph: () => LocalizedString
		}
		SubmitToGalleryQuestion: {
			/**
			 * Submit generations to the gallery?
			 */
			Title: () => LocalizedString
			/**
			 * You can change your preference from the settings later.
			 */
			Paragraph: () => LocalizedString
		}
	}
	History: {
		/**
		 * Generations
		 */
		GenerationsTitle: () => LocalizedString
		/**
		 * Last {count} only
		 */
		GenerationsMaxSavedCountWarning: (arg: { count: number }) => LocalizedString
		/**
		 * You haven't generated any images yet.
		 */
		NoGenerationsYet: () => LocalizedString
	}
	Live: {
		/**
		 * Generations
		 */
		GenerationsTitle: () => LocalizedString
		/**
		 * Total Duration
		 */
		TotalDurationTitle: () => LocalizedString
		/**
		 * Upscales
		 */
		UpscalesTitle: () => LocalizedString
		GenerationTooltip: {
			/**
			 * Country
			 */
			CountryTitle: () => LocalizedString
			Type: {
				/**
				 * Type
				 */
				Title: () => LocalizedString
				/**
				 * Generation
				 */
				Generation: () => LocalizedString
				/**
				 * Upscale
				 */
				Upscale: () => LocalizedString
			}
			/**
			 * Dimensions
			 */
			DimensionsTitle: () => LocalizedString
			/**
			 * Steps
			 */
			StepsTitle: () => LocalizedString
			/**
			 * Scale
			 */
			ScaleTitle: () => LocalizedString
			/**
			 * Duration
			 */
			DurationTitle: () => LocalizedString
			Status: {
				/**
				 * Status
				 */
				Title: () => LocalizedString
				/**
				 * Started
				 */
				Started: () => LocalizedString
				/**
				 * Succeeded
				 */
				Succeeded: () => LocalizedString
				/**
				 * Failed
				 */
				Failed: () => LocalizedString
			}
			Server: {
				/**
				 * Server
				 */
				Title: () => LocalizedString
				/**
				 * Default
				 */
				Default: () => LocalizedString
				/**
				 * Custom
				 */
				Custom: () => LocalizedString
			}
			/**
			 * Unknown
			 */
			UnknownTitle: () => LocalizedString
		}
		/**
		 * Waiting for generations
		 */
		WaitingTitle: () => LocalizedString
		/**
		 * Unknown
		 */
		DurationStatusUnknown: () => LocalizedString
	}
	Navbar: {
		/**
		 * Home
		 */
		HomeTab: () => LocalizedString
		/**
		 * History
		 */
		HistoryTab: () => LocalizedString
		/**
		 * Gallery
		 */
		GalleryTab: () => LocalizedString
		/**
		 * Live
		 */
		LiveTab: () => LocalizedString
	}
	Settings: {
		/**
		 * Settings
		 */
		Title: () => LocalizedString
		/**
		 * Switch Server
		 */
		SwitchServerButton: () => LocalizedString
		/**
		 * Submit to Gallery
		 */
		SubmitToGalleryToggle: () => LocalizedString
		/**
		 * Advanced Mode
		 */
		AdvancedModeToggle: () => LocalizedString
		/**
		 * Advanced Options
		 */
		AdvancedOptionsDropdown: () => LocalizedString
		/**
		 * Advanced
		 */
		AdvancedDropdown: () => LocalizedString
		/**
		 * Generation Settings
		 */
		GenerationSettingsButton: () => LocalizedString
		/**
		 * Generation Settings
		 */
		GenerationSettingsTitle: () => LocalizedString
		/**
		 * Dark Mode
		 */
		DarkModeToggle: () => LocalizedString
	}
	GenerationFullscreen: {
		/**
		 * Download
		 */
		DownloadButton: () => LocalizedString
		/**
		 * Done!
		 */
		DoneButtonState: () => LocalizedString
		/**
		 * Copy Prompt
		 */
		CopyPromptButton: () => LocalizedString
		/**
		 * Copy Negative Prompt
		 */
		CopyNegativePromptButton: () => LocalizedString
		/**
		 * Copied!
		 */
		CopiedButtonState: () => LocalizedString
		/**
		 * Reroll
		 */
		RerollButton: () => LocalizedString
		/**
		 * Regenerate
		 */
		RegenerateButton: () => LocalizedString
		/**
		 * Generate
		 */
		GenerateButton: () => LocalizedString
		/**
		 * Upscale
		 */
		UpscaleButton: () => LocalizedString
		UpscaleTabBar: {
			/**
			 * Upscaled
			 */
			UpscaledTitle: () => LocalizedString
			/**
			 * Original
			 */
			OriginalTitle: () => LocalizedString
		}
		Dimensions: {
			/**
			 * Dimensions
			 */
			Title: () => LocalizedString
		}
		Duration: {
			/**
			 * Duration
			 */
			Title: () => LocalizedString
		}
	}
	SetServerModal: {
		/**
		 * Set Server
		 */
		SetServerTitle: () => LocalizedString
		/**
		 * Switch Server
		 */
		SwitchServerTitle: () => LocalizedString
		/**
		 * The server will be used for generating images.
		 */
		Paragraph: () => LocalizedString
		/**
		 * Set
		 */
		SetButton: () => LocalizedString
		/**
		 * Default
		 */
		DefaultButton: () => LocalizedString
	}
	Blog: {
		/**
		 * Blog Posts
		 */
		Title: () => LocalizedString
		/**
		 * Blog
		 */
		TitleAlt: () => LocalizedString
		/**
		 * Back to Blog
		 */
		BackToBlogButton: () => LocalizedString
	}
	Redirect: {
		/**
		 * Redirecting to {name}
		 */
		RedirectingToTitle: (arg: { name: string }) => LocalizedString
	}
	Shared: {
		/**
		 * Start generating beautiful images!
		 */
		StartGeneratingTitle: () => LocalizedString
		/**
		 * Start Generating
		 */
		StartGeneratingButton: () => LocalizedString
		/**
		 * Join Us
		 */
		JoinUsTitle: () => LocalizedString
		/**
		 * Go Home
		 */
		GoHomeButton: () => LocalizedString
		/**
		 * Switch to Default Server
		 */
		SwitchToDefaultServerButton: () => LocalizedString
		/**
		 * Share
		 */
		ShareButton: () => LocalizedString
		/**
		 * Share on {name}
		 */
		ShareOnButton: (arg: { name: string }) => LocalizedString
		/**
		 * Yes
		 */
		YesButton: () => LocalizedString
		/**
		 * No
		 */
		NoButton: () => LocalizedString
		/**
		 * Enable
		 */
		EnableButton: () => LocalizedString
		/**
		 * Disable
		 */
		DisableButton: () => LocalizedString
		/**
		 * Add
		 */
		AddButton: () => LocalizedString
		/**
		 * Copy Link
		 */
		CopyLinkButton: () => LocalizedString
		/**
		 * Copy
		 */
		CopyButton: () => LocalizedString
		/**
		 * Delete
		 */
		DeleteButton: () => LocalizedString
		ServerUrlInput: {
			/**
			 * Server URL
			 */
			Placeholder: () => LocalizedString
		}
		/**
		 * Loading
		 */
		LoadingTitle: () => LocalizedString
		/**
		 * Loading...
		 */
		LoadingParagraph: () => LocalizedString
		/**
		 * Login
		 */
		LoginButton: () => LocalizedString
		/**
		 * Logout
		 */
		LogoutButton: () => LocalizedString
		EmailInput: {
			/**
			 * Email
			 */
			Placeholder: () => LocalizedString
		}
		PasswordInput: {
			/**
			 * Password
			 */
			Placeholder: () => LocalizedString
		}
		ModelOptions: {
			'048b4aa3-5586-47ed-900f-f4341c96bdb2': {
				/**
				 * Stable Diffusion 1.5
				 */
				realName: () => LocalizedString
				/**
				 * General
				 */
				simpleName: () => LocalizedString
			}
			'8acfe4c8-751d-4aa6-8c3c-844e3ef478e0': {
				/**
				 * Openjourney
				 */
				realName: () => LocalizedString
				/**
				 * 3D Digital Art
				 */
				simpleName: () => LocalizedString
			}
			'36d9d835-646f-4fc7-b9fe-98654464bf8e': {
				/**
				 * Arcane Diffusion
				 */
				realName: () => LocalizedString
				/**
				 * 3D Comic
				 */
				simpleName: () => LocalizedString
			}
			'48a7031d-43b6-4a23-9f8c-8020eb6862e4': {
				/**
				 * Ghibli Diffusion
				 */
				realName: () => LocalizedString
				/**
				 * Anime
				 */
				simpleName: () => LocalizedString
			}
			'790c80e1-65b1-4556-9332-196344389572': {
				/**
				 * Mo-Di Diffusion
				 */
				realName: () => LocalizedString
				/**
				 * Animated Movie
				 */
				simpleName: () => LocalizedString
			}
		}
		SchedulerOptions: {
			'55027f8b-f046-4e71-bc51-53d5448661e0': {
				/**
				 * LMS
				 */
				realName: () => LocalizedString
			}
			'6fb13b76-9900-4fa4-abf8-8f843e034a7f': {
				/**
				 * Euler
				 */
				realName: () => LocalizedString
			}
			'af2679a4-dbbb-4950-8c06-c3bb15416ef6': {
				/**
				 * Euler A.
				 */
				realName: () => LocalizedString
			}
		}
		/**
		 * Unknown
		 */
		UnknownTitle: () => LocalizedString
	}
	Error: {
		/**
		 * Something went wrong :(
		 */
		SomethingWentWrong: () => LocalizedString
		/**
		 * NSFW content detected, try another prompt :(
		 */
		NSFW: () => LocalizedString
		/**
		 * The server seems offline. You might want to refresh the page or set another server from the settings.
		 */
		ServerSeemsOffline: () => LocalizedString
		/**
		 * This server isn't compatible or not responding.
		 */
		ServerSetNotWorking: () => LocalizedString
		/**
		 * Not Found
		 */
		NotFound: () => LocalizedString
		/**
		 * Supabase instance not found. Can't listen for generations.
		 */
		SupabaseNotFoundCantListen: () => LocalizedString
	}
	Admin: {
		/**
		 * Admin
		 */
		AdminPanelTitle: () => LocalizedString
		/**
		 * Delete
		 */
		DeleteButton: () => LocalizedString
		/**
		 * Approve
		 */
		ApproveButton: () => LocalizedString
		/**
		 * No generations to review.
		 */
		NoGenerationsToReview: () => LocalizedString
		/**
		 * Servers
		 */
		ServersButton: () => LocalizedString
		/**
		 * Gallery
		 */
		GalleryButton: () => LocalizedString
	}
}

export type Formatters = {}
