<!-- lastmod 2022-08-04 -->
## MAX8521 Evaluation Kit

## General Description

The MAX8521 evaluation kit (EV kit) is an assembled and tested PC board that implements a switch-mode driver for a Peltier thermoelectric cooler (TEC) module. The device operates from a single 3V to 5.5V supply and provides a bipolar ±1.5A output to the module.

A potentiometer, DAC, or external source generates a DC temperature  set-point  voltage.  Thermal  feedback  from the TEC module is compared to the set-point voltage to generate the TEC current control signal. The MAX8521 accurately regulates the TEC current based on this signal. When using the DAC, the EV kit connects to the parallel port  of  a  computer  running  Windows ®  95,  98,  or  2000. Software, included with the EV kit, provides a quick and easy method to control the DAC.

To  evaluate  the  MAX8520ETP  or  MAX8521ETP  (QFN version), refer to the MAX8520 evaluation kit.

Note: Windows 2000 requires the installation of a driver located on the CD.

## Features

- ● Circuit Footprint Less than 0.31in 2
- ● Operates from a Single Supply (3V to 5.5V)
- ● ±1.5A Output Current
- ● High-Efficiency Switch-Mode Design
- ● Programmable Heating/Cooling Current Limit
- ● TEC Current Monitor Output
- ● 500kHz or 1MHz Switching Frequency
- ● SPI-Compatible Serial Interface
- ● Easy-to-Use Menu-Driven Software
- ● Includes Windows 95/98/2000-Compatible Software and Demo PC Board
- ● Surface-Mount Construction
- ● Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX8521

## Quick Start

## Required Equipment

The following equipment is required before beginning:

- A DC power supply capable of supplying any voltage between 3V and 5.5V at 1.5A
- A  Peltier  TEC  module  with  a  thermistor	 (NTC,  10kΩ at +25°C)
- A digital voltmeter (DVM)

The  MAX8521  EV  kit  is  a  fully  assembled  and  tested surface-mount  board.  Follow  the  steps  below  to  verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Place a shunt across J2 to connect the thermal loop to CTLI.
- 2) Place a shunt across pins 1 and 2 on J8 to select the potentiometer.
- 3) Place a shunt across pins 2 and 3 on J7 to disable the MAX8521 output.
- 4) Obtain TEC module specifications for absolute maximum TEC voltage and absolute maximum current. Set these (or lower) limits at the MAX8521's MAXV, MAXIP, and MAXIN inputs. See Table 1, 2, and 3 to select  resistors  or  refer  to  the  MAX8520/MAX8521 data sheet.
- 5) Connect  the  TEC  module  to  OS1,  OS2,  THERM, and GND. Typical connections for most modules are:
- a)  Module TEC- to OS2
- b)  Module TEC+ to OS1
- c)  Module thermistor to THERM
- d)  2nd module thermistor pin to GND
- e)  Module case ground or shield to GND

Be sure to check your module specifications before making  connections. Also,  it  is  recommended  that the  thermistor  be  connected  by  shielded  wire  for lowest noise.

- 6) Connect the DVM to SET-POINT IN and GND.

<!-- image -->

- 7) Connect  a  3.3V  or  5V  DC  power  supply  with  sufficient power rating to V DD  and GND.
- 8) Turn on the power supply.

Note: The MAX8521 output is not enabled yet.

- 9) Adjust R23 until the DVM reads 0.75V. This adjusts the set point for approximately +25°C.
- 10)  	 Move the DVM positive lead to THERM and verify a  voltage  of  approximately  0.75V.  This  represents ambient temperature at the TEC module.
- 11) Enable the MAX8521 by moving the shunt on J7 to the 1 and 2 position.
- 12) After enabling the MAX8521, verify that the THERM voltage  converges  toward  the  set-point  voltage  on R23 (set to 0.75V in step 9) after approximately 30 seconds.  The  easiest  way  to  measure  the  convergence is to place a DVM between THERM and SETPOINT.  The  voltage  should  read  less  than  100μV. If  the  TEC  is  connected  backwards,  the  THERM voltage will move away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX8521 and reverse the TEC+ and TEC- connections.
- 13) Once proper operation is verified, other temperatures can  be  set  with  R23,  the  DAC,  or  an  external  voltage applied to SET-POINT IN. (1V is approximately +10°C;  0.5V  is  approximately  +40°C.  The  slope  is approximately -14mV/°C for a typical NTC thermistor.)

## Detailed Description

## Voltage and Current-Limit Settings

The  MAX8521  provides  control  of  the  maximum  differential  TEC  voltage  and  the  maximum  positive  and negative TEC current. The voltage on the MAXV pin of the MAX8521 sets the maximum differential TEC voltage. Use the following equations to set the voltage:

<!-- formula-not-decoded -->

The  components  installed  on  the  MAX8521  EV  kit  set VMAXV to  1V,  for  a  maximum  TEC  voltage  of  4V.  See Table  1  or  refer  to  the  MAX8520/MAX8521  data  sheet for    more  information.  The  voltages  on  the  MAXIP  and MAXIN pins set the maximum positive and negative current through the TEC. Use the following equations to set the currents:

<!-- formula-not-decoded -->

Resistor  values  for  R2  through  R7  should  be  between 10kΩ and 100kΩ.

<!-- formula-not-decoded -->

where R SENSE (R1) is 100mΩ.

Maximum negative TEC current:

<!-- formula-not-decoded -->

The  components  installed  on  the  MAX8521  EV  kit  set the maximum positive current to +1.5A and the maximum negative current to -1.5A. See Table 2 and 3 or refer to the MAX8520/MAX8521 data sheet for more information.

## Jumper J2

Jumper  J2  connects  the  current  control  input  (CTLI)  of the MAX8521 to the error signal of the thermal loop. The thermal-loop  circuit  compares  thermistor  feedback  from the TEC module to the set-point voltage to generate the CTLI signal.

## Table 1. Maximum TEC Voltage

| V TEC(MAX)   | R3    | R4    |
|--------------|-------|-------|
| 4V           | 47kΩ  | 100kΩ |
| 2.6V         | 130kΩ | 100kΩ |

## Table 2. Maximum Positive TEC Current

| I TECP(MAX)   | R5    | R6     |
|---------------|-------|--------|
| 1.5A          | Short | Open   |
| 0.75A         | 100kΩ | 100kΩ  |
| 0.5A          | 100kΩ | 49.9kΩ |

## Table 3. Maximum Negative TEC Current

| I TECN(MAX)   | R7    | R8     |
|---------------|-------|--------|
| 1.5A          | Short | Open   |
| 0.75A         | 100kΩ | 100kΩ  |
| 0.5A          | 100kΩ | 49.9kΩ |

## MAX8521 Evaluation Kit

To drive CTLI directly, remove the shunt on J2 and apply a DC voltage between 0 and 3V to the CTLI pad. A 1.5V voltage on CTLI sets a TEC current of approximately 0A. A voltage of 0V or 3V on CTLI produces -1.5A or +1.5A, respectively. The current changes proportionally with the voltage applied to CTLI.

Note: The current does not reach ±1.5A if the maximum positive  and  negative  current  limits  are  set  to  lower values.  Refer  to  the Voltage  and  Current-Limit  Settings section  in  the  MAX8520/MAX8521  data  sheet  for  more information.

## Jumper J6

Jumper J6 sets the switching frequency for the MAX8521. Position 1-2 sets the frequency to 1MHz. Position 2-3 sets it to 500kHz.

Note: The MAX8521 is shipped with a short across pins 1 and 2 of J6.

## Jumper J7

The  MAX8521  can  be  placed  in  shutdown  mode  using jumper J7. See Table 4 for jumper settings.

## Table 4. Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                                                                             |
|----------|-------------------|--------------------------------------------------------------------------------------|
| J7       | 1-2               | SHDN = High. MAX8521 enabled.                                                        |
| J7       | 2-3*              | SHDN = Low. MAX8521 disabled.                                                        |
| J6       | 1-2*              | MAX8521 switching frequency is 1MHz.                                                 |
| J6       | 2-3               | MAX8521 switching frequency is 500kHz.                                               |
| J2       | Open              | Drive the CTLI pad directly with a DC voltage. Disconnects the thermal-loop circuit. |
| J2       | Closed*           | Thermal-control loop is closed. DAC or R23 generates temperature set point.          |
| J8       | 1-2               | DAC generates temperature set point.                                                 |
| J8       | 2-3*              | Potentiometer R23 generates temperature set point.                                   |
| J8       | Open              | Voltage applied to SET-POINT IN generates temperature set point.                     |

* Default position.

## Jumper J8

Jumper J8, position 2-3, connects the DAC to the thermalloop  circuit.  Connect  the  EV  kit  to  the  parallel  port  of a  computer  and  use  the  EV  kit  software  to  control  the DAC.  Position  1-2  connects  potentiometer  R23  to  the thermal-loop circuit. To use an external voltage to control the thermal loop, remove the shunt from J8 and apply the voltage  to  the  SET-POINT  IN  pad. A  voltage  of  +0.75V corresponds to approximately +25°C. 1V is approximately +10°C,  and  0.5V  is  approximately  +40°C.  The  slope  is approximately -14mV/°C for a typical NTC thermistor.

## Switch SW1

Switch SW1 resets the DAC to 0.75V.

## ITEC Current-Monitor Output

The ITEC output  provides  a  voltage  proportional  to  the actual TEC current. V ITEC  = REF when the TEC current is zero. The actual TEC current is:

<!-- formula-not-decoded -->

Use  ITEC  to  monitor  the  cooling  or  heating  current through the TEC module. Positive values of I TEC  indicate heating  for  typically  connected  modules.  For  stability, keep the ITEC output capacitance below 150pF.

## Controlling TEC Through a Parallel Port

## Required Equipment

In addition to the equipment listed under the Quick Start section, the following is needed:

- ● A computer running Windows 95, 98, or 2000 (Note: Windows 2000 requires the installation of a driver located on the CD.)
- ● A parallel printer port (DB25 on the back of the computer)
- ● A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX8521 EV kit

## Procedure

- 1) Place a shunt across J2 to connect the thermal loop to CTLI.
- 2) Place a shunt across pins 2 and 3 on J8 to select the DAC.

│

Evaluates: MAX8521

- 3) Place a shunt across pins 2 and 3 on J7 to disable the MAX8521 output.
- 4) Obtain TEC module specifications for absolute maximum TEC voltage and absolute maximum current. Set these (or lower) limits at the MAX8521 MAXV, MAXIP, and MAXIN inputs. See Table 1, 2, and 3 to select resistors or refer to the MAX8521 data sheet.
- 5) Connect  the  TEC  module  to  OS1,  OS2,  THERM, and GND. Typical connections for most modules are: a)	 Module TEC- to OS2
- b)  Module TEC+ to OS1
- c)  Module thermistor to THERM
- d)  2nd module thermistor pin to GND
- e)  Module case ground or shield to GND

Be sure to check your module specifications before making connections. Also,  it  is  recommended  that the thermistor be connected through shielded wire for lowest noise.

- 6) Connect a cable from the computer's parallel port to the MAX8521 EV kit. Use a straight-through, 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 7) Install  the  software  by  running  the  INSTALL.EXE program.  The  install  program  copies  the  files  and creates icons for them in the Windows 95/98/2000 Start menu. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 8) Connect a 3.3V or 5V DC power supply with sufficient power rating to V DD  and GND.
- 9) Turn on the power supply.
- 10) Start the MAX8521 program by opening its icon in the  Start  menu.  At  program  startup,  the  software forces  the  DAC  to  0.75V,  which  corresponds  to approximately +25°C.
- 11) Connect the DVM to THERM and verify a voltage of  approximately  0.75V.  This  represents  ambient temperature at the TEC module.
- 12) Enable the MAX8521 by moving the shunt on JU1 to the 1-2 position.
- 13) After enabling the MAX8521, verify that the THERM voltage converges toward the DAC voltage (0.75V) after  approximately  30  seconds.  The  easiest  way to  measure  the  convergence  is  to  place  a  DVM between  THERM  and  SET-POINT.  The  voltage

should read less than 100μV. If the TEC is connect -ed backwards, the THERM voltage will move away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX8521 and reverse the TEC+ and TEC- connections.

- 14) Once  proper  operation  is  verified,  other  temperatures  can  be  set  with  the  DAC.  See  the Software User Interface section.

## Software User Interface

The  user  interface  is  easy  to  operate  using  either  the mouse or the Tab key to navigate. To program the DAC, enter the ratio of the desired DAC output voltage (V DAC ) to the reference voltage (REF):

<!-- formula-not-decoded -->

The ratio  must  be  a  decimal  number  between  0  and  1. Press  Enter  or  click  on  the  Update  button  to  send  the data to the DAC. The program starts with a ratio of 0.5. This sets the DAC output to 0.75V, which corresponds to +25°C. A ratio of 0.67 sets the DAC output to 1V, which corresponds to approximately +10°C. A ratio of 0.33 sets the DAC output to 0.5V or approximately +40°C. The slope is approximately -14mV/°C for a typical NTC thermistor.

## General-Purpose SPI Utility

There  are  two  methods  for  communicating  with  the MAX5144 DAC: through the user-interface panel or through the general-purpose SPI utility. This utility (Figure 3) configures SPI parameters such as clock polarity (CPOL), clock phase  (CPHA),  and  chip-select  (CS)  polarity.  The  fields where pin numbers are required apply to the pins of the parallel port connector.

The  utility  handles  the  data  only  in  byte  (8-bit)  format. Data  longer  than  a  byte  must  be  handled  as  multiple bytes. For example, a 16-bit word should be broken into two 8-bit bytes. To write data to the slave device, enter the data into the field labeled 'Data bytes to be written.' Each data byte should be hexadecimal, prefixed by 0x, and separated with a comma. Press the Send Now button to write the data to the slave.

To read data from the slave device, the field 'Data bytes to be written:' must contain hexadecimal values. Include the same number of bytes as to be read from the slave.

Note: The  MAX5144  is  a  write-only  device  and  cannot be read.

Figure 1. Thermal-Loop Functional Diagram for the MAX8521 EV Kit

<!-- image -->

Figure 2. Main Window for the MAX8521 EV Kit

<!-- image -->

Evaluates: MAX8521

Figure 3. SPI Utility Showing the Settings to Communicate with the MAX8521 EV Kit

<!-- image -->

## MAX8521 Evaluation Kit

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                   |
|--------------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C2, C3, C5, C11, C20 |     6 | 1µF ±10%, 6.3V X5R (0603) ceramic capacitors Murata GRM188R60J105K Taiyo Yuden JMK107BJ105KA  |
| C4, C10, C16             |     3 | 10µF ±20%, 6.3V X5R (0805) ceramic capacitors Taiyo Yuden JMK212BJ106MG                       |
| C6, C7, C12, C13, C14    |     5 | 0.1µF ±10%, 25V X5R (0603) ceramic capacitors Murata GRM188R71E104K Taiyo Yuden TMK107BJ104KA |
| C8                       |     1 | 0.047µF ±10%, 10V X7R (0402) ceramic capacitor Murata GRP155R71A473K                          |
| C9                       |     0 | Not installed (1206)                                                                          |
| C15                      |     0 | Not installed (0603)                                                                          |
| C17                      |     1 | 0.022µF ±10%, 50V X7R (0603) ceramic capacitor Murata GRM188R71H223K                          |
| C18                      |     1 | 10µF ±20%, 4V X5R (0603) ceramic capacitor TDK C1608X5R0G106M                                 |
| C21                      |     1 | 150µF ±20%, 6.3V, 18m ESR, 2.8A, D2E size, POSCAP Sanyo 6TPE150MI                             |
| J1                       |     1 | DB25 male right-angle connector                                                               |
| J2                       |     1 | 2-pin header                                                                                  |
| J3-J6                    |     0 | Not installed                                                                                 |
| J7, J8                   |     2 | 3-pin headers                                                                                 |
| L1, L2                   |     2 | 2.2µH, 1.6A inductors Sumida CDRH2D18/HP-2R2                                                  |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic             | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Sanyo                 | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| Sumida                | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate you are using the MAX8521 when contacting these manufacturers.

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8521EVKIT | 0°C to +70°C | 36 UCSP      |

Evaluates: MAX8521

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| Q1, Q2, Q3    |     3 | npn bipolar transistors, 40V, SOT23 Central Semiconductor CMPT3904 |
| R1            |     1 | 0.1Ω ±1%, 0.25W (1206) sense resistor Panasonic ERJ8RSFR10         |
| R3            |     1 | 47kΩ ±5% (0402) resistor                                           |
| R4            |     1 | 100kΩ ±1% (0402) resistor                                          |
| R5-R8, R24    |     0 | Not installed (0402)                                               |
| R9, R10, R11  |     3 | 4.7kΩ ±5% (0603) resistors                                         |
| R12-R15, R18  |     5 | 1kΩ ±5% (0603) resistors                                           |
| R16           |     1 | 240kΩ ±5% (0603) resistor                                          |
| R17           |     1 | 47kΩ ±1%, (0603) resistor                                          |
| R19           |     1 | 10Ω ±5% (0603) resistor                                            |
| R20           |     1 | 10kΩ ±0.1%, 25ppm/°C (0805) resistor Panasonic ERA6YEB103          |
| R21, R22      |     0 | Not installed (0603)                                               |
| R23           |     1 | 10kΩ potentiometer (multiturn)                                     |
| SW1           |     1 | Switch, momentary, NO                                              |
| U1            |     1 | Power driver, 36-pin UCSP™ MAX8521EBX                              |
| U2            |     1 | Op amp, SOT23-6 MAX4238AUT-T                                       |
| U3            |     0 | Not installed, SO-8                                                |
| U4            |     1 | Serial, 14-bit DAC, 10-pin µMAX ® MAX5144EUB                       |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

UCSP is a trademark of Maxim Integrated Products, Inc.

│

## MAX8521 EV Kit Schematic

<!-- image -->

## MAX8521 EV Kit PCB Layout

Component Placement Guide-Component Side

<!-- image -->

Component Side

<!-- image -->

Evaluates: MAX8521

## MAX8521 EV Kit PCB Layout (continued)

Layer 2

<!-- image -->

Layer 3

<!-- image -->

Evaluates: MAX8521

│

## MAX8521 EV Kit PCB Layout (continued)

Evaluates: MAX8521

Solder Side

<!-- image -->

Component Placement Guide-Solder Side

<!-- image -->

│

## MAX8521 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 11/04           | Initial release   | -               |
|                 1 | 1/17            | Updated Schematic | 8               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX8521