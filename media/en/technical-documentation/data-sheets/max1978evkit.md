<!-- lastmod 2022-08-04 -->
## General Description

The MAX1978 evaluation kit (EV kit) is a fully assembled and tested PC board that implements a complete switch-mode temperature control system for a Peltier thermo-electric cooler (TEC) module. It operates from a single 3V to 5.5V supply and provides a bipolar ±2.2A (max) output to the module.

A potentiometer, DAC, or external source generates a DC temperature set-point voltage. Thermal feedback from the TEC module is compared to the set-point voltage to generate the TEC current control signal. The MAX1978 controls TEC current to accurately regulate temperature.

When using the DAC, the EV kit connects to the parallel port of a computer running Windows® 95, 98, or 2000.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION      |   QTY | DESCRIPTION                                                                                                  |
|------------------|-------|--------------------------------------------------------------------------------------------------------------|
| C1               |     1 | 4.7µF, 6.3V X5R, ceramic capacitor (0805) Murata GRM21BR60J475M Taiyo Yuden JMK212BJ475MG TDK C2012X5R0J475M |
| C2, C7, C12, C17 |     4 | 1µF, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J105M Taiyo Yuden JMK107BJ105MA TDK C1608X5R1A105K   |
| C3, C6, C9, C11  |     4 | 10µF, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106K Taiyo Yuden JMK212BJ106MG TDK C2012X5R0J106M  |
| C4               |     1 | 0.01µF, 16V X7R ceramic capacitor (0402) Murata GRP155R71C103K Taiyo Yuden EMK105BJ103KV TDK C1005X7R1E103K  |

- ♦ Circuit Footprint Less than 0.93in 2
- ♦ Circuit Height Less than 3mm
- ♦ Operates from a Single Supply (3V to 5.5V)
- ♦ ±2.2A Output Current
- ♦ High-Efficiency Switch-Mode Design
- ♦ Programmable Heating/Cooling Current Limit
- ♦ TEC Current Monitor Output
- ♦ Overtemperature, Undertemperature, and Analog Temperature Monitor
- ♦ 500kHz or 1MHz Switching Frequency
- ♦ SPI™-Compatible Serial Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Includes Windows 95-/98-/2000-Compatible Software and Demo PC Board
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE              |
|--------------|--------------|-------------------------|
| MAX1978EVKIT | 0°C to +70°C | 48 Thin QFN (7mm ✕ 7mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                  |
|---------------|-------|--------------------------------------------------------------------------------------------------------------|
| C5            |     0 | Not installed (0402)                                                                                         |
| C8            |     1 | 0.47µF, 6.3V X7R ceramic capacitor (0603) Murata GRM188R60J474K Taiyo Yuden LMK107BJ474KA TDK C1608X5R1A474K |
| C10           |     1 | 0.047µF, 10V X7R ceramic capacitor (0402) Murata GRP155R71A473K Taiyo Yuden LMK105BJ473KV TDK C1005X7R1C473K |
| C16, C21      |     0 | Not installed (0603)                                                                                         |
| C19           |     1 | 22µF, 6.3V X5R ceramic capacitor (1210) Murata GRM32DR60J226K Taiyo Yuden JMK325BJ226MM TDK C3225X5R0J226M   |

Component List continued on next page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

<!-- image -->

## Features

1

## MAX1978 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C20           |     0 | Not installed (1210)                                              |
| JU1, JU3, JU4 |     3 | 3-pin headers                                                     |
| JU2           |     1 | 2-pin header                                                      |
| L1, L2        |     2 | 3µH, 2.4A inductors Sumida CDRH5D28-3R0NC                         |
| R1            |     1 | 0.068 Ω ± 1%, 0.5W sense resistor (1206) IRC LRC-LR1206-01-R068-F |
| R2            |     1 | 49.9k Ω ± 1% resistor (0402)                                      |
| R3            |     1 | 100k Ω ± 1% resistor (0402)                                       |
| R4-R8         |     0 | Not installed (0402)                                              |
| R9            |     1 | 80.6k Ω ± 1% resistor (0603)                                      |
| R10           |     1 | 69.8k Ω ± 1% resistor (0603)                                      |
| R11           |     1 | 105k Ω ± 1% resistor (0603)                                       |
| R12           |     1 | 20k Ω ± 1% resistor (0603)                                        |
| R13           |     1 | 10k Ω temp coefficient = 25ppm/°C, 0.1% resistor (0805)           |
| R14           |     1 | 1M Ω ± 5% resistor (0402)                                         |
| R15           |     1 | 20k Ω ± 5% resistor (0402)                                        |
| R16           |     1 | 100k Ω ± 5% resistor (0402)                                       |
| R25, R26      |     2 | 100k Ω ± 5% resistors (0603)                                      |

## Component List (continued)

| DESIGNATION                                                 | QTY                                                         | DESCRIPTION                                                                                                                          |
|-------------------------------------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| SW1                                                         | 1                                                           | Switch, momentary, normally open                                                                                                     |
| U1                                                          | 1                                                           | MAX1978ETM 48-pin thin QFN-EP*                                                                                                       |
| None                                                        | 4                                                           | Shunts                                                                                                                               |
| DAC AND INTERFACE COMPONENTS. REQUIRED ONLY FOR EVALUATION. | DAC AND INTERFACE COMPONENTS. REQUIRED ONLY FOR EVALUATION. | DAC AND INTERFACE COMPONENTS. REQUIRED ONLY FOR EVALUATION.                                                                          |
| C13, C14, C15                                               | 3                                                           | 0.1µF, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K Taiyo Yuden EMK107BJ104KA TDK C1608X7R1C104K                          |
| C18                                                         | 0                                                           | Not installed (0603)                                                                                                                 |
| J1                                                          | 1                                                           | DB25 male right-angle connector                                                                                                      |
| Q1, Q2, Q3                                                  | 3                                                           | NPN bipolar transistors, SOT23 Central Semiconductor CMPT3904 Diodes Inc. MMBT3904 Fairchild MMBT3904 General Semiconductor MMBT3904 |
| R17, R18, R19, R23                                          | 4                                                           | 1k Ω ± 5% resistors (0603)                                                                                                           |
| R20, R21, R22                                               | 3                                                           | 4.7k Ω ± 5% resistors (0603)                                                                                                         |
| R24                                                         | 1                                                           | 20k Ω potentiometer (multiturn)                                                                                                      |
| U2                                                          | 1                                                           | MAX5144EUB 10-pin µMAX                                                                                                               |

## Component Suppliers

| SUPPLIER                          | PHONE        | FAX          | WEBSITE               |
|-----------------------------------|--------------|--------------|-----------------------|
| Central Semiconductor             | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.                       | 805-446-4800 | 805-381-3899 | www.diodes.com        |
| Fairchild                         | 888-522-5372 | -            | www.fairchildsemi.com |
| General Semiconductor             | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| International Rectifier Co. (IRC) | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                            | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida                            | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden                       | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                               | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate you are using the MAX1978 when contacting these manufacturers.

## Quick Start

## Required Equipment

The following equipment is required before beginning:

- One DC power supply capable of supplying any voltage between 3V and 5.5V at 3A

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- One Peltier TEC module with a thermistor (NTC 10k Ω at +25°C)
- One digital voltmeter (DVM)

## Procedure

The MAX1978 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Place a shunt across pins 2-3 on JU1 to set the frequency to 500kHz.
- 2) Place a shunt across JU2 to connect the thermal loop to CTLI.
- 3) Place a shunt across pins 2-3 on JU4 to select the potentiometer.
- 4) Place a shunt across pins 2-3 on JU3 to disable the MAX1978 output.
- 5) Obtain TEC module specifications for absolute maximum TEC voltage, absolute maximum cooling current, and absolute maximum heating current. Set these (or lower) limits at the MAX1978's MAXV, MAXIP (heating current), MAXIN (cooling current) inputs. See Tables 1, 2, and 3 to select resistors, or refer to the MAX1978 data sheet.
- 6) Connect the TEC module to OS1, OS2, THERM, and GND. Typical connections for most modules:
- Module TEC+ to OS1
- Module TEC- to OS2
- Module thermistor to THERM
- Second module thermistor pin to GND
- Module case ground or shield to GND

Check module specifications before making connections. For lowest noise, connect the thermistor through shielded wire.

- 7) Connect the DVM to SET\_POINT and GND.
- 8) Connect a 3.3V DC or 5V DC power supply with sufficient power rating to VDD and GND.
- 9) Turn on the power supply.

Note: The MAX1978 output is not enabled yet.

- 10) Adjust R24 until the DVM reads 0.75V. This adjusts the set point for approximately +25°C.
- 11) Move the DVM positive lead to THERM and verify a voltage of approximately 0.75V. This corresponds to  an  ambient temperature of +25°C at the TEC module.
- 12) Enable the MAX1978 by moving the shunt on JU3 to the 1-2 position.
- 13) After enabling the MAX1978, verify that the THERM voltage converges toward the set-point voltage on R24 (set to 0.75V in Step 9) after approximately 30s. If the TEC is connected backward, the

<!-- image -->

## MAX1978 Evaluation Kit

THERM voltage moves away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX1978 and reverse TEC+ and TEC- connections.

- 14) Once proper operation is verified, other temperatures can be set with R24, the DAC, or an external voltage applied to SET\_POINT. (1V is approximately +10°C; 0.5V is approximately +40°C. The slope is approximately -14mV/°C for a typical NTC.)

## Detailed Description

## Voltage and Current-Limit Settings

The MAX1978 provides control of the maximum differential TEC voltage and the maximum positive and negative TEC currents.

The voltage on the MAXV pin of the MAX1978 sets the maximum differential TEC voltage. Use the following equations to set the voltage:

<!-- formula-not-decoded -->

Maximum TEC voltage: VTEC(MAX) = 4 ✕ VMAXV

The components installed on the MAX1978 EV kit set VMAXV to 1V, for a maximum TEC voltage of 4V. See Table 1 and refer to the MAX1978 data sheet for more information.

## Table 1. Maximum TEC Voltage

|   V TEC(MAX) (V) |   R2 (k Ω ) |   R3 (k Ω ) |
|------------------|-------------|-------------|
|                4 |        49.9 |         100 |
|              2.6 |         130 |         100 |

The voltages on the MAXIP and MAXIN pins set the maximum positive (heating) and negative (cooling) currents through the TEC. Use the following equations to set the currents:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Resistor values for R2 through R7 should be between 10k Ω and 100k Ω .

Maximum positive TEC current:

<!-- formula-not-decoded -->

where RSENSE (R1) is 68m Ω .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1978 Evaluation Kit

Maximum negative TEC current:

<!-- formula-not-decoded -->

The components installed on the MAX1978 EV kit set the maximum positive current to +2.2A and the maximum negative current to -2.2A. See Tables 2 and 3, and refer to the MAX1978 data sheet for more information.

Table 2. Maximum Positive TEC Current

|   I TECP(MAX) (A) | R6 (k Ω )   | R7 (k Ω )   |
|-------------------|-------------|-------------|
|               2.2 | Short       | Open        |
|               1.1 | 100         | 100         |
|               0.7 | 100         | 49.9        |

## Table 3. Maximum Negative TEC Current

|   I TECN(MAX) (A) | R4 (k Ω )   | R5 (k Ω )   |
|-------------------|-------------|-------------|
|               2.2 | Short       | Open        |
|               1.1 | 100         | 100         |
|               0.7 | 100         | 49.9        |

## Jumper JU1

Jumper JU1 sets the switching frequency for the MAX1978. Position 1-2 sets the frequency to 1MHz. Position 2-3 sets it to 500kHz.

## Jumper JU2

Jumper JU2 connects the current-control input (CTLI) of the MAX1978 to the thermal-loop circuit. The thermal-loop circuit compares thermistor feedback from the TEC module to the set-point voltage to generate the CTLI signal.

To drive CTLI directly, remove the shunt on JU2 and apply a DC voltage between 0 and 3V to the CTLI pad; 1.5V on CTLI sets a TEC current of approximately 0A. A voltage of 0V or 3V on CTLI produces -2.2A or +2.2A,

Table 4. Jumper Selection

| JUMPER   | JUMPER POSITION   | FUNCTION                                                                             |
|----------|-------------------|--------------------------------------------------------------------------------------|
| JU1      | 1-2               | MAX1978 switching frequency is 1MHz.                                                 |
| JU1      | 2-3*              | MAX1978 switching frequency is 500kHz.                                               |
| JU2      | Open              | Drive the CTLI pad directly with a DC voltage. Disconnects the thermal-loop circuit. |
| JU2      | Closed*           | Thermal-control loop is closed. DAC or R24 generates temperature set point.          |
| JU3      | 1-2               | SHDN = high, MAX1978 enabled.                                                        |
| JU3      | 2-3*              | SHDN = low, MAX1978 disabled.                                                        |
| JU4      | 1-2               | DAC generates temperature set point.                                                 |
| JU4      | 2-3*              | Potentiometer R24 generates temperature set point.                                   |
| JU4      | Open              | Voltage applied to SET_POINT generates temperature set point.                        |

* Default position

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

respectively. The current changes proportionally with the voltage applied to CTLI.

Note: The current does not reach ±2.2A if the maximum positive and negative current limits are set to lower values. See the Voltage and Current-Limit Settings section and refer to the MAX1978 data sheet for more information.

## Jumper JU3

The MAX1978 can be placed in shutdown mode using jumper JU3. See Table 4 for jumper settings.

## Jumper JU4

Jumper JU4, position 1-2, connects the DAC to the thermal-loop circuit. Connect the EV kit to the parallel port of a computer and use the EV kit software to control the DAC. Position 2-3 connects potentiometer R24 to the thermal-loop circuit. To use an external voltage to control the thermal loop, remove the shunt from JU4 and apply the voltage to the SET\_POINT pad. A voltage of 0.75V corresponds to approximately +25°C. 1V is approximately +10°C, and 0.5V is approximately +40°C. The slope is approximately -14mV/°C for a typical NTC.

## Switch SW1

Switch SW1 resets the DAC to 0.75V.

## ITEC Current Monitor Output

The ITEC output provides a voltage proportional to the actual TEC current. VITEC = REF when TEC current is zero. The actual TEC current is:

<!-- formula-not-decoded -->

Use ITEC to monitor the cooling or heating current through the TEC module. Positive values of ITEC indicate heating for typically connected modules. The maximum capacitance that ITEC can drive is 100pF.

<!-- image -->

## Controlling DAC Through Parallel Port

## Required Equipment

In  addition  to  the  equipment listed under the Quick Start section, the the following equipment is required:

- A computer running Windows 95, 98, or 2000. Note: Windows 2000 requires the installation of a driver;  refer  to  Win2000.pdf  or  Win2000.txt  located  on the diskette.
- A parallel printer port (25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX1978 EV kit

## Procedure

- 1) Place a shunt across pins 2-3 on JU1 to set the frequency to 500kHz.
- 2) Place a shunt across JU2 to connect the thermal loop to CTLI.
- 3) Place a shunt across pins 1-2 on JU4 to select the DAC.
- 4) Place a shunt across pins 2-3 on JU3 to disable the MAX1978 output.
- 5) Obtain TEC module specifications for absolute maximum TEC voltage, absolute maximum cooling current, and absolute maximum heating current. Set these (or lower) limits at the MAX1978's MAXV, MAXIP (heating current), MAXIN (cooling current) inputs. See Tables 1, 2, and 3 to select resistors, or refer to the MAX1978 data sheet.
- 6) Connect the TEC module to OS1, OS2, THERM, and GND. Typical connections for most modules:
- Module TEC+ to OS1
- Module TEC- to OS2
- Module thermistor to THERM
- Second module thermistor pin to GND
- Module case ground or shield to GND

Check module specifications before making connections. For lowest noise, connect the thermistor through shielded wire.

- 7) Connect a cable from the computer's parallel port to  the  MAX1978 EV kit. Use a straight-through 25pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI

<!-- image -->

## MAX1978 Evaluation Kit

- port or any other connector that is physically similar to the 25-pin parallel printer port.
- 8) The MAX1978.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you can use the INSTALL.EXE program to copy the files and create icons for them in the Windows 95/98/2000 start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 9) Connect a 3.3V DC or 5.0V DC power supply with sufficient power rating to VDD and GND.
- 10) Turn on the power supply.
- 11) Start the MAX1978 program by opening its icon in the start  menu. At program startup, the software forces the DAC to 0.75V, which corresponds to approximately +25°C.
- 12) Connect the DVM to THERM and verify a voltage of approximately 0.75V. This represents +25°C at the TEC module.
- 13) Enable the MAX1978 by moving the shunt on JU3 to the 1-2 position.
- 14) After enabling the MAX1978, verify that the THERM voltage converges toward the DAC voltage (0.75V) after  approximately 30s. If the TEC is connected backward, the THERM voltage moves away from 0.75V toward either 0V or 1.5V. If this occurs, shut down the MAX1978 and reverse TEC+ and TECconnections.
- 15) Once proper operation is verified, other temperatures can be set with the DAC (see the Software User Interface section).

## Software User Interface

The user interface is easy to operate. Use either the mouse or the Tab key to navigate.

To program the DAC, enter the ratio of the desired DAC output voltage (VDAC) to the reference voltage (REF):

<!-- formula-not-decoded -->

where REF = 1.5V.

The ratio must be a decimal number between zero and 1. Press Enter or click on the Update button to send the data to the DAC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1978 Evaluation Kit

The program starts with ratio = 0.5. This sets the DAC output to 0.75V, which corresponds to +25°C.

A ratio of 0.67 sets the DAC output to 1V, which corresponds to approximately +10°C. A ratio of 0.33 sets the DAC output to 0.5V, or approximately +40°C. The slope is approximately -14mV/°C for a typical NTC.

## General-Purpose SPI Utility

There are two methods for communicating with the MAX5144 DAC: through the user-interface panel or through the general-purpose SPI utility. This utility (Figure 3) configures SPI parameters such as clock polarity  (CPOL), clock phase (CPHA), and chip-select (CS) polarity. The fields where pin numbers are required apply to the pins of the parallel port connector.

The utility  handles the data only in byte (8-bit) format. Data longer than a byte must be handled as multiple bytes. For example, a 16-bit word must be broken into two 8-bit bytes. To write data to the slave device, enter the data into the field labeled 'Data bytes to be written:' Each data byte should be hexadecimal, prefixed by 0x, and separated with a comma. Press the Send Now button to write the data to the slave.

To read data from the slave device, the field 'Data bytes to be written:' must contain hexadecimal values. Include the same number of bytes as to be read from the slave.

Note: The MAX5144 is a write-only device and cannot be read.

Figure 1. Thermal-Loop Functional Diagram for the MAX1978 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1978 Evaluation Kit

Figure 2. Main Window for the MAX1978 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1978 Evaluation Kit

Figure 3. SPI Utility Showing the Settings to Communicate with the MAX1978 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1978 Evaluation Kit

<!-- image -->

Figure 4. MAX1978 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1978 Evaluation Kit

Figure 5. MAX1978 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX1978 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1978 Evaluation Kit

Figure 7. MAX1978 EV Kit PC Board Layout (2oz Copper)Component Side

<!-- image -->

Figure 8. MAX1978 EV Kit PC Board Layout (2oz Copper)Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1978 Evaluation Kit

<!-- image -->

Figure 9. MAX1978 EV Kit PC Board Layout (2oz Copper)Power Plane

Figure 10. MAX1978 EV Kit PC Board Layout (2oz Copper)Solder Side

<!-- image -->

Figure 11. MAX1978 EV Kit Component Placement Guide (2oz Copper)-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.