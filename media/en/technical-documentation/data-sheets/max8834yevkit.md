<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8834Y evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the highly integrated MAX8834Y adaptive step-up converter with 1.5A flash driver. The MAX8834Y flash driver integrates an adaptive 1.5A PWM step-up DC-DC converter, two 750mA white LED camera flash/movie current regulators, and a 16mA indicator LED current regulator. The EV kit includes a MAXQ2000 microcontroller command module that provides the I 2 C interface to control individual output on/off, the step-up output voltage, movie/flash current, and flash timer duration settings.

The MAX8834Y evaluation software can be downloaded from www.maxim-ic.com/evkitsoftware .  The MAX8834Y EV kit can also evaluate the MAX8834Z. To evaluate the MAX8834Z, order a free sample along with the MAX8834Y EV kit.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8834YEVKIT+ | EV Kit |

## Component Lists

## Main Circuit

| DESIGNATION        |   QTY | DESCRIPTION                                                                       |
|--------------------|-------|-----------------------------------------------------------------------------------|
| C1, C2             |     2 | 10µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A106K or equivalent     |
| C3, C4             |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) TDK C1005X7R1C104K or equivalent    |
| D1, D2             |     2 | White LED flash OSRAM Opto Semi LW_F65G                                           |
| D3                 |     1 | Red indicator LED OSRAM Opto Semi LS M47K-J2L1-1 OSRAM Opto Semi LS P47F-U1AA-1-1 |
| JU1, JU2, JU4, JU9 |     4 | 3-pin headers, 0.1in Sullins PEC36SAAN or equivalent                              |

Features

- ♦ 2.5V to 5.5V Operation Range
- ♦ Step-Up DC-DC Converter

1.5A Guaranteed Output Current

Adaptive or I 2 C-Programmable Output Voltage (3.7V to 5.2V in 16 Steps)

Over 90% Efficiency

- On-Chip Power MOSFET and Synchronous Rectifier
- Fixed 2MHz and 4MHz PWM SwitchingFrequency Option

Small 1µH to 4.7µH Inductor

- Two Flash/Movie LED Current Regulators I 2 C-Programmable Flash Output Current (22.44mA to 750mA in 32 Steps) I 2 C-Programmable Movie Output Current (15.6mA to 125mA in 8 Steps)
- ♦
- Low-Dropout Voltage (100mV typ) at 500mA
- ♦ LED Indicator Current Regulator I 2 C-Programmable Output Current (0.5mA to 16mA in 32 Steps) Ramp and Blink Timers for Indicator Mode Low-Dropout Voltage (75mV typ) at 16mA
- ♦ I 2 C and/or LED\_EN ON/OFF Control for LED Current Regulators
- ♦ I 2 C-Programmable Flash Safety Timer (50ms to 800ms in 50ms Steps)
- ♦ I 2 C-Programmable Watchdog Timer (4s to 16s in 4 Steps)
- ♦ MAXQ2000 Command Module for the  I 2 C Control
- ♦ GSM Blank Logic Input Reduces Peak Battery Current
- ♦ Low-Battery Detection (MAXFLASH)
- ♦ Remote Temperature Sensor Input Prevents Finger Burn or Fire
- ♦ Open/Short LED Detection
- ♦ Thermal-Shutdown Protection
- ♦ &lt; 1µA Shutdown Current
- ♦ Tiny External Components
- ♦ 20-Bump, 0.5mm Pitch, 2.5mm x 2mm WLP Package
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## MAX8834Y Evaluation Kit

## Component List (continued)

## Main Circuit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| JU3           |     1 | 2-pin header, 0.1in Sullins PEC36SAAN or equivalent                  |
| L1            |     1 | 2.2µH inductor Coilcraft LPS6225-222ML (3.9A, 6.2mm x 6.2mm x 2.5mm) |
| L2            |     1 | 1.0µH inductor Taiyo Yuden NR4018T1RON (4A, 4.2mm x 4.2mm x 1.8mm)   |
| R1            |     1 | 100k Ω ±5% NTC thermistor, ß = 4550K (0603) TDK NTCG164LH104J        |

| DESIGNATION                   |   QTY | DESCRIPTION                                                                          |
|-------------------------------|-------|--------------------------------------------------------------------------------------|
| C5, C6, C7, C10-C14, C25, C26 |    10 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) TDK C1005X7R1C104K                     |
| C8                            |     1 | 10µF ±20%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61C106M TDK C3216X5R1C106M |
| C9, C21, C23                  |     3 | 10µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A106M                      |
| C15, C16                      |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H220J                       |
| C17, C18                      |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H100J                       |
| C19, C20, C24                 |     3 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K                       |
| C22                           |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E333K                    |
| D4                            |     1 | Green LED (0603) Panasonic LNJ308G8TRA                                               |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| R2, R3        |     0 | Not installed, resistors (0402)                                                             |
| R31           |     1 | 0 Ω resistor (0402)                                                                         |
| S1            |     0 | Not installed, momentary pushbutton switch Panasonic EVQ-PHP03T Mountain Switch 101-0664-EV |
| U1            |     1 | Flash driver (20 WLP) MAX8834YEWP+                                                          |
| -             |     5 | Shunts, 2 position Sullins STC02SYAN or equivalent                                          |
| -             |     1 | PCB: MAX8834Y Evaluation Kit+                                                               |

## Interface Circuit

| DESIGNATION       |   QTY | DESCRIPTION                                                                 |
|-------------------|-------|-----------------------------------------------------------------------------|
| J1                |     1 | USB type-B receptacle Assmann AU-Y1007-R AMP/Tyco 292304-1 Molex 67068-9000 |
| J2                |     1 | Not installed, dual-row (2 x 5) 10-pin header with pin 7 removed            |
| JU5               |     1 | 2 x 4-pin header, 0.1in                                                     |
| JU6               |     1 | 3-pin header, 0.1in Sullins PEC36SAAN or equivalent                         |
| JU7, JU8, JU10    |     3 | 2-pin headers, 0.1in Sullins: PEC36SAAN or equivalent                       |
| L3                |     1 | Ferrite bead TDK MMZ1608R301A (0603)                                        |
| R4-R8             |     0 | Not installed, resistors-PCB short (0402)                                   |
| R9, R10           |     2 | 27 _ ±5% resistors (0402)                                                   |
| R11               |     1 | 1.5k _ ±5% resistor (0402)                                                  |
| R12, R17          |     2 | 470 _ ±5% resistors (0402)                                                  |
| R13               |     1 | 2.2k _ ±5% resistor (0402)                                                  |
| R14               |     1 | 10k _ ±5% resistor (0402)                                                   |
| R15, R25          |     2 | 196k _ ±1% resistors (0402)                                                 |
| R16, R20          |     2 | 100k _ ±1% resistors (0402)                                                 |
| R18, R19, R26-R29 |     0 | Not installed, resistors (0402)                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8834Y Evaluation Kit

## Component List (continued)

## Interface Circuit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| U5, U7        |     2 | Adjustable output LDO regulators (5 SC70) Maxim MAX8512EXK+T    |
| U6            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+T                     |
| U8            |     1 | Bidirectional level translator (14 TDFN-EP*) Maxim MAX3378EETD+ |
| Y1            |     1 | 16MHz crystal Vishay XT9S20ANA6M                                |
| Y2            |     1 | 6MHz crystal Vishay XT9S20ANA16M384                             |
| -             |     5 | Shunts, 2 position Sullins STC02SYAN or equivalent              |

## Component Suppliers

| SUPPLIER                                     | PHONE        | WEBSITE                     |
|----------------------------------------------|--------------|-----------------------------|
| Atmel Corporation                            | 408-441-0311 | www.atmel.com               |
| Digi-Key Corp.                               | 800-344-4539 | www.digikey.com             |
| Future Technology Devices International Ltd. | 503-547-0988 | www.ftdichip.com            |
| Murata Electronics North America, Inc.       | 770-436-1300 | www.murata-northamerica.com |
| OSRAM Opto Semiconductor                     | 888-446-7726 | www.osram-os.com            |
| Panasonic Corp.                              | 800-344-2112 | www.panasonic.com           |
| Philips Lumileds Lighting Company            | 408-964-2900 | www.philipslumileds.com     |
| Sullins Electronics Corp.                    | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                                  | 847-925-0888 | www.yuden.co.jp             |
| TDK Corp.                                    | 800-348-2496 | www.component.tdk.com       |
| Vishay                                       | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX8834Y when contacting these component suppliers.

## MAX8834Y EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX8834Y.EXE            | Application program                        |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| R21           |     1 | 36.5k _ ±1% resistor (0402)                             |
| R22           |     1 | 61.9k _ ±1% resistor (0402)                             |
| R23           |     1 | 374k _ ±1% resistor (0402)                              |
| R24           |     1 | 594k _ ±1% resistor (0402)                              |
| R30           |     1 | 10k _ ±1% resistor (0402)                               |
| U2            |     1 | Microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+        |
| U3            |     1 | USB-to-UART converter (32 TQFP) FTDI FT232BL            |
| U4            |     1 | 93C46 type 3-wire EEPROM (8 SO) Atmel AT93C46A-10SU-2.7 |

*EP = Exposed pad.

## MAX8834Y Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable 6V power supply capable of supplying 4A of output current
- One voltmeter
- A user-supplied Windows ® 2000/XP ® - or Windows Vista ® -compatible PC with a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX8834Y EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  the  jumpers  on  the  MAX8834Y EV kit are configured as shown in Table 1.
- 2) Preset the power supply to 3.6V. Turn off the power supply.
- 3) Connect the positive lead of the 3.6V power supply to the IN pad. Connect the negative lead of the 3.6V power supply to the PGND pad.
- 4) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 8834Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 5) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 6) Connect the USB cable from the PC to the USB receptacle J1 on the EV kit board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device
7. driver on Windows. Refer to the TROUBLESHOOT-ING\_USB.PDF document included with the software if there are any problems during this step.
- 7) Follow the directions of the Add New Hardware Wizard to  install  the  USB  device  driver.  Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX8834 (default installation directory) using the Browse button.
- 8) Turn on the power supply.
- 9) Start  the  MAX8834Y program by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1. Verify that the green LED (D4) turns on.
- 10) Normal  device  operation  is  verified  when Command Module Connected, Device Connected is displayed at the top-left side of the MAX8834Y EV kit main window (Figure 1).
- 11) Press the Boost converter ON button to turn on the step-up converter. Choose by BOOST\_CNTL from the BOOST\_MODE drop-down list and set BOOST\_CNTL to 4.5V.
- 12) Verify that the voltage is 4.5V at the OUT pad.
- 13) Switch to the FLED1/2 tab, as shown in Figure 2. Choose Enable FLED1 / FLED2 from the MOVIE drop-down list in the FLASH/MOVIE Control group box.
- 14) Verify that the white LEDs, D1 and D2, turn on.
- 15) Switch to the INDLED tab,  as  shown in  Figure  3. Select Enable from the INDLED Control dropdown list.
- 16) Verify that the red LED (D3) turns on.

## Detailed Description of

## Table 1. Default Jumper Settings (JU1JU10)

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |
| JU2      | 1-2              |
| JU3      | Closed           |
| JU4      | 1-2              |
| JU5      | JU5.2 closed     |
| JU6      | 2-3              |
| JU7      | Closed           |
| JU8      | Closed           |
| JU9      | 1-2              |
| JU10     | Closed           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

Figure 1. MAX8834 EV Kit Software Main Window

<!-- image -->

## Software

## User-Interface Panel

The MAX8834Y EV kit includes a MAXQ2000 microcontroller command module that provides the I 2 C interface to  control  the  MAX8834Y configuration. The main window of the MAX8834Y EV kit software (Figure 1) displays five tabs to set the MAX8834Y configuration: BOOST / STATUS , FLED1/2 , INDLED , MAXFLASH , and Control .  Changes to the controls result in a write operation that updates the appropriate registers of the MAX8834Y. After any write or read operation, the related command and data sent are shown in the top-right box of the main window.

<!-- image -->

## BOOST / STATUS Tab

The MAX8834Y includes a 2MHz PWM step-up converter that supplies power to the flash LEDs or other loads. Using the EV kit software, the MAX8834Y can be configured in boost mode, dropout mode, or adaptive mode through the BOOST\_MODE drop-down list. The output voltage is programmable from 3.7V to 5.2V (in 100mV steps) when in boost mode. See Figure 1 for details.

The Status 1 and Status 2 read-only registers monitor the MAX8834Y operating state and fault status. They indicate any short/open LED, overtemperature, powerOK, finger-burn, GSMB, or MAXFLASH status. The Status 1 and Status 2 indicators require a READ if  a fault  or  event  has occurred, in which case the corresponding indicator flag turns red. A second READ clears the status bit if the fault or event is no longer present.

The CHIP\_ID registers provides the manufacturer die type and mask revision information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

## FLED1/2 Tab

The FLED1/2 tab sheet provides the FLED1 and FLED2 configuration. The FLED1/FLED2 current is regulated to I 2 C-programmable levels for movie mode up to 125mA and flash mode up to 750mA. The flash or movie mode can be enabled through I 2 C or LED\_EN. LED\_EN can also be set to logic 0 or logic 1 through the software buttons ( LED\_EN Low or LED\_EN High ) in  the LED\_EN group box when the shunt is installed across jumper JU1 pins 1-2 on the EV kit. See Figure 2 for details.

The MAX8834Y includes a programmable input current limit that is invoked using the GSMB control to reduce the total current drawn from the battery cell during events like PA transmit. The GSM blank function (GSMB)-related parameters ( GSM Blank Polarity , ILIM ,  and HC\_TMR ) can be chosen in the GSMB\_CUR group box. Refer to the MAX8834Y/MAX8834Z IC data sheet for more information.

## INDLED Tab

Choose the INDLED tab to set the indicator LED (INDLED). The INDLED current ( IND )  is  regulated to I 2 C programmable levels up to 16mA. Programmable control is provided for (optional) Ramp Up Timer (off to on) and Ramp Down Timer (on to off), as well as Off Blink Timer , and On Blink Timer .  The user can choose to enable or disable the ramp time and blink rate features. See Figure 3 for the INDLED tab sheet. Refer to the MAX8834Y/ MAX8834Z IC data sheet for more information.

Figure 2. FLED1/2 Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8834Y Evaluation Kit

Figure 3. INDLED Tab

<!-- image -->

## MAXFLASH Tab

The MAX8834Y features a MAXFLASH function that can be programmed to reduce flash current during low-battery conditions to help prevent system undervoltage lockup from occurring. Check the Enable low battery function checkbox to enable the MAXFLASH function. Three related parameters ( LB\_CNTL , LB\_HYS ,  and LB\_TMR ) are defined in the MAXFLASH group box. See Figure 4 for MAXFLASH setup.  Refer  to  the  MAX8834Y/ MAX8834Z IC data sheet for more information.

## Control Tab

The Control tab allows the user to set watchdog and flash safety timer-control values, and NTC function control values. See Figure 5 for details.

<!-- image -->

The flash Safety Timer Duration ,  programmable from 50ms to 800ms through I 2 C, limits the duration of the flash mode in case LED\_EN is stuck high or I 2 C has not changed within the programmed flash safety timer duration. This timer can be configured to operate as One Shot Timer or Maximum Flash Timer through the Safety Timer Control drop-down list.

The Watch Dog Timer function can be programmed from 4s to 16s with a 4s step. Check the Enable Watch Dog Timer checkbox to allow the system to enter safe mode after the watchdog timer expires. In safe mode, the  MAX8834Y disables all current regulators and the step-up converter to prevent potential damage to the system. Check the Reset Watch Dog Timer checkbox to  revert  the  MAX8834Y back to the state present before entering safe mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

The finger-burn protection feature can be enabled by checking the Enable NTC Function checkbox in the NTC\_CNTL group box. Verify the NTC function by changing  the  resistor  R1  temperature.  Refer  to  the MAX8834Y/MAX8834Z IC data sheet for more information.

The other control in the Control tab is  for  the  GSMB input polarity.  GSMB can be set to logic 0 or logic 1 through the GSMB High or GSMB Low buttons in the GSMB group box when a shunt is installed across jumper JU2 pins 1-2 on the EV kit.

Figure 4. MAXFLASH Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

Figure 5. Control Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX8834Y Evaluation Kit

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX8834Y: through the normal user-interface panel (Figure 1) or through the SMBus commands available by pressing the Debug button in the main window. The Maxim Command Module Interface window (Figure 6) pops up and includes a 2-wire interface tab that allows for  execution of the SMBusSendByte() command. Refer to the MAX8834Y/MAX8834Z IC data sheet for command-byte format. The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x.  Binary  numbers must be exactly eight digits. See Figure 6 for an illustration of this tool.

Figure 6. Maxim Command Module Interface Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8834Y Evaluation Kit

## Detailed Description of Hardware

## Driving a Single High-Current LED

The MAX8834Y EV kit's default jumper settings are shown in Table 1.

## MAXQ2000 Command Module

The MAX8834Y EV kit includes the MAX8834Y IC main circuitry  (Figure 7a) and the MAXQ2000 command module (Figures 7b and 7c). The command module provides the I 2 C/SMBus-compatible interface for software control of the MAX8834Y configuration: individual output on/off, the step-up output voltage setting, the movie/flash current, and the flash timer duration settings.

To use the MAX8834Y EV kit with a user-supplied I 2 C interface, see the Using VDD, SDA, SCL, LED\_EN, and GSMB I/O Pads Independently section for more details.

## VDD Power Supply

VDD is the logic supply driving SCL, SDA, LED\_EN, and GSMB. On the MAX8834Y EV kit, with the JU10 shunt installed, VDD is powered by the MAX8512 LDO and has five voltage levels (1.6V, 1.8V, 2.8V, 3V, and 3.6V) selected through jumper JU5. The MAX8512 (U7) can be powered by USB or the MAX8834Y input supply using jumper JU6.

Connect the JU10 pin labeled by VDD to an external power supply with the JU10 shunt removed.

<!-- image -->

The MAX8834Y EV kit can be configured to drive a single high-current LED (D1) by shorting FLED1, FLED2, and INDLED through the proper jumper settings. FLED1 and FLED2 can be shorted together by installing a shunt on JU3 and by placing a shunt across jumper JU4 pins 2-3.  INDLED can be shorted to FLED1 and FLED2 by installing a shunt on JU3 and by placing shunts across jumpers JU4 and JU9 pins 2-3. The total high current flowing across D1 is the sum of the programmed FLED1, FLED2, and/or INDLED current by software.

For high-current LED (D1), the MAX8834Y EV kit comes with a 1.5A OSRAM OSLUX white LED LW\_F65G. The D1 footprint also accommodates Philips Lumileds' LED, LXCL-PWF4.

## Using VDD, SDA, SCL, LED\_EN, and GSMB I/O Pads Independently

To use the MAX8834Y EV kit with external VDD, SDA, SCL, LED\_EN, and GSMB signals, remove the shunts on jumpers JU1, JU2, and JU10. Connect the external power supply to the JU10 pin labeled by VDD. Connect the external SDA, SCL, LED\_EN, and GSMB signals to the corresponding pads.

## Evaluating the MAX8834Z

To evaluate the MAX8834Z, carefully remove the MAX8834Y and install the MAX8834Z. Inductor L1 also needs to be replaced by extra inductor L2 on the EV kit. All other components remain the same.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

Figure 7a. MAX8834Y EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8834Y Evaluation Kit

<!-- image -->

Figure 7b. MAX8834Y EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

Figure 7c. MAX8834Y EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8834Y Evaluation Kit

<!-- image -->

Figure 8. MAX8834Y EV Kit Component Placement-Top Layer

<!-- image -->

Figure 9. MAX8834Y EV Kit Component Placement-Bottom Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8834Y Evaluation Kit

Figure 10. MAX8834Y EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 11. MAX8834Y EV Kit PCB Layout-Bottom Layer

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.