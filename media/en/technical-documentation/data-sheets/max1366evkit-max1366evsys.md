<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

## General Description

The MAX1366 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the capabilities of the MAX1366 4.5-digit panel meter with 4-20mA output. The MAX1366 EV kit also includes Windows ® 98SE/ 2000/XP-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the MAX1366.

The MAX1366 evaluation system (EV system) consists of the MAX1366 EV kit and a companion CMAXQUSB serialinterface board. The CMAXQUSB interface board allows a PC to control an SPI™ interface using its USB port. Order the MAX1366 EV system for a complete PC-based evaluation of the MAX1366. Order the MAX1366 EV kit if you already have a MAX1366-compatible serial interface.

The MAX1366 EV kit also supports the MAX1365/ MAX1367/MAX1368.

## MAX1366 EV Kit

| DESIGNATION                                    |   QTY | DESCRIPTION                                                                            |
|------------------------------------------------|-------|----------------------------------------------------------------------------------------|
| C1-C4, C6, C7, C9-C13, C19, C20, C22, C23, C24 |    16 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K TDK C1005X5R1A104K |
| C5, C14-C18, C21                               |     7 | 4.7µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A475M                       |
| C8                                             |     1 | 1.0µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA TDK C3216X7R1H105K |
| D0-D4                                          |     5 | Super-red 7-segment common cathode LEDs Lite-On LTS-4301JR                             |
| FB1                                            |     1 | Ferrite bead (0603) TDK MMZ1608R301A                                                   |
| J1                                             |     1 | 6-position terminal block Phoenix Contact 1725698 (or equivalent)                      |

Windows is a registered trademark of Microsoft Corp. SPI is a trademark of Motorola, Inc.

Features

- ♦ On-Board 5-Digit LED Display
- ♦ User-Friendly, Digital Meter Emulation Software
- ♦ Proven PCB Layout
- ♦ Windows 98SE/2000/XP-Compatible Evaluation Software
- ♦ Convenient Configuration Jumpers and Test Points
- ♦ EV System Includes USB Connectivity

## Ordering Information

| PART NUMBER     | TYPE      | INTERFACE                   |
|-----------------|-----------|-----------------------------|
| MAX1366EVKIT    | EV kit    | User-supplied SPI interface |
| MAX1366EVCMAXQU | EV system | CMAXQUSB interface board    |

Note: The MAX1366 EV kit software is included with the MAX1366 EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB interface board and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB board.

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                                   |
|-------------------|-------|-------------------------------------------------------------------------------|
| J2                |     1 | 2 x 20 right-angle female receptacle Samtec SSW-120-02-S-D-RA (or equivalent) |
| JU1               |     0 | Not installed, shorted by PCB trace                                           |
| JU2               |     1 | 3-way pin header                                                              |
| JU3-JU7, JU9-JU15 |    12 | 2-pin headers                                                                 |
| JU8               |     1 | Single-line 3-pin header                                                      |
| Q1                |     1 | N-channel depletion-mode MOSFET                                               |
| Q2                |     0 | Not installed, dual n-channel enhancement MOSFET                              |
| R1                |     1 | 100 Ω ±1% resistor (0402)                                                     |
| R2, R3            |     2 | 47k Ω ±5%, array of 8 bussed resistors CTS 745C101473JTR                      |
| R4                |     1 | 24k Ω ±5% resistor (0402)                                                     |
| R5                |     1 | 51k Ω ±5% resistor (0402)                                                     |
| R6                |     1 | 100k Ω ±5% resistor (0402)                                                    |
| R7                |     1 | 510k Ω ±5% resistor (0402)                                                    |

## MAX1366 Evaluation Kit/Evaluation System

## Component List

## MAX1366 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| R8            |     1 | 30.9k Ω ±1% resistor (0402)                                           |
| R9            |     1 | 100k Ω ±1% resistor (0402)                                            |
| R10           |     0 | Not installed, 51 Ω ±1% resistor (0402)                               |
| SW1           |     1 | 8-position DIP switch, top-slide surface mount CTS 219-8MST           |
| SW2           |     1 | 10-position DIP switch, top-slide surface mount CTS 219-10MST         |
| TP1-TP5       |     0 | Test points, not installed                                            |
| U1            |     1 | MAX1366ECM (48 TQFP) 4.5-digit single-chip ADC with LED driver        |
| U2            |     1 | MAX6126A21+ (8 µMAX ® ) High-precision, low-noise reference generator |
| -             |    14 | Shunts                                                                |
| -             |     1 | MAX1366 EV kit blank PCB                                              |

µMAX is a registered trademark of Maxim Integrated Products, Inc. +Indicates lead-free package.

## MAX1366 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX1366EVKIT |     1 | MAX1366 EV kit         |
| CMAXQUSB     |     1 | Serial-interface board |

## Quick Start

## Recommended Equipment

- 3.3V to 5VDC, 200mA power supply for LED driver
- 7V to 30VDC, 50mA power supply for current loop
- 4.75V to 5.25V power supply
- Voltage signal source with output between 0 to ±2V
- Digital current meter
- MAX1366 EV system MAX1366 EV kit Maxim CMAXQUSB interface board (USB cable included)
- A user-supplied Windows 98SE/2000/XP PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and

## MAX1366 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX1366.EXE             | Application program                        |
| FTD2XX.INF              | USB device driver file                     |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1366 when contacting these component suppliers.

underlined refers to items from the Windows 98SE/ 2000/XP operating system.

## Procedure

The MAX1366 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the most recent version of the EV kit software, 1366Rxx.ZIP.
- 2) Install  the  MAX1366 evaluation software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 3) On the CMAXQUSB board, ensure the shunt of JU1 is in the 3.3V or 5V position.
- 4) For the MAX1366 EV kit, make sure the jumpers and switches are in their default positions (Table 1).
- 5) Carefully connect the boards by aligning the MAX1366 EV kit's 40-pin connector with the 40-pin connector of the CMAXQUSB board.
- 6) Connect the 3.3V to 5VDC power supply on the MAX1366 EV kit's VLED pad and LEDG to ground.
- 7) Connect the 7V to 30VDC power-supply positive terminal to the MAX1366 EV kit's terminal block J1 position 2. Connect the 7V to 30VDC power-supply ground terminal to the J1 position 6.
- 8) Connect 4.75V to 5.25V power supply to terminal block J1, position 3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

- 9) Adjust the voltage source output to 1.024V. Connect the positive terminal to the MAX1366 EV kit's AIN+ pad. Connect the negative terminal to the MAX1366 EV kit's AIN- pad.
- 10) Connect the digital current meter positive terminal to  the  J1  position  5  and  negative  terminal  to  the AGND pad. Switch the meter to the DC milliamp range.
- 11) Connect the USB cable from the PC to the CMAXQUSB board. Turn on all three power supplies and the signal source. If you have previously installed the CMAXQUSB device driver on this computer, go to step 14.
- 13) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the Best Driver for your Device option. Specify the location of the device driver to be C:\Program Files\MAX1366 (default installation directory) using the Browse button.
- 14) Start  the  MAX1366 EV kit software by opening its icon in the Start menu. The GUI window appears, as shown in Figure 1.
- 15) Switch to the Voltage Measurement tab, as shown in  Figure  2.  Wait  one  second  or  click  the Collect Sample button. Verify the following readings:
- 12) A Building Driver Database window pops up in addition to a New Hardware Found message. If you don't see a window that is similar to the one described above after 30 seconds, remove the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000/XP. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you are experiencing problems.
- a)  LED display on the EV kit should be approximately 10240.
- b) Result Registers 1 &amp; 2 Code reading on the GUI should be approximately +10240.0000.
- c) Voltage (mV) reading should be approximately +1024.000000.
- 16) Fine-tune the voltage-signal source output within ±2V and verify that the LED display follows the adjustment. Verify that the readings on the software window follow the adjustment as well.

## Table 1. MAX1366 EV Kit Jumper and Switch Positions

| JUMPER                | PINS                  | DESCRIPTION                                                           |
|-----------------------|-----------------------|-----------------------------------------------------------------------|
| JU1                   | 1-2* (shorted by PCB) | V/I converter input follows DAC output                                |
| JU1                   | Cut open              | V/I converter input follows an external voltage signal (Note 1)       |
| JU2                   | 1-3*                  | Evaluate MAX1366/MAX1368 microcontroller-interfaced LED drivers       |
| JU2                   | 1-2                   | Evaluate MAX1365/MAX1367 stand-alone LED drivers, decimal point ON    |
| JU2                   | 1-4                   | Evaluate MAX1365/MAX1367 stand-alone LED drivers, decimal point OFF   |
| JU3                   | Open*                 | 4-20mA current output does not flow into the on-board resistor R1     |
| JU3                   | 1-2                   | 4-20mA current output flows into the on-board 100 Ω resistor (Note 2) |
| JU4                   | 1-2*                  | DAC_VDD connected to AVDD                                             |
| JU4                   | Open                  | DAC_VDD connected to an external power supply                         |
| JU5                   | 1-2*                  | DVDD connected to the CMAXQUSB interface-board power supply           |
| JU5                   | Open                  | DVDD connected to an external power supply                            |
| JU6                   | 1-2*                  | AVDD connected to DVDD                                                |
| JU6                   | Open                  | AVDD connected to an external power supply                            |
| JU7                   | Open*                 | Evaluate MAX1366/MAX1368 microcontroller-interfaced LED drivers       |
| JU7                   | 1-2                   | Evaluate MAX1365/MAX1367 stand-alone LED drivers                      |
| JU8                   | 2-1*                  | 4-20mA current output drives an external load                         |
| JU8                   | 2-3                   | 4-20mA current output drives the on-board current mirror (Note 3)     |
| JU9, JU11, JU13, JU15 | 1-2*                  | Use the on-board MAX6126 voltage source as ADC reference              |
| JU9, JU11, JU13, JU15 | Open                  | Use the internal 2.048V voltage source as ADC reference               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## Table 1. MAX1366 EV Kit Jumper and Switch Positions (continued)

| JUMPER      | PINS                            | DESCRIPTION                                                                                                                         |
|-------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| JU10, JU12, | 1-2*                            | Use the on-board MAX6126 voltage source as DAC reference                                                                            |
| JU14        | Open                            | Use the internal 2.048V voltage source as DAC reference                                                                             |
| SW1         | Switch 5 ON, other switches OFF | Switches 5, 6, 7, and 8 set the LED current. Default current is set to 20mA (refer to the MAX1366 data sheet for current settings). |
| SW2         | All switches OFF                | Evaluate MAX1366/MAX1368 microcontroller-interfaced LED drivers (see Table 2 for evaluating other devices)                          |

Note 1: The MAX1366/MAX1368 expects a 6.2k Ω (typ) source impedance from the voltage source driving CONV\_IN (normally driven by the on-chip DAC).

Note 2: The purpose of R1 is only for quick voltage measurement. The R1 tolerance determines the current-to-voltage transfer function.

Note 3: The current output accuracy of the device is maintained over the range of 0V to 2.5V. To interface with a high-loop voltage, such as 7V to 30V, a user may use the current output to drive an external current mirror. The external current mirror may significantly degrade 4-20mA current-output offset, gain, and associated temperature coefficients. See Detailed Description of Hardware section for details.

Figure 1. MAX1366 Evaluation Software-Control Register Tab

<!-- image -->

## Detailed Description of Software

To start the MAX1366 EV kit software, double-click the MAX1366 EV kit icon created during installation. The GUI window appears, as shown in Figure 1. Wait approximately two seconds while the MAX1366 EV kit software connects to the CMAXQUSB board.

On the lower half of the software window, the user can monitor the activity details of the SPI interface if one single SPI transaction is executed. If more than one SPI read or write commands are sent, only the last transaction details are displayed on the GUI window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

There are seven tab pages on the software window. These pages let the user configure and test different features of the MAX1366. They are the Control Register , Voltage Measurement , Results, Display, Limits , LED Segments , DAC, Current Output , Register Watch , and Math tabs.

## Control Register

The Control Register tab shown in Figure 1 contains the primary control register for the MAX1366. Set or clear any bit in this register by choosing the appropriate dropdown menu.

## Voltage Measurement

The Voltage Measurement tab shown in Figure 2 mimics the behavior of a digital voltmeter (DVM). The status bits are checked and displayed every time a sample is collected, either by manually clicking the Collect Sample button, or automatically by the software if the Auto Collect checkbox is enabled. The Result Registers 1 &amp; 2 Code displays the 20-bit result register (combination of result register 1 and result register 2 in two's complement code) in decimal format. The Voltage (mV) displays the calculated input voltage based on the result-register values and the value entered into EXT REF Voltage(V) field.  Compare the voltage source reading against the LED reading to check the conversion accuracy.

The EV kit is a ±2V range DVM, outside this range inputscaling and protection circuitry is recommended. Whenever the Voltage Measurement tab is activated, the software clears the SPI/ ADC and SEG\_SEL control bits to zero if they are not already cleared.

<!-- image -->

Figure 2. MAX1366 Evaluation Software-Voltage Measurement Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## Results, Display, Limits

The Results, Display, Limits tab shown in Figure 3 provides access to the two's complement data registers. Each register has Read and Write buttons, except for ADC RESULT 1 , ADC RESULT 2 ,  and PEAK RESULT , which are read-only. The reading or writing to the LED DATA register depends on the setting of the SPI/ ADC bit.

All the fields are shown in both decimal and hexadecimal formats. Whenever a writable field is changed, the font color is changed to red. This reminds the user that the new data has not been written to the device.

Figure 3. MAX1366 Evaluation Software-Results, Display, Limits Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## LED Segments

The LED Segments tab shown in Figure 4 lets the user turn  individual  LED segments on and off by clicking them with the mouse. Whenever the LED Segments tab is activated, the software sets the SEG\_SEL control bit to one if it is not already set.

The user can read all the LED register values by clicking the appropriate buttons ( Read LED Segment Reg 1 , Read LED Segment Reg 2 , Read LED Segment Reg 3 , or Read all ).  The  user  can also set all segments on by clicking the All  Segments On button and set all segments off by clicking the All Segments Off button.

<!-- image -->

Figure 4. MAX1366 Evaluation Software-LED Segments Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## DAC, Current Output

The DAC, Current Output tab shown in Figure 5 lets the user configure the DAC and V/I converter. After selecting one output mode, the user can check the ideal output current by clicking the Ideal Output Current button. This checks the accuracy of the output by comparing the ideal output reading on the GUI and the reading on the current meter.

When selecting the DAC input to follow the DAC register value, the user should click the Write button to write the new typed value to the device.

Figure 5. MAX1366 Evaluation Software-DAC, Current Output Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## Register Watch

The Register Watch tab shown in Figure 6 contains all of  the  twelve  registers  of  the  MAX1366.  The  user  can directly read all the current values of the registers.

<!-- image -->

Figure 6. MAX1366 Evaluation Software-Register Watch Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## Math

The Math tab shown in Figure 7 implements several math functions found in physical systems. Whenever the Math tab is activated, the software sets the SPI/ ADC control bit to 1 if it is not already set. The software also clears the SEG\_SEL control bit to zero if it is not already cleared.

The evaluation software intercepts the ADC result and displays it on the ADC Result Code panel. This is the same as on the Voltage Measurement tab page. It then calculates a new value without considering the digits l i mit  of  the  LED  display  and  displays  it  on  the Calculated Result panel. Finally, the software shows the calculated result on the LED with the closest approximation and automatically sets the decimal-point position.

The Type K Thermocouple function can be used along with a suitable cold-junction connection to convert a type K thermocouple's measured Seebeck voltage into temperature in degrees centigrade. The a0 coefficient  23 represents a cold-junction temperature of 23°C (the output depends on the sensitivity of the thermocouple).

Figure 7. MAX1366 Evaluation Software-Math Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

## Detailed Description of Hardware

The MAX1366 (U1) is a low-power, 4.5-digit ADC with integrated LED drivers and 4-20mA output. The MAX6126 (U2) provides an on-board +2.048V reference voltage. See Figure 9 and refer to the MAX1366 data sheet for more information.

## Evaluating the MAX1365/MAX1367/MAX1368

The MAX1366 EV kit supports the MAX1368 3.5-digit panel meter with LED drivers and 4-20mA output. All the features can be tested using the same software.

The MAX1366 EV kit also supports the MAX1365/ MAX1367 stand-alone digital panel meters with LED drivers. However, the evaluation software is not needed because there is no microprocessor interface on the MAX1365/MAX1367, but the stand-alone devices can be evaluated by configuring the on-board SW1 and SW2 DIP switches.

See Tables 1 and 2 for detailed configuration of jumpers and DIP switches for evaluating the MAX1365, MAX1367, and MAX1368.

Request a free sample of the MAX1365, MAX1367, or MAX1368 to test their features.

## Power Supplies

The DVDD, AVDD, and DAC\_VDD can use the power supply from the interface board for simple connection. Selections are 3.3V and 5V. For other valid supply voltages, the user can apply power supplies on the DVDD, AVDD, and DAC\_VDD pads, respectively.

Regulator/reference buffer power should be connected through J1, position 3. The input range is 4.75V to 5.25V.

Current-loop power should be connected through terminal block J1 position 2. The input range is 7V to 30V.

LED power supply should be connected on VLED and LEDG pads (see the IC data sheet for absolute maximum ratings).

## Table 2. DIP Switch SW2 Settings for Evaluating MAX1365/MAX1367

|   SW2 POSITION | FUNCTION   | DESCRIPTION                                             |
|----------------|------------|---------------------------------------------------------|
|              1 | EN_BPM     | OFF (V/I converter bipolar mode enabled)                |
|              1 | EN_BPM     | ON (V/I converter bipolar mode disabled)                |
|              2 | EN_I       | OFF (V/I converter 4mA offset enabled)                  |
|              2 | EN_I       | ON (V/I converter 4mA offset disabled)                  |
|              3 | REFSELE    | OFF (DAC uses internal reference)                       |
|              3 | REFSELE    | ON (DAC uses external reference)                        |
|              4 | INTREF     | OFF (ADC uses internal reference)                       |
|              4 | INTREF     | ON (ADC uses external reference)                        |
|              5 | RANGE      | OFF (ADC input voltage range is ±2V)                    |
|              5 | RANGE      | ON (ADC input voltage range is ±200mV)                  |
|              6 | PEAK       | OFF (display the ADC peak value on the LED)             |
|              6 | PEAK       | ON (PEAK function disabled)                             |
|              7 | HOLD       | OFF (Hold the current ADC value on the LED)             |
|              7 | HOLD       | ON (HOLD function disabled)                             |
|              8 | DPSET2     | OFF (see IC data sheet for decimal point control table) |
|              8 | DPSET2     | ON (see IC data sheet for decimal point control table)  |
|              9 | DPSET1     | OFF (see IC data sheet for decimal point control table) |
|              9 | DPSET1     | ON (see IC data sheet for decimal point control table)  |
|             10 | LED_EN     | OFF (LED enabled)                                       |
|             10 | LED_EN     | ON (LED disabled)                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

## 4-20mA Output

The MAX1366 EV kit features a 4-20mA current output for  driving  remote panel meters, data loggers, and process controllers in industrial applications. The MAX1366 DAC\_VOUT pin is connected directly to the CONV\_IN pin to have the current output (4-20mA or 0 to 16mA) follow the analog inputs.

The board offers a choice to use the current output as either a current source or a current sink. See Figure 8 for a simple current mirror. If used as a current source, JU8 pins 1-2 should be connected. If used as a current sink, JU8 pins 2-3 should be connected.

The current-output accuracy of the device is maintained over the range of 0V to 2.5V. The external current  mirror  may  significantly  degrade  4-20mA current output offset, gain, and associated temperature coefficients. The user is responsible for constructing a more precise current mirror if high accuracy of the device is to be maintained. The on-board current mirror is shown for demonstration purpose only.

Figure 8. Current Source vs. Current Sink Output

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

<!-- image -->

Figure 9. MAX1366 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

Figure 10. MAX1366 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1366 Evaluation Kit/Evaluation System

<!-- image -->

Figure 11. MAX1366 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1366 Evaluation Kit/Evaluation System

Figure 12. MAX1366 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600