<!-- lastmod 2023-06-29 -->
<!-- image -->

## General Description

The MAX20810 evaluation kit (EV kit) is a reference design platform  designed  for  evaluation  of  the  MAX20810,  a single-output,  fully  integrated,  highly  efficient,  step-down DCDC switching regulator with PMBus™ interface. The MAX20810 has an internal 1.8V LDO output to power the gate  drives  (V CC )  and  internal  circuitry  (AVDD).  The device  also  has  an  optional  LDO  input  pin  (LDOIN), allowing connection from a 2.5V to 5.5V bias input supply for optimized efficiency. The EV kit is capable to deliver up to 10A to the load. The EV kit package is a fully assembled and tested multilayer PCB implementation of high efficiency and high-power density.

The selection of key converter configuration parameters, acting on two external resistors, allows design flexibility to match several application scenario requirements.

Refer to the MAX20810  IC  data  sheet  for  detailed information  regarding  the  description,  features,  benefits, and parameters.

## Features and Benefits

- Wide 2.7V to 16V Input Voltage Range
- 0.4V to 5.8V Output Voltage Range
- Selectable:  Switching  Frequency,  OCP  Threshold, DEM  Feature,  DCM  Mode,  Voltage  Loop  Gain  and PMBus Address
- High Efficiency and Power Density
- Low Component Count
- Proven PCB Layout
- Fully Assembled and Tested for Basic Functionality

Ordering Information appears at end of data sheet.

PMBus is a trademark of SMIF, Inc.

Evaluates: MAX20810

## Quick Start

## Required Equipment

- MAX20810 EV Kit
- MAX20810 EV Kit Data Sheet (This Document)
- 2.7V to 16V Power Supply with Optional 3.3V External Power Supply
- 0 to 10A Load
- Digital Multimeters
- Oscilloscope and Probes
- Windows PC with a Spare USB Port
- MAXPOWERTOOL002 USB-to-SMBus Interface (Order Separately)
- Maxim Digital PowerTool GUI Software

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  install  the  EV  kit  software,  make  required  hardware connections, and start operation of the kit.

Note: Do not supply V IN  (VDDH) until the board has been correctly  configured  and  with  input  and  output  cables connected. Follow the steps to verify basic board operations and to run the EV kit.

1. Visit  the  Analog  Devices  website  to  download  and install  the  latest  version  of  the Digital  PowerTool Software .
2. Connect the USB cable from the PC to the MAXPOWERTOOL002 interface adapter.
3. Connect  the  adapter  ribbon  cable  to  the  matching header  J1  on  the  EV  kit,  ensuring  that  J1-Pin1  is adjacent to the red wire on the ribbon cable.
4. Connect a powered-off 2.7V to 16V input supply to J5 (positive terminal) and J8 (negative terminal). Optionally,  connect  the  supply  sense  leads  to  TP4 (positive  sense)  and  TP7  (negative  sense)  for  best accuracy.  If  external  bias  is  preferred,  connect  a powered-off 3.3V power supply to TP3  (positive terminal) and TP6 (negative terminal).
5. Connect  the  electronic  load  to  the  outputs  at  screw terminals ST1 and ST2, being careful to observe the VOUT and  GND  polarity  indicated  by  the  silkscreen labels.
6. Verify that the position of each jumper on the board is correct according to the configuration that needs to be tested (see Table 1 for the jumpers).
7. Connect  the  V OUT   scope  probe/multimeter  to  TP8 (positive) and TP11 (negative).

319-100998; Rev 0; 6/23

## MAX20810 Evaluation Kit

8. Turn on the power supply.
9. Start the GUI software. The Dashboard window should appear as shown in Figure 1 .
10.  Enable the IC by positioning the SW1 toggle switch or by  setting  the  OPERATION  and  ON\_OFF\_CONFIG commands in the PowerTool GUI.
11.  Enable the electronic load, if applicable.
12.  Observe that V OUT  = 1V.

## MAX20810 EV Kit Photo

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                        |
|----------|----------------------|------------------------------------------------|
| J9       | SHORT 2-3            | Use internal 1.8V V CC for PMBus communication |
| J4       | OPEN                 | V IN efficiency sensor point                   |
| J6       | OPEN                 | V OUT efficiency sensor point                  |
| J7       | OPEN                 | V OUT regulation test point                    |

## Evaluates: MAX20810

13.  For  efficiency  measurement,  J4  is  used  to  measure VIN , and J6 is used to measure V OUT .

Note: VLDOIN on the PCB is the same as AUX3P3\_EXT  on  the  schematic;  VIN  on  the PCB is the same as VDDH on the schematic; VCC on the PCB is the same as 1.8V\_VCC on the schematic.

## MAX20810 Evaluation Kit

Evaluates: MAX20810

Figure 1. Maxim PowerTool Graphical User Interface Software Dashboard Window

<!-- image -->

## MAX20810 Evaluation Kit

## Detailed Description of Software

The PowerTool software presents system-level information on the Dashboard tab. This view collects basic information for all Analog Devices PMBus devices found on the bus. This tab configures sequencing and output voltage levels, and presents an overview of the system status. Clicking the Stop Communication button stops all PMBus transactions from the PowerTool GUI. To force detection of all active devices on the bus, click the Search for Devices button.

For detailed information on a particular device, click on the subtab for that device's peripheral address. This opens a view with a set of further sub-tabs specific to that device as shown in Figure 2 . The sub-tabs available vary depending on the GUI version and the connect ed device's capability, but typically include Configuration , Monitor , Faults Set ,  and PMBus Command .

The Configuration tab presents the most commonly used PMBus command data in human-readable form. The device status is updated by continuous polling of these commands. Configuration settings for an individual device can be saved to or restored from an external file. PMBus command settings can be saved to or restored from the device's internal nonvolatile memory as well.

The Monitor tab shows continuously updated telemetry data from the device. Rolling plots of output voltage, input voltage, output current, and temperature data are shown, including indication of fault limits relative to the operating point.

The Faults Set tab allows the user to configure and monitor the status of most protection and warning functions. The fault levels and fault response commands are configured from this tab. The full contents of the STATUS\_ register commands are available by clicking the View Fault/Warning bit by bit button. Fault and warning flags are cleared by clicking the Clear Fault/Warning button, which sends the CLEAR\_FAULTS PMBus command to the device.

The PMBus Command tab shows all supported PMBus commands in a series of sub-tabs, allowing detailed configuration and analysis of the command values. The user can view the command values in hexadecimal or decimal format by checking or clearing the Force Hex checkbox. The Use PEC checkbox enables or disables Packet Error Checking for all GUI communications. Note that the command data is continuously updated by polling; typing a new value into the text boxes causes the new value to be sent to the device.

Figure 2. Detailed View for One Device; Configuration Sub-Tab

<!-- image -->

Evaluates: MAX20810

## Detailed Description of Hardware

This evaluation kit should be used with the following documents:

- MAX20810 IC data sheet
- MAX20830/MAX20815/MAX20810 PMBus Command Set User Guide
- MAX20810 EV kit data sheet (this document)
- MAXMINILOADEVKIT datasheet (optional)

For the latest versions of the documents listed above, refer to the MAX20810 product page .

## Bode Plot

A 10Ω resistor is installed between the VOUT sense point and SNSP pin in series with the top divider resistor to measure the Bode plot. TP13 and TP14 test points are provided on the board on either side of the 10Ω resistor for small signal injection and the ability to measure the Bode plot for V OUT .

## Operation

The MAX20810 IC is a monolithic, single-output, high-frequency, step-down converter with PMBus interface and optional external  bias  LDO,  optimized  for  applications  requiring  high-power  density  and  high  efficiency.  Detailed  product  and application information is provided in the MAX20810 IC data sheet.

## Output Enable (EN)

The EN pin is used to enable/disable the operation and so the output voltage. On the EV kit board, the selection switch SW1 is present to allow enabling and disabling the regulator.

## Output Voltage Selection

The MAX20810 EV kit is set up to initially boot up to an output voltage of 1V. The device has a default 0.5V reference voltage.  The  reference  voltage  can  be  adjusted  by  the  PMBus  VOUT\_COMMAND  from  0.4V  to  0.8V  with  1.95mV resolution. When the output voltage is higher than V REF , it is accomplished by placing a voltage-divider in the feedback path.

𝑉𝑂𝑈𝑇 = 𝑉 𝑅𝐸𝐹 ×(1 + 𝑅𝐹𝐵1 /𝑅𝐹𝐵2)

where:

𝑉𝑂𝑈𝑇 = Output voltage

𝑉𝑅𝐸𝐹 = Reference voltage

𝑅𝐹𝐵1 = Top divider resistor

𝑅𝐹𝐵2 = Bottom divider resistor

## Soft-Start

When VDDH (VIN) and EN are above their rising thresholds, soft-start begins, and switching is enabled. The output voltage of the enabled output starts to ramp up. The default soft-start ramp time is 1ms. The 3ms soft-startup time option can be selected by using the PMBus MFR\_SCENARIO\_1 command. The device supports smooth startup with the output prebiased.

## Switching Frequency

Switching frequency is a programmable parameter, and PGM1 is used to select the switching frequency. For the EV kit, switching frequency is set to 500kHz by default. Refer to the PGM1 Switching Frequency and Scenario Selection table (Table 2) in the IC data sheet. Switching frequency can also be changed by using the PMBus MFR\_PINSTRAP command.

## Pin-Strap Programmability

The EV kit provides an option to configure the part for desired application using PGMx resistor values. Refer to Table 1 and Table 2 in the IC data sheet. Appropriate values of resistors R2 and R5 can be used for the desired application.

## MAX20810 Evaluation Kit

## Transient

The EV kit provides an option to connect to MAXIM MINILOAD fast transient load generator to perform a fast load transient testing through J2 connector. Refer to MAXMINILOADEVKIT data sheet for more details.

## Status Monitoring

Whenever the part is actively regulating and the output voltage is within the power-good window, the PGOOD pin is high. In all other conditions, including enabled but in a fault state, the PGOOD pin is pulled low. The detailed fault can be viewed in the GUI. Refer to the MAX20810 IC data sheet for more details.

## Input-Voltage Monitoring

The input supply can be monitored on TP4 for VDDH (VIN) and TP7 for GND.

## Switching-Voltage Monitoring

The switching waveform can be monitored on TP15 for LX and TP2 for PGND.

## Output-Voltage Monitoring

TP8 and TP11 monitor the output voltage. These test points should not be used for loading.

## Efficiency Testing

J4 is provided to measure V IN  (VDDH) during efficiency measurement. Additionally, J6 is provided to measure V OUT during efficiency measurement.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20810EVKIT# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX20810

## MAX20810 Evaluation Kit

## MAX20810 EV Kit Bill of Materials

| ITE M   | REF_DES            | DNI/ DNP   | QT   | MFG_PART#                                                                                 | MFG                                                     | VALUE             | DESCRIPTION                                                                                                                | COMM ENTS   |
|---------|--------------------|------------|------|-------------------------------------------------------------------------------------------|---------------------------------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------|-------------|
| 1       | C1                 | -          | Y 1  | GRM155R60J475ME87; GRM153R60J475ME15; GRM155R60J475ME47                                   | MURATA;MURATA; MURATA                                   | 4.7UF             | CAP; SMT (0402); 4.7UF; 20%; 6.3V; X5R; CERAMIC                                                                            |             |
| 2       | C4                 | -          | 1    | GRM155R60J104KA01; C0402C104K9PAC                                                         | MURATA;KEMET                                            | 0.1UF             | CAP; SMT (0402); 0.1UF; 10%; 6.3V; X5R;                                                                                    |             |
| 3       | C6                 | -          | 1    | CL05B105KQ5NQNC; GRM155R70J105KA12                                                        | SAMSUNG ELECTRONICS;                                    | 1UF               | CERAMIC CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                                                      |             |
| 4       | C10                | -          | 1    | GRM155R60J474KE19                                                                         | MURATA MURATA                                           | 0.47UF            | CAP; SMT (0402); 0.47UF; 10%; 6.3V; X5R;                                                                                   |             |
| 5       | C13                | -          | 1    | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA; TDK | 100PF             | CERAMIC CAP; SMT (0402); 100PF; 5%; 50V; C0G; CERAMIC                                                                      |             |
| 6       | C14                | -          | 1    | C1608X5R1E105M080AC                                                                       | TDK                                                     | 1UF               | CAP; SMT (0603); 1UF; 20%; 25V; X5R; CERAMIC                                                                               |             |
| 7       | C20-C22,           | -          | 5    | CL31X226KAHN3N; GRM31CC81E226KE11                                                         | SAMSUNG;MURAT A                                         | 22UF              | CAP; SMT (1206); 22UF; 10%; 25V; X6S; CERAMIC                                                                              |             |
| 8       | C30, C45 C26       | -          | 1    | C0402C102K5GAC                                                                            | KEMET                                                   | 1000PF            | CAP; SMT (0402); 1000PF; 10%; 50V; C0G;                                                                                    |             |
| 9       | C29                | -          | 1    | TMK105BJ104KV; GRM155R61E104KA87                                                          | TAIYO YUDEN; MURATA                                     | 0.1UF             | CERAMIC CAP; SMT (0402); 0.1UF; 10%; 25V; X5R; CERAMIC                                                                     |             |
| 10      | C32, C36,          | -          | 4    | T521X107M025ATE060                                                                        | KEMET                                                   | 100UF             | CAP; SMT (7343); 100UF; 20%; 25V; TANTALUM                                                                                 |             |
| 11      | C37, C39 C33, C38, | -          | 4    | GRM31CD80J107ME39                                                                         | MURATA                                                  | 100UF             | CAP; SMT (1206); 100UF; 20%; 6.3V; X6T;                                                                                    |             |
| 12      | C54, C55 C34       | -          | 1    | C1005X7S0J225K050BC; GRM155C70J225KE11                                                    | TDK;MURATA                                              | 2.2UF             | CERAMIC CAP; SMT (0402); 2.2UF; 10%; 6.3V; X7S; CERAMIC                                                                    |             |
| 13      | C35                | -          | 1    | T491X107K025A                                                                             | KEMET                                                   | 100UF             | CAP; SMT (7343-43); 100UF; 10%; 25V;                                                                                       |             |
| 14      | C47                | -          | 1    | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB              | MURATA;TDK; TAIYO YUDEN;TDK                             | 0.1UF             | TANTALUM CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                    |             |
| 15      | D1, D3             | -          | 2    | MBRS540T3G                                                                                | ON SEMICONDUCTOR                                        | MBRS540 T3        | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A                                                    |             |
| 16      | DS1                | -          | 1    | LGL29K-G2J1-24-Z                                                                          | OSRAM                                                   | LGL29K- G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                       |             |
| 17      | J1                 | -          | 1    | TSW-108-07-T-D                                                                            | SAMTEC                                                  | TSW-108- 07-T-D   | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; 0.0125INCH SQUARE POST HEADER; STRAIGHT; 16PINS                                 |             |
| 18      | J2                 | -          | 1    | UPS-08-01-01-L-RA                                                                         | SAMTEC                                                  | UPS-08- 01-01-L-  | CONNECTOR; FEMALE; THROUGH HOLE; DUAL LEAF POWER HEADER; RIGHT ANGLE; 8PINS                                                |             |
| 19      | J4, J6, J7         | -          | 3    | PCC02SAAN                                                                                 | SULLINS                                                 | RA PCC02SA AN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65                                                     |             |
| 20      | J5, J8, TP3, TP6   | -          | 4    | 6095                                                                                      | KEYSTONE                                                | 6095              | DEGC TO +125 DEGC CONNECTOR; FEMALE; PANELMOUNT; NON- INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN          |             |
| 21      | J9                 | -          | 1    | PCC03SAAN                                                                                 | SULLINS                                                 | PCC03SA AN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                   |             |
| 22      | J10                | -          | 1    | 131-3701-266                                                                              | JOHNSON                                                 | 131-3701-         | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                                |             |
| 23      | L1                 | -          | 1    | PA5034.331HLT                                                                             | COMPONENTS PULSE                                        | 266 330NH         | INDUCTOR; SMT; SHIELDED; 330NH; 15%; 40A                                                                                   |             |
| 24      | MH1-MH4            | -          | 4    | 9032                                                                                      | ELECTRONICS KEYSTONE                                    | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                  |             |
| 25      | Q1                 | -          | 1    | BSS138                                                                                    | ON SEMICONDUCTOR                                        | BSS138            | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD- (0.36W); I-(0.22A); V-(50V); -55 DEGC TO +150 |             |
| 26      | R1                 | -          | 1    | ERJ-2RKF2000 TNPW040249R9BE;                                                              | PANASONIC                                               |                   | DEGC RES; SMT (0402); 4.7; 1%; +/-100PPM/DEGC; 0.0630W                                                                     |             |
|         |                    |            |      | CRCW04024R70FK                                                                            | VISHAY DALE                                             | 4.7               |                                                                                                                            |             |
| 27      | R2                 | -          | 1    |                                                                                           |                                                         | 200               | RES; SMT (0402); 200; 1%; +/-100PPM/DEGC;                                                                                  |             |
| 28      | R3                 | -          | 1    | RG1005P-49R9-B-T; ERA-2AEB49R9                                                            | VISHAY; SUSUMU CO LTD.; PANASONIC                       | 49.9              | 0.1000W RES; SMT (0402); 49.9; 0.10%; +/-25PPM/DEGC; 0.0630W                                                               |             |
| 29      | R5                 | -          | 1    | ERJ-2RKF3090                                                                              | PANASONIC                                               | 309               | RES; SMT (0402); 309; 1%; +/-100PPM/DEGC;                                                                                  |             |
| 30      | R6                 | -          | 1    | RC0402FR-070RL                                                                            | YAGEO                                                   | 0                 | 0.1000W RES; SMT (0402); 0; 1%; JUMPER; 0.0630W                                                                            |             |
| 31      | R7, R12            | -          | 2    | ERJ-2RKF3301 CRCW04023K01FK                                                               | PANASONIC                                               | 3.3K              | RES; SMT (0402); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |             |
| 32      | R9, R13            | -          | 2    |                                                                                           | VISHAY DALE                                             | 3.01K             | RES; SMT (0402); 3.01K; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |             |
| 33      | R11                | -          | 1    | RC0402JR-070RL; CR0402-16W-000RJT                                                         | YAGEO PHYCOMP; VENKEL LTD.                              | 0                 | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                    |             |

Evaluates: MAX20810

## MAX20810 Evaluation Kit

## Evaluates: MAX20810

|   34 | R14                                         | -   |   1 | ERJ-2RKF10R0                        | PANASONIC                    | 10                                                                                                                                                                                                 | RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.1000W   |
|------|---------------------------------------------|-----|-----|-------------------------------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
|   35 | R16, R41                                    | -   |   2 | CRCW040220K0FK                      | VISHAY DALE 20K              | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                  |                                                    |
|   36 | R42                                         | -   |   1 | RC0603FR-07100RL; CR0603-FX-1000ELF | YAGEO;BOURNS 100             | RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                  |                                                    |
|   37 | R51                                         | -   |   1 | ERJ-3EKF2100                        | PANASONIC 210                | RES; SMT (0603); 210; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                                                  |                                                    |
|   38 | ST1, ST2                                    | -   |   2 | 7808                                | KEYSTONE 7808                | TERMINAL; BODY LENGTH=0.67IN; BODY WIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                                                                                                                        |                                                    |
|   39 | SW1                                         | -   |   1 | GT21MCBE                            | C&K COMPONENTS GT21MCB E     | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS                                                       |                                                    |
|   40 | TP1, TP2, TP5, TP7, TP9, TP11, TP18         | -   |   7 | 5011                                | KEYSTONE N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                            |                                                    |
|   41 | TP4, TP8, TP10, TP12, TP15, TP17            | -   |   6 | 5010                                | KEYSTONE N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                              |                                                    |
|   42 | TP13, TP14, TP29, TP30, TP_CLK, TP_DATA     | -   |   6 | 5126                                | KEYSTONE N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                            |                                                    |
|   43 | U1                                          | -   |   1 | MAX20810AFE+                        | ANALOG DEVICES MAX20810 AFE+ | EVKIT PART - IC; MAX20810; 10A; 2MHZ; 2.7V TO 16V INTEGRATED STEP-DOWN SWITCHING REGULATOR; PACKAGE OUTLINE DRAWING: 21- 100528; LAND PATTERN NUMBER: 90-100191; PACKAGE CODE: F164A6F+2; FC2QFN16 |                                                    |
|   44 | PCB                                         | -   |   1 | MAX20810                            | ANALOG DEVICES PCB           | PCB:MAX20810                                                                                                                                                                                       |                                                    |
|   45 | C2, C3, C5, C7-C9, C11, C12, C42, C46, C48, | DNP |  12 | GRM31CD80J107ME39                   | MURATA 100UF                 | CAP; SMT (1206); 100UF; 20%; 6.3V; X6T;                                                                                                                                                            | CERAMIC                                            |
|   46 | C50 C16                                     | DNP |   1 | C0402C473J8RAC                      | KEMET 0.047UF                | CAP; SMT (0402); 0.047UF; 5%; 10V; X7R; CERAMIC                                                                                                                                                    |                                                    |
|   47 | C18, C25                                    | DNP |   2 | C0402C479D8GAC                      | KEMET 4.7PF                  | CAP; SMT (0402); 4.7PF; +/-0.5PF; 10V; C0G; CERAMIC                                                                                                                                                |                                                    |
|   48 | C19, C24                                    | DNP |   2 | C1608X5R1E105M080AC                 | TDK 1UF                      | CAP; SMT (0603); 1UF; 20%; 25V; X5R; CERAMIC                                                                                                                                                       |                                                    |
|   49 | C23                                         | DNP |   1 | C0402C103J3RAC                      | KEMET 0.01UF                 | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R;                                                                                                                                                             | CERAMIC                                            |
|   50 | C27, C28                                    | DNP |   2 | GRM155R71E472KA01                   | MURATA 4700PF                | CAP; SMT (0402); 4700PF; 10%; 25V; X7R;                                                                                                                                                            | CERAMIC                                            |
|   51 | C31, C40                                    | DNP |   2 | T491X477K010AT                      | KEMET 470UF                  | SMT (7343); 470UF; 10%; 10V; TANTALUM                                                                                                                                                              | CAP;                                               |
|   52 | C43                                         | DNP |   1 | CL31X226KAHN3N; GRM31CC81E226KE11   | SAMSUNG;MURAT A 22UF         | CAP; SMT (1206); 22UF; 10%; 25V; X6S; CERAMIC                                                                                                                                                      |                                                    |
|   53 | R4                                          | DNP |   1 | ERJ-P08J101                         | PANASONIC 100                | RES; SMT (1206); 100; 5%; +/-200PPM/DEGC; 0.6600W                                                                                                                                                  |                                                    |
|   54 | R19                                         | DNP |   1 | RC0402JR-070RL; CR0402-16W-000RJT   | YAGEO PHYCOMP; VENKEL LTD. 0 | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                                                                                            |                                                    |

## MAX20810 Evaluation Kit

## MAX20810 EV Kit Schematic

<!-- image -->

Evaluates: MAX20810

## MAX20810 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX20810

## MAX20810 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX20810

## MAX20810 Evaluation Kit

## MAX20810 EV Kit PCB Layout

MAX20810 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX20810 EV Kit PCB Layout -Layer 2

<!-- image -->

## Evaluates: MAX20810

MAX20810 EV Kit PCB Layout -Top

<!-- image -->

MAX20810 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX20810 Evaluation Kit

## MAX20810 EV Kit PCB Layout (continued)

MAX20810 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX20810 EV Kit PCB Layout -Bottom

<!-- image -->

Evaluates: MAX20810

MAX20810 EV Kit PCB Layout -Layer 5

<!-- image -->

MAX20810 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX20810 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX20810