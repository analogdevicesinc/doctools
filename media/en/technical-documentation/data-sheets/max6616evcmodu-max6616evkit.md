<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6616 Evaluation Kit/Evaluation System

## General Description

The MAX6616 evaluation system (EV system) consists of  a  MAX6616 evaluation kit (EV kit) and a Maxim CMODUSB command module.

The MAX6616 EV kit is a fully assembled and tested circuit  board that evaluates the MAX6616 dual-channel temperature monitor with fan-speed controller.

Order the complete EV system (MAX6616EVCMODU) for a comprehensive evaluation of the MAX6616 using a PC. Order the EV kit (MAX6616EVKIT) if the CMODUSB command module has already been purchased with a previous Maxim EV system or for custom use in other microcontroller-based (µC) systems.

The EV kit comes with the MAX6616AEG installed.

## Component List

## MAX6616 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1-C6         |     6 | 0.1µF ±15%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K |
| C7            |     1 | 10µF ±15%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A106K  |
| J1, J2        |     2 | 3-pin headers, 0.1in pitch, vertical, friction lock              |
| J3            |     1 | 20-pin, 2 x 10, right-angle female receptacle                    |
| J4, JU2       |     2 | 3-pin single-row headers                                         |
| J5, J6, JU4   |     3 | 2-pin single-row headers                                         |
| J7            |     1 | 10-pin double-row header (2 x 5)                                 |
| JU1           |     1 | 6-pin double-row header (2 x 3)                                  |
| JU3           |     0 | Not installed                                                    |
| N1, N2        |     2 | n-channel 1.25W, 2.5V MOSFETs (SOT23) Vishay Si2302ADS           |
| R1-R4         |     4 | 4.7k Ω ±5% resistors (0603)                                      |

Windows is a registered trademark of Microsoft Corp. SMBus is a trademark of the Intel Corporation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Two Thermistor Inputs
- ♦ Local Temperature Sensor
- ♦ Six GPIOs
- ♦ Two PWM Outputs for Fan-Speed Control
- ♦ Programmable Fan-Control Characteristics
- ♦ Automatic Fan Spin-Up Ensures Fan Start
- ♦ Nine Pin-Programmable SMBus™/I 2 C Addresses
- ♦ Proven PC Board Layout
- ♦ Windows® 98SE/2000/XP-Compatible Evaluation Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE      | INTERFACE                  |
|----------------|-----------|----------------------------|
| MAX6616EVKIT   | EV kit    | User-supplied I 2 C master |
| MAX6616EVCMODU | EV system | Windows software           |

Note: The MAX6616 EV kit software is included with the MAX6616 EV kit but is designed for use with the complete EV system. The EV system includes both the Maxim command module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim command module.

1

## MAX6616 Evaluation Kit/Evaluation System

## Component List (Continued)

## MAX6616 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                      |
|---------------|-------|----------------------------------|
| R5, R6        |     2 | 1.6k Ω ±1% resistors (0603)      |
| R7            |     1 | Thermistor BetaTHERM 10K3A1      |
| R8            |     1 | 10k Ω ±1% resistor (0603)        |
| R9-R16        |     8 | 10k Ω ±5% resistors (0603)       |
| R17, R18      |     0 | Not installed                    |
| TP1           |     0 | Not installed                    |
| U1            |     1 | MAX6616AEG (24-pin QSOP)         |
| -             |     2 | Shunts                           |
| -             |     1 | MAX6616 EV kit PC board          |
| -             |     1 | MAX6616 EV kit software (CD-ROM) |

## MAX6616 EV System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6616EVKIT |     1 | MAX6616 EV kit         |
| CMODUSB      |     1 | CMODUSB command module |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |
| Vishay     | 408-988-8000 | www.vishay.com        |

Note: Indicate you are using the MAX6616 when contacting these component suppliers.

## MAX6616 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX6616.EXE  | Application program                        |
| HELPFILE.HTM | Help file                                  |
| FTD2XX.INF   | USB device driver file                     |
| UNINST.INI   | Uninstalls the EV kit software             |

## Quick Start

## Recommended Equipment

- The MAX6616EVCMODU EV system MAX6616EVKIT

CMODUSB command module (USB cable included)

- Power supply: +12V at 3A (FVCC)
- Two 12V cooling fans with tachometer (with a 3-pin 0.1in pitch and friction lock connector, IMAX &lt; 1.2A)
- A user-supplied Windows 98SE/2000/XP PC
- A spare USB port on the PC

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

## Do not turn on the power until all connections are complete.

- 1) On the CMODUSB command module, ensure the shunt of J1 is in the 2-3 position (3.3V).
- 2) Enable the I 2 C pullup resistors on the CMODUSB command module by setting the DIP switches (SW1 on the CMODUSB board) to the ON position.
- 3) For the MAX6616 EV kit, ensure the shunts are in the default positions as follows:
4. JU1: Open (I 2 C address = 0x54)

JU2: 1-2 (set POR state of the GIOP0 to high)

- JU3: 1-2 (CMODUSB provide power to the MAX6616 EV kit)
- 4) Carefully connect the boards by aligning the MAX6616 EV kit's 20-pin connector with the 20-pin header of the CMODUSB command module. Gently press them together. The two boards should be flush against each other.
- 5) Plug the first fan to connecter J1 (FAN1).
- 6) Plug the second fan to connecter J2 (FAN2).
- 7) Set the power supply to +12V, and then turn off the power supply.
- 8) Connect the (+) power terminal of the power supply to  the  FVCC pad and the power supply (-) power terminal to the GND pad next to the FVCC pad.
- 9) Turn on the power supply.
- 10) Install  the  MAX6616 evaluation software on your computer by running the INSTALL.EXE program on the installation CD-ROM. The program files are copied and icons are created for them in the Windows Start Menu.
- 11) Connect the included USB cable from the PC to the CMODUSB command module. A Building Driver Database window pops up in addition to a New Hardware Found message. If you do not see a window that is similar to the one described above after 30 seconds, then remove the USB cable from the CMODUSB command module and reconnect it again. Administrator privileges are required to install the USB device driver on Windows 2000 and XP.
- 12) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX6616 using the Browse button.
- 13) Start  the  MAX6616 EV kit software by opening its icon in the Start Menu.

## MAX6616 Evaluation Kit/Evaluation System

Figure 1. MAX6616 Evaluation Software Main Window

<!-- image -->

- 14) Select the Configuration tab, Global subtab, click on thecheckbox D1 , and then pressthe Write button.
- 15) Click  on  the Enable Extended Resolution checkbox  of  both CH1 and CH2 Temperature Measurement panels.
- 16) Click on the Auto Read checkbox on the lower left of  the  main  window. The current temperature is updated on the top left of the main window every second.

<!-- image -->

## Detailed Description of Software

The evaluation software's main window shown in Figure 1 displays the device I 2 C address, device information, and current temperature of CH1 and CH2, instantaneous duty cycle for both PWM1 and PWM2. On the lower left of the main window, there are two tabs named Status and Configuration that  contain most of the MAX6616 internal registers. The Alert panel contains the FAN\_FAIL and OT output pins status and is located at the lower right of the main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6616 Evaluation Kit/Evaluation System

Figure 2. Configuration Tab Gives Seven Major Subtab Options

<!-- image -->

## Device I 2 C Address

The Device I 2 C Address combo box shown at the topleft  corner in Figure 1 displays the autodetected MAX6616 SMBus/I 2 C address.

## Device Information

There are a total of 34 documented registers inside the MAX6616. The Information panel on the main window, which is next to the Device I 2 C  Address combo box, shows the MAX6616's Manufacturer ID (RegFFh), Device Revision (RegFDh), and Device ID (RegFEh).

## Temperature Measurement and PWM Instantaneous Duty Cycle

Six  commonly used registers are shown on the right side of the main window. On the top is the CH1 Temperature Measurement panel that contains channel 1 temperature register (Reg00h) and channel 1 extended temperature register (Reg1Eh). Below it is the CH2 Temperature Measurement panel that contains channel 2 temperature register (Reg01h) and channel 2 extended temperature register (Reg1Fh). Following is the PWM1 instantaneous duty-cycle register (Reg0Dh) in  the PWM1 Instantaneous Duty Cycle panel, and the  PWM2 instantaneous duty-cycle register (Reg0Eh) in the PWM2 Instantaneous Duty Cycle panel.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6616 Evaluation Kit/Evaluation System

## Major Tabs

The rest of the 25 registers have been grouped into two major tabs named Status and Configuration .

The Status tab contains four subtabs: Fan , GPIO , OT , and Tachometer .  The Configuration tab contains seven subtabs: Fan , Global , GPIO , OT , PWM , Tach Limits ,  and Thermistor .  Some subtabs have only one register  as  shown in Figure 1, while others may have multiple registers or even multiple levels of subtabs as shown in Figure 2.

## Alert Panel

The Alert panel located at the right bottom corner of the main window indicates the status of output pin FAN\_FAIL and output pin OT (Figure 2).

## Autoread Checkbox

There is an Auto Read checkbox at the bottom right side.  By  checking this checkbox, all the registers are read and updated every second.

## Temperature Measurement

Both channel 1 and channel 2 temperature measurements are displayed on the main window. Channel 1 monitors the temperature of an external thermistor. Channel 2 monitors either the internal die temperature or the temperature of an external thermistor. The temperature measurements are capable of either 8-bit (Reg00h for channel 1 and Reg01h for channel 2) or 11-bit extended resolution (Reg00h plus Reg1Eh for channel 1, and Reg01h plus Reg1Fh for channel 2). 8-bit  resolution results in temperature resolution of 1°C/LSB, and extended resolution results in temperature resolution of 0.125°C/LSB. Enable extended resolution  by  selecting  the Enable  Extended Resolution checkbox inside the CH1 Temperature Measurement panel  and/or CH2  Temperature Measurement panel (Figure 2).

Automatic Fan-Control Setup Example This section is an example of how to use the software to set up the MAX6616 for automatic fan control.

- 1) Select the Configuration tab and the Fan subtab. Check the D2 ( Fan2 Control )  and D5 ( Fan1 Control ) checkboxes inside the Fan Configuration panel and press the Write button. Fan1 is now controlled by temperature channel 1 and Fan2 is controlled by temperature channel 2.
- 2) Under the Configuration tab, select the Global subtab. Check the D1 ( CH2 source ) checkbox and press the Write button. Now temperature channel 1 monitors the external thermistor and temperature channel 2 monitors the internal die temperature.
- 3) On the main window, check the Enable Extended Resolution checkboxes for both CH1 and CH2 Temperature Measurement panels, and click the Auto Read checkbox. The current temperature is updated every second.
- 4) Go back to the Configuration tab, select the PWM subtab, then Duty Cycle Dynamics .  In  the Duty cycle Rate of Change panel click the Fan1 combo box and choose 0.125s. Do the same in the Fan2 combo box and then press the Write button. This procedure causes the PWM duty cycle (and fan speed) to change relatively quickly for easy observation.  (A  slower  duty-cycle  rate  of  change  is  typically  used in real system designs to minimize the audibility of fan-speed changes.)
- 5) Since the default POR values of both channels' fan-start temperatures are 0, the fans should already be operating. To stop them, set both channels' fanstart  temperatures at least 10 degrees higher than the current temperature readings.
- 6) Select the Fan subtab under the Configuration tab. At the top of the subtab are the Fan Start Temperature panels for both CH1 and CH2. Individually set  both  temperature channels' fan-start temperatures to values at least 4 ° C higher than the current temperature readings, and press the Write button of each panel.

<!-- image -->

Wait until the fans have stopped. Observe the instantaneous duty cycles for both PWM1 and PWM2 decreasing to zero.

Individually set both temperature channels' fan-start temperatures two degrees higher than the current temperature and press the Write button of each panel.

- 7) Use your finger or other source to heat the MAX6616 (U1) or the external thermistor (R7) on the evaluation board. When the temperature rises above the fanstart  temperature for a given sensor, the corresponding fan begins spinning.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6616 Evaluation Kit/Evaluation System

## Detailed Description of Hardware MAX6616EVCMODU Evaluation System

The MAX6616 EV system consists of a MAX6616 EV kit and the Maxim CMODUSB command module.

## CMODUSB Command Module

The CMODUSB uses a proprietary design to provide SPI™- and I 2 C-compatible interfaces to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## CMODUSB Power Supply

The CMODUSB board uses a MAX1658 linear regulator. Jumper J1 selects between the 5V DC voltage that comes from the USB connector or the MAX1658's regulated 3.3V output voltage.

Set the CMODUSB jumper J1 to position 2-3 (3.3V) to evaluate the MAX6616 EV kit.

## MAX6616 EV Kit

The MAX6616 EV kit board can be obtained separately without the CMODUSB command module and provides a proven  layout  for  evaluating  the  MAX6616.  The MAX6616AEG (U1) is powered from VCC. The user can change the power-supply VCC voltage level from +3.0V to +5.5V. Make sure to remove the shunt of jumper JU4 to use a dedicated power supply to evaluate the MAX6616.

With two SMBus/I 2 C slave address select pins, ADD1 and ADD0, the MAX6616's device address can be set to one of nine different values by changing the combination of jumper JU1 (see Table 1).

## Table 1. SMBus/I 2 C Slave Address

| JUMPER   | SHUNT POSITION   | ADDRESS   |
|----------|------------------|-----------|
| JU1      | 1-3, 2-4         | 1001 110  |
| JU1      | 2-4              | 1001 101  |
| JU1      | 3-5, 2-4         | 1001 100  |
| JU1      | 1-3              | 0101 011  |
| JU1      | Open*            | 0101 010  |
| JU1      | 3-5              | 0101 001  |
| JU1      | 1-3, 4-6         | 0011 010  |
| JU1      | 4-6              | 0011 001  |
| JU1      | 3-5, 4-6         | 0011 000  |

The MAX6616 has six GPIO ports. GPIO0 has a POR control pin named PRESET. This feature allows the GPIO0 default state POR to be controlled using jumper JU2 as shown in Table 2.

SPI is a trademark of Motorola, Inc.

## Table 2. GPIO0 POR State

| JUMPER   | SHUNT POSITION   | GPIO0 POR STATE   |
|----------|------------------|-------------------|
| JU2      | 1-2*             | HIGH              |
| JU2      | 2-3              | LOW               |

* Default configuration.

For user convenience, the MAX6616 EV kit brings out all  six  GPIO  pins  as  well  as  another  two  output  pins, FAN\_FAIL and OT ,  through ten-pin header J7. Table 3 shows the pin descriptions for J7.

## Table 3. J7 Pin Description

|   PIN NUMBER | PIN NAME   |
|--------------|------------|
|            1 | GPIO0      |
|            2 | GPIO1      |
|            3 | GPIO2      |
|            4 | GPIO3      |
|            5 | GPIO4      |
|            6 | GPIO5      |
|            7 | OT         |
|            8 | FAN_FAIL   |
|            9 | GND        |
|           10 | GND        |

The  MAX6616  can  be  powered  by  either  the CMODUSB or an external power supply. The power source is selected using the shunt on jumper JU4 as shown in Table 4.

## Table 4. Power-Supply Selection

| JUMPER   | SHUNT POSITION   | POWER-SUPPLY SOURCE                              |
|----------|------------------|--------------------------------------------------|
| JU4      | 1-2* Open        | Powered by CMODUSB module Dedicate power supply, |

JU3 is an uninstalled jumper that connects VCC and VDD. By default, the two pins of JU3 are connected together with a trace on the circuit board. If desired, the trace may be cut, thus separating VCC and VDD. This allows, for example, connecting the pullups to a voltage other than VCC or measuring the supply current of the board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6616 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX6616 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6616 Evaluation Kit/Evaluation System

Figure 4. MAX6616 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX6616 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6616 Evaluation Kit/Evaluation System

Figure 6. MAX6616 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9