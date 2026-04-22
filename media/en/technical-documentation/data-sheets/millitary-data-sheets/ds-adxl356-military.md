<!-- lastmod 2023-02-20 -->
| REVISIONS   | REVISIONS   | REVISIONS   | REVISIONS   |
|-------------|-------------|-------------|-------------|
| LTR         | DESCRIPTION | DATE        | APPROVED    |

| Prepared in accordance with ASME Y14.24   |
|-------------------------------------------|

<!-- image -->

DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.

## 1.  SCOPE

- 1.1  Scope.  This drawing documents the general requirements of a high performance Low Noise, Low Drift, Low Power, 3-Axis MEMS Accelerometer microcircuit, with an operating temperature range of -55 ° C to +125 ° C.
- 1.2  Vendor Item Drawing Administrative Control Number. The manufacturer's PIN is the item of identification.  The vendor item drawing establishes an administrative control number for identifying the item on the engineering documentation:

V62/18610

Drawing number

- 1.2.1  Device type(s).

Device type 01

- I 01 Device type (See 1.2.1)

Generic

ADXL356 -EP

- 1.2.2  Case outline(s).  The case outlines are as specified herein.

Outline letter

X

Number of pins

14

- I E Lead finish (See 1.2.3)

Circuit function

Low Noise, Low Drift, Low Power, 3-Axis MEMS Accelerometer

Package style

Ceramic Leadless Chip Carrier (LCC) Package

- 1.2.3  Lead finishes.  The lead finishes are as specified below or other lead finishes as provided by the device manufacturer:

| Finish designator   | Material                 |
|---------------------|--------------------------|
| A                   | Hot solder dip           |
| B                   | Tin-lead plate           |
| C                   | Gold plate               |
| D                   | Palladium                |
| E                   | Gold flash palladium     |
| F                   | Tin-lead alloy (BGA/CGA) |
| Z                   | Other                    |

-

- I X Case outline (See 1.2.2)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   2 |

## 1.3  Absolute maximum ratings. 1/

| Acceleration (Any Axis, 0.1 ms) ..............................................................              | 5000 g                     |
|-------------------------------------------------------------------------------------------------------------|----------------------------|
| V SUPPLY , V DDIO ......................................................................................... | 5.4 V                      |
| V1P8ANA, V1P8DIG Configured as Inputs .............................................                         | 1.98 V                     |
| Digital Inputs (RANGE, ST1, ST2, STBY �� �� ��� ) ...............................................           | -0.3 V to V DDIO + 0.3 V   |
| Analog Outputs (X OUT , Y OUT , Z OUT , TEMP) ..............................................                | -0.3 V to V 1P8ANA + 0.3 V |
| Operating temperature range: .................................................................              | -55 ° C to +125 ° C        |
| Storage temperature range .....................................................................             | -65 ° C to 150 ° C         |

## 1.4  Thermal characteristics.

## Thermal resistance

| Case outline   |   θ JA | Unit   |
|----------------|--------|--------|
| Case X 2/      |     42 | ° C/W  |

## 2.  APPLICABLE DOCUMENTS

JEDEC - SOLID STATE TECHNOLOGY ASSOCIATION (JEDEC)

JESD51 -Methodology for the Thermal Measurement of Component Packages (Single Semiconductor Device).

(Applications for copies should be addressed to the Electronic Industries Alliance, 3103 North 10th Street, Suite 240-S, Arlington, VA  22201-2107 or online at https://www.jedec.org)

1/ Stresses beyond those listed under 'absolute maximum ratings' may cause permanent damage to the device.  These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated under 'recommended operating conditions' is not implied.  Exposure to absolute maximum rated conditions for extended periods may affect device reliability.

2/ Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD51.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   3 |

## 3.  REQUIREMENTS

- 3.1 Marking.  Parts shall be permanently and legibly marked with the manufacturer's part number as shown in 6.3 herein and as follows:
- A. Manufacturer's name, CAGE code, or logo
- B. Pin 1 identifier
- C. ESDS identification (optional)
- 3.2  Unit container.  The unit container shall be marked with the manufacturer's part number and with items A and C (if applicable) above.
- 3.3  Electrical characteristics.  The maximum and recommended operating conditions and electrical performance characteristics are as specified in 1.3, 1.4, and table I herein.
- 3.4  Design, construction, and physical dimension.  The design, construction, and physical dimensions are as specified herein.
- 3.5  Diagrams.
- 3.5.1 Case outline.  The case outline shall be as shown in 1.2.2 and figure 1.
- 3.5.2 Terminal connections.  The terminal connections shall be as shown in figure 2.
- 3.5.3 Terminal function.  The terminal function shall be as shown in figure 3.
- 3.5.4 Functional block diagram.  The functional block diagram shall be as shown in figure 4.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   4 |

TABLE I.  Electrical performance characteristics. 1/

| Test                                                       | Test conditions                                                      | Limits   | Limits   | Limits   | Unit       |
|------------------------------------------------------------|----------------------------------------------------------------------|----------|----------|----------|------------|
|                                                            | 2/                                                                   | Min      | Typ      | Max      |            |
| SENSOR INPUT (Each Axis)                                   |                                                                      |          |          |          |            |
| Output Full-Scale Range (FSR)                              | Supports two ranges                                                  |          | ±10/±40  |          | g          |
| Resonant Frequency 3/                                      |                                                                      |          | 5.5      |          | kHz        |
| Nonlinearity                                               | ±10 g                                                                |          | 0.1      |          | %          |
| Cross Axis Sensitivity                                     |                                                                      | I        | 1        | I        | %          |
| SENSITIVITY (Ratiometric to V 1P8ANA )                     |                                                                      |          |          |          |            |
| Sensitivity at XOUT, YOUT, and ZOUT                        | ±10 g                                                                | 73.6     | 80       | 86.4     | mV/ g      |
| Sensitivity at XOUT, YOUT, and ZOUT                        | ±40 g                                                                | 18.4     | 20       | 21.6     | mV/ g      |
| Sensitivity Change Due to Temperature                      | T A = -55°C to +125°C                                                |          | ±0.01    | I        | %/°C       |
| 0 g OFFSET (Each axis, ±10 g )                             |                                                                      |          |          |          | I          |
| 0 g Output for XOUT, YOUT, and ZOUT                        | Referred to V1P8ANA/2                                                | -375     | ±125     | +375     | m g        |
| 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) 4/ | T A = -55°C to +125°C                                                | -0.75    | ±0.5     | 0.75     | m g /°C    |
| Vibration Rectification Error (VRE) 5/                     | Offset due to 7.5 g rms vibration, ±10 g range, in a 1 g orientation |          | <0.1     |          | g          |
| NOISE DENSITY (±10 g )                                     |                                                                      |          |          |          |            |
| X-Axis, Y-Axis, and Z-Axis                                 |                                                                      |          | 80       |          | μ g /√Hz   |
| Velocity Random Walk                                       | X-axis and y-axis                                                    |          | 45       |          | μm/sec/√Hr |
| Velocity Random Walk                                       | Z-axis                                                               | I        | 65       |          | μm/sec/√Hr |
| BANDWIDTH                                                  |                                                                      |          |          |          |            |
| Internal Low-Pass Filter Frequency                         | Fixed frequency, 50% response attenuation                            |          | 1500     |          | Hz         |
| SELF TEST                                                  |                                                                      |          |          |          |            |
| Output change Z-Axis                                       | ±10 g range                                                          |          | 1.25     |          | g          |

See footnote at end of table.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   5 |

TABLE I.  Electrical performance characteristics - Continued. 1/

| Test                                                                                                     | Test conditions      | Limits   | Limits     | Limits          | Unit   |
|----------------------------------------------------------------------------------------------------------|----------------------|----------|------------|-----------------|--------|
|                                                                                                          |                      | Min      | Typ        | Max             |        |
| POWER SUPPLY: Voltage Range                                                                              |                      |          |            |                 |        |
| V SUPPLY 6/                                                                                              |                      | 2.25     | 2.5        | 3.6             | V      |
| Digital Interface Supply Voltage (V DDIO )                                                               |                      | V 1P8DIG | 2.5        | 3.6             | V      |
| Analog Supply (V 1P8ANA ), Digital Supply (V 1P8DIG ) with Internal Low Dropout (LDO) Regulator Bypassed | V SUPPLY = 0 V       | 1.62     | 1.8        | 1.98            | V      |
| POWER SUPPLY: Current                                                                                    |                      |          |            |                 |        |
| Measurement Mode V SUPPLY (LDO Enabled) V 1P8ANA (LDO Disabled) V 1P8DIG (LDO Disabled)                  |                      |          | 150 138 12 |                 | μA     |
| Standby Mode V SUPPLY (LDO Enabled) V 1P8ANA (LDO Disabled) V 1P8DIG (LDO Disabled)                      |                      |          | 21 7 10    |                 | μA     |
| Turn On Time                                                                                             | 10 g range           |          | <10        |                 | ms     |
| 7/                                                                                                       | Power-off to standby |          | <10        |                 | ms     |
| OUTPUT AMPLIFIER                                                                                         |                      |          |            |                 |        |
| Swing                                                                                                    | No load              | 0.03     |            | V 1P8ANA - 0.03 | V      |
| Output Series Resistance                                                                                 |                      |          | 32         |                 | kΩ     |
| TEMPERATURE SENSOR                                                                                       |                      |          |            |                 |        |
| Output at 25°C                                                                                           |                      |          | 963.3      |                 | mV     |
| Scale Factor                                                                                             |                      |          | 3.0        |                 | mV/°C  |
| TEMPERATURE                                                                                              |                      |          |            |                 |        |
| Operating Temperature Range                                                                              |                      | -55      |            | +125            | °C     |

- 1/ Testing and other quality control techniques are used to the extent  deemed necessary to assure product performance over the specified temperature range.  Product may not necessarily be tested across the full temperature range and all parameters may not necessarily be tested.  In the absence of specific parametric testing, product performance is assured by characterization and/or design.
- 2/ TA = 25°C, supply voltage (VSUPPLY) = 3.3 V, x-axis acceleration and y-axis acceleration = 0 g , z-axis acceleration = 1 g , and fullscale range = ±10 g , unless otherwise noted.
- 3/ The resonant frequency is a sensor characteristic. An integrated analog 1.5 kHz (-6 dB) since low-pass filter that cannot be bypassed limits the actual output response.
- 4/ The temperature change is -55°C to +25°C or +25°C to +125°C.
- 5/ The VRE measurement is the shift in dc offset while the device is subject to 12.5 g rms of random vibration from 50 Hz to 2 kHz. The device under test (DUT) is configured for the ±10 g range and an output data rate of 4 kHz. The VRE scales with the range setting.
- 6/ When V1P8ANA and V1P8DIG are generated internally, VSUPPLY is valid. To disable the LDO and drive V1P8ANA and V1P8DIG externally, connect VSUPPLY to VSS.
- 7/ Standby to measurement mode; valid when the output is within 5 m g of the final value.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   6 |

## Case X

<!-- image -->

<!-- image -->

FIGURE 1.  Case outline.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   7 |

<!-- image -->

FIGURE 2.  Terminal connections.

|   Pin No. | Mnemonic       | Description                                                                                                                                                                                                 |
|-----------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RANGE          | Range Selection Pin. Set this pin to ground to select the ±10 g range, or set RANGE to VDDIO to select the ±40 g range.                                                                                     |
|         2 | ST1            | Self Test Pin 1. This pin enables self test mode.                                                                                                                                                           |
|         3 | ST2            | Self Test Pin 2. This pin activates the electromechanical self test actuation.                                                                                                                              |
|         4 | TEMP           | Temperature Sensor Output.                                                                                                                                                                                  |
|         5 | V DDIO         | Digital Interface Supply Voltage.                                                                                                                                                                           |
|         6 | V SSIO         | Digital Ground.                                                                                                                                                                                             |
|         7 | STBY �� �� ��� | Standby or Measurement Mode Selection Pin. Set STBY �� �� ��� to ground to enter standby mode, or set STBY �� �� ��� to V DDIO to enter measurement mode.                                                   |
|         8 | V 1P8DIG       | Digital Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                         |
|         9 | V SS           | Analog Ground.                                                                                                                                                                                              |
|        10 | V 1P8ANA       | Analog Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to VSS, supply the voltage to this pin externally.                                                                            |
|        11 | V SUPPLY       | Supply Voltage. When V SUPPLY equals 2.25 V to 3.6 V, V SUPPLY enables the internal LDO regulators to generate V 1P8DIG and V 1P8ANA . For V SUPPLY = V SS , V 1P8DIG and V 1P8ANA are externally supplied. |
|        12 | X OUT          | X-Axis Output.                                                                                                                                                                                              |
|        13 | Y OUT          | Y-Axis Output.                                                                                                                                                                                              |
|        14 | Z OUT          | Z-Axis Output.                                                                                                                                                                                              |

FIGURE 3.  Terminal function.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   8 |

<!-- image -->

FIGURE 4.  Functional block diagram.

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                   9 |

## 4.  VERIFICATION

- 4.1  Product assurance requirements.  The manufacturer is responsible for performing all inspection and test requirements as indicated in their internal documentation.  Such procedures should include proper handling of electrostatic sensitive devices, classification, packaging, and labeling of moisture sensitive devices, as applicable.

## 5.  PREPARATION FOR DELIVERY

- 5.1  Packaging.  Preservation, packaging, labeling, and marking shall be in accordance with the manufacturer's standard commercial practices for electrostatic discharge sensitive devices.
6.  NOTES
- 6.1  ESDS.  Devices are electrostatic discharge sensitive and are classified as ESDS class 1 minimum.
- 6.2  Configuration control.  The data contained herein is based on the salient characteristics of the device manufacturer's data book. The device manufacturer reserves the right to make changes without notice.  This drawing will be modified as changes are provided.
- 6.3  Suggested source(s) of supply.  Identification of the suggested source(s) of supply herein is not to be construed as a guarantee of present or continued availability as a source of supply for the item.  DLA Land and Maritime maintains an online database of all current sources of supply at https://landandmaritimeapps.dla.mil/programs/smcr/default.aspx
- 1/  The vendor item drawing establishes an administrative control number for identifying the item on the engineering documentation.

| Vendor item drawing administrative control number 1/   |   Device manufacturer CAGE code | Order Quantity      | Vendor part number   |
|--------------------------------------------------------|---------------------------------|---------------------|----------------------|
| V62/18610-01XE                                         |                           24355 | Tray = 280          | ADXL356TEZ-EP        |
| V62/18610-01XE                                         |                           24355 | -RL quantity = 2000 | ADXL356TEZ-EP-RL     |
| V62/18610-01XE                                         |                           24355 | -R7 quantity = 500  | ADXL356TEZ-EP-RL7    |

CAGE code

Source of supply

24355

Analog Devices 1 Technology Way P.O.  Box 9106 Norwood, MA 02062-9106

| DLA LAND AND MARITIME COLUMBUS, OHIO   | SIZE A   | CODE IDENT NO. 16236   | DWG NO. V62/18610   |   DWG NO. V62/18610 |
|----------------------------------------|----------|------------------------|---------------------|---------------------|
|                                        |          | REV                    | PAGE                |                  10 |