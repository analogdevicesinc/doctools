<!-- lastmod 2025-12-23 -->
<!-- image -->

## FEATURES

- P1dB output power: 15.5dBm
- Output IP3: 31.5dBm
- Gain: 16dB
- 50Ω inputs and outputs
- Industry standard, 3-lead SOT-89 package
- Included in the HMC-DK001 designer's kit

## APPLICATIONS

- Cellular/PCS/3G
- Fixed wireless and WLAN
- CATV and cable modems
- Microwave radios

## Preliminary Data Sheet

## HMC311AST89

## Gain Block MMIC Amplifier, DC to 6GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The HMC311AST89 is a monolithic microwave IC (MMIC), surface-mounted technology (SMT), DC to 6GHz amplifier. Packaged in an industry standard SOT89E, the amplifier can be used as either a cascadable 50Ω gain stage or to drive the LO of Analog Devices, Inc., mixers with up to a 16.5dBm output power. The HMC311AST89 offers 16dB of gain and an output IP3 of 31.5dBm while requiring only 54mA from a 5V supply. The Darlington feedback pair used results in reduced sensitivity to normal process variations and yields excellent gain stability over temperature while requiring a minimal number of external bias components.

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VS  = 5V, R BIAS = 22Ω, T A = 25°C, unless otherwise noted.

Data taken with broadband bias tee on device output.

Table 1. Electrical Specifications

| Parameter                          | Test Conditions/Comments                                        | Min            | Typ               | Max               | Unit              |
|------------------------------------|-----------------------------------------------------------------|----------------|-------------------|-------------------|-------------------|
| GAIN                               | DC to 1.0GHz 1.0GHz to 4.0GHz 4.0GHz to 6.0GHz                  | 14.0 13.0 12.5 | 16.0 15.0 14.5    |                   | dB dB dB          |
| GAIN VARIATION OVER TEMPERATURE    | DC to 2.0GHz 2.0GHz to 4.0GHz 4.0GHz to 6.0GHz                  |                | 0.004 0.007 0.012 | 0.007 0.012 0.016 | dB/°C dB/°C dB/°C |
| RETURN LOSS INPUT AND OUTPUT       | DC to 2.0GHz 2.0GHz to 5.0GHz 5.0GHz to 6.0GHz                  |                | 8 7 8             |                   | dB dB dB          |
| REVERSE ISOLATION                  | DC to 6GHz                                                      |                | 20                |                   | dB                |
| OUTPUT POWER FOR 1dB COMPRESSION   | DC to 2.0GHz 2.0GHz to 4.0GHz 4.0GHz to 6.0GHz                  | 13.5 12.0 10.0 | 15.5 15.0 13.0    |                   | dBm dBm dBm       |
| OUTPUT THIRD-ORDER INTERCEPT (IP3) | DC to 1.0GHz 1.0GHz to 2.0GHz 2.0GHz to 4.0GHz 4.0GHz to 6.0GHz |                | 31.5 30 27 24     |                   | dBm dBm dBm dBm   |
| NOISE FIGURE                       | DC to 4GHz 4.0GHz to 6.0GHz                                     |                | 4.5 5             |                   | dB dB             |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 2. Pin Function Descriptions

| Pin Number   | Mnemonic   | Description                                                                          |
|--------------|------------|--------------------------------------------------------------------------------------|
| 1            | RFIN       | RF Input. The RFIN pin is DC-coupled. An off-chip DC blocking capacitor is required. |
| 2, 4         | GND        | Ground. The GND pins and package bottom must be connected to RF and DC ground.       |
| 3            | RFOUT      | RF Output and DC Bias for the Output Stage.                                          |

OUT

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                     |
|--------------------------|----------------|-----------------------------------------|
| RK-3                     | SOT-89         | 3-Lead Small Outline Transistor Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.