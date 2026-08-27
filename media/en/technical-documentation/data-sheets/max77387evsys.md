<!-- lastmod 2022-08-03 -->
## MAX77387 Evaluation System

## General Description

The MAX77387 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the highly integrated MAX77387  dual-phase  adaptive  step-up  converter  with 2A  flash  driver.  The  device's  flash  driver  integrates  an adaptive 2A dual-phase PWM step-up DC-DC converter and two 1000mA white LED camera flash/movie high-side current regulators.

The EV system includes the EV kit and a MINIQUSB command module  that  provides  the  I 2 C  interface  to  control individual output on/off, the step-up output voltage, movie/ flash current, and flash/torch timer duration settings.

The  evaluation software can be  downloaded  from www.maximintegrated.com/evkitsoftware.

Ordering Information appears at end of data sheet.

## Component Lists

## MAX77387 EV System

| PART     | TYPE           |
|----------|----------------|
| MAX77387 | EV Kit         |
| MINIQUSB | Command Module |

## MAX77387	EV	Kit

| DESIGNATION   | QTY          | DESCRIPTION                                                          |
|---------------|--------------|----------------------------------------------------------------------|
| MAIN CIRCUIT  | MAIN CIRCUIT | MAIN CIRCUIT                                                         |
| C1            | 1            | 100nF ±10%, 25V X7R ceramic capacitor (0402) Samsung CL05A104KA5NNNC |
| C2-C4         | 3            | 10µF ±10%, 10V X5R ceramic capacitors (0402) Samsung CL05A106MP5NUNC |
| C15, C16      | 0            | Not installed, capacitors                                            |
| D1, D2        | 2            | White flash LEDs OSRAM LUW CAEP-LFLZ-G3                              |
| L1, L2        | 2            | 1µH, 0.060Ω, 1.6A chip inductors Samsung CIG22L1R0MNE                |
| RT            | 0            | Not installed, NTC resistor (0402) Optional (10kΩ NTC with B = 3435  |
| U1            | 1            | Dual-phase adaptive DC-DC step- up converter Maxim MAX77387EWP+      |

## Features

- 2.5V to 5.5V Input Supply with Full Functionality
- Dual-Phase Interleave Step-Up DC-DC Converter
- True	Shutdown™	Output
- 2A	Guaranteed	Output	Current	for	V IN  &gt; 2.5V and V OUT	≤	4.0V
- Adaptive	Output-Voltage	Regulation	Ensuring Highest	System	Efficiency
- Over	90%	Peak	Efficiency
- 3.125%	Minimum	Duty	Cycle
- On-Chip	Power	MOSFET	and	Synchronous Rectifier
- Up	to	4MHz	PWM	Switching	Frequency	per Phase
- Small	0.47µH	Inductor	per	Phase
- High-Side	Torch/Flash	LED	Current	Regulator
- I 2 C-Programmable	Flash	Output	Current (15.625mA	to	1000mA	in	15.625mA	Steps)
- I 2 C-Programmable	Torch	Output	Current (3.91mA	to	250mA	in	3.91mA	Steps	for	NonPWM	Dimming) (125mA	to	1000mA	in	125mA Steps	for	PWM	Dimming	with	Programmable Duty	Cycle	from	3.125%	to	25%	in	3.125% Steps)
- Low-Dropout	Voltage	(80mV,	typ)	at	1000mA
- I 2 C-Programmable	Flash	Safety	Timer
- I 2 C-Programmable	Torch	Safety	Timer
- Dual	Independent	TX\_MASK	Inputs	for	Limiting Flash	Current	During	Tx	Events
- Open/Shorted	LED	Detection
- NTC	Monitoring	for	LED	Protection
- Overvoltage	Protection
- MAXFLASH	2.0	Preventing	System	Latchup
- Thermal-Shutdown	Protection
- &lt;	1µA	Shutdown	Current
- RoHS	Compliant
- Proven PCB Layout
- Fully	Tested	and	Assembled

True Shutdown is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

Evaluates: MAX77387

## MAX77387 Evaluation System

## Component	Lists	(continued)

## MAX77387	EV	Kit

| DESIGNATION         | QTY        | DESCRIPTION                                                                               |
|---------------------|------------|-------------------------------------------------------------------------------------------|
| MAIN BOARD          | MAIN BOARD | MAIN BOARD                                                                                |
| C5, C6, C9-C14      | 8          | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M Taiyo Yuden JMK105BJ105MV |
| C33                 | 1          | 100µF ±20%, 10V X5R ceramic capacitor (1812) TDK C4532X5R1A107M                           |
| D3                  | 1          | Dual Schottky, common cathode (SOT323) Central Semi CMSSH-3CE                             |
| JU1-JU5, JU10       | 6          | 3-pin headers Sullins PEC36SAAN Digi-Key S1012E-36-ND                                     |
| JU6, JU7, JU12-JU15 | 6          | 2-pin headers, 0.1in centers Sullins PEC36SAAN Digi-Key S1012E-36-ND                      |
| JU8                 | 1          | 16-pin (2 x 8) header, 0.1in centers Sullins PEC36DAAN Digi-Key S2012E-36-ND              |
| JU8_A               | 1          | 1 x 8 through-hole, 0.025in SQ post socket Samtec SSW-108-01-T-S                          |

## Component Suppliers

| SUPPLIER                 | WEBSITE               |
|--------------------------|-----------------------|
| Central Semiconductor    | www.centralsemi.com   |
| Digi-Key Corp.           | www.digikey.com       |
| OSRAM Opto Semiconductor | www.osram-os-com      |
| Panasonic Corp.          | www.panasonic.com     |
| SEMCO                    | www.semlcr.com        |
| Taiyo Yuden              | www.yuden.co.jp       |
| TDK Corp.                | www.component.tdk.com |

Note:

Indicate that you are using the MAX77387 when contacting these component suppliers.

Evaluates: MAX77387

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| JU11          |     1 | 2 x 4-pin header, 0.1in centers Sullins PEC36DAAN Digi-Key S2012E-36-ND |
| R1, R2        |     2 | 1.8kΩ ±1% resistors (0402), lead-free                                   |
| R3            |     1 | 10kΩ ±1% resistor (0402), lead-free                                     |
| R5            |     1 | 63.4kΩ ±1% resistor (0402), lead-free                                   |
| R6            |     1 | 100kΩ ±1% resistor (0402), lead-free                                    |
| S1-S4         |     4 | Momentary pushbutton switches Panasonic EVQ-Q2K03W or equivalent        |
| U2            |     1 | Low-voltage level translator Maxim MAX3393EEUD+                         |
| U4, U5        |     2 | Low-voltage level translator Maxim MAX3373EEKA+ (AAKS)                  |
| U6            |     1 | LDO linear regulator Maxim MAX8512EXK+                                  |
| -             |    13 | Shunts (see the Table 1) Digi-Key S9000-ND or equivalent                |
| -             |     1 | PCB: MAX77387 EVALUATION KIT                                            |

│

## MAX77387 Evaluation System

## EV	Kit	Software	Files

| FILE                                                                                    | DESCRIPTION                                |
|-----------------------------------------------------------------------------------------|--------------------------------------------|
| INSTALL.EXE                                                                             | Installs the EV kit files on your computer |
| MAX77387_R#.EXE                                                                         | Application program                        |
| UNINST.INI                                                                              | Uninstalls the EV kit software             |
| www.maximintegrated.com/design/tools/applications/evkit- software/USBDriverHelpR200.PDF | USB driver installation help file          |
| www.maxim-ic.com/tools/evkit/index.cfm?EVKit=869                                        | Windows 7 32-bit driver                    |
| www.maxim-ic.com/tools/evkit/index.cfm?EVKit=8671                                       | Windows 7 64-bit driver                    |

## Quick	Start

## Required	Equipment

- MAX77387	EV	kit
- Variable	6V	power	supply	capable	of	supplying	4A	of output current
- Voltmeter
- User-supplied	Windows	2000/XP,	Windows	Vista,	or Windows 7 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that the jumpers on the EV kit are configured as shown in Table 1.
- 2) Preset the power supply to 3.6V. Turn off the power supply.
- 3) Connect the positive lead of the 3.6V power supply to the IN pad. Connect the negative lead of the 3.6V power supply to the PGND pad.
- 4) Connect the MINIQUSB board to the EV kit
- 5) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX77387Rxx.ZIP.  Save  the  EV  kit  software  to  a temporary folder and uncompress the ZIP file.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

- 6) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program  files  are  copied  and  icons  are created in the Windows Start | Programs menu.
- 7) Connect  the  USB  cable  from  the  PC  to  the  USB receptacle  J1  on  the  MINIQUSB  EV  kit  interface board.  A Building  Driver  Database window  pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges  are  required  to  install  the  USB  device driver on Windows. Refer to the USB Driver Help file at  www.maximintegrated.com/evkitsoftware  if  there are any problems during this step.
- 8) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  to  be C:\ Program Files\MAX77387 (default installation directory) using the Browse button. During device driver installation, Windows may show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB Driver Help file at www.maximintegrated. com/evkitsoftware if there are any problems during this step.
- 9) Turn on the power supply.
- 10)  Start  the  MAX77387  program  by  opening  its  icon in the Start | Programs menu. The EV kit software Main window appears, as shown in Figure 1.

│

Evaluates: MAX77387

## MAX77387 Evaluation System

- 11)  Normal device operation is verified when  the Command Module Connected, Device Connected is displayed at the top-left side of the MAX77387 EV kit main window (Figure 1).
- 12)  Press Read  All ,  now Status1 and Status2 are updated. Keep pressing Read	All until all indicators in Status1 and Status2 are turned off.
- 13)  In  the DCDC  control tab, DCDC\_ILIM  0x17 :  set Peak input current limit to 2.00 A and DCDC softstart threshold to 4.5000 V and press Write .
- 14)  In the DCDC control tab, DCDC\_CNTL2 0x16 :  set DCDC operation mode to 4MHz Forced PWM and press Write .
- 15)  In the DCDC control tab, DCDC\_CNTL1 0x15 :  set Over voltage threshold to 5.4  V , DCDC mode to Fixed output (DCDC\_SS level ) and press Write .
- 16)  Verify that the voltage is 4.5V at the OUT test point (located to the left of C3).
- 17)  In the Flash mode tab, IFLASH1 0x04 : click Enable FLED1 and set FLED1 Flash current to 656.25 mA and press Write .
- 18)  In the Flash mode tab, IFLASH2 0x05 : click Enable FLED2 and set FLED2 Flash current to 656.25 mA and press Write .

## Table	1.	Jumper	Settings

| POSITION   | 1-2                                                | 2-3                                           | DESCRIPTION                                                                                                                                             | DEFAULT   |
|------------|----------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| JU1        | VDD powered by VDD_SW, see Figure 1.               | VDD powered from 1.8V regulator on the EV kit | Sets the control of VDD.                                                                                                                                | 2-3       |
| JU2        | FLASH_STB generated by FLASH_STB_SW, see Figure 1. | FLASH_STB generated using S1                  | FLASH_STB selection. Use pin 2 for direct control.                                                                                                      | 2-3       |
| JU3        | TORCH_EN generated by TORCH_EN_SW, see Figure 1.   | TORCH_EN generated using S2                   | TORCH_EN selection. Use pin 2 for direct control.                                                                                                       | 2-3       |
| JU4        | TX1_MASK generated by TX1_MASK_SW, see Figure 1.   | TX1_MASK generated using S3                   | TX1_MASK selection. Use pin 2 for direct control.                                                                                                       | 2-3       |
| JU5        | TX2_MASK generated by TX2_MASK_SW, see Figure 1.   | TX2_MASK generated using S4                   | TX2_MASK selection. Use pin 2 for direct control.                                                                                                       | 2-3       |
| JU6        | SDApass through                                    | -                                             | Install jumper to allow MINIQUSB to interface with the device. Alternatively connect an external SDAsource to the pin next to the SDA silkscreen label. | Installed |

│

Evaluates: MAX77387

- 19)  In the Flash mode tab , Flash timer 0x0D : set Timer mode to One shot mode and Flash timer to 502.78 msec , then press Write .
- 20)  In the Torch mode tab, ITORCH1 0x06 : click Enable FLED1 , Dimming topology to DAC dimming ,  and DAC mode to 101.56 mA and press Write .
- 21)  In the Torch mode tab, ITORCH2 0x07 : click Enable FLED2 , Dimming topology to DAC dimming ,  and DAC mode to 101.56 mA and press Write .
- 22)  In  the Torch  mode tab, Torch  timer  0x0D :  set Timer mode to One shot mode and Torch timer to 2088.96 msec , then press Write .
- 23)  In  the Control tab , MODE\_SEL 0x08 :  set Trigger torch  mode to Using  TORCH\_EN and Trigger Flash mode to Using FLASH\_STB , and then press Write .
- 24)  In  the DCDC control tab, DCDC\_CNTL 0x15 :  set the DCDC mode to Adaptive not pre-biased ,  and press Write .
- 25)  On  the  EV  kit  press  the  S2  key  TORCH\_EN  and verify that LED D1 and D2 are turning on for 2.088s.
- 26)  On  the  EV  kit  press  the  S1  key  FLASH\_STB  and verify that the LED D1 and D2 are turning on at high brightness for 0.5s.

## MAX77387 Evaluation System

## Table	1.	Jumper	Settings	(continued)

| POSITION   | 1-2                                                                   | 2-3                   | DESCRIPTION                                                                                                                                                         | DEFAULT   |
|------------|-----------------------------------------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| JU7        | SCL pass through                                                      | -                     | Install jumper to allow MINIQUSB to interface with the device. Alternatively connect an external SCL source to the pin next to the SCL silkscreen label.            | Installed |
| JU10       | Can be used to allow powering of single LED by selecting position 1-2 | FLED2 connected to D2 | FLED2 connected to D1                                                                                                                                               | 2-3       |
| JU11       | -                                                                     | -                     | Shunt pins 1-2, 3-4, 5-6, and 7-8. This connects the high-side current regulators to the LEDs (D1, D2). Remove only when the optional LED daughter board is in use. | -         |
| JU12       | NTC pass through                                                      | -                     | Only install jumper if LED daughter board (optional) is not in use. Installing jumper connects RT NTC resistor to NTC pin.                                          | Installed |

## Detailed	Description

## EV	Kit	Software

## User-Interface	Panel

The MAX77387 EV kit includes a MINIQUSB microcontroller command module that provides the I 2 C interface to control the MAX77387 configuration. The main window of the EV kit software (Figure 1) displays seven tabs to set the  configuration: Control , Flash  mode , Torch  mode , MAXFLASH , DCDC  control , TX\_MASK  control ,  and NTC control . After any write or read operation, the related command and data sent are shown in the top-center box of the main window.

In addition to the tabs containing the control of the device, there are four boxes that include the most used controls of  the  IC.  These  are Chip  ID , GPIO control , Status1 , and Status2 .

The Chip ID box is used to identify the device (0x91), and the version Dash and revision of the device.

The GPIO control is used to control the GPIOs of the EV kit. For using these controls the appropriate jumpers must be set for position 1-2.

The Status1 and Status2 contain all the status feedback of the device and can be used to determine the state of the IC on the EV kit.

In addition to these controls, the EV kit software has two keys that allow the software to read/write all the registers of the IC.

## Control	Tab

The Control tab  sheet  (Figure  2)  contains  enable/disable control of the pulldown resistors for TORCH\_EN and FLASH\_STB.

In addition to this, it also selects the trigger for torch and flash events.

│

Evaluates: MAX77387

Evaluates: MAX77387

Figure 1. MAX77387 EV Kit Software Main Window

<!-- image -->

## MAX77387 Evaluation System

Evaluates: MAX77387

Figure 2. MAX77387 EV Kit Software (Control Tab)

<!-- image -->

Figure 3. MAX77387 EV Kit Software (Flash Mode Tab)

<!-- image -->

## MAX77387 Evaluation System

## Flash	Mode	Tab

The Flash mode tab  sheet  (Figure  3)  contains  enable/ disable  control  for  FLED1  and  FLED2  during  a  flash event. In addition, it selects the output current for FLED1 and FLED2. The timer setting for flash  mode  and  flash ramp rates are also selected in this tab.

## Torch	Mode	Tab

The Torch mode tab  sheet  (Figure  4)  contains  enable/ disable  control  for  FLED1  and  FLED2  during  a  torch event. In addition, it selects the output current for FLED1 and FLED2. The timer setting for torch mode and torch ramp rates are also selected in this tab.

## MAXFLASH	Tab

The MAXFLASH tab sheet (Figure 5) contains selection for MAXFLASH trigger level, hysteresis, as well as control for the timing associated with the ramping up/down during a MAXFLASH event.

In addition, the MAXFLASH has two registers that contain the  minimum  setting  for  the  current  regulators  during  a MAXFLASH event, making it possible  to  read  back  the lowest  current  setting.  This  can  be  used  to  determine Evaluates: MAX77387

if  the  event  needs to be retaken due to low output light condition or not.

## DCDC	Control	Tab

The DCDC control tab sheet (Figure 6) contains controls for  the  DC-DC  converter.  This  includes  the  overvoltage for the DC-DC converter, PWM frequency for the current regulator  during  PWM  dimming,  and  DC-DC  mode  of operation for selection of adaptive not prebiased, adaptive prebiased, fixed output voltage mode (set by DCDC\_ SS), and bypass mode. This tab also contains the DC-DC operation mode allowing the selection of fixed frequency, frequency scaling, skip, and FPWM. DCDC\_GAIN is also selectable  in  this  tab  with  more  details  on  this  feature covered in the IC data sheet.

It also contains control for the adaptive headroom, allowing the user to optimize for performance or efficiency.

In addition, it has two readback registers. The output voltage  contains  the  actual  regulation  point  for  the  DC-DC converter, not including load regulation, and the second includes  the  maximum  output  voltage  during  a  flash  or torch event.

Figure 4. MAX77387 EV Kit Software (Torch Mode Tab)

<!-- image -->

│

## MAX77387 Evaluation System

Evaluates: MAX77387

Figure 5. MAX77387 EV Kit Software (MAXFLASH Mode Tab)

<!-- image -->

Figure 6. MAX77387 EV Kit Software (DCDC Control Tab)

<!-- image -->

## MAX77387 Evaluation System

## TX\_MASK	Control	Tab

The TX\_MASK  control tab  sheet  (Figure  7)  contains all  control for TX\_MASK events. The control is split into TX1\_MASK and TX2\_MASK settings, and are identical, where one is when TX\_MASK is triggered by TX1\_MASK and the other is for trigger with TX2\_MASK.

The TX\_MASK tab includes control for enable/disable of the TX\_MASK function, enable/disable of the pulldown on Evaluates: MAX77387

the TX#\_MASK input as well as maximum FLED# output current during a TX\_MASK event.

## NTC	Control	Tab

The NTC control tab sheet (Figure 8) contains all control for NTC function. This includes the enable/disable of the NTC function as well as the threshold for hot events during torch and flash events.

Figure 7. MAX77387 EV Kit Software (TX\_MASK Control Tab)

<!-- image -->

│

## MAX77387 Evaluation System

Evaluates: MAX77387

Figure 8. MAX77387 EV Kit Software (NTC Control Tab)

<!-- image -->

## Sequencing	Programming	of	I 2 C Register

It is critical to program the IC in the correct sequence to ensure proper operation.

Changing any register values other than the DCDC\_ MODE bits in the DCDC\_CNTL1 register during a flash or torch event is not advised. Poll the STATUS2 register to wait for the DONE bit to be asserted before changing values.

Sequencing	can	be	divided	into	three	groups:	flash and	torch	modes,	and	DC-DC	output	voltage.

For flash mode, the following sequence is recommended:

- 1) Clear  any  pending  fault  status  by  reading  the STATUS1  register.  Failing  to  do  this  can  result  in incorrect values written in some of the registers. For example,  failing  to  clear  a  FLED1  or  FLED2  fault clears  the  FLED1\_EN  or  FLED2\_EN,  respectively, disabling the current regula  tors remain disabled until the FLED\_ fault is cleared in the STATUS1 register.
- 2) Ensure  that  flash  mode  is  not  enabled,  by  setting the  FLASH\_MODE  bits  to  000  in  the  MODE\_SEL register. Ensure the DCDC\_MODE bits are 00 in the DCDC\_CNTL1 register.
- 3) If the TX\_MASK function is required for flash operation, write the appropriate values into the TX1\_MASK
4. and  TX2\_MASK  registers.  These  registers  do  not need to be updated if current values are already set.
- 4) Select the ramp rate in the FLASH\_RAMP\_SEL register for ramping up/down the FLED current. These registers do not need to be updated if current values are already set.
- 5) Select the flash timer and mode of operation by writing to the FLASH\_TMR\_CNTL register. This register does  not  need  to  be  updated  if  current  values  are already set.
- 6) If  the  MAXFLASH  function  is  required  for  flash opera  tion,  write  the  appropriate  values  into  the MAXFLASH1  and  MAXFLASH2  registers.  These registers do not need to be updated if current values are already set.
- 7) If  the  NTC  function  is  required  for  flash  operation, write  the  appropriate  values  into  the  NTC  register. This register does not have to be updated if current values are already set.
- 8) Select the settings for the DC-DC converter by writing to the DCDC\_CNTL2 and DCDC\_ILIM registers. These registers do not need to be updated if current values are already set.

│

- 9) Select the settings for the flash mode by writing to the  FLASH1  and  FLASH2  registers.  These  registers do not need to be updated if current values are already set.
- 10)  Select the settings for the DCDC\_CNTL1 register.
- 11) Select the trigger mode for flash event by writing to the FLASH\_MODE bits in the MODE\_SEL register. This register does not need to be updated if current values are already set.

Now the flash event is ready to be triggered based on the value set for the FLASH\_MODE setting.

For	hardware	triggering,	set	FLASH\_MODE	=	001,	010, 011,  or  100.  Flash  event  is  retriggered  based  on  logic input. No update to I 2 C registers is required.

For	 software	 triggering,	 set	 FLASH\_MODE	 =	 101,	 110, or  111.  Flash  event  is  triggered  once  FLASH\_MODE changes from an external trigger to a software trigger. If an additional flash event is required through a software trigger,  the  FLASH\_MODE  needs  to  be  set  to  000  first before writing to the software value (101, 110, or 111) to retrigger a new flash event.

For torch mode, the following sequence is recommended:

- 1) Clear  any  pending  fault  status  by  reading  the STATUS1  register.  Failing  to  do  this  can  result  in incorrect values written to some of the registers. For example,  failing  to  clear  a  FLED1  or  FLED2  fault clears  the  FLED1\_EN  or  FLED2\_EN,  respectively, disabling the current regulators that remain disabled until the FLED\_ fault is cleared in the STATUS1 register. When the FLED\_ fault is cleared, the TORCH\_EN can be set.
- 2) Ensure  that  torch  mode  is  not  enabled  by  setting the TORCH\_MODE to 000 in the MODE\_SEL register.  Ensure  the  DCDC\_MODE bits are 00 in the DCDC\_ CNTL1 register.
- 3) Select  the  ramp  rate  in  the  TORCH\_RAMP\_SEL regis  ter for ramping up/down the torch FLED current. This register does not need to be updated if current values are already set.
- 4) Select the torch timer and mode of operation by writing to the TORCH\_TMR\_CNTL register. This register does  not  need  to  be  updated  if  current  values  are already set.
- 5) If  the  MAXFLASH  function  is  required  for  torch opera  tion,  write  the  appropriate  values  into  the MAXFLASH1  and  MAXFLASH2  registers.  These

registers do not need to be updated if current values are already set.

- 6) If  the  NTC  function  is  required  for  torch  operation, write  the  appropriate  values  into  the  NTC  register. This register does not need to be updated if current values are already set.
- 7) Select the settings for the DC-DC converter by writing to the DCDC\_CNTL2 and DCDC\_ILIM registers. These registers do not need to be updated if current values are already set.
- 8) Select the settings for the torch mode by writing to the  TORCH1  and TORCH2 registers. These  registers do not need to be updated if current values are already set.
- 9) Select the settings for the DCDC\_CNTL1 register.
- 10)  Select the trigger mode for the torch event by writing  to  the  TORCH\_MODE  bits  in  the  MODE\_SEL register. This register does not need to be updated if current values are already set.

Now the torch event is ready to be triggered based on the value set for the TORCH\_MODE setting.

For	hardware	triggering	set	TORCH\_MODE	=	001,	010, 011, or 100. A torch event is retriggered based on logic input. No update to I 2 C registers is required.

For	software	triggering,	set	TORCH\_MODE	=	101,	110, or  111. A  torch  event  is  triggered  once  TORCH\_MODE changes from an external trigger to a software trigger. If an additional torch event is required through a software trigger,  the TORCH\_MODE needs to be set to 000 first before writing to the software value (101, 110, or 111) to retrigger a new torch event.

For DC-DC fixed voltage mode and dropout output voltage, the following sequence is recommended:

- 1) Clear  any  pending  fault  status  by  reading  the STATUS1  register.  Failing  to  do  this  can  result  in incorrect val  ues written in some of the registers.
- 2) Ensure  the  DCDC\_MODE  bits  are  00  in  the DCDC\_ CNTL1 register.
- 3) For fixed output voltage mode, select the settings for the DC-DC converter by writing to the DCDC\_CNTL2 and  DCDC\_ILIM  registers.  These  registers  do  not have to be updated if current values are already set.
- 4) Select the settings for DCDC\_CNTL1 register including  the  DCDC\_MODE  bits.  Writing  anything  other than  00  to  the  DCDC\_MODE  bits  enables  the DC-DC converter.

## MAX77387 Evaluation System

During a torch or flash event, the following optional registers can be read:

The  DCDC\_OUT  register  contains  current  information regarding the output voltage settings. The actual output voltage is slightly lower due to the load regulation of the DC-DC converter. It is not required to read this register during a torch or flash event.

STATUS1  register  contains  current  information  if  any fault condition occurs during the torch or flash event. It is optional to read this register during torch or flash event.

The STATUS2 register contains information regarding any events that may have happened during a torch or flash event.

After a torch or flash event, the following optional register can be read:

The  DCDC\_OUT\_MAX register  contains  the  last  adaptive output voltage to which the converter has regulated the  output.  This  information  can  be  used  to  adjust  the DCDC\_SS setting.

The STATUS1 register contains information regarding any fault condition that may have occurred during a torch or flash event.

The STATUS2 register contains information regarding any events that may have happened during a torch or flash event.

## Evaluates: MAX77387

If  the  MAXFLASH  is  enabled,  the  MAXFLASH3  and MAXFLASH4 registers contain the minimum current setting that the current regulators where regulating to during the MAXFLASH event. The STATUS2 register contains a MAXFLASH bit indicating if  the  MAXFLASH was active during the torch or flash event.

It should be noted that during fixed output voltage mode, the output is regulated to the DCDC\_SS value that was set during the enabling of the converter. The DCDC\_SS value can be updated when the converter is enabled, but this does not impact the output voltage.

To change the output voltage, first power down the DC-DC converter	(DCD\_MODE	=	00),	then	update	the	DCDC\_SS value,	and	then	power	it	up	again	(DCDC\_MODE	=	10).

## Simple I 2 C/SMBus	Commands

There  are  two  methods  for  communicating  with  the MAX77387:  through  the  normal  user-interface  panel (Figure  1)  or  through  the  SMBus  commands  available by pressing the Debug button in the main window. The Maxim Command Module Interface window (Figure 9) pops up and includes a 2-wire interface tab that allows for execution of the SMBusSendByte() command. Refer to the MAX77387 IC data sheet for command-byte format. The SMBus dialog boxes accept numeric data in binary, decimal,  or  hexadecimal.  Hexadecimal  numbers  should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 9 for an illustration of this tool.

Figure 9. Maxim Command Interface Window

<!-- image -->

│

## MAX77387 Evaluation System

## Schematics	and	PCB	Layout

Figure 10. MAX77387 EV Kit Schematic

<!-- image -->

Evaluates: MAX77387

│

Figure 11. MAX77387 EV Kit Component Placement Guide-Top Layer

<!-- image -->

│

Figure 12. MAX77387 EV Kit Component Placement Guide-Bottom Layer

<!-- image -->

│

## MAX77387 Evaluation System

Figure 13. MAX77387 EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 14. MAX77387 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 15. MAX77387 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 16. MAX77387 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77387 Evaluation System

## Ordering	Information

| PART           | TYPE      |
|----------------|-----------|
| MAX77387EVSYS# | EV System |

#Denotes RoHS compliant.

Evaluates: MAX77387

## MAX77387 Evaluation System

## Revision	History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX77387