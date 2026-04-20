<!-- lastmod 2025-12-23 -->
<!-- image -->

## FEATURES

- P1dB output power: 15dBm
- Output IP3: 30dBm
- Gain: 15dB
- Cascadable, 50Ω inputs and outputs
- Single supply: 5V
- Industry standard, 6-lead SC70 package

## APPLICATIONS

- Cellular/PCS/3G
- WiBro/WiMAX/4G
- Fixed wireless and WLAN
- CATV and cable modems
- Microwave radios and test equipment

## Preliminary Data Sheet

## HMC311ASC70

## Gain Block MMIC Amplifier, DC to 8GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The HMC311ASC70 is a monolithic microwave IC (MMIC), surfacemounted technology (SMT), DC to 8GHz amplifier. Packaged in an industry standard SC70, the amplifier can be used as either a cascadable 50Ω gain stage or to drive the LO port of Analog Devices, Inc., mixers with up to 15dBm of output power. The HMC311ASC70 offers 15dB of gain and an output IP3 of 30dBm while requiring only 54mA from a 5V supply. The Darlington topology results in reduced sensitivity to normal process variations and yields excellent gain stability over temperature while requiring a minimal number of external bias components.

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VS  = 5V, R BIAS = 22Ω, T A = 25°C, unless otherwise noted.

Data taken with broadband bias tee on device output.

Table 1. Electrical Specifications

| Parameter                                                 | Test Conditions/Comments                                        | Min            | Typ                     | Max                     | Unit                    |
|-----------------------------------------------------------|-----------------------------------------------------------------|----------------|-------------------------|-------------------------|-------------------------|
| GAIN                                                      | DC to 1.0GHz 1.0GHz to 4.0GHz 4.0GHz to 6.0GHz                  | 14.0 13.0 12.5 | 15.0 15.0 14.5          |                         | dB dB dB                |
| GAIN VARIATION OVER TEMPERATURE                           | DC to 1.0GHz 1.0GHz to 4.0GHz 4.0GHz to 6.0GHz 6.0GHz to 8.0GHz |                | 0.004 0.007 0.012 0.018 | 0.007 0.012 0.016 0.022 | dB/°C dB/°C dB/°C dB/°C |
| RETURN LOSS INPUT AND OUTPUT                              | DC to 8.0GHz                                                    |                | 15                      |                         | dB                      |
| REVERSE ISOLATION Output POWER FOR 1dB COMPRESSION (P1dB) | DC to 8.0GHz DC to 2.0GHz 2.0GHz to 4.0GHz                      | 13.5 12.0      | 18 15.5                 |                         | dB                      |
| OUTPUT THIRD-ORDER INTERCEPT (IP3)                        | 4.0GHz to 6.0GHz 6.0GHz to 8.0GHz DC to 2.0GHz 2.0GHz to 6.0GHz | 10.0 8.0       | 15.0 13.0 11.0 30       |                         | dBm dBm dBm dBm dBm     |
|                                                           | 6.0GHz to 8.0GHz DC to 8.0GHz                                   |                | 27 24 5                 |                         | dBm dBm                 |
| NOISE FIGURE                                              |                                                                 |                |                         |                         | dB                      |
| SUPPLY CURRENT (I                                         |                                                                 |                |                         | 74                      | mA                      |
| CQ )                                                      |                                                                 |                | 55                      |                         |                         |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 2. Pin Function Descriptions

| Pin No.    | Mnemonic   | Description                                                                          |
|------------|------------|--------------------------------------------------------------------------------------|
| 1, 2, 4, 5 | GND        | Ground. The GND pins must be connected to RF and DC ground.                          |
| 3          | RFIN       | RF Input. The RFIN pin is DC-coupled. An off-chip DC blocking capacitor is required. |
| 6          | RFOUT      | RF Output and DC Bias for the Output Stage.                                          |

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                                 |
|--------------------------|----------------|-----------------------------------------------------|
| KS-6                     | SC70           | 6-Lead Thin Shrink Small Outline Transistor Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.