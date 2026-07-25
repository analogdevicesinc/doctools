<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6620 Evaluation Kit/Evaluation System

## General Description

The MAX6620 evaluation system (MAX6620EVCMAXQU+) consists of the MAX6620 evaluation kit (MAX6620EVKIT+) and  the  Maxim  CMAXQUSB+  command module. Windows 2000/XP/Vista ® -compatible software is also available for use with the MAX6620 evaluation system (EV system) and can be downloaded from the Maxim website (www.maxim-ic.com/evkitsoftware).

The MAX6620 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that evaluates the MAX6620 quad linear fan-speed controller. The MAX6620 controls the speeds of up to four fans using four independent linear voltage outputs. The EV kit includes 3-pin fan headers to allow easy fan connection and an I 2 C/SMBus™-compatible interface that allows for  software  control  of  the  drive  voltage,  tachometer count, fan configuration, and fan dynamics.

The Maxim CMAXQUSB command module provides the I 2 C/SMBus interface and is connected to the computer through the universal serial bus (USB) port. The MAX6620 EV kit software provides a graphical user interface (GUI) for exercising the MAX6620 features.

## MAX6620 EV System

| PART          |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| MAX6620EVKIT+ |     1 | MAX6620 EV kit                       |
| CMAXQUSB+     |     1 | I 2 C/SMBus interface command module |

## MAX6620 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1-C6         |     6 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104K |
| J1            |     1 | 2 x 10 right-angle receptacle                                                          |
| J2-J5         |     4 | 3-pin headers, 0.1in pitch, vertical, friction lock                                    |
| JU1           |     1 | 2-pin header                                                                           |
| JU2-JU6       |     5 | 3-pin headers                                                                          |

Windows Vista is a registered trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

Features

- ♦ 3V to 5.5V Supply Voltage Range
- ♦ Controls Up to Four Independent Fans with Linear (DC) Drive
- ♦ Uses Four External Low-Cost PNP Pass Transistors
- ♦ Fan-Fail Output
- ♦ I 2 C/SMBus-Compatible Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| TYPE      |
|-----------|
| EV Kit    |
| EV System |

## Component Lists

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| Q1-Q4         |     4 | 20V, 1A, PNP silicon EPI transistors ON Semi BCP69T1G                                            |
| R1-R4         |     4 | 2.7k Ω ±5% resistors (0603)                                                                      |
| R5, R6        |     0 | Not installed, resistors (0603)                                                                  |
| R7            |     1 | 4.7k Ω ±5% resistor (0603)                                                                       |
| R8-R11        |     4 | 10k Ω ±5% resistors (0603)                                                                       |
| U1            |     1 | Quad linear fan-speed controller (28 TQFN-EP*, 5mm x 5mm x 0.8mm) Maxim MAX6620ATI+              |
| Y1            |     1 | Standard 32.768kHz quartz crystal, 12.5pF load capacitance Hong Kong X'tals 3TK0327680D1CF5GX-0A |
| -             |     6 | Shunts                                                                                           |
| -             |     1 | PCB: MAX6620 Evaluation Kit+                                                                     |

## MAX6620 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER              | PHONE          | WEBSITE                 |
|-----------------------|----------------|-------------------------|
| Hong Kong X'tals Ltd. | +852-3511-2388 | www.hongkongcrystal.com |
| Murata Mfg. Co., Ltd. | 770-436-1300   | www.murata.com          |
| ONSemiconductor       | 602-244-6600   | www.onsemi.com          |
| TDK Corp.             | 847-803-6100   | www.component.tdk.com   |

Note: Indicate that you are using the MAX6620 when contacting these component suppliers.

## MAX6620 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX6620.EXE             | Application program                        |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |
| FTD2XX.INF              | USB driver file                            |
| UNINST.INI              | Uninstalls the EV kit software             |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- User-supplied PC running Windows 2000/XP/Vista
- Available USB port
- 5V/2A or 12V/2A DC power supply (VFAN)
- One to four brushless DC fans
- MAX6620 EV system MAX6620 EV kit CMAXQUSB+ command module (USB cable included)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows 2000/XP/Vista operating system.

## Procedure

The MAX6620 EV kit is fully assembled and tested. Follow the steps to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) On the CMAXQUSB command module, ensure that the shunt on jumper JU1 is in the 3.3V position.
- 2) To enable the on-board VCC supply, ensure that a shunt is installed between pins 2-3 on jumper JU2 on the MAX6620 EV kit. Also, verify that the shunt on JU1 of the EV kit is uninstalled.
- 3) Carefully connect the boards by aligning the 20-pin connector of the MAX6620EV kit with the 20-pin header on the CMAXQUSB interface board. Gently press them together.
- 4) Connect one to four fans appropriately. Note: The EV kit is  configured for use with fans that typically draw up to 400mA. When using larger fans, a different pass transistor might be required for proper operation.
- 5) With power off, connect the positive terminal of the DC power supply to the VFAN pad, and the ground terminal to the FAN\_GND pad next to VFAN.
- 6) Connect the USB cable from the computer's type-A USB port to the CMAXQUSB board's type-B USB port.
- 7) Visit  www.maxim-ic.com/evkitsoftware to download the latest  version  of  the  MAX6620 EV kit software and install it on your computer by running the INSTALL.EXE program. The program files are copied and icons are created in the Windows Start menu.
- 8) Turn on the power supply and set it to 5V or 12V, as appropriate.
- 9) Start the MAX6620 program by opening its icon in the Start menu.
- 10) Normal device operation is verified when CMAXQUSB HW: Connected. MAX6620 device connected. is displayed at the bottom left of the MAX6620 EV kit main window (Figure 1).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

## Detailed Description of Software

## User-Interface Panel

The program's main window contains two tabs, Fan Status and Fan Configuration/Dynamics ,  which  provide controls for the MAX6620 EV kit software's configurable features. The Fan Status tab sheet (Figure 1) provides controls for the Global Configuration register, TACH Count , Drive Voltage , Targets , and Faults . The Fan Configuration/Dynamics tab sheet (Figure 2) provides controls for Fan\_ Configuration and Fan\_ Dynamics . A status box is also provided at the bottom of  the  program's main window and is used to verify command module and device connectivity.

## VFAN Input Setting (5V or 12V)

The MAX6620 EV kit software can be configured to work with 5V or 12V DC fans. Manually select the appropriate fan voltage from the VFAN drop-down list (Figure 1). The default setting is for use with 12V DC fans.

## Global Configuration

The Global Configuration group box contains several functions that control general operation. The I2C Bus Timeout checkbox resets the interface if SDA is low for more than 35ms, when enabled. The Fans to 100% on Failure checkbox, when checked, drives the fans to full-scale  drive  voltage  when  a  fan  failure  is  detected. The External Xtal checkbox toggles between the internal oscillator (unchecked) and the 32.768 kHz on-board crystal (checked).

<!-- image -->

Figure 1. MAX6620 EV Kit Software-Fan Status Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

Figure 2. MAX6620 EV Kit Software-Fan Configuration/Dynamics Tab

<!-- image -->

## I2C Watchdog

The I2C Watchdog Period drop-down list controls the period that the watchdog monitors SDA and SCL for valid I 2 C transactions. If there are no valid transactions between the master and the MAX6620 within the watchdog period, all fan output voltages go to full-scale drive voltage. The I2C Watchdog Status indicator  monitors whether a watchdog fault has occurred. This bit is cleared when read.

## TACH Count and Drive Voltage

With polling enabled, the TACH Count group box automatically reads the tachometer count for each corresponding fan. With polling disabled, press the Read buttons next to each fan's TACH\_ Count label.

With polling enabled, the Drive Voltage group box automatically reads the drive voltage for each corresponding fan. With polling disabled, press the Read buttons next to each fan's drive voltage label. When a fan is driven at full-scale voltage, the drive voltage label text is displayed the in red font.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

## Targets

In  RPM mode, the Target TACH\_ Count sets the desired tachometer count for each corresponding fan. The MAX6620 then adjusts the fan drive voltage to achieve this tachometer count. In DAC mode, this feature has no effect.

In DAC mode, write the desired fan drive voltage to the Target Drive Voltage\_ edit  box.  The  MAX6620 then drives the fan with this voltage.

## Faults

## Fan\_ Status

Fan faults are detected through the fan fault register and displayed in the Faults group box. When a fault is detected, the Fan\_ Status label  changes from Ok to Fault and displays the text in red font. Since these bits latch until they are cleared by reading, the option to poll bits automatically, or manually read status, is offered by toggling the Enable Polling checkbox. Refer to the MAX6620 IC data sheet for more information regarding types of faults.

## Fan\_ Fault Mask

The Fan\_ Fault Mask checkboxes give the option to mask faults on selected fans from asserting the FAN\_FAIL hardware option. When checked, bits do not assert the FAN\_FAIL output. Faults are still  indicated through Fan\_ Status .

## Fan\_ Configuration

The Fan\_ Configuration group boxes (Figure 2) configure the corresponding fan's Spin-up conditions, TACH Input Enable settings, and set either RPM or DAC mode.

<!-- image -->

## RPM/DAC Mode

Select the appropriate RPM or DAC radio button to set the fan to either RPM or DAC mode. In RPM mode, the fan drive voltage is adjusted to produce the tachometer count value in the Fan\_ Target TACH Count register. In DAC mode, the fan drive voltage is set by the value in the Fan\_ Target Drive Voltage register.

## Spin-up

The Spin-up drop-down list controls the period of time that the fan is driven at full-scale voltage before reducing the drive to the selected value. The default is set through jumper JU6.

## TACH Settings

The TACH Input Enable checkboxes enable the TACH input function and fan-fault detection. When enabled, select the appropriate radio button to set the TACH input to either TACH Count or Locked Rotor .  When using locked rotor input, the Polarity can be set at high or low.

## Fan\_ Dynamics

The Fan\_ Dynamics group box contains controls for individual fan speed range and DAC rate-of-change. The # of tach cycles counted drop-down list sets the number of complete tachometer cycles used for counting  the  number of 8192Hz clock cycles. For example, by default, this number is set to 4, which means that the MAX6620 counts the number of 8192Hz clock cycles in four complete tachometer cycles.

The DAC rate of change drop-down list determines the time interval  between output voltage increments. Note that in RPM mode, a setting of zero would result in an unstable feedback loop, so a default of 0.0625 is in effect when zero is selected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

Figure 3. Interface Diagnostic Window

<!-- image -->

## Simple I 2 C/SMBus Commands

There are two methods for communicating with the MAX6620, through the normal user-interface panel (Figures 1 and 2), or through the SMBus commands available by selecting the Interface Diagnostic Window menu item from the Action menu bar. The Maxim Command Module Interface window pops up and includes a 2-wire interface tab  that  allows  for  execution  of  the SMBusSendByte() and SMBusQuick() commands.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 3 for an illustration of this tool.

## Detailed Description of Hardware

## Jumper Settings

Several jumper settings in the following tables illustrate features of the MAX6620 EV kit.

6

## Oscillator Selection

The MAX6620 EV kit gives the option to use the MAX6620's internal oscillator or external on-board 32.768kHz quartz crystal (see Table 1). By default, the chip's internal oscillator is used. For increased accuracy, an external 32.768kHz quartz crystal can be applied by installing jumper JU1.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | X1 PIN                     | OSCILLATOR                        |
|------------------|----------------------------|-----------------------------------|
| Installed        | Connected to X2 through Y1 | External 32.768kHz quartz crystal |
| Not installed*   | Open                       | Internal oscillator used          |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6620 Evaluation Kit/Evaluation System

## VCC Power Supply

The MAX6620 gives the option to power VCC through the CMAXQUSB module or through an external supply. This can be accomplished through setting jumper JU2 (see Table 2). By default, the MAX6620's VCC supply is powered through the CMAXQUSB module, eliminating the need for an external VCC supply.

Table 2. Jumper JU2 Functions

| SHUNT POSITION   | VCC PIN                               |
|------------------|---------------------------------------|
| 1-2              | External 3.0V to 5.5V supply required |
| 2-3*             | Powered from CMAXQUSB module          |

*Default position.

## DAC Startup Conditions

The MAX6620 samples the DAC\_START input when power is first applied and sets the power-up value for the fan drive voltage based on jumper JU5 configuration.  By  default,  the  DAC\_START pin is connected to VCC, setting the initial fan drive voltage to VFAN.

Table 5. Jumper JU5 Functions

| SHUNT POSITION   | DAC_START PIN    | INITIAL FAN DRIVE VOLTAGE   |
|------------------|------------------|-----------------------------|
| 1-2*             | Connected to VCC | VFAN                        |
| Not installed    | Open             | 0.75 x VFAN                 |
| 2-3              | Connected to GND | 0V                          |

*Default position.

## I 2 C Slave Address Selection

The MAX6620 is programmable to one of three I 2 C slave addresses through jumper JU3 (see Table 3). The address is defined as the 7 most significant bits (MSBs) followed by the read/write bit.

Table 3. Jumper JU3 Functions

| SHUNT POSITION   | ADD PIN          | ADDRESS   |
|------------------|------------------|-----------|
| 1-2              | Connected to VCC | 0x54      |
| Not installed    | Open             | 0x52      |
| 2-3*             | Connected to GND | 0x50      |

*Default position.

## I 2 C Watchdog (WD) Startup Conditions

The MAX6620 I 2 C watchdog function (see Table 4) monitors SDA and SCL when enabled at startup by configuring jumper JU4. When this feature is enabled and 10s elapse without a valid I 2 C transaction, the fan drive goes to 100%. The watchdog function is disabled by default.

Table 4. Jumper JU4 Functions

| SHUNT POSITION   | WD_START PIN     | WDFUNCTION   |
|------------------|------------------|--------------|
| 1-2              | Connected to VCC | Enabled      |
| 2-3*             | Connected to GND | Disabled     |

*Default position.

<!-- image -->

## Initial Spin-Up Behavior

The initial spin-up behavior of the MAX6620 is sampled at the input of SPIN\_START when power is first applied. Initial spin-up behavior can be set through jumper JU6 at power-up (see Table 6 for spin-up configuration). It is also possible to modify spin-up behavior by writing appropriate settings to the MAX6620's registers. By default, the initial spin-up feature is disabled.

Table 6. Jumper JU6 Functions

| SHUNT POSITION   | SPIN_START PIN   | INITIAL SPIN-UP BEHAVIOR                                                  |
|------------------|------------------|---------------------------------------------------------------------------|
| 1-2              | Connected to VCC | Full-scale drive voltage until two tachometer pulses, or 1s has elapsed   |
| Not installed    | Open             | Full-scale drive voltage until two tachometer pulses, or 0.5s has elapsed |
| 2-3*             | Connected to GND | Spin-up disabled                                                          |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

Figure 4. MAX6620 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

<!-- image -->

Figure 5. MAX6620 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6620 Evaluation Kit/Evaluation System

Figure 6. MAX6620 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6620 Evaluation Kit/Evaluation System

Figure 7. MAX6620 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11