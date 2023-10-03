export enum tokenStatus {
    NOTPROVIDED,
    VALID,
    INVALID,
    PENDING,
    EXPIRED,
    EMPTY
}

export enum boardTypes {
    TODO,
    ONGOING,
    BEINGASSESSED
}

export enum taskStatus {
    TODO,
    ONGOING,
    BEINGASSESSED,
    DONE,
    BLOCKED
}

export enum evaluationLevels {
    SEVEREDEFICIENCIES,
    QUALITYMUSTIMPROVE,
    QUALITYSHOULDIMPROVE,
    QUALITYISSATISFYING,
    QUALITYISLEADING,
    NOTASSESSED,
    OTHER
}

export enum companyTypes {
    ALL,
    SINGLE,
    MULTINATIONAL,
    STATEOWNED
}

export enum userRoles {
    ROLE_SUPER_ADMIN,
    ROLE_ADMIN,
    ROLE_USER
}

export enum userRoleNames {
    ROLEEVERTRUST = 'ROLE_EVERTRUST',
    ROLESUPERADMIN = 'ROLE_SUPERADMIN',
    ROLEUSER = 'ROLE_USER'
}

export enum assessmentQuestionTypes {
    FREE,
    MULTIPLE
}

export enum withRespondentsValues {
    NO,
    YES,
    BOTH
}

export enum moduleNames {
    DASHBOARD = "dashboard",
    FRAMEWORK = "framework",
    COMPANYFRAMEWORK = "company-framework",
    TASK = "task",
    ROADMAP = "road_map",
    // REPORTS = "reports",
    REPORTS = "report",
    COMPANY = "company",
    ASSESMENTCENTER = "assessment_center",
    USERMANAGEMENT = "user_management",
    ORGANIZATIONS = "organizations_list",
    // INVENTORY = "inventory",
    INVENTORY = "smart-inventory",
    GAP = "gap",
    MULTIFRAMEWORK = "multi-framework",
    // RISKSCENTER = "risks-center"
    RISKSCENTER = "risk"
}

export enum dashboardTabs {
    OVERVIEW = 'overview',
    DEPARTMENTS_VIEW = 'departments-view',
    GAPSDIGEST = 'gaps-digest',
}

export enum detailPopupBottomTabs {
    COMMENTS = 'comments',
    HISTORY = 'history',
}

export enum manageCompanyTabs {
    ABOUTTHECOMPANY = "about-the-company",
    MANAGEUSERS = "manage-users",
    MANAGEROLES = "manage-roles",
}

export enum manageAccountTabs {
    PROFILE = "profile",
    MYACCOUNT = "my-account",
    NOTIFICATIONSSETTINGS = "notifications-settings",
}

export enum assessmentDetailTabs {
    SUMMARY = "summary",
    DESIGN = "design",
    LAUNCH = "launch",
    ANALYZE = "analyze",
    COMPLIANCERESULTS = "compliance-results"
}

export enum assessmentBuilderQuestionTabs {
    QUESTION = "question",
    GAP = "gap",
    DELIVERABLE = "deliverable",
    HELPTEXT = "help-text"
}

export enum assessmentBuilderTabs {
    DETAILS = 'details',
    BUILDER = 'builder',
    RULES = 'rules',
}

export enum assessmentBuilderSelectedElement {
    SECTION = 'section',
    QUESTION = 'question',
}

export enum assessmentBuilderQuestionTypes {
    SINGLE_SELECT = 'single-select',
    MULTI_SELECT = 'multi-select',
    FREE = 'free',
}

export enum assessmentBuilderQuestionTypeIds {
    SINGLE_SELECT = 1,
    MULTI_SELECT = 2,
    SINGLE_LINE = 3,
    MULTI_LINE = 4,
    ATTACHMENT = 5,
    DATE = 6,
}

export enum assessmentBuilderQuestionTypeLabels {
    SINGLE_SELECT = 'Single select',
    MULTI_SELECT = 'Multi-select',
    SINGLE_LINE = 'Single line text',
    MULTI_LINE = 'Paragraph text',
    ATTACHMENT = 'Attachment',
    DATE = 'Date',
}

export enum analyzeAssessmentTabs {
    EVALUATEANSWERS = "evaluate-answers",
    EVALUATIONIMPACT = "evaluation-impact",
    PREVIEW_RISKS = "preview-risks"
}

export enum notificationsCenterTabs {
    ALL = "all",
    UNREAD = "unread",
    MENTIONS = "mentions",
    ASSIGNEDTOME = "assigned to me",
}

export enum notificationsSettingsTabs {
    FRAMEWORK = "Framework",
    ASSESSMENTCENTER = "Assessment center",
    GAPSCENTER = "Gaps center",
    TASKS = "Tasks",
}

export enum notificationsSettingsEmailFrequencies {
    EVERYNOTIFICATION = "Every notification",
    DAILYDIGEST = "Daily digest",
    WEEKLYDIGEST = "Weekly digest",
    MONTHLYDIGEST = "Monthly digest",
    NONE = "None",
}

export enum notificationModuleNames {
    TASK = 'task',
    GAP = 'gap',
    DELIVERABLE = 'deliverable',
    ASSESSMENT = 'assessment',
    SMART_INVENTORY = 'smart-inventory'
}

export enum notificationActions {
    COMMENT = 'comment',
    MENTION = 'mention',
    COMPLIANCE_LEVEL_UPDATE = 'compliance-level-update',
    ATTACHMENT_ADD = 'attachment-add',
    ATTACHMENT_REMOVE = 'attachment-remove',
    GAP_DATA_UPDATE = 'gap-data-update',
    GAP_DATA_UPDATE_DESCRIPTION = 'gap-data-update-description',
    GAP_DATA_UPDATE_TITLE = 'gap-data-update-title',
    GAP_DATA_UPDATE_RISK = 'gap-data-update-risk',
    GAP_DATA_UPDATE_DEPARTMENT = 'gap-data-update-department',
    GAP_SUGGESTION_TO_CLOSE = "gap-suggestion-to-close",
    TASK_RELATED_GAP_EDITED = "task-related-gap-edited",
    TASK_RELATED_DELIVERABLE_EDITED = "task-related-deliverable-edited",
    TASK_RESPONSIBLE_USER_ASSIGNED = 'task-responsible-user-assigned',
    TASK_EDIT_TITLE = 'task-edit-title',
    TASK_EDIT_DEPARTMENT = 'task-edit-department',
    TASK_EDIT_DATES = 'task-edit-dates',
    TASK_EDIT_DESCRIPTION = 'task-edit-description',
    TASK_STATUS_CHANGE = 'task-status-change',
    TASK_LABEL_CHANGE = 'task-label-change',
    ASSESSMENT_PUBLISHED = 'assessment-published',
    ASSESSMENT_LAUNCHED = 'assessment-launched',
    ASSESSMENT_ADDED_RESPONDENT = 'assessment-added-respondent',
    ASSESSMENT_ADDED_RESPONDENTS = 'assessment-added-respondents',
    ASSESSMENT_RESPOND_SEND = 'assessment-respond-send',
    ASSESSMENT_ALL_RESPONDS_SEND = 'assessment-all-responds-send',
    ASSESSMENT_ANSWERS_STEP_FINISHED = 'assessment-answers-step-finished',
    COMPLIANCE_FRAMEWORK_UPDATED_AFTER_ASSESSMENT = 'compliance-framework-updated-after-assessment'
}

export enum evaluateAnswerAdvancedFiltersCriterias {
    ANSWER = "answer",
    DEPARTMENTID = "departmentId",
    DELIVERABLENUMBER = "deliverableNumber",
    DOMAINID = "domainId",
    COMPLIANT = "compliant",
    RESPONDENTID = "respondentId",
    COMMENT = "comment",
    QUESTIONID = "questionId"
}

export enum evaluateAnswerAdvancedFiltersOperators {
    IS = "is",
    ISNOT = "is_not",
    INCLUDE = "include",
    NOTINCLUDE = "not_include",
    IN = "in",
    NOTIN = 'not_in'
}

export enum assessmentStatusNames {
    NOTSTARTED = 'Not started',
    DRAFT = 'Draft',
    PUBLISHED = 'Published',
    ARCHIVED = 'Archived',
    LAUNCHED = 'Launched',
    READYFORANALYSIS = 'Ready for analysis',
    ANALYZEONGOING = 'Analysis ongoing',
    ANALYZEIMPACT = 'Analyze impact',
    SUBMITTED = 'Submitted',
    ANALYSIS = 'Analysis',
    FINISHED = 'Finished'
}

export enum assessmentStatusTypeIds {
    NOTSTARTED = 0,
    DRAFT = 1,
    PUBLISHED = 2,
    ARCHIVED = 3,
    LAUNCHED = 4,
    READYFORANALYSIS = 5,
    ANALYZEONGOING = 6,
    ANALYZEIMPACT = 7,
    SUBMITTED = 8,
    ANALYSIS = 9,
    FINISHED = 10
}

export enum assessmentSelectedElementTypes {
    SECTION = 'section',
    QUESTION = 'question'
}

export enum assessmentBuilderDetailsPanelTabs {
    DETAILS = 'details',
    HELP_TEXT = 'help text',
    GAPS = 'gaps',
    RULES = 'rules',
    RISKS = 'risks'
}

export enum complianceLevelStatusTypeIds {
    SEVEREDEFICIENCIES = 1,
    QUALITYMUSTIMPROVE = 2,
    QUALITYSHOULDIMPROVE = 3,
    QUALITYISSATISFYING = 4,
    NOTASSESSED = 6
}

export enum complianceLevelStatusTypeIdsNew {
    NOT_ASSESSED = 1,
    SEVERE_DEFICIENCIES = 2,
    QUALITY_MUST_IMPROVE = 3,
    QUALITY_SHOULD_IMPROVE = 4,
    QUALITY_IS_SATISFYING = 5,
}

export enum complianceLevelStatusTypeNames {
    SEVEREDEFICIENCIES = 'Severe deficiencies',
    QUALITYMUSTIMPROVE = 'Quality must improve',
    QUALITYSHOULDIMPROVE = 'Quality should improve',
    QUALITYISSATISFYING = 'Quality is satisfying',
    NOTASSESSED = 'Not assessed'
}

export enum generalMessages {
    FEATUREWILLBEAVAILABLE = 'Feature will be available in the future',
}

export enum commentModuleKeys {
    DOMAIN = 'domain',
    DELIVERABLE = 'deliverable',
    TASK = 'task',
    GAP = 'gap',
    SMART_INVENTORY = 'smart_inventory'
}

export enum historyModuleKeys {
    TASK = 'task',
    GAP = 'gap',
    DELIVERABLE = 'deliverable',
    SMART_INVENTORY = 'smart_inventory'
}

export enum addTaskPopupTypes {
    FROMTASKLIST = 'from-taskList',
    FROMDELIVERABLE = 'from-deliverable',
    FROMGAPDETAIL = 'from-gapDetail'
}

export enum riskExposureLevels {
    MINIMAL = 'minimal',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum riskExposureLevelIds {
    MINIMAL = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
}

export enum gapRiskExposureChangeDropdownSourceTypes {
    LIST = 'list',
    DETAIL = 'detail',
    ASSESSMENT_SUMMARY = 'assessment-summary'
}

export enum GapsExportPopupPromptedFromTypes {
    LIST = 'list',
    MATRIX = 'matrix'
}

export enum homePageTabs {
    INTRO = 'intro',
    NEXTSTEPS = 'next-steps'
}

export enum homePageSteps {
    ASSESSCOMPLIANCE = 'assess-compliance',
    IDENTIFYGAPS = 'identify-gaps',
    EVALUATERISKS = 'evaluate-risks',
    PRIORITIZEANDASSIGNTASKS = 'prioritize-and-assign-tasks',
    FOLLOWUPANDREPORT = 'follow-up-and-report',
    MONITORCOMPLIANCESTATUSANDPROGRESS = 'monitor-compliance-status-and-progress'
}

export enum rbacModules {
    DASHBOARD = "dashboard",
    FRAMEWORK = "framework",
    MULTI_FRAMEWORK = "multi-framework",
    TASK = "task",
    TASKLIST = "task_list",
    ASSESSMENTCENTER = "assessment_center",
    COMPANY = "company",
    ROADMAP = "road_map",
    REPORTS = "report",
    USERMANAGEMENT = "user_management"
}

export enum gapSourceFilterTypes {
    MANUAL = 1,
    ASSESMENT = 2
}

export enum gapStatusFilterTypes {
    CLOSED = 0,
    OPEN = 1
}

export enum taskStatuses {
    BLOCKED = 'blocked',
    WAITINGFORAPPROVAL = 'waiting for approval',
    ONHOLD = 'on hold',
    INPROGRESS = 'in progress',
    COMPLETED = 'completed - approved',
    NOTSTARTED = 'not started'
}

export enum historyLogMetadataDynamicProperties {
    FILENAME = 'file_name',
    LABEL = 'label'
}

export enum historyLogEventTypes {
    DELETE = 'delete',
    INSERT = 'insert',
    UPDATE = 'update',
}

export enum taskDetailStickyAnchorItems {
    TASKTITLE = 'task title',
    TASKDESCRIPTION = 'task description',
    ATTACHMENTS = 'attachments',
    GAPS = 'gaps',
    RISKS = 'risks',
    DEFINITIONOFDONE = 'definition of done',
    INFORM = 'inform'
}

export enum processingActivityStatusNames {
    DRAFT = 'Draft',
    COMPLETED = 'Completed',
    ARCHIVED = 'Archived',
    EXPIRED = 'Expired',
}

export enum processingActivityStatusTypeIds {
    DRAFT = 1,
    COMPLETED = 2,
    ARCHIVED = 3,
    EXPIRED = 4,
}

export enum processingActivityUpdateFrequency {
    EVERYTHREEMONTHS = 'every 3 months',
    EVERYSIXMONTHS = 'every 6 months',
    EVERYYEAR = 'every year',
    OTHER = 'other'
}

export enum processingActivityTypeOfRegPerson {
    EXTERNALAPPLICANTS = 'external applicants',
    INTERNALAPPLICANTS = 'internal applicants',
}

export enum processingActivityStickyAnchorItems {
    GENERALINFORMATION = 'general information',
    ROLESANDRESPONSIBILITIES = 'roles and responsibilities',
    PERSONALDATA = 'personal data',
    ITSYSTEMSANDASSETS = 'it systems and assets',
    DATATRANSFER = 'data transfer',
    OTHERINFORMATION = 'other information',
}

export enum vendorStatusNames {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
}

export enum vendorStatusTypeIds {
    ACTIVE = 0,
    INACTIVE = 1,
}

export enum removeGapFromTaskPopupPromptedFrom {
    TASKDETAIL = 'task-detail',
    GAPDETAIL = 'gap-detail'
}

export enum frameworkBuilderLanguages {
    ENGLISH = 'en',
    SWEDISH = 'sv',
}

export enum frameworkBuilderMainTabs {
    DETAILS = 'details',
    BUILDER = 'builder',
    RELATIONSHIPS = 'relationships',
}

export enum frameworkBuilderSelectedElement {
    DOMAIN = 'domain',
    DELIVERABLE = 'deliverable',
}

export enum tasksLayoutTypes {
    CARD = 'card',
    GRID = 'grid'
}

export enum gapDetailPopupSources {
    GAPSCENTER = 'gaps-center',
    DELIVERABLESINGLE = 'deliverable-single',
    DEPARTMENTGAPS = 'department-gaps',
    TASKDETAILPOPUP = 'task-detail-popup',
    NOTIFICATION_CARD = 'notification-card',
    SMART_INVENTORY = 'smart-inventory'
}

export enum deliverableEditPopupSources {
    DOMAINDETAIL = 'domain-detail',
    DELIVERABLEDETAIL = 'deliverable-detail'
}

export enum frameworkBuilderTypes {
    FRAMEWORK = 'framework',
    TEMPLATE = 'template',
}

export enum frameworkBuilderModes {
    CREATEFRAMEWORK = 'create-framework',
    EDITFRAMEWORK = 'edit-framework',
    CREATETEMPLATE = 'create-template',
    EDITTEMPLATE = 'edit-template',
}

export enum builderDeletePopupTypes {
    DOMAIN = "domain",
    DELIVERABLE = "deliverable"
}

export enum builderDraggedElementTypes {
    SIDEBAR = 'sidebar',
    MAIN = 'main'
}

export enum alertBannerTypes {
    INFO = 'info',
    WARNING = 'warning',
    ALERT = 'alert',
}

export enum attributeStatusTypeNames {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}

export enum attributeStatusTypeIds {
    ACTIVE = 1,
    INACTIVE = 2
}

export enum attributeIconKeys {
    GENERIC = 'generic',
    FLAG = 'flag',
    CALENDAR = 'calendar'
}

export enum attributeTypeValues {
    MULTISELECT = 'multi-select',
    SINGLESELECT = 'single-select',
    DATE = 'date',
    SINGLELINETEXT = 'single-line-text',
    MULTILINETEXT = 'multi-line-text',
}

export enum attributeTypeLabels {
    MULTISELECT = 'Multi select',
    SINGLESELECT = 'Single select',
    DATE = 'Date',
    SINGLELINETEXT = 'Single line text',
    MULTILINETEXT = 'Multi line text',
}

export enum attributeInventoryValues {
    ROPA = 'ropa',
    VENDOR = 'vendor',
    ASSET = 'asset',
    PERSONALDATA = 'personal-data'
}

export enum attributeInventoryLabels {
    ROPA = 'ROPA',
    VENDOR = 'Vendor',
    ASSET = 'Asset',
    PERSONALDATA = 'Personal data'
}

export enum inventoryFieldTypes {
    TEXT_FIELD_SINGLE = 'single-line-text',
    TEXT_FIELD_MULTI = 'multi-line-text',
    SINGLE_SELECT = 'single_select',
    SINGLE_RADIO_SELECT = 'single_radio_select',
    MULTI_SELECT = 'multi_select',
    MULTI_CHECKBOX_SELECT = 'multi_checkbox_select',
    DATE = 'date',
    FILE = 'file',
    RELATION = 'relation'
}

export enum inventoryTypeIds {
    ROPA = 1,
    VENDOR = 2,
    ASSET = 3
}

export enum inventoryTypeLabels {
    ROPA = 'Ropa',
    VENDOR = 'Vendor',
    ASSET = 'Asset'
}

export enum attributesListTabs {
    ROPA = 'Ropa',
    VENDOR = 'Vendor',
    ASSET = 'Asset'
}

export enum inventoryConfiguratorSidebarElementTypes {
    SECTION = 'section',
    ROW = 'row',
    ATTRIBUTE = 'attribute'
}

export enum configuratorDeleteConfirmationPopupElementTypes {
    SECTION = 'section',
    ROW = 'row',
    ATTRIBUTE = 'attribute',
    WIDGET = 'widget',
}

export enum configuratorSidebarElementDraggingTypes {
    SECTION = 'section',
    ROW = 'row',
    ATTRIBUTE = 'attribute',
    WIDGET = 'widget'
}

export enum configuratorBuilderElementDraggingTypes {
    SECTION = 'section',
    ROW = 'row',
    ATTRIBUTE = 'attribute'
}

export enum configuratorSectionDropzoneTypes {
    SECTION = 'section',
    ROW = 'row',
}

export enum configuratorDropEventDataTypes {
    BUILDER_SECTION = "section_element_drop_event_data",
    BUILDER_ROW = "row_element_drop_event_data",
    BUILDER_ATTRIBUTE = "builder_attribute_drop_event_data",
    SIDEBAR_ATTRIBUTE = "sidebar_attribute_drop_event_data",
    SIDEBAR_WIDGET = "sidebar_widget_drop_event_data"
}

export enum personalDataTabs {
    ATTRIBUTES = 'personal data',
    CATEGORIES = 'categories',
    DATA_SUBJECTS = 'data subjects',
    RELATIONSHIPS = 'relationships'
}

export enum inventoryFormConfiguratorSectionTypes {
    SECTION = 'section',
    WIDGET = 'widget'
}

export enum inventoryFormSectionTypes {
    SECTION = 'section',
    WIDGET = 'widget'
}

export enum riskLabelTypes {
    IMPACT = 'impact',
    PROBABILITY = 'probability'
}

export enum inventoryFormConfiguratorTabs {
    CONFIGURATOR = 'configurator',
    ATTRIBUTES = 'attributes'
}

export enum disconnectAssetRopaPopupPromptedFrom {
    ROPA_EDIT = 'ropa-edit',
    ASSET_EDIT = 'asset-edit'
}

export enum disconnectVendorRopaPopupPromptedFrom {
    ROPA_EDIT = 'ropa-edit',
    VENDOR_EDIT = 'vendor-edit'
}

export enum blockTypeTypes {
    PARAGRAPH = 'paragraph',
    LIST = 'list',
    HEADING = 'heading'
}

export enum assessmentRulesOptionLabels {
    NONE = 'none',
    SKIP_TO_NEXT_SECTION = 'skip to next section',
    SKIP_NEXT_QUESTION = 'skip next question',
}

export enum assessmentRulesOptionIds {
    NONE = 0,
    SKIP_TO_NEXT_SECTION = 1,
    SKIP_NEXT_QUESTION = 2,
}

export enum eligibilityTagStatuses {
    COMPLIANT = 'compliant',
    NOT_COMPLIANT = 'not compliant',
    NOT_ASSESSED = 'not assessed',
}

export enum smartInventoryFormTabs {
    DETAILS = 'details',
    GAPS = 'gaps',
    RISKS = 'risks',
    ACTIVITY = 'activity',
    ASSESSMENTS = 'assessments'
}

export enum personalDataExcemptionValues {
    CONSENT = "constent",
    EMPLOYMENT_SOCIAL_SECURITY_SOCIAL_PROTECTION = "Employment, social security, and social protection",
    VITAL_INTERESTS = "Vital interests",
    PUBLIC_INTEREST = "Public interest",
    LEGAL_CLAIMS = "Legal claims",
    HEALTH_OR_SOCIAL_CARE = "Health or social care",
    PUBLIC_HEALTH = "Public health",
    ARCHIVING_RESEARCH_AND_STATISTICS = "Archiving, research, and statistics"
}

export enum inventoryListTabs {
    OWN = "own",
    SHARED = "shared"
}

export enum inventoryEditPageModes {
    OWN = "own",
    SHARED = "shared",
}

export enum assessmentRespondentStatuses {
    NOT_STARTED = 'not started',
    RECEIVED = 'received',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed'
}

export enum assessmentBuilderModes {
    CREATE_ASSESSMENT = 'create-assessment',
    CREATE_TEMPLATE = 'create-template',
    CREATE_ADMIN_TEMPLATE = 'create-admin-template',
    EDIT_TEMPLATE = 'edit-template',
    EDIT_ADMIN_TEMPLATE = 'edit-admin-template',
    UPDATE_EXISTING = 'update-existing'
}

export enum ropasLinkedToVendorThroughTypes {
    ASSET = 'asset',
    PERSONAL_DATA = 'perosnal data'
}

export enum assessmentTemplateTypes {
    MY_TEMPLATES = 'my-templates',
    FRAMEWORK_ADMIN_TEMPLATES = 'framework-admin-templates',
    GLOBAL_ADMIN_TEMPLATES = 'global-admin-templates',
}

export enum ropaListAdvancedFiltersCriterias {
    NAME = 'name',
    CREATEDBY = 'createdBy',
    VENDORS = 'vendors',
    ASSETS = 'assets',
    PERSONAL_DATA_ATTRIBUTES = 'personalDataAttributes',
    PERSONAL_DATA_SUBJECTS = 'personalDataSubjects',
    PERSONAL_DATA_CATEGORIES = 'personalDataCategories',
}

export enum vendorListAdvancedFiltersCriterias {
    NAME = 'name',
    STATUS = 'status',
    CREATED_BY = 'createdBy',
    PERSONAL_DATA_ATTRIBUTES = 'personalDataAttributes',
    PERSONAL_DATA_SUBJECTS = 'personalDataSubjects',
    PERSONAL_DATA_CATEGORIES = 'personalDataCategories',
}

export enum assetListAdvancedFiltersCriterias {
    NAME = 'name',
    STATUS = 'status',
    CREATED_BY = 'createdBy',
    PERSONAL_DATA_ATTRIBUTES = 'personalDataAttributes',
    PERSONAL_DATA_SUBJECTS = 'personalDataSubjects',
    PERSONAL_DATA_CATEGORIES = 'personalDataCategories',
}

export enum globalModuleIds {
    DOMAIN = 1,
    DELIVERABLE = 2,
    TASK = 3,
    GAP = 4,
    ASSESSMENT = 5,
    INVENTORY_ROPA = 6,
    INVENTORY_VENDOR = 7,
    INVENTORY_ASSET = 8,
    INVENTORY_PERSONAL_DATA = 9,
    SMART_INVENTORY = 10
}

export enum assessmentTypes {
    GAP_ANALYSIS = 'gap-analysis',
    RISK_ASSESSMENT = 'risk-assessment',
    DPIA_ASSESSMENT = 'dpia-assessment'
}

export enum assessmentDesigns {
    TRUSTVIEW_TEMPLATES = 'trustviewTemplates',
    MY_TEMPLATES = 'myTemplates',
    START_FROM_SCRATCH = 'startFromScratch'
}

export enum addRiskPopupPromptedFrom {
    RISK_CENTER = 'risk-center',
    INVENTORY_RELATED_RISKS = 'inventory-related-risks',
    ASSESSMENT_BUILDER = 'assessment-builder',
    ASSESSMENT_ANALYZE = 'assessment-analyze',
    WORKSHOP_MODE = 'workshop-mode',
}

export enum riskDetailPopupPromptedFrom {
    RISK_CENTER = 'risk-center',
    ASSESSMENT_SUMMARY = 'assessment-summary',
}

export enum riskDetailPopupTabs {
    DETAILS = 'details',
    TREATMENT = 'treatment',
    ATTACHMENTS = 'attachments',
    ACTIVITY = 'activity'
}

export enum riskCategories {
    REPUTATIONAL = 'reputational',
    PRIVACY = 'PRIVACY',
    SECURITY = 'SECURITY',
    REGULATORY = 'REGULATORY',
    FINANCIAL = 'FINANCIAL',
    OTHER = 'OTHER'
}

export enum riskLevels {
    VERY_HIGH = 'very high',
    HIGH = 'high',
    MODERATE = 'moderate',
    LOW = 'low',
}

export enum issueTypes {
    GAP = 'gap',
    RISK = 'risk'
}

export enum resourcesPermissionRoles {
    ADMIN = 'admin',
    BASIC = 'basic',
    DENIED = 'denied',
}

export enum riskAssessmentAnalyzePopupTabs {
    EVALUATE_ANSWERS = "evaluate answers",
    PREVIEW_RISKS = "preview risks",
}

export enum toggleSwitchVariations {
    YES_NO = 'yes-no',
    ON_OFF = 'on-off',
    ACTIVE_INACTIVE = 'active-inactive'
}

export enum processingActivityStatusUpdateDropdownPromptedFrom {
    LIST = 'list',
    ROPA_DETAIL = 'ropa-detail'
}
