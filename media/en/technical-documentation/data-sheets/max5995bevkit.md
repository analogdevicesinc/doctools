<!-- lastmod 2022-08-03 -->
## MAX5995B Evaluation Kit

## General Description

The MAX5995 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  an Ethernet  port,  network  powered-device  (PD)  interface controller circuit for -57V supply rail systems. The EV kit uses the MAX5995B  IEEE ®   802.3af/at/bt-compliant network PD interface controller in a 16-pin TQFN package with  an  exposed  pad.  The  IC  is  used  in  Power-overEthernet  (PoE)  applications  requiring  DC  power  from an Ethernet network port for PDs such as VoIP phones, wireless  access  nodes,  security  cameras,  lighting,  and building automation.

The  EV  kit  receives  power  from  IEEE  802.3af/at/btcompliant  power-sourcing  equipment  (PSE).  Refer  to the  MAX5952,  MAX5965A/MAX5965B,  and  MAX5980 IC  data  sheets  for  PSE  controllers.  The  PSE  provides the required -36V to -57V DC power over an unshielded twisted-pair Ethernet network cable to the EV kit's RJ45 magnetic jack. The EV kit features a 1 x 1 Gigabit RJ45 magnetic  jack  and  two  active  full-wave  rectifiers  (N101 and N102) for separating the DC power provided by an endspan or midspan Ethernet system.

The EV kit can also be powered by a wall adapter power source.  The  EV  kit  provides  PCB  pads  to  accept  the output  of  a  wall  adapter  power  source.  When  a  wall adapter  power  source  is  detected,  it  always  takes precedence  over  the  PSE  source  and  allows  the  wall adapter to power the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the IC,  such  as  PD  detection  signature,  PD  classification signature,  Multi-Event  Classification  (MEC),  Intelligent MPS, inrush  current  control,  input  undervoltage  lockout (UVLO), and DC-DC step-down converter. The step-down converter operates at a fixed 290kHz switching frequency and is configured for an isolated active-clamped forward topology  with  output  voltage  +12V  DC  that  can  deliver 5.5A of current.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

Warning: The EV kit is designed to operate with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriately to work with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

<!-- image -->

Evaluates: MAX5995A/B/C/MAX5974D

## Features

- IEEE 802.3af/at/bt-Compliant PD Interface Circuit
- Multi-Event Classification 0-8
- -36V to -57V Input Range
- Demonstrates a 71W PD Design with Isolated ActiveClamped Forward Topology DC-DC Converter
- +12V Output at 5.5A
- Startup Inrush Current Limit of 135mA (typ)
- Current Limit During Normal Operation
- Evaluates Endspan and Midspan Ethernet Systems
- Type 1-4 PSE Classification Indicator
- Simplified Wall Adapter Interface
- Demonstrates Sleep and Ultra-Sleep Power-Saving Modes
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX5995\_EVKIT\_A
- An IEEE 802.3af/at/bt compliant PSE and a Category 5e Ethernet network cable
- -48V, 3A capable DC power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Use one of the following methods to power the EV kit:
- a) If network connectivity is required: Connect a Category 5e Ethernet network cable from the EV kit  input port RJ45 connector to the corresponding  PSE  Ethernet  LAN  connection  that  provides power to the EV kit.
- b) If network connectivity is not required: Connect  a  -48V  DC  power  supply  between  the -54V and GND PCB pads on the EV kit. Connect the  power-supply  positive  terminal  to  the  GND pad and the negative terminal to the -54V pad.
- 2) Activate the PSE power supply or turn on the external DC power supply.
- 3) Using a voltmeter, verify that the EV kit provides +12V across the V OUT  and RTN PCB pads.

## Detailed Description of Hardware (or Software)

The MAX5995 EV kit features an Ethernet port and  network  PD  interface  controller  circuit  for  -57V supply rail systems. The EV kit contains a IEEE ®  802.3af/ at-compliant  network  PD  interface  controller  in  a  16-pin TQFN-EP package. The IC is used in  PoL  applications for powering PDs from an unshielded twisted-pair (UTP) Ethernet Category 5e network cable and PSE port using endspan or midspan Ethernet systems.

The  EV  kit  receives  power  from  an  IEEE  802.3af/ at-compliant PSE and a UTP cable connected to the EV kit's RJ45 magnetic jack. The EV kit uses a 1 x 1 gigabit RJ45 magnetic jack and two active full-wave bridge power rectifiers to separate the -57V DC power sent by the PSE. The EV kit can accept power from an endspan or midspan PSE network configuration.

## Evaluates: MAX5995A/B/C/MAX5974D

The  EV  kit  can  also  accept  power  from  a  wall  adapter power  source.  When  a  wall  adapter  power  source  is detected between the POWER+ and POWER- pads, the IC's internal isolation switch disconnects, which allows the wall adapter to supply power to the EV kit.

The  EV  kit  demonstrates  the  full  functionality  of  the  IC such as PD detection signature, PD classification signa -ture,  Multi-Event  Classification  (MEC),  Intelligent  MPS, inrush current control, and UVLO. Resistor R101 sets the PD detection impedance. Resistors R44 and R6 set the PD classification signatures.

The  EV  kit's  integrated  DC-DC  step-down  converter  is configured  for  an  isolated  ACTIVE-CLAMPED  forward converter  topology  with  output  voltage  of  +12V  and provides up to 5.5A at the output while achieving up to 92.5%,  92.4%  and  92%  efficiencies  for  42V/48V/57V input, respectively. The step-down converter operates at a fixed 290kHz switching frequency.

## PD Class selection by Classification resistors

By selecting the two external resistors connected to CLSA and CLSB pins, the power consumption requested by the PD can be defined. Table  1  shows  the  the  R CLSA   and RCLSB resistor values needed to set for PD class and the PD power consumption defined by standards. R CLSA sets classification current for the 1st and 2nd class Events for 0~4 class  PD  complaint  with  IEEE  802.3af/at  standard, and  RCLSB set  classification  current  for  the  3rd  to  5th class event for 0~8 class PD complaint with IEEE 802.3bt standard.

## Table 1. PSE Type and PD Class with Classification Resistor RCLSA and RCLSB

|   PD CLASS | POWER REQUESTED BY PD   |   R CLSA | R CLSB   |
|------------|-------------------------|----------|----------|
|          0 | 12.95W                  |      619 | OPEN     |
|          1 | 3.84W                   |      118 | OPEN     |
|          2 | 6.49W                   |     66.5 | OPEN     |
|          3 | 12.95W                  |     43.2 | OPEN     |
|          4 | 25.5W                   |     30.9 | 30.9     |
|          5 | 38.25W                  |     30.9 | 619      |
|          6 | 51W                     |     30.9 | 118      |
|          7 | 61W                     |     30.9 | 66.5     |
|          8 | 71W                     |     30.9 | 43.2     |

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

## Wall Adapter Power Source (POWER+, POWER-)

The  EV  kit  can  also  accept  power  from  a  wall  adapter power  source.  Use  the  POWER+  (0V)  and  POWER(-10V  to  -57V)  PCB  pads  to  connect  the  wall  adapter power source. The wall adapter power source operatingvoltage range must be within +10V to +57V for the EV kit.

When  the  wall  adapter  power  source  is  above  +10V  it always takes precedence over the PSE source. Once the wall  adapter  power source is detected, the IC's internal isolation  switch  disconnects.  The  wall  adapter  power  is supplied to V DD  through diode S210. Once it takes over, the classification process is disabled.

When the wall adapter power source is below +8V, the PSE  provides  power  through  the  IC's  internal  isolation switch. Diode S210 prevents the PSE from back-driving the wall adapter power source when it is below +8V.

## Undervoltage Lockout (UVLO)

The EV kit operates up to a -57V supply with a turn-on UVLO  threshold  (V ON )  at  -35.4V  and  a  turn-off  UVLO threshold  (V OFF )  at  -30.0V.  When  the  input  voltage  is above V ON , the EV kit is enabled. When the input voltage goes below V OFF , the EV kit is disabled.

## Sleep, Ultra-Sleep Modes and LED Operation

The  EV  Kit  supports  operating  the  MAX5995  in  power saving  modes  such  as  the  Sleep  and  Ultra  Sleep.  By using the SW3 DIP-switch, the SL pin could be driven low to enter the Sleep mode. The ultra-sleep mode could be entered by driving both SL and ULP pin to low (using DIP switch SW1, SW3). The device could be commanded to exit sleep or ultra-sleep mode by driving the WK pin low through the switch SW2.

The device features a dedicated LED pin which can be programmed to source out current when the device is in MPS, sleep or ultra-sleep modes. Diode named LED connects between LED pin and V SS  and lights up in green color to indicate LED current. The magnitude of the LED current  can  be  controlled  as  per  the  value  of  the  R105 resistor connected between the SL pin and V SS .

## EV Kit Compliance to MAX5995A, MAX5995C

By  default,  the  EV  kit  is  installed  with  MAX5995B  IC. However,  the  EV  kit  can  also  be  used  to  evaluate  the MAX5995A  and  MAX5995C  variants  of  the  IC  without any  change  in  schematic.  Do  note  that  for  evaluating MAX5995C, the duty cycle of the MPS current is selectable through the choice of the resistor R40. This resistor should not be installed while evaluating MAX5995A, MAX5995B.

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| CoilCraft                | www.coilcraft.com        |
| Comchip                  | www.comchiptech.com      |
| Diodes Incorporated      | www. diodes.com          |
| Emerson Network Power    | www.vertivco.com         |
| Fairchild Semiconductor  | www.onsemi.com           |
| Kemet                    | www.ir.kemet.com         |
| Keystone                 | www.keyelco.com          |
| Lite-On Electronics      | www. us.liteon.com       |
| Maxim Integrated         | www.maximintegrated.com  |
| Murata                   | www.murata .com          |
| On Semiconductor         | www.onsemi.com           |
| Panasonic                | www.panasonic.com        |
| Pulse Electronics        | www.pulseelectronics.com |
| Renesas Technology Group | www.renesas.com          |
| Samsung Electronics      | www.samsung.com          |
| Stackpole Electronics    | www.seielect.com         |
| Sumida                   | www.sumida.com           |
| Taiyo Yuden              | www.yuden.co.jp          |
| TDK                      | www.us.tdk.com           |
| TE Connectivity          | www.te.com               |
| Texas Instruments        | www.ti.com               |
| Vishay Dale              | www.vishay.com           |
| Wurth Elektronik         | www.we-online.com        |

Note: Indicate that you are using the MAX5995 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5995BEVKIT# | EVKIT  |

# Denotes RoHS compliant.

## MAX5995B Evaluation Kit

## MAX5995B EV Kit Bill of Materials

| PART                    |   QTY | DESCRIPTION                                                                       |
|-------------------------|-------|-----------------------------------------------------------------------------------|
| C1                      |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C105KA01               |
| C2, C11, C31, C36       |     4 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101JA01              |
| C3, C5, C10             |     3 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) Tdk CGA3E2X7R1H473K080AA           |
| C4, C32                 |     2 | 0.01µF ±5%, 50V X7R ceramic capacitor (0603) Kemet C0603C103J5RAC                 |
| C6                      |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Taiyo Yuden EMK107B7105KA              |
| C7, C8, C13             |     3 | 2.2µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32ER72A225KA35            |
| C14                     |     1 | 0.047µF ±10%, 500V X7R ceramic capacitor (1206) Vishay Vitramon VJ1206Y473KXEAT5Z |
| C15, C23, C25           |     3 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GCJ188R71H104KA12             |
| C19                     |     1 | 220pF ±10%, 250V X7R ceramic capacitor (0603) Murata GRM188R72E221K               |
| C21, C22, C24, C33, C60 |     5 | 1000pF ±10%, 250V X7R ceramic capacitor (2211) Murata GA352QR7GF102KW01)          |
| C26                     |     1 | 100µF ±20%, 16V X7R tantalum capacitor (7343) Panasonic 16TQC100MYF               |
| C27-C30, C34            |     5 | 22µF ±10%, 16V X5R ceramic capacitor (1206) Samsung Electronics CL31A226KOCLFN    |
| C38                     |     1 | 33µF ±20%, 100V aluminium electrolytic capacitor (Case G) Panasonic EEE-FK2A330P  |
| C39                     |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472KA01            |

Evaluates: MAX5995A/B/C/MAX5974D

| PART             |   QTY | DESCRIPTION                                                                                                       |
|------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C41              |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM39X7R222K50V                                              |
| C45              |     1 | 2200pF ±10%, 2000V X7R ceramic capacitor (1206) Kemet C1206X222KGRAC                                              |
| C56-C59          |     4 | 0.1µF ±10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A104KAC4                                            |
| C93, C105        |     2 | 0.1µF ±10%, 100V X7R ceramic capacitor (0603) Murata GCJ188R72A104KA01                                            |
| C101             |     1 | 0.068µF ±5%, 100V C0G ceramic capacitor (1206) Tdk CGA5L1C0G2A683J160                                             |
| D2, D3, D6, D7   |     4 | Schottky Diode, 100V, 2A, SMB Comchip CDBB2100-G                                                                  |
| D9, D10, D12-D15 |     6 | Diode, 250V, 0.25A, SOD-323 Diodes Incorporated BAV21WS-7-F                                                       |
| D11              |     1 | Zener Diode, 10V, 0.005A, SOD-323 Diodes Incorporated BZT52C10S-7-F                                               |
| D16              |     1 | Zener Diode, 16V, 0.005A, SOD-323 Diodes Incorporated BZT52C16S-7-F                                               |
| D17, D18         |     2 | Rectifier bridge diode, 100V, 1.5A, SMT Diodes Incorporated DF1501S                                               |
| D19              |     1 | TVS Diode, 120V, 2A, SMADiodes Incorporated SMAJ120A-13-F                                                         |
| D20              |     1 | Zener Diode, 18V, 0.05A, SOD-323 Diodes Incorporated BZT52C18S-7-F                                                |
| D101             |     1 | TVS Diode, 58V, 100A, SMB Diodes Incorporated SMBJ58A-13-F                                                        |
| D103             |     1 | Schottky Diode, 100V, 2A, SMT Fairchild Semiconductor S210                                                        |
| D105-D108        |     4 | Zener Diode, 12V, 0.005A, SOD-323 On Semiconductor MM3Z12VT1G                                                     |
| H1-H4            |     4 | Standoff, 1/2 Inch, Female-Threaded, Hex, Aluminium Generic Part 2203                                             |
| H5-H8            |     4 | Phillips machine screw, 1/4 Inch, Stainless Steel Mcmaster-Carr; Keystone; Mcmaster-Carr 4C25MXPS; 9900;91772A106 |

│

## MAX5995B EV Kit Bill of Materials (continued)

| PART              |   QTY | DESCRIPTION                                                                        |
|-------------------|-------|------------------------------------------------------------------------------------|
| J1_DATA, J1_POWER |     2 | RJ45 Modular Jack Connector, Female, Through Hole, 8Pins Te Connectivity 5520252-4 |
| L1                |     1 | Inductor; Ferrite, 1000µH ±20%, 0.125A, SMT Coilcraft LPS4018-105MR                |
| L2                |     1 | Inductor, Sheilded, 2.2µH ±20%, 6.0A, SMT Sumida CDMC6D28NP-2R2MC                  |
| L3                |     1 | Inductor, Sheilded, 4.7µH ±20%, 12.5A, SMT Sumida CDEP147NP-4R7MC-95               |
| L4-L7             |     4 | Inductor, Ferrite-Bead, 220, Tol = ±25%, 2A, SMT Murata BLM18EG221SN1              |
| L8-L15            |     8 | Inductor, Ferrite, 4.7µH ±20%, 1.10A, SMT (1008) Murata LQM2HPN4R7MG0              |
| LED               |     1 | LED Diode, 2.1V, 0.03A, Green, SMT (1206) Lite-On Electronics Inc. LTST-C150GKT    |
| N7                |     1 | MOSFET N-channel, 150V, 26A, SO-8 Vishay Siliconix SI7430DP-T1-GE3                 |
| N9, N11           |     2 | MOSFET N-channel, 100V, 60A, SO-8 Vishay Siliconix SIR882DP-T1-GE3                 |
| N12               |     1 | MOSFET P-channel, -150V, -8.9A, Powerpak1212-8 Vishay Siliconix SI7115DN-T1-GE3    |
| N101, N102        |     2 | MOSFET N-channel, 100V, 4.5A, SO-8 On Semiconductor FDS3992                        |
| Q1                |     1 | Transistor NPN, 80V, 1A, SOT-89 Diodes Incorporated BCX5610TA                      |
| Q2                |     1 | Transistor PNP, 40V, 0.6A, SOT-23 Fairchild Semiconductor MMBT4403                 |
| R1                |     1 | 316kΩ ±1% Resistor (0603) Vishay Dale CRCW0603316KFK                               |
| R2                |     1 | 100kΩ ±1% Resistor (0805) Panasonic ERJ-6ENF1003V                                  |
| R3                |     1 | 1.5kΩ ±0.1% Resistor (0603) Panasonic ERA-3YEB152V                                 |
| R4, R31, R33, R54 |     4 | 10kΩ ±0.1% Resistor (0603) Vishay Dale TNPW060310K0BE                              |
| R5, R36           |     2 | 75kΩ ±0.1% Resistor (0603) Panasonic ERJ-PB3B7502                                  |

| PART               |   QTY | DESCRIPTION                                                        |
|--------------------|-------|--------------------------------------------------------------------|
| R6                 |     1 | 115Ω ±1% Resistor (0603) Vishay Dale CRCW0603115RFK                |
| R7                 |     1 | 30kΩ ±1% Resistor (0603) Vishay Dale CRCW060330K0FK                |
| R8, R79            |     2 | 0Ω ±5% Resistor (0603) Samsung Electronics RC1608J000CS            |
| R9, R102, R104     |     3 | 0Ω ±0% Resistor (0603) Vishay Dale CRCW06030000Z0                  |
| R10                |     1 | 51kΩ ±1% Resistor (0805) Vishay Dale CRCW080551K0FK                |
| R11, R21, R23, R28 |     4 | 499kΩ ±1% Resistor (0402) Panasonic ERJ-2RKF4993                   |
| R13, R41-R43       |     4 | 3Ω ±1% Resistor (0603) Vishay Draloric CRCW06033R00FKEAHP          |
| R15, R22, R27, R38 |     4 | 49.9kΩ ±1% Resistor (0402) Vishay Draloric CRCW040249K9FKEDHP      |
| R16                |     1 | 3.6kΩ ±1% Resistor (0603) Vishay Dale RK73H1J3601F                 |
| R17, R30           |     2 | 1kΩ ±0.1% Resistor (0603) Vishay Dale TNPW06031K00BE               |
| R18                |     1 | 42.2kΩ ±0.1% Resistor (0805) TE Connectivity RN73C2A42K2B          |
| R19                |     1 | 200kΩ ±1% Resistor (0603) Vishay Dale CRCW06032003FK               |
| R20                |     1 | 510Ω ±1% Resistor (0603) Vishay Dale CRCW0603510RFK                |
| R24                |     1 | 200Ω ±1% Resistor (1206) Vishay Dale CRCW1206200RFK                |
| R25, R29           |     2 | 200Ω ±1% Resistor (0603) Vishay Dale CRCW06032000FK                |
| R26                |     1 | 120kΩ ±1% Resistor (0603) Vishay Dale CRCW0603120KFK               |
| R32                |     1 | 2kΩ ±1% Resistor (0603) Stackpole Electronics Inc. RNCP0603FTD2K00 |
| R34                |     1 | 3.3kΩ ±1% Resistor (0603) Vishay Dale CRCW06033K30FK               |
| R35                |     1 | 13kΩ ±1% Resistor (0603) Vishay Dale CRCW060313K0FK                |
| R37                |     1 | 10Ω ±1% Resistor (0603) Vishay Dale CRCW060310R0FK                 |

│

## MAX5995B EV Kit Bill of Materials (continued)

| PART                              |   QTY | DESCRIPTION                                                                        |
|-----------------------------------|-------|------------------------------------------------------------------------------------|
| R44                               |     1 | 30.9Ω ±1% Resistor (0603) Vishay Dale CRCW060330R9FK                               |
| R45, R46                          |     2 | 0.04Ω ±1% Resistor (1206) Vishay Dale WSL1206R0400F                                |
| R74-R77                           |     4 | 75Ω ±5% Resistor (0805) Stackpole Electronics Inc. RMCF0805JT75R0                  |
| R101                              |     1 | 24.9kΩ ±1% Resistor (1206) Vishay Dale CRCW120624K9FK                              |
| R105                              |     1 | 60.4kΩ ±1% Resistor (0603) Vishay Dale CRCW060360K4FK                              |
| R107                              |     1 | 24.9kΩ ±1% Resistor (0603) Vishay Dale CRCW060324K9FK                              |
| R108                              |     1 | 100kΩ ±1% Resistor (0603) Vishay CRCW0603100KFK                                    |
| R109                              |     1 | 49.9kΩ ±1% Resistor (0603) Vishay Dale CRCW060349K9FK                              |
| RTN, VOUT                         |     2 | Banana Jack Connector, Straight, 1Pin Emerson Network Power 108-0740-001           |
| SW1-SW3                           |     3 | Surface Mount Switch SPST, 24V, 0.05A Omron B3FS-1000P                             |
| T1                                |     1 | Power Transformer, SMT-12 Pulse PA5318NL                                           |
| T2                                |     1 | LAN Transformer, Turns Ratio: 1:1, 350µH, 100Khz, SMD, Wurth Elektronik 7490220126 |
| TP1, TP3, TP22                    |     3 | Black Test Point; Dia 0.1Inch Keystone 5000                                        |
| TP2, TP4                          |     2 | Red Test Point; Dia 0.1Inch Keystone 5001                                          |
| TP7, TP10-TP12, TP17, TP25, TP111 |     7 | Orange Test Point; Dia 0.1Inch Keystone 5003                                       |
| TP8, TP9, TP13-TP16, TP19, TP20   |     8 | Blue Test Point; Dia 0.1Inch Keystone 5117                                         |
| U1                                |     1 | Powered Device, 802.3af/at/bt compliant, YQFN-16 Maxim MAX5995BETE+                |
| U2, U6-U8                         |     4 | Phototransistor Optocoupler, SMT Fairchild Semiconductor FOD817ASD                 |

| PART                                                                                      |   QTY | DESCRIPTION                                                                      |
|-------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------|
| U3                                                                                        |     1 | Current-Mode Pwm Controller, TQFN-16 Maxim MAX5974DETE+                          |
| U4                                                                                        |     1 | High Isolation Voltage Sop Photocoupler, SOP-4 Renesas Technology Corp. PS2801-1 |
| U5                                                                                        |     1 | Adjustable Shunt Regulator, SOT-23 Texas Instruments TL432BIDBZ                  |
| -54V, CHASSIS- GND, GND, J1, POWER(+), POWER(-), RTN_PAD1, RTN_PAD2, VOUT_PAD1, VOUT_PAD2 |    10 | WEICO wire, 20Awg, 9020 BUSS                                                     |
| PCB                                                                                       |     1 | Pcb: MAX5995 Maxim MAX5995                                                       |
| C9, C12                                                                                   |     0 | 2.2µF ±10%, 100V X7R ceramic capacitor (1206) Murata KRM31KR72A225KH01           |
| C16, C17                                                                                  |     0 | Capacitor; Smt (1210); Open; Ipc Maximum Land Pattern N/A N/A                    |
| C18                                                                                       |     0 | 0.1µF ±10%, 25V X5R ceramic capacitor (0402) Murata GRM155R61E104KA87            |
| C35, C40, C42, C43                                                                        |     0 | Capacitor; Smt (0603); Open; Formfactor N/A N/A                                  |
| C91                                                                                       |     0 | Capacitor; Smt (1206); Open; Ipc Maximum Land Pattern N/A N/A                    |
| C92                                                                                       |     0 | Capacitor; Smt (Caseg); Open; Ipc Maximum Land Pattern N/A N/A                   |
| D1, D4, D5, D8                                                                            |     0 | Schottky Diode, 100V, 2A, SMB Comchip CDBB2100-G                                 |
| R12, R39, R47, R48, R53                                                                   |     0 | Resistor (0603) N/A N/A                                                          |
| R40                                                                                       |     0 | 0Ω Resistor (0603) Vishay Dale CRCW06030000Z0                                    |
| N101, N102                                                                                |     0 | Transistor NPN, 100V, 3.5A, SO-8 On Semiconductor FDS89141                       |
| R5, R36                                                                                   |     0 | 75kΩ ±0.1% Resistor (0603) Vishay Dale TNPW060375K0BE                            |

│

## MAX5995B EV Kit Schematics

<!-- image -->

## MAX5995B EV Kit Schematics (continued)

<!-- image -->

## MAX5995B EV Kit Schematics (continued)

<!-- image -->

## MAX5995B EV Kit PCB Layout Diagrams

MAX5995 EV-Top Silkscreen

<!-- image -->

│

## MAX5995B EV Kit PCB Layout Diagrams (continued)

MAX5995 EV-Top View

<!-- image -->

│

## MAX5995B EV Kit PCB Layout Diagrams (continued)

MAX5995 EV-Level GND

<!-- image -->

│

## MAX5995B EV Kit PCB Layout Diagrams (continued)

MAX5995 EV-Level PWR

<!-- image -->

│

## MAX5995B EV Kit PCB Layout Diagrams (continued)

MAX5995 EV-Bottom View

<!-- image -->

│

## MAX5995B EV Kit PCB Layout Diagrams (continued)

MAX5995 EV-Bottom Silkscreen

<!-- image -->

│

## MAX5995B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5995A/B/C/MAX5974D