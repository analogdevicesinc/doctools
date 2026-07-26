<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6640 Evaluation System/Evaluation Kit

## General Description

The MAX6640 evaluation kit (EV kit) is an assembled and tested PC board with a mounted MAX6640. The EV kit allows full evaluation of the MAX6640 dual temperature sensor/fan controller. The MAX6640 monitors its own die temperature and the junction temperature of one external diode-connected transistor or the junction temperatures of  two external diode-connected transistors. It converts the temperature to 8-bit or 11-bit 2-wire serial data that can be accessed over a 2-wire serial bus.

The MAX6640 EV kit includes both external diode-connected transistors (2N3906) soldered to the board, which can be removed. The board can then be connected through a twisted pair to remote diodes close to your system.

The temperature data is also used by the internal dual PWM fan-speed controller to adjust the speed of up to two cooling fans. Speed control is accomplished by tachometer feedback from the fan.

The MAX6640 evaluation system consists of a Maxim Command Module (CMOD232) and a MAX6640 EV kit. The CMOD232 board connects to a computer's RS-232 serial  port  to  provide  a  computer-controlled  SMBus™/ I 2 C bus. Windows® 95/98/2000/XP-compatible software provides a user-friendly interface to exercise the features of the MAX6640. The program is menu driven and offers a graphic interface with control buttons and status display.

The MAX6640EVKIT can also evaluate the MAX6639. Order a free sample of the MAX6639AEE through Maxim's website. Order the MAX6640EVCMOD2 for a complete PC-based evaluation of the MAX6640. Order the MAX6640EVKIT if you already have a CMOD232 SMBus interface.

## MAX6640EVCMOD2 (MAX6640 EV System)

## Component List

| PART         |   QTY | DESCRIPTION                              |
|--------------|-------|------------------------------------------|
| MAX6640EVKIT |     1 | MAX6640 evaluation kit                   |
| CMOD232      |     1 | SMBus/I 2 C interface board              |
| AC adapter   |     1 | 9VDC at 200mA (powers the CMOD232 board) |

SMBus is a trademark of Intel Corp.

- ♦ Two Thermal-Diode Inputs
- ♦ Local Temperature Sensor
- ♦ Programmable Temperature Alarms
- ♦ Two PWM Outputs for Fan Drive
- ♦ Programmable Fan-Control Characteristics
- ♦ SMBus/I 2 C Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Includes Windows 95/98/2000/XP-Compatible Software and Demo PC Board

## Ordering Information

| PART           | TEMP RANGE   | SMBus INTERFACE TYPE   |
|----------------|--------------|------------------------|
| MAX6640EVKIT   | 0°C to +70°C | Not included           |
| MAX6640EVCMOD2 | 0°C to +70°C | CMOD232                |

Note: The MAX6640 EV kit software is provided with the MAX6640EVKIT. However, the CMOD232 board is required to interface the EV kit to the computer when using the software.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                 |
|--------------------|-------|---------------------------------------------------------------------------------------------|
| C1                 |     1 | 0.1µF ± 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01 TDK C1608X7R1C104K   |
| C2, C3             |     2 | 2200pF ± 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H222K TDK C1608X7R1H222K    |
| J1, J2             |     2 | 3-pin headers, 0.1in pitch, vertical, friction lock                                         |
| J3                 |     1 | 2 x 10 right-angle female receptacle Methode Electronics RS2R-20-G SamTec SSW-110-02-S-D-RA |
| JU1                |     0 | Not installed                                                                               |
| JU2, JU3, JU4, JU5 |     0 | Not installed                                                                               |
| N1, N2             |     2 | n-channel MOSFET, 1.4A, 30V, SOT23 Fairchild NDS351AN                                       |
| Q1, Q2             |     2 | 2N3906-type pnp transistor, SOT23 Central Semiconductor CMPT3906 Diodes, Inc. MMBT3906      |
| R1                 |     1 | 47 Ω ±5% resistor (0603)                                                                    |
| R2, R4             |     2 | 4.7k Ω ± 5% resistors (0603)                                                                |
| R3, R5-R11         |     8 | 10k Ω ± 5% resistors (0603)                                                                 |
| U1                 |     1 | MAX6640AEE (16-pin QSOP)                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Features

## MAX6640 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes, Inc.            | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild Semiconductor | 888-522-5372 | -            | www.fairchildsemi.com |
| Murata                  | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate you are using the MAX6640 when contacting these manufacturers.

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed. Do not turn on the power until all connections are made:

- Computer running Windows 95, 98, 2000, or XP.
- RS-232 serial port (this is a 9-pin socket on the back of the computer).
- Standard 9-pin, straight-through, male-to-female cable to connect the computer's serial port to the Maxim CMOD232 board.
- 3.3V (recommended) or 5V, 100mA, DC power supply.
- Power supply to power the fans. The voltage and current depend on the fans used, but the voltage must not exceed 30V.
- Two DC fans with tachometer outputs. Each fan must not draw more than 1.4A continuous.

## Connections and Setup

Carefully connect the boards by aligning the 20-pin connector of the MAX6640 EV kit with the 20-pin header of the CMOD232 board. Gently press them together.

- 1) Disable the pullup resistors on the CMOD232 board by moving switch SW1 to the OFF position.
- 2) Connect a cable from the computer's serial port to the CMOD232 board. Use a straight-through, 9-pin, male-to-female cable.
- 3) Install  the  software  by  running  the  INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/ 2000/XP Start menu. (To remove the software at any time, click on the UNINSTALL icon.)
- 4) Connect the 9V adapter to the CMOD232 board.
- 5) Connect the +3.3V supply to the pads labeled VIN and GND on the MAX6640 EV kit.
- 6) Connect the fan power supply to the pads labeled VFAN and FAN\_GND. The voltage must not exceed 30V.
- 7) Turn on the power supplies.

2

- 8) Start the MAX6640 program by opening its icon in the Start menu.
- 9) Wait until the program automatically detects the address of the MAX6640 and displays the userinterface panel (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in the MAX6640 registers. Clicking on them generates the correct SMBus command and updates the registers. Note: Words in boldface are user-selectable features in the software.

## Temperature

The MAX6640 monitors its own die temperature and the junction temperature of one external diode-connected transistor or the junction temperatures of two external diode-connected transistors. The temperature measurements are capable of either 8-bit or 11-bit (extended) resolution; 8-bit resolution results in a temperature resolution of 1°C/LSB. Extended resolution results in a temperature resolution of 0.125°C/LSB. Enable extended resolution by selecting the Extended Resolution checkbox (Figure 1).

Read the temperatures by clicking on the Read Temp buttons (Figure 1). The temperature is shown to the right of the buttons.

## External Diodes

The MAX6640 remote temperature sensor is optimized for use with a diode-connected transistor whose ideality factor is equal to 1.008. Transistors with different ideality factors produce different remote temperature readings. Some typical discrete transistors may produce readings that vary up to 3°C from the correct value. Refer to the Maxim website (maxim-ic.com) Application Note: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for  additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6640 Evaluation System/Evaluation Kit

Table 1. Global Configuration Register Checkboxes

|   BIT | NAME                             | STATE      | DESCRIPTION                                                                                                                                                              |
|-------|----------------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | STOP                             | Checked    | Places the MAX6640 in software standby mode.                                                                                                                             |
|     7 | STOP                             | Unchecked* | Places the MAX6640 in operational mode.                                                                                                                                  |
|     6 | POR                              | Checked    | Resets all registers to their default values including the global configuration register. After selecting the POR checkbox, the checkbox returns to the unchecked state. |
|     6 | POR                              | Unchecked* | Normal operation.                                                                                                                                                        |
|     5 | SMB Timeout Enabled              | Checked*   | Enables the SMBus timeout.                                                                                                                                               |
|     5 | SMB Timeout Enabled              | Unchecked  | Disables the SMBus timeout, as well as alert response, thus providing true I 2 C compatibility.                                                                          |
|     4 | Channel 2 Source = Local         | Checked*   | The local sensor on the MAX6640 is the source for channel 2.                                                                                                             |
|     4 | Channel 2 Source = Local         | Unchecked  | The remote sensor connected to DXP2 is the source for channel 2.                                                                                                         |
|     3 | High-Freq Enabled (MAX6639 only) | Checked    | Enables high-frequency PWM output on the MAX6639.                                                                                                                        |
|     3 | High-Freq Enabled (MAX6639 only) | Unchecked  | Enables low-frequency PWM output.                                                                                                                                        |
|     2 | Reserved                         | NA         | Not used.                                                                                                                                                                |
|     1 | Reserved                         | NA         | Not used.                                                                                                                                                                |
|     0 | Reserved                         | NA         | Not used.                                                                                                                                                                |

* POR state.

## ALERT, THERM, and OT Temperature Limits

The MAX6640 has ALERT, THERM, and over-temperature  (OT)  limit  registers.  Temperatures  exceeding the ALERT limit register generate an alert interrupt. Exceeding the THERM or OT limits sets the THERM or over-temperature bit in the status register and asserts the THERM or OT output pin.

Read the limits by clicking on the Read buttons (Figure 1). The value (in Celsius) is shown to the right of the button. Change the limits by entering the value (in Celsius) into the appropriate edit field and clicking on the Write button.

## Fan-Start Temperature

The fan-start temperature register contains the temperature at which fan control begins. Note: This applies only to automatic RPM mode. Refer to the MAX6640 data sheet for more information on automatic RPM mode operation.

Read the fan-start temperature by clicking on the Read button (Figure 1). The value (in Celsius) is shown to the right of the button. Change the fan-start temperature by entering the value (in Celsius) into the edit field and clicking on the Write button.

<!-- image -->

## Global Configuration

The global configuration register has several functions. Figure 2 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Table 1 describes the function of each checkbox.

Read the global configuration by clicking on the Read button. Change the global configuration by selecting or deselecting the desired functions and clicking on the Write button.

## Mask

The mask register enables or disables the ALERT , OT , THERM ,  or FANFAIL outputs. Figure 3 shows the checkboxes that configure the register. Each checkbox corresponds to a bit in the register. Table 2 describes the function of each checkbox.

Read the mask register by clicking on the Read button. Change the mask by selecting or deselecting the desired masks and clicking on the Write button.

## Status

The Status box displays the critical and fault conditions that occur. Each line corresponds to a bit in the registers. See Table 3 for a list of the status conditions.

Read the status by clicking on the Read Status button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

## Table 2. Mask Register Checkboxes

|   BIT | NAME                 | STATE      | DESCRIPTION                                              |
|-------|----------------------|------------|----------------------------------------------------------|
|     7 | Channel 1 ALERT Mask | Checked    | Disables the channel 1 ALERT interrupts.                 |
|     7 | Channel 1 ALERT Mask | Unchecked* | Enables the channel 1 ALERT interrupts.                  |
|     6 | Channel 2 ALERT Mask | Checked    | Disables the channel 2 ALERT interrupts.                 |
|     6 | Channel 2 ALERT Mask | Unchecked* | Enables the channel 2 ALERT interrupts.                  |
|     5 | Channel 1 OT Mask    | Checked    | Prevents OT from being asserted by a channel 1 fault.    |
|     5 | Channel 1 OT Mask    | Unchecked* | Allows OT to be asserted by a channel 1 fault.           |
|     4 | Channel 2 OT Mask    | Checked    | Prevents OT from being asserted by a channel 2 fault.    |
|     4 | Channel 2 OT Mask    | Unchecked* | Allows OT to be asserted by a channel 2 fault.           |
|     3 | Channel 1 THERM Mask | Checked    | Prevents THERM from being asserted by a channel 1 fault. |
|     3 | Channel 1 THERM Mask | Unchecked* | Allows THERM to be asserted by a channel 1 fault.        |
|     2 | Channel 2 THERM Mask | Checked    | Prevents THERM from being asserted by a channel 2 fault. |
|     2 | Channel 2 THERM Mask | Unchecked* | Allows THERM to be asserted by a channel 2 fault.        |
|     1 | FAN 1 Fault Mask     | Checked*   | Prevents FANFAIL from being asserted by a fan 1 fault.   |
|     1 | FAN 1 Fault Mask     | Unchecked  | Allows FANFAIL to be asserted by a fan 1 fault.          |
|     0 | FAN 2 Fault Mask     | Checked*   | Prevents FANFAIL from being asserted by a fan 2 fault.   |
|     0 | FAN 2 Fault Mask     | Unchecked  | Allows FANFAIL to be asserted by a fan 2 fault.          |

* POR state.

## Table 3. Status Register

|   BIT | NAME            | DESCRIPTION                                                                                                                                                                                          |
|-------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | Channel 1 ALERT | The temperature of channel 1 is above the value set in the channel 1 ALERT limit register.                                                                                                           |
|     6 | Channel 2 ALERT | The temperature of channel 2 is above the value set in the channel 2 ALERT limit register.                                                                                                           |
|     5 | Channel 1 OT    | The temperature of channel 1 has exceeded the value set in the channel 1 OT limit register. This bit returns to zero when the temperature of channel 1 drops 5°C below the channel 1 OT limit.       |
|     4 | Channel 2 OT    | The temperature of channel 2 has exceeded the value set in the channel 2 OT limit register. This bit returns to zero when the temperature of channel 2 drops 5°C below the channel 2 OT limit.       |
|     3 | Channel 1 THERM | The temperature of channel 1 has exceeded the value set in the channel 1 THERM limit register. This bit returns to zero when the temperature of channel 1 drops 5°C below the channel 1 THERM limit. |
|     2 | Channel 2 THERM | The temperature of channel 2 has exceeded the value set in the channel 2 THERM limit register. This bit returns to zero when the temperature of channel 2 drops 5°C below the channel 2 THERM limit. |
|     1 | Fan 1 Fault     | A fault has been detected on fan 1. Refer to the MAX6640 data sheet for a detailed description.                                                                                                      |
|     0 | Fan 2 Fault     | A fault has been detected on fan 2. Refer to the MAX6640 data sheet for a detailed description.                                                                                                      |

## Fan 1 and Fan 2 Configuration 1

The configuration 1 box (Figure 4) controls the modes of  operation  of  the  fans.  This  box  contains  four  items: mode, rate of change, control, and RPM range.

Mode has two options: PWM mode and RPM mode . Select PWM mode to control the PWM duty cycle manually. RPM mode allows for either manual or automatic control of the fan's RPM.

Rate of change sets the time between increments of the duty cycle. Each increment is 1/120 of the PWM period. By adjusting the rate of change, audibility of fan-speed changes can be traded for response time. There are eight possible options: 0s , 0.0625s , 0.125s , 0.25s , 0.5s , 1s , 2s , and 4s .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

Control sets the temperature channels that control the fan in RPM mode. There are four options under the control  setting: None , Channel1 , Channel2 ,  and Both . Selecting None allows for manual control of the fan's RPM. Selecting Channel1 , Channel2 ,  or Both ,  allows the fan's RPM to be controlled by the temperature of the selected channel(s).

RPM range scales the tachometer counter by setting the maximum (full-scale) value of the RPM range. There are four possible selections: 2000 , 4000 , 8000 ,  and 16000 . Select the closest value that is greater than the fan's full-speed RPM.

Read the configuration 1 register by clicking on the Read button. Change the configuration by selecting the desired options and clicking on the Write button.

## Fan 1 and Fan 2 Configuration 2A

The configuration 2A box (Figure 4) applies to the automatic RPM mode. This box contains four items: RPM step-size A, temp step-size, positive PWM polarity, and min speed. RPM step-size A selects the number of tachometer counts the target value decreases for each temperature-step increase above the fan-start temperature. The value can be set between 1 and 16.

Temperature step-size selects the temperature increment for fan control. For each temperature-step increase, the target tachometer count decreases by the value of RPM step-size A. The temperature step-size value can be set to 1C , 2C , 4C , and 8C .

Positive PWM polarity sets the PWM output polarity. Selecting Positive PWM polarity results  in  the  PWM output being high at 100% duty cycle. Unselecting Positive PWM polarity results in the PWM output being low at 100% duty cycle.

Minimum speed selects the value of the minimum fan speed (when the temperature is below the fan-start temperature in the automatic RPM mode). There are two possible selections: 0% duty cycle and Set by Start TACH . Selecting 0% duty cycle results in the fan being off when the temperature is below the fan-start temperature value. Selecting Set by Start TACH results in the fan operating at the speed set in registers 0x22 or 0x23 (the start or target tachometer count boxes).

Read the configuration 2A register by clicking on the Read button. Change the configuration by selecting the desired options and clicking on the Write button.

<!-- image -->

## Fan 1 and Fan 2 Configuration 2B

The configuration 2B box (Figure 4) also applies to the automatic RPM mode. This box sets the tachometer step sizes and number of steps for step-size A to stepsize B slope changes.

RPM step-size B selects the number of tachometer counts the target value decreases for each temperature-step increase above the fan-start temperature. The value can be set between 1 and 16.

Number of steps sets the number of temperature/ tachometer steps above the fan-start temperature at which step-size B begins. Number of steps can be set between 1 and 16. Read the configuration 2B register by clicking on the Read button. Change the configuration  by  selecting  the  desired  options  and  clicking  on the Write button.

## Fan 1 and Fan 2 Configuration 3

The configuration 3 box (Figure 4) controls fan spin-up, THERM to fan full speed, pulse stretching, and PWM output frequency.

The fan spin-up feature ensures that the fan starts. Whenever the fan starts up from zero drive, it is driven with 100% duty cycle for 2s to ensure that it starts. Fan spin-up is enabled by default. To disable the feature, select Fan Spin Up Disable .

When THERM to Fan Full Speed is  selected, THERM going low (either by being pulled low externally or by the temperature exceeding the THERM limit) forces the fan to full speed. The fan is forced to full speed at the rate determined by the rate of change setting in configuration 1.

Pulse stretching is used with a pulse-modulated power supply powering the fan. When modulating the fan's power supply with the PWM signal, the PWM pulses are periodically stretched to keep the tachometer's signal available  for  one  full  revolution.  Select Pulse Stretching Disable to disable this feature.

PWM frequency sets the frequency that drives the pulse-modulated power supply. The frequency can be set to 20Hz , 33.33Hz , 50Hz , or 100Hz .

Read the configuration 3 register by clicking on the Read button. Change the configuration by selecting the desired options and clicking on the Write button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

## Fan 1 and Fan 2 Tachometer Count

The tachometer count box is shown in Figure 5. The tachometer count value is inversely proportional to the fans' speed.

Read the tachometer count by clicking on the Read button.

## Fan 1 and Fan 2 Start or Target Tachometer Count

The start or target tachometer count (Figure 5) sets either the starting tachometer count for the fan when operating in  automatic RPM mode or the target tachometer count when operating in manual RPM mode.

Read the count by clicking on the Read button. Change the count by entering the value into the edit field and clicking on the Write button.

## Fan 1 and Fan 2 Pulses per Revolution and Min Tach Count

The Pulses per Revolution and Min Tach Count box (Figure 5) sets the number of tachometer pulses per revolution of the fan and the minimum allowable tachometer count (maximum speed) for the fan.

The Tach. Pulses per Rev. setting has four options: 1 , 2 , 3 , or 4 .

The minimum tachometer count can be set to any value between 0 and 63. Read the pulses per revolution and min tach count by clicking on the Read button. Change the pulses per revolution by selecting the desired number from the list box. Change the min tach count by entering the value into the edit field. Click on the Write button to apply the changes.

## Fan 1 and Fan 2 Duty Cycle

The duty cycle box (Figure 6) contains the PWM dutycycle value. When operating in RPM mode, this value is controlled by the MAX6640. In PWM mode, this is the desired (target) PWM duty-cycle value. The value can be set between 0 and 120. Any number above 120 is changed to 120.

Read the duty-cycle value by clicking on the Read button.  Change the count by entering the value into the edit field and clicking on the Write button.

## Alert

The message ALERT appears in the alert box when an interrupt condition occurs, unless the configuration register is set to mask the alert. The cause of the interrupt is shown in the status boxes. To clear the interrupt, first eliminate the condition that caused it and click on Read

Alert .

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Automatic Read

The program polls the device for the new temperature and status data a maximum two times per second (2Hz).  To  disable  the  polling  of  data,  deselect Automatic Read on the Action menu.

## Data Logging

Select Data Logging on the Action menu to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If automatic read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if the temperature or status has changed. This slows the growth of the data-logging file. When automatic read is disabled, the data is logged each time Read All is selected on the Action menu. To stop data logging, deselect Data Logging on the Action menu.

## Slave Address

The MAX6640 has a fixed address of 0101 111. The MAX6639 responds to 0101 100, 0101 110, or 0101 111.

## Simple SMBus Commands

There are two methods for communicating with the MAX6640: through the normal user-interface panel or through the SMBus commands available by selecting Interface on the Debug menu. A display pops up that allows the SMBus protocols, such as read byte and write  byte,  to  be  executed.  To  stop  normal  user-interface execution so that it does not override the manually set  values,  turn  off  the  update  timer  by  deselecting

## Automatic Read on the Action menu.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

Note: In  places  where the slave address asks for an 8-bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX6640 with the last bit set to 1 for a read operation and zero for a write.

## Jumpers JU2 and JU3

Jumpers JU2 and JU3 connect the 2N3906 transistors as the external diodes. To use different diodes, cut the trace, short the two pins of JU1 and JU2, and connect the diodes (through twisted-pair wire) to the DXP1, DXN, and DXP2 pads.

<!-- image -->

## MAX6640 Evaluation System/Evaluation Kit

<!-- image -->

Figure 1. Main Window for the MAX6640 EV Kit Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

Figure 2. MAX6640 EV Kit Software Showing the Global Configuration Panel

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

<!-- image -->

Figure 3. MAX6640 EV Kit Software Showing the Mask Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX6640 Evaluation System/Evaluation Kit

Figure 4. MAX6640 EV Kit Software Showing the Fan 1 Configuration Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6640 Evaluation System/Evaluation Kit

Figure 5. MAX6640 EV Kit Software Showing the Fan 1 Tachometer Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

Figure 6. MAX6640 EV Kit Software Showing the Fan 1 Duty-Cycle Panel

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6640 Evaluation System/Evaluation Kit

<!-- image -->

Figure 7. MAX6640 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6640 Evaluation System/Evaluation Kit

<!-- image -->

Figure 8. MAX6640 EV Kit Component Placement GuideComponent Side

Figure 9. MAX6640 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 10. MAX6640 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.