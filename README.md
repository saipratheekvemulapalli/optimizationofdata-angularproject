# CO2 Emission Estimation and Reduction Extension

## Problem Statement

The goal of this project is to develop an extension that can estimate the amount of CO2 emissions associated with uploading images of varying sizes to the cloud. Additionally, the extension will help users reduce image sizes and provide feedback on how much CO2 emission reduction is achieved through this resizing.

## Implementation

The calculation of CO2 emissions from storing an image in the cloud involves several variables, with the primary factors being the energy consumption of data centers and the carbon intensity of the energy source used. The following steps outline the basic process:

### 1. **Energy Consumption of Servers:**
   - Data centers consume about 1-3% of the world's electricity. For this project, we assume 2% as the average.
   - The electricity is used for running servers, cooling systems, and other infrastructure.

### 2. **Carbon Intensity:**
   - The carbon intensity of electricity generation varies globally. We use an average value of approximately 0.475 kg CO2 per kWh.

### 3. **CO2 Emissions Calculation:**

For a 1 MB image:
- **Energy Consumption:** 
  - 1 MB * 2% = 0.02 MB of global electricity consumption.
- **CO2 Emissions:** 
  - CO2 Emissions = Energy Consumption * Carbon Intensity.
  - CO2 Emissions = 0.02 MB * 0.475 kg CO2/kWh.
  - CO2 Emissions = 0.0095 kg CO2 or 9.5 g CO2.

> Note: This calculation only considers the energy consumption of servers and assumes average carbon intensity. It does not account for factors like cooling, networking, or regional differences in carbon intensity.

## Advantages

### 1. **Reduced Carbon Footprint:**
   - By decreasing image file sizes, the project contributes to energy conservation during image transmission, storage, and rendering.

### 2. **Improved User Experience:**
   - Users benefit from faster loading times and reduced data usage, especially on mobile devices and in regions with limited internet connectivity.

### 3. **Industry Adoption:**
   - The project encourages collaboration with tech companies, social media platforms, and content creators to promote the adoption of sustainable image compression practices.

**To install nodemodules**
   ```bash
   npm install```


## How to Clone

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
