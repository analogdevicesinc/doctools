<!-- lastmod 2022-08-03 -->
## General Description

The MAX6639 evaluation kit (EV kit) is an assembled and tested PCB used to evaluate the MAX6639 dual temperature sensor/fan controller. The MAX6639 monitors its own die temperature and the junction temperature of one external diode-connected transistor, or the junction temperatures of two external diode-connected transistors. It converts the temperature to 8-bit or 11-bit 2-wire serial data that can be accessed over a 2-wire serial bus.

The MAX6639 EV kit includes both external diode-connected transistors (2N3906) soldered to the board, which can be bypassed to connect the board through a twisted pair to remote diodes close to your system.

The temperature data is also used by the internal dual PWM fan-speed controller to adjust the speed of up to two cooling fans. Speed control is accomplished by tachometer feedback from the fan.

The EV kit also includes Windows ® 2000/XP- and Windows Vista ® -compatible software, which provides a simple user interface for exercising the features of the MAX6639. The program is menu-driven and offers a graphical user interface (GUI) complete with control buttons. The EV kit comes with the MAX6639AEE+ installed. Contact the factory for free samples of the pin-compatible MAX6639FAEE+ and MAX6640AEE+.

The MAX6639 EV kit also evaluates the MAX6640. The MAX6640 is not recommended for new designs.

| DESIGNATION            |   QTY | DESCRIPTION                                                        |
|------------------------|-------|--------------------------------------------------------------------|
| C1, C12, C14           |     3 | 10µF ±10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K |
| C2, C3                 |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J  |
| C4                     |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E333K  |
| C5-C10 , C17, C18, C19 |     9 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| C11, C13, C22          |     3 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K     |
| C15, C16               |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J  |

- ♦ Two Thermal-Diode Inputs
- ♦ Local Temperature Sensor
- ♦ Programmable Temperature Alarms
- ♦ Two PWM Outputs for Fan Drive
- ♦ Up to 25kHz PWM Output Frequency
- ♦ Programmable Fan-Control Characteristics
- ♦ 3-Wire and 4-Wire Fan Configurations
- ♦ On-Board Microcontroller to Generate SMBus™/I 2 C Commands
- ♦ USB-PC Connection (Cable Included)
- ♦ Windows 2000/XP- and Windows Vista (32-Bit)-Compatible Software
- ♦ Easy-to-Use, Menu-Driven Software
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6639EVKIT+ | EV Kit |

Windows and Windows Vista are registered trademarks of Microsoft Corp.

SMBus is a trademark of Intel Corp.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C20, C21      |     2 | 2200pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H222K |
| D1, D2, D3    |     3 | Red LEDs (0603)                                                      |
| D4            |     1 | Green LED (0603)                                                     |
| H1            |     0 | Not installed, dual-row (2 x 5) 10-pin JTAG header                   |
| J1, J2        |     2 | 3-pin headers, 0.1in pitch, vertical, friction lock                  |
| J3, J4        |     2 | 4-pin headers, 0.1in pitch, vertical, friction lock                  |
| JU1-JU7       |     7 | 3-pin headers                                                        |
| JU8-JU13      |     0 | Not installed, 2-pin headers-shorted by PCB trace                    |
| L1            |     1 | Ferrite bead (0603) TDK MMZ1608R301A                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX6639 Evaluation Kit

| DESIGNATION             |   QTY | DESCRIPTION                                               |
|-------------------------|-------|-----------------------------------------------------------|
| N1, N2                  |     2 | n-channel MOSFET, 1.4A, 30V (3 SOT23) Fairchild NDS351AN  |
| P1                      |     1 | USB type-B right-angle PC-mount receptacle                |
| Q1, Q2                  |     2 | 2N3906-type pnp transistors (SOT23) Central Semi CMPT3906 |
| R1, R2                  |     2 | 27 Ω ±5% resistors (0603)                                 |
| R3, R19, R20, R21       |     4 | 1.5k Ω ±5% resistors (0603)                               |
| R4                      |     1 | 470 Ω ±5% resistor (0603)                                 |
| R5                      |     1 | 2.2k Ω ±5% resistor (0603)                                |
| R6, R16, R18            |     3 | 10k Ω ±5% resistors (0603)                                |
| R7                      |     1 | 169k Ω ±1% resistor (0603)                                |
| R8                      |     1 | 100k Ω ±1% resistor (0603)                                |
| R9-R13                  |     0 | Not installed, resistors-shorted by PCB trace (0402)      |
| R14                     |     1 | 47 Ω ±5% resistor (0603)                                  |
| R15, R17, R22, R23, R24 |     5 | 4.7k Ω ±5% resistors (0603)                               |
| R25, R26, R27           |     0 | Not installed, resistors (0603)                           |

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| R28           |     1 | 220 Ω ±5% resistor (0603)                                  |
| U1            |     1 | Temp sensor fan controller (16 QSOP) Maxim MAX6639AEE+     |
| U2            |     1 | Microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+           |
| U3            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+                 |
| U4            |     1 | Adjustable output LDO regulator (5 SC70) Maxim MAX8512EXK+ |
| U5            |     1 | UART-to-USB converter (32 TQFP)                            |
| U6            |     1 | 93C46 EEPROM (8 SO)                                        |
| Y1            |     1 | 16MHz crystal (HCM49) Hong Kong X'tals SSM1600000E18FAF    |
| Y2            |     1 | 6MHz crystal (HCM49) Hong Kong X'tals SSL600000E18FAF      |
| -             |     7 | Shunts                                                     |
| -             |     1 | USB high-speed A-to-B cable, 6ft                           |
| -             |     1 | PCB: MAX6639 Evaluation Kit+                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX6639 when contacting these component suppliers.

## MAX6639 EV Kit Files

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX6639.EXE         | Application program                        |
| FTD2XX.INF          | USB driver file                            |
| UNINST.INI          | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Recommended Equipment

- A MAX6639 EV kit (USB cable included)
- A user-supplied Windows 2000/XP- or Windows Vista-compatible PC with a spare USB port
- A power supply to power the fans (the voltage and current depend on the fans used, but the voltage must not exceed 30V)
- One or two 3-pin DC fans with tachometer outputs (each fan must not draw more than 1.4A continuous)

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX6639 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are completed.

## MAX6639 Evaluation Kit

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 6639Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers (JU1-JU7) are in their default positions, as shown in Table 1.
- 4) Connect the fan(s) to J1 and J2 on the EV kit board.
- 5) Connect the fan power supply to the pads labeled VFAN and FAN\_GND.
- 6) Connect the USB cable from the PC to the EV kit board. A New Hardware Found window pops up when installing the USB driver for the first time. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.

Table 1. MAX6639 EV Kit Jumper Description Table (JU1-JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                 |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the MAX6639 to the on-board 3.3V supply                                                                            |
| JU1      | 2-3              | Connects the MAX6639 to the user-supplied 3.0V to 3.6V supply                                                               |
| JU2      | 1-2*             | Connects the MAX6639 to the on-board SCL                                                                                    |
| JU2      | 2-3              | Connects the MAX6639 to the user-supplied SCL                                                                               |
| JU3      | 1-2*             | Connects the MAX6639 to the on-board SDA                                                                                    |
| JU3      | 2-3              | Connects the MAX6639 to the user-supplied SDA                                                                               |
| JU4      | 1-2*             | Connects the MAX6639 to the on-board ALERT                                                                                  |
| JU4      | 2-3              | Connects the MAX6639 to the user-supplied ALERT                                                                             |
| JU5      | 1-2*             | Connects pin ADD of the MAX6639 to VCC. Address = 0x5E. If the MAX6640 is used, always use this jumper in the 1-2 position. |
| JU5      | Open             | Pin ADD of the MAX6639 left unconnected. Address = 0x5C.                                                                    |
| JU5      | 2-3              | Connects pin ADD of the MAX6639 to ground. Address = 0x58. Not allowed on the MAX6640.                                      |
| JU6      | 1-2*             | Connects the pullup resistor for the TACH1 signal to the voltage VFAN, which is used for 3-wire fans                        |
| JU6      | 2-3              | Connects the pullup resistor for the TACH1 signal of the MAX6639 to the voltage VIN, which is used for 4-wire fans          |
| JU7      | 1-2*             | Connects the pullup resistor for the TACH2 signal of the MAX6639 to the voltage VFAN, which is used for 3-wire fans         |
| JU7      | 2-3              | Connects the pullup resistor for the TACH2 signal of the MAX6639 to the voltage VIN, which is used for 4-wire fans          |

*Default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

- 7) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6639 (default installation directory) using the Browse button. During device driver  installation,  Windows may show a warning message indicating that the device driver provided by Maxim does not contain a digital signature. This is  not  an  error  condition  and  it  is  safe  to  proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.
- 8) Turn on fan power supply.
- 9) Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window should appear as shown in Figure 1. Observe as the program automatically detects the address of the MAX6639 and starts the main program.

## Detailed Description of Software

## User Interface

The user interface is easy to operate. Each button corresponds to bits in the command and configuration byte. By pressing them, the correct I 2 C-compatible write operation is generated to update the internal registers of the MAX6639.

## Automatic Read

The program polls the device for the new temperature and status data a maximum of two times per second (2Hz). To disable the polling of data, uncheck the Auto Read checkbox located at the top of the program.

## Data Logging

Check the Data Logging checkbox located at the top of the program to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If the Auto Read checkbox is checked, data is sampled at 2Hz. When the Auto Read checkbox is unchecked, the

Figure 1. MAX6639 EV Kit Software Main Window (Temperature Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

data is logged each time Read All is  selected from the Options menu bar. To stop data logging, uncheck the Data Logging checkbox.

## Temperature

The MAX6639 monitors its own die temperature and the junction temperature of one external diode-connected transistor,  or  the  junction  temperature  of  two  external diode-connected transistors. The temperature measurements are capable of either 8-bit or 11-bit (extended) resolution; 8-bit resolution results in a temperature resolution of 1°C/LSB. Extended resolution results in a temperature resolution of 0.125°C/LSB and is enabled by checking the Enable Extended Resolution (0x05) checkbox (Figure 1).

Read the temperatures by pressing the Read buttons within the Temperature tab sheet (Figure 1). The temperature is shown to the right of the buttons.

## External Diodes

The MAX6639AEE remote temperature sensor is optimized for use with a diode-connected transistor whose

## MAX6639 Evaluation Kit

ideality factor is equal to 1.008. Transistors with different ideality factors produce different remote temperature readings. Some typical discrete transistors may produce readings that vary approximately 3°C from the correct value. Refer to Application Note 1057: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for additional information.

## ALERT , THERM , and OT Temperature Limits

The MAX6639 has ALERT , THERM ,  and  overtemperature  ( OT )  limit  registers.  Temperatures  exceeding the ALERT limit register generate an alert interrupt.

Exceeding the THERM or OT limits sets the THERM or overtemperature bit in the status register and asserts the THERM or OT output pin.

Read a limit by pressing the Read button (Figure 1). The value (in Celsius) is shown to the right of the button. Change a limit by entering the value (in Celsius) into the appropriate edit field and pressing the Write button.

<!-- image -->

Figure 2. MAX6639 EV Kit Software Main Window (Global Configuration Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

## Table 2. Global Configuration Register Checkboxes

|   BIT | NAME                             | STATE      | DESCRIPTION                                                                                                                                                               |
|-------|----------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | STOP                             | Checked    | Places the MAX6639 in software standby mode                                                                                                                               |
|     7 | STOP                             | Unchecked* | Places the MAX6639 in operational mode                                                                                                                                    |
|     6 | POR                              | Checked    | Resets all registers to their default values, including the global configuration register. After selecting the POR checkbox, the checkbox returns to the unchecked state. |
|     6 | POR                              | Unchecked* | Normal operation                                                                                                                                                          |
|     5 | SMB Timeout Enabled              | Checked*   | Enables the SMBus timeout                                                                                                                                                 |
|     5 | SMB Timeout Enabled              | Unchecked  | Disables the SMBus timeout, as well as the alert response, thus providing true I 2 C compatibility                                                                        |
|     4 | Channel 2 Source = Local         | Checked*   | The local sensor on the MAX6639 is the source for channel 2                                                                                                               |
|     4 | Channel 2 Source = Local         | Unchecked  | The remote sensor connected to DXP2 and DXN is the source for channel 2                                                                                                   |
|     3 | High-Freq Enabled (MAX6639 only) | Checked    | Enables high-frequency PWM output on the MAX6639                                                                                                                          |
|     3 | High-Freq Enabled (MAX6639 only) | Unchecked* | Enables low-frequency PWM output                                                                                                                                          |
|     2 | Reserved                         | N/A        | Not used                                                                                                                                                                  |
|     1 | Reserved                         | N/A        | Not used                                                                                                                                                                  |
|     0 | Reserved                         | N/A        | Not used                                                                                                                                                                  |

## Fan-Start Temperature

The minimum fan-start temperature register contains the temperature at which fan control begins. Note: This applies only to automatic RPM mode. Refer to the MAX6639 IC data sheet for more information on automatic RPM mode operation.

Read the minimum fan-start temperature by pressing the Read button (Figure 1). The value (in Celsius) is shown to the right of the button. Change the minimum fan-start temperature by entering the values (in Celsius) into the edit boxes and pressing the Write buttons.

## Global Configuration

The global configuration register has several functions. Figure 2 displays the checkboxes that configure the register.  Each checkbox corresponds to a bit in the register. Table 2 describes the function of each checkbox. Read the global configuration register by pressing the Read button. Change the global configuration register  by  checking  or  unchecking the desired function checkbox and pressing the Write button.

## Mask

The mask register enables or disables the ALERT , OT , THERM ,  or FANFAIL outputs. Figure 3 displays the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Table 3 describes the function of each checkbox. Read the mask register by pressing the Read button. Change the mask by selecting or deselecting the desired masks and pressing the Write button.

## Status

The Status (0x02) group box displays the critical and fault conditions that occur. Each line corresponds to a bit  in  the  registers.  See  Table  4  for  a  list  of  the  status conditions.

Read the status by pressing the Read Status button within the Status (0x02 ) group box.

## Fan 1 and Fan 2 Configuration 1

The  fan  1 Configuration  1  (0x10) and  fan  2 Configuration 1 (0x14) group boxes control the modes of operation of the fans (Figure 4). The Configuration 1 (0x14) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 4. These group boxes contain four items: Mode , Rate of Change , Control , and RPM Range .

The Mode drop-down list has two options: PWM mode or RPM mode .  Select PWM mode to control the PWM duty cycle manually. RPM mode allows for either manual or automatic control of the fan's RPM.

The Rate of Change drop-down list sets the time between adjustments of the duty cycle. Each adjustment is 1/120 of the PWM period. By adjusting the Rate

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6639 Evaluation Kit

Figure 3. MAX6639 EV Kit Software Main Window (Mask Tab)

<!-- image -->

of Change drop-down list, audibility of fan-speed changes can be traded for response time. There are eight possible options: 0s , 0.0625s , 0.125s , 0.25s , 0.5s , 1s , 2s , or 4s .

The Control drop-down list sets the temperature channels that control the fan in RPM mode. There are four options under the control drop-down list: None , Channel1 , Channel2 ,  or Both .  Selecting None allows for manual control of the fan's RPM. Selecting Channel1 , Channel2 ,  or Both ,  allows  the  fan's  RPM to be controlled by the temperature of the selected channel(s).

The RPM Range drop-down list scales the tachometer counter by setting the maximum (full-scale) value of the RPM range. There are four possible selections: 2000 RPM , 4000 RPM , 8000 RPM ,  or 16000 RPM .  Select the closest value that is greater than the fan's full-speed RPM.

Read the configuration 1 register by pressing the Read button. Change the configuration by selecting the desired options and pressing the Write button.

## Fan 1 and Fan 2 Configuration 2A

The  fan  1 Configuration  2A  (0x11) and  fan  2 Configuration 2A (0x15) group boxes apply to the automatic RPM mode (Figure 4). The Configuration 2A (0x15) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 4. These group boxes contain four items: RPM step-size A , Temp step-size , Positive PWM Polarity ,  and Min. speed .

The RPM step-size A drop-down list selects the number of tachometer counts that the target value decreases for each temperature-step increase above the fan-start temperature. The value can be set between 1 and 16.

The Temp step-size drop-down list selects the temperature adjustment for fan control. For each temperaturestep increase, the target tachometer count decreases by the value of RPM step-size A. The temperature stepsize value can be set to 1 C , 2 C , 4 C , or 8 C .

The Positive PWM Polarity checkbox sets the PWM output polarity. Checking the Positive PWM Polarity

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

Table 3. Mask Register Checkboxes

|   BIT | NAME                 | STATE      | DESCRIPTION                                             |
|-------|----------------------|------------|---------------------------------------------------------|
|     7 | Channel 1 ALERT Mask | Checked    | Disables the channel 1 ALERT interrupts                 |
|     7 | Channel 1 ALERT Mask | Unchecked* | Enables the channel 1 ALERT interrupts                  |
|     6 | Channel 2 ALERT Mask | Checked    | Disables the channel 2 ALERT interrupts                 |
|     6 | Channel 2 ALERT Mask | Unchecked* | Enables the channel 2 ALERT interrupts                  |
|     5 | Channel 1 OT Mask    | Checked    | Prevents OT from being asserted by channel 1 fault      |
|     5 | Channel 1 OT Mask    | Unchecked* | Allows OT to be asserted by channel 1 fault             |
|     4 | Channel 2 OT Mask    | Checked    | Prevents OT from being asserted by channel 2 fault      |
|     4 | Channel 2 OT Mask    | Unchecked* | Allows OT to be asserted by channel 2 fault             |
|     3 | Channel 1 THERM Mask | Checked    | Prevents THERM from being asserted by channel 1 fault   |
|     3 | Channel 1 THERM Mask | Unchecked* | Allows THERM to be asserted by channel 1 fault          |
|     2 | Channel 2 THERM Mask | Checked    | Prevents THERM from being asserted by channel 2 fault   |
|     2 | Channel 2 THERM Mask | Unchecked* | Allows THERM to be asserted by channel 2 fault          |
|     1 | FAN 1 Fault Mask     | Checked*   | Prevents FANFAIL from being asserted by channel 1 fault |
|     1 | FAN 1 Fault Mask     | Unchecked  | Allows FANFAIL to be asserted by channel 1 fault        |
|     0 | FAN 2 Fault Mask     | Checked*   | Prevents FANFAIL from being asserted by channel 2 fault |
|     0 | FAN 2 Fault Mask     | Unchecked  | Allows FANFAIL to be asserted by channel 2 fault        |

checkbox results in the PWM output being high at 100% duty cycle. Unchecking the Positive PWM Polarity checkbox results in the PWM output being low at 100% duty cycle.

The Min. speed drop-down list selects the value of the minimum fan speed (when the temperature is below the fan-start temperature in the automatic RPM mode). There are two possible selections: 0% duty cycle or Set by Start TACH . Selecting 0% duty cycle results in the fan being off when the temperature is below the fan-start temperature value. Selecting Set by Start TACH (0x22) or Set by Start TACH (0x23) results  in the fan operating at the minimum speed set for fan 1 or fan 2.

Read the configuration 2A register by pressing the Read button. Change the configuration by selecting the desired options and pressing the Write button.

## Fan 1 and Fan 2 Configuration 2B

The  fan  1 Configuration  2B  (0x12) and  fan  2 Configuration 2B (0x16) group boxes also apply to the automatic RPM mode (Figure 4). The Configuration 2B (0x16) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 4. These group boxes set the tachometer step sizes and number of steps for step-size A to step-size B slope changes.

The RPM step-size B drop-down list selects the number of tachometer counts that the target value decreases for each temperature-step increase above the fan-start temperature. The value can be set between 1 and 16.

The Number of steps drop-down list sets the number of  temperature/tachometer steps above the fan-start temperature at which step-size B begins. The number of steps can be set between 1 and 16. Read the configuration 2B register by pressing the Read button. Change the configuration by selecting the desired options and pressing the Write button.

## Fan 1 and Fan 2 Configuration 3

The  fan  1 Configuration  3  (0x13) and  fan  2 Configuration 3 (0x17) group boxes control fan spinup, THERM to  fan  full  speed,  pulse  stretching,  and PWM output frequency (Figure 4). The Configuration 3 (0x17) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 4.

The fan spin-up feature ensures that the fan starts. Whenever the fan starts up from zero drive, it is driven with 100% duty cycle for 2s to ensure that it starts. Fan spin-up is enabled by default. To disable this feature, check the Fan Spin Up Disable checkbox.

When the THERM to Fan Full Speed checkbox is checked, THERM going low-either by being pulled low

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

Figure 4. MAX6639 EV Kit Software Main Window (Fan Controls | Fan 1 | Configuration Tab)

<!-- image -->

## Table 4. Status Register

|   BIT | NAME            | DESCRIPTION                                                                                                                                                                                          |
|-------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | Channel 1 ALERT | The temperature of channel 1 is above the value set in the channel 1 ALERT limit register.                                                                                                           |
|     6 | Channel 2 ALERT | The temperature of channel 2 is above the value set in the channel 2 ALERT limit register.                                                                                                           |
|     5 | Channel 1 OT    | The temperature of channel 1 has exceeded the value set in the channel 1 OT limit register. This bit returns to zero when the temperature of channel 1 drops 5°C below the channel 1 OT limit.       |
|     4 | Channel 2 OT    | The temperature of channel 2 has exceeded the value set in the channel 2 OT limit register. This bit returns to zero when the temperature of channel 2 drops 5°C below the channel 2 OT limit.       |
|     3 | Channel 1 THERM | The temperature of channel 1 has exceeded the value set in the channel 1 THERM limit register. This bit returns to zero when the temperature of channel 1 drops 5°C below the channel 1 THERM limit. |
|     2 | Channel 2 THERM | The temperature of channel 2 has exceeded the value set in the channel 2 THERM limit register. This bit returns to zero when the temperature of channel 2 drops 5°C below the channel 2 THERM limit. |
|     1 | Fan 1 Fault     | A fault has been detected on fan 1. Refer to the MAX6639 IC data sheet for a detailed description.                                                                                                   |
|     0 | Fan 2 Fault     | A fault has been detected on fan 2. Refer to the MAX6639 IC data sheet for a detailed description.                                                                                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

externally or by the temperature exceeding the THERM limit-forces the fan to full speed at the rate determined by the rate-of-change setting in configuration 1.

Pulse stretching is used with a pulse-modulated power supply powering the fan. When modulating the fan's power supply with the PWM signal, the PWM pulses are periodically stretched to keep the tachometer's signal available for one full revolution. Check the Pulse Stretching Disable checkbox to disable this feature. Always disable pulse stretching when using 4-wire fans.

The PWM Frequency drop-down list sets the frequency that drives the pulse-modulated power supply. The frequency can be set to 20Hz , 33.33Hz , 50Hz ,  or 100Hz .  If  the High Freq. Enabled (MAX6639 only) checkbox is checked within the Global Configuration tab sheet, then the frequency can be set to 5kHz , 8.33kHz , 12.5kHz , or 25kHz .

Read the configuration 3 register by pressing the Read button. Change the configuration by selecting the desired options and pressing the Write button.

## Fan 1 and Fan 2 Tachometer Count

The fan 1 Tachometer Count (0x20) and fan 2 Tachometer Count (0x21) group boxes control the different  tachometer counts (Figure 5). The Tachometer Count (0x21) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 5. The tachometer count value is inversely proportional to the fans' speed.

Read the tachometer count by pressing the Read button.

## Fan 1 and Fan 2 Start or Target Tachometer Count

The fan 1 Start or Target Tachometer Count (0x22) and fan 2 Start or Target Tachometer Count (0x23) group boxes set either the starting tachometer count for the fan when operating in automatic RPM mode, or the target tachometer count when operating in manual RPM mode (Figure 5). The Start or Target Tachometer Count (0x23) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 5. Read the count by pressing the Read button.

Figure 5. MAX6639 EV Kit Software Main Window (Fan Controls | Fan 1 | Tachometer Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Change the count by entering the value into the Tachometer count edit  box  and pressing the Write button.

## Fan 1 and Fan 2 Pulses per Revolution and Min Tach Count

The fan 1 Pulses per Revolution and Min Tach Count (0x24) and fan 2 Pulses per Revolution and Min Tach Count (0x25) group boxes set the number of tachometer  pulses  per  revolution  of  the  fan  and  the  minimum allowable tachometer count (maximum speed) for the fan (Figure 5). The Pulses per Revolution and Min Tach Count (0x25) group box is not shown, but can be accessed by navigating to the Fan 2 tab sheet from Figure 5.

The Tach. Pulses per Rev. drop-down list setting has four options: 1 , 2 , 3 , or 4 .

The Min tachometer count edit box can be set to any value between 0 and 63. Read the pulses per revolution  and  minimum tachometer count by pressing the Read button. Change the pulses per revolution by selecting the desired number from the drop-down list.

## MAX6639 Evaluation Kit

Change the minimum tachometer count by entering the value into the edit box. Press the Write button to apply the changes.

## Fan 1 and Fan 2 Duty Cycle

The Duty Cycle tab sheet (Figure 6) contains the PWM duty cycle value. When operating in RPM mode, this value is controlled by the MAX6639. In PWM mode, this is the desired (target) PWM duty-cycle value. The value can be set between 0 and 120. Any number above 120 is changed to 120.

Read the duty-cycle value by pressing the Read button.  Change the duty cycle by entering the value into the edit box and pressing the Write button.

## Alert

The message ALERT appears in the alert box when an interrupt condition occurs, unless the configuration register is set to mask the alert. The cause of the interrupt is  shown in the Status (0x02) group box. To clear the interrupt, first eliminate the condition that caused it and then press the Read Alert button.

<!-- image -->

Figure 6. MAX6639 EV Kit Software Main Window (Fan Controls | Fan 1 | Duty Cycle Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

## Save Settings

The MAX6639 EV kit software allows the user to save desired GUI settings by selecting File | Save Settings from the menu bar. GUI setting files can be saved only as .INI files.

## Load Settings

To restore a saved GUI setting, select File |  Load Settings from the menu bar. Next, select the .INI file with the desired GUI settings and observe as the GUI reconfigures appropriately.

## Advanced User Interface

There are two methods for communicating with the MAX6639, through the normal user-interface main window or through the SMBus/I 2 C commands available by selecting Options | Interface (Advanced Users) from the menu bar. An Advanced User Interface window pops up with the 2-wire interface tab selected, which allows the SMBus/I 2 C-compatible protocols, such as read byte and write byte, to be executed. The only SMBus/I 2 C-compatible protocols used by the MAX6639 are:

## 1 - SMBusWriteByte(addr,cmd,data8)

- 4 - SMBusReadByte(addr,cmd) -&gt; data8

The combo and edit boxes accept numeric data in hexadecimal and should be prefixed by 0x. See Figure 7 for an example of this tool.

In  this  example,  the  software  is  reading  from Device Address 0101111 r/w (binary),  and  register  address 0x00.

Figure 7. Simple SMBusReadByte Operation Using the Advanced User Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description of Hardware

The MAX6639 EV kit is an assembled and tested PCB used to evaluate the MAX6639 dual-temperature sensor/fan controller.  The  MAX6639 monitors its own die temperature and the junction temperature of one external diode-connected transistor, or the junction temperatures of two external diode-connected transistors. It converts the temperature to 8-bit or 11-bit 2-wire serial data that can be accessed over a 2-wire serial bus.

## Slave Address

The slave address can be changed by moving jumper JU5. See Table 1 for address selection.

3-Wire and 4-Wire Fan Configurations

The MAX6639 EV kit is configured for a 3-wire fan by default when the shunts are placed in the 1-2 position of jumpers JU6 and JU7.

For 4-wire fan configuration, the user must move the shunts to the 2-3 position of jumpers JU6 and JU7.

<!-- image -->

## MAX6639 Evaluation Kit

## Replacing Diodes

Jumpers JU11 and JU12 connect the 2N3906 transistor as the external diodes. To use different diodes, cut the trace, short the two pins of JU11 and JU12, and connect the diodes (through twisted-pair wire) to the DXP1, DXN, and DXP2 pads.

## User-Supplied I 2 C Interface

To use the MAX6639 with a user-supplied I 2 C interface, first  move JU2, JU3, and JU4 to the 2-3 position. Then, connect SCL, SDA, and ALERT to the corresponding pads on the MAX6639 EV kit.

## User-Supplied Power Supply

The MAX6639 EV kit is powered completely from the USB port by default. Move the shunt of JU1 to the 2-3 position and apply a user-supplied 3.0V to 3.6V power supply at the EXT\_VIN and GND pads.

The fan supply is provided by the user and varies depending on different fans.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

Figure 8a. MAX6639 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

<!-- image -->

Figure 8b. MAX6639 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

Figure 9. MAX6639 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6639 Evaluation Kit

Figure 10. MAX6639 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6639 Evaluation Kit

Figure 11. MAX6639 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

18

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600