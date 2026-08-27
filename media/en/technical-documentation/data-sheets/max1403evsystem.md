<!-- lastmod 2022-08-03 -->
## General Description

The MAX1403 evaluation system (EV system) is a complete, multichannel data-acquisition system consisting of a MAX1403 evaluation kit (EV kit) and a Maxim 68HC11 microcontroller (µC) module. The MAX1403 is a lowpower, multichannel, serial-output analog-to-digital converter (ADC). Windows 95/98™-compatible software provides a handy user interface to exercise the MAX1403's features. Source code in C++ and 68HC11 assembly language is provided for the low-level portion of the software.

Order the EV system for comprehensive evaluation of the MAX1403 using a personal computer. Order only the EV kit if the 68HC11 µC module has already been purchased with a previous Maxim EV system or for custom use in other µC-based systems.

The MAX1403 EV kit and EV system can also be used to evaluate the MAX1401. Simply order a free sample of the MAX1401CAI along with the MAX1403EVKIT.

## MAX1403 Stand-Alone EV Kit

The MAX1403 EV kit provides a proven PC board layout to facilitate evaluation of the MAX1403 with user-provided software and hardware. It must be interfaced to appropriate timing signals for proper operation. Refer to the  MAX1403 data sheet for timing requirements. See Table 2 for jumper functions.

## MAX1403 EV System

The MAX1403 EV system operates from a user-supplied +5V to +12V DC power supply.

## MAX1403 EV System Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX1403EVKIT |     1 | MAX1403 Evaluation Kit |
| 68L11DMODULE |     1 | 68HC11 µC Module       |

Windows 95/98 is a trademark of Microsoft Corp.

- ' Easy to Configure
- ' Collects Up to 8192 Samples at Full Speed
- ' Complete Evaluation System
- ' Proven PC Board Layout
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | INTERFACE TYPE   |
|--------------|---------------|------------------|
| MAX1403EVKIT | 0°C to +70°C  | User-Supplied    |
| MAX1403EVL11 | 0°C to +70°C  | Windows Software |

Note: The MAX1403 software can be used only with the complete evaluation system (MAX1403EVL11), which includes the 68L11DMODULE together with the MAX1403EVKIT.

## MAX1403 EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C3-C8         |     6 | 100pF ceramic capacitors (1206)                                                                |
| C9, C10, C11  |     3 | 0.1µF ceramic capacitors (1206)                                                                |
| C12, C13      |     0 | Not installed                                                                                  |
| C15           |     1 | 2.2µF aluminum electrolytic radial- leaded capacitor                                           |
| J1            |     1 | 2 x 20 right-angle socket                                                                      |
| J2            |     1 | Female SMA connector                                                                           |
| JU1-JU8       |     0 | Not installed                                                                                  |
| R1-R6         |     6 | 100 Ω , 5% resistors (1206)                                                                    |
| R7, R8        |     2 | 10 Ω , 5% resistors (1206)                                                                     |
| R9            |     0 | Not installed                                                                                  |
| R10           |     0 | Component Suppliers Not installed                                                              |
| U1            |     1 | Maxim MAX1403CAI                                                                               |
| U2            |     1 | Maxim MAX6520EUR (SOT23 voltage reference, 1.2V, 20ppm/°C max)                                 |
| Y1            |     1 | 2.4576MHz ceramic resonator Murata CST2.45MGW040                                               |
| None          |     1 | 3" x 4" PC board MAX1403 evaluation kit                                                        |
| None          |     1 | 3 1/2" software disk MAX1403 evaluation kit                                                    |
| None          |     1 | Maxim 68HC11 module monitor, ROM Version 1.1 (Version 1.0 ROM will not work with this EV kit.) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX1403 EV System

## MAX1403 EV Kit Files

## Windows Application Program Files

| FILE        | DESCRIPTION                                       |
|-------------|---------------------------------------------------|
| MAX1403.EXE | Application program that runs under Windows 95/98 |
| MAX1403.HLP | Help file                                         |
| KIT1403.L11 | Software loaded into 68HC11 microcon- troller     |
| MAX1403.INI | Program settings file                             |

## Example Source Code Files

| FILE        | DESCRIPTION                                                                                                                                                                                                                                                                              |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX1403.CPP | Source code module for driving the MAX1403, provided for reference. Includes definitions of the register names and low- level access routines. Compiled with Borland C++ 4.52. Maxim holds the copy- right but allows customers to adapt the pro- gram for their own use without charge. |
| MAX1403.H   | Header file for MAX1403.CPP, provided for reference.                                                                                                                                                                                                                                     |

## 68HC16 Source Code Files

| FILE        | DESCRIPTION                                                                                                                                                                   |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| KIT1403.ASM | Main source code for the KIT1403.L11 pro- gram, provided for reference. Maxim holds the copyright but allows customers to adapt the program for their own use without charge. |
| EVKIT.ASM   | Source code defining the program inter- face with the Maxim 68HC11 Module ROM (Rev. 1.1).                                                                                     |

## Install/Uninstall Program Files

| FILE        | DESCRIPTION                                                                                                         |
|-------------|---------------------------------------------------------------------------------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer.                                                                         |
| UNINST.INI  | Database for uninstall program.                                                                                     |
| UNMAXIM.EXE | Removes the EV kit files from your comput- er. This file is automatically copied to C:\WINDOWS during installation. |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Recommended Equipment

Obtain the following equipment before you begin:

- A DC power supply that generates +5VDC to +12VDC at 30mA to 50mA
- An IBM PC-compatible computer running Windows 95/98
- A spare serial communications port, preferably a 9pin plug
- A serial cable to connect the computer's serial port to the Maxim 68HC11 Module
- 1) Before you begin, make sure your 68HC11 module has the Rev. 1.1 ROM. The software will not function with the Rev. 1.0 ROM.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX1403 EV kit with the 40-pin connector of the 68HC11 module. Gently press them together. The two boards should be flush against one another.
- 3) Connect the DC power source to the µC module at terminal block J2, located next to the ON/OFF switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 5) Install the software on your computer by running the INSTALL.EXE program from the floppy disk. The program files are copied and icons are created for them in the Windows 95/98 Start Menu. The EV kit software evaluates both the MAX1403 and the MAX1401.
- 6) Start  the  MAX1403 program by opening its icon in the Start Menu.
- 7) The program will prompt you to connect the µC module and turn its power on. Slide SW1 to the 'ON' position. Select the correct serial port, and click OK. The program will automatically download the file KIT1403.L11 to the module.

- 8) When the software successfully establishes communication with the EV kit board, you will see a configuration tool and some other windows. Verify that the CLKIN and Reference Voltage settings are correct. Close or minimize this dialog box.
- 9) Apply input signals to the inputs labeled AIN1-AIN5, at  the  bottom  edge of the MAX1403 EV kit board. AIN6 is analog common. Observe the readout on the screen.

## Upgrading the 68HC11 Module

The MAX1403 EV kit requires Rev. 1.1 of the Maxim 68HC11 Module ROM. Check the label on device U10 on the module; if it says 'Rev. 1.0,' the device must be replaced.

The Rev. 1.1 ROM is a 28-pin DIP that comes with the EV kit. If  it  was  omitted,  contact the factory for a replacement.

To install  the  new  ROM, use the following procedure. Use antistatic handling precautions. To reduce the risk of ESD damage, gather all required materials and perform the installation at one sitting.

- 1) Slide the ON/OFF switch to the OFF position.
- 2) Using a flat-blade screwdriver, gently pry U10, the REV 1.0 ROM, out of its socket.
- 3) Remove the REV 1.1 ROM from its antistatic packaging.
- 4) Align the REV 1.1 ROM in the U10 socket pins. Observe correct polarity (the notch at the top of the ROM). Verify that the pins are lined up with the socket, and gently press the ROM into place.

Proceed to the regular Quick Start instructions.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Software

The MAX1403 digitizes up to seven inputs. The various program functions are grouped into windows that are accessible from the Show menu on the main menu bar.

## Main Display

The main display shows the calculated input voltage and raw A/D output code for each active channel. Although there are nine input channels, only certain configurations are allowed.

Select any single channel or one of the scanning sequences from the Inputs menu. AIN 1-6 designates an analog input between the AIN1 pin and the AIN6 pin. CALOFF designates the signal between the CALOFF+ and CALOFF- pins. CALGAIN designates the signal between the CALGAIN+ and CALGAIN- pins.

<!-- image -->

## MAX1403 EV System

The EV kit software assumes that CALOFF+ and CALOFF- are grounded so that CALOFF measures 0V. Similarly, the software assumes that CALGAIN+ is connected to REFIN+ and CALGAIN- is connected to REFIN- so that CALGAIN measures the reference voltage. These two points calibrate the code-to-voltage translation function performed in the software.

The MAX1403 automatically triggers its measurements, unless the FSYNC control bit is set. The EV kit software communicates with the MAX1403 at intervals determined by the Update Every combo box. To halt this automatic update, uncheck the Update Every checkbox or change the Update Every to a value between 100ms and 60,000ms.

Normally, the microcontroller collects new data as soon as it becomes available by using the INT pin to trigger an interrupt service routine. If the INT pin is not used as an interrupt, then the MAX1403 must not be operated in free-running mode. Check or uncheck the Use INT Interrupt checkbox to configure the evaluation kit software.

## Configuration Tool

The Configuration Tool controls parameters that apply to  the  entire  EV  kit.  Like  the  other  windows, the Configuration Tool can be activated from the Show menu of the main menu bar. The CLK control should match the external ceramic resonator or crystal that sets the master clock frequency. The VREF Reference Voltage control tells the software what the reference voltage is.  This  is  used  to  convert  the  raw  A/D  output codes into the corresponding input voltage to speed user evaluation. The Data-Rate control determines how often the MAX1403 performs a measurement. Some data rates provide 16-bit, noise-free resolution when used with the SINC 3 filter (discussed below). The Filter Sync control can be used to inhibit the MAX1403 from performing its self-timed measurements. The Buffer Inputs checkbox enables the internal input buffers. The Burnout Test Currents checkbox enables two small (0.1µA) current sources to provide an input stimulus. When used with a transducer, these current sources can be used to verify that the transducer has not failed open or short circuit.

At  the  bottom  of  the  window  are  input  voltage-range selection buttons. These buttons configure all input channels for the same input voltage range. Although the MAX1403 can be operated with three different input ranges at the same time, the EV kit software supports only a single range for all channels.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1403 EV System

The digital filter on the MAX1403 can be configured for SINC 3 or SINC 1 operation, which affects the filter cutoff frequency. (SINC 1 means SIN(X) ÷ X, and SINC 3 means (SIN(X) ÷ X) 3 .) The SINC 3 filter is required for 16-bit accuracy. The SINC 1 filter provides faster settling time with less accuracy. Alternatively, the raw modulator output can be driven out the DOUT pin; however, the EV kit software cannot read data from the MAX1403 in this mode.

## Calibration Tool

The MAX1403 EV kit software can average the measurements from the calibration channels and use the measured values to correct the voltage displays. The calibration  algorithm  assumes that the CALOFF inputs are externally connected together and that the CALGAIN inputs are externally connected to the reference voltage (VREF). View the calibration tool by selecting it from the Show menu.

The software automatically disables calibration if either of  the  calibration  channels reports a code of 0 or 262143. This is to prevent erroneous calibration when using a transfer function that does not include both 0V and VREF.

When Use CALOFF and CALGAIN for Calibration is checked, the software averages the raw A/D codes for the CALOFF and CALGAIN channels. The average is calculated as a weighted sum of the new data and the old average value. The Slower/Faster slide bar controls the weight of the new data vs. the weight of the old average.

The EV kit software assumes that all three transfer function registers are set to the same value.

This calibration affects only the displayed voltage, not the raw code numbers. The average CALOFF and CALGAIN code values are used as the endpoints of a linear  interpolation,  with  CALOFF measuring 0V and CALGAIN measuring VREF.

The linear interpolation formula is as follows:

<!-- formula-not-decoded -->

Note: When using  the  calibration  tool  with  the MAX1403 in buffered mode, CALOFF+ and CALOFFshould be disconnected from GND and connected instead to REFIN+ so that they remain within the specified input range.

## Sampling Tool

To sample data at full speed, select Sample from the main display menu, make your selections, and click on the Begin Sampling button. Sampling rate is controlled by the Configuration tool. Sample size is restricted to a power of two. Sample Size controls the number of samples collected on each selected channel. After the samples have been collected, the data is automatically uploaded to the host and is graphed. Once displayed, the data may be saved to a file.

While the Sampling tool is open, the other windows are locked out. Close the Sampling tool by clicking the Close icon in the upper corner.

## Register Display Tool

This tool displays all of the internal registers of the MAX1403. Modify any bit value by checking or unchecking its box. (The START bit and the zero bits in the Special Function register (SFR) cannot be modified).  The  Read All  Registers button causes the software to read all of the MAX1403's registers. (Not functional when the MDOUT or FULLPD bit is set.) Refer to Table 1 for a  guide to register bit functions.

## Communications Register (COMMS)

Setting the FSYNC control bit inhibits the MAX1403 from performing its self-timed measurements. If FSYNC = 1 when it is time to perform a measurement, the MAX1403 simply skips that measurement. Thus, power-line frequency rejection is not affected by the FSYNC bit.

Setting the STDBY bit places the part in low-power standby mode. The serial interface and the CLK oscillator  continue to operate. The part can be restored to normal operation by clearing the STDBY bit.

## Special Function Register (SFR)

Setting the MDOUT bit makes the raw modulator output available on the DOUT pin; however, the EV kit software cannot read data from the MAX1403 in this mode.

Setting the FULLPD bit in the SFR register places the part in full  power-down mode. The master oscillator does not run. To restore normal operation, click on the Reset menu item in the main display. This causes the 68HC11 software to pulse the MAX1403 RESET pin.

## Transfer Function Registers (TF1, TF2, TF3)

The three transfer function registers (TF1, TF2, TF3) control  how input voltage is mapped to code values. The transfer function registers control a programmable-gain amplifier (PGA) and an offset-correction DAC.

If U/ B = 1, the transfer function maps unipolar voltages between 0V and VREF. If U/ B = 0, then the transfer function maps bipolar voltages between -VREF and +VREF. Next, the PGA increases the code-per-volt pro-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

cessing gain, reducing the full-scale voltage range by a factor of 1, 2, 4, 8, 16, 32, 64, or 128. Finally, the offsetcorrection DAC offsets the voltage range by up to ±7/6 of the full-scale voltage range.

Input pins AIN1 and AIN2 are controlled by TF1. Input pins AIN3 and AIN4 are controlled by TF2. Input pin AIN5 is controlled by TF3. Input pin AIN6 is the analog common.

When SCAN = 1, the CALOFF and CALGAIN channels are controlled by TF3. When SCAN = 0, the CALOFF and CALGAIN channels are controlled by one of the transfer  function  registers,  as  selected  by  the  A1  and A0 bits.

For simplicity, the EV kit software assumes that all three transfer functions are configured alike.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Hardware

U1, the MAX1403, is a multichannel, high-resolution A/D converter (refer to the MAX1403 data sheet). U2, the  MAX6520,  is  a  1.2V  reference  (refer  to  the MAX6520 data sheet). Y1 contains a ceramic resonator and its load capacitors. R1-R6, together with C3-C8, form anti-aliasing input filters. R8 and C11 filter the digital power supply. The analog supply comes through filter R7/C10.

## Input Filtering

The EV kit has an RC filter on each input with a time constant of approximately 0.01µs = 10ns (R = 100 Ω ,

<!-- image -->

## MAX1403 EV System

C = 100pF). When scanning between channels, the RC filter's  settling  time  may  increase  the  acquisition  time required for full accuracy.

## Evaluating the MAX1401

The MAX1401 can be evaluated by shorting across jumpers JU6 and JU7. The MAX1401 is exactly like the MAX1403, except that the function of pins 5, 6, 7, and 8 is  changed. Instead of the OUT1/OUT2 outputs and DS0/DS1 inputs, these pins are used to provide access to  the  analog  signal  between the multiplexer and the A/D converter. Tables 2 and 3 list the jumper functions and default settings. Refer to the MAX1401 data sheet for detailed information.

## Measuring Supply Current

Supply current can be estimated by measuring the voltage across a series resistor. On the EV kit board, the MAX1403 draws all of its analog and digital power through R8, which is 10 Ω . In addition, all analog supply current flows through R7, which is also 10 Ω .

## Troubleshooting

Problem: unacceptable amounts of noise in the signal.

Collect a sample of 1024 measurements at a 60Hz data rate. Observe whether the problem is caused by 60Hz

noise.

Any AC-powered equipment connected to the analog signal ground can inject noise. Try replacing AC-powered DVMs with battery-powered DVMs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1403 EV System

## Table 1.  Guide to Register Bit Functions

| REGISTER   | BIT NAME   | DESCRIPTION                                                                     |
|------------|------------|---------------------------------------------------------------------------------|
| COMMS      | 0/DRDY     | Start bit is zero; DIN pin must be 1 when idle.                                 |
|            | RS2-RS0    | Register select for subsequent operation                                        |
|            | R/ W       | Selects subsequent read or write operation                                      |
|            | RESET      | Causes software reset when set to 1                                             |
|            | STDBY      | Activates standby power-down mode when set to 1                                 |
|            | FSYNC      | Inhibits the A/D converter when set to 1                                        |
| GS1        | A1         | Selects the active channel                                                      |
|            | A0         | Selects the active channel                                                      |
|            | MF1        | Selects the data output rate                                                    |
|            | MF0        | Selects the data output rate                                                    |
|            | CLK        | Selects the CLKIN frequency                                                     |
|            | FS1        | Selects the data output rate                                                    |
|            | FS0        | Selects the data output rate                                                    |
|            | FAST       | Selects SINC 1 filter instead of SINC 3                                         |
| GS2        | SCAN       | Enables the scanning sequences                                                  |
|            | M1         | Enables the CalGain channel                                                     |
|            | M0         | Enables the CalOff channel                                                      |
|            | BUFF       | Enables the input buffers                                                       |
|            | DIFF       | Selects differential input pairs                                                |
|            | BOUT       | Enables the transducer burn-out test currents                                   |
|            | IOUT       | Enables the OUT1 and OUT2 current sources (MAX1403 only)                        |
|            | X2CLK      | Selects the CLKIN frequency                                                     |
| SFR        | MDOUT      | Changes the DOUT and INT pins to provide raw modulator output                   |
|            | FULLPD     | Activates full power-down mode. Use hardware reset to restore normal operation. |
|            |            | All other bits in SFR must be zero                                              |
| TF1, 2, 3  | G2-G0      | Selects the PGA Gain                                                            |
|            | U/ B       | Selects unipolar or bipolar coding                                              |
|            | D3-D0      | Selects the offset correction DAC code; D3 = sign, D2-D0 = magnitude            |
| DATA       | D17-D0     | Raw code value                                                                  |
|            | DS1        | Value of the DS1 input pin (MAX1403 only)                                       |
|            | DS0        | Value of the DS0 input pin (MAX1403 only)                                       |
|            | CID2-CID0  | Channel identification tag                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 2.  Jumper Functions

| JUMPER   | STATE   | FUNCTION                                                                                                                           |
|----------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed* | Use CalGain inputs for gain calibration (CALGAIN+ = REFIN+)                                                                        |
| JU1      | Open    | Use CalGain inputs as general purpose signal inputs                                                                                |
| JU2      | Closed* | Use CalGain inputs for gain calibration (CALGAIN- = REFIN-)                                                                        |
| JU2      | Open    | Use CalGain inputs as general purpose signal inputs                                                                                |
| JU3      | Closed* | Use CalOff inputs for offset calibration (CALOFF+ = GND)                                                                           |
| JU3      | Open    | Use CalOff inputs as general purpose signal inputs                                                                                 |
| JU4      | Closed* | Use CalOff inputs for offset calibration (CALOFF- = GND)                                                                           |
| JU4      | Open    | Use CalOff inputs as general purpose signal inputs                                                                                 |
| JU5      | Closed* | Use on-board reference U2 (REFIN- = GND)                                                                                           |
| JU5      | Open    | REFIN+ and REFIN- must be driven by an external reference                                                                          |
| JU6      | Closed  | Connects pin 5 to pin 7 MAX1403: pin 5 = digital input DS1, pin 7 = current source MAX1401: normal operation                       |
| JU6      | Open    | Disconnects pin 5 from pin 7 MAX1403: pin 5 = digital input DS1, pin 7 = current source MAX1401: insert filter between mux and A/D |
| JU7      | Closed  | Connects pin 6 to pin 8 MAX1403: pin 6 = digital input DS0, pin 8 = current source MAX1401: normal operation                       |
| JU7      | Open    | Disconnects pin 6 from pin 8 MAX1403: pin 6 = digital input DS0, pin 8 = current source MAX1401: insert filter between mux and A/D |
| JU8      | Closed* | Use on-board reference U2 (REFIN+ = 1.2V)                                                                                          |
| JU8      | Open    | REFIN+ and REFIN- must be driven by an external reference                                                                          |

## Table 3.  Default Jumper Settings

| JUMPER   | STATE   | FUNCTION                                                                                                                           |
|----------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed* | Use CalGain inputs for gain calibration (CALGAIN+ = REFIN+)                                                                        |
| JU2      | Closed* | Use CalGain inputs for gain calibration (CALGAIN- = REFIN-)                                                                        |
| JU3      | Closed* | Use CalOff inputs for offset calibration (CALOFF+ = GND)                                                                           |
| JU4      | Closed* | Use CalOff inputs for offset calibration (CALOFF- = GND)                                                                           |
| JU5      | Closed* | Use on-board reference U2 (REFIN- = GND)                                                                                           |
| JU6      | Open    | Disconnects pin 5 from pin 7 MAX1403: pin 5 = digital input DS1, pin 7 = current source MAX1401: insert filter between mux and A/D |
| JU7      | Open    | Disconnects pin 6 from pin 8 MAX1403: pin 6 = digital input DS0, pin 8 = current source MAX1401: insert filter between mux and A/D |
| JU8      | Closed* | Use on-board reference U2 (REFIN+ = 1.2V)                                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1403 EV System

Figure 1. MAX1403 EV Kit Schematic

<!-- image -->

## MAX1403 EV System

<!-- image -->

Figure 2. MAX1403 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1403 EV System

Figure 3. MAX1403 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1403 EV System

<!-- image -->

Figure 4. MAX1403 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1403 EV System

12

## NOTES

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The 68L11D module is an assembled and tested PC board intended for use with Maxim's low-voltage dataacquisition evaluation kits (EV kits). The module uses Motorola's MC68L11D0FN2 microcontroller (µC) to collect data samples using the SPI interface. It requires an IBM PC computer and an external DC power supply of +5V to +16V, or as specified in the appropriate EV kit manual.

Maxim's 68L11D module allows customers to evaluate selected Maxim products. It is not intended to be a microprocessor development platform, and Maxim does not support such use.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Getting Started

All system components are guaranteed by their various manufacturers over the +3V to +3.6V power-supply range. Not all system components are guaranteed over the entire 2.5V to 5V VDD power-supply adjustment range. Verify correct operation using the following procedures:

- 1) Connect a +5V DC power source (16V max) to the µC module at the terminal block located next to the on/off switch, in the upper-right corner of the µC module. Turn the power switch on.
- 2) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required.
- 3) Start the evaluation kit software on the IBM PC. When the program asks which port the µC module is connected to, press the space bar until the correct port is highlighted, and then press ENTER. The software will be in terminal-emulation mode. (If using a generic terminal-emulation program instead of Maxim EV kit software, select 1200 baud, eight-bit character, no parity, one stop bit. Send a space character to start the monitor program.)
- 4) Adjust trim potentiometer R2 for the desired VDD supply voltage. Measure VDD between test point TP1 and ground. The mounting hole next to R2 is grounded.
- 5) To verify correct system operation, press the ESC key, type a capital 'T', and then select the countdown memory test. If the memory test fails or any other malfunction is reported, the VDD voltage is too low; increase VDD and repeat from step 4.
- 6) Turn the power switch off and connect the µC board to an appropriate Maxim EV kit board.

<!-- image -->

## 68L11D Module

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION    |   QTY | DESCRIPTION                                           |
|----------------|-------|-------------------------------------------------------|
| C1, C2         |     2 | 22pF ceramic capacitors                               |
| C3             |     1 | 0.01µF ceramic capacitor                              |
| C4-C9, C12-C18 |    13 | 0.1µF ceramic capacitors                              |
| C10, C11       |     2 | 22µF, 20V tantalum capacitors                         |
| D1             |     1 | 1N4001 diode                                          |
| J1             |     1 | 40-pin, right-angle header                            |
| J2             |     1 | 2-circuit terminal block                              |
| J3             |     1 | DB9 right-angle socket                                |
| JU1, JU2       |     2 | Open                                                  |
| LED1           |     1 | Light-emitting diode                                  |
| R1             |     1 | 10M Ω , 5% resistor                                   |
| R2             |     1 | 100k Ω potentiometer                                  |
| R3             |     1 | 274k Ω , 1% resistor                                  |
| R4             |     1 | 133k Ω , 1% resistor                                  |
| R5             |     1 | 200 Ω , 5% resistor                                   |
| R6             |     1 | 10k Ω SIP resistor pack, pin 1 common                 |
| SW1            |     1 | Slide switch                                          |
| SW2            |     1 | Momentary push-button switch                          |
| U1             |     1 | Motorola MC68L11D0FN2                                 |
| U2             |     1 | Maxim MAX3232CSE                                      |
| U3             |     1 | 74HC00                                                |
| U4             |     1 | Maxim MAX667CSA                                       |
| U5             |     1 | 32k x 8 static RAM 28-pin socket Motorola MCM6306DJ15 |
| U10            |     1 | 28-pin socket                                         |
| U6             |     1 | 74HCT245                                              |
| U7             |     1 | Maxim MAX708RCSA                                      |
| U8             |     1 | 74HC573                                               |
| U9             |     1 | 74HC139                                               |
| U10            |     1 | 3V, 8k x 8 ROM                                        |
| Y1             |     1 | 8MHz crystal                                          |

1

## 68L11D Module

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Requirements

The 68L11D module draws its power from a user-supplied power source connected to terminal block J2. Note the positive and negative markings on the board. Nominal input voltages should be between +5V and +16V. The input current requirement for the 68L11D module is typically 20mA plus the current drawn by the evaluation kit (EV kit).

The VDD supply is set by U4, a MAX667 low-dropout CMOS regulator. Trim potentiometer R2 sets the supply voltage, with an adjustment range of approximately 2.5V to 5V.  Although the board is designed primarily for 3V applications, all of the circuitry is rated to withstand 5V levels.

## 68L11D Microcontroller (µC) Module Hardware

U1 is Motorola's 68L11D µC. Contact Motorola for µC information, development, and support.

A MAX708R supervisory circuit on the module monitors the VDD logic supply, generates the power-on reset, and produces a reset pulse whenever the manual reset button (SW2) is pressed. Note that the MAX708R resets the CPU if the supply voltage falls below 2.66V.

The module provides 32kbytes of external CMOS static RAM (U5).

The 74HCT245 octal buffer (U6) provides access to an eight-bit  port  on  the  40-pin  interface  connector.  This memory-mapped port consists of Intel-compatible read and write strobes, four chip selects, four address LSB's, and eight data bits. Table 3 lists the address ranges for each of the memory-mapped elements on the 68L11D module.

The MAX3232 is a 3V-powered, RS-232 interface voltage-level shifter. Its built-in charge pump uses external capacitors to generate the output voltages necessary to drive RS-232 lines.

The 20 x 2-pin header (J1) connects the 68L11D module to a Maxim EV kit. Table 2 lists the function of each pin. Use the 68L11D module only with EV kits that are designed to support it, and download only code that is targeted for the Maxim 68L11D module. Downloading incorrect object code into the 68L11D module will produce unpredictable results.

The 8k x 8 boot ROM (U10) checks the system and waits for commands from the host. Refer to the EV kit manual for specific startup procedures.

## Software

All  software is supplied on a disk with the EV kit. Software operating instructions are included in the EV kit manual.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straight-through DB9 male-to-female cable to connect J3 to the IBM PC serial port. If the only available serial port has a 25-pin connector, use a standard 25-pin to 9-pin adapter. Table 1 shows J3's pinout. The hardware-handshake lines are used by the evaluation software to confirm that the EV kit is connected to the correct serial port.

## Table 1. Serial Communications Port J3

|   PIN | NAME   | FUNCTION                                         |
|-------|--------|--------------------------------------------------|
|     1 | DCD    | Handshake; hard-wired to DTR and DSR             |
|     2 | RXD    | RS-232-compatible data output from 68L11D module |
|     3 | TXD    | RS-232-compatible data input to 68L11D module    |
|     4 | DTR    | Handshake; hard-wired to DCD and DSR             |
|     5 | GND    | Signal ground connection                         |
|     6 | DSR    | Handshake; hard-wired to DCD and DTR             |
|     7 | RTS    | Handshake; hard-wired to CTS                     |
|     8 | CTS    | Handshake; hard-wired to RTS                     |
|     9 | None   | Unused                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. 40-Pin Data-Connector Signals

| PIN   | NAME        | FUNCTION                            |
|-------|-------------|-------------------------------------|
| 1-4   | GND         | Ground                              |
| 5, 6  | V++         | Unregulated input voltage           |
| 7, 8  | V DD        | V DD from on-board MAX667 regulator |
| 9     | RD          | Read strobe                         |
| 10    | WR          | Write strobe                        |
| 11    | CS0         | Chip select for 8000-8FFF           |
| 12    | CS1         | Chip select for 9000-9FFF           |
| 13    | CS2         | Chip select for A000-AFFF           |
| 14    | CS3         | Chip select for B000-BFFF           |
| 15    | ADDR0       | Address bit 0 (LSB)                 |
| 16    | ADDR1       | Address bit 1                       |
| 17    | ADDR2       | Address bit 2                       |
| 18    | ADDR3       | Address bit 3                       |
| 19    | DB0         | Data bus bit 0 (LSB)                |
| 20-26 | DB1-DB7     | Data bus bits 1-7                   |
| 27    | PA0/IC3     | General I/O port bit 0 (LSB)        |
| 28    | PA1/IC2     | General I/O port                    |
| 29    | PA2/IC1     | General I/O port                    |
| 30    | PA3/IC4/OC5 | General I/O port                    |
| 31    | PA4/OC4     | General I/O port                    |
| 32    | PA5/OC3     | General I/O port                    |
| 33    | PA6/OC2     | General I/O port                    |
| 34    | PA7/OC1/PAI | General I/O port MSB                |
| 35    | MISO        | SPI master-in, slave-out            |
| 36    | MOSI        | SPI master-out, slave-in            |
| 37    | SCK         | SPI serial clock                    |
| 38    | RESERVED    | Reserved for factory use            |
| 39    | E           | System E-clock output               |
| 40    | SS          | SPI slave-select input              |

## 68L11D Module

## Table 3. 68L11D Module Memory Map

| ADDRESS RANGE (HEX)   | FUNCTION                           |
|-----------------------|------------------------------------|
| 0000-7FFF             | User RAM area (U5)                 |
| 8000-8FFF             | External chip-select 0 (J1 pin 11) |
| 9000-9FFF             | External chip-select 1 (J1 pin 12) |
| A000-AFFF             | External chip-select 2 (J1 pin 13) |
| B000-BFFF             | External chip-select 3 (J1 pin 14) |
| C000-C03F             | Unused                             |
| C040-C0FF             | Internal RAM (U1)                  |
| C100-CFFF             | Unused                             |
| D000-D03F             | Internal register area (U1)        |
| D040-DFFF             | Unused                             |
| E000-FFFF             | Boot ROM (U10)                     |

Figure 1.  68L11D Module Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  68L11D Module Schematic Diagram (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  68L11D Module Schematic Diagram (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68L11D Module

Figure 2.  68L11D Module Component Placement Guide

<!-- image -->

Figure 3.  68L11D Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68L11D Module

Figure 4.  68L11D Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600