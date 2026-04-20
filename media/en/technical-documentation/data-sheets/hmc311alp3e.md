<!-- lastmod 2025-12-23 -->
<!-- image -->

## FEATURES

- P1dB output power: 15.5dBm

- Output IP3: 32dBm

- Gain: 14.5dB

- 50Ω inputs and outputs

- 16-lead, 3mm × 3mm body, 0.85 mm package height, LFCSP

## APPLICATIONS

- Cellular/PCS/3G
- Fixed wireless and WLAN
- CATV and cable modems
- Microwave radios

## HMC311ALP3E

## Gain Block MMIC Amplifier, DC to 6GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The HMC311ALP3E is a gain block, monolithic microwave IC (MMIC), surface-mounted technology (SMT), DC to 6GHz amplifiers. This 16-lead, 3mm × 3mm LFCSP packaged amplifier can be used as either a cascadable 50Ω gain stage or to drive the LO of Analog Devices, Inc., mixers with up to 17dBm of output power. The HMC311ALP3E offers 14.5dB of gain and an output IP3 of 32dBm while requiring only 56mA from a 5V supply. The Darlington feedback pair used results in reduced sensitivity to normal process variations and yields excellent gain stability over temperature while requiring a minimal number of external bias components.

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VS  = 5V, R BIAS = 22Ω, T A = 25°C, unless otherwise noted.

Data taken with broadband bias tee on device output.

Table 1. Electrical Specifications

| Parameter                               | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-----------------------------------------|----------------------------|-------|-------|-------|--------|
| GAIN                                    | DC to 1.0 GHz              | 13.0  | 14.5  |       | dB     |
|                                         | 1.0GHz to 4.0GHz           | 12.5  | 14.3  |       | dB     |
|                                         | 4.0GHz to 6.0GHz           | 12.0  | 14.0  |       | dB     |
| GAIN VARIATION OVER TEMPERTURE          | DC to 2.0GHz               |       | 0.005 | 0.008 | dB/°C  |
|                                         | 2.0GHz to 4.0GHz           |       | 0.008 | 0.012 | dB/°C  |
|                                         | 4.0GHz to 6.0GHz           |       | 0.012 | 0.016 | dB/°C  |
| RETURN LOSS INPUT AND OUTPUT            | DC to 1.0GHz               |       | 13    |       | dB     |
|                                         | 1.0GHz to 3.0GHz           |       | 11    |       | dB     |
|                                         | 3.0GHz to 6.0GHz           |       | 15    |       | dB     |
| REVERSE ISOLATION                       | DC to 6GHz                 |       | 18    |       | dB     |
| OUTPUT POWER FOR 1dB COMPRESSION (P1dB) | DC to 2.0GHz               | 13.5  | 15.5  |       | dBm    |
|                                         | 2.0GHz to 4.0GHz           | 12.0  | 15.0  |       | dBm    |
|                                         | 4.0GHz to 6.0GHz           | 10.0  | 13.0  |       | dBm    |
| OUTPUT THIRD-ORDER INTERCEPT (IP3)      | DC to 1.0GHz               |       | 32    |       | dBm    |
|                                         | 1.0GHz to 2.0GHz           |       | 30    |       | dBm    |
|                                         | 2.0GHz to 4.0GHz           |       | 28    |       | dBm    |
|                                         | 4.0GHz to 6.0GHz           |       | 24    |       | dBm    |
| NOISE FIGURE                            | DC to 6GHz                 |       | 4.5   |       | dB     |
| SUPPLY CURRENT (I CQ )                  |                            | 55    |       | 74    | mA     |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin Number             | Mnemonic   | Description                                                                          |
|------------------------|------------|--------------------------------------------------------------------------------------|
| 1, 2, 4 to 9, 11 to 16 | N/C        | No Connect. The N/C pin may be connected to RF ground.                               |
| 3                      | RFIN       | RF Input. The RFIN pin is DC-coupled. An off-chip DC blocking capacitor is required. |
| 10                     | RFOUT      | RF Output and DC Bias for the Output Stage.                                          |
|                        | GND        | Package bottom must be connected to RF and DC ground.                                |

## Table 2. Pin Function Descriptions

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                   |
|--------------------------|----------------|---------------------------------------|
| CP-16-50                 | LFCSP          | 16-Lead Lead Frame Chip Scale Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.