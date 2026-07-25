<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX16816 evaluation kit (EV kit) demonstrates the programmable MAX16816 current-mode, high-brightness LED (HBLED) driver IC. The EV kit is configured as a stepdown/step-up (buck-boost) topology circuit with peak inductor current control and DC LED current control for driving external LEDs. The EV kit operates from a DC supply voltage of 9V to 40V and is configured to deliver 1.33A of current. The maximum output voltage of the LED string can be up to 28V. The EV kit can be configured for analog PWM- or digital-PWM-controlled dimming operation using either an analog linear DC voltage or a digital PWM input signal to control the LEDs' brightness. This EV kit has an undervoltage lockout (UVLO) feature that disables the EV kit,  and overvoltage protection that protects the circuit under no-load or open HBLED conditions. The EV kit circuit demonstrates the MAX16816 IC's clock output and features an input for synchronizing to an external clock.

The EV kit uses a 1-Wire ® interface for programming the MAX16816 IC's nonvolatile EEPROM. Adjustable features include programmable LED current (binning), external MOSFET gate driver supply voltage, leadingedge blanking time, digital soft-start duration, RTSYNC oscillator enable/disable, and slope compensation. The EV kit includes Windows ® 2000/XP/Vista ® -compatible software that provides a simple graphical user interface (GUI) for updating the MAX16816 EEPROM. Visit www.maxim-ic.com/evkitsoftware to download the latest version of the EV kit software. The EV kit can also interface with a user-supplied 1-wire interface circuit for stand-alone MAX16816 operation.

Caution: Do not power up the MAX16816 EV kit without connecting a load to the LED+ and LED- PCB pads.

Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

Features

- ♦ 9V to 40V Wide Supply Voltage Range
- ♦ 1.33A Output Current
- ♦ Analog PWM-  and Digital-PWM-Controlled Dimming
- ♦ Output Overvoltage Protection
- ♦ Demonstrates Buffered Clock Output
- ♦ Programmable EEPROM Controlling

LED Current (Binning) External MOSFET Gate Driver Supply Voltage Leading-Edge Blanking Time Digital Soft-Start Duration RTSYNC Oscillator Enable/Disable Slope Compensation

- ♦ Nonvolatile EEPROM for Saving Register Values
- ♦ USB-PC Connection (Cable Included)
- ♦ USB-Powered USB-to-1-Wire Interface Circuit
- ♦ 1-Wire Interface Terminals for Evaluating a UserSupplied 1-Wire Interface
- ♦ Windows 2000/XP/Vista (32-Bit)-Compatible Software
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16816EVKIT+ | EV Kit |

1-Wire is a registered trademark of Maxim Integrated Products, Inc. Windows and Windows Vista are registered trademarks of Microsoft Corp.

| DESIGNATION                       |   QTY | DESCRIPTION                                                         |
|-----------------------------------|-------|---------------------------------------------------------------------|
| C1, C3, C4, C5, C15, C18, C20-C25 |    12 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C2                                |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K    |
| C6                                |     0 | Not installed, capacitor (0603)                                     |
| C7, C19                           |     2 | 10µF ±10%, 16V X7R ceramic capacitors (1206) Murata GRM31CR71C106K  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C8            |     1 | 100µF ±20%, 50V electrolytic capacitor (10.3mm x 10.3mm) Panasonic EEEFC1H101P |
| C9            |     1 | 10µF ±10%, 50V X7S ceramic capacitor (1210) Taiyo Yuden UMK325BJ106KM          |
| C10, C11, C12 |     3 | 4.7µF ±10%, 100V X7R ceramic capacitors (2220) Murata GRM55ER72A475K           |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16816 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| R1            |     1 | 73.2k Ω ±1% resistor (0603)                                        |
| R2            |     1 | 12.4k Ω ±1% resistor (0603)                                        |
| R3            |     1 | 0.1 Ω ±1%, 500mW sense resistor (1206) IRC LRC-LR-1206LF-01-R100-F |
| R4            |     1 | 100 Ω ±5% resistor (0603)                                          |
| R5            |     1 | 1 Ω ±5% resistor (0805)                                            |
| R6, R7        |     2 | 0.04 Ω ±1%, 2W sense resistors (2512) IRC LRC-LR-2512LF-01-R040-F  |
| R8            |     0 | Not installed, resistor (0805)                                     |
| R9            |     1 | 280k Ω ±1% resistor (0603)                                         |
| R10, R15      |     2 | 4.99k Ω ±1% resistors (0603)                                       |
| R11, R28      |     2 | 1k Ω ±1% resistors (0603)                                          |
| R12           |     1 | 3.32k Ω ±1% resistor (0603)                                        |
| R13           |     1 | 42.2k Ω ±1% resistor (0603)                                        |
| R14           |     1 | 100k Ω single-turn potentiometer                                   |
| R16, R17      |     2 | 27 Ω ±5% resistors (0603)                                          |
| R18           |     1 | 1.5k Ω ±5% resistor (0603)                                         |
| R19           |     1 | 470 Ω ±5% resistor (0603)                                          |
| R20, R21      |     2 | 10k Ω ±5% resistors (0603)                                         |
| R22           |     1 | 3.24k Ω ±5% resistor (0603)                                        |
| R23           |     1 | 2.2k Ω ±5% resistor (0603)                                         |
| R25, R26, R27 |     3 | 0 Ω ±5% resistors (0603)                                           |
| TP1           |     0 | Not installed, small PCB test point                                |
| U1            |     1 | Current-mode HBLED driver (32 TQFN-EP*) Maxim MAX16816ATJ+         |
| U2            |     1 | UART- to-USB converter (32 TQFP)                                   |
| U3            |     1 | 93C46 3-wire 16-bit EEPROM (8 SO)                                  |
| USB           |     1 | USB type-B right-angle female receptacle                           |
| Y1            |     1 | 6MHz crystal                                                       |
| -             |     1 | Shunt (JU1)                                                        |
| -             |     1 | USB high-speed A-to-B cable, 6ft                                   |
| -             |     1 | PCB: MAX16816 Evaluation Kit+                                      |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C13           |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H473K                           |
| C14           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K                         |
| C16, C17      |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GQM1885C1H101J                          |
| C26, C27      |     2 | 27pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H270J or Panasonic ECJ0EC1H270J |
| C28           |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H332K                            |
| C29, C30      |     2 | 470pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H471J                          |
| D1            |     1 | 100V, 300mA diode (SOD123) Diodes Inc. 1N4148W-7-F (Top Mark: T4)                           |
| D2            |     0 | Not installed, diode (SOD123)                                                               |
| D3            |     1 | 100V, 3A Schottky diode (PowerDI 5) Diodes Inc. PDS3100                                     |
| D4            |     1 | 100V, 1A Schottky diode (SMA) Diodes Inc. B1100-13-F                                        |
| FB1           |     0 | Not installed, ferrite-bead inductor (0603)                                                 |
| JU1           |     1 | 2-pin header                                                                                |
| L1            |     0 | Not installed, inductor (14.9mm x 14.9mm)                                                   |
| L2            |     1 | 10µH, 9.2A inductor (14.9mm x 14.9mm) Sumida CDEP147NP-100MC-125                            |
| N1            |     1 | 60V, 3.2A n-channel MOSFET (6 TSOP) Vishay Si3458DV-T1-E3 (Top Mark: 58)                    |
| N2            |     1 | 100V, 42A n-channel MOSFET (D-Pak) International Rectifier IRLR3110ZPBF                     |
| N3            |     0 | Not installed, MOSFET (D-Pak)                                                               |
| N4, N5        |     2 | 60V, 115mA n-channel MOSFET (SOT23) Fairchild 2N7002                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Inc.                            | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX16816 when contacting these component suppliers.

## MAX16816 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX16816.EXE | Application program                        |
| FTD2XX.DLL   | USB device driver file                     |
| UNINST.INI   | Uninstalls the EV kit software             |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX16816 EV kit (USB cable included)
- A user-supplied Windows 2000/XP/Vista PC with a spare USB port
- 9V to 40V, 4A DC power supply
- A series-connected LED string rated at 1.5A (28V max)
- A digital  multimeter (DMM) fused for 10A current measurement

Note: In  the  following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX16816 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed and do not power up the MAX16816 EV kit without connecting a load to the LED+ and LED- PCB pads.

Warning: Voltages exceeding 42V may exist on the LED+ and LED- output pads.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 16816Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu. Do not run the EV kit software until step 15.
- 3) Connect the USB cable from the PC to the EV kit board. A New Hardware Found window pops up when installing the USB driver for the first time. If you do not see a window that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 4) Follow the directions of the Add New Hardware Wizard to  install  the  USB  device  driver.  Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX16816 (default  installation  directory)  using  the Browse button. During device driver installation,  Windows might show a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation.
- 5) Once the hardware installation is complete, disconnect the USB cable from the EV kit.
- 6) Verify  that  a  shunt  is  installed  across  jumper  JU1 (analog PWM-dimming control).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

- 7) Connect the anode of the LED string to the LED+ PCB pad and the cathode to the DMM's positivecurrent terminal.
- 8) Connect the DMM's negative-current terminal to the LED- PCB pad.
- 9) Set the power-supply output to 12V and disable the power-supply output.
- 10) Connect the power supply's positive terminal to the VIN PCB pad and the negative terminal to the PGND PCB pad.
- 11) Connect the USB cable to the EV kit.
- 12) Enable the power-supply output.
- 13) Adjust potentiometer R14 clockwise by one full turn to obtain a 100% duty cycle.
- 14) Verify  that  the  DMM measures an LED current of 1.33A DC.
- 15) Start the MAX16816 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.

Figure 1. MAX16816 EV kit Software Main Window

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

## Detailed Description of Software

The main window of the MAX16816 EV kit software (Figure 1) displays a drop-down list for each of the MAX16816 IC's programmable features. The dropdown lists adjust the following programmable features: LED current (binning), external MOSFET gate driver supply voltage, leading-edge blanking time, digital softstart  duration,  RTSYNC oscillator enable/disable, and slope compensation.

Upon software startup, the EV kit USB-to-I 2 C circuit and EV kit software force the MAX16816 IC U1 into programming mode by starting communication with U1. In programming mode, the USB programming circuit controls the U1 UVEN pin, for enabling/disabling U1, and the U1 FAULT pin as a 1-wire data/clock port. The software initially  reads  the  U1's  scratchpad registers and displays the active values in the drop-down lists. These values are loaded to the scratchpad registers from U1's nonvolatile  EEPROM upon IC power-up. Selecting a value from any of the drop-down lists writes to the IC's scratchpad registers, modifying the EV kit's active values.

Press the Write EE button  to  write  the  scratchpad register  values  to  U1's  EEPROM. Press the Read EE button to read the EEPROM values. Pressing the Read EE button prior to pressing the Write EE button overwrites the current drop-down list values. Press the Exit EE button to exit programming mode, restoring the UVEN and FAULT pins' standard functionality. Refer to the  EEPROM  and  Programming section  in  the MAX16816 IC data sheet for more information.

## Connection Settings and Tools

Click the Connection menu item to attempt a reconnect with the EV kit or to exit the software. Click the Tools menu item to view the software message log or to set the 1-wire clock speed.

## Binning Adjustment Voltage

Set a value of VSS (binning adjustment voltage) between 100mV and 166.67mV using the Binning Adjust (BIN) drop-down list. Refer to the Load Current Sense section in the MAX16816 IC data sheet for additional information on adjusting the binning voltage.

## Gate Driver Supply Voltage

Select a REG2 output voltage between 5V to 15V by using the Gate Driver Power Supply Voltage (DRSP) drop-down list. On the EV kit, the REG2 output voltage is the supply voltage for the primary switching MOSFET driver (DRV). Refer to the Regulators (REG1, REG2, CLAMP) section in the MAX16816 IC data sheet for more information on setting the REG2 output voltage.

<!-- image -->

## Leading-Edge Blanking Time

The MAX16816 IC features a programmable built-in blanking circuit for the current-sense signal that prevents premature termination of the on cycles. Set a blanking time by selecting a value between 75ns and 150ns using the SENSE Signal Blanking Time (BLNK) drop-down list. To increase blanking time beyond 150ns, install a 0603 ceramic capacitor at C6 between 100pF and 1000pF.

Refer to the Blanking Time Adjustment Register (BLNK) section in the MAX16816 IC data sheet for additional information.

## Digital Soft-Start

Select a soft-start delay time between 0 (no delay) to 4.096ms by using the Digital Soft Start Duration (SS) drop-down list. Setting the soft-start delay time to a low value could cause improper LED driver startup. Refer to the Soft-Start section in the MAX16816 IC data sheet for more information on this feature.

## Oscillator Settings

Select OFF from the RTOSC On / Off (RTOF) dropdown list to enable the MAX16816 IC's internal 125kHz oscillator. Select ON from the RTOSC On / Off (RTOF) drop-down list to enable the RTSYNC oscillator.

## Slope Compensation

Select a peak ramp voltage for slope compensation between  0  and  300mV  by  using  the Slope Compensation (ESLP) drop-down list. Refer to the Slope Compensation section in the MAX16816 IC data sheet for more information on choosing a value.

## Detailed Description of Hardware

The MAX16816 EV kit demonstrates the MAX16816 current-mode HBLED driver IC. The EV kit is configured in a step-down/step-up (buck-boost) topology with peak current control and DC current control for a string  of  user-supplied  HBLEDs. The EV kit operates from a DC supply voltage of 9V to 40V and requires up to 4A. The circuit is configured to deliver 1.33A of current  into  a  series  LED  string  with  a  maximum  of  28V forward voltage.

The EV kit sets the maximum peak-series inductor current to 8.3A using parallel resistors R6 and R7. The DC LED current is set to 1.33A using resistor R3. A CLKOUT PCB pad is available to monitor the oscillator frequency. A DIM PCB pad is also provided for analog PWM- or digital PWM-dimming operation of the external LEDs, and to monitor the analog DC voltage applied to the MAX16816 IC DIM pin.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

## Peak Inductor Current-Limit Setting

The parallel combination of current-sense resistors R6 and R7 sets the EV kit's peak inductor current limit to 8.3A. Use the following equation to calculate the total parallel  resistance  needed to reconfigure the inductor peak current limit:

<!-- formula-not-decoded -->

where RSENSE is the total parallel resistance placed at the R6 and R7 PCB pads and IPEAK is the desired inductor peak current.

Refer to the ILIM and HICCUP Comparator section in the MAX16816 IC data sheet for additional information on setting the peak current-limit threshold.

## Setting External LED Current

Resistor R3 sets the MAX16816 EV kit's DC LED current to  1.33A.  Use the following equation to calculate R3 when reconfiguring the LED current:

<!-- formula-not-decoded -->

where VSS is the binning adjustment voltage (software configurable) and ILED is the desired DC LED current. Set the value of VSS by selecting a value between 100mV and 166.67mV using the Binning Adjust (BIN) drop-down list.

## Oscillator Settings

Select ON from the RTOSC On / Off (RTOF) dropdown list to enable the RTSYNC oscillator and/or synchronize the MAX16816 EV kit to an external clock.

The EV kit is configured for a 300kHz RTSYNC oscillator frequency. Program the RTSYNC oscillator switching frequency between 125kHz and 500kHz using R13 and the equation below:

<!-- formula-not-decoded -->

where fSW is the switching frequency in kilohertz and R13 is in kilohms.

The EV kit can synchronize the RTSYNC oscillator frequency to an external 125kHz to 500kHz clock signal with a 2.8V to 5.5V logic level after five successive clock edges. Connect the external clock signal across the RTSYNC and AGND PCB pads.

The CLKOUT PCB pad provides a buffered digital clock output that can drive the SYNC input of another device (e.g., RTSYNC of another MAX16816 IC) and a 500pF load.

Refer to the Oscillator, Clock, and Synchronization section  in  the  MAX16816 IC data sheet for information on setting the MAX16816 IC PWM frequency.

## LED Dimming Control

LED dimming can be achieved on the MAX16816 EV kit by applying a digital PWM signal or an analog DC voltage at the DIM PCB input pad. Jumper JU1, potentiometer R14, resistor R15, and capacitor C15 configure the MAX16816 EV kit for analog PWM-controlled dimming operation.

Place a shunt across jumper JU1 to set the EV kit for analog PWM-controlled dimming and adjust potentiometer R14. The analog DC voltage at the DIM PCB pad sets the duty cycle of the LED current, which controls  the  external  LED  brightness.  The  MAX16816 IC DIM pin voltage can be monitored by placing a voltmeter across the DIM and AGND PCB pads.

Use the following equation to calculate the voltage at the DIM PCB pad, which is necessary to program the LED output current duty cycle (D):

<!-- formula-not-decoded -->

where VDIM is the analog DC voltage at the MAX16816 EV kit DIM PCB pad in volts, and D is the desired duty cycle of the LED output current.

When operating the MAX16816 EV kit with analog PWM-controlled dimming, the LED dimming frequency is internally set by the MAX16816 IC to 200Hz.

Remove the shunt at jumper JU1 to control LED dimming using a digital PWM signal at the DIM PCB pad. Apply a digital PWM signal with a 3.2V to 15V logichigh level in the 200Hz to 2kHz frequency range and adjust the duty cycle to adjust the LED brightness. See Table 1 to set LED dimming operation.

## Table 1. MAX16816 LED Dimming Operation (Jumper JU1)

| SHUNT POSITION   | DIM PIN CONNECTED TO     | EV KIT DIMMING OPERATION                  |
|------------------|--------------------------|-------------------------------------------|
| Not installed    | DIM PCB pad              | Digital PWM signal applied at DIM PCB pad |
| Installed        | Potentiometer R14, pin 2 | Analog DC voltage adjusted using R14      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

## Undervoltage Lockout (UVLO)

The MAX16816 EV kit's UVLO threshold is configured to 8.3V using resistors R1 and R2. The UVEN PCB pad can be used to disable the EV kit circuit by connecting UVEN to AGND. To configure the circuit to a different UVLO threshold,  refer  to  the Setting  the  UVLO Threshold section in the MAX16816 IC data sheet.

LED+ exceeds the programmed 70.8V threshold, PWM switching is terminated and no further energy is transferred to the load connected between LED+ and LED-. Refer to the Setting the Overvoltage Threshold section in the MAX16816 IC data sheet for setting the overvoltage threshold.

## Output Overvoltage Protection

The maximum voltage on the LED+ PCB pad is limited to 70.8V, with respect to AGND, by a feedback network formed by resistors R9 and R10. When the voltage at Warning: If the EV kit is turned on with no load, the voltage at LED+ might rise to unsafe levels. Even though the EV kit has overvoltage protection, connect the specified load before powering up the EV kit.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

Figure 2. MAX16816 EV Kit Schematic-Application Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

<!-- image -->

Figure 3. MAX16816 EV Kit Schematic-USB-to-I 2 C Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

Figure 4. MAX16816 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX16816 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16816 Evaluation Kit

<!-- image -->

Figure 6. MAX16816 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 7. MAX16816 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16816 Evaluation Kit

Figure 8. MAX16816 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600