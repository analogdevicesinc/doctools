<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX16806 Evaluation Kit/ Evaluation System

## General Description

The MAX16806 evaluation kit (EV kit) demonstrates the features of the MAX16806 high-current LED driver, capable of delivering regulated current of up to a total of  350mA to one or more strings of high-brightness LEDs with high accuracy. This EV kit operates at supply voltages between 5.5V to 40V and temperatures ranging from 0°C to +70°C.

The MAX16806 EV kit provides a user-selectable threelevel LED current setting, connection to the 5V-regulated output, and a momentary switch to enable or disable the dimming function. This EV kit features wide-range dimming, controllable through a PWM input or analog input generated using an on-board trim pot. The MAX16806 EV kit is a fully assembled and tested PCB.

The MAX16806 EV kit provides access to the I 2 C interface of the MAX16806 IC, through which the internal dynamic registers and the EEPROM are written/read to control various device features. A CMAXQUSB board can be used to enable PC communication using the I 2 C 2-wire interface. Windows ® 98SE/2000/XP-compatible GUI software is provided to access the MAX16806 IC. The MAX16806 EV kit can also be interfaced directly to a user-provided I 2 C system.

The MAX16806 evaluation system (EV system) consists of the MAX16806 EV kit and a companion CMAXQUSB serial-interface board. The CMAXQUSB interface board allows a PC to control an I 2 C interface using the USB port. Order the MAX16806EVCMAXQU+ for a complete PC-based evaluation of the MAX16806. Order the MAX16806EVKIT+ if you already have a CMAXQUSB interface board, or if you have your I 2 C interface, or do not require PC-based evaluation of the MAX16806.

## Ordering Information

| PART               | TYPE      |
|--------------------|-----------|
| MAX16806EVKIT +    | EV Kit    |
| MAX16806EVCMAXQU + | EV System |

Note: The MAX16806 EV kit software is included with the MAX16806 EV kit, but is designed for use with the complete EV system. The EV system includes both the Maxim CMAXQUSB+ interface board and the EV kit. If the evaluation software will not be used, the EV kit board can be purchased without the Maxim CMAXQUSB+ board.

Windows is a registered trademark of Microsoft Corp.

Features

- ♦ 5.5V to 40V Supply Voltage Range
- ♦ Jumper Selectable 150mA, 250mA, or 350mA Output Current
- ♦ 5V-Regulated Output
- ♦ Wide-Range Dimming Control with PWM or Analog Control Signal
- ♦ On-Board Trim Pot to Provide Analog Control Voltage for PWM Dimming
- ♦ Tactile Momentary Switch
- ♦ PC-Based Evaluation of Features Using I 2 C Interface
- ♦ LED Current Thermal Foldback with Connection for Optional Thermal Sensor
- ♦ Windows 98SE/2000/XP-Compatible GUI Software
- ♦ Package Dissipates Up to 2.760W at TA = +70°C
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

Figure 1. MAX16806 EV Kit Board

<!-- image -->

## Component Lists

## MAX16806 EV System

| PART           |   QTY | DESCRIPTION           |
|----------------|-------|-----------------------|
| MAX16806EVKIT+ |     1 | MAX16806 EV kit       |
| CMAXQUSB+      |     1 | I 2 C interface board |

## MAX16806 Evaluation Kit/ Evaluation System

## Component Lists (continued) MAX16806 EV Kit

*EP = Exposed pad.

| DESIGNATION                   |   QTY | DESCRIPTION                                                                              |
|-------------------------------|-------|------------------------------------------------------------------------------------------|
| C1                            |     1 | 0.1µF, 10V X7R ceramic capacitor (0402) Murata GRM155R71C104KA88D KEMET C0402C104K8RACTU |
| C2                            |     1 | 0.1µF, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104KA93D TDK C1608X7R1H104K     |
| C3                            |     1 | Not installed, capacitor                                                                 |
| CFD, PWM, RSNS, TFIN, VIN, V5 |     6 | 0.1in 2-pin headers (through hole)                                                       |
| I 2 C                         |     1 | 0.1in 4-pin header (through hole)                                                        |
| J1, J2, J3                    |     3 | 0.1in 3-pin headers (through hole)                                                       |
| LED+, LED-                    |     2 | 0.1in 1-pin headers (through hole)                                                       |

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| R1            |     1 | 0.82 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R82-F    |
| R2            |     1 | 0.56 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R56-F    |
| R3            |     1 | 100k Ω ±20%, 3MM trim pot BI Technologies 22AR100KLFTR   |
| R4            |     1 | Short (PCB trace)                                        |
| R5, R6        |     2 | 50k Ω ±1%, 1/8W resistors (0603)                         |
| S1            |     1 | SMD tactile momentary switch ALPS SKRAACE010             |
| U1            |     1 | High-current LED driver (20 TQFN-EP*) Maxim MAX16806ATP+ |
| -             |     1 | PCB: MAX16806 Evaluation Kit+                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| ALPS Electric                          | 408-361-6400 | www.alps.com                |
| BI Technologies                        | 714-447-2345 | www.bitechnologies.com      |
| KEMET Corporation                      | 978-658-1663 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| TDK Corp.                              | 847-390-4373 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16806 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- Power supply 1: 0 to 30V, 0.5A rated
- Power supply 2: 0 to 5V rated
- Multimeter to measure current

One LED rated for at least 350mA

Maxim CMAXQUSB interface board (USB cable

- MAX16806 EV system MAX16806 EV kit included)
- Windows 98/2000/XP-compatible PC with a spare USB port
- USB I/O extension cable and I 2 C interface cable

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX16806 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

## Hardware-Only Configuration

- 1) Connect an LED rated for at least 350mA between LED+ and LED-.
- 2) Connect the DC power supply 1 (0V to 30V or above, 0.5A) to VIN.

<!-- image -->

## MAX16806 Evaluation Kit/ Evaluation System

- 3) Open all the pins of J1 to select 150mA LED current.
- 4) Place jumper J2 between pins 2-3 to enable U1.
- 5) Place jumper J3 between pins 2-3 to enable analog dimming.

and reconnect it again. Administrator privileges are required to install the USB device driver on Windows 2000/XP.

- 6) Short the CFD jumper to disable current foldback.
- 7) Turn on the power supply and increase the input voltage above 5.5V. The LED glows and the brightness depends on the analog dimming input voltage set by the trim pot (R3). If the LED is not glowing, check by turning R3 in a counterclockwise direction to increase analog dimming voltage.
- 8) Press the momentary switch (S1) to disable dimming and get full brightness. Measure the LED current. It should be 150mA ±3%. Input current can be used to measure LED current, as the input current will be only 0.7% more than the LED current.
- 9) Press the momentary switch again to enable dimming. Turn the trim pot (R3) fully in a counterclockwise direction to get full brightness. Measure the LED current, which should be 150mA ±3%.
- 10) Increase the supply voltage to 16V and check whether the LED current is stable at 150mA ±3%.

## Hardware and Software Configuration

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, MAX16806EVSYS\_GUI\_setup.exe.
- 2) Install the MAX16806 evaluation software on the PC by running the MAX16806EVSYS\_GUI\_setup.exe. The program files are copied and icons are created in  the  Windows Start menu. Restart the computer when prompted. For Windows 2000/XP, you may need administrator privileges.
- 3) Power up the MAX16806 EV kit by applying 10V to VIN. Leave TFIN open and connect the I 2 C interface of CMAXQUSB+ board to the I 2 C interface of MAX16806 EV kit using the 3-wire connector included (in correct direction). Function of each pin of the I 2 C connector is indicated on both boards.
- 4) Set both CMAXQUSB+ interface board SW1 switches to the ON position. These components provide pullup resistors for the SDA and SCL 2-wire bus signals.
- 5) Connect the included USB cable from the PC to the CMAXQUSB+ interface board. The CMAXQUSB+ board is powered through the computer's USB port. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar to the one described above within 30 seconds, remove the USB cable from the CMAXQUSB+ interface board
- 6) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  as C:\Program Files\MAX16806 by using the Browse button. Refer to the TROUBLESHOOTING\_USB.PDF document included with the software if you have any problems during this step.
- 7) Start the MAX16806 EV kit software by opening its icon in the Start menu.
- 8) In  the  pulldown File menu, select Connect .  The MAX16806  software  communicates  with  the MAX16806 device and displays the contents of all the dynamic registers in the corresponding pulldown menu. The EV kit and the software are then ready for evaluation. If a Connection failed message is displayed, check the USB and I 2 C interface connections and whether the MAX16806 board is powered up.

<!-- image -->

See the Detailed Description of Software section in this document for more information on the software GUI features.

## Detailed Description of Hardware

The MAX16806 EV kit demonstrates a high outputcurrent linear LED driver with accurate current control based on the MAX16806 current regulator. This EV kit is capable of supplying regulated output currents up to a total of 350mA and operates at supply voltages between 5.5V to 40V. Note: If  the  supply  voltage  is above the total operating voltage of the LED string by more than 7.5V, the maximum output current should be set so the device does not enter into thermal shutdown due to excessive power dissipation.

The MAX16806 uses a feedback loop to control the output current. The differential voltage across the currentsense resistors (R1 and R2) is compared with an internal fixed reference and the error is used to control the output drive. The voltage across the sense resistors is measured differentially  to  achieve high immunity to common-mode noise. The MAX16806 uses a factory-set reference of 198mV ±3% that is adjustable through the binning adjustment register. See the Detailed Description of Software section in this document for more information on accessing the binning adjustment register through I 2 C interface.

Two-pin  TFIN  input  provided  on-board  takes  a temperature-dependent voltage signal from the MAX6613 temperature sensor, or an equivalent device

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

for  thermal  foldback function. The MAX16806 EV kit also includes connection for the 5V-regulated output and access to the on-board current-sense resistors.

## PWM Dimming

The MAX16806 EV kit features wide-range dimming to control the LED brightness by varying the duty cycle of a PWM input signal, or by varying the amplitude of an analog input voltage. Trim pot R3 generates the analog voltage needed to evaluate the analog-control PWM dimming from the regulated 5V output, whereas the PWM signal should be driven externally. For the analog-control PWM dimming, an internal 200Hz ramp is compared against the analog input and the output is chopped at 200Hz. The peak value of the internal ramp can be adjusted through I 2 C interface and is explained in the Detailed Description of Software section.

When an external PWM signal is used for dimming, the chopping frequency is between 100Hz to 2kHz, and the PWM amplitude is between 4V to 40V. An on-board momentary switch provides active-low signal to the switch input when pressed, and activates a bistable latch in the MAX16806 to enable or disable the analog dimming function. The momentary switch does not disable dimming by the external PWM control signal or dimming caused by thermal or LED current foldback.

## Output Current Setting

Users select between three output current levels by setting  jumper J1 (see Table 1 for jumper settings). The output current can be set to 150mA, 250mA, or 350mA. The current-sense resistor is accessible through the RSNS connector. The output current is adjusted by removing R2 or R3, opening all the pins of J1, and connecting a resistor across RSNS with values calculated using the following equation:

<!-- formula-not-decoded -->

where RSNS is the external current-sense resistor, 0.198V is the factory-set current-sense reference, and IOUT is the desired output current. If the current-sense reference voltage is changed using binning adjustment, the numerator of the above equation has to be modified with the selected reference voltage.

## Power Dissipation

Thermal shutdown turns off the device if power dissipation in the IC causes the junction temperature to reach +155°C (typ). An external resistor can be added at the input to the device or in series with LED to reduce the power dissipation in the IC. The resistor's power rating should be higher than I 2 R. (I is the input current or LED current, and R is the value of the added resistor.)

Use the following equation to calculate the maximum LED current that can be drawn from the device without causing a thermal shutdown:

<!-- formula-not-decoded -->

where 2.760W is the maximum power dissipation capacity of the device when mounted on a multilayer board, as per JEDEC specifications, with ambient temperature below +70°C. VIN is the input-supply voltage and VLED is the total operating voltage of the LED string.

## 5V-Regulated Output

The +5V regulator is used to power other components from the V5 connector. The 5V output supplies up to 0.5mA of current and is not disabled during PWM off.

## Jumper Selection

Three-pin jumper J1 selects between three different output current settings. Three-pin jumper J2 controls the EN pin of the MAX16806 and enables or disables the device. Three-pin jumper J3 selects between the on-board analog voltage and external PWM signal for dimming. Close CFD to disable the current foldback function. Table 1 lists the jumper options.

## Detailed Description of Software

## Table 1. Jumpers J1, J2, J3 and CFD Functions

| JUMPER   | SHUNT POSITION AND FUNCTION                                      | SHUNT POSITION AND FUNCTION                                      | SHUNT POSITION AND FUNCTION                                      |
|----------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| JUMPER   | 1-2                                                              | 2-3                                                              | Open                                                             |
| J1       | 350mA                                                            | 250mA                                                            | 150mA                                                            |
| J2       | U1 disabled                                                      | U1 enabled                                                       | -                                                                |
| J3       | PWM dimming                                                      | Analog dimming                                                   | -                                                                |
| CFD      | Closed: current foldback disabled Open: current foldback enabled | Closed: current foldback disabled Open: current foldback enabled | Closed: current foldback disabled Open: current foldback enabled |

The  MAX16806  EV  kit  GUI  software  is  used  to evaluate the features of the MAX16806 device that are controllable through the I 2 C interface. The software uses the CMAXQUSB+ board to generate the I 2 C interface signals at 400KHz to communicate to the MAX16806 device. The software writes data into, as well as reads data from, the dynamic registers and the nonvolatile EEPROM registers of the MAX16806. Modifying contents of the dynamic registers directly controls the respective device function. Writing to EEPROM stores all the dynamic register contents to the corresponding EEPROM registers, which are copied to dynamic re-gisters every time during power-up.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

Note: Text in bold are user-selectable features in the MAX6964 EV kit software. A mouse or the keyboard's tab key is used to navigate various items on the main window.

## Software Startup

During power-up, the MAX16806 device loads the factory-set or last-stored contents of the EEPROM registers to the corresponding dynamic registers. After the PC-based evaluation setup is made, as described in the Quick Start Hardware and Software Configuration section, start the MAX16806 program by opening its icon in the Start menu. Use the pulldown File menu and select Connect .  The MAX16806 software communicates with the MAX16806 device and displays the contents of all the dynamic registers in the corresponding pulldown menu. Figure 2 shows the GUI software startup window.

<!-- image -->

Figure 2. MAX16806 EV Kit Software-Startup Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

## Programming Dynamic Registers

Dynamic register contents directly control the respective  features  of  the  MAX16806 device. During powerup, the contents of the EEPROM registers are loaded to the six dynamic registers. To modify the contents of any of the dynamic registers, simply pull down the respective menu and select the required value. As soon as a value is selected, the pulldown menu disappears and the software writes the equivalent binary code into the corresponding dynamic register location through the I 2 C interface, and verifies the register contents after the write  operation.  The  data  and  last  address  written  are displayed in hex in the bottom-left corner of the GUI window (see Figure 3).

Figure 3. MAX16806 EV Kit Software-Writing to Dynamic Registers

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

## Binning Adjustment

Binning Adjustment takes 16 different values from 103mV to 198mV, and this voltage is used as the current-sense reference for controlling the LED current. Ramp Peak value takes eight different values from 1.55V to 2.88V, and this voltage decides the peak voltage of the internal 200Hz reference ramp. Changing the ramp peak voltage affects the analog dimming and the dimming during current and thermal foldback.

## Current Foldback Threshold

Current Foldback Threshold takes eight values from 11.4V to 16.4V, and this value decides the supply voltage above which the current foldback feature starts dimming LEDs (if the CFD jumper is open to enable current foldback). The current foldback range is 1.2 times the ramp peak value if bit 3 of the current foldback threshold register is not set. The Double Current Foldback Range checkbox sets bit 3 of the current foldback threshold register when checked to make the current foldback range 2.4 times the ramp peak value.

## Thermal Foldback Knee Point

Thermal Foldback Knee Point takes 16 different values from +60°C to +136°C, controlling the thermal foldback feature based on the voltage level at the TFIN input. Temperature-sense input TFIN is compatible to the output of the MAX6613 temperature sensor, or an equivalent device. Each temperature setting corresponds to a reference voltage internal to the MAX16806 that is equal to  the  output  voltage  generated by a MAX6613, or an equivalent device. When the voltage at the TFIN input reduces to the voltage corresponding to the selected thermal foldback knee-point temperature, the thermal foldback feature starts dimming the LED. Connect the output of a MAX6613 temperature sensor, or an equivalent  device, to the TFIN input or apply the respective voltage to TFIN to evaluate this feature. Disconnect the I 2 C interface when connecting signals to TFIN, as both the functions use the same device pins.

Thermal foldback knee point inputs TFN/TFP should not be left open when not used, as it will enable the thermal foldback function and reduce the LED brightness. In the MAX16806 EV kit, resistors R5 and R6 provide the necessary biasing for TFN/TFP inputs and disable the thermal foldback function. The TFN input is connected to GND through R6 (50k Ω ) and the TFP input is connected to +5V through R5 (50k Ω ). These resistors do not affect the normal functionality of the thermal foldback input, as well as the I 2 C interface, and should be used in the enduser application circuit for proper operation.

<!-- image -->

## Thermal Foldback Slope

Thermal  Foldback  Slope takes  four  different values, and the selected value is multiplied with the difference between the voltage input at TFIN and the internal reference voltage that corresponds to the thermal foldback knee point (this difference voltage is a measure of the set thermal foldback knee point and the sensed temperature), with the resultant voltage used to decide the dimming. As this resultant voltage increases, the LED brightness reduces. When it becomes equal to the peak amplitude of the internal ramp, the dimming is complete and the LED is fully off.

## Thermal Foldback Clamp Level

Thermal Foldback Dim Clamp takes eight values between 40% and 100%. This value is the minimum percentage of the output brightness that will be reached when MAX16806 is dimming during thermal foldback.

## Programming EEPROM Registers

To program the EEPROM registers, the input supply voltage should be kept at 22V. Open the CFD jumper to enable current foldback to prevent excessive power dissipation due to high input voltage. Load the values to be stored into the EEPROM to dynamic registers by using the respective pulldown menu and the checkbox. Click on the Program Data button. The software writes hex code 0xCA to the password register (0xFF) to  enable EEPROM programming, and then makes a write operation to the EEPROM program enable register to initiate the EEPROM programming cycle. Data written into  the  EEPROM program enable register does not have any significance. The MAX16806 stores the contents  of  the  dynamic  registers  to  EEPROM.  A Programming EEPROM Data Successful message appears. This indicates that the dynamic register contents are stored into the EEPROM and programming is complete.

If the current foldback is not disabled and the LED is on, it is  turned off during EEPROM programming. During the next power-up, the new EEPROM contents are loaded into the dynamic registers. To load the EEPROM contents to dynamic registers during normal operation, click on the Recall Data button. The software makes a write operation to EEPROM content transfer register (0x06). This initiates the transfer of EEPROM contents to dynamic registers. The data written to the EEPROM content transfer register do not have any significance. The dynamic register contents are displayed after the transfer is complete.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

Figure 4. MAX16806 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

Figure 5. MAX16806 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

Figure 6. MAX16806 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16806 Evaluation Kit/ Evaluation System

<!-- image -->

Figure 7. MAX16806 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16806 Evaluation Kit/ Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                              | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/06           | Initial release                                                                                          | -               |
|                 1 | 3/07            | -                                                                                                        | 1, 2, 3, 7-11   |
|                 2 | 12/07           | Updated Ordering Information table format; corrected errors in Quick Start section; various style edits. | 1, 2, 3, 7      |
|                 3 | 11/08           | Removed LED from EV kit.                                                                                 | 1, 2            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12