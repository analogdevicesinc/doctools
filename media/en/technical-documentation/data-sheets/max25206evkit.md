<!-- lastmod 2022-08-02 -->
## MAX25206 Evaluation Kit

## General Description

The MAX25206 evaluation kit (EV kit) provides a proven design to evaluate the MAX25206/8 automotive 2.2MHz synchronous step-down controllers with 7µA I Q . The EV kit PCB comes with a MAX25206 IC installed, as well as various test points and jumpers for evaluation. The EV kit output voltage is fixed and is easily configured with minimum component changes. The default EV kit is designed to deliver up to 7A with input voltages from +3.5V to +60V (MAX25206) and +70V (MAX25208), but can be configured to deliver up to 20A. Output voltage quality can be monitored by observing the PGOOD signal.

## Benefits and Features

- +3.5V to +60V (MAX25206) and +70V (MAX25208) Input Supply Range
- Output Voltage: 5V or 3.3V Fixed or Adjustable between 0.7V to 20V
- Delivers up to 20A Output Current
- Frequency Synchronization Input
- Frequency Synchronization Output
- Spread-Spectrum Control
- Enable Input
- Voltage-Monitoring PGOOD Output
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX25206/8

## Quick Start

## Required Equipment

- MAX25206 EV Kit
- 3.5V to 60V, 7A power supply (power supply should be capable of providing 7A at 3.5V input)
- 1 Digital multimeter (DMM)
- 1 Oscilloscope
- Electronic load capable of sinking 7A

## Procedure

The  MAX25206  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default configurations according to Table 1.
- 2) Connect the positive and negative terminals of the power supply to SUP and GND1 test pads, respectively.
- 3) Set the power-supply voltage to 14V and current limit to 10A.
- 4) Turn on the power supply.
- 5) Verify that OUT is approximately 5V using a digital multimeter.
- 6) Verify that the switching frequency is approximately 2.2MHz by monitoring inductor switching voltage with oscilloscope.

Ordering Information appears at end of data sheet.

<!-- image -->

## Additional Evaluation

- 7) Connect the positive and negative terminals of an electronic load to OUT and GND, respectively.
- 8) Set the electronic load to the desired current at or below 7A or use an equivalent resistive load with an appropriate power rating.
- 9) Turn on the electronic load.
- 10)  Verify that the voltage across V OUT  and GND pads is 5V ±1%.

## Detailed Description of Hardware

## External Synchronization Input

The  device  can  operate  in  two  modes:  forced  PWM  or skip mode. Skip mode has better efficiency for light-load conditions. When SYNC is pulled low, the device operates in  skip  mode  for  light  loads  and  PWM  mode  for  larger loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions. SYNC can be used to synchronize with other supplies if a clock source is present. The device is forced to operate in PWM when SYNC is connected to a clock source.

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS          |
|----------|--------------------------|--------------------|
| ENABLE   | 1&2                      | Buck enabled       |
| SPS      | 2&3                      | No spread spectrum |
| SYNC     | 1&2                      | FPWM mode          |
| ENBK     | 2&3                      | Pulled to ground   |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25206EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX25206/8

## Buck Output Monitoring (PGOOD)

The  EV  Kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is pulled low when the output voltage is out of regulation.

## Evaluating MAX25206/8

The device is available in fixed +5V and +3.3V outputs. The EV kit comes installed with the +5V output version. To  externally  configure  the  output  voltage,  remove  R1 and place appropriate resistors in positions R17 &amp; R19. To  optimize  efficiency,  refer  to  the  MAX25206/7/8  IC datasheet.

│

## MAX25206 EV Kit Bill of Materials

| MAX25206EVKIT# Default: 5Vout,                 | 2.2MHz, 7A                                                                                 | 2.2MHz, 7A                                                                                         |
|------------------------------------------------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| REFERENCE DESIGNATOR                           | QTY DESCRIPTION                                                                            | MFG PART #                                                                                         |
| C4                                             | 1 47µF ±20% 100V Aluminum-Electrolytic Capacitor (CASE H13)                                | EEV-TG2A470Q                                                                                       |
| C5                                             | 1 22000PF ±5% 50V Ceramic Capacitor (0402)                                                 | GCM155R71H223JA55                                                                                  |
| C6                                             | 1 2.2μF ±10% 100V X7R Ceramic Capacitor (1210)                                             | GRM32ER72A225KA35;CGA6N3X7R2A225K230AB;CC1210KKX7R0BB225;HMK325B7225KM                             |
| C8                                             | 1 1000pF ±10% 50V X7R Ceramic Capacitor (0402)                                             | GCM155R71H102KA37                                                                                  |
| C9, C21                                        | 2 4.7μF ±10% 100V X7R Ceramic Capacitor (1210)                                             | CNA6P1X7R2A475K250AE                                                                               |
|                                                |                                                                                            | CC0603KRX7R0BB104;GRM188R72A104KA35;GCJ188R72A104KA01;HMK107B7104KA;06031C104                      |
| C12, C23, C24                                  | 3 0.1μF ±10% 100V X7R Ceramic Capacitor (0603)                                             | KAT2A                                                                                              |
| C16                                            | 1 2.2μF ±10% 10V X7R Ceramic Capacitor (0603)                                              | GRM188R71A225KE15;CL10B225KP8NNN;C1608X7R1A225K080AC                                               |
| C19, C20 L1                                    | 2 47μF ±20% 25V X7R Ceramic Capacitor (2220)                                               | CGA9N3X7R1E476M230KB                                                                               |
| Q2, Q3                                         | 1 1.2μH ±20% 26.3A Composite Inductor 2 N-Channel 80V Surface Mount SO-8L (6.15mmx5.13mm)  | XAL1060-122ME SQJA84EP-T1 GE3                                                                      |
| R1, R2, R6-R8                                  | 5 0Ω Resistor (0402)                                                                       | CRCW04020000Z0EDHP; RCS04020000Z0                                                                  |
| R3                                             | 1 4.02Ω Resistor (0402)                                                                    |                                                                                                    |
|                                                |                                                                                            | CRCW04024R02FKED                                                                                   |
| R4                                             | 1 10k Ω Resistor (0402)                                                                    | CRCW040210K0FK;RC0402FR-0710KL                                                                     |
| R5                                             | 1 1Ω Resistor (0402)                                                                       | CRCW04021R00FK                                                                                     |
| R10                                            | 1 0.01Ω Resistor (2512)                                                                    | PMR100HZPFU10L0                                                                                    |
| R11                                            | 1 100kΩ Resistor (0402)                                                                    | TNPW0402100KBE                                                                                     |
| R12                                            | 1 12kΩ Resistor (0402)                                                                     | ERJ-2RKF1202                                                                                       |
| R15                                            | 1 100kΩ Resistor (0603)                                                                    | RCS0603100KFKEA                                                                                    |
| U1                                             | 1 VERSATILE AUTOMOTIVE 60V 2.2MHZ BUCK CONTROLLER                                          | MAX25206                                                                                           |
| D1                                             | 1 Schottky Diode SMT 100V (SOT23-3)                                                        | BAR46AFILM                                                                                         |
| Alternate Configuration #1: 16Vout, 440kHz, 7A | Alternate Configuration #1: 16Vout, 440kHz, 7A                                             | Alternate Configuration #1: 16Vout, 440kHz, 7A                                                     |
| REFERENCE DESIGNATOR                           | QTY DESCRIPTION H13)                                                                       | MFG PART #                                                                                         |
| C4                                             | 1 47µF ±20% 100V Aluminum-Electrolytic Capacitor (CASE                                     | EEV-TG2A470Q                                                                                       |
| C5                                             | 1 22000PF ±5% 50V Ceramic Capacitor (0402) (1210)                                          | GCM155R71H223JA55                                                                                  |
| C6 C8                                          | 1 2.2μF ±10% 100V X7R Ceramic Capacitor 1 1800pF ±5% 50V X7R Ceramic Capacitor (0402)      | GRM32ER72A225KA35;CGA6N3X7R2A225K230AB;CC1210KKX7R0BB225;HMK325B7225KM GRM155R71H182JA01           |
| C9,                                            | 2 4.7μF ±10% 100V X7R Ceramic Capacitor                                                    |                                                                                                    |
| C21                                            | (1210)                                                                                     | CNA6P1X7R2A475K250AE CC0603KRX7R0BB104;GRM188R72A104KA35;GCJ188R72A104KA01;HMK107B7104KA;06031C104 |
| C12, C23, C24                                  | 3 0.1μF ±10% 100V X7R Ceramic Capacitor (0603)                                             | KAT2A                                                                                              |
| C16 C19, C20                                   | 1 2.2μF ±10% 10V X7R Ceramic Capacitor (0603) 2 47μF ±20% 25V X7R Ceramic Capacitor (2220) | GRM188R71A225KE15;CL10B225KP8NNN;C1608X7R1A225K080AC                                               |
|                                                |                                                                                            | CGA9N3X7R1E476M230KB                                                                               |
| L1                                             | 1 10μH ±20% 15.5A Composite Inductor                                                       | XAL1010-103ME                                                                                      |
| Q2, Q3                                         | 2 N-Channel 80V Surface Mount SO-8L (6.15mmx5.13mm)                                        | SQJA84EP-T1 GE3                                                                                    |
| R2, R6-R8                                      | 4 0Ω Resistor (0402)                                                                       | CRCW04020000Z0EDHP; RCS04020000Z0                                                                  |
| R3                                             | 1 4.02Ω Resistor (0402)                                                                    | CRCW04024R02FKED                                                                                   |
| R4, R17                                        | 2 10k Ω Resistor (0402)                                                                    | CRCW040210K0FK;RC0402FR-0710KL                                                                     |
| R5                                             | 1 1Ω Resistor (0402)                                                                       | CRCW04021R00FK                                                                                     |
| R10                                            | 1 0.01Ω Resistor (2512)                                                                    | PMR100HZPFU10L0                                                                                    |
| R11                                            | 1 100kΩ Resistor (0402)                                                                    | TNPW0402100KBE                                                                                     |
| R12                                            | 1 66.5kΩ Resistor (0402)                                                                   | ERJ-2RKF6652                                                                                       |
| R15                                            | 1 120kΩ Resistor (0603)                                                                    | CRCW0603120KFKEA                                                                                   |
| R19                                            | 1 220kΩ Resistor (0402)                                                                    |                                                                                                    |
|                                                | 1 VERSATILE AUTOMOTIVE 60V 2.2MHZ BUCK CONTROLLER                                          | ERJ-2RKF2203                                                                                       |
| U1                                             |                                                                                            | MAX25206                                                                                           |
| D1                                             | 1                                                                                          | DO NOT INSTALL                                                                                     |
| Alternate Configuration #2: 14Vout,440kHz, 20A | Alternate Configuration #2: 14Vout,440kHz, 20A                                             | Alternate Configuration #2: 14Vout,440kHz, 20A                                                     |
| REFERENCE DESIGNATOR QTY                       | DESCRIPTION                                                                                | MFG PART #                                                                                         |
| C4                                             | 1 47µF ±20% 100V Aluminum-Electrolytic Capacitor (CASE H13)                                | EEV-TG2A470Q                                                                                       |
| C5                                             | 1 22000PF ±5% 50V Ceramic Capacitor (0402)                                                 | GCM155R71H223JA55                                                                                  |
| C6                                             | 1 2.2μF ±10% 100V X7R Ceramic Capacitor (1210)                                             | GRM32ER72A225KA35;CGA6N3X7R2A225K230AB;CC1210KKX7R0BB225;HMK325B7225KM                             |
| C7                                             | 1 240µF ±20% 63V Aluminum-Electrolytic Capacitor (CASE KE0)                                | EMHS630ARA241MKE0S                                                                                 |
| C8                                             | 1 1800pF ±5% 50V X7R Ceramic Capacitor (0402)                                              | GRM155R71H182JA01                                                                                  |
| C9, C21                                        | 2 4.7μF ±10% 100V X7R Ceramic Capacitor (1210)                                             | CNA6P1X7R2A475K250AE                                                                               |
| C10                                            | 1 8.2pF ±0.25% 50V X7R Ceramic Capacitor (0402)                                            | GRM155R71H182JA01                                                                                  |
| C11, C19, C20, C26-28                          | 6 47μF ±20% 25V X7R Ceramic Capacitor (2220)                                               | CGA9N3X7R1E476M230KB                                                                               |
| C12, C23, C24                                  | 3 0.1μF ±10% 100V X7R Ceramic Capacitor                                                    | CC0603KRX7R0BB104;GRM188R72A104KA35;GCJ188R72A104KA01;HMK107B7104KA;06031C104 KAT2A                |
| C16                                            | (0603) 1 2.2μF ±10% 10V X7R Ceramic Capacitor (0603)                                       | GRM188R71A225KE15;CL10B225KP8NNN;C1608X7R1A225K080AC                                               |
| L1                                             | 1 2μH ±20% 26.3A Composite Inductor                                                        |                                                                                                    |
| Q1-Q4                                          | Mount SO-8L (6.15mmx5.13mm)                                                                | XAL1580-202ME                                                                                      |
|                                                | 4 N-Channel 80V Surface                                                                    | SQJA84EP-T1 GE3                                                                                    |
| R2, R6-R8                                      | 4 0Ω Resistor (0402)                                                                       | CRCW04020000Z0EDHP; RCS04020000Z0                                                                  |
| R3                                             | 1 2Ω Resistor (0402)                                                                       | CRCW04022R0FK;CRCW04022R00FK                                                                       |
| R4, R17                                        | 2 10k Ω Resistor (0402)                                                                    | CRCW040210K0FK;RC0402FR-0710KL                                                                     |
| R5                                             | 1 0.51Ω Resistor (0402)                                                                    | ERJ-2BQFR51                                                                                        |
| R10, R13                                       | 2 0.006Ω Resistor (2512)                                                                   | PMR100HZPFU6L00                                                                                    |
| R11                                            | 1 100kΩ Resistor (0402)                                                                    | TNPW0402100KBE ERJ-2RKF6652                                                                        |
| R12                                            | 1 66.5kΩ Resistor (0402)                                                                   | ERJ-3EKF1133                                                                                       |
| R15                                            | 1 113kΩ Resistor (0603)                                                                    | CRCW0402191KFK                                                                                     |
| R19 U1                                         | 1 191kΩ Resistor (0402) 1 VERSATILE AUTOMOTIVE 60V 2.2MHZ BUCK CONTROLLER                  | MAX25206                                                                                           |

Evaluates: MAX25206/8

## MAX25206 EV Kit Schematic

<!-- image -->

│

## MAX25206 EV Kit PCB Layout

MAX25206/8 EVKit PCB Layout - Silkscreen Top

<!-- image -->

MAX25206/8 EVKit PCB Layout - Silkscreen Bottom

<!-- image -->

MAX25206/8 EVKit PCB Layout - Art Film - Top

<!-- image -->

MAX25206/8 EVKit PCB Layout - Internal2

<!-- image -->

│

## MAX25206 EV Kit PCB Layout (continued)

MAX25206/8 EVKit PCB Layout - Internal3

<!-- image -->

MAX25206/8 EVKit PCB Layout - Art Film - Bottom

<!-- image -->

│

## MAX25206 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                    | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------|-----------------|
|                 0 | 12/19           | Initial release                | -               |
|                 1 | 6/20            | Removed references to MAX25207 | 1-7             |
|                 2 | 1/21            | Updated Bill of Materials      | 3               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses arH iPSOiHd  0a[iP ,ntHgratHd rHsHrYHs tKH rigKt to cKangH tKH circuitr\ and sSHcifications ZitKout noticH at an\ tiPH

<!-- image -->

│

Evaluates: MAX25206/8