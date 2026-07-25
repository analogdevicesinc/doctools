<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1280 Evaluation Kit/Evaluation System

## General Description

The MAX1280 evaluation system (EV system) is a complete, 8-channel data-acquisition system consisting  of  a  MAX1280 evaluation kit (EV kit), Maxim 68HC16MODULE-DIP microcontroller (µC) module, and USBT0232. The MAX1280 is a high-speed, multichannel, 12-bit data-acquisition system. Windows ® 98/2000/XP-compatible software provides a handy user interface to exercise the MAX1280's features.

Order the complete EV system (MAX1280EVC16) for a comprehensive evaluation of the MAX1280 using a PC. Order the EV kit (MAX1280EVKIT) if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

Windows is a registered trademark of Microsoft Corp.

## Component Lists MAX1280 EV System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX1280EVKIT     |     1 | MAX1280 EV kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module              |
| USBTO232+        |     1 | USB-to-COM port adapter board |

## MAX1280 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                   |
|---------------|-------|-------------------------------|
| C1-C8, C10    |     9 | 0.01µF ceramic capacitors     |
| C9            |     1 | 4.7µF, 10V tantalum capacitor |
| C11, C13      |     2 | 0.1µF ceramic capacitors      |
| C12, C14      |     2 | 10µF, 10V tantalum capacitors |
| J1            |     1 | 2 x 20 right-angle socket     |
| JU1           |     1 | 2-pin header                  |
| JU2           |     1 | 3-pin header                  |
| R1-R8         |     8 | 300 Ω ±5% resistors           |
| R9, R10       |     2 | 10 Ω ±1% resistors            |
| TP1           |     1 | 8-pin header                  |
| U1            |     1 | MAX1280BCUP (20-pin TSOP)     |
| -             |     1 | PCB: MAX1280 Evaluation Kit   |

## MAX1280 EV Kit Files

| FILE        | DESCRIPTION                                  |
|-------------|----------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on user's computer |
| MAX1280.EXE | Application program                          |
| KIT1280.C16 | Software loaded into 68HC16 µC module        |

- ♦ Proven PCB Layout
- ♦ Convenient On-Board Test Points
- ♦ Data-Logging Software
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows 98/2000/XP with RS-232/COM Port
- ♦ EV Kit Software Supports Windows 2000/XP with USB Port

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX1280EVKIT | 0°C to +70°C | User supplied    |
| MAX1280EVC16 | 0°C to +70°C | Windows software |

Note: The MAX1280 software is designed for use with the complete MAX1280EVC16 EV system (includes 68HC16MODULEDIP module, USBTO232, and MAX1280EVKIT). If the MAX1280 evaluation software will not be used, the MAX1280EVKIT board can be purchased by itself, without the µC.

## Quick Start

## Recommended Equipment (USB Port/PC Connection Option)

Before beginning, the following equipment is needed:

- ·
- MAX1280 EV system: MAX1280 EV kit 68HC16MODULE-DIP USBTO232 (USB cable included)
- A small DC power supply, such as a 12VDC, 0.25A plug-in transformer, or a 9V battery
- A user-supplied Windows 2000/XP computer with an available USB port to connect to the USBTO232 board

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 2000/XP operating system.

## Connections and Setup

The MAX1280 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connec-

tions are completed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

## MAX1280 Evaluation Kit/Evaluation System

- 1) Visit  the  Maxim website (www.maxim-ic.com) to download the latest version of the USBTO232 User Guide. Follow the steps in the USBTO232 User Guide Quick Start section and return to step 2 of this Quick Start section when finished.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX1280 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 3) Ensure that jumper JU1 is closed and jumper JU2 is in the 1-2 position.
- 4) Connect a 7VDC to 20VDC power source to the µC module at the terminal block located next to the on/off switch, along the top-edge of the µC module. Observe the polarity marked on the board.
- 5) Connect the USBTO232 board to the 68HC16MODULEDIP module if you have not done so already.
- 6) The MAX1280 EV kit software should have already been downloaded and installed in the USBTO232 Quick Start.
- 7) Start the MAX1280 program by opening its icon in the Start | Programs menu.
- 8) Turn on the power supply and slide SW1 to the ON position on the 68HC16MODULE-DIP module. Press the OK button to automatically connect and download the KIT1280.C16 file to the module.
- 9) Apply an input signal between analog common (COM) and input channel CH0. Observe the readout on the screen.

## Recommended Equipment (RS-232-to-COM Port/PC Connection Option)

Before beginning, the following equipment is needed:

- MAX1280 EV system: MAX1280 EV kit 68HC16MODULE-DIP
- A small DC power supply, such as a 12VDC, 0.25A plug-in transformer, or a 9V battery
- A user-supplied Windows 98/2000/XP computer with an available serial (COM) port, preferably a 9-pin plug
- A serial cable to connect the computer's serial port to the 68HC16MODULE-DIP

## Connections and Setup

The MAX1280 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on the power until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install  the  MAX1280 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Carefully connect the boards by aligning the 40-pin header of the MAX1280 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 4) Ensure that jumper JU1 is closed and jumper JU2 is in the 1-2 position.
- 5) Connect a 7VDC to 20VDC power source to the µC module at the terminal block located next to the on/off switch, along the top-edge of the µC module. Observe the polarity marked on the board.
- 6) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, and DCD) to confirm that the correct port has been selected.
- 7) Start the MAX1280 program by opening its icon in the Windows Start | Programs menu.
- 8) Turn the power on and slide SW1 to the ON position.  The program will automatically download KIT1280.C16 to the module.
- 9) Apply an input signal between analog common (COM) and input channel CH0. Observe the readout on the screen.

## Detailed Description

## MAX1280 Stand-Alone EV Kit

The MAX1280 EV kit provides a proven printed-circuit board (PCB) layout to evaluate the MAX1280. It must be interfaced to appropriate timing signals for proper operation. Connect +5V to VDD1 and VDD2, and connect the ground return to GND. See the MAX1280 EV kit schematic (Figure 1). Refer to the MAX1280 IC data sheet for timing requirements.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1280 Evaluation Kit/Evaluation System

## MAX1280 EV System

The MAX1280 EV system operates from a user-supplied  7VDC  to  20VDC  power  supply.  Windows 98/2000/XP-compatible software running on a PC interfaces to the EV system board through the computer's serial  communications port. See the Recommended Equipment and Connections and Setup sections for setup and operating instructions.

## Description of Software

The evaluation software's main window controls the active control word bits, serial clock speed, and sample rate. It  displays  the  voltage  and  output  code for each active channel, as well as some statistics of the input signal. A separate graph window shows the data changing in real time. The update rate is limited to about 10 samples per second due to COM port bandwidth limitations.

## Controls

The control word is divided into several fields. To change the active control word, drop down the appropriate field's combo box and select the desired option. If  the  QSPI™ clock is set to STOP ,  then  configuration data will not be sent until the READ button is clicked.

## Statistics

The Minimum and Maximum fields show the highest and lowest readings acquired. The Average field shows a running mean based on the equation ai = (k)(xi) + (1 - k) (ai-1).  The Clear button resets the statistics. To remove offset errors, first apply 0V to the active input channel, clear statistics, acquire some samples, and then check Tare .  This average offset voltage will now be subtracted from all subsequent measurements.

## Sampling

Choose the desired sampling rate (QSPI Clock), sampling size ( Sample! menu item), click Begin Sampling! (in Sample! pop-up window). Sample size is restricted to a power of 2 to permit FFT processing once the data is saved to a file. After the samples have been collected, the data is automatically uploaded to the host and is graphed. Once displayed, the data can optionally be saved to a file.

## Saving Graphs to Disk

Data in the real-time graph and in sampled data graphs may be saved to a file. Only the raw output codes are saved, but voltages may be inferred, based on the reference voltage and the maximum code value.

QSPI is a trademark of Motorola, Inc.

<!-- image -->

## Scanning All Channels

To scan through all channels, select SCAN from the INPUT menu.

## Evaluating Shutdown

The evaluation software configures the 68HC16's QSPI submodule  to  continuously  read  data  from  the MAX1280 into the 68HC16. The sample rate is controlled  by  the  QSPI  clock.  To  evaluate  power-saving modes, these automatic updates must be stopped. First, set the QSPI clock control to STOP . This reconfigures the 68HC16's QSPI submodule to stop driving the serial clock. Second, in the evaluation software's main window, uncheck the Read Every...msec checkbox. Next, choose the desired software power-down control word, and click the Read button to send the new configuration  to  the  MAX1280. Or, if  evaluating  the  hardware shutdown, move jumper JU2 to the 2-3 position. Sense the supply current by measuring the voltage across resistors R9 and R10.

## Reference Voltage

The evaluation software assumes a 2.5V reference voltage, unless otherwise specified. Refer to the MAX1280 IC data sheet for more information. To override this value, type the new reference voltage into the Vref edit box and click the Set Vref button.

## Description of Hardware

U1, the MAX1280, is a high-speed, multichannel, 12-bit data-acquisition system. Resistors R1-R8 and capacitors  C1-C8 form single-pole, lowpass anti-aliasing filters  with  a  nominal  3ms time constant and approximately a 50kHz corner frequency. Jumper JU1 connects the analog common (COM) to ground (GND). C10 bypasses the bandgap reference, and C9 bypasses the analog-to-digital converter's (ADC's) voltage reference. When plugged into the 68HC16MODULE, VDD1 and VDD2 are both powered by +5V. See the MAX1280 EV kit schematic (Figure 1) and refer to the MAX1280 IC data sheet.

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                                                                    |
|----------|------------|-----------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed*    | COM is connected to GND                                                                                                     |
| JU1      | Open       | COM is disconnected from GND. All analog inputs, including COM, must still be within the MAX1280's common-mode input range. |
| JU2      | 1-2*       | Operate                                                                                                                     |
| JU2      | 2-3        | Shutdown                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1280 Evaluation Kit/Evaluation System

## Measuring Supply Current

Power-supply current can be monitored by measuring the voltage across resistor R9 (for VDD1) or R10 (VDD2). These resistors are 10 Ω ±1%, so every 0.001V across R9 represents 100µA of supply current.

## Troubleshooting

## Problem: No output measurement. System seems to report zero voltage or fails to make a measurement.

- 1) Check VDD1 and VDD2 supply voltages.
- 2) Check the 2.5V reference voltage using a DVM.
- 3) Verify with an oscilloscope that the conversion-start signal is being strobed.
- 4) Verify that SHDN is being driven high.

## Problem: Measurements are erratic, unstable; poor accuracy.

- 1) Check the reference voltage using a DVM.
- 2) Use an oscilloscope to check for noise. When probing  for  noise,  keep  the  oscilloscope  ground  return lead as short as possible, preferably less than 1/2in (10mm).

Figure 1. MAX1280 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1280 Evaluation Kit/Evaluation System

```
,QLW /'$$ &6 KLJK  FORFN ORZ E\ GHIDXOW 67$$ 43'5 /'$$    ) 67$$ 43$5 SLQV WKDW DUH DVVLJQHG WR WKH 463, /'$$    ( 67$$ 4''5 460 SLQV WKDW DUH RXWSXWV /'$$ &5&217 67$$ &5 VHQG HLJKW ELW FRQWURO ZRUG  DQG FRQWLQXH 67$$ &5 67$$ &5 67$$ &5( /'$$ &5%,76( 67$$ &5 UHFHLYH VL[WHHQ ELW GDWD ILHOG 67$$ &5 67$$ &5 67$$ &5) &/5' VHQG ]HUR ZKHQ UHFHLYLQJ GDWD 67'  75 67'  75 67'  75 67'  75) /'$% FKDQQHO    XQLSRODU  VLQJOH HQGHG  SG VWG  75 FKDQQHO   FRPPDQG OGDE FKDQQHO   ELW PDVN RUG  75 VWG  75 FKDQQHO   FRPPDQG OGDE FKDQQHO   ELW PDVN RUG  75 VWG  75 FKDQQHO   FRPPDQG OGDE FKDQQHO   ELW PDVN RUG  75 VWG  75( FKDQQHO   FRPPDQG &/5  63&5 GLVDEOH 463, KDOW PRGH LQWHUUXSW /'' %,76     63%5          0+]   &32/    &3+$ 67'  63&5 /'' '6&.  '7/ QRW XVHG 67'  63&5 /''     ) QHZTS    HQGTS     ZUDS WR ]HUR 67'  63&5 UXQ 463, FRQWLQXRXVO\ RQ DOO FKDQQHOV %6(7: 63&5 VWDUW WKH 463, %&/5  6365 FOHDU 63,) ELW 5HDG/RRS /''  55 MVU  3URFHVVB&KDQQHOB /''  55 MVU  3URFHVVB&KDQQHOB /''  55 MVU  3URFHVVB&KDQQHOB /''  55) MVU  3URFHVVB&KDQQHOB MPS  5HDG/RRS
```

Example 1. Reading All Channels with QSPI

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1280 Evaluation Kit/Evaluation System

```
,QLW /'$$ &6 KLJK  FORFN ORZ E\ GHIDXOW 67$$ 43'5 /'$$    ) 67$$ 43$5 SLQV WKDW DUH DVVLJQHG WR WKH 463, /'$$    ( 67$$ 4''5 460 SLQV WKDW DUH RXWSXWV /'$$ &5&217 67$$ &5 VHQG HLJKW ELW FRQWURO ZRUG  DQG FRQWLQXH /'$$ &5%,76( 67$$ &5 UHFHLYH VL[WHHQ ELW GDWD ILHOG &/5' VHQG ]HUR ZKHQ UHFHLYLQJ GDWD 67'  75 /'$% FKDQQHO    XQLSRODU  VLQJOH HQGHG  SG VWG  75 FKDQQHO   FRPPDQG &/5  63&5 GLVDEOH 463, KDOW PRGH LQWHUUXSW /'' %,76     63%5          0+]   &32/    &3+$ 67'  63&5 /'' '6&.  '7/ QRW XVHG 67'  63&5 /'' QHZTS    HQGTS    QR ZUDS 67'  63&5 5HDG/RRS %6(7: 63&5 VWDUW WKH 463, %&/5  6365 FOHDU 63,) ELW ,GOH %5&/5 6365      ,GOH ZDLW XWLO 63,) ELW LV VHW /''  55 52/' 52/' 52/' MVU  3URFHVVB&KDQQHOB MPS  5HDG/RRS
```

Example 2. Reading a Single Channel with QSPI

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1280 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX1280 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1280 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX1280 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: Title change-all pages,1-4, 7, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7