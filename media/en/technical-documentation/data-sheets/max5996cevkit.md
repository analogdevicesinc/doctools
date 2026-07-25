<!-- lastmod 2022-08-02 -->
## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

## General Description

The  MAX5996A/MAX5996B/MAX5996C  evaluation  kit (EV kit)  is  a  fully  assembled  and  tested  surface-mount circuit board featuring an Ethernet port, network powereddevice (PD) interface controller circuit for -57V supply rail systems. The EV kit  uses  the  MAX5996C  IEEE ® 802.3af/at/bt-compliant network PD interface controller in a 16-pin TQFN package with an exposed pad. The IC is used in Power-over-Ethernet (PoE) applications requiring DC power from an Ethernet network port for PDs such as VoIP phones, wireless access nodes, security cameras, lighting, and building automation.

The  EV  kit  receives  power  from  IEEE  802.3af/at/btcompliant  power-sourcing  equipment  (PSE).  The  PSE provides  the  required  -36V  to  -57V  DC  power  over  an unshielded twisted-pair Ethernet network cable to the EV kit's  RJ45  magnetic  jack.  The  EV  kit  features  a  1  x  1 Gigabit RJ45 magnetic jack for separating the DC power provided by an endspan or midspan Ethernet system.

The EV kit can also be powered by a wall adapter power source.  The  EV  kit  provides  PCB  pads  to  accept  the output  of  a  wall  adapter  power  source.  When  a  wall adapter  power  source  is  detected,  it  always  takes precedence  over  the  PSE  source  and  allows  the  wall adapter to power the EV kit.

The EV kit demonstrates the full functionality of the IC, such as PD detection signature, PD classification signature, Multi-Event Classification, Power/Current limiting,  Power  telemetry  report,  LLDP  reclassification, Intelligent MPS, inrush current control, input undervoltage lockout  (UVLO), and  DC-DC  step-down  converter.  The step-down converter operates at a fixed 395kHz switching frequency  and  is configured for an  isolated activeclamped forward topology  with  output  voltage  +12V  DC that  can  deliver 5.5A of current.

Evaluates: MAX5996A/

MAX5996B/MAX5996C

## Features and Benefits

-   IEEE 802.3af/at/bt-Compliant PD Interface Circuit
-   Multi-Event Classification 0-8
-   -36V to -57V Input Range
-   Demonstrates a 51W PD Design with Isolated Flyback DC-DC Converter
-   +12V Output at 5.5A
-   Startup Inrush Current Limit of 135mA (typ)
-   Power Telemetry Through MEC
-   Power/Current Limiting
-   LLDP Reclassification
-   Current Limit During Normal Operation
-   Evaluates Endspan and Midspan Ethernet Systems
-   Type 1-4 PSE Classification Indicator
-   Simplified Wall Adapter Interface
-   Demonstrates Sleep and Ultra-Sleep Power-Saving Modes
-   Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet

<!-- image -->

## MAX5996A/MAX5996B/

## MAX5996C Evaluation Kit

## MAX5996 EV Kit Board Photo

<!-- image -->

Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                |
|----------|----------------------|------------------------|
| J10      | Pin 1 - Pin 2        | Connect R CLSB to 30.9 |
| J11      | Pin 1 - Pin 2        | Connect R CLSA to 30.9 |

Evaluates: MAX5996A/

MAX5996B/MAX5996C

## Quick Start

## Required Equipment

- MAX5996\_EVKIT\_A
- An IEEE 802.3af/at/bt compliant PSE and a Category 5e Ethernet network cable
- -48V, 3A capable DC power supply, voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation:

Caution:  Do  not  turn  on  the  power  supply  until  all the connections are completed.

- 1)    Use one of the following methods to power the EV kit:
- a) If network connectivity is required: Connect a Category 5e Ethernet network cable from the EV kit input port (J1\_POWER) RJ45 connector to the corresponding PSE Ethernet LAN connection that provides power to the EV kit.
- b) If network connectivity is not required: Connect  a  -48V  DC  power  supply  between  the VDD and VSS PCB pads on the EV kit. Connect the  power-supply  positive  terminal  to  the  VDD pad and the negative terminal to the VSS pad.
- 2)    Activate the PSE power supply or turn on the external DC power supply.
- 3)    Using a voltmeter, verify that the EV kit provides +12V across the V OUT  and GND PCB pads.

## Detailed Description of Hardware

The   MAX5996A/MAX5996B/MAX5996C EV kit features   an   Ethernet   port and network PD interface controller circuit for -57V supply rail systems. The EV kit contains an IEEE ®  802.3af/at/bt compliant network PD interface controller in a 16-pin TQFN-EP package. The IC is used in PoE applications for powering PDs from an unshielded twisted-pair (UTP) Ethernet Category 5e network cable and PSE port using endspan or midspan Ethernet systems.

The EV kit receives power from an IEEE ®  802.3af/at/bt-compliant PSE and a UTP cable connected to the EV kit's RJ45 magnetic jack. The EV kit uses a 1 x 1-gigabit RJ45 magnetic jack to separate the -57V DC power sent by the PSE. The EV kit can accept power from an endspan or midspan PSE network configuration.

The EV kit can also accept power from a wall adapter power source. When a wall adapter power source is detected between the WALL\_ADAPTER+ and WALL\_ADAPTER - pads, the IC's internal isolation switch disconnects, which allows the wall adapter to supply power to the EV kit.

The EV kit demonstrates the full functionality of the IC such as PD detection signature, PD classification signature, MultiEvent  Classification,  Power  Telemetry  report,  Power/current  limiting,  LLDP  Reclassification,  Intelligent  MPS,  inrush current control, and UVLO. Resistor R100 sets the PD detection impedance. Jumper J10 and J11 set the PD classification signatures.

The EV kit's integrated DC-DC step-down converter is configured for an isolated Flyback converter topology with the output voltage of +12V and provides up to 5A at the output while achieving up to 92.5%, 92.4%, and 92% efficiencies for 42V/48V/57V input, respectively. The step-down converter operates at a fixed 395kHz switching frequency.

The EV kit has the option to install the MAX32625PICO board on J4 and J5 to demonstrate MEC power telemetry, class info report, and LLDP functions from GUI in a PC.

## PD Class selection by Classification resistors

By selecting the two external resistors connected to CLSA and CLSB pins, the power consumption requested by the PD can be defined. Table 2 shows the R CLSA  and R CLSB  resistor values needed to set for the PD class and the PD power consumption defined by standards. R CLSA  sets classification current for the 1st and 2nd class Events for 0~4 class PD compliant with IEEE 802.3af/at standard, and R CLSB  set classification current for the 3rd to 5th class event for 0~8 class PD compliant with IEEE 802.3bt standard.

Evaluates: MAX5996A/

MAX5996B/MAX5996C

Evaluates: MAX5996A/

## Table 2. PSE Type and PD Class with Classification Resistor RCLSA and RCLSB

|   PD CLASS | POWER REQUESTED BY PD   |   RCLSA | RCLSB   |
|------------|-------------------------|---------|---------|
|          0 | 12.95W                  |     619 | OPEN    |
|          1 | 3.84W                   |     118 | OPEN    |
|          2 | 6.49W                   |    66.5 | OPEN    |
|          3 | 12.95W                  |    43.2 | OPEN    |
|          4 | 25.5W                   |    30.9 | 30.9    |
|          5 | 38.25W                  |    30.9 | 619     |

## Wall Adapter Power Source (WALL\_ADAPTER+, WALL\_ADAPTER)

The  EV  kit  can  also  accept  power  from  a  wall  adapter  power  source.  Use  the  WALL\_ADAPTER+  (0V)  and WALL\_ADAPTER- (-10V to -57V) PCB pads to connect the wall adapter power source. The wall adapter power source operating- voltage range must be within +10V to +57V for the EV kit.

When the wall adapter power source is above +10V it always takes precedence over the PSE source. Once the wall adapter power source is detected, the IC's internal isolation switch disconnects. The wall adapter power is supplied to VDD through diode D103. Once it takes over, the classification process is disabled.

When the wall adapter power source is below +8V, the PSE provides power through the IC's internal isolation switch. Diode D103 prevents the PSE from back-driving the wall adapter power source when it is below +8V.

## Undervoltage Lockout (UVLO)

The EV kit operates up to a -57V supply with a turn-on UVLO threshold (V ON ) at -35.4V and a turn-off UVLO threshold (V OFF ) at -30.0V. When the input voltage is above V ON , the EV kit is enabled. When the input voltage goes below V OFF , the EV kit is disabled.

## Class Info and Power Telemetry Report

The EV kit can demonstrate Class info and real- time power telemetry report through the MEC pin of the MAX5996C. Users can apply electronic load on J8 and J9 and increase output power to evaluate the power or current limiting function of the MAX5996C device with the MAX5974 dc-dc converter. Probing MEC pin and LLDP pin can monitor patterned pulses in the scope to evaluate power telemetry reading and LLDP data pulses configuration.

Users can also use the MAX32625PICO micro-controller board to demonstrate MEC and LLDP functions.

## Power Limit and Current Limit (MAX5996C)

The EV kit supports operating the MAX5996C in power limiting or current limiting mode. Change the resistor connection on J10 and J11 to configure the device in a certain Class level. Monitor the MEC pin to read back real-time power consumption for the device to evaluate the power/current limiting functions of the MAX5996C.

## LLDP Reclassification (MAX5996C)

The EV kit can demonstrate the LLDP function by apply patterned pulses on the LLDP pin. Using the MAX32625PICO board users can easily configure the required power limit and current limit in the GUI and send pulses through the MAX32625PICO to the LLDP pin of the MAX5996C, to overwrite the power or current limit level in the MAX5996C.

## MAX32625PICO Board Option

The EV kit has an option of the MAX32625PICO microcontroller board on Header J4 and J5. The MAX32625PICO board can be used to evaluate MAX5996C MEC pin Class info and power telemetry function and LLDP power/current limit configuration function with downloaded firmware and the GUI. Note the MAX32625PICO has to be soldered on J4 and J5 connectors to function with the MAX5996C. The MAX32625PICO EV kit can be ordered at the link:

https://www.maximintegrated.com/en/products/microcontrollers/MAX32625PICO.html#tech-docs

## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

Evaluates: MAX5996A/

MAX5996B/MAX5996C

The GUI of the MAX32625PICO can be downloaded from https://ci-mss.maxim-ic.com/job/CnD/job/max5996\_gui/108/ and the firmware of the MAX32625PICO board can be downloaded from https://ci-mss.maximic.com/job/CnD/job/max5996\_fw/115/ .  Refer  to  MAX32625PICO  EV  kit  datasheet  for  programming  MAX32625PICO board with the downloaded firmware file.

1. Visit www.maximintegrated.com/products/MAX5996 under the Design &amp; Development tab to download the latest version of the MAX5996 EV kit software. Save the software to a temporary folder and unpack the zip file.
2.  Install the EV kit software on the computer by running the MAX5996EVKitGUISetup\_v1.0.108.exe program inside the temporary folder. This copies the program files and creates an icon in the Windows Start menu.

## Sleep, Ultra-Sleep Modes, and LED Operation (MAX5996A/B)

The EV Kit supports operating the MAX5996A/B in power-saving  modes  such  as  the Sleep  and Ultra-Lower-Power Sleep.  By using the SW3 DIP switch, the pin could be driven low to enter the Sleep mode. The Ultra-Lower-Power Sleep mode could be entered by driving both and pin to low (using DIP switch SW1, SW3). The device could be commanded to exit sleep or Ultra-Lowe-Power  mode by driving the pin low through the switch SW2.

The device features a dedicated LED pin that can be programmed to source out current when the device is in MPS, sleep, or ultra-sleep modes. Diode named LED connects  between  the  LED  pin  and  V SS  and  lights  up  in  green color to indicate LED current. The magnitude of the LED current can be controlled as per the value of the R7 resistor connected between the pin and V SS .

## EV Kit Compliance to MAX5996A, MAX5996B

By  default,  the  EV  kit  is  installed  with  MAX5996C  IC. The  EV  kit  can  also  be  used  to  evaluate  the MAX5996A and  MAX5996B  variants  of  the  IC when installing R5, R40, R104, R7, R24 and remove R8, R106, R107.

## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

## Detailed Description of Software

In the MAX5996A/MAX5996B/MAX5996C GUI, make sure the MAX32625PICO board is connected to the PC USB port via  a  cable.  Click  on  the Connection drop list  and  select COM5 and  then  click  on Connect button  to  connect  the MAX32625PICO board. When the board is connected, the Status window on the bottom of the GUI shows Connected to PICO (COM5) .

Figure 1. GUI reads power level and indicates Power Limit .

<!-- image -->

Figure 2. GUI reads power level and indicates Power Limit .

<!-- image -->

When the PICO board is connected the GUI is ready to operate. In MEC section of the GUI, Class info and Power telemetry are reported according to MEC pin status. The MEC pin patterned pulses are read back and shown on the GUI. When the load is increased and causes the power level reaching the limit, the light of Power/Current Limit turns Red . If the wall adaptor is plugged in and the MOSFET is turned off, the light of WAD Adaptor will turn Green .

In the LLDP section, select Power or Current to configure the power limit or current limit to send out. Move the progress bard to change the Power or Current limits and press the Send button to send out the LLDP data frame to the LLDP pin of the MAX5996C.

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

Figure 3. Configure LLDP power level.

<!-- image -->

## Ordering Information

#Denotes RoHS-compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX5996CEVKIT# | EV Kit |

Evaluates: MAX5996A/

MAX5996B/MAX5996C

Figure 4. Send LLDP power level and ACK light indicates acknowledge.

<!-- image -->

## MAX5996A/MAX5996B/

## MAX5996C Evaluation Kit

## MAX5996A/MAX5996B/MAX5996C EV Kit Bill of Materials

| PART                         |   QTY | MANUFACTURER PART NUMBER   | DESCRIPTION                                                                                |
|------------------------------|-------|----------------------------|--------------------------------------------------------------------------------------------|
| C2                           |     1 | C0402C561K5GAC             | CAP; SMT (0402); 560PF; 10%; 50V; C0G; CERAMIC                                             |
| C12-C14, C21, C25            |     5 | GA352QR7GF102KW01          | CAP; SMT (2211); 1000PF; 10%; 250V; X7R; CERAMIC                                           |
| C18                          |     1 | TMK105BJ104KV              | CAP; SMT (0402); 0.1UF; 10%; 25V; X5R; CERAMIC                                             |
| C56-C59                      |     4 | C0805C103K1RAC             | CAP; SMT (0805); 0.01UF; 10%; 100V; X7R; CERAMIC                                           |
| C100                         |     1 | C1206C104K1RAC             | CAP; SMT (1206); 0.1UF; 10%; 100V; X7R; CERAMIC                                            |
| C101                         |     1 | C0603C473K1RAC             | CAP; SMT (0603); 0.047UF; 10%; 100V; X7R; CERAMIC                                          |
| C103                         |     1 | CGA3E2X7R2A103K            | CAP; SMT (0603); 0.01UF; 10%; 100V; X7R; CERAMIC;                                          |
| C200, C206, C213             |     3 | C1206C222MGRAC             | CAP; SMT (1206); 2200PF; 20%; 2000V; X7R; CERAMIC                                          |
| C201                         |     1 | EEE-FK1K470P               | CAP; SMT (CASE_G); 47UF; 20%; 80V; ALUMINUM- ELECTROLYTIC                                  |
| C202, C205, C211, C215, C223 |     5 | C3216X7R2A105K160AA        | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                              |
| C203                         |     1 | C1005X7R1E473K050BC        | CAP; SMT (0402); 0.047UF; 10%; 25V; X7R; CERAMIC                                           |
| C204, C218                   |     2 | GRM32ER71E226KE15          | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                              |
| C208                         |     1 | C0402C101K5GAC             | CAP; SMT (0402); 100PF; 10%; 50V; C0G; CERAMIC                                             |
| C209                         |     1 | C1005X7R1H473K             | CAP; SMT (0402); 0.047UF; 10%; 50V; X7R; CERAMIC                                           |
| C210                         |     1 | C0402C331J5GAC             | CAP; SMT (0402); 330PF; 5%; 50V; C0G; CERAMIC                                              |
| C212                         |     1 | C0805C221J2GAC             | CAP; SMT (0805); 220PF; 5%; 200V; C0G; CERAMIC                                             |
| C214, C240, C241, C243       |     4 | GRM21BZ71E106KE15          | CAP; SMT (0805); 10UF; 10%; 25V; X7R; CERAMIC; NOTE: PURCHASE DIRECT FROM THE MANUFACTURER |
| C217, C222                   |     2 | C1608X7R1E104K080AA        | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                             |
| C221                         |     1 | GRM188R71C474KA88          | CAP; SMT (0603); 0.47UF; 10%; 16V; X7R; CERAMIC                                            |
| C224                         |     1 | 0603YC101KAT2A             | CAP; SMT (0603); 100PF; 10%; 16V; X7R; CERAMIC                                             |
| C226                         |     1 | GRM188R71C563KA01          | CAP; SMT (0603); 0.056UF; 10%; 16V; X7R; CERAMIC                                           |
| C242                         |     1 | 16SP270M                   | CAP; THROUGH HOLE-RADIAL LEAD; 270UF; 20%; 16V; ELECTROLYTIC-OSCON                         |
| D17, D18                     |     2 | DF1501S                    | DIODE; RECT; SMT; PIV=100V; IF=1.5A                                                        |
| D102                         |       | SMBJ58A-13-F               | DIODE; TVS; SURFACE MOUNT TRANSIENT VOLTAGE SUPPRESSOR; SMB; PIV=58V; IF=100A              |
| D103                         |       | B360B-13-F                 | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC             |
| D200                         |       | 1N4148WSF                  | DIODE; SWT; SMT (SOD-323F); PIV=100V; IF=0.25A                                             |
| D201                         |     1 | BZT52C18S-7-F              | DIODE; ZNR; SURFACE MOUNT ZENER DIODE; SMT (SOD-323); PIV=18V; IF=0.05A                    |
| D206, D212, D220             |     3 | B5819WS                    | DIODE; SCH; SOD-323; PIV=40V; IF=1A                                                        |
| D210                         |     1 | BAT54S                     | DIODE; SCH; SCHOTTKY DIODE; SMT (SOT-23); PIV=30V; IF=0.2A                                 |
| H1-H4                        |     4 | 2203                       | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                      |

Evaluates: MAX5996A/

MAX5996B/MAX5996C

## MAX5996A/MAX5996B/

## MAX5996C Evaluation Kit

Evaluates: MAX5996A/

MAX5996B/MAX5996C

| PART                                      |   QTY | MANUFACTURER PART NUMBER         | DESCRIPTION                                                                                                    |
|-------------------------------------------|-------|----------------------------------|----------------------------------------------------------------------------------------------------------------|
| H5-H8                                     |     4 | 4C25MXPS                         | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                                                |
| J1_DATA, J1_POWER                         |     2 | 5520252-4                        | CONNECTOR; FEMALE; THROUGH HOLE; MODULAR JACK ASSEMBLY; KEYED; FLANGELESS; WITH PANEL STOP; RIGHT ANGLE; 8PINS |
| J4, J5                                    |     2 | TSW-110-07-F-S                   | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                       |
| J8, J9                                    |     2 | 111-2223-001                     | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                      |
| J10, J11                                  |     2 | 61301021121                      | CONNECTOR; MALE; THROUGH HOLE; 2.54 DUAL PIN HEADER; STRAIGHT; 10PINS                                          |
| L1-L3, L14, L16, L18, L23, L24            |     8 | LQM2HPN4R7MG0                    | INDUCTOR; SMT (1008); FERRITE; 4.7UH; 20%; 1.10A                                                               |
| L19-L22                                   |     4 | BLM18EG221SN1                    | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 2A                                                        |
| L200                                      |     1 | SD53-3R3-R                       | INDUCTOR; SMT; FERRITE BOBBIN CORE; 3.3UH; TOL=+/-20%; 2.6A                                                    |
| LED                                       |     1 | LTST-C150GKT                     | DIODE; LED; ; SMT (1206); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC; GREEN                                       |
| LLDP, MEC, MEC_2, PG, VCC, VDD, VOUT, WAD |     8 | 5001                             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK;                                       |
| N200                                      |     1 | FDS86242                         | TRAN; N-CHANNEL POWER TRENCH MOSFET; NCH; SO-8; PD-(5W); I-(4.1A); V-(150V)                                    |
| N201                                      |     1 | BSC160N15NS5ATMA1                | TRAN; NCH; PG-TDSON8; PD-(96W); I-(56A); V-(150V)                                                              |
| R3, R202, R203, R211, R216                |     5 | ERJ-2GE0R00                      | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                    |
| R8, R107                                  |     2 | RC1608J000CS                     | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                        |
| R9-R12                                    |     4 | RMCF0805JT75R0                   | RES; SMT (0805); 75; 5%; +/-200PPM/DEGC; 0.1250W                                                               |
| R13, R18                                  |     2 | CRCW060330R9FK                   | RES; SMT (0603); 30.9; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
| R15, R20                                  |     2 | TNPW060366R5BE                   | RES; SMT (0603); 66.5; 0.10%; +/-25PPM/DEGK; 0.1000W                                                           |
| R16, R21                                  |     2 | CRCW0603115RFK                   | RES; SMT (0603); 115; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R17, R22                                  |     2 | CRCW0603619RFK                   | RES; SMT (0603); 619; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R100                                      |     1 | CRCW060324K9FK                   | RES; SMT (0603); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                            |
| R102                                      |     1 | RC0603FR-0720KL                  | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R110                                      |     1 | CRCW0603511RFK                   | RES; SMT (0603); 511; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R111, R117, R240                          |     3 | CRCW060349K9FK                   | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                            |
| R112                                      |     1 | ERJ-3GEYJ472                     | RES; SMT (0603); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                             |
| R200                                      |     1 | TNPW080510R0BE                   | RES; SMT (0805); 10; 0.10%; +/-25PPM/DEGC; 0.1250W                                                             |
| R201                                      |     1 | CRCW040223K2FK; RC0402FR-0723K2L | RES; SMT (0402); 23.2K; 1%; +/-100PPM/DEGK; 0.0630W                                                            |
| R204                                      |     1 | CRCW040216K9FK; ERJ-2RKF1692     | RES; SMT (0402); 16.9K; 1%; +/-100PPM/DEGK; 0.1000W                                                            |

## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

Evaluates: MAX5996A/

MAX5996B/MAX5996C

| PART                   |   QTY | MANUFACTURER PART NUMBER   | DESCRIPTION                                                                                                    |
|------------------------|-------|----------------------------|----------------------------------------------------------------------------------------------------------------|
| R205, R239             |     2 | TNPW060334K0BE             | RES; SMT (0603); 34K; 0.10%; +/-100PPM/DEGC; 0.1000W                                                           |
| R206                   |     1 | CRCW120630K0FK             | RES; SMT (1206); 30K; 1%; +/-100PPM/DEGC; 0.2500W                                                              |
| R207                   |     1 | CRCW06031M50FK             | RES; SMT (0603); 1.5M; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
| R208                   |     1 | CRCW04025K10FK             | RES; SMT (0402); 5.1K; 1%; +/-100PPM/DEGC; 0.0630W                                                             |
| R210, R227, R235       |     3 | ERJ-2GEJ103                | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                              |
| R212                   |     1 | ERJ-2RKF4990               | RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
| R213                   |     1 | ERA-2AEB202                | RES; SMT (0402); 2K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                             |
| R215                   |     1 | CRCW04024K02FK             | RES; SMT (0402); 4.02K; 1%; +/-100PPM/DEGC; 0.0630W                                                            |
| R217, R226             |     2 | TNPW060310R0BE             | RES; SMT (0603); 10; 0.10%; +/-25PPM/DEGK; 0.1000W                                                             |
| R218, R219             |     2 | WSL1206R0400F              | RES; SMT (1206); 0.04; 1%; +/-75PPM/DEGC; 0.2500W                                                              |
| R221, R225             |     2 | CRCW120620R0FK             | RES; SMT (1206); 20; 1%; +/-100PPM/DEGC; 0.2500W                                                               |
| R223                   |     1 | CRCW0603330KFK             | RES; SMT (0603); 330K; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
| R224                   |     1 | CRCW06031212FK             | RES; SMT (0603); 12.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                            |
| R228                   |     1 | CRCW0402200KFK             | RES; SMT (0402); 200K; 1%; +/-100PPM/DEGC; 0.0630W                                                             |
| R229                   |     1 | CRCW0402100KFK             | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                             |
| R231                   |     1 | CRCW040222K0FK             | RES; SMT (0402); 22K; 1%; +/-100PPM/DEGC; 0.0630W                                                              |
| R232-R234              |     3 | TNPW04021K00BE             | RES; SMT (0402); 1K; 0.10%; +/-25PPM/DEGC; 0.1000W                                                             |
| R237                   |     1 | ERJ-2RKF1004               | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                               |
| R241                   |     1 | ERJ-3EKF3832               | RES; SMT (0603); 38.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                            |
| R242                   |     1 | ERJ-2RKF49R9               | RES; SMT (0402); 49.9; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
| R243                   |     1 | CR0805-10W-000             | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1000W                                                                    |
| SU1, SU2               |     2 | 929953-30                  | CONNECTOR; FEMALE; THROUGH HOLE; 929 SERIES; SHUNT CONNECTOR; STRAIGHT; 2PINS                                  |
| SW1-SW3                |     3 | B3FS-1000P                 | SWITCH; SPST; SMT; 24V; 0.05A; TACTILE SURFACE MOUNT SWITCH; RCOIL= OHM; RINSULATION= OHM; OMRON               |
| T2                     |     1 | 7490220126                 | EVKIT PART - TRANSFORMER; 7490220126; SMT-24; SUMIDA                                                           |
| T200                   |     1 | PAT6297NLT                 | TRANSFORMER; SMT; PRIMARY=33-57V; 400KHZ; AUXILIARY=10V/0.02A; BIAS=5V/0.02A; SECONDARY=12V/3.75A; SMT 10PINS; |
| U2, U6, U7, U101, U102 |     5 | FOD817ASD                  | IC; OPTO; 4-PIN HIGH OPERATING TEMPERATURE PHOTOTRANSISTOR OPTOCOUPLER; SMT                                    |
| U5                     |     1 | ATL431AIDBZR               | IC; VREF; 2.5V LOW IQ ADJUSTABLE PRECISION SHUNT REGULATOR; SOT23                                              |
| U100                   |     1 | MAX5996C                   | EVKIT PART - IC; MAX5996C; PACKAGE OUTLINE DRAWING: 21-100484; PACKAGE LAND PATTERN: 90-100171; TQFN16-EP      |
| U200                   |     1 | MAX5974AETE+               | IC; CTRL; ACTIVE-CLAMPED; SPREAD-SPECTRUM; CURRENT- MODE PWM CONTROLLERS; TQFN16-EP                            |
| U201                   |     1 | FOD817CSD                  | IC; OPTO; 4-PIN DIP PHOTOTRANSISTOR OPTOCOUPLER; SMT                                                           |

## MAX5996A/MAX5996B/MAX5996C EV Kit Schematic Diagrams

<!-- image -->

## MAX5996A/MAX5996B/MAX5996C EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams

MAX5996A/MAX5996B/MAX5996C EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Top View

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Layer 2

<!-- image -->

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Layer 3

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Layer 4

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Layer 5

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Bottom View

Evaluates: MAX5996A/

## MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX5996A/MAX5996B/MAX5996C EV Kit PCB Layout-Bottom Silkscreen

## MAX5996A/MAX5996B/ MAX5996C Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 09/21           | Release for Market Intro | -               |

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX5996A/

MAX5996B/MAX5996C