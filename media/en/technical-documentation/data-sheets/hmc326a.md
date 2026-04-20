<!-- lastmod 2025-12-09 -->
<!-- image -->

## FEATURES

- PSAT output power: 26dBm
- 40% PAE
- Output IP3: 36dBm
- High gain: 21dB
- VS: 5V
- 8-lead mini small outline package with exposed pad

## APPLICATIONS

- Microwave radios
- Broadband radio systems
- Wireless local loop driver amplifiers

## HMC326A

## MMIC Driver Amplifier, 3.0GHz to 4.5GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The HMC326A is a monolithic microwave IC (MMIC) driver amplifier that operates between 3.0GHz and 4.5GHz. The amplifier is packaged in a low cost, surface mount 8-leaded mini small outline package with exposed pad for improved RF and thermal performance. The amplifier provides 21dB of gain and 26dBm of saturated power (P SAT ) from a 5V supply voltage (V S ). A power-down capability is available to conserve current consumption when the amplifier is not in use. Internal circuit matching was optimized to provide greater than 40% power added efficiency (PAE).

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

TA = 25°C, V S = 5V, and power-down voltage (V PD ) = 5V, unless otherwise noted.

Table 1. Electrical Specifications

| Parameter                               | Test Conditions/ Comments   | Min   | Typ   | Max   | Unit   |
|-----------------------------------------|-----------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                         |                             | 3.0   |       | 4.5   | GHz    |
| GAIN                                    |                             | 18    | 21    |       | dB     |
| Variation Over Temperature              |                             |       | 0.025 | 0.035 | dB/°C  |
| RETURN LOSS                             |                             |       |       |       |        |
| Input                                   |                             |       | 12    |       | dB     |
| Output                                  |                             |       | 7     |       | dB     |
| OUTPUT POWER FOR 1dB COMPRESSION (P1dB) |                             | 21    | 23.5  |       | dBm    |
| P SAT                                   |                             |       | 26    |       | dBm    |
| OUTPUT THIRD-ORDER INTERCEPT (IP3)      |                             | 32    | 36    |       | dBm    |
| NOISE FIGURE                            |                             |       | 5     |       | dB     |
| CURRENT                                 |                             |       |       |       |        |
| Supply (I CC )                          | V PD = 0V                   |       | 1     |       | μA     |
| Control (I PD )                         | V PD = 5V                   | 110   | 130 7 | 160   | mA mA  |
| SWITCHING SPEED                         | t ON /t OFF                 |       | 10    |       | ns     |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 2. Pin Function Descriptions

| Pin No.    | Mnemonic   | Description                                                                                   |
|------------|------------|-----------------------------------------------------------------------------------------------|
| 1          | VPD        | Power Down Pin.                                                                               |
| 2, 4, 5, 7 | GND        | Ground. Connect the GND pins to a ground plane that has low electrical and thermal impedance. |
| 3          | RFIN       | RF Input.                                                                                     |
| 6          | RFOUT      | RF Output.                                                                                    |
| 8          | VCC        | Connect the VCC pin to positive supply voltage.                                               |

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                                |
|--------------------------|----------------|----------------------------------------------------|
| RH-8-1                   | MINI_SO_EP     | 8-Lead Mini Small Outline Package with Exposed Pad |

For the latest package outline information and land patterns (footprints), go to Package Index.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

<!-- image -->