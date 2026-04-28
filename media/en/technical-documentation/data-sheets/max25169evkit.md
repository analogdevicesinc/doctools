<!-- lastmod 2023-02-24 -->
<!-- image -->

## Evaluates: MAX25069, MAX25169

## General Description

The MAX25169 evaluation kit (EV kit) demonstrates the MAX25069/MAX25169  IC,  which  is  a  highly  integrated power  supply  plus  LED  backlight  driver  for  automotive TFT-LCD  applications.  The  EV  kit  is  a  fully  assembled and tested surface-mount PCB that provides a complete power-management solution for automotive displays. The EV  kit  demonstrates  one  current-mode  boost  converter with  sequencing  switch  (HVINP-AVDD),  one  current mode inverting regulator (NAVDD), positive and negative gate-voltage  controllers  (VG ON ),  and  (VG OFF ),  and  a boost converter that powers a six-string LED driver.

The EV kit can be configured to operate in a stand-alone mode or an I 2 C mode.

The TFT-LCD Power Section of the EV kit operates from a 2.65V to 5.5V DC supply voltage. The BOOST regulator  (HVINP)  is  configured  in  bipolar  Mode  from  4.9V  to 10.5V or in unipolar Mode from 11.7V to 18V output that provides up to 300mA. The inverting regulator (NAVDD) generates  a  negative  output  that  tracks  the  voltage  of the  boost  converter  and  provides  up  to  200mA.  The gate-driver  power  supplies  consist  of  regulated  charge pumps that generate in Bipolar Mode from 8.4V to 21V or  in  Unipolar  Mode  from  12.6V  to  31.5V  (VG ON ),  and (VGOFF ) from -4V to -18V. They can deliver up to 15mA each, depending on the AVDD setting.

The HB  LED  Driver  Section demonstrates  a  step-up DC-DC pre-regulator  followed  by  six  channels  of  linear current  sinks.  The  step-up  pre-regulator  switches  at 2.2MHz or 400kHz and operates as a current-mode con -trolled regulator capable of providing up to 900mA for the current sinks. Each LED channel can operate up to 36V and provides up to 150mA.

The LED driver portion of the EV kit operates from a DC supply voltage of 3V up to the High-Brightness (HB) LED string-forward voltage. The EV kit also demonstrates the IC's  other  features,  such  as  adjustable  output  voltage, extensive  diagnostics  to  aid  in  fulfilling  ASIL-B  safe -ty  level,  thermal  shutdown,  phase-shifted  pulse-widthmodulation (PWM) dimming, etc.

Dimming can be performed either externally using a PWM signal  applied  to  the  DIM  pad  or  internally  by  programming the desired dimming frequency and individual duty cycle  through  I 2 C.  The  hybrid  dimming  feature  can  be enabled through a register bit to reduce EMI.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Click here to ask an associate for production status of specific part numbers.

## MAX25169 Evaluation Kit

The  EV  kit  provides  an  I 2 C  interface  that  can  operate  in conjunction with the PICO BOARD MAX32625 or a thirdparty I 2 C master such as a general-purpose microcontroller. The EV kit also includes Windows ® -compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

## Features and Benefits

- Demonstrates Robustness of MAX25069 or MAX25169 ASIL Version
- 2.65V to 5.5V Input Range for TFT-LCD Power Section
- Wide 4.5V to 36V Input Range for LED Driver Section
- Selectable Switching Frequency (2.1MHz or 420kHz) with Spread-Spectrum Option on TFT Power Section.
- 2.2MHz or 400kHz Resistor-Programmable Switching Frequency with Spread-Spectrum Option on LED Driver Section with Six 150mA LED drivers.
- Synchronization input for 400kHz to 2.2MHz Switching Frequency
- Default Output Voltages (Stand-Alone Mode)
- 6.8V Output at 200mA (Boost Converter)
- -6.8V Output at -200mA (Inverting Regulator)
- 12.8V Output at 15mA (Positive-Charge Pump Regulator)
- -9.5V Output at 15mA (Negative-Charge Pump Regulator)
- On-Board Programmability for Other Values in the Available Set.
- Phase-Shift Dimming Option
- Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- Demonstrates Wide Dimming Ratio
- Demonstrates Hybrid Dimming for Better EMI and Acoustic Performance and Higher Dimming Ratio
- Demonstrates Fade In/Out for Smooth Brightness Transition
- Designed to Show Thermal Foldback Function
- I 2 C Programmability
- Dedicated GUI
- Full Sequencing Flexibility
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-100947; Rev 0; 9/22

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. ©  2022  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and  registered  trademarks  are  the  property  of  their  respective  owners.

## MAX25169 EV Kit Files

| FILE                    | DESCRIPTION           |
|-------------------------|-----------------------|
| MAX25169GUISetupV01.exe | Windows GUI Installer |

## MAX25169 EV Kit Board Photo

<!-- image -->

Evaluates: MAX25069, MAX25169

│

## MAX25169 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25169 EV kit
- 2.65V to 5.5V, 3A DC power supply
- 4.5V to 36V, 10A DC power supply
- Digital voltmeters (DVM)
- Six series-connected HB LED strings (10 LEDs each) rated to no less than 150mA
- Current probe to measure the HB LED current
- USB cable
- Windows ® -compatible PC with a spare USB port

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify the board operation.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows ®  operating system.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

## Stand-Alone Mode

- 1) Verify that the jumper J1 is closed (DS1 green LED connected).
- 2) Verify that the jumper J2 has a shunt installed across pins 1-2 (ADIM SEL).
- 3) Ensure that J3 (SDA PU) has no jumper installed.
- 4) Verify that the jumper J4 has a shunt installed across pins 1-2 (TEMP IC pin connected to V18).
- 5) Verify that the jumper J5 (ADD\_SEL) has a shunt installed across pins 2-3 (ADD pin connected to GND).
- 6) Ensure that the J8 (VPROG SUP) has no jumper installed.
- 7) Verify that the jumper J12 (EN) has a shunt installed across pins 1-2 (Pullup).
- 8) Ensure that the J13 (VPROG) has no jumper installed.
- 9) Verify that the jumper J17 (MOD\_SEL) has a shunt installed  across  pins  1-2  (MODE  pin  connected  to V18).
- 10)  Verify that the jumper J18 (SYNC) is closed (2.2MHz switching frequency selected).
- 11)  Verify that the jumper J19 is closed (DS2 green LED connected).
- 12)  Ensure that J20 (SCL PU) has no jumper installed.
- 13)  Ensure that J21 (NTC) has no jumper installed.
- 14) Verify  that  the  jumper  the  J22  is  closed  (PFO  pin Pullup connected to DVDD).
- 15)  Verify  that  the  jumper  J23  is  closed  (POWER  LED short detection enabled).
- 16) Verify that the jumper J24 is closed (FLT pin Pullup connected to DVDD).
- 17)  Verify  that  the  jumper  JMP12  (DVDD  SEL)  has  a shunt installed across pins 1-2 (DVDD connected to VIN ).
- 18) Verify  that  the  jumpers  JMP2,  JMP3,  JMP4,  JMP5, JMP6, and JMP7 have shunts installed across pins 1-2  (bleed  resistors  connected,  all  current  sinks enabled).
- 19)  Connect  the  positive  terminal  of  the  2.65V  to  5.5V, 3A  DC  power  supply  to  the  TFT\_POWER\_IN  pad. Connect the negative terminal of the power supply to a GND pad.
- 20) Connect the positive terminal of the 4.5V to 36V, 10A DC-DC power supply to the BATT IN pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 21)  Connect a DVM across the OUT1 and GND pads.
- 22)  Connect a DVM across one of the TFT output pads (AVDD, NAVDD, VG ON , VG OFF ) and one GND pad.
- 23)  Connect  the  six  LED  strings  from  BOOST  to  the OUT1, OUT2, OUT3, OUT4, OUT5, and OUT6 pads.
- 24) Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 25)  Turn on the 2.8V to 5.5V, 3A DC power supply, and set it to 3.3V. The green LED (DS1) should be on at this point.
- 26) Turn on the 4.5V to 36V, 10A DC power supply, and set it to 12V. The green LED (DS2) should be on, and the LED strings should be on at this point.
- 27)  Verify the presence of the following default TFT voltages: AVDD = 6.8V   NAVDD = -6.8V; VG ON  = 12.8V; VGOFF = -9.5V.
- 28)  Measure the voltage from each of the OUT\_ to PGND and verify the lowest voltage is approximately 0.7V.
- 29)  Measure the LED current using the current probe and verify all the channels.
- 30) Verify that the red LED (DS4) is off.

## MAX25169 Evaluation Kit

## I 2 C Mode

- 1) Visit www.maximintegrated/evkitsoftware to download the latest version of the EV kit software, MAX25169GUISetupVxx.exe
- 2) Install the EV kit software (GUI) on your PC by running the MAX25169 GUISetupVxx.exe program. The EV kit software application will be installed together with the required PICO drivers.
- 3) Verify that the jumper J1 is closed (DS1 green LED connected).
- 4) Verify that the jumper J2 has a shunt installed across pins 2-3 (SDA SEL).
- 5) Verify that the jumper J3 (SDA PU) is closed (SDA Pullup connected to DVDD).
- 6) Verify that the jumper J4 has a shunt installed across pins 1-2 (TEMP IC pin connected to V18).
- 7) Verify that the jumper J5 ( ADD\_SEL) has a shunt installed across pins 2-3 (ADD pin connected to GND). The configuration for this I2C Address is 0x8C.
- 8) Verify that the jumper J8 (VPROG SUP) has a shunt installed across pins 2-3 (VPROG Boost powered by VIN ).
- 9) Verify that the jumper J12 (EN) has a shunt installed across pins 1-2 (Pullup).
- 10)  Verify that the jumper J13 (VPROG) is closed.
- 11)  Verify that the jumper J17 (MOD\_SEL) has a shunt installed across pins 2-3 (MODE pin connected to GND).
- 12)  Verify that the jumper J18 (SYNC) is closed (2.2MHz switching frequency selected).
- 13)  Verify that the jumper J19 is closed (DS2 green LED connected).
- 14) Verify that the jumper J20 (SCL PU) is closed (SCL Pull up connected to DVDD).
- 15)  Ensure that J21 (NTC) has no jumper installed.
- 16)  Verify that the jumper J22 is closed (PFO pin Pullup connected to DVDD).
- 17)  Verify that the jumper J23 is closed (POWER LED short detection enable).
- 18) Verify that the jumper J24 is closed (FLT pin Pullup connected to DVDD).

## Evaluates: MAX25069, MAX25169

- 19)  Verify that the jumper JMP12 (DVDD SEL) has a shunt installed across pins 1-3 (DVDD connected to 3V3PICO). Pico Board Maximum Supply Voltage is 3.6V. DVDD should be connected to 3V3PICO if TFT POWER IN is 5V.
- 20) Verify that the jumpers JMP2, JMP3, JMP4, JMP5, JMP6, and JMP7 have shunts installed across pins 1-2 (bleed resistors connected, all current sinks enabled).
- 21)  Connect the USB cable between the PC and the Pico Board.
- 22)  Connect the positive terminal of the 2.65V to 5.5V, 3A DC power supply to the TFT\_POWER\_IN pad. Connect the negative terminal of the power supply to a GND pad.
- 23) Connect the positive terminal of the 4.5V to 36V, 10A DC-DC power supply to the BATT IN pad. Connect the negative terminal of the power supply to a PGND PCB pad.
- 24) Connect a DVM across the OUT1 and GND pads.
- 25)  Connect a DVM across one of the TFT output pads (AVDD, NAVDD, VG ON , VG OFF ) and one GND pad.
- 26)  Connect the six LED strings from BOOST to the OUT1, OUT2, OUT3, OUT4, OUT5, and OUT6 pads.
- 27)  Clip the current probe across the channel 1 HB LED+ wire to measure the LED current.
- 28)  Connect the USB cable between the PC and the Pico Board.
- 29)  Turn on the 2.8V to 5.5V, 3A DC power supply, and set it to 3.3V. The green LED (DS1) should be on.
- 30) Turn on the 4.5V to 36V, 10A DC power supply, and set it to 12V. The green LED (DS2) should be on.
- 31)  Launch the EV kit software application.
- 32)  Flag Dev Enable checkbox to ON
- 33)  From the EV kit software toolbar, select Device  Scan for Address. The GUI scans the I 2 C bus for available slave addresses on the bus and selects the first one (in this case, the MAX25169 I 2 C address with J5 settings is 8CH). Click OK once the MAX25169 I 2 C address has been found.

## MAX25169 Evaluation Kit

- 34) Verify that the status bar in the bottom-right corner of the GUI displays EV Kit: Connected , See Figure 1 .
- 35)  In the General Settings group box click the START button.
- 36)  In the indicators SEQ\_ON and FLTB pin status should be green.
- 37)  For more details on how to use the GUI and all the features available, click on the GUI Help menu item.
- 38)  Verify the presence of the following default TFT voltages: AVDD = 6.8V, NAVDD = - 6.8V, VG ON  = 12.8V, and VG OFF  = -9.5V.
- 39)  Measure the voltage from each of the OUT\_ to PGND and verify the lowest voltage is approximately 0.7V.
- 40) Measure the LED current using the current probe and verify all the channels.
- 41)  Verify that the red LED (DS4) is off.

## Evaluates: MAX25069, MAX25169

Figure 1. MAX25169 Evaluation Kit Software (GUI)

<!-- image -->

## Detailed Description of Hardware

The  MAX25169  EV  kit  consists  of  two  sections  with separate power supply inputs.

The TFT-LCD Power Section operates from a DC supply voltage of 2.65V up to 5.5V.

The HB LED Driver Section operates from a DC supply of 4.5V up to 36V.

## TFT-LCD Power Section

The EV kit TFT-LCD power section feature two sourcedriver  power  supplies  (AVDD  and  NAVDD  accessible through  the  AVDD  and  NAVDD  PCB  pads  on  the  EV kit)  and  the  two  gate-driver  power  supplies  (VG ON   and VGOFF accessible through the VG ON  and VG OFF  PCB pads on the EV kit).

The source-driver  power  supplies  consist  of  a  synchronous current-mode boost converter and a current mode inverting  buck-boost  converter  that  switch  at  2.1MHz  or 420kHz. (See Table 1 -4 ).

The boost converter (AVDD) is configured in bipolar Mode from 4.9V to 10.5V or in unipolar Mode from 11.7V to 18V output that provides up to 300mA. The default setting is 6.8V (Bipolar Mode). The AVDD voltages can be regulat-

## Table 1. Boost Converter Inductor

| f SW   | HVINP/AVDD   |
|--------|--------------|
| 2.1MHz | 2.2µH*       |
| 420kHz | 10μH         |

* Default configuration.

## Table 2. Boost Converter Capacitors

| f SW   | HVINP        |
|--------|--------------|
| 2.1MHz | 0.1µF-10µF*  |
| 420kHz | 0.1µF-2x10µF |

* Default configuration.

## Table 3. Inverting regulator Inductor

| f SW   | NAVDD   |
|--------|---------|
| 2.1MHz | 2.2µH*  |
| 420kHz | 10μH    |

* Default configuration.

ed by I 2 C in 0.1V steps. The inverting regulator (NAVDD) generates a negative output that tracks the voltage of the boost converter and provides up to 200mA.

Test  points  are  also  provided  for  easy  access  to  the device's V18 regulator output, ADD and MODE pins.

The positive gate-driver power supplies (VG ON ) consist of regulated charge pumps that generate in Bipolar Mode from 8.4V to 21V or in Unipolar Mode from 12.6V to 31.5V The default setting is 12.8V. (See Table 5 ).

The negative gate-driver power supplies (VG OFF ) consist of regulated charge pumps that generate from -4V to -18V (VGOFF). The default setting is -9.5V. (See Table 5 ).

The VGON voltages can be regulated by I 2 C with  0.2V steps in Bipolar Mode and 0.3V steps in Unipolar Mode.

The VGOFF voltages can be regulated by I 2 C in 0.25V steps.

## TFT Power LED Enable (J1)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. (See Table 6 ).

## Table 4. Inverting Capacitors

| f SW   | NAVDD        |
|--------|--------------|
| 2.1MHz | 0.1µF-10µF*  |
| 420kHz | 0.1µF-2x10µF |

* Default configuration.

## Table 5. Flying Capacitors

| f SW   | CFLY   |
|--------|--------|
| 2.1MHz | 22nF*  |
| 420kHz | 100nF  |

* Default configuration.

## Table 6. Jumper Functions (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

* Default position.

## SDA/ADIM SEL (J2)

The  SDA/ADIM  pin  has  a  double  functionality  I 2 C  I/O Data or Analog Dimming input in Stand Alone. Place the jumper  across  pins  2-3  on  J12  when  the  device  is  on I 2 C  Mode.  In  stand-alone  mode,  this  pin  is  the  analog dimming input (if unused, connect to GND) (see Table 7 ).

## SDA Voltages (J3)

SDA voltage supplies can be selected between the V IN and  3V3PICO  (see Table  15 ).  Alternatively,  the  user can force an external voltage as a digital reference (see Table 8 ).

## SCL Voltages (J20)

SCL  voltage  supplies  can  be  selected  between  the VIN ,  3V3PICO  (see Table  15 ).  Alternatively,  the  user can  force  an  external  voltage  as  digital  reference.  (see Table 9 ).

## Table 7. Jumper Functions (J2)

| SHUNT POSITION   | SDA/ADIM SEL   | OPERATIVE MODE   |
|------------------|----------------|------------------|
| 1-2              | ADIM           | Stand Alone      |
| 2-3*             | I 2 C I/O Data | I 2 C Mode       |

* Default position.

## Table 8. Jumper Functions SDA Pull up (J3)

| SHUNT POSITION   | DS1 POWER LED                 |
|------------------|-------------------------------|
| 1-2*             | On-board 1.5kΩ pullup to DVDD |
| Open             | Externally provided           |

* Default position.

## Table 9. Jumper Functions SCL Pull up (J20)

| SHUNT POSITION   | DS1 POWER LED                 |
|------------------|-------------------------------|
| 1-2*             | On-board 1.5kΩ pullup to DVDD |
| Open             | Externally provided           |

* Default position.

## Table 10. MAX25169 Jumper Functions AVDD (J5) and MODE (J17)

| ADD   | MODE   | ADDRESS   | OPERATIVE MODE   |
|-------|--------|-----------|------------------|
| 1-2   | 1-2    | 0X8E      | I2C Read Only    |
| 1-2   | 2-3    | 0X8E      | I2C Read Write   |
| 2-3   | 2-3    | 0X8C      | I2C Read Write   |
| 2-3   | 1-2    |           | Stand Alone      |

Evaluates: MAX25069, MAX25169

## ADD SEL (J5) and MODE SEL (J17)

The  operation  mode  of  the  device  is  controlled  by  the ADD and MODE pins as shown in Table 10 for MAX25169 and Table  11 for  MAX25069.  The  IC's  7-bit  I 2 C  slave address  can  be  selected  between  three  options  using J5  and  J17. Additionally,  the  stand-alone  mode  can  be selected with this jumper.

## NVM Programming (J8, J13)

The EV kit is equipped with a low voltage boost regulator able to provide the V PROG  voltage (8.5V) needed for NVM programmability.  The  V PROG   is  controlled  by  the GUI and enabled only during the burning procedure. In order to use this feature, J13 jumper must be installed and J8 can be used to select the boost circuitry input voltage (see Table 12 and 13 ).

To store the contents of registers 0x07-0x15 to non-volatile memory a voltage source of 8.5V should be connected to the V PROG  pin.

## Table 11. MAX25069 Jumper Functions AVDD (J5) and MODE (J17)

| ADD   | MODE   | ADDRESS   | OPERATIVE MODE   |
|-------|--------|-----------|------------------|
| 1-2   | 1-2    | 0X9E      | I2C Read Only    |
| 1-2   | 2-3    | 0X9E      | I2C Read Write   |
| 2-3   | 2-3    | 0X9C      | I2C Read Write   |
| 2-3   | 1-2    |           | Stand Alone      |

## Table 12. Jumper Functions VPROG Supply (J8)

| SHUNT POSITION   | V PROG BOOST INPUT SUPPLY   |
|------------------|-----------------------------|
| 1-2              | EXT_DVDD                    |
| 2-3*             | V IN                        |

* Default position.

## Table 13. Jumper Functions VPROG Supply (J13)

| SHUNT POSITION   | V PROG BOOST OUTPUT SUPPLY   |
|------------------|------------------------------|
| 1-2*             | +8.5V power V PROG pin       |

* Default position.

│

## Enable EN (J12)

The EV kit features an enable input that can be used in stand-alone mode to enable/disable the device and place it in shutdown mode.

To  enable  the  EV  kit  whenever  power  is  applied  to  the TFT\_POWER\_INPUT PCB pad, place the jumper across pins  1-2  on  jumper  J12.  To  enable  the  EV  kit  using  an external enable signal, place the jumper across pins 1-2 on J12 and apply a logic signal on the EN PCB input pad on the EV kit.

Place the jumper across pins 2-3 on J12 or left open until the device is in shutdown mode. (see Table 14 )

## Digital Domain Voltage DVDD SEL (JMP12).

The  EV  kit  exposes  open-drain  digital  signals  (EN, FLT, PFO, SDA, and SCL) that are pulled up to what is referred to as the digital domain voltage. Digital domain voltage can be selected between the EV kit input voltage (V IN ), 3V3PICO from PICO Board, or an external voltage EXT\_DVDD.

The  PICO  Boards  GPIOs  are  not  5V  Voltage  tolerant. Use 3V3PICO Board or  EXT\_DVDD supply to 3.3V when TFT\_POWER\_IN is greater than 3.3V (see Table 15 ).

## PFO Voltage (J22)

PFO voltage supplies can be selected between the V IN and  3V3PICO  (see Table  15 ).  Alternatively,  the  user

## Table 14. Jumper Functions (J12)

| SHUNT POSITION   | EN PIN                                | OPERATIVE MODE   |
|------------------|---------------------------------------|------------------|
| 1-2*             | Connected to DVDD with 10kΩ pull up   | Enabled device   |
| 2-3              | Connected to GND with 10kΩ pull down  | Disable device   |
| Open             | Connected to 100kΩ internal pull down | Disable device   |

* Default position.

## Table 15. Jumper Functions DVDD SEL (JMP12)

| SHUNT POSITION   | EN PIN   |
|------------------|----------|
| 1-2              | V IN     |
| 1-3*             | 3V3PICO  |
| 1-4              | EXT_DVDD |

* Default position.

can  force  an  external  voltage  as  a  digital  reference (see Table 16 ).

PFO  is  an  open-drain  output  which  indicates  that  the voltage on the IN pin is below a threshold setting in the register PFO Output Falling.

## Fault LED Enable (J22)

A red LED (DS4) is used to indicate a fault condition. The LED can be disconnected from the power supply, allowing precise current-consumption evaluation (see Table 17 ).

## FLT Voltage (J24)

Allows  the  fault  signal  FLTB  to  be  sent  to  GUI  or  an external device (see Table 18 ).

## HB LED Driver Section

The MAX25169 EV kit LED Driver section demonstrates the  HB  LED  drivers  with  an  integrated  step-up  DC-DC pre-regulator followed by six linear current sinks to drive up to six strings of LEDs. The pre-regulator switches at 2.2MHz (or at 400kHz) and operates as a current-modecontrolled regulator, providing up to 900mA for the linear current sinks as well as overvoltage protection.

## Table 16. Jumper Functions PFO (J22)

| SHUNT POSITION   | PFO VOLTAGE PULL UP           |
|------------------|-------------------------------|
| 1-2*             | On-board 1.5kΩ pullup to DVDD |
| Open             | Externally provided           |

* Default position.

## Table 17. Jumper Functions Fault LED (J23)

| SHUNT POSITION   | DS4 FAULT LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

* Default position.

## Table 18. Jumper Functions Fault LED (J24)

| SHUNT POSITION   | DS4 FAULT LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | External Signal |

* Default position.

│

## MAX25169 Evaluation Kit

The  cycle-by-cycle  current  limit  is  set  by  the  feedback loop while resistors R44 and R45 set the overvoltage pro -tection  voltage  to  36V.  The  pre-regulator  power  section consists of external mosfet Q4, inductor L7, and switch -ing diode D10. The EV kit circuit operates from a 3V DC supply voltage up to the HB LED forward string voltage.

Each  of  the  six  linear  current  sinks  (OUT1-OUT6)  can operate at up to 36V sinking up to 150mA per channel. The six channels' linear current sinks are configurable for 23mA to 150mA  by writing to I 2 C registers.

Each of the six channels can be disabled independently either by writing to I 2 C registers or by acting on jumpers JMP2, JMP3, JMP4, JMP5, JMP6, and JMP7 (see Table 17 ),  which are used to disable outputs selectively when the HB LED string is not connected.

The  EV  kit  features  PCB  pads  to  facilitate  connecting HB  LED  strings  for  evaluation.  The  BOOST  PCB  pads provide connections for connecting each HB LED string's anode  to  the  DC-DC  pre-regulator  output.  The  OUT1OUT6 PCB pads provide connections for connecting each HB LED string's cathode to the respective current sink. Capacitors  C31,  C76,  C78,  C82,  and  C84  are  optional and can be included in the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting  cables  during  lab  evaluation.  These  capacitors are not required if the connection between the LED driver and the HB LEDs is a low-inductance connection.

A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs.

Test points are also provided for easy access to INPUT, NGATE pins, and the NTC sensor non-grounded terminal.

## Table 19. Selecting OUT\_ Channels Operating State (JMP3, JMP4, JMP5, JMP6, and JMP7)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                                                  |
|--------|----------|------------------|----------------------------------------------------------------------------------------------------|
| OUT1   | JMP3     | 1-2*             | Channel 1 operational; connect an HB LED string** between VOUT and OUT1. Bleed resistor connected. |
| OUT1   | JMP3     | 1-3              | Channel 1 not used. OUT1 current sink disabled.                                                    |
| OUT1   | JMP3     | 1-4              | Channel 1 shorted to GND to simulate a fault.                                                      |
| OUT2   | JMP4     | 1-2*             | Channel 2 operational; connect an HB LED string** between VOUT and OUT2. Bleed resistor connected. |
| OUT2   | JMP4     | 1-3              | Channel 2 not used. OUT2 current sink disabled.                                                    |
| OUT2   | JMP4     | 1-4              | Channel 2 shorted to GND to simulate a fault.                                                      |
| OUT3   | JMP2     | 1-2*             | Channel 3 operational; connect an HB LED string** between VOUT and OUT3. Bleed resistor connected. |
| OUT3   | JMP2     | 1-3              | Channel 3 not used. OUT3 current sink disabled.                                                    |
| OUT3   | JMP2     | 1-4              | Channel 3 shorted to GND to simulate a fault.                                                      |
| OUT4   | JMP5     | 1-2*             | Channel 4 operational; connect an HB LED string** between VOUT and OUT4. Bleed resistor connected. |
| OUT4   | JMP5     | 1-3              | Channel 4 not used. OUT4 current sink disabled.                                                    |
| OUT4   | JMP5     | 1-4              | Channel 4 shorted to GND to simulate a fault.                                                      |
| OUT5   | JMP7     | 1-2*             | Channel 5 operational; connect an HB LED string** between VOUT and OUT5. Bleed resistor connected. |
| OUT5   | JMP7     | 1-3              | Channel 5 not used. OUT5 current sink disabled.                                                    |
| OUT5   | JMP7     | 1-4              | Channel 5 shorted to GND to simulate a fault.                                                      |
| OUT6   | JMP6     | 1-2*             | Channel 6 operational; connect an HB LED string** between VOUT and OUT6. Bleed resistor connected. |
| OUT6   | JMP6     | 1-3              | Channel 6 not used. OUT6 current sink disabled.                                                    |
| OUT6   | JMP6     | 1-4              | Channel 6 shorted to GND to simulate a fault.                                                      |

## Switching Frequency

Jumper J18 is used to set the switching frequency to either 2.2MHz  or  400kHz.  When  J18  is  closed,  the  switching frequency is set to 2.2MHz. When J18 is open, the switching frequency is nominally 400kHz.

The EV kit is optimized for 2.2MHz switching operation by default. When selecting a switching frequency of 400kHz the boost inductor should be changed to maintain acceptable  efficiency  (see Table  20 ).  Other  component  value adjustments may be needed.

The internal oscillator frequency is programmable between  400kHz  and  2.2MHz  using  a  timing  resistor (R RT ) connected from the RT pin to GND. Use the following equation to calculate the value of R RT  for the desired switching frequency (f SW ).

<!-- formula-not-decoded -->

To  synchronize  the  oscillator  with  an  external  clock AC-couple the external clock to the RT input. The value of the capacitor used for AC-coupling is C SYNC  = 10pF and the duty cycle of the external clock should be 50%.

## Table 20. L7 Boost Inductor

| f SW   | BOOST INDUCTOR   |
|--------|------------------|
| 2.2MHz | 4.7µH*           |
| 400kHz | 10µH             |

* Default position.

## Table 21. Switching Frequency (J18)

| SHUNT POSITION   | RT PIN                                                | EV KIT OPERATION           |
|------------------|-------------------------------------------------------|----------------------------|
| Closed*          | RT connected to GND through 64.9kΩ // 14.3kΩ resistor | 2.2MHz switching frequency |
| Open             | RT connected to GND through 64.9kΩ resistor           | 400kHz switching frequency |

* Default position.

The  spread-spectrum  feature  can  be  enabled/disabled by  checking/unchecking  BL  SS  Disable.  Two  different spread-spectrum levels can be selected ±6% or ±3% by checking/unchecking Low Spread Spectrum.

## Battery Power LED Enable (J19)

A  green  LED  (DS2)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 22 for shunt positions.

## Temperature Foldback

The EV kit is designed to evaluate the temperature foldback.  The  NTC  temperature  sensor  RT1  is  connected between GND and R4 connected to the V18 supply, with a further resistor R17 connected from the junction of the NTC a to the TEMP pin.

When the  temperature  reaches  temperature  T1  (set  by R4) the current in the LEDs is reduced linearly. The slope of the current reduction is set by R17. To implement this functionality  Jumper  J4  should  be  connected  between pins 2-3. See Table 23 [Jumper Functions (J4)] for shunt positions.

## Table 22. Jumper Functions (J19)

| SHUNT POSITION   | DS2 POWER LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

* Default position.

## Table 23. Jumper Functions (J4)

| SHUNT POSITION   | TEMPERATURE FOLDBACK   |
|------------------|------------------------|
| 1-2              | Disable                |
| 2-3              | Enable                 |

## MAX25169 Evaluation Kit

## MAX32625PICO# PICO Board

The MAX25169 EV kit uses a MAX32625PICO# for translating commands from the GUI via a USB cable plugged into a USB port into I2C read and write commands for the MAX25169-MAX25069. The MAX32625 PICO board is soldered directly on the EV kit.

The operating temperature range of the MAX32625PICO# is limited to -30°C and +85°C.

To evaluate the EV kit to temperatures more than 85°C, it is mandatory to remove the PICO board from the EV kit and connect the interface I 2 C to the J16 connector.

The  MAX32625PICO  board  is  loaded  with  the  proper firmware to run the GUI. However, if a different firmware is desired, new firmware can be loaded by following these steps:

- 1) Disconnect the MAX32625PICO board from the computer and the EV kit.
- 2) Press and hold the small button on the MAX32625PICO board.  Continue  to  hold  the  button  pressed  in and  plug  the  MAX32625PICO  board  into  the  computer by the USB cable. Plugging the PICO board into the computer with the button pressed will erase any previous firmware which was installed.
- 3) New driver Maintenance shows up on the computer. Release the button at this time.
- 4) Drag and drop the firmware binary file to the mainte -nance driver folder. After a few seconds, the indicator light on the MAX32625PICO board should change from red to green ,  indicating that the new firmware was successfully loaded. This step assumes the USB port on your computer is capable of passing data out of the computer to a peripheral device.
- 5) Now disconnect the MAX32625PICO board from the computer. The firmware update is completed.

Figure 2. MAX32625 PICO BOARD

<!-- image -->

Figure 3. Maintenance Driver

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25169EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX25169 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                                                       | DNI/DNP   |   QTY | MFG PART #                                                                          | MANUFACTURER                           | VALUE          | DESCRIPTION                                                                                                          |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------|----------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------|
|      1 | 1V8PICO, 3V3PICO, 5V0PICO, ADD, INPUT, MODE, NGATE, NTC, V18                                                                                                                  | -         |     9 | 5005                                                                                | KEYSTONE                               | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | ADIM, AVDD, BATT_IN, DIM, EN, EXT_DVDD, FLT, GND1-GND13, HVINP, NAVDD, OUT1-OUT6, PFO, SCL, SDA, SYNC, TFT_POWER_IN, VBOOST, VBOOST1, VBOOST2, VGOFF, VGON, VIN, VPROG, VTEMP | -         |    41 | 9020 BUSS                                                                           | WEICO WIRE                             | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                             |
|      3 | C1-C3, C11, C54, C73                                                                                                                                                          | -         |     6 | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT                                 | SAMSUNG; MURATA; CAL-CHIP              | 10UF           | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                        |
|      4 | C4, C5, C96, C97                                                                                                                                                              | -         |     4 | GCM31CR71A226KE02                                                                   | MURATA                                 | 22UF           | CAP; SMT (1206); 22UF; 10%; 10V; X7R; CERAMIC                                                                        |
|      5 | C6, C47, C52                                                                                                                                                                  | -         |     3 | C0603C100K1GAC                                                                      | KEMET                                  | 10PF           | CAP; SMT (0603); 10PF; 10%; 100V; C0G; CERAMIC                                                                       |
|      6 | C8                                                                                                                                                                            | -         |     1 | C0603H101J5GAC                                                                      | KEMET                                  | 100PF          | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                                                        |
|      7 | C9, C12, C15, C17, C18, C35, C50, C53, C55, C56, C61, C68, C72                                                                                                                | -         |    13 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO; MURATA; TAIYO YUDEN; AVX;MURATA | 0.1UF          | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                      |
|      8 | C13                                                                                                                                                                           | -         |     1 | GRT155R70J105KE01                                                                   | MURATA                                 | 1UF            | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC                                                                        |
|      9 | C14, C28, C33, C39, C45, C98, C99                                                                                                                                             | -         |     7 | UMK107AB7105KA; CC0603KRX7R9BB105                                                   | TAIYO YUDEN; YAGEO                     | 1UF            | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                         |
|     10 | C22                                                                                                                                                                           | -         |     1 | EEE-TG1H470UP                                                                       | PANASONIC                              | 47UF           | CAP; SMT (CASE_F); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                             |
|     11 | C23, C27, C30, C32                                                                                                                                                            | -         |     4 | GRM188R72A223KAC4; C0603C223K1RAC; HMK107B7223KA; C1608X7R2A223K080AA               | MURATA; KEMET; TAIYO YUDEN; TDK        | 22000PF        | CAP; SMT (0603); 22000PF; 10%; 100V; X7R; CERAMIC                                                                    |
|     12 | C24, C29, C36, C87, C90                                                                                                                                                       | -         |     5 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; GRM21BC72A105KE01                           | TDK; MURATA; MURATA                    | 1UF            | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                                                        |
|     13 | C34, C65                                                                                                                                                                      | -         |     2 | CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                                          | TDK;TDK                                | 2.2UF          | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                       |
|     14 | C37, C38, C40                                                                                                                                                                 | -         |     3 | CL10B106MQ8NRN                                                                      | SAMSUNG ELECTRONICS                    | 10UF           | CAP; SMT (0603); 10UF; 20%; 6.3V; X7R; CERAMIC                                                                       |
|     15 | C41, C69, C70                                                                                                                                                                 | -         |     3 | GRM32EC72A106KE05                                                                   | MURATA                                 | 10UF           | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                       |
|     16 | C49                                                                                                                                                                           | -         |     1 | 06035C101JAT                                                                        | AVX                                    | 100PF          | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                                                        |
|     17 | C51                                                                                                                                                                           | -         |     1 | C0603C473K1RAC                                                                      | KEMET                                  | 0.047UF        | CAP; SMT (0603); 0.047UF; 10%; 100V; X7R; CERAMIC                                                                    |
|     18 | C57, C58                                                                                                                                                                      | -         |     2 | CGA6P3X7S1H106M250AB                                                                | TDK                                    | 10UF           | CAP; SMT (1210); 10UF; 20%; 50V; X7S; CERAMIC                                                                        |
|     19 | C71                                                                                                                                                                           | -         |     1 | 50HVP56M                                                                            | SUNCON                                 | 56UF           | CAP; SMT; 56UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                      |
|     20 | C86, C88                                                                                                                                                                      | -         |     2 | GCM155R71H223JA55                                                                   | MURATA                                 | 22000PF        | CAP; SMT (0402); 22000PF; 5%; 50V; X7R; CERAMIC                                                                      |
|     21 | C89                                                                                                                                                                           | -         |     1 | C1005X7S1A225K050BC                                                                 | TDK                                    | 2.2UF          | CAP; SMT (0402); 2.2UF; 10%; 10V; X7S; CERAMIC                                                                       |
|     22 | C92                                                                                                                                                                           | -         |     1 | CC0603KRX7R6BB224                                                                   | YAGEO                                  | 0.22UF         | CAP; SMT (0603); 0.22UF; 10%; 10V; X7R; CERAMIC                                                                      |
|     23 | D1, D2, D4-D6, D12                                                                                                                                                            | -         |     6 | BAT54S                                                                              | DIODES INCORPORATED                    | BAT54S         | DIODE; SCH; SCHOTTKY DIODE; SMT (SOT-23); PIV=30V; IF=0.2A                                                           |
|     24 | D3                                                                                                                                                                            | -         |     1 | NRVTS245ESFT1G                                                                      | ON SEMICONDUCTOR                       | NRVTS245ESFT1G | DIODE; SCH; SMT (SOD-123FL); PIV=45V; IF=2.0A                                                                        |
|     25 | D7                                                                                                                                                                            | -         |     1 | CMDSH05-4                                                                           | CENTRAL SEMICONDUCTOR CORP             | CMDSH05-4      | DIODE; SCH; SURFACE MOUNT LOW VF SILICON SCHOTTKY DIODE; ; SMT (SOD-323); PIV=40V; IF=0.5A                           |

## MAX25169 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                           | DNI/DNP   |   QTY | MFG PART #                                                   | MANUFACTURER                                 | VALUE              | DESCRIPTION                                                                                                      |
|--------|---------------------------------------------------|-----------|-------|--------------------------------------------------------------|----------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------|
|     26 | D8                                                | -         |     1 | PMEG6030ETP                                                  | NXP                                          | PMEG6030ETP        | DIODE; SCH; SMT (SOD-128); PIV=60V; IF=3A                                                                        |
|     27 | D9                                                | -         |     1 | B160B-13-F                                                   | DIODES INCORPORATED                          | B160B-13-F         | DIODE; SCH; SMB (DO-214AA); PIV=60V; IF=1A                                                                       |
|     28 | D10                                               | -         |     1 | B560CQ-13-F                                                  | DIODES INCORPORATED                          | B560CQ-13-F        | DIODE; SCH; SMC (DO-214AB); PIV=60V; IF=5A                                                                       |
|     29 | D11                                               | -         |     1 | CMPD914E                                                     | CENTRAL SEMICONDUCTOR                        | CMPD914E           | DIODE; SWT; SMT (SOT23-3); PIV=150V; IF=0.1A                                                                     |
|     30 | D13                                               | -         |     1 | CMPD914                                                      | CENTRAL SEMICONDUCTOR                        | CMPD914            | SMALL SIGNAL DIODE                                                                                               |
|     31 | DS1                                               | -         |     1 | LTST-C170GKT                                                 | LITE-ON ELECTRONICS INC                      | LTST-C170GKT       | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                      |
|     32 | DS2                                               | -         |     1 | LGL29K-F2J1-24-Z                                             | OSRAM                                        | LGL29K-F2J1-24-Z   | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                             |
|     33 | DS3, DS4                                          | -         |     2 | LTST-C170EKT                                                 | LITE-ON ELECTRONICS INC                      | LTST-C170EKT       | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                        |
|     34 | J1, J3, J13, J18-J24                              | -         |    10 | PBC02SAAN                                                    | SULLINS ELECTRONICS CORP.                    | PBC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                        |
|     35 | J2, J4, J5, J8, J12, J17                          | -         |     6 | PEC03SAAN                                                    | SULLINS                                      | PEC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                        |
|     36 | J16                                               | -         |     1 | DF11-6DP-2DSA(24)                                            | HIROSE ELECTRIC CO LTD                       | DF11-6DP-2DSA(24)  | CONNECTOR; MALE; THROUGH HOLE; DF11 SERIES; DOUBLE-ROW CONNECTOR; STRAIGHT; 6PINS;                               |
|     37 | J25                                               | -         |     1 | HTSW-112-11-G-S-RA                                           | SAMTEC                                       | HTSW-112-11-G-S-RA | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; RIGHT ANGLE; 12PINS ;                                         |
|     38 | JMP2-JMP7, JMP12                                  | -         |     7 | 22-28-4043                                                   | MOLEX                                        | 22-28-4043         | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                          |
|     39 | L1                                                | -         |     1 | ETQ-P3M1R0YFN                                                | PANASONIC                                    | 1UH                | INDUCTOR; SMT; COMPOSITE; 1UH; 20%; 10.7A                                                                        |
|     40 | L2                                                | -         |     1 | LQH32CN220K23                                                | MURATA                                       | 22UH               | INDUCTOR; 1210; 22UH; +/-10%; 0.25A; -40DEGC TO +85DEGC                                                          |
|     41 | L3, L4                                            | -         |     2 | 74437324022                                                  | WURTH ELECTRONICS INC                        | 2.2UH              | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 3.25A                                                                       |
|     42 | L6                                                | -         |     1 | XAL4020-601ME                                                | COILCRAFT                                    | 0.60UH             | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 0.60UH; TOL=+/-20%; 11.7A                                               |
|     43 | L7                                                | -         |     1 | MSS1278T-472ML                                               | COILCRAFT                                    | 4.7UH              | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7UH; TOL=+/-0.2; 6.2A; -40 DEGC TO +125 DEGC                               |
|     44 | Q1                                                | -         |     1 | BSS84                                                        | FAIRCHILD SEMICONDUCTOR                      | BSS84              | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR, P-CHANNEL, SOT-23, PD=0.36W, ID=-0.13A, VDSS=-50V, -55degC TO +150degC |
|     45 | Q3                                                | -         |     1 | NVMFS5C677NLT1G                                              | ON SEMICONDUCTOR                             | NVMFS5C677NLT1G    | TRAN; NCH; POWER MOSFET; SO-8FL; PD-(3.5W); I-(36A); V-(60V)                                                     |
|     46 | Q4                                                | -         |     1 | NTMFS5C673NLT1G                                              | ON SEMICONDUCTOR                             | NTMFS5C673NLT1G    | TRAN; NCH; MOSFET; SO-8FL; PD-(46W); I-(50A); V-(60V)                                                            |
|     47 | R1, R15                                           | -         |     2 | CR0603-FX-1001ELF; RC0603FR-071KL                            | BOURNS;YAGEO                                 | 1K                 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
|     48 | R2                                                | -         |     1 | CRCW06033K00FK                                               | VISHAY DALE                                  | 3K                 | RES; SMT (0603); 3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
|     49 | R3, R18, R21, R47-R51, R62-R70, R80, R81, R88-R92 | -         |    24 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF | VISHAY; ROHM SEMICONDUCTOR; PANASONIC;BOURNS | 0                  | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                      |
|     50 | R4                                                | -         |     1 | CRCW06036K04FK                                               | VISHAY DALE                                  | 6.04K              | RES; SMT (0603); 6.04K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
|     51 | R5                                                | -         |     1 | ERJ-3EKF1432                                                 | PANASONIC                                    | 14.3K              | RES; SMT (0603); 14.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
|     52 | R6, R11                                           | -         |     2 | CRCW06031K50FK                                               | VISHAY DALE                                  | 1.5K               | RES; SMT (0603); 1.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                               |
|     53 | R7                                                | -         |     1 | ERJ-3EKF6492                                                 | PANASONIC                                    | 64.9K              | RES; SMT (0603); 64.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                              |
|     54 | R10                                               | -         |     1 | LRC-LRZ2010LF-R000                                           | TT ELECTRONICS                               | 0                  | RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                                                        |
|     55 | R12, R14, R16, R27                                | -         |     4 | CHPHT0603K1002FGT                                            | VISHAY SFERNICE                              | 10K                | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                                                |
|     56 | R17                                               | -         |     1 | RNCP0603FTD2K00                                              | STACKPOLE ELECTRONICS INC.                   | 2K                 | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                 |

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                     | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                                             | VALUE          | DESCRIPTION                                                                                                                                                                                       |
|--------|-----------------------------|-----------|-------|------------------------------------------------------------------------------------|----------------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     57 | R20, R22, R38, R52-R54, R56 | -         |     7 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO;YAGEO; PANASONIC;YAGEO                | 100K           | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                |
|     58 | R23                         | -         |     1 | CRCW0603510KFK                                                                     | VISHAY DALE                                              | 510K           | RES; SMT (0603); 510K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                |
|     59 | R24                         | -         |     1 | CRCW060386K6FK                                                                     | VISHAY DALE                                              | 86.6K          | RES; SMT (0603); 86.6K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                               |
|     60 | R25                         | -         |     1 | CRCW06033K40FK                                                                     | VISHAY DALE                                              | 3.4K           | RES; SMT (0603); 3.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                |
|     61 | R26                         | -         |     1 | CRCW06034K70FK                                                                     | VISHAY DALE                                              | 4.7K           | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                |
|     62 | R28, R31                    | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY; ROHM SEMICONDUCTOR; PANASONIC                    | 10             | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                  |
|     63 | R29, R57-R61                | -         |     6 | CRCW06039K10FKEAC                                                                  | VISHAY                                                   | 9.1K           | RES; SMT (0603); 9.1K; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                                                |
|     64 | R32                         | -         |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK; RMCF0603FT20K0    | ROHM;PANASONIC; BOURNS;VISHAY; STACKPOLE ELECTRONICS INC | 20K            | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                 |
|     65 | R37                         | -         |     1 | CRCW06033K74FK                                                                     | VISHAY DALE                                              | 3.74K          | RES; SMT (0603); 3.74K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                               |
|     66 | R39, R40                    | -         |     2 | ERJ-8BWFR082                                                                       | PANASONIC                                                | 0.082          | RESISTOR; 1206; 0.082 OHM; 1%; 100PPM; 1W; THICK FILM                                                                                                                                             |
|     67 | R43                         | -         |     1 | CRCW08050000ZS; RC2012J000                                                         | VISHAY; SAMSUNG ELECTRONICS                              | 0              | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                                       |
|     68 | R44                         | -         |     1 | RG2012N-364-W                                                                      | SUSUMU CO LTD                                            | 360K           | RES; SMT (0805); 360K; 0.05%; +/-10PPM/DEGC; 0.1250W                                                                                                                                              |
|     69 | R45                         | -         |     1 | TNPW080510K0BE; ERA-6YEB103V                                                       | VISHAY DALE; PANASONIC                                   | 10K            | RES; SMT (0805); 10K; 0.10%; +/-25PPM/DEGK; 0.1250W                                                                                                                                               |
|     70 | R46                         | -         |     1 | CPF0603B22KE                                                                       | TE CONNECTIVITY                                          | 22K            | RES; SMT (0603); 22K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                                                                                               |
|     71 | RT1                         | -         |     1 | NTCLE100E3103G                                                                     | VISHAY                                                   | 10K            | THERMISTOR; THROUGH HOLE-RADIAL LEAD; 10K OHM; TOL=+/-2%                                                                                                                                          |
|     72 | SPACER1-SPACER4             | -         |     4 | 9032                                                                               | KEYSTONE                                                 | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                         |
|     73 | TP1, TP2                    | -         |     2 | 5011                                                                               | KEYSTONE                                                 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                           |
|     74 | U1                          | -         |     1 | MAX25169ATM/V+                                                                     | MAXIM                                                    | MAX25169ATM/V+ | EVKIT PART - IC; MAX25169ATM/V+; AUTOMOTIVE I2C-CONTROLLED 6-CHANNEL 150MA BACKLIGHT DRIVER AND 4-OUTPUT TFT-LCD BIAS; PACKAGE OUTLINE DRAWING: 21-0140; LAND PATTERN DRAWING: 90-0464; TQFN48-EP |
|     75 | U2                          | -         |     1 | MAX8571EUT+                                                                        | MAXIM                                                    | MAX8571EUT+    | IC; CONV; HIGH-EFFICIENCY LCD BOOST WITH TRUE SHUTDOWN; SOT23-6                                                                                                                                   |
|     76 | U3                          | -         |     1 | MAX32625PICO                                                                       | MAXIM                                                    | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                                                                                  |
|     77 | PCB                         | -         |     1 | MAX25169                                                                           | MAXIM                                                    | PCB            | PCB:MAX25169                                                                                                                                                                                      |
|     78 | C10                         | DNP       |     0 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                          | MURATA; TDK;MURATA                                       | 1000PF         | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                                                                    |
|     79 | C16, C19, C20, C25, C42     | DNP       |     0 | C2012X7R1H225K125AC                                                                | TDK                                                      | 2.2UF          | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                    |
|     80 | C21, C85                    | DNP       |     0 | GRM188R72A223KAC4; C0603C223K1RAC; HMK107B7223KA; C1608X7R2A223K080AA              | MURATA;KEMET; TAIYO YUDEN;TDK                            | 22000PF        | CAP; SMT (0603); 22000PF; 10%; 100V; X7R; CERAMIC                                                                                                                                                 |

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                                                 | MANUFACTURER                                 | VALUE                | DESCRIPTION                                                                                                                |
|--------|------------------------------|-----------|-------|--------------------------------------------------------------------------------------------|----------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------|
|     81 | C26, C31, C75-C84, C100-C105 | DNP       |     0 | GRM1885C1H102FA01                                                                          | MURATA                                       | 1000PF               | CAP; SMT (0603); 1000PF; 1%; 50V; C0G; CERAMIC                                                                             |
|     82 | C43, C44, C46, C48           | DNP       |     0 | 06035C101JAT                                                                               | AVX                                          | 100PF                | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                                                              |
|     83 | C59, C64                     | DNP       |     0 | C1608X8R1H152K080; GCM188R91H152KA01                                                       | TDK;MURATA                                   | 1500PF               | CAP; SMT (0603); 1500PF; 10%; 50V; X8R; CERAMIC                                                                            |
|     84 | C60, C67                     | DNP       |     0 | CGA6P3X7S1H106M250AB                                                                       | TDK                                          | 10UF                 | CAP; SMT (1210); 10UF; 20%; 50V; X7S; CERAMIC                                                                              |
|     85 | C62, C66                     | DNP       |     0 | C1210C106K3RAC; GRM32DR71E106K; GCM32ER71E106KA57; CGA6P1X7R1E106K250AC; GCJ32ER71E106KA18 | KEMET;MURATA; MURATA;TDK;MURATA              | 10UF                 | CAP; SMT (1210); 10UF; 10%; 25V; X7R; CERAMIC                                                                              |
|     86 | C74                          | DNP       |     0 | CGA3EANP02A103J080AC                                                                       | TDK                                          | 0.01UF               | CAP; SMT (0603); 0.01UF; 5%; 100V; C0G; CERAMIC                                                                            |
|     87 | C93                          | DNP       |     0 | CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                                                 | TDK;TDK                                      | 2.2UF                | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                                             |
|     88 | C94, C95                     | DNP       |     0 | GRM32EC72A106KE05                                                                          | MURATA                                       | 10UF                 | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                             |
|     89 | J6                           | DNP       |     0 | 803-87-020-20-001101                                                                       | PRECI-DIP SA                                 | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; |
|     90 | L4A                          | DNP       |     0 | 74437336022                                                                                | WURTH ELECTRONICS INC                        | 2.2UH                | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 4.9A                                                                                  |
|     91 | L5                           | DNP       |     0 | XAL5050-103ME                                                                              | COILCRAFT                                    | 10UH                 | INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL=+/-20%; 4.9A                                                                      |
|     92 | R8                           | DNP       |     0 | CRCW06031M00FK; MCR03EZPFX1004                                                             | VISHAY DALE;ROHM                             | 1M                   | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
|     93 | R9, R30                      | DNP       |     0 | LRC-LRZ2010LF-R000                                                                         | TT ELECTRONICS                               | 0                    | RES; SMT (2010); 0; JUMPER; CURRENT SENSE                                                                                  |
|     94 | R13                          | DNP       |     0 | CRCW12060000ZS                                                                             | VISHAY DALE                                  | 0                    | RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                |
|     95 | R19                          | DNP       |     0 | CHPHT0603K1002FGT                                                                          | VISHAY SFERNICE                              | 10K                  | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.0125W                                                                          |
|     96 | R33-R36                      | DNP       |     0 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                               | VISHAY; ROHM SEMICONDUCTOR; PANASONIC        | 10                   | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                           |
|     97 | R41, R42                     | DNP       |     0 | ERJ-3RQF4R7                                                                                | PANASONIC                                    | 4.7                  | RES; SMT (0603); 4.7; 1%; +/-100PPM/DEGC; 0.1000W                                                                          |
|     98 | R71-R73, R82-R87             | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                               | VISHAY; ROHM SEMICONDUCTOR; PANASONIC;BOURNS | 0                    | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                |
|     99 | R78, R79, R93-R96            | DNP       |     0 | FC0603E50R0BTBS                                                                            | VISHAY DALE                                  | 50                   | RES; SMT (0603); 50; 0.10%; +/-25PPM/DEGC; 0.1250W                                                                         |
|    100 | C7                           | DNP       |     0 | N/A                                                                                        | N/A                                          | OPEN                 | EVKIT USE ONLY;DUAL PACKAGE OUTLINE 0603 AND 0805 NON-POLAR CAPACITOR                                                      |
|    101 | C63                          | DNP       |     0 | N/A                                                                                        | N/A                                          | OPEN                 | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                   |
|    102 | C91                          | DNP       |     0 | N/A                                                                                        | N/A                                          | OPEN                 | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                    |

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit Schematic Diagrams

<!-- image -->

## MAX25169 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX25169 EV Kit PCB Layout Diagrams

MAX25169 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX25069, MAX25169

│

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX25169 EV Kit PCB Layout Diagram-Top Layer

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit PCB Layout Diagrams (continued)

MAX25169 EV Kit PCB Layout Diagram-Internal Layer 2

<!-- image -->

│

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit PCB Layout Diagrams (continued)

MAX25169 EV Kit PCB Layout Diagram-Internal Layer 3

<!-- image -->

│

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit PCB Layout Diagrams (continued)

MAX25169 EV Kit PCB Layout Diagram-Bottom Layer

<!-- image -->

│

Evaluates: MAX25069, MAX25169

## MAX25169 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX25169 EV Kit PCB Layout Diagram-Silkscreen Bottom

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX25069, MAX25169