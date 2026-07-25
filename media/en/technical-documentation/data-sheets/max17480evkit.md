<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17480 Evaluation Kit

## General Description

The MAX17480 evaluation kit (EV kit) demonstrates the high-power, triple-output notebook CPU application circuit for the AMD ® mobile serial VID interface (SVI) CPU core supplies. This DC-DC converter steps down highvoltage batteries and/or AC adapters, generating precision, low-voltage CPU cores. The MAX17480 EV kit meets the AMD mobile SVI CPU's transient voltage specification, power-good signaling, voltage-regulator thermal monitoring ( VRHOT ),  and  power-good output (PWRGD). The MAX17480 EV kit consists of one dualphase high-current switched-mode power supply (SMPS) for the CPU core (VCORE0) and one 4A internal switch SMPS for the northbridge (NB) core. The two CPU core SMPSs run 180° out-of-phase for true interleaved operation, minimizing input capacitance.

Output voltages are dynamically changed through a 2-wire serial interface, allowing the switching regulators to  be  individually  programmed to different voltages. A programmable slew-rate controller enables controlled transitions  between VID codes. SVI also allows each regulator to be individually set into a low-power pulseskipping state.

Soft-start  limits  the  inrush  current,  and  passive  shutdown discharges the output voltage back down to zero without any negative ring. The MAX17480 EV kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. The MAX17480 includes latched output undervoltage fault protection, overvoltage fault protection for the CPU cores, and thermal-overload protection. It also includes a voltage-regulator power-good (PWRGD) output.

This fully assembled and tested PCB provides a digitally adjustable 0 to 1.550V output-voltage range (7-bit onboard DAC) from a 7V to 24V battery input range. Each phase of the core current SMPS operates at 300kHz switching frequency and delivers up to 18A output current  for  a  total  of  36A.  The  4A  internal  switch  SMPS operates at 600kHz switching frequency and delivers up to 4A. The EV kit has superior line- and load-transient response. The EV kit also includes Windows ® 2000-, Windows XP ® -, and Windows Vista ® -compatible software that provides a simple graphical user interface (GUI) for exercising the features of the MAX17480.

Features

- ♦ Dual/Triple-Output, Fixed-Frequency Controller
- ♦ AMD Mobile SVI-Compliant Serial Interface
- ♦ 0 to 1.550V Output-Voltage Range (7-Bit On-Board DAC)
- ♦ Core SMPS

Split or Combinable Outputs Detected at Power-Up

True Out-of-Phase Operation Reduces Input Capacitance

Transient Phase Repeat Reduces Output Capacitance

Dynamic Phase Selection Optimizes Active/ Sleep Efficiency

Programmable AC and DC Droop 7V to 24V Input-Voltage Range 36A Load-Current Capability (18A Each Phase) Accurate Current Balance and Current Limit 300kHz Switching Frequency (Per Phase) Output Overvoltage Fault Protection

## ♦ NB SMPS

4A Load-Current Capability for Northbridge

Core

600kHz Switching Frequency for Northbridge

- ♦ Power-Good (PWRGD) and Thermal-Fault ( VRHOT ) Output Indicators
- ♦ System Power-OK (PGD\_IN) Input
- ♦ Undervoltage Fault Protection
- ♦ 40-Pin Thin QFN Package (5mm x 5mm)
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17480EVKIT+ | EV Kit |

AMD is a registered trademark of Advanced Micro Devices, Inc. Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

## MAX17480 Evaluation Kit

| DESIGNATION                                                                                   |   QTY | DESCRIPTION                                                                                                      |
|-----------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| CORE0SENSE_H, CORE0SENSE_L, CORE1SENSE_H CORE1SENSE_L, NBSENSE_H, PGD_IN, PWRGD, SHDN , VRHOT |     9 | Test points                                                                                                      |
| C1-C4                                                                                         |     4 | 10µF ±20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM         |
| C5, C7                                                                                        |     0 | Not installed, polymer capacitors (D case)                                                                       |
| C6, C8, C19                                                                                   |     3 | 330µF, 2V, 6m Ω low-ESR polymer capacitors (D case) NEC TOKIN PSGD0E337M6 Panasonic EEFSX0D331XE SANYO 2TPE330M6 |
| C9, C12, C44-C48, C58, C78                                                                    |     9 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K Murata GRM188R71E104K                           |
| C10, C11                                                                                      |     2 | 2.2µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A225M Murata GRM188R61A225M AVX 0603ZD225MAT          |
| C13, C14, C24, C25, C76                                                                       |     5 | 0.22µF ±20%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT     |
| C15, C17, C20, C23                                                                            |     4 | 4700pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H472K Murata GRM188R71H472K                          |
| C16, C38, C39, C41, C42, C43, C53, C59-C62                                                    |     0 | Not installed, ceramic capacitors (0603)                                                                         |
| C18, C51, C52                                                                                 |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT      |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                            |
|-------------------------|-------|--------------------------------------------------------------------------------------------------------|
| C21, C22, C69, C70, C77 |     5 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K Murata GRM188R71H102K                |
| C26-C37                 |    12 | 22µF ± 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG           |
| C40                     |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H332K Taiyo Yuden UMK107B332MZ              |
| C49, C50                |     2 | 1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C105K AVX 0603YD105MAT                        |
| C54, C55                |     2 | 22pF± 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H220J                                         |
| C56, C57                |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H100J                                         |
| C63, C64, C75           |     3 | 2200pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H222K Murata GRM188R71H222K                |
| C65                     |     0 | Not installed, polymer capacitor (D case) NEC TOKIN PSGD0E227M6 Panasonic EEFSX0D271XE SANYO 2TPE220M6 |
| C66                     |     1 | 100µF, 6.3V low-ESR capacitor (B case) SANYO 6TPE100MAZB NEC TOKIN PSLB0J107M(35)                      |
| C67, C68                |     2 | 330pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H331K Taiyo Yuden UMK107B331KZ              |
| C71-C74                 |     4 | 22µF ±10%, 10V X7R ceramic capacitors (1210) Murata GRM32ER71A226K                                     |
| D1, D2                  |     2 | 3A, 30V Schottky diodes Nihon EC31QS03L Central Semi CMSH3-40M                                         |
| D3, D4                  |     2 | LEDs, green clear SMD (0805)                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                          |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------|
| J1            |     1 | USB series-B right-angle PC-mount receptacle                                                                         |
| J2            |     0 | Not installed, dual-row (2 x 5) 10-pin header                                                                        |
| J4, J5        |     2 | Scope probe jacks                                                                                                    |
| JU1, JU3-JU6  |     5 | 3-pin headers                                                                                                        |
| JU2           |     1 | 5-pin header                                                                                                         |
| JU7, JU8      |     2 | 2-pin headers                                                                                                        |
| L1, L2        |     2 | 0.45µH, 30A, 1.1m Ω power inductors TOKO FDUE1040D-R45M or NEC TOKIN MPC1040LR45 or Panasonic ETQP4LR45XFC           |
| L3            |     1 | 1.5µH, 5A, 21m Ω inductor TOKO FDV0530-1R5M NEC TOKIN MPLCH0525L1R5                                                  |
| N1, N2        |     2 | n-channel MOSFETs (PowerPAK SO 8) Fairchild Semi FDS6298 (SO 8) Siliconix (Vishay) SI7634DP                          |
| N3-N6         |     4 | n-channel MOSFETs (PowerPAK SO 8) Fairchild Semi FDS8670 (SO 8) Siliconix (Vishay) SI7336ADP                         |
| N7, N8        |     0 | Not installed, n-channel MOSFETs (D-PAK)                                                                             |
| R1, R2        |     2 | 10k Ω ±1% NTC thermistors, B = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F                                  |
| R4            |     1 | 100k Ω ±1% resistor (0603)                                                                                           |
| R5            |     1 | 45.3k Ω ±1% resistor (0603)                                                                                          |
| R6            |     0 | Not installed, resistor-short PC trace (0603)                                                                        |
| R7            |     1 | 13k Ω ±1% resistor (0603)                                                                                            |
| R8            |     1 | 100k Ω ±5% NTC thermistor, B = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J (0402) or Panasonic ERT-J1VR104J |
| R9, R38, R39  |     3 | 100k Ω ±5% resistors (0603)                                                                                          |
| R10           |     1 | 143k Ω ±1% resistor (0603)                                                                                           |

<!-- image -->

| DESIGNATION                            |   QTY | DESCRIPTION                                                              |
|----------------------------------------|-------|--------------------------------------------------------------------------|
| R11, R51, R53-R56, R68                 |     7 | 1k Ω ±5% resistors (0603)                                                |
| R12, R17, R18, R19                     |     4 | 3.01k Ω ±1% resistors (0603)                                             |
| R13, R31, R34, R40, R41, R60, R61, R73 |     0 | Not installed, resistors (0603)                                          |
| R14, R20, R21                          |     3 | 100 Ω ±5% resistors (0603)                                               |
| R15, R22-R27, R57                      |     8 | 0 Ω resistors (0603)                                                     |
| R16, R36                               |     2 | 51 Ω ±5% resistors (0603)                                                |
| R28, R35                               |     0 | Not installed, 1W resistors (2512)                                       |
| R29, R32                               |     2 | 2.43k Ω ±1% resistors (0603)                                             |
| R30, R33                               |     2 | 4.02k Ω ±1% resistors (0603)                                             |
| R37, R69                               |     2 | 10 Ω ±5% resistors (0603)                                                |
| R42, R43, R45, R46                     |     4 | 27 Ω ±5% resistors (0603)                                                |
| R44, R47, R52, R58, R59                |     5 | 1.5k Ω ±5% resistors (0603)                                              |
| R48                                    |     1 | 2.2k Ω ±5% resistor (0603)                                               |
| R49                                    |     1 | 10k Ω ±5% resistor (0603)                                                |
| R50                                    |     1 | 470 Ω ±5% resistor (0603)                                                |
| R62-R66, R71, R72, R74                 |     0 | Not installed, resistors-short (PC trace) (0603)                         |
| R67                                    |     1 | 2 Ω ±5% resistor (0603)                                                  |
| R70                                    |     1 | 5.1k Ω ±5% resistor (0603)                                               |
| SW1-SW4                                |     4 | Pushbutton switches                                                      |
| TP1, TP2                               |     0 | Not installed, test points                                               |
| U1                                     |     1 | AMD SVI mobile regulator (40 TQFN) Maxim MAX17480GTL+                    |
| U2                                     |     1 | Low-power LCD microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+           |
| U3                                     |     1 | 93C46 type 3-wire EEPROM (8 SO) 16-bit architecture Atmel AT93C46EN-SH-B |
| U4                                     |     1 | UART-to-USB converter (32 TQFP) FTDI FT232BL                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| U5            |     1 | 3.3V, 120mA linear regulator (5 SC70) Maxim MAX8511EXK33+T (Top Mark: AEI) |
| U6            |     1 | 2.5V, 120mA linear regulator (5 SC70) Maxim MAX8511EXK25+T (Top Mark: ADV) |

| DESIGNATION   |   QTY | DESCRIPTION                   |
|---------------|-------|-------------------------------|
| Y1            |     1 | 16MHz crystal                 |
| Y2            |     1 | 6MHz crystal                  |
| -             |     8 | Shunts                        |
| -             |     1 | PCB: MAX17480 EVALUATION KIT+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corp.                              | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Nihon Inter Electronics Corp.          | 847-843-7500 | www.niec.co.jp              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX17480 when contacting these component suppliers.

## MAX17480 EV Kit Files

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX17480.EXE        | Application program                        |
| FTD2XX.INF          | USB device driver file                     |
| UNINST.INI          | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

## Quick Start

## Recommended Equipment

- 4) Verify that there are shunts installed across jumpers JU2, pins 1-2 (OPTION = VDD) and JU3, pins 1-2 (ILIM3 = VDD).
- MAX17480 EV kit (USB cable included)
- 7V to 24V, &gt; 100W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 3A
- One load capable of sinking 40A
- One load capable of sinking 4A
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope
- User-supplied Windows 2000, Windows XP, or Windows Vista PC with a spare USB port

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX17480 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 17480xx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.
3. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Ensure that the circuit is connected correctly to the supplies and dummy loads prior to applying any power.
- 5) Verify that there is a shunt installed across jumpers JU1, pins 1-2 (PGD\_IN), JU4, pins 1-2 ( SHDN ), JU5, pins 1-2 (SVD), JU6, pins 1-2 (SVC), allowing U2 to control the MAX17480, and JU8, pins 1-2, IN3 connected to VBIAS.
- 6) Turn on the battery power before turning on the 5V power supply.
- 7) Connect the USB cable from the PC to the EV kit board. A Building Driver Database window pops up in  addition to a New Hardware Found message when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30 seconds, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000, Windows XP, and Windows Vista.  Refer to the USB\_Driver\_Help.PDF document included with the software if you have any problems during this step.
- 8) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX17480 (default installation directory) using the Browse button.
- 9) Start the EV kit software by opening its icon in the Start |  Programs menu. The EV kit software main window should appear, as shown in Figure 1.
- 10) Check the Core 0 , Combined Mode ,  and North Bridge checkboxes. Move any slider to adjust the voltage to 1.2000V and press the Send Data button.
- 11) Observe the 1.2000V output voltage on the SMPS outputs (VCORE0 and VOUT\_NB) with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

## Detailed Description of Software

The main window of the evaluation software (Figure 1) displays Address to Send , Data to Send , Last Address Sent , and Last Data Sent status. In addition, the GUI allows the user to select Combined Mode , Core 0 , Core 1 , and/or North Bridge outputs.

The sliders to the right of each output checkbox correspond with the output-voltage setting for that core. The Send Data button must be pressed to write the new output-voltage setting(s) to the MAX17480. The Last Address Sent and Last Data Sent status helps the user keep track of the last transmission.

## Operating Mode (Combined/Separate)

At  start-up,  the  software  is  configured  for  combinedmode operation ( Combined Mode checkbox checked). In  combined mode, the MAX17480 ignores Core 1 commands. To configure the software for separatemode operation, uncheck the Combined Mode checkbox and follow the instructions in the Separate-Mode Operation section.

## Saving Power

Unchecking the Power-Saving Off checkbox puts the MAX17480 in power-saving mode (skip mode). The MAX17480 is in normal operation (PWM mode) while the Power-Saving Off checkbox is checked.

## Resetting the GUI (RESET GUI)

The software main window needs to be synchronized to the MAX17480 EV kit hardware after the following events:

- Pressing any of the on-board switches (SW1-SW4)
- Re-cycling 5V power to the MAX17480 EV kit

Press the RESET GUI button after any of the above events to use the software main window again.

## I 2 C Low-Level Commands

Press the Options | 2-wire low level menu item at the top of the GUI to execute low-level I 2 C interface commands. Once the new window opens, go to the 2-wire Interface tab | General Commands | SMBusWriteByte (addr,cmd,data8) to  write  hex  data  manually  into  the registers of the MAX17480.

Figure 1. MAX17480 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17480 Evaluation Kit

## Detailed Description of Firmware

The on-board switches (SW1-SW4) allow the user to perform four different predetermined high-speed I 2 C tests. Detailed descriptions of each dynamic output test follow.

The sequence for the dynamic output test assigned to SW1 is shown in Table 1.

The sequence for the dynamic output test assigned to SW2 is shown in Table 2.

The sequence for the dynamic output test assigned to SW3 is shown in Table 3.

The sequence for the dynamic output test assigned to SW4 is shown in Table 4.

Note: When in combined mode, the MAX17480 ignores DAC2 settings. The device only responds to settings made to DAC1 (Core 0) and DAC3 (NB).

## Table 1. SW1 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION               |
|--------|-----------|--------|---------------------------|
|      1 | 0xC4      | 0xCC   | Set DAC1 to 0.6V (Core 0) |
|      2 | N/A       | N/A    | Wait 100µs                |
|      3 | 0xC8      | 0xCC   | Set DAC2 to 0.6V (Core 1) |
|      4 | N/A       | N/A    | Wait 100µs                |
|      5 | 0xC2      | 0xCC   | Set DAC3 to 0.6V (NB)     |
|      6 | N/A       | N/A    | Wait 100µs                |
|      7 | 0xC4      | 0x94   | Set DAC1 to 1.3V (Core 0) |
|      8 | N/A       | N/A    | Wait 100µs                |
|      9 | 0xC8      | 0x94   | Set DAC2 to 1.3V (Core 1) |
|     10 | N/A       | N/A    | Wait 100µs                |
|     11 | 0xC2      | 0x94   | Set DAC3 to 1.3V (NB)     |

N/A = Not applicable.

## Table 2. SW2 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                |
|--------|-----------|--------|----------------------------|
|      1 | 0xC4      | 0xFF   | Set DAC1 to 0V (Core 0)    |
|      2 | N/A       | N/A    | Wait 100µs                 |
|      3 | 0xC8      | 0xFF   | Set DAC2 to 0V (Core 1)    |
|      4 | N/A       | N/A    | Wait 100µs                 |
|      5 | 0xC2      | 0xFF   | Set DAC3 to 0V (NB)        |
|      6 | N/A       | N/A    | Wait 100µs                 |
|      7 | 0xC4      | 0x80   | Set DAC1 to 1.55V (Core 0) |
|      8 | N/A       | N/A    | Wait 100µs                 |
|      9 | 0xC8      | 0x80   | Set DAC2 to 1.55V (Core 1) |
|     10 | N/A       | N/A    | Wait 100µs                 |
|     11 | 0xC2      | 0x80   | Set DAC3 to 1.55V (NB)     |

N/A = Not applicable.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

## Table 3. SW3 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                                    |
|--------|-----------|--------|------------------------------------------------|
|      1 | 0xC4      | 0xCC   | Set all DACs to 0V (Core 0, Core 1, and NB)    |
|      2 | N/A       | N/A    | Wait 1ms                                       |
|      3 | 0xC8      | 0xCC   | Set all DACs to 1.55V (Core 0, Core 1, and NB) |

N/A = Not applicable.

## Table 4. SW4 Dynamic Output Test with High-Speed I 2 C Interface

|   STEP | ADDRESS   | DATA   | DESCRIPTION                                   |
|--------|-----------|--------|-----------------------------------------------|
|      1 | N/A       | N/A    | Set SHDN and PGD_IN to logic-low              |
|      2 | N/A       | N/A    | Wait 10ms                                     |
|      3 | N/A       | N/A    | Set SVC to logic-low and SVD to logic-high    |
|      4 | N/A       | N/A    | Set SHDN to logic-high                        |
|      5 | N/A       | N/A    | Wait 2ms                                      |
|      6 | N/A       | N/A    | Set PGD_IN to logic-high                      |
|      7 | N/A       | N/A    | Wait 10µs                                     |
|      8 | 0xCE      | 0x9C   | Set all DACs to 1.2V (Core 0, Core 1, and NB) |

N/A = Not applicable.

## Detailed Description of Hardware

The MAX17480 EV kit consists of one dual-phase SMPS for the CPU core, and one 4A internal switch SMPS for the northbridge core. The SMPS buck-regulator design is  optimized for a 300kHz switching frequency per phase and output-voltage settings around 1.200V. At VOUT = 1.200V and VIN = 12V, the inductor ripple is approximately 30% (LIR = 0.3). The MAX17480 controller interleaves both phases, resulting in 180° out-ofphase operation that minimizes the input and output filtering requirements. The MAX17480 controller shares the current between the two phases, supplying up to 18A per phase . The 4A internal-switch SMPS operates at 600kHz switching frequency and delivers up to 4A.

The MAX17480 EV kit is configured to evaluate the MAX17480 IC in combined-mode operation. In combined mode, core SMPSs (SMPS1 and SMPS2) are combined into a single output (VCORE0). The EV kit can be configured to operate in separate mode to provide two outputs, VCORE0 (SMPS1) and VCORE1 (SMPS2). See the Separate-Mode Operation section for configuration details.

## Setting the Output Voltage

## 7-Bit DAC

Inside the MAX17480 are three 7-bit digital-to-analog converters (DACs). Each DAC can be individually programmed to different voltage levels through the serial- interface bus. The DAC sets the target for the output voltage for the SMPSs. The available DAC codes, and resulting output voltages, are compatible with the AMD SVI specifications (see Table 5).

## 2-Wire Serial Interface (SVC, SVD)

The MAX17480 supports the 2-wire write-only serialinterface bus, as defined by the AMD serial VID interface specification. The serial interface is similar to the high-speed 3.4MHz I 2 C bus, but without the mastermode sequence. The bus consists of a clock line (SVC) and a data line (SVD). The CPU is the bus master and the MAX17480 is the slave.

The MAX17480 serial interface works from 100kHz to 3.4MHz. In the AMD mobile application, the bus runs at 3.4MHz. In the MAX17480 EV kit, the serial interface operates at 400kHz when commands are sent through the EV kit software. When using the preprogrammed SW switches, the serial interface operates at 1.7MHz.

The serial interface is active only after PGD\_IN goes high in the startup sequence. The CPU sets the VID voltage of the three internal DACs and the PSI\_L bit through the serial interface after PGD\_IN goes high.

During the startup sequence, the SVC and SVD inputs serve an alternate function to set the 2-bit boot VID for all  three  DACs while PWRGD is low, and are in the serial-interface mode when PGD\_IN is high.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

By default, the MAX17480 serial interface is controlled by U2 through the jumper settings on JU5 (pins 1-2) and JU6 (pins 1-2). To directly control the MAX17480

Table 5. Output-Voltage VID DAC Codes

|   SVID[6:0] |   OUTPUT VOLTAGE (V) |   SVID[6:0] |   OUTPUT VOLTAGE V) |   SVID[6:0] |   OUTPUT VOLTAGE (V) |   SVID[6:0] | OUTPUT VOLTAGE (V)   |
|-------------|----------------------|-------------|---------------------|-------------|----------------------|-------------|----------------------|
|    000_0000 |               1.5500 |    010_0000 |              1.1500 |    100_0000 |               0.7500 |    110_0000 | 0.3500               |
|    000_0001 |               1.5375 |    010_0001 |              1.1375 |    100_0001 |               0.7375 |    110_0001 | 0.3375               |
|    000_0010 |               1.5250 |    010_0010 |              1.1250 |    100_0010 |               0.7250 |    110_0010 | 0.3250               |
|    000_0011 |               1.5125 |    010_0011 |              1.1125 |    100_0011 |               0.7125 |    110_0011 | 0.3125               |
|    000_0100 |               1.5000 |    010_0100 |              1.1000 |    100_0100 |               0.7000 |    110_0100 | 0.3000               |
|    000_0101 |               1.4875 |    010_0101 |              1.0875 |    100_0101 |               0.6875 |    110_0101 | 0.2875               |
|    000_0110 |               1.4750 |    010_0110 |              1.0750 |    100_0110 |               0.6750 |    110_0110 | 0.2750               |
|    000_0111 |               1.4625 |    010_0111 |              1.0625 |    100_0111 |               0.6625 |    110_0111 | 0.2625               |
|    000_1000 |               1.4500 |    010_1000 |              1.0500 |    100_1000 |               0.6500 |    110_1000 | 0.2500               |
|    000_1001 |               1.4375 |    010_1001 |              1.0375 |    100_1001 |               0.6375 |    110_1001 | 0.2375               |
|    000_1010 |               1.4250 |    010_1010 |              1.0250 |    100_1010 |               0.6250 |    110_1010 | 0.2250               |
|    000_1011 |               1.4125 |    010_1011 |              1.0125 |    100_1011 |               0.6125 |    110_1011 | 0.2125               |
|    000_1100 |               1.4000 |    010_1100 |              1.0000 |    100_1100 |               0.6000 |    110_1100 | 0.2000               |
|    000_1101 |               1.3875 |    010_1101 |              0.9875 |    100_1101 |               0.5875 |    110_1101 | 0.1875               |
|    000_1110 |               1.3750 |    010_1110 |              0.9750 |    100_1110 |               0.5750 |    110_1110 | 0.1750               |
|    000_1111 |               1.3625 |    010_1111 |              0.9625 |    100_1111 |               0.5625 |    110_1111 | 0.1625               |
|    001_0000 |               1.3500 |    011_0000 |              0.9500 |    101_0000 |               0.5500 |    111_0000 | 0.1500               |
|    001_0001 |               1.3375 |    011_0001 |              0.9375 |    101_0001 |               0.5375 |    111_0001 | 0.1375               |
|    001_0010 |               1.3250 |    011_0010 |              0.9250 |    101_0010 |               0.5250 |    111_0010 | 0.1250               |
|    001_0011 |               1.3125 |    011_0011 |              0.9125 |    101_0011 |               0.5125 |    111_0011 | 0.1125               |
|    001_0100 |               1.3000 |    011_0100 |              0.9000 |    101_0100 |               0.5000 |    111_0100 | 0.1000               |
|    001_0101 |               1.2875 |    011_0101 |              0.8875 |    101_0101 |               0.4875 |    111_0101 | 0.0875               |
|    001_0110 |               1.2750 |    011_0110 |              0.8750 |    101_0110 |               0.4750 |    111_0110 | 0.0750               |
|    001_0111 |               1.2625 |    011_0111 |              0.8625 |    101_0111 |               0.4625 |    111_0111 | 0.0625               |
|    001_1000 |               1.2500 |    011_1000 |              0.8500 |    101_1000 |               0.4500 |    111_1000 | 0.0500               |
|    001_1001 |               1.2375 |    011_1001 |              0.8375 |    101_1001 |               0.4375 |    111_1001 | 0.0375               |
|    001_1010 |               1.2250 |    011_1010 |              0.8250 |    101_1010 |               0.4250 |    111_1010 | 0.0250               |
|    001_1011 |               1.2125 |    011_1011 |              0.8125 |    101_1011 |               0.4125 |    111_1011 | 0.0125               |
|    001_1100 |               1.2000 |    011_1100 |              0.8000 |    101_1100 |               0.4000 |    111_1100 | OFF                  |
|    001_1101 |               1.1875 |    011_1101 |              0.7875 |    101_1101 |               0.3875 |    111_1101 | OFF                  |

Note:

The NB SMPS output voltage has an offset of +12.5mV.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

with an external I 2 C serial interface, connect the external controller to the SDA and SCL pads and move the shunts on JU5 and JU6 across pins 2-3.

## MAX17480 Evaluation Kit

## Table 6. Boot-Voltage Codes

|   SVC |   SVD |   BOOT VOLTAGE V BOOT (V) |
|-------|-------|---------------------------|
|     0 |     0 |                       1.1 |
|     0 |     1 |                       1.0 |
|     1 |     0 |                       0.9 |
|     1 |     1 |                       0.8 |

## Boot Voltage

On startup, the MAX17480 slews the target for all three DACs from ground to the boot voltage set by the SVC and SVD pin voltage levels. While the output is still below regulation, the SVC and SVD levels can be changed and the MAX17480 will set the DACs to the new boot voltage. Once the programmed boot voltage is  reached and PWRGD goes high, the MAX17480 stores the boot VID. Changes in the SVC and SVD settings  do  not  change the output voltage once the boot VID is stored. When PGD\_IN goes high, the MAX17480 exits boot mode, and the three DACs can be independently set to any voltage in the VID table through the serial interface.

If PGD\_IN goes from high to low any time after the boot VID is stored, the MAX17480 sets all three DACs back to the voltage of the stored boot VID. Table 6 shows the boot-voltage codes.

## Reduced Power-Dissipation Voltage Positioning

Each phase of the MAX17480 core-supply SMPS includes one transconductance amplifier for AC droop. The amplifiers' inputs are generated by summing the respective current-sense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's output (FBAC) connects to the feedback input (FBDC) though a capacitor (C63 for  phase 1 and C64 for phase 2), resulting in ACcoupling of the ripple voltage with no DC voltage, giving no DC droop in the default configuration.

For applications that require voltage positioning, install the resistor between FBAC and FBDC (R60 for phase 1 and R61 for phase 2). The resulting DC droop is a fraction of the AC-droop setting. Refer to the MAX17480 IC data sheet for detailed information on setting AC and DC droop.

## Load-Transient Experiment

One interesting experiment is to subject the output to large, fast load transients and observe the output with an oscilloscope. Accurate measurement of output ripple and load-transient response invariably requires that ground clip leads be completely avoided and that the probe be removed to expose the GND shield, so the probe can be directly grounded with as short a wire as possible to the board. Otherwise, EMI and noise pickup corrupt the waveforms.

Most benchtop electronic loads intended for powersupply testing lack the ability to subject the DC-DC converter to ultra-fast load transients. Emulating the supply current (di/dt) at the CPU VCORE pins requires at  least  500A/µs  load  transients.  An  easy  method for generating such an abusive load transient is to install a power MOSFET at the N7 location and install resistor R35 between 5m Ω and 10m Ω to  monitor  the  transient current.  Then drive its gate (TP1) with a strong pulse generator at a low duty cycle (&lt; 5%) to minimize heat stress in  the  MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy-load MOSFET. To determine how much load current a particular pulsegenerator amplitude is causing, observe the current through inductor L1. In the buck topology, the load current is approximately equal to the average value of the inductor current.

## Jumper Settings

## Shutdown ( SHDN )

When SHDN goes low (JU4 = GND), the MAX17480 immediately enters the shutdown mode and PWRGD is pulled low immediately-the drivers are disabled, the reference turns off, the supply currents drop to approximately 1µA (max), and all three outputs are discharged through 20 Ω internal discharge FETs through the CSN pin for  the  core  SMPSs and through the OUT3 pin for the NB SMPS.

When an overvoltage or undervoltage fault condition occurs on the core SMPS, the NB SMPS immediately shuts down. To clear the fault latch and reactivate the controller, toggle SHDN or cycle VCC power (see Table 7).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 7. Jumper JU4 Function ( SHDN )

| SHUNT POSITION   | SHDN PIN                                  | MAX17480 OUTPUT                                                                          |
|------------------|-------------------------------------------|------------------------------------------------------------------------------------------|
| 1-2              | Connected to U2, pin 58                   | -                                                                                        |
| 2-3              | Connected to GND                          | Shutdown mode, SMPS output voltages disabled. VCORE0 = 0V and VOUT_NB = 0V.              |
| Not installed    | Connected to VDD through 100k resistor R9 | SMPS output voltages enabled. VCORE0 and VOUT_NB voltages are set by SVC and SVD inputs. |

## System Power-Good Input (PGD\_IN)

After the SMPS outputs reach the boot voltage, the MAX17480 switches over to the serial-interface mode when PGD\_IN goes high. Any time during normal operation,  a  high-to-low  transition  on  PGD\_IN  causes the MAX17480 to slew all three internal DACs back to the stored boot VIDs. The SVC and SVD inputs are disabled during the time that PGD\_IN is low. The serial interface is re-enabled when PGD\_IN goes high again (see Table 8).

Table 8. Jumper JU1 Function (PGD\_IN)

| SHUNT POSITION   | PGD_IN PIN                                    | MAX17480 OUTPUT                                                                                                                                |
|------------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | Connected to U2, pin 59                       | -                                                                                                                                              |
| 2-3              | Connected to GND                              | The SVC and SVD inputs are disabled during the time PGD_IN is low.                                                                             |
| Not installed    | Connected to 2.5V through 100k Ω resistor R39 | The serial interface is re-enabled when PGD_IN goes high again. The MAX17480 switches over to the serial-interface mode when PGD_IN goes high. |

## Table 9. Jumper JU2 Function (OPTION)

| SHUNT POSITION   | OPTION PIN        |   OFFSET ENABLED | SMPS1 ADDRESS**   | SMPS2 ADDRESS**   |
|------------------|-------------------|------------------|-------------------|-------------------|
| 1-2*             | Connected to VDD  |                0 | BIT 1 (VDD0)      | BIT 2 (VDD1)      |
| 1-5              | Connected to 3.3V |                0 | BIT 2 (VDD1)      | BIT 1 (VDD0)      |
| 1-3              | Connected to OSC  |                1 | BIT 1 (VDD0)      | BIT 2 (VDD1)      |
| 1-4              | Connected to GND  |                1 | BIT 2 (VDD1)      | BIT 1 (VDD0)      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Offset and Address Change for Core SMPSs (OPTION)

The +12.5mV offset and the address change features of  the  MAX17480 can be selectively enabled and disabled by the OPTION pin setting. When the offset is enabled, setting the PSI\_L bit to 0 disables the offset, reducing power consumption in the low-power state. Refer to the Core SMPS Offset section in the MAX17480 IC data sheet for a detailed description of this feature.

When configured in separate mode, the address of the core SMPSs (VCORE0 and VCORE1) can be exchanged, allowing for flexible layout of the MAX17480 with respect to the CPU placement on the same or opposite sides of the PCB. Table 9 shows the OPTION pin voltage levels and the features that are enabled.

## MAX17480 Evaluation Kit

## MAX17480 Evaluation Kit

## Offset and Current-Limit Setting for NB SMPSs (ILIM3)

The offset and current-limit settings of the NB SMPS can be set by the ILIM3 pin setting. Table 10 shows the ILIM3 pin voltage levels and the corresponding settings for the offset and current limit of the NB SMPS. Refer to the NB SMPS Offset and the Peak Current Limit sections in the MAX17480 IC data sheet for a detailed description  of  the  respective  features.  The  12.5mV  NB  SMPS offset is always present regardless of PSI\_L setting.

## Combined-Mode Operation

The MAX17480 EV kit is configured for combined-mode operation with GNDS2 connected to VDDIO through R74 (PC trace short). To work with the address change feature, the MAX17480 could alternatively be configured in combined mode by connecting GNDS1 to VDDIO and using GNDS2 as the remote ground-sense connection. To do this, remove R21 and use a wire to connect GNDS1 to VDDIO. Then cut the PC trace short at R74 and install resistor R13 (100 Ω , 0603) and capacitor C16 (4700pF, 0603).

The SW1-SW4 switches and the EV kit software controls  the  combined SMPS and VOUT\_NB outputs in combined mode. In combined mode, the MAX17480 SMPS only responds to Core 0 commands. Core 1 commands are ignored.

In combined mode, unchecking the Power-Saving Off checkbox in the software sets the MAX17480 SMPS into single-phase operation. Checking the Power-Saving Off checkbox in the software sets the MAX17480 SMPS into dual-phase operation.

## Table 10. Jumper JU3 Function (ILIM3)

| SHUNT POSITION   | ILIM3            |   PEAK CURRENT LIMIT (A) |   MAX DC CURRENT (A) |   FULL-LOAD DROOP (mV) |
|------------------|------------------|--------------------------|----------------------|------------------------|
| 1-2*             | Connected to VDD |                     5.25 |                 4.75 |                 -26.13 |
| 2-3              | Connected to GND |                     4.25 |                 3.75 |                 -20.63 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Separate-Mode Operation

Separate-mode  operation  can  be  evaluated  by installing  the  MAX17480 onto the MAX17080 EV kit. Alternatively,  separate-mode  evaluation  on  the MAX17480 EV kit can be done by separating C5 and C6 from C7 and C8 and connecting GNDS2 to the lowend remote sense of Core 1 (CORESENSE1\_L). This is accomplished by making the following changes to the EV kit:

- 1) Uninstall capacitor C19.
- 2) Cut the VCORE0 planes (top and bottom sides) in half.  Cut along the exposed copper that runs through the planes.
- 3) Cut the short at R74.
- 4) Install resistor R13 (100 Ω , 0603) and capacitor C16 (4700pF, 0603).

The SW1-SW4 pushbutton switches and the EV kit software still control the core SMPSs (VCORE0 and VCORE1) and VOUT\_NB outputs in separate mode. In separate mode, the MAX17480 SMPS1 responds to Core 0 commands and SMPS2 responds to CORE 1 commands.

In  separate mode, unchecking the Power-Saving Off checkbox in the software sets each MAX17480 SMPS into one-phase skip mode (power-saving mode). Checking the Power-Saving Off checkbox in the software sets each MAX17480 SMPS in PWM mode.

<!-- image -->

## MAX17480 Evaluation Kit

<!-- image -->

Figure 2a. MAX17480 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

Figure 2b. MAX17480 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17480 Evaluation Kit

<!-- image -->

Figure 3. MAX17480 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

Figure 4. MAX17480 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17480 Evaluation Kit

<!-- image -->

Figure 5. MAX17480 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

Figure 6. MAX17480 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17480 Evaluation Kit

<!-- image -->

Figure 7. MAX17480 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

Figure 8. MAX17480 EV Kit PCB Layout-Internal Layer 5

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17480 Evaluation Kit

<!-- image -->

Figure 9. MAX17480 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17480 Evaluation Kit

Figure 10. MAX17480 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

22

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600