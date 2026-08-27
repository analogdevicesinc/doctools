<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

## General Description

The MAX6876 evaluation system (EV system) consists of  a  MAX6876 evaluation kit (EV kit) and a Maxim CMOD232 command module. The MAX6876 EEPROMprogrammable quad power-supply tracker/sequencer circuit monitors four system voltages and ensures proper  power-up and power-down conditions for systems requiring voltage tracking and/or sequencing.

The evaluation software (EV software) runs under Windows ® 98/2000/XP, providing a convenient user interface to exercise the features of the MAX6876.

Order the complete EV system (MAX6876EVCMOD2) for a comprehensive evaluation of the MAX6876 using a PC. Order just the EV kit (MAX6876EVKIT) if the command module has already been purchased with a previous Maxim EV system, or if the EV kit is desired for custom development in conjunction with other microcontroller-based systems.

This evaluation system data sheet assumes the reader has a basic familiarity with the MAX6876 IC. Refer to the MAX6876 IC data sheet for detailed specifications and operating instructions.

## MAX6876 Stand-Alone EV Kit

The MAX6876 EV kit provides a proven PC board layout to facilitate evaluation of the MAX6876. It must be interfaced to appropriate serial communication signals for proper operation. Connect power, ground return, and SCL/SDA interface signals to the breakout header pins (see Figure 3). The load-switching FETs can control up to four supply rails. Refer to the MAX6876 IC data sheet for serial-data timing and electrical requirements.

## MAX6876 EV System

The MAX6876 EV system software runs under Windows 98/2000/XP on an IBM-compatible PC, interfacing to the EV system through the computer's serial communications  port.  See  the Quick Start section for setup and operating instructions.

## MAX6876 EV System Component List

| PART                    |   QTY | DESCRIPTION             |
|-------------------------|-------|-------------------------|
| MAX6876EVKIT            |     1 | MAX6876 evaluation kit  |
| CMOD232                 |     1 | Command module          |
| MAX6876 EV Kit Software |     1 | User-interface software |

Windows is a registered trademark of Microsoft Corp.

- ♦ Proven PC Board Layout
- ♦ Complete Evaluation System
- ♦ Convenient On-Board Test Points and Connectors
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE   | INTERFACE TYPE                |
|----------------|--------------|-------------------------------|
| MAX6876EVKIT   | 0°C to +70°C | User supplied                 |
| MAX6876EVCMOD2 | 0°C to +70°C | Windows software, RS-232 port |

Note: The MAX6876 evaluation software is designed for use with the complete EV system MAX6876EVCMOD2 (includes CMOD232 module together with MAX6876EVKIT). If the MAX6876 EV software will not be used, the MAX6876EVKIT board can be purchased by itself without the CMOD232 module.

## MAX6876 EV Kit Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                         |
|------------------------|-------|---------------------------------------------------------------------|
| C1-C4                  |     4 | 10µF ceramic capacitors KEMET C0805C106K9PACTU                      |
| C5-C8                  |     0 | Not installed Nichicon UUD1H221MNL1GS                               |
| C9-C12                 |     0 | Not installed KEMET C0805C106K9PACTU                                |
| C13-C16                |     4 | 1µF ceramic capacitors KEMET C0805C105K8RACTU                       |
| CR1-CR6                |     6 | 1206 surface-mount LEDs Fairchild Semiconductor QTLP650D4TR         |
| J1-J9, J11, J12        |    11 | Banana plug receptacles Keystone Electronics 6095                   |
| J10                    |     1 | 20-pin right-angle header Samtec SSW-110-02-S-D-RA                  |
| JMP1, JMP2, JMP6       |     3 | 3-pin headers, 0.1in centers Samtec TSW-103-07-F-S                  |
| JMP3, JMP4, JMP5, JMP7 |     4 | 2-pin headers, 0.1in centers Samtec TSW-102-07-F-S                  |
| Q1-Q4                  |     4 | 20V logic-level n-channel MOSFETs International Rectifier IRLR3714Z |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R16, R18      |     2 | 10k Ω surface-mount resistors (0805) Panasonic ERJ-6GEYJ103V |
| SW1           |     1 | Tactile switch, J-lead, E-switch TL3301NF160QJ               |
| TP1-TP23      |    23 | Triple-turret terminals Keystone Electronics 1598-2          |
| U1            |     1 | MAX6876 power-supply sequencer Maxim MAX6876ETX              |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE                        |
|-------------------------|--------------|--------------------------------|
| E-Switch                | 763-504-3525 | www.e-switch.com               |
| Fairchild Semiconductor | 800-341-0392 | www.fairchildsemiconductor.com |
| International Rectifier | 310-252-7105 | www.irf.com                    |
| KEMET                   | 864-963-6300 | www.kemet.com                  |
| Keystone Electronics    | 718-956-8900 | www.keyelco.com                |
| Nichicon                | 858-824-1515 | www.nichicon-us.com            |
| Panasonic               | 800-344-2112 | www.panasonic.com/industrial   |
| Samtec                  | 800-726-8329 | www.samtec.com                 |

Note: Indicate that you are using the MAX6876 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- Maxim MAX6876EVCMOD2 (contains MAX6876 EV kit board and CMOD232 module)
- DC power supply, 9V DC at 200mA (included with CMOD232 module)
- Windows 98/2000/XP computer with an available serial (COM) port
- Standard 9-pin female-to-male straight-through serial cable
- DC power supplies capable of providing 0 to 5V for up to four channels of sequenced and/or tracked power through the MAX6876 EV system. (Powersupply current requirements depend on user configuration and application.)
- Test leads with 0.175in banana plugs to connect the MAX6876 EV kit board to power supplies

## Procedure

## Do not turn on any power supplies until all connections are completed:

- 1) Set JMP1 to the 2-3 position for normal UVLO operation. See Table 1. If JMP1 is set to the 1-2 position, install appropriate resistors at R1 and R2 to set the desired UVLO voltage.
- 2) Set JMP2 to the 1-2 position to enable voltage tracking/sequencing. Leaving JMP2 open allows remote hardware control of the ENABLE pin through the CMOD232 module. See Table 2.
- 3) Ensure JMP3 is not shorted for normal operation (nonMARGIN functionality). See Table 3.
- 4) Ensure that shorting links at JMP4 and JMP5 are installed to set the desired I 2 C address as shown in Table 4. The MAX6876 EV kit I 2 C address must correspond with the I 2 C address set in the evaluation software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

| DESIGNATION         |   QTY | DESCRIPTION                                                   |
|---------------------|-------|---------------------------------------------------------------|
| R1                  |     0 | Surface-mount resistor (0805) (not installed)                 |
| R2                  |     0 | Surface-mount resistor (0805) ) (not installed)               |
| R3-R6, R12-R15, R17 |     9 | 100k Ω surface-mount resistors (0805) Panasonic ERJ-6GEYJ104V |
| R7-R11              |     5 | 750 Ω surface-mount resistors (0805) Panasonic ERJ-6GEYJ751V  |

## MAX6876 Evaluation Kit/Evaluation System

- 5) Set JMP6 to provide either VCC or ABP voltage to the VLOGIC net. The VLOGIC net must be connected to ABP if the MAX6876 is to be powered from one of  the  voltage-detector inputs (IN1-IN4), and the CMOD232 module is not connected (or if JMP7 is open). See Figure 3 and Table 5 for JMP6 settings. Be sure to remove resistors R7-R10 if VLOGIC is to be connected to ABP. Refer to the ABP section of the MAX6876 IC data sheet.
- 6) Place a shorting link at JMP7 if the MAX6876EVKIT logic is to be powered from the CMOD232 module. This connects the CMOD232 +5V supply to the VLOGIC net of the MAX6876EVKIT. See Figure 3 and Table 6.
- 7) Carefully connect the EV kit and CMOD232 module by aligning and fully mating the 20-pin header and socket, P3 of the CMOD232 module and J10 of the MAX6876EVKIT.
- 8) Connect a cable from the computer serial port to the CMOD232 module. If using a 9-pin serial port, use a straight-through female-to-male cable. If the PC has a 25-pin serial connector, a standard 25-pin to 9-pin adapter is required.
- 9) Install the evaluation software on your computer by running the INSTALL.EXE program on the CD. The program files are copied and icons are created in the Windows Start menu.
- 10) Connect the DC power supply to the CMOD232 module at input jack P1.
- 11) Start  the  MAX6876 evaluation software by clicking the program icon in the Start menu.

## Detailed Description of Software

## Connecting to the MAX6876EVKIT

To connect to the MAX6876 EV kit, ensure that header P3 of the CMOD232 module is plugged into J10 of the MAX6876 EV kit and that both boards have power.

Note: Power can be supplied to the MAX6876 EV kit from the CMOD232 module by installing a shorting link at JMP7. This shorting link must be removed if the MAX6876 EV kit is to operate from another supply voltage.

Connect the CMOD232 module to an available serial port on your PC using a standard straight-through female-to-male 9-pin cable. Set jumpers JMP4 and JMP5 on the MAX6876 EV kit to select the desired I 2 C address, per Table 4.

<!-- image -->

Click the system menu on the MAX6876 EV software and select Connect .  A  dialog box opens with pulldown menus for COM port selection and I 2 C slave address. Alternatively, clicking the Auto Detect checkbox causes the EV software to search serial ports COM1-COM4 and valid I 2 C  addresses for a MAX6876 EV kit. Click the Connect button for the EV software to establish I 2 C communication. If connection cannot be established, recheck electrical connections, COM port assignment, and the I 2 C slave address.

After the evaluation software locates the CMOD232 module and the MAX6876EVKIT board, the software polls  the  configuration  registers  and  updates  the  display every 500ms to reflect the current configuration.

## Overview Tab

The evaluation software Overview tab shows a graphical  representation of the four available power-supply IN\_/OUT\_ pairs, with many mouse-sensitive features. Figure 1 shows the appearance of the Overview tab for a typical configuration.

Clicking and dragging any of the four power-supply ramp waveforms allows OUT\_ tracking assignment to each of the four sequential ramps. The undervoltage/ overvoltage thresholds for each IN\_/OUT\_ pair can be adjusted graphically or with the keyboard. To enter the undervoltage or overvoltage thresholds using the keyboard, click the numeric threshold values on the left side of the Overview tab and a dialog box will open. This dialog box also allows selection of the threshold increments, either 10mV or 20mV.

Underlined text on the Overview tab is used to represent configuration register values that can be adjusted by selecting from a pulldown list. Other features, such as Fault Behavior and Power-Down Mode , are configured by radio buttons. The graphical representation of the  IN\_/OUT\_ pairs changes to reflect Simultaneous-

## or Reverse-Order Power-Down Mode .

For each IN\_/OUT\_ pair, a checkbox allows selection of the 100 Ω Pulldown resistance, and the adjustable Overcurrent Threshold can also be enabled or disabled for each pair. Checking the Overcurrent Threshold box for an IN\_/OUT\_ pair causes that channel to assert the OC output if the OUT\_ voltage drops below the selected overcurrent threshold percentage. The Assert RESET checkboxes determine which OUT\_ detectors assert the RESET output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6876 Evaluation Kit/Evaluation System

Figure 1. Evaluation Software Overview Tab

<!-- image -->

Any changes made to the configuration parameters on the Overview tab result in a corresponding change in the MAX6876 configuration registers for the connected MAX6876 EV kit. If configuration changes are made and no MAX6876 EV kit is connected, a warning dialog box will appear. Any changes made while disconnected are lost when connection is established.

## Advanced Tab

The Advanced tab provides a detailed indication of the current Register Values in  a  table  format.  Values can be changed by selecting the appropriate field with the mouse cursor. Values are shown for both the volatile configuration registers and the corresponding nonvolatile EEPROM locations. Figure 2 shows the appear- ance of the Advanced tab for a typical configuration.

Configuration register values can be stored in the configuration  EEPROM  by  clicking  on  the Commit Configuration button. Clicking the Locked checkbox disables both register and EEPROM writes by setting bit  2  of  register  13h.  To  lock  the  EEPROM  values,  set bit 2 of EEPROM location 33h.

Note: To unlock the EEPROM, first clear bit 2 of configuration register 13h, then clear bit 2 of EEPROM location 33h.

The Input Pin's State box allows software remote control of the logic-level voltage applied by the CMOD232 module to the MARGIN ,  ENABLE, and MR pins of the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

Figure 2. Evaluation Software Advanced Tab

<!-- image -->

MAX6876, as long as the shorting links on JMP3 and JMP2 are not installed. Physical jumper settings override any selections made in this box.

The MAX6876 can be configured to use its internal reference voltage or an external reference by selecting the appropriate radio button in the Reference Voltage box. If you choose to use an external reference, be sure to physically connect a precision voltage source at test point TP16 on the MAX6876 EV kit board. Selecting external reference while none is connected causes the part to repeatedly enter fault condition.

The I 2 C Enable box allows or prevents power sequencing/tracking to be enabled through the I 2 C interface. By clicking the Allow enable with I 2 C checkbox, power sequencing/tracking can be enabled or disabled by clicking the Send Enable Command button. If the Allow enable with I 2 C checkbox is not checked, the MAX6876 ignores the I 2 C enable command bit. When I 2 C  enable  is  allowed  by  setting  register  09h  bit  to  1, the MAX6876 internal ENABLE is the result of an AND condition between the I 2 C command bit (register 09h, bit 0) and the logic ENABLE input at pin 11. Refer to the logic ENABLE diagram in the MAX6876 data sheet.

<!-- image -->

The Fault Log box records the most recently detected fault  states.  If  the Fault Log box is full,  a  scrollbar allows review of up to 1024 past fault messages. The date and time data are from the PC clock.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6876 Evaluation Kit/Evaluation System

## System Menu

The System menu is used to initiate the serial communication connection between the MAX6876 EV kit board and the evaluation software. It can also be used to assert a software reset of the MAX6876 by selecting the Reboot Target option. Other functions available from the System menu include Commit Configuration to EEPROM and Lock Configuration ,  both  of  which  are functionally  equivalent  to  their  corresponding  controls on the Advanced tab.

Evaluation software configuration values can also be saved to disk for future reference. Opening a saved configuration file restores the previously saved configuration  values  to  the  registers  of  the  connected MAX6876 EV kit.

## Colors Menu

The Colors menu selections and dialog boxes allow the user to adjust evaluation software display colors to suit individual preference. Be sure to choose contrasting colors so that all display features remain visible.

## Detailed Description of Hardware

The MAX6876 (U1) is mounted on an evaluation board that  includes  all  necessary  support  components for a typical application circuit. The user power-supply input (VCC, banana jack J12) is bypassed near U1 by 1µF capacitor C13, and the internal supply voltage is bypassed by 1µF capacitor C14.

The controlled IN\_/OUT\_ pairs are each bypassed with 10µF capacitors C1-C4. Additional surface-mount component leads are included for larger bypass caps if desired, such as C5-C8. The OUT\_ voltages are similarly  provided  with  surface-mount lands for capacitors C9-C12. Capacitors C5-C8 and C9-C12 are not installed in the default configuration of the EV kit board, and are not required in most applications.

## Table 1. Jumper JMP1, TRKEN

| JMP1 SHUNT POSITION   | FUNCTION                                                                |
|-----------------------|-------------------------------------------------------------------------|
| 1-2                   | Adjust undervoltage-lockout threshold using resistor-dividers R1 and R2 |
| 2-3                   | Normal operation; UVLO threshold is 1.285V                              |

6

Connector J10 mates with the Maxim CMOD232 module, which enables communication with evaluation software running on a PC. As a convenience, the CMOD232 module provides 5V DC power to the VLOGIC net through pin 1 of J10 and JMP7. This voltage can be used to power U1 by placing a shorting link in position 2-3 of JMP6.

User-provided power supplies at J1-J4 are controlled as the IN1-IN4 voltages, and are sequenced or tracked as OUT1-OUT4 at J5-J8. These jacks accept a standard 0.175in tip-jack (banana plug) connector. Ground connections can be established at J9, J11, and at test points TP21 and TP23.

The MAX6876 EV kit is designed with 0.050in traces of 1oz copper for the main power paths. Each IN\_/OUT\_ pair  safely  handles  up  to  5A.  Proceed  with  caution  if higher current operation is required.

Light-emitting diodes CR1-CR4 indicate the status of the  PG\_ signals. A green LED indicates that power is good. The PG\_ signals can be monitored at test points TP17-TP20. Likewise, CR5 indicates the status of the REM signal.

## Jumper Function Tables

Tables 1 through 5 describe the EV kit configuration jumper functions. For a detailed understanding of the jumpers, see Figure 3, the MAX6876 EV kit schematic.

## Table 2. Jumper JMP2, ENABLE

| JMP2 SHUNT POSITION   | FUNCTION                                                     |
|-----------------------|--------------------------------------------------------------|
| 1-2                   | Voltage tracking/sequencing enabled                          |
| 2-3                   | Voltage tracking/sequencing disabled                         |
| Open                  | Evaluation software control of ENABLE through CMOD232 module |

Table 3. Jumper JMP3, MARGIN

| JMP3 SHUNT POSITION   | FUNCTION                                                                                                |
|-----------------------|---------------------------------------------------------------------------------------------------------|
| 1-2                   | MARGIN function enabled                                                                                 |
| Open                  | Normal operation; MARGIN function disabled, or under evaluation software control through CMOD232 module |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

## Table 4. Jumpers JMP4 and JMP5, I 2 C Slave Address Selection

| JMP4 SHUNT POSITION   | JMP5 SHUNT   | A1      | A0      | MAX6876 I 2 C ADDRESS   | MAX6876 I 2 C ADDRESS   |
|-----------------------|--------------|---------|---------|-------------------------|-------------------------|
|                       | POSITION     | (BIT 3) | (BIT 2) | BINARY                  | HEXADECIMAL             |
| 1-2                   | 1-2          | 0       | 0       | 101000xx                | A0h                     |
| 1-2                   | Open         | 0       | 1       | 101001xx                | A4h                     |
| Open                  | 1-2          | 1       | 0       | 101010xx                | A8h                     |
| Open                  | Open         | 1       | 1       | 101011xx                | ACh                     |

## Table 5. Jumper JMP6

| JMP6 SHUNT POSITION   | FUNCTION                                   | CAUTIONARY NOTES                                                       |
|-----------------------|--------------------------------------------|------------------------------------------------------------------------|
| 1-2                   | V LOGIC supplied from ABP pin of MAX6876   | Resistors R7-R10 must be removed to prevent loading ABP pin of MAX6876 |
| 2-3                   | V LOGIC connected to V CC net (J12)        | -                                                                      |
| Open                  | V LOGIC supplied from pin 1 of J10 or TP22 | -                                                                      |

## Table 6. Jumper JMP7, CMOD232 Power Connection

| JMP7 SHUNT POSITION   | FUNCTION                                                        | CAUTIONARY NOTES                                                       |
|-----------------------|-----------------------------------------------------------------|------------------------------------------------------------------------|
| 1-2                   | V LOGIC receives power from CMOD232 module through pin 1 of J10 | If shunt at JMP7 is installed, do not connect external voltage to TP22 |
| Open                  | No connection between CMOD232 module and V LOGIC                | -                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6876 Evaluation Kit/Evaluation System

Figure 3. MAX6876 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX6876 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6876 Evaluation Kit/Evaluation System

Figure 5. MAX6876 EV Kit PC Board Layout-Top Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6876 Evaluation Kit/Evaluation System

Figure 6. MAX6876 EV Kit PC Board Layout-Bottom Layer

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11