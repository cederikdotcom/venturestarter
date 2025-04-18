# VentureStarter Prompt Template

Copy and paste this entire template into Claude, then fill in your venture details in the indicated section. Claude will then generate all the necessary documentation for your GitHub repository.

```
I'm launching a new venture called [YOUR VENTURE NAME] and need you to generate all the standard GitHub documentation based on this description:

[PASTE YOUR VENTURE DESCRIPTION HERE - Include concept, target audience, business model, key features, and any technical requirements]

Based on this description, please create the following files as separate artifacts:

1. README.md - Technical instructions for developers
2. docs/salespitch.md - Sales-focused document pitching to potential customers
3. docs/overview.md - Marketing-focused high-level overview (homepage content)
4. docs/architecture.md - Technical explanation of how the product is constructed
5. docs/progress/traction-update-[CURRENT-DATE].md - Initial traction update

For each document, follow these guidelines:

- README.md: Include setup instructions, dependencies, deployment info, and contribution guidelines
- salespitch.md: Focus on benefits, pain points solved, and call to action
- overview.md: Highlight key features, value proposition, and differentiators
- architecture.md: Explain technical stack, components, data flow, and integration points
- traction-update: Document current progress, metrics, and next steps

Please create these as separate artifacts that I can easily copy into my GitHub repository structure.
```

## Example Filled Template

Here's an example of how to fill in the template:

```
I'm launching a new venture called WeatherWise and need you to generate all the standard GitHub documentation based on this description:

WeatherWise is a mobile app that provides hyperlocal weather predictions using a combination of traditional meteorological data and crowdsourced observations. Users can get predictions down to a 100-meter radius, receive alerts for sudden changes, and contribute their own observations to improve accuracy.

The target audience is outdoor enthusiasts, event planners, and anyone whose activities are heavily impacted by weather conditions. The business model is freemium - basic forecasts are free, while advanced features like extended forecasts, removal of ads, and API access require a subscription.

Key features include:
- Hyperlocal weather predictions with 100m accuracy
- Crowdsourced weather observation system
- Machine learning to improve prediction accuracy over time
- Severe weather alerts faster than traditional services
- Historical weather pattern analysis

Technical requirements:
- React Native mobile app for iOS and Android
- Node.js backend with MongoDB
- Integration with traditional weather data APIs
- Machine learning pipeline for prediction refinement
- Geolocation services

Based on this description, please create the following files as separate artifacts:

1. README.md - Technical instructions for developers
2. docs/salespitch.md - Sales-focused document pitching to potential customers
3. docs/overview.md - Marketing-focused high-level overview (homepage content)
4. docs/architecture.md - Technical explanation of how the product is constructed
5. docs/progress/traction-update-2025-04-18.md - Initial traction update

For each document, follow these guidelines:

- README.md: Include setup instructions, dependencies, deployment info, and contribution guidelines
- salespitch.md: Focus on benefits, pain points solved, and call to action
- overview.md: Highlight key features, value proposition, and differentiators
- architecture.md: Explain technical stack, components, data flow, and integration points
- traction-update: Document current progress, metrics, and next steps

Please create these as separate artifacts that I can easily copy into my GitHub repository structure.
```

## Tips for Best Results

1. Be detailed in your venture description
2. Include your target audience and business model
3. List key features and capabilities
4. If technical, mention your planned tech stack
5. Be clear about what makes your venture unique

After Claude generates the artifacts, you can copy each one to the appropriate location in your GitHub repository.
