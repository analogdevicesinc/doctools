<!-- lastmod 2020-05-01 -->
<!-- image -->

Data Sheet

## FEATURES

- 3.8 mm × 5.0 mm × 0.9 mm module with integrated optical components
- 2 green LEDs, 2 PDs with IR cut filter
- 2 external sensor inputs
- 3, 370 mA LED drivers
- 20-bit burst accumulator enabling 20 bits per sample period On-board sample to sample accumulator enabling up to
- 27 bits per data read

Custom optical package made to work under a glass window Optimized SNR for signal limited cases I 2 C or SPI communications

## APPLICATIONS

Optical heart rate monitoring

Reflective PPG measurement CNIBP measurement

## Integrated Optical Module with Ambient

## Light Rejection and Two LEDs

[ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADPD188GG.pdf&product=ADPD188GG&rev=B)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is  granted by implication  or  otherwise  under any patent  or  patent  rights  of  Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## GENERAL DESCRIPTION

The ADPD188GG is a complete photometric system designed to measure optical signals from ambient light and from synchronous reflected light emitting diode (LED) pulses. Synchronous measurement offers best-in-class rejection of ambient light interference, both dc and ac. The module integrates a highly efficient photometric front end, two LEDs, and two photodiode (PD). All of these items are housed in a custom package that prevents light from going directly from the LED to the photodiode without first entering the subject.

The front end of the application specific integrated circuit (ASIC) consists of a control block, a 14-bit analog-to-digital converter (ADC) with a 20-bit burst accumulator, and three flexible, independently configurable LED drivers. The control circuitry includes flexible LED signaling and synchronous detection. The analog front end (AFE) features best-in-class rejection of signal offset and corruption due to modulated interference commonly caused by ambient light. The data output and functional configuration occur over a 1.8 V I 2 C interface or a serial peripheral interface (SPI) port.

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## TABLE OF CONTENTS

Features .............................................................................................. 1

Applications ...................................................................................... 1

General Description ......................................................................... 1

Functional Block Diagram .............................................................. 1

Revision History ............................................................................... 2

Specifications .................................................................................... 3

Analog Specifications  ................................................................... 5

Digital Specifications ................................................................... 6

Timing Specifications .................................................................. 7

Absolute Maximum Ratings ........................................................... 9

Thermal Resistance ...................................................................... 9

Recommended Soldering Profile ............................................... 9

ESD Caution.................................................................................. 9

Pin Configuration and Function Descriptions .......................... 10

Typical Performance Characteristics  ........................................... 11

Theory of Operation ...................................................................... 13

Introduction  ................................................................................ 13

Optical Components  .................................................................. 13

Dual Time Slot Operation  ......................................................... 14

Time Slot Switch  ......................................................................... 15

Adjustable Sampling Frequency............................................... 16

External Synchronization for Sampling  .................................. 16

State Machine Operation .......................................................... 16

Normal Mode Operation and Data Flow  ................................ 17

Communications Interface ........................................................... 19

I

2

C Interface ................................................................................ 19

SPI Port  ........................................................................................ 20

Applications Information  .............................................................. 22

REVISION HISTORY

4/2020-Rev. A to Rev. B

Change to Applications Section ..................................................... 1

Changes to Table 4 and Figure 2 .................................................... 7

Change to Reset Column, Table 26  .............................................. 42

Added Endnote 1, Table 27  ........................................................... 46

Changes to Table 32 ....................................................................... 55

| Typical Connection Diagram...................................................                    | 22                                               |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Land Pattern ...............................................................................     | 22                                               |
| Recommended Start-Up Sequence..........................................                          | 23                                               |
| Reading Data...............................................................................      | 23                                               |
| Clocks and Timing Calibration................................................                    | 24                                               |
| Optional Timing Signals Available on GPIO0 and GPIO1                                             | . 25                                             |
| LED Driver Pins and LED Supply Voltage.............................                              | 26                                               |
| LED Driver Operation...............................................................              | 26                                               |
| Determining the Average Current...........................................                       | 27                                               |
| Determining C VLED .....................................................................         | 27                                               |
| Using External LEDs .................................................................            | 28                                               |
| Calculating Current Consumption..........................................                        | 28                                               |
| Mechanical Considerations for Covering the ADPD188GG...                                          | 31                                               |
| TIA ADCMode..........................................................................            | 31                                               |
| Pulse Connect Mode..................................................................             | 33                                               |
| Synchronous ECG and PPG Measurement Using TIAADC                                                 | Synchronous ECG and PPG Measurement Using TIAADC |
| Mode............................................................................................ | 34                                               |
| Float Mode..................................................................................     | 35                                               |
| Register Listing ............................................................................... | 42                                               |
| LED Control Registers...............................................................             | 46                                               |
| AFE Configuration Registers....................................................                  | 48                                               |
| Float Mode Registers .................................................................           | 52                                               |
| System Registers.........................................................................        | 55                                               |
| ADCRegisters ............................................................................        | 59                                               |
| Data Registers .............................................................................     | 60                                               |
| Outline Dimensions.......................................................................        | 61                                               |
| Ordering Guide ..........................................................................        | 61                                               |
| 10/2018-Rev. 0 to Rev.A                                                                          |                                                  |
| Changes to Figure 24 and Figure 25............................................                   | 22                                               |
| Changes to Calibrating the 32 kHz Clock Section.....................                             | 25                                               |
| Added Improving SNR Using Integrator Chopping Section                                            | and                                              |
| Figure 32; Renumbered Sequentially...........................................                    | 29                                               |
| Added Table 18; Renumbered Sequentially ...............................                          | 30                                               |
| Changes to Table 26.......................................................................       | 42                                               |
| Changes to Table 29.......................................................................       | 50                                               |
| Changes to Table 30.......................................................................       | 51                                               |
| Changes to Address 0x58 Description Column, Table 31........                                     | 53                                               |

2/2018-Revision 0: Initial Version

## SPECIFICATIONS

The voltage applied at the VDD1 and VDD2 pins (VDD) = 1.8 V, and TA = full operating temperature range, unless otherwise noted.

Table 1.

| Parameter                    | Test Conditions/Comments                                                                      |   Min |   Typ |   Max | Unit   |
|------------------------------|-----------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| CURRENT CONSUMPTION          | See the Calculating Current Consumption section for the relevant equations                    |       |       |       |        |
| Peak V DD Supply Current     | Single-channel (Register 0x3C, Bits[8:3] = 0x38)                                              |       |   4.5 |       | mA     |
| V DD Standby Current         |                                                                                               |       |   0.3 |       | µA     |
| Average V DD Supply Current  | 100 Hzdatarate;LEDoffset=25 µs; LEDpulse period (t LED_PERIOD )= 13 µs; LED peak current=25mA |       |       |       |        |
| 1 Pulse                      | Time Slot A only                                                                              |       |    53 |       | µA     |
|                              | Time Slot B only                                                                              |       |    41 |       | µA     |
|                              | Both Time Slot A and Time Slot B                                                              |       |    76 |       | µA     |
| 10 Pulses                    | Time Slot A only                                                                              |       |   107 |       | µA     |
|                              | Time Slot B only                                                                              |       |    95 |       | µA     |
|                              | Both Time Slot A and Time Slot B                                                              |       |   184 |       | µA     |
|                              | current=25mA                                                                                  |       |       |       |        |
| Average V LED Supply Current | LED peak                                                                                      |       |       |       |        |
| 1 Pulse                      | 50 Hz data rate                                                                               |       |  3.75 |       | µA     |
|                              | 100 Hz data rate                                                                              |       |   7.5 |       | µA     |
|                              | 200 Hz data rate                                                                              |       |    15 |       | µA     |
| 10 Pulses                    | 50 Hz data rate                                                                               |       |    38 |       | µA     |
|                              | 100 Hz data rate                                                                              |       |    75 |       | µA     |
|                              | 200 Hz data rate                                                                              |       |   150 |       | µA     |
| SATURATIONILLUMINANCE 1      | Blackbody color temperature (T = 5500 K) 2 , PDET1 and PDET2                                  |       |       |       |        |
| Direct Illumination          | multiplexed into a single channel (1.2mm 2 active area)                                       |       |       |       |        |
|                              | Transimpedance amplifier (TIA)gain=25kΩ                                                       |       |  58.8 |       | kLux   |
|                              | TIAgain=50kΩ                                                                                  |       |  29.4 |       | kLux   |
|                              | TIAgain=100kΩ                                                                                 |       |  14.7 |       | kLux   |
|                              | TIAgain=200kΩ                                                                                 |       |   7.4 |       | kLux   |
| DATA ACQUISITION             |                                                                                               |       |       |       |        |
| ADC Resolution               | Single pulse                                                                                  |       |    14 |       | Bits   |
| Per Sample                   | 64 pulses to 255 pulses                                                                       |       |    20 |       | Bits   |
| Per Data Read                | 64 pulses to 255 pulses; 128 samples averaged                                                 |       |    27 |       | Bits   |
|                              | AFE width = 4 µs 3                                                                            |    13 |    19 |       | µs     |
| LED PERIOD                   | AFE width = 3 µs                                                                              |    11 |    17 |       | µs     |
| Sampling Frequency 4         | Time Slot A or Time Slot B; normal mode; 1 pulse; SLOTA_LED_OFFSET = 23 µs; SLOTA_PERIOD = 19 | 0.122 |       |  2000 | Hz     |
|                              | µs Both time slots; normal mode;1pulse; SLOTA_LED_OFFSET = 23 µs; SLOTA_PERIOD = 19 µs        | 0.122 |       |  1600 | Hz     |
|                              | TimeSlot AorTimeSlot B; normal mode;8pulses; SLOTA_LED_OFFSET = 23 µs; SLOTA_PERIOD = 19 µs   | 0.122 |       |  1600 | Hz     |
|                              | Both time slots; normal mode;8pulses; SLOTA_LED_OFFSET = 23 µs; SLOTA_PERIOD = 19 µs          | 0.122 |       |  1000 | Hz     |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## Data Sheet

| Parameter                             | Test Conditions/Comments                                        |   Min | Typ             |   Max | Unit   |
|---------------------------------------|-----------------------------------------------------------------|-------|-----------------|-------|--------|
| CATHODE PIN (PDC) VOLTAGE             |                                                                 |       |                 |       |        |
| During All Sampling Periods           | Register 0x54, Bit7 =0x0; Register0x3C,Bit9=1 5                 |       | 1.8             |       | V      |
|                                       | Register 0x54, Bit7 =0x0; Register0x3C,Bit9=0                   |       | 1.3             |       | V      |
| During Time Slot A Sampling           | Register 0x54, Bit7 =0x1; Register 0x54, Bits[9:8]=0x0 5        |       | 1.8             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[9:8]=0x1          |       | 1.3             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[9:8]=0x2          |       | TIA_VREF+ 0.25  |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[9:8]=0x3 6        |       | 0               |       | V      |
| During Time Slot B Sampling           | Register 0x54, Bit7 =0x1; Register 0x54, Bits[11:10]=0x0 5      |       | 1.8             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[11:10]=0x1        |       | 1.3             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[11:10]=0x2        |       | TIA_VREF + 0.25 |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[11:10]=0x3 6      |       | 0               |       | V      |
| During Sleep Periods                  | Register 0x54, Bit7 =0x0; Register0x3C,Bit9=1                   |       | 1.8             |       | V V    |
|                                       | Register 0x54, Bit7 =0x0; Register0x3C,Bit9=0                   |       | 1.3             |       |        |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[13:12]=0x0        |       | 1.8             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[13:12]=0x1        |       | 1.3             |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[13:12]=0x2        |       | TIA_VREF + 0.25 |       | V      |
|                                       | Register 0x54, Bit7 =0x1; Register 0x54, Bits[13:12]=0x3        |       | 0               |       | V      |
| LEDs                                  |                                                                 |       |                 |       |        |
| LED Peak Current Setting              | Adjustable via the Register 0x22 through Register 0x25 settings |    12 |                 |   370 | mA     |
| Dominant Wavelength 7 LED1; Green LED | I                                                               |       |                 |       |        |
|                                       | F =40mA                                                         |       | 525             |       | nm     |
| Luminous Intensity                    | λ = 525 nm, I F = 40 mAat 25°C                                  |  2800 |                 |  3200 | mcd    |
| Photodiode                            |                                                                 |       |                 |       |        |
| Responsivity                          | Wavelength, λ = 525nm                                           |       | 0.25            |       | A/W    |
| Active Area                           |                                                                 |       |                 |       |        |
| Photodiode 1                          |                                                                 |       | 0.4             |       | mm 2   |
| Photodiode 2                          |                                                                 |       | 0.8             |       | mm 2   |
| POWER SUPPLY VOLTAGES                 | TheADPD188GGdoesnotrequireaspecific power-up sequence           |       |                 |       |        |
| V DD                                  | Applied at the VDD1 and VDD2 pins                               |   1.7 | 1.8             |   1.9 | V      |
| V LED1 8, 9                           |                                                                 |     4 | 4.5             |   5.0 | V      |
| DCPowerSupplyRejection Ratio (PSRR)   | At 75% full scale input signal                                  |       | 24              |       | dB     |
| TEMPERATURE RANGE                     |                                                                 |       |                 |       |        |
| Operating                             |                                                                 |   -40 |                 |   +85 | °C     |

1 Saturation illuminance refers to the amount of ambient light that saturates the ADPD188GG signal. Actual results may vary by factors of up to 2× from typical specifications. As a point of reference, Air Mass 1.5 (AM1.5) sunlight (brightest sunlight) produces 100 kLux.

2 Blackbody color temperature (T = 5800 K) closely matches the light produced by solar radiation (sunlight).

3  Minimum LED period = (2 × AFE width) + 5 µs.

4 The maximum values in this specification are the internal ADC sampling rates in normal mode. The I 2 C read rates in some configurations may limit the output data rate.

5  This mode may induce additional noise and is not recommended unless necessary. The 1.8 V setting uses VDD, which contains greater amounts of differential voltage noise with respect to the anode voltage. A differential voltage between the anode and cathode injects a differential current across the capacitance of the photodiode of the magnitude of C × dV/dt.

6  This setting is not recommended for photodiodes because it causes a 1.3 V forward bias of the photodiode.

7 IF is the forward current of the diode.

8  Set VLEDx such that the maximum desired LED current is achievable with the turn on voltage of the LEDs that are wired to the LEDx/DNC pins. The LEDx/DNC pins are connected to the LEDx driver, which can be modeled as current sinks (see Figure 1). When an appropriate VLEDx is used, the voltage at the LEDx/DNC pins adjusts automatically to accommodate the LED turn on voltage and the LED current.

9 See Figure 9 for the current limitation at the minimum VLED supply voltage, VLED.

## ANALOG SPECIFICATIONS

VDD1 = VDD2 = 1.8 V, and TA = full operating temperature range, unless otherwise noted.

Table 2.

| Parameter                                      | Test Conditions/Comments                                                              | Min   |   Typ | Unit   |
|------------------------------------------------|---------------------------------------------------------------------------------------|-------|-------|--------|
| EXT_INx SERIES RESISTANCE (R_IN) 1             | Measured from -3 µA to +3 µA                                                          |       |   6.5 | kΩ     |
| PULSED SIGNAL CONVERSIONS, 3 μs WIDELEDPULSE 2 | 4 μs wide AFE integration; normal operation, Register 0x43 and Register 0x45 = 0xADA5 |       |       |        |
| ADC Resolution 3                               | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       |  3.27 | nA/LSB |
|                                                | 50 kΩ                                                                                 |       |  1.64 | nA/LSB |
|                                                | 100 kΩ                                                                                |       |  0.82 | nA/LSB |
|                                                | 200 kΩ                                                                                |       |  0.41 | nA/LSB |
| ADC Saturation Level                           | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       |  26.8 | μA     |
|                                                | 50 kΩ                                                                                 |       |  13.4 | μA     |
|                                                | 100 kΩ                                                                                |       |   6.7 | μA     |
|                                                | 200 kΩ                                                                                |       |  3.35 | μA     |
| Ambient SignalHeadroomonPulsed Signal          | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       |  23.6 | μA     |
|                                                | 50 kΩ                                                                                 |       |  11.8 | μA     |
|                                                | 100 kΩ                                                                                |       |   5.9 | μA     |
|                                                | 200 kΩ                                                                                |       |  2.95 | μA     |
| PULSED SIGNAL CONVERSIONS, 2 μs WIDELEDPULSE 2 | 3 μs wide AFEintegration; normaloperation, Register 0x43 andRegister0x45=0xADA5       |       |       |        |
| ADC Resolution 3                               | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       |  4.62 | nA/LSB |
|                                                | 50 kΩ                                                                                 |       |  2.31 | nA/LSB |
|                                                | 100 kΩ                                                                                |       |  1.15 | nA/LSB |
|                                                | 200 kΩ                                                                                |       |       | nA/LSB |
| ADC Saturation Level                           | TIA feedback                                                                          |       |  0.58 |        |
|                                                | resistor                                                                              |       |       |        |
|                                                | 25 kΩ                                                                                 |       | 37.84 | μA     |
|                                                | 50 kΩ                                                                                 |       | 18.92 | μA     |
|                                                | 100 kΩ                                                                                |       |  9.46 | μA     |
|                                                | 200 kΩ                                                                                |       |  4.73 | μA     |
| Ambient SignalHeadroomonPulsed                 | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       | 12.56 | μA     |
|                                                | 50 kΩ                                                                                 |       |  6.28 | μA     |
|                                                | 100 kΩ                                                                                |       |  3.14 | μA     |
|                                                | 200 kΩ                                                                                |       |  1.57 | μA     |
| FULL SIGNAL CONVERSIONS 4                      |                                                                                       |       |       |        |
| TIA Saturation Level Pulsed Signaland          | TIA feedback resistor                                                                 |       |       |        |
| Ambient Level                                  | 25 kΩ                                                                                 |       |  50.4 | μA     |
|                                                | 50 kΩ                                                                                 |       |  25.2 | μA     |
|                                                | 100 kΩ                                                                                |       |  12.6 | μA     |
|                                                | 200 kΩ                                                                                |       |   6.3 | μA     |
| TIA Linear Range                               | TIA feedback resistor                                                                 |       |       |        |
|                                                | 25 kΩ                                                                                 |       |  42.8 | μA     |
|                                                | 50 kΩ                                                                                 |       |  21.4 | μA     |
|                                                | 100 kΩ                                                                                |       |  10.7 | μA     |
|                                                | 200 kΩ                                                                                |       |   5.4 | μA     |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Parameter                | Test Conditions/Comments                                                      | Min   |   Typ | Max   | Unit   |
|--------------------------|-------------------------------------------------------------------------------|-------|-------|-------|--------|
| SYSTEM PERFORMANCE       |                                                                               |       |       |       |        |
| Total Output Noise Floor | Normalmode;per pulse; per channel; noLED; photodiode capacitance (C PD )=25pF |       |       |       |        |
| Total Output Noise Floor | 25 kΩ; referred to ADC input                                                  |       |   1.0 |       | LSBrms |
| Total Output Noise Floor | 25 kΩ; referred to peak input signal for 2 µs LED pulse                       |       |   4.6 |       | nArms  |
| Total Output Noise Floor | 25 kΩ; referred to peak input signal for 3 µs LED pulse                       |       |   3.3 |       | nArms  |
| Total Output Noise Floor | 25 kΩ; saturation signal-to-noise ratio (SNR) per pulse per channel 5         |       |  78.3 |       | dB     |
| Total Output Noise Floor | 50 kΩ; referred to ADC input                                                  |       |   1.1 |       | LSBrms |
| Total Output Noise Floor | 50 kΩ; referred to peak input signal for 2 µs LED pulse                       |       |   2.5 |       | nArms  |
| Total Output Noise Floor | 50 kΩ; referred to peak input signal for 3 µs LED pulse                       |       |   1.8 |       | nArms  |
| Total Output Noise Floor | 50 kΩ; saturation SNR per pulse per channel 5                                 |       |  77.4 |       | dB     |
| Total Output Noise Floor | 100 kΩ; referred to ADC input                                                 |       |   1.2 |       | LSBrms |
| Total Output Noise Floor | 100 kΩ; referred to peak input signal for 2 µs LED pulse                      |       |   1.4 |       | nArms  |
| Total Output Noise Floor | 100 kΩ; referred to peak input signal for 3 µs LED pulse                      |       |  0.98 |       | nArms  |
| Total Output Noise Floor | 100 kΩ; saturation SNR per pulse per channel 5                                |       |  76.7 |       | dB     |
| Total Output Noise Floor | 200 kΩ; referred to ADC input                                                 |       |   1.4 |       | LSBrms |
| Total Output Noise Floor | 200 kΩ; referred to peak input signal for 2 µs LED pulse                      |       |  0.81 |       | nArms  |
| Total Output Noise Floor | 200 kΩ; referred to peak input signal for 3 µs LED pulse                      |       |  0.57 |       | nArms  |
| Total Output Noise Floor | 200 kΩ; saturation SNR per pulse per channel 5                                |       |  75.3 |       | dB     |

## DIGITAL SPECIFICATIONS

VDD1 = VDD2 = 1.7 V to 1.9 V, unless otherwise noted.

## Table 3.

| Parameter            | Symbol   | Test Conditions/Comments      | Min        |   Typ | Max        | Unit   |
|----------------------|----------|-------------------------------|------------|-------|------------|--------|
| LOGIC INPUTS         |          |                               |            |       |            |        |
| Input Voltage Level  |          |                               |            |       |            |        |
| High                 | V IH     | GPIOx, SCLK, MOSI, CS         | 0.7 × VDDx |       | VDDx       | V      |
| High                 | V IH     | SCL, SDA                      | 0.7 × VDDx |       | 3.6        |        |
| Low                  | V IL     |                               |            |       | 0.3 × VDDx | V      |
| Input Current Level  |          |                               |            |       |            |        |
| High                 | I IH     |                               | -10        |       | +10        | µA     |
| Low                  | I IL     |                               | -10        |       | +10        | µA     |
| Input Capacitance    | C IN     |                               |            |    10 |            | pF     |
| LOGIC OUTPUTS        |          |                               |            |       |            |        |
| Output Voltage Level |          | GPIOx, MISO                   |            |       |            |        |
| High                 | V OH     | 2 mAhigh level output current | VDDx - 0.5 |       |            | V      |
| Low                  | V OL     | 2 mAlow level output current  |            |       | 0.5        | V      |
| Output Voltage Level |          | SDA                           |            |       |            |        |
| Low                  | V OL1    | 2 mAlow level output current  |            |       | 0.2 × VDDx | V      |
| Output Current Level |          | SDA                           |            |       |            |        |
| Low                  | I OL     | V OL1 = 0.6 V                 | 6          |       |            | mA     |

## TIMING SPECIFICATIONS

## I 2 C Timing Specifications

Table 4.

| Parameter           | Symbol   |   Min |   Typ |   Max | Unit   |
|---------------------|----------|-------|-------|-------|--------|
| SCL                 |          |       |       |       |        |
| Frequency           |          |       |     1 |   0.4 | Mb/sec |
| Minimum Pulse Width |          |       |       |       |        |
| High                | t 1      |   370 |       |       | ns     |
| Low                 | t 2      |   530 |       |       | ns     |
| START CONDITION     |          |       |       |       |        |
| Hold Time           | t 3      |   260 |       |       | ns     |
| Setup Time          | t 4      |   260 |       |       | ns     |
| SDA SETUP TIME      | t 5      |    50 |       |       | ns     |
| SDA HOLD TIME       | t 9      |     0 |       |       | ns     |
| SCL AND SDA         |          |       |       |       |        |
| Rise Time           | t 6      |       |       |  1000 | ns     |
| Fall Time           | t 7      |       |       |   300 | ns     |
| STOP CONDITION      |          |       |       |       |        |
| Setup Time          | t 8      |   260 |       |       | ns     |

<!-- image -->

Figure 2. I 2 C Timing Diagram

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## SPI Timing Specifications

Table 5.

Figure 3. SPI Timing Diagram

| Parameter           | Symbol    | Test Conditions/Comments                       |   Min | Typ   |   Max | Unit   |
|---------------------|-----------|------------------------------------------------|-------|-------|-------|--------|
| SCLK                |           |                                                |       |       |       |        |
| Frequency           | f SCLK    |                                                |       |       |    10 | MHz    |
| Minimum Pulse Width |           |                                                |       |       |       |        |
| High                | t SCLKPWH |                                                |    20 |       |       | ns     |
| Low                 | t SCLKPWL |                                                |    20 |       |       | ns     |
| CS                  |           |                                                |       |       |       |        |
| Setup Time          | t CSS     | CS setup to SCLK rising edge                   |    10 |       |       | ns     |
| Hold Time           | t CSH     | CS hold from SCLK rising edge                  |    10 |       |       | ns     |
| Pulse Width High    | t CSPWH   | CS pulse width high                            |    10 |       |       | ns     |
| MOSI                |           |                                                |       |       |       | ns     |
| Setup Time          | t MOSIS   | MOSI setup to SCLK rising edge                 |    10 |       |       | ns     |
| Hold Time           | t MOSIH   | MOSI hold from SCLK rising edge                |    10 |       |       |        |
| MISO OUTPUT DELAY   | t MISOD   | MISO valid output delay from SCLK falling edge |       |       |    21 | ns     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 6.

| Parameter                                                                                                                                                                                                                       |                                                                                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VDD1, VDD2 toAGND VDD1, VDD2 toDGND EXT_IN1/EXT_IN2 GPIO0/GPIO1 toDGND MISO/MOSI/SCLK/CS toDGND LEDx/DNC to LGND SCL/SDA toDGND VLEDx to LGND 1 Electrostatic Discharge (ESD) Human Body Model (HBM) Charged Device Model (CDM) | Rating -0.3 V to +2.2 V -0.3 V to +2.2 V -0.3 V to +2.2V -0.3 V to +2.2 V -0.3 V to +2.2 V -0.3 V to +3.6 V -0.3 V to +3.6 V -0.3 V to +5.0 V 3000 V 1250 V |

1  The absolute maximum voltage allowable between VLEDx and LGND is the voltage that causes the LEDx/DNC pins to reach or exceed their absolute maximum voltage.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

## Table 7. Thermal Resistance

| Package Type 1   | Supply Pins   |   θ JA | Unit   |
|------------------|---------------|--------|--------|
| CE-24-1          |               |        |        |
| ASIC             | VDD1, VDD2    |     67 | °C/W   |
| LED1             | VLED1         |    156 | °C/W   |

1  Thermal impedance simulated values are based on JEDEC 2S2P and two thermal vias. See JEDEC JESD51.

## RECOMMENDED SOLDERING PROFILE

Figure 4 and Table 8 provide details about the recommended soldering profile.

Figure 4. Recommended Soldering Profile

<!-- image -->

## Table 8. Recommended Soldering Profile

| Profile Feature                                   | Condition (Pb-Free)   |
|---------------------------------------------------|-----------------------|
| Average Ramp Rate (T L to T P )                   | 2°C/secmax            |
| Preheat                                           |                       |
| Minimum Temperature (T SMIN )                     | 150°C                 |
| Maximum Temperature (T SMAX )                     | 200°C                 |
| Time, T SMIN to T SMAX (t S )                     | 60 secto120 sec       |
| T SMAX to T L Ramp-Up Rate                        | 2°C/sec max           |
| Time Maintained Above Liquidous Temperature       |                       |
| Liquidous Temperature (T L )                      | 217°C                 |
| Time (t L )                                       | 60 secto150 sec       |
| Peak Temperature (T P )                           | 260 (+0/-5)°C         |
| Time Within 5°C of Actual Peak Temperature (t P ) | <30 sec               |
| Ramp-Down Rate                                    | 3°C/sec max           |
| Time 25°C to Peak Temperature                     | 8 minutes max         |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. DNC = DO NOT CONNECT. DO NOT CONNECT TO THIS PIN WHEN USING INTERNAL LEDs. 2. NIC = NO INTERNAL CONNECTION. 16111-005

Figure 5. Pin Configuration

Table 9. Pin Function Descriptions

|   Pin No. | Mnemonic   | Type 1   | Description                                                                                         |
|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
|         1 | PDC        | AO       | Photodiode CommonCathode Bias.                                                                      |
|         2 | EXT_IN2    | AI       | EXT_IN2 Current Input.                                                                              |
|         3 | NIC        | NIC      | No Internal Connection. This pin is not internally connected.                                       |
|         4 | VDD2       | S        | 1.8 V Supply.                                                                                       |
|         5 | VLED1      | S        | Green LED Anode Supply Voltage.                                                                     |
|         6 | NIC        | NIC      | No Internal Connection. This pin is not internally connected.                                       |
|         7 | NIC        | NIC      | No Internal Connection. This pin is not internally connected.                                       |
|         8 | LED1/DNC   | AO/DNC   | LED1Driver Current Sink (LED1)/Do Not Connect (DNC). Donotconnecttothis pin whenusinginternal LEDs. |
|         9 | LED3       | AO       | LED3Driver Current Sink. If not in use, leave this pin floating.                                    |
|        10 | LED2       | AO       | LED2Driver Current Sink. If not in use, leave this pin floating.                                    |
|        11 | LGND       | S        | LED Driver Ground.                                                                                  |
|        12 | SCL        | DI       | I 2 CClock Input.                                                                                   |
|        13 | SDA        | DO       | I 2 CDataOutput.                                                                                    |
|        14 | GPIO0      | DIO      | General-Purpose Input/Output 0.                                                                     |
|        15 | GPIO1      | DIO      | General-Purpose Input/Output 1.                                                                     |
|        16 | MISO       | DO       | SPI Master Input, Slave Output.                                                                     |
|        17 | MOSI       | DI       | SPI Master Output, Slave Input.                                                                     |
|        18 | SCLK       | DI       | SPI Clock Input.                                                                                    |
|        19 | CS         | DI       | SPI Chip Select (Active Low).                                                                       |
|        20 | DGND       | S        | Digital Ground.                                                                                     |
|        21 | AGND       | S        | Analog Ground.                                                                                      |
|        22 | VREF       | REF      | Internally Generated ADC Voltage Reference. Connect a 1 µF ceramic capacitor from VREF to ground.   |
|        23 | VDD1       | S        | 1.8 V Supply.                                                                                       |
|        24 | EXT_IN1    | AI       | EXT_IN1 Current Input.                                                                              |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. Typical Photodiode Responsivity

<!-- image -->

Figure 7. 32 kHz Clock Frequency Distribution; Default Settings; Before User Calibration, Register 0x4B = 0x2612

<!-- image -->

Figure 8. 32 MHz Clock Frequency Distribution; Default Settings; Before User Calibration, Register 0x4D = 0x425E

<!-- image -->

Figure 9. LED Driver Current vs. LED Driver Voltage at Various Coarse Settings

<!-- image -->

<!-- image -->

Figure 10. PD1 Relative Sensitivity vs. Angular Displacement

Figure 11. PD2 Relative Sensitivity vs. Angular Displacement

<!-- image -->

Figure 12. LED Relative Intensity vs. Angular Displacement

<!-- image -->

## THEORY OF OPERATION

## INTRODUCTION

The ADPD188GG is a complete, integrated, optical module designed for photoplethysmography (PPG) measurements. The module contains two optical detectors. Photodiode 1 (PDET1) has 0.4 mm 2 of active area and is connected to Channel 3 of the ASIC. Photodiode 2 (PDET2) has 0.8 mm 2 of active area and is connected to Channel 4 of the ASIC. The two photodiodes can be combined into a single detector with 1.2 mm 2 of active area. Both photo-diodes are coated with an infrared (IR) cut filter that maximizes ambient light rejection without the need for other light cancellation techniques.

The module combines the dual photodetector with two green LEDs, and a mixed-signal, photometric, front-end ASIC into a single compact device for optical measurements. The on-board ASIC includes an analog signal processing block, an ADC, a digital signal processing block, an I 2 C and SPI communication interface, and three, independently programmable, pulsed LED current sources.

The core circuitry stimulates the LEDs and measures the corresponding optical return signals in discrete data locations. Data can be read from output registers directly or through a first in, first out (FIFO) buffer.

This highly integrated system works well in environments where ambient light is poorly controlled and the signal modulation ratio is low. As a result, the device produces high SNR for relatively low LED power.

## OPTICAL COMPONENTS

## Photodiode

The ADPD188GG integrates a 1.2 mm 2 deep junction photodiode. The optical sensing area is a dual detector that is connected to Channel PD3 and Channel PD4 in the ASIC. The photodiodes are accessible from Time Slot A or Time Slot B. The responsivity of the ADPD188GG photodiode is shown in Figure 6.

## LEDs

The ADPD188GG module integrates two green LEDs.

| Table 10. LED Dominant Wavelength   | Table 10. LED Dominant Wavelength   | Table 10. LED Dominant Wavelength   |
|-------------------------------------|-------------------------------------|-------------------------------------|
| LED Color                           | Driver                              | Typical Wavelength (nm)             |
| Green (2×)                          | LED1                                | 525                                 |

In addition to the integrated LEDs, the ADPD188GG has the ability to drive external LEDs.

Figure 13. Optical Component Locations

<!-- image -->

## DUAL TIME SLOT OPERATION

The ADPD188GG operates in two independent time slots, Time Slot A and Time Slot B, which are carried out sequentially. The entire signal path from LED stimulation to data capture and processing is executed during each time slot. Each time slot has a separate datapath that uses independent settings for the LED driver, AFE setup, and the resulting data. Time Slot A and Time Slot B operate in sequence for every sampling period, as shown in Figure 14.

The timing parameters in Figure 14 are defined as follows:

<!-- formula-not-decoded -->

where nA is the number of pulses for Time Slot A (Register 0x31, Bits[15:8]).

<!-- formula-not-decoded -->

where nB is the number of pulses for Time Slot B (Register 0x36, Bits[15:8]).

t1 = 68 µs, the processing time for Time Slot A

t2 = 20 µs, the processing time for Time Slot B

fSAMPLE is the sampling frequency (Register 0x12, Bits[15:0]).

Figure 14. Time Slot Timing Diagram

<!-- image -->

Table 11. Recommended AFE and LED Timing Configuration

|               | Address    | Address     |                    |
|---------------|------------|-------------|--------------------|
| RegisterName  | Time SlotA | Time Slot B | RecommendedSetting |
| SLOTx_LEDMODE | 0x30       | 0x35        | 0x0319             |
| SLOTx_AFEMODE | 0x39       | 0x3B        | 0x2209             |

## TIME SLOT SWITCH

Multiple configurations of the four input channels are supported, depending on the settings of Register 0x14. The integrated photodiodes can either be routed to Channel 3 and Channel 4, or summed together into Channel 1. The external EXT\_IN1 and EXT\_IN2 inputs can be routed to Channel 1 and Channel 2, respectively, or summed into Channel 2. See Figure 15 and Figure 16 for the supported configurations. In Figure 15 and Figure 16, PDET1 is Photodiode 1, and PDET2 is Photodiode 2.

See Table 12 for the time slot switch registers. It is important to leave any unused inputs floating for proper operation of the devices. The photodiode inputs are current inputs and, as such, these pins are also considered to be voltage outputs. Tying these inputs to a voltage may saturate the analog block.

<!-- image -->

INPUT CONFIGURATION FOR REGISTER 0x14[11:8] = 5 REGISTER 0x14[7:4] = 5

Figure 15. PD1 to PD4 Connection

Table 12. Time Slot Switch (Register 0x14)

| Address   | Bits   | Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------|--------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x14      | [11:8] | SLOTB_PD_SEL | These bits select the connection of input channels for TimeSlot BasshowninFigure 15 and Figure 16. 0x0: inputs are floating in Time Slot B. 0x1: PDET1 and PDET2 are connected to Channel 1; EXT_IN1 and EXT_IN2 are connected to Channel 2 during Time Slot B. 0x5: EXT_IN1 is connected to Channel 1, EXT_IN2 is connected to Channel 2, PDET1 is connected to Channel 3, and PDET2 is connected to Channel 4 during Time Slot B. Other: reserved. |
|           | [7:4]  | SLOTA_PD_SEL | These bits select the connection of input channels for TimeSlot AasshowninFigure 15 and Figure 16. 0x0: inputs are floating in Time Slot A. 0x1: PDET1 and PDET2 are connected to Channel 1; EXT_IN1 and EXT_IN2 are connected to Channel 2 during Time Slot A. 0x5: EXT_IN1 is connected to Channel 1, EXT_IN2 is connected to Channel 2, PDET1 is connected to Channel 3, and PDET2 is connected to Channel 4 during Time Slot A. Other: reserved. |

16111-014

Figure 16. Current Summation

<!-- image -->

## ADJUSTABLE SAMPLING FREQUENCY

Register 0x12 controls the sampling frequency setting of the ADPD188GG and Register 0x4B, Bits[5:0] further tunes this clock for greater accuracy. The sampling frequency is governed by an internal 32 kHz sample rate clock that also drives the transition of the internal state machine. The maximum sampling frequencies for some sample conditions are listed in Table 1. The maximum sample frequency for all conditions, fSAMPLE,\_MAX, is determined by the following equation:

<!-- formula-not-decoded -->

where tSLEEP\_MIN is the minimum sleep time required between samples. See the Dual Time Slot Operation section for the definitions of tA , t 1 , tB , and t 2 .

If a given time slot is not in use, elements from that time slot do not factor into the calculation. For example, if Time Slot A is not in use, tA and t1 do not add to the sampling period and the new maximum sampling frequency is calculated as follows:

fSAMPLE\_MAX = 1/( tB + t 2 + tSLEEP\_MIN )

## EXTERNAL SYNCHRONIZATION FOR SAMPLING

The ADPD188GG provides an option to use an external synchronization signal to trigger the sampling periods. This external sample synchronization signal can be provided either on the GPIO0 pin or the GPIO1 pin. This functionality is controlled by Register 0x4F, Bits[3:2]. When enabled, a rising edge on the selected input specifies when the next sample cycle occurs. When triggered, there is a delay of one to two internal sampling clock (32 kHz) cycles, and then the normal start-up sequence occurs. This sequence is the same as when the normal sample timer provides the trigger. To enable the external synchronization signal feature, use the following procedure:

1. Write 0x1 to Register 0x10 to enter program mode.
2. Write the appropriate value to Register 0x4F, Bits[3:2] to select whether the GPIO0 pin or the GPIO1 pin specifies when the next sample cycle occurs. Also, enable the appropriate input buffer using Register 0x4F, Bit 1, for the GPIO0 pin, or Register 0x4F, Bit 5, for the GPIO1 pin.
3. Write 0x4000 to Register 0x38.
4. Write 0x2 to Register 0x10 to start the sampling operations.
5. Apply the external synchronization signal on the selected pin at the desired rate; sampling occurs at that rate. As with normal sampling operations, read the data using the FIFO or the data registers. The maximum frequency constraints also apply in this case.

## Providing an External 32 kHz Clock

The ADPD188GG has an option for the user to provide an external 32 kHz clock to the device for system synchronization or for situations where a clock with better accuracy than the internal 32 kHz clock is required. The external 32 kHz clock is provided on the GPIO1 pin only. To enable the 32 kHz external clock, use the following procedure at startup:

1. Drive the GPIO1 pin to a valid logic level or with the desired 32 kHz clock prior to enabling the GPIO1 pin as an input. Do not leave the pin floating prior to enabling it.
2. Write 0x1 to Register 0x4F, Bits[6:5] to enable the GPIO1 pin as an input.
3. Write 0x2 to Register 0x4B, Bits[8:7] to configure the devices to use an external 32 kHz clock. This setting disables the internal 32 kHz clock and enables the external 32 kHz clock.
4. Write 0x1 to Register 0x10 to enter program mode.
5. Write additional control registers in any order while the device is in program mode to configure the device as required.
6. Write 0x2 to Register 0x10 to start the normal sampling operation

## STATE MACHINE OPERATION

During each time slot, the ADPD188GG operates according to a state machine. The state machine operates in the sequence shown in Figure 17.

Figure 17. State Machine Operation Flowchart

<!-- image -->

## Data Sheet

The ADPD188GG operates in one of three modes: standby, program, or normal sampling mode.

Standby mode is a power saving mode in which data collection does not occur. All register values are retained in this mode. To place the device in standby mode, write 0x0 to Register 0x10, Bits[1:0]. The device powers up in standby mode.

Program mode is used for programming registers. Always cycle the ADPD188GG through program mode when writing registers or changing modes. Because power cycling does not occur in this mode, the device may consume higher current in program mode than in normal operation. To place the device in program mode, write 0x1 to Register 0x10, Bits[1:0].

In normal operation, the ADPD188GG pulses light and collects data. Power consumption in this mode depends on the pulse count and data rate. To place the device in normal sampling mode, write 0x2 to Register 0x10, Bits[1:0].

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## NORMAL MODE OPERATION AND DATA FLOW

In normal mode, the ADPD188GG follows a specific pattern set up by the state machine. This pattern is shown in the corresponding data flow diagram in Figure 18. The pattern, in order, is as follows:

1. LED pulse and sample. The ADPD188GG pulses external LEDs. The response of the photodiode to the reflected light is measured by the ADPD188GG. Each data sample is constructed from the sum of n individual pulses, where n is user configurable between 1 and 255.
2. Intersample averaging. If desired, the logic can average n samples, from 2 to 128 in powers of 2, to produce output data. New output data is saved to the output registers every N samples.
3. Data read. The host processor reads the converted results from the data register or the FIFO.
4. Repeat. The sequence has a few different loops that enable different types of averaging while keeping both time slots close in time relative to each other.

16111-017

Figure 18. State Machine Operating Sequence (Datapath)

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## LED Pulse and Sample

At each sampling period, the selected LED driver drives a series of LED pulses, as shown in Figure 19. The magnitude, duration, and number of pulses are programmable over the communications interface. Each LED pulse coincides with a sensing period so that the sensed value represents the total charge acquired on the photodiode in response to only the corresponding LED pulse. Charge, such as ambient light that does not correspond to the LED pulse, is rejected.

After each LED pulse, the photodiode output relating to the pulsed LED signal is sampled and converted to a digital value by the 14-bit ADC. Each subsequent conversion within a sampling period is summed with the previous result. Up to 255 pulse values from the ADC can be summed in an individual sampling period. There is a 20-bit maximum range for each sampling period.

## Averaging

The ADPD188GG offers sample accumulation and averaging functionality to increase signal resolution.

Within a sampling period, the AFE can sum up to 256 sequential pulses. As shown in Figure 18, samples acquired by the AFE are clipped to 20 bits at the output of the AFE. Additional resolution, up to 27 bits, can be achieved by averaging between sampling periods. This accumulated data of N samples is stored as 27-bit values and can be read out directly by using the 32-bit output registers or the 32-bit FIFO configuration.

When using the averaging feature set up by the register, subsequent pulses can be averaged by powers of 2. The user can select from 2, 4, 8, …, up to 128 samples to be averaged. Pulse data is still acquired by the AFE at the sampling frequency, fSAMPLE (see Register 0x12), but new data is written to the registers at the rate of fSAMPLE/N every N th sample. This new data consists of the sum of the previous N samples. The full 32-bit sum is stored in the 32-bit registers. However, before sending this data to the FIFO, a divide by N operation occurs. This divide operation maintains bit depth to prevent clipping on the FIFO.

Use this between sample averaging to lower the noise while maintaining 16-bit resolution. If the pulse count registers are kept to 8 or less, the 16-bit width is never exceeded. Therefore, when using Register 0x15 to average subsequent pulses, many pulses can be accumulated without exceeding the 16-bit word width. This setting can reduce the number of FIFO reads required by the host processor.

## Data Read

The host processor reads output data from the ADPD188GG via the communications interface, from the data registers, or from the FIFO. New output data is made available every N samples, where N is the user configured averaging factor. The averaging factors for Time Slot A and Time Slot B are configurable independently of each other. If the factors are the same, both time slots can be configured to save data to the FIFO. If the two averaging factors are different, only one time slot can save data to the FIFO; data from the other time slot can be read from the output registers.

The data read operations are described in more detail in the Reading Data section.

Figure 19. Example of a PPG Signal Sampled at a Data Rate of 10 Hz Using Five Pulses per Sample

<!-- image -->

## COMMUNICATIONS INTERFACE

The ADPD188GG supports both an SPI and I 2 C serial interface, although only one can be used at any given time in the actual application. All internal registers are accessed through the selected communications interface.

## I 2 C INTERFACE

The ADPD188GG I 2 C conforms to the UM10204 I 2 C-Bus Specification and User Manual, Rev. 05-9 October 2012 , available from NXP Semiconductors. The device supports fast mode (400 kbps) data transfer. Register read and write operations are supported, as shown in Figure 20. The 7-bit I 2 C slave address for the device is 0x64. If the I 2 C interface is being used, the CS pin must be pulled high to disable the SPI port.

Single-word and multiword read operations are supported. For a single register read, the host sends a no acknowledge (NACK) after the second data byte is read and a new register address is needed for each access.

Table 13. Definitions of I 2 C Terminology

For multiword operations, each pair of data bytes is followed by an acknowledge (ACK) from the host until the last byte of the last word is read. The host indicates the last read word by sending a no acknowledge. When reading from the FIFO (Register 0x60), the data is automatically advanced to the next word in the FIFO, and the space is freed. When reading from other registers, the register address is automatically advanced to the next register, allowing the user to read without readdressing each register, thereby reducing the amount of overhead required to read multiple registers. This auto-increment does not apply to the register that precedes the FIFO, Register 0x5F, or the last data register, Register 0x7E.

All register writes are single-word only and require 16 bits (one word) of data.

The software reset (Register 0x0F, Bit 0) returns an acknowledge. The device then returns to standby mode with all registers in the default state.

| Term          | Description                                                                                                        |
|---------------|--------------------------------------------------------------------------------------------------------------------|
| SCL           | Serial clock.                                                                                                      |
| SDA           | Serial address and data.                                                                                           |
| Master        | The device that initiates a transfer, generates clock signals, and terminates a transfer.                          |
| Slave         | The device addressed by a master. The ADPD188GG operates as a slave device.                                        |
| Start (S)     | A high to low transition on the SDA line while SCL is high; all transactions begin with a start condition.         |
| Start (Sr)    | Repeated start condition.                                                                                          |
| Stop (P)      | A low to high transition on the SDA line while SCL is high. A stop condition terminates all transactions.          |
| ACK           | During the acknowledge (ACK) or no acknowledge (NACK) clock pulse, the SDA line is pulled low, and it remains low. |
| NACK          | During the ACK or NACK clock pulse, the SDA line remains high.                                                     |
| Slave Address | After a start (S), a 7-bit slave address is sent, which is followed by a data direction bit (read or write).       |
| Read (R)      | A 1 indicates a request for data.                                                                                  |
| Write (W)     | A 0 indicates a transmission.                                                                                      |

<!-- image -->

| I 2 C WRITE                        | I 2 C WRITE                        | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 | I 2 C WRITE                 |
|------------------------------------|------------------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
| REGISTER WRITE                     | REGISTER WRITE                     | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              | REGISTER WRITE              |
| MASTER START SLAVE ADDRESS + WRITE | MASTER START SLAVE ADDRESS + WRITE | REGISTER ADDRESS            |                             |                             | DATA[15:8]                  |                             | DATA[7:0]                   | STOP                        |                             |                             |                             |                             |                             |                             |
| SLAVE                              | ACK                                |                             | ACK                         |                             | ACK                         |                             | ACK                         |                             |                             |                             |                             |                             |                             |                             |
| I 2 C SINGLE-WORD READ MODE        | I 2 C SINGLE-WORD READ MODE        | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE | I 2 C SINGLE-WORD READ MODE |
| REGISTER READ                      | REGISTER READ                      | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               |
| MASTER START SLAVE ADDRESS + WRITE | MASTER START SLAVE ADDRESS + WRITE | REGISTER ADDRESS            |                             | Sr                          | SLAVE ADDRESS + READ        |                             |                             | ACK                         |                             | NACK                        | STOP                        |                             |                             |                             |
| SLAVE                              | ACK                                |                             | ACK                         |                             |                             | ACK                         | DATA[15:8]                  |                             | DATA[7:0]                   |                             |                             |                             |                             |                             |
| I 2 C MULTIWORD READ MODE          | I 2 C MULTIWORD READ MODE          | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   | I 2 C MULTIWORD READ MODE   |
| REGISTER READ                      | REGISTER READ                      | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               | REGISTER READ               |
| MASTER START SLAVE ADDRESS + WRITE | MASTER START SLAVE ADDRESS + WRITE | REGISTER ADDRESS            |                             | Sr                          | SLAVE ADDRESS + READ        |                             |                             | ACK                         |                             | ACK/NACK                    | STOP                        |                             |                             |                             |
| SLAVE                              | ACK                                |                             | ACK                         |                             |                             | ACK                         | DATA[15:8]                  |                             | DATA[7:0]                   |                             |                             |                             |                             |                             |
| NOTES DATA TRANSFERRED             | NOTES DATA TRANSFERRED             | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      | NOTES DATA TRANSFERRED      |

Figure 20. I 2 C Write and Read Operations

NOTES 1. THE SHADED AREAS REPRESENT WHEN THE DEVICE IS LISTENING.

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## SPI PORT

The SPI port uses a 4-wire interface, consisting of the CS, MOSI, MISO, and SCLK signals, and it is always a slave port. The CS signal goes low at the beginning of a transaction and high at the end of a transaction. The SCLK signal latches MOSI on a low to high transition. The MISO data is shifted out of the device on the falling edge of SCLK and must be clocked into a receiving device, such as a microcontroller, on the SCLK rising edge. The MOSI signal carries the serial input data, and the MISO signal carries the serial output data. The MISO signal remains three-state until a read operation is requested, which allows other SPI-compatible peripherals to share the same MISO line. All SPI transactions have the same basic format shown in Table 14. A timing diagram is shown in Figure 3. Write all data MSB first.

Table 14. Generic Control Word Sequence

| Byte 0            | Byte 1     | Byte 2    | Subsequent Bytes      |
|-------------------|------------|-----------|-----------------------|
| Address[6:0], W/R | Data[15:8] | Data[7:0] | Data[15:8], Data[7:0] |

The first byte written in a SPI transaction is a 7-bit address, which is the location of the address being accessed, followed by the W/R bit. This bit determines whether the communication is a write (Logic Level 1) or a read (Logic Level 0). This format is shown in Table 15.

| Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   | Table 15. SPI Address and Write/R Byte Format   |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| Bit 0                                           | Bit 1                                           | Bit 2                                           | Bit 3                                           | Bit 4                                           | Bit 5                                           | Bit 6                                           | Bit 7                                           |
| A6                                              | A5                                              | A4                                              | A3                                              | A2                                              | A1                                              | A0                                              | W/R                                             |

Data on the MOSI pin is captured on the rising edge of the clock, and data is propagated on the MISO pin on the falling edge of the clock. The maximum read and write speed for the SPI slave port is 10 MHz.

A sample timing diagram for a multiple word SPI write operation to a register is shown in Figure 21. A sample timing diagram of a single-word SPI read operation is shown in Figure 22. The MISO pin transitions from being three-state to being driven following the reception of a valid R bit. In this example, Byte 0 contains the address and the W/R bit, and subsequent bytes carry the data. A sample timing diagram of a multiple word SPI read operation is shown in Figure 23. In Figure 21 to Figure 23, rising edges on SCLK are indicated with an arrow, signifying that the data lines are sampled on the rising edge.

When performing multiple word reads or writes, the data address is automatically incremented to the next consecutive address for subsequent transactions except for Address 0x5F, Address 0x60 (FIFO), and Address 0x7F.

## Data Sheet ADPD188GG

<!-- image -->

## APPLICATIONS INFORMATION

## TYPICAL CONNECTION DIAGRAM

Figure 24 shows the recommended connection diagram for the ADPD188GG using the SPI communications port. Figure 25 shows a circuit using the I 2 C port. The desired communications port, together with the GPIO0 and GPIO1 lines, connects to a system microprocessor or sensor hub. When using the SPI port, the I 2 C interface must be disabled by connecting the SDA and SCL pins high to 1.8 V. When using the I 2 C interface, the SPI is disabled by connecting CS to 1.8 V. Tie the unused inputs, SCLK and MOSI, to ground. The EXT\_IN1 and EXT\_IN 2 pins are current inputs and can be connected to external sensors. A voltage source can be connected to the EXT\_IN1 and EXT\_IN2 pins through a series resistance, effectively converting the voltage into a current (see the Using the EXT\_IN 1 and EXT\_IN 2 Inputs with a Voltage Source section).

Provide a regulated 1.8 V supply, tied to VDD1 and VDD2. The VLEDx level uses a standard regulator circuit according to the peak current requirements specified in Table 1 and calculated in the Calculating Current Consumption section. Place 0.1 µF ceramic decoupling capacitors as close as possible to VDD1 and VDD2; a 1.0 µF ceramic capacitor must be placed as close as possible to the VREF pin.

For best noise performance, connect AGND, DGND, and LGND together at a large conductive surface such as a ground plane, ground pour, or large ground trace.

Figure 24. SPI Mode Connection Diagram

<!-- image -->

Figure 25. I 2 C Mode Connection Diagram

<!-- image -->

## LAND PATTERN

Figure 26 shows the recommended PCB footprint (land pattern). Table 8 and Figure 4 provide the recommended soldering profile.

<!-- image -->

## RECOMMENDED START-UP SEQUENCE

At power-up, the device is in standby mode (Register 0x10 = 0x0), as shown in Figure 17. The ADPD188GG does not require a particular power-up sequence.

From standby mode, to begin measurement, initiate the ADPD188GG as follows:

1. Set the CLK32K\_EN bit (Register 0x4B, Bit 7) to start the sample clock (32 kHz clock). This clock controls the state machine. If this clock is off, the state machine is not able to transition as defined by Register 0x10.
2. Write 0x1 to Register 0x10 to force the device into program mode. Step 1 and Step 2 can be swapped, but the actual state transition does not occur until both steps occur.
3. Write additional control registers in any order while the device is in program mode to configure the devices as required.
4. Write 0x2 to Register 0x10 to start normal sampling operation.

To terminate normal operation, follow this sequence to place the ADPD188GG in standby mode:

1. Write 0x1 to Register 0x10 to force the devices into program mode.
2. Write to the registers in any order while the devices are in program mode.
3. Write 0x00FF to Register 0x00 to clear all interrupts. If desired, clear the FIFO as well by writing 0x80FF to Register 0x00.
4. Write 0x0 to Register 0x10 to force the devices into standby mode.
5. Optionally, stop the 32 kHz clock by resetting the CLK32K\_ EN bit (Register 0x4B, Bit 7). Register 0x4B, Bit 7 = 0 is the only write that must be written when the device is in standby mode (Register 0x10 = 0x0). If 0 is written to this bit while in program mode or normal mode, the devices become unable to transition into any other mode, including standby mode, even if they are subsequently written to do so. As a result, the power consumption in what appears to be standby mode is greatly elevated. For this reason, and due to the very low current draw of the 32 kHz clock while in operation, it is recommended from an ease of use perspective to keep the 32 kHz clock running after it is turned on.

## READING DATA

The ADPD188GG provides multiple methods for accessing the sample data. Each time slot can be independently configured to provide data access using the FIFO or the data registers. Interrupt signaling is also available to simplify timely data access. The FIFO is available to loosen the system timing requirements for data accesses.

## Reading Data Using the FIFO

The ADPD188GG includes a 128-byte FIFO memory buffer that can be configured to store data from either or both time slots. Register 0x11 selects the type of data from each time slot to be written to the FIFO. Note that both time slots can be enabled to use the FIFO, but only if their output data rate is the same.

## Output Data Rate = fSAMPLE / Nx

## where:

fSAMPLE is the sampling frequency.

Nx is the averaging factor for each time slot ( NA for Time Slot A and NB for Time Slot B). In other words, NA = NB must be true to store data from both time slots in the FIFO.

Data packets are written to the FIFO at the output data rate. A data packet for the FIFO consists of a complete sample for each enabled time slot. Data for each photodiode channel can be stored as either 16 or 32 bits. Each time slot can store 2, 4, 8, or 16 bytes of data per sample, depending on the mode and data format. To ensure that data packets are intact, new data is only written to the FIFO if there is sufficient space for a complete packet. Any new data that arrives when there is not enough space is lost. The FIFO continues to store data when sufficient space exists. Always read FIFO data in complete packets to ensure that data packets remain intact.

The number of bytes currently stored in the FIFO is available in Register 0x00, Bits[15:8]. A dedicated FIFO interrupt is also available and automatically generates when a specified amount of data is written to the FIFO.

## Interrupt-Based Method

To read data from the FIFO using an interrupt-based method, use the following procedure:

1. In program mode, set the configuration of the time slots as desired for operation.
2. Write Register 0x11 with the desired data format for each time slot.
3. Set FIFO\_THRESH in Register 0x06, Bits[13:8] to the interrupt threshold. A recommended value for this is the number of 16-bit words in a data packet, minus 1. This causes an interrupt to generate when there is at least one complete packet in the FIFO.
4. Enable the FIFO interrupt by writing a 0 to the FIFO\_ INT\_MASK in Register 0x01, Bit 8. Also, configure the interrupt pin (GPIO0) by writing the appropriate value to the bits in Register 0x02.
5. Enter normal operation mode by setting Register 0x10 to 0x2.
6. When an interrupt occurs,
- a. There is no requirement to read the FIFO\_SAMPLES bits, because the interrupt is generated only if there is one or more full packets. Optionally, the interrupt routine can check for the presence of more than one available packet by reading these bits.

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

- b. Read a complete packet using one or more multiword accesses using Register 0x60. Reading the FIFO automatically frees the space for new samples.

The FIFO interrupt automatically clears immediately upon reading any data from the FIFO and is set again only when the FIFO is written and the number of words is above the threshold.

## Polling Method

To read data from the FIFO in a polling method, use the following procedure:

1. In program mode, set the configuration of the time slots as desired for operation.
2. Write Register 0x11 with the desired data format for each time slot.
3. Enter normal operation mode by setting Register 0x10 to 2.

## Next, begin the polling operations.

1. Wait for the polling interval to expire.
2. Read the FIFO\_SAMPLES bits (Register 0x00, Bits[15:8]).
3. If FIFO\_SAMPLES ≥ the packet size, read a packet using the following steps:
- a. Read a complete packet using one or more multiword accesses via Register 0x60. Reading the FIFO automatically frees the space for new samples.
- b. Repeat Step 1.

When a mode change is required, or any other disruption to normal sampling is necessary, the FIFO must be cleared. Use the following procedure to clear the state and empty the FIFO:

1. Enter program mode by setting Register 0x10 to 0x1.
2. Write 1 to Register 0x00, Bit 15.

## Reading Data from Registers Using Interrupts

The latest sample data is always available in the data registers and is updated simultaneously at the end of each time slot. The data value for each photodiode channel is available as a 16-bit value in Register 0x64 through Register 0x67 for Time Slot A, and Register 0x68 through Register 0x6B for Time Slot B. If allowed to reach their maximum value, Register 0x64 through Register 0x6B clip. If Register 0x64 through Register 0x6B saturate, the unsaturated (up to 27 bits) values for each channel are available in Register 0x70 through Register 0x77 for Time Slot A and Register 0x78 through Register 0x7F for Time Slot B. Sample interrupts are available to indicate when the registers are updated and can be read. To use the interrupt for a given time slot, use the following procedure:

1. Enable the sample interrupt by writing a 0 to the appropriate bit in Register 0x01. To enable the interrupt for Time Slot A, write 0 to Bit 5. To enable the interrupt for Time Slot B, write 0 to Bit 6. Either or both interrupts can be set.
2. Configure the interrupt pin (GPIOx) by writing the appropriate value to the bits in Register 0x02.
3. An interrupt generates when the data registers are updated.
4. The interrupt handler must perform the following:
- a. Read Register 0x00 and observe Bit 5 or Bit 6 to confirm which interrupt has occurred. This step is not required if only one interrupt is in use.
- b. Read the data registers before the next sample can be written. The system must have interrupt latency and service time short enough to respond before the next data update, based on the output data rate.
- c. Write a 1 to Bit 5 or Bit 6 in Register 0x00 to clear the interrupt.

If both time slots are in use, it is possible to use only the Time Slot B interrupt to signal when all registers can be read. It is recommended to use the multiword read to transfer the data from the data registers.

## Reading Data from Registers Without Interrupts

If the system interrupt response is not fast or predictable enough to use the interrupt method, or if the interrupt pin (GPIOx) is not used, it is possible to obtain reliable data access by using the data hold mechanism. To guarantee that the data read from the registers is from the same sample time, it is necessary to prevent the update of samples while reading the current values. The method for doing register reads without interrupt timing is as follows:

1. Write a 1 to SLOTA\_DATA\_HOLD or SLOTB\_DATA\_ HOLD (Register 0x5F, Bit 1 and Bit 2, respectively) for the time slot requiring access (both time slots can be accessed). This setting prevents sample updates.
2. Read the registers as desired.
3. Write a 0 to the SLOTA\_DATA\_HOLD or SLOTB\_DATA\_ HOLD bits (Register 0x5F, Bit 1 and Bit 2, respectively) previously set. Sample updates are allowed again.

Because a new sample may arrive while the reads are occurring, this method prevents the new sample from partially overwriting the data being read.

## CLOCKS AND TIMING CALIBRATION

The ADPD188GG operates using two internal time bases. A 32 kHz clock sets the sample timing, and a 32 MHz clock controls the timing of internal functions such as LED pulsing and data capture. Both clocks are internally generated and exhibit device to device variation of approximately 10% (typical).

Heart rate monitoring (HRM) applications require an accurate time base to achieve an accurate count of beats per minute. The ADPD188GG provides a simple calibration procedure for both clocks.

## Calibrating the 32 kHz Clock

This procedure calibrates items associated with the output data rate. Calibration of this clock is important for items where an accurate data rate is important, such as heart rate measurements.

## To calibrate the 32 kHz clock,

1. Set the sampling frequency to the highest the system can handle, such as 2000 Hz. Because the 32 kHz clock controls sample timing, its frequency is readily accessible via the GPIO0 pin. Configure the interrupt by writing the appropriate value to Bits[2:0] in Register 0x02 and set the interrupt to occur at the sampling frequency by writing 0x0 to Register 0x01, Bit 5 or Bit 6. Monitor the GPIO0 pin. The interrupt frequency must match the set sample frequency.
2. If the monitored interrupt frequency is less than the set sampling frequency, decrease the CLK32K\_ADJUST bits (Register 0x4B, Bits[5:0]). If the monitored interrupt frequency is larger than the set sampling frequency, increase the CLK32K\_ADJUST bits.
3. Repeat Step 1 until the monitored interrupt signal frequency is close to the set sampling frequency.

## Calibrating the 32 MHz Clock

This procedure calibrates items associated with the fine timing within a sample period, such as LED pulse width and spacing, and assumes that the 32 kHz clock is already calibrated.

To calibrate the 32 MHz clock,

1. Write 0x1 to Register 0x5F, Bit 0.
2. Enable the CLK\_RATIO calculation by writing 0x1 to Register 0x50, Bit 5 (CLK32M\_CAL\_EN). This function counts the number of 32 MHz clock cycles in two cycles of the 32 kHz clock. With this function enabled, this value is stored in Register 0x0A, Bits[11:0] and nominally this ratio is 2000 (0x07D0).
3. Calculate the 32 MHz clock error as follows: Clock Error = 32 MHz × (1 -CLK\_RATIO /2000)
4. Adjust the frequency by setting Bits[7:0] in Register 0x4D per the following equation:

CLK32M\_ADJUST = Clock Error /109 kHz

5. Write 0x0 to Register 0x50, Bit 5 to reset the CLK\_RATIO function.
6. Repeat Step 1 through Step 5 until the desired accuracy is achieved.
7. Write 0x1 to Register 0x5F, Bit 0, and set the GPIO0 pin back to the mode desired for normal operation.

## OPTIONAL TIMING SIGNALS AVAILABLE ON GPIO0 AND GPIO1

The ADPD188GG provides a number of different timing signals, available via the GPIO0 and GPIO1 pins, to enable ease of system synchronization and flexible triggering options. Each GPIOx pin can be configured as an open-drain output if they are sharing the bus with other drivers, or they can be configured to always drive the bus. Both outputs also have polarity control in situations where a timing signal must be inverted from the default.

## Table 16. GPIOx Control Settings

| PinName   | Register, Bits   | Setting Description                                                                                                            |
|-----------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| GPIO0     | 0x02, Bit 0      | 0: polarity active high 1: polarity active low 0: always drives the bus 1: drives the bus when 0: disables the GPIO0 pin drive |
|           | 0x02, Bit 1      | asserted                                                                                                                       |
|           | 0x02, Bit 2      | 1: enables the GPIO0 pin drive                                                                                                 |
| GPIO1     | 0x02, Bit 8      | 0: polarity active high 1: polarity active low 0: always drives the bus 1: drives the bus when 0: disables the GPIO1 pin       |
|           | 0x02, Bit 9      | asserted                                                                                                                       |
|           | 0x4F, Bit 6      | drive 1: enables the GPIO1 pin drive                                                                                           |

The various available timing signals are controlled by the settings in Register 0x0B, Bits[12:8] of this register control the timing signals available on GPIO1, and Bits[4:0] control the timing signals available on GPIO0. All of the timing signals described in this data sheet are available on either (or both) of the GPIO0 and GPIO1 pins. Timing diagrams are shown in Figure 27 and Figure 28. The time slot settings used to generate the timing diagrams are described in Table 17.

Table 17. ADPD188GG Settings Used for the Timing Diagrams Shown in Figure 27 and Figure 28

| Register   | Setting   | Description                                            |
|------------|-----------|--------------------------------------------------------|
| 0x31       | 0x0118    | Time Slot A: 1 LED pulse                               |
| 0x36       | 0x0418    | Time Slot B: 4 LED pulses                              |
| 0x15       | 0x0120    | Time Slot A decimation = 4, Time Slot B decimation = 2 |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

Figure 28. Optional Timing Signals Available on GPIOx-Register 0x0B, Bits[12:8] or Bits[4:0] = 0x02, 0x0C, 0x0D, and 0x0E

<!-- image -->

## Interrupt Function

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x01 configures the respective pin to perform the interrupt function as defined by the settings in Register 0x01.

## Sample Timing

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x02 configures the respective pin to provide a signal that asserts at the beginning of the first time slot of the current sample and deasserts at the end of the last time slot of the current sample. For example, if both time slots are enabled, this signal asserts at the beginning of Time Slot A and deasserts at the end of Time Slot B. If only a single time slot is enabled, the signal asserts at the beginning of the enabled time slot and deasserts at the end of this same time slot.

## Pulse Outputs

Three options are available to provide a copy of the LED pulse outputs. Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x05 provides a copy of the Time Slot A LED pulses on the respective pin. A setting of 0x06 provides the Time Slot B pulses, and a setting of 0x07 provides the pulse outputs of both time slots.

## Output Data Cycle Signal

There are three options available to provide a signal that indicates when the output data is written to the output data registers or to the FIFO. Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x0C provides a signal that indicates that a data value is written for Time Slot A. A setting of 0x0D provides a signal that indicates that a data value is written for Time Slot B, and 0x0E provides a signal to indicate that a value is written for either time slot. The signal asserts at the end of the time slot, when the output data is already written, and deasserts at the start of the subsequent sample. This timing signal is especially useful in situations where the FIFO is being used. For example, one of the GPIOx pins can be configured to provide an interrupt after the FIFO reaches the FIFO threshold set in Register 0x06, Bits[13:8], while the other GPIOx pin can be configured to provide the output data cycle signal. This signal can be used to trigger a peripheral device, such as an accelerometer, so that time aligned signals are provided to the processor.

## fS/2 Output

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x0F configures the respective pin to provide a signal that toggles at half the sampling rate. The fS/2 timing signal always starts in an active low state when the device switches from standby mode to normal operating mode and transitions to a high state at the completion of the first sample.

## Logic 0 Output

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x10 configures the respective pin to provide a Logic 0 output.

## Logic 1 Output

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x11 configures the respective pin to provide a Logic 1 output.

## 32 kHz Oscillator Output

Setting Register 0x0B, Bits[12:8] or Bits[4:0] = 0x13 configures the respective pin to provide a copy of the on-board 32 kHz oscillator.

## LED DRIVER PINS AND LED SUPPLY VOLTAGE

The LED driver pins (LED1/DNC, LED2, and LED3) have an absolute maximum voltage rating of 3.6 V. Any voltage exposure over this rating affects the reliability of the device operation and, in certain circumstances, causes the device to completely cease proper operation. The voltage of the LED driver pins must not be confused with the supply voltages for the LEDs themselves (VLED1 and VLED2). These are the voltages applied to the anodes of the internal LEDs connected at VLED1.

## LED DRIVER OPERATION

The LED drivers for the ADPD188GG are current sinks. Typical LED driver current vs. LED driver voltage is shown in Figure 9. Figure 24 shows the basic schematic of how the ADPD188GG connects to an LED through the LED driver. The Determining the Average Current section and the Determining CVLED section define the requirements for the bypass capacitor (CVLED) and the supply voltages of the LEDs (VLED).

## DETERMINING THE AVERAGE CURRENT

When the ADPD188GG drives an LED, it drives the LED in a series of short pulses. Figure 29 shows the typical ADPD188GG configuration of a pulse burst sequence. In this sequence, the LED pulse width, tLED\_PULSE, is 3 µs, and the LED pulse period, tLED\_PERIOD, is 19 µs. The goal of CVLED is to buffer the LED between individual pulses. In the worst case scenario, where the pulse train shown in Figure 29 is a continuous sequence of short pulses, the VLED supply must supply the average current. Therefore, calculate ILED\_AVERAGE as follows:

<!-- formula-not-decoded -->

## where:

ILED\_AVERAGE is the average current needed from the VLED supply. It is also the VLED supply current rating.

ILED\_PEAK is the peak current setting of the LED.

For the numbers shown in Figure 29, ILED\_AVERAGE = 3/19 × ILED\_PEAK. For typical LED timing, the average VLED supply current is 3/19 × 250 mA = 39.4 mA, indicating that the VLED supply must support a dc current of 40 mA.

Figure 29. Typical LED Pulse Burst Sequence Configuration

<!-- image -->

## DETERMINING CVLED

To determine the CVLED capacitor value, determine the maximum forward-bias voltage, VFB\_LED\_MAX, of the LED in operation. From Figure 30, ILED\_PEAK converts to VFB\_LED\_MAX. For example, with a 200 mA current, VFB\_LED\_MAX is 3.65 V. Any series resistance in the LED path must also be included in this voltage. When designing the LED path, keep in mind that small resistances can add up to large voltage drops when a 200 mA current is driven through the resistor. These resistances can be unnecessary constraints on the VLED supply.

Figure 30. Typical LED Forward-Bias Voltage Drop as a Function of the LED Driver Current

<!-- image -->

For the CVLED capacitor to be sized correctly, do not deplete it during the pulse of the LED to the point where the voltage on the capacitor is less than the forward-bias on the LED. To calculate the minimum value for the VLED bypass capacitor, use the following equation:

<!-- formula-not-decoded -->

## where:

tLED\_PULSE is the LED pulse width.

ILED\_PEAK is the maximum forward-bias current on the LED used in operating the device.

VLED\_MIN is the lowest voltage from the VLED supply with no load. VFB\_LED\_MAX is the maximum forward-bias voltage required on the LED to achieve ILED\_PEAK.

The numerator of the CVLED equation sets up the total discharge amount in coulombs from the bypass capacitor to satisfy a single programmed LED pulse of the maximum current. The denominator represents the difference between the lowest voltage from the VLED supply and the LED required voltage. The LED required voltage is the voltage of the anode of the LED such that the 0.6 V compliance of the LED driver at 200 mA and the forward-bias voltage of the LED operating at the maximum current is satisfied. For a typical ADPD188GG example, assume that the lowest value for the VLED supply is 4.4 V, and that the peak current is 200 mA for two 525 nm LEDs in parallel. The minimum value for CVLED is then equal to 4 µF.

<!-- formula-not-decoded -->

As shown in Equation 3, the minimum supply voltage drops close to the maximum anode voltage, and the demands on CVLED become more stringent, forcing the capacitor value higher. It is important to plug the correct values into these equations. For example, using an average value for VLED\_MIN instead of the worst-case value for VLED\_MIN can cause a problem; therefore, adding sufficient margin on CVLED is strongly recommended.

## USING EXTERNAL LEDS

The ADPD188GG LED driver is also connected to an external package pin so that the driver can drive external LEDs, if desired. Figure 31 shows a connection diagram that enables driving external LEDs.

Figure 31. Using the ADPD188GG LED Drivers to Drive External LEDs

<!-- image -->

## CALCULATING CURRENT CONSUMPTION

The current consumption of the ADPD188GG depends on the user selected operating configuration, as described in the following equations.

## Total Power Consumption

To calculate the total power consumption, use Equation 4.

Total Power = IVDD\_AVERAGE × VDD + ILED\_AVERAGE × VLED (4) where:

IVDD\_AVERAGE is the average VDD supply current (supplied at VDD1 and VDD2).

VDD is the voltage applied at the VDD1 and VDD2 pins.

ILED\_AVERAGE is the average LED supply current.

VLED is the voltage at the VLEDx pins, respectively.

## Average VDD Supply Current

To calculate the average VDD supply current, use Equation 5.

<!-- formula-not-decoded -->

## where:

DR is the data rate in Hz.

IVDD\_STANDBY = 0.2 µA.

QPROC\_x is an average charge associated with a processing time, as follows:

When only Time Slot A is enabled,

<!-- formula-not-decoded -->

When only Time Slot B is enabled,

<!-- formula-not-decoded -->

When Time Slot A and Time Slot B are enabled,

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## where:

NUM\_CHANNELS is the number of active channels. ILEDX\_PK is the peak LED current, expressed in amps, for the LED enabled in that particular time slot.

SCALE\_X is the scale factor for the LED current drive determined by Bit 13 of the ILED\_COARSE register.

LEDx\_OFFSET is the pulse start time offset expressed in seconds.

LEDx\_PERIOD is the pulse period expressed in seconds. PULSE\_COUNT is the number of pulses.

Note that if either Time Slot A or Time Slot B are disabled, IAFE\_x = 0 for that respective time slot.

## Average VLEDA Supply Current

To calculate the average VLEDA supply current, use Equation 8.

<!-- formula-not-decoded -->

where:

SLOTA\_LED\_WIDTH is the LED pulse width expressed in seconds.

ILEDA\_PK is the peak current, expressed in amps, for the Time Slot A LED.

## Average VLEDB Supply Current

To calculate the average VLEDB supply current, use Equation 9.

<!-- formula-not-decoded -->

where:

SLOTB\_LED\_WIDTH is the LED pulse width expressed in seconds.

ILEDB\_PK is the peak current, expressed in amps, for the Time Slot B LED.

## Optimizing SNR per Watt in a Signal Limited System

In practice, optimizing for peak SNR is not always practical. One scenario in which the PPG signal has a poor SNR is the signal limited regime. In this scenario, the LED current reaches an upper limit before the desired dc return level is achieved.

Tuning in this case starts where the peak SNR tuning stops. The starting point is nominally a 50k gain, as long as the lowest LED current setting of 12 mA does not saturate the photodiode and the 50k gain provides enough protection against intense background light. In these cases, use a 25k gain as the starting point.

The goal of the tuning process is to bring the dc return signal to a specific ADC range, such as 50% or 60%. The ADC range choice is a function of the margin of headroom needed to prevent saturation as the dc level fluctuates over time. The SNR of the PPG waveform is always some percentage of the dc level. If the target level cannot be achieved at the base gain, increase the gain and repeat the procedure. The tuning system may need to place an upper limit on the gain to prevent saturation from ambient signals.

## Data Sheet

## Tuning the Pulse Count

After the LED peak current and TIA gain are optimized, increasing the number of pulses per sample increases the SNR by the square root of the number of pulses. There are two ways to increase the pulse count. The pulse count registers (Register 0x31, Bits[15:8], and Register 0x36, Bits[15:8]) change the number of pulses per internal sample. Register 0x15, Bits[6:4] and Bits[10:8], controls the number of internal samples that are averaged together before the data is sent to the output. Therefore, the number of pulses per sample is the pulse count register multiplied by the number of subsequent samples being averaged. In general, the internal sampling rate increases as the number of internal sample averages increase to maintain the desired output data rate. The SNR/watt is most optimal with pulse count values of 16 or less. Above pulse count values of 16, the square root relationship does not hold in the pulse count register. However, this relationship continues to hold when averaged between samples using Register 0x15.

Note that increasing LED peak current increases SNR almost directly proportional to LED power, whereas increasing the number of pulses by a factor of n results in only a nominal √(n) increase in SNR.

When using the sample sum/average function (Register 0x15), the output data rate decreases by the number of summed samples. To maintain a static output data rate, increase the sample frequency (Register 0x12) by the same factor as that selected in Register 0x15. For example, for a 100 Hz output data rate and a sample sum/average of four samples, set the sample frequency to 400 Hz.

## Improving SNR Using Integrator Chopping

The last stage in the analog front end that is integrated into the ADPD188GG data path is a charge integrator. The integrator uses an on and off integration sequence, synchronized to the emitted light pulse, which acts as an additional high-pass filter to remove offsets, drifts, and low frequency noise from the previous stages. However, the integrating amplifier can itself introduce low frequency signal content at a low level. The ADPD188GG has an integrator chop mode that enables additional chopping in the digital domain to remove this signal. This chopping is achieved by using even numbers of pulses per sample and inverting the integration sequence for half of those sequences. In the calculation to combine the digitized result of each of the pulses of the sample, the sequences with an inverted integrator sequence are subtracted and the sequences with a normal integrator sequence are added. An example diagram of the integrator chopping sequence is shown in Figure 32.

The result is that any low frequency signal contribution from the integrator is eliminated, leaving only the integrated signal, which results in higher SNR, especially at higher numbers of pulses and at lower TIA gains where the noise contribution of the integrator becomes more pronounced.

Digital chopping is enabled using the registers and bits detailed in Table 18. The bit fields define the chopping operation for the first four pulses. This 4-bit sequence is then repeated for all subsequent pulses. In Figure 32, a sequence is shown where the second and fourth pulses are inverted while the first and third pulses remain in the default polarity (noninverted). This configuration is achieved by setting Register 0x17, Bits[3:0] = 0xA and Register 0x1D, Bits[3:0] = 0xA for Time Slot A and Time Slot B, respectively. To complete the operation, the math must be adjusted using Register 0x58. In this example, set Register 0x58, Bits[9:8] and Register 0x58, Bits[11:10] to b01 to add the third pulse and subtract the fourth pulse for Time Slot A and Time Slot B, respectively. Set Register 0x58, Bits[2:1] and Register 0x58, Bits[6:5] to b01 to add the first pulse and subtract the second pulse for Time Slot A and Time Slot B, respectively. This sequence then repeats for every subsequent sequence of four pulses. An even number of pulses must be used with integrator chop mode.

When using integrator chop mode, the ADC offset registers (Register 0x18 through Register 0x1B for Time Slot A, and Register 0x1E through Register 0x21 for Time Slot B) must be set to 0. These settings are required because any digital offsets at the output of the ADC are automatically eliminated when the math is adjusted to subtract the inverted integration sequences while the default integration sequences are added. Integrator chop mode also eliminates the need to manually null the ADC offsets at startup in a typical application. Note that the elimination of the offset using chop mode may clip at least half of the noise signal when no input signal is present, which makes measuring the noise floor during characterization of the system difficult. For this reason, perform noise floor characterization of the system either with chop mode disabled or with chop mode enabled but with a minimal signal present at the input that increases the noise floor enough such that it is no longer clipped.

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

<!-- image -->

Table 18. Register Settings for Integrator Chop Mode

| Hex Addr.   | Data Bit(s)   | BitName       | Description                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------|---------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x17        | [3:0]         | INTEG_ORDER_A | Integration sequence order for Time Slot A. Each bit corresponds to the polarity of the integration sequence of a single pulse in a four-pulse sequence. Bit 0 controls the integration sequence of Pulse 1, Bit 1 controls Pulse 2, Bit 2 controls Pulse 3, and Bit 3 controls Pulse 4. After four pulses, the sequence repeats. 0: normal integration sequence. 1: reversed integration sequence. |
| 0x1D        | [3:0]         | INTEG_ORDER_B | Integration sequence order for Time Slot B. Each bit corresponds to the polarity of the integration sequence of a single pulse in a four-pulse sequence. Bit 0 controls the integration sequence of Pulse 1, Bit 1 controls Pulse 2, Bit 2 controls Pulse 3, and Bit 3 controls Pulse 4. After four pulses, the sequence repeats. 0: normal integration sequence. 1: reversed integration sequence  |
| 0x58        | [11:10]       | FLT_MATH34_B  | Time Slot B control for adding and subtracting Sample 3 and Sample 4 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 15 and Sample 16 in a 16-pulse sequence). 00: add third and fourth. 01: add third and subtract fourth. 10: subtract third and add fourth. 11: subtract third and fourth.                                                                         |
|             | [9:8]         | FLT_MATH34_A  | Time Slot A control for adding and subtracting Sample 3 and Sample 4 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 15 and Sample 16 in a 16-pulse sequence). 00: add third and fourth. 01: add third and subtract fourth. 10: subtract third and add fourth. 11: subtract third and fourth.                                                                         |
|             | [6:5]         | FLT_MATH12_B  | Time Slot B control for adding and subtracting Sample 1 and Sample 2 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 13 and Sample 14 in a 16-pulse sequence). 00: add first and second. 01: add first and subtract second. 10: subtract first and add second. 11: subtract first and second.                                                                         |
|             | [2:1]         | FLT_MATH12_A  | Time Slot A control for adding and subtracting Sample 1 and Sample 2 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 13 and Sample 14 in a 16-pulse sequence). 00: add first and second. 01: add first and subtract second. 10: subtract first and add second. 11: subtract first and second.                                                                         |

## MECHANICAL CONSIDERATIONS FOR COVERING THE ADPD188GG

In some applications, it may be necessary to cover the ADPD188GG to protect it from moisture. The ADPD188GG is designed with this requirement in mind. The unique cross section of the device, as shown in Figure 13, prevents light from going directly from the LED to the detector even with a reasonably thick window. It is recommended that the window thickness be &lt;0.7 mm and the air gap between the module and the window be kept to &lt;0.5 mm for optimal operation.

## TIA ADC MODE

Figure 33 shows a way to put the ADPD188GG into a mode that effectively runs the TIA directly into the ADC without using the analog band-pass filter (BPF) and integrator. This mode is referred to as TIA ADC mode. There are two basic applications of TIA ADC mode. In normal operation, all of the background light is blocked from the signal chain, and therefore, cannot be measured. TIA ADC mode can measure the amount of background and ambient light. This mode can also measure other dc input currents, such as leakage resistance.

Figure 33. TIA ADC Mode Block Diagram

<!-- image -->

When the devices are in TIA ADC mode, the BPF and the integrator stage are bypassed. This bypass effectively wires the TIA directly into the ADC. At the set sampling frequency, the ADC samples Channel 1 through Channel 4 in sequential order, and each sample is taken at 1 µs intervals.

There are two modes of operation in TIA ADC mode. One mode is an inverting configuration where TIA ADC mode directly drives the ADC. This mode is enabled by setting Register 0x43 (Time Slot A) and/or Register 0x45 (Time Slot B) to 0xB065, which bypasses the BPF and the integrator. With the ADC offset register(s) for the desired channel set to 0 and the TIA\_VREF set to 1.265 V, the output of the ADC is at ~13,000 codes for a single pulse and a zero input current condition. As the input current from the photodiode increases, the ADC output decreases toward 0.

The recommended TIA ADC mode is one in which the BPF is bypassed and the integrator is configured as a buffer. This mode is enabled by writing 0xAE65 to Register 0x43 (Time Slot A) and/or Register 0x45 (Time Slot B) to bypass the BPF. Additionally, to configure the integrator as a buffer, set Bit 7 of Register 0x42 (Time Slot A) and/or Register 0x44 (Time Slot B) to 1, and set Bit 7 of Register 0x58 to 1. With the ADC offset register(s) for the desired channel set to 0 and TIA\_VREF set to 1.265 V, the output of the ADC is at ~13,000 codes for a single pulse and a zero input current condition. As the input current from the photodiode increases, the ADC output decreases toward 0.

When configuring the integrator as a buffer, there is the option of either using a gain of 1 or a gain of 0.7. Using the gain of 0.7 increases the usable dynamic range at the input to the TIA. The buffer gain is set using Register 0x42, Bit 9 for Time Slot A and Register 0x44, Bit 9 for Time Slot B. Setting this bit to 0 (default) sets a gain of 1. Setting this bit to 1 configures the buffer with a gain of 0.7.

The ADC output (ADCOUT) is calculated as follows:

<!-- formula-not-decoded -->

## where:

TIA\_VREF is the bias voltage for the TIA (the default value is 1.265 V).

i is the input current to the TIA.

RF is the TIA feedback resistor.

SLOTx\_BUF\_GAIN is either 0.7 or 1, based on the setting of Register 0x42, Bit 9 and Register 0x44, Bit 9.

Equation 11 is an approximation and does not account for internal offsets and gain errors. The calculation also assumes that the ADC offset registers are set to 0.

One time slot can be used in TIA ADC mode at the same time the other time slot is being used in normal pulsed mode. This capability is useful for monitoring ambient and pulsed signals at the same time. The ambient signal is monitored during the time slot configured for TIA ADC mode, while the pulsed signal, with the ambient signal rejected, is monitored in the time slot configured for normal mode.

## Protecting Against TIA Saturation in Normal Operation

One of the reasons to monitor TIA ADC mode is to protect against environments that may cause saturation. One concern when operating in high light conditions, especially with larger photodiodes, is that the TIA stage may become saturated while the ADPD188GG continue to communicate data. The resulting saturation is not typical. The TIA, based on its settings, can only handle a certain level of photodiode current. Based on the way the ADPD188GG is configured, if there is a current level from the photodiode that is larger than the TIA can handle, the TIA output during the LED pulse effectively extends the current pulse, making it wider. The AFE timing is then violated because the positive portion of the band-pass filter output extends into the negative section of the integration window. Thus, the photosignal is subtracted from itself, causing the output signal to decrease when the effective light signal increases.

To measure the response from the TIA and verify that this stage is not saturating, place the device in TIA ADC mode and slightly modify the timing. Specifically, sweep SLOTx\_AFE\_OFFSET until two or three of the four channels reach a minimum value (note that TIA is in an inverting configuration). All four channels do not reach this minimum value because, typically, 3 µs LED pulse widths are used and the ADC samples the four channels

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

sequentially at 1 µs intervals. This procedure aligns the ADC sampling time with the LED pulse to measure the total amount of light falling on the photodetector (for example, background light + LED pulse).

To ensure that the TIA does not saturate, a safe operating region is typically at ¾ full scale and lower. Use Table 19 to determine how the output codes map to ADC levels on a per channel per pulse basis. These codes are not the same as in normal mode because the band-pass filter and integrator are not unity-gain elements.

## Measuring PCB Parasitic Input Resistance

During the process of mounting the ADPD188GG, undesired resistance can develop on the inputs through assembly errors or debris on the PCB. These resistances can form between the anode and cathode, or between the anode and some other supply or ground. In normal operation, the ambient rejection feature of the ADPD188GG masks the primary effects of these resistances, making it very difficult to detect them. However, even at 1 MΩ to 10 MΩ, such resistance can impact performance significantly through added noise or decreased dynamic range. TIA ADC mode can be used to screen for these assembly issues.

## Measuring Shunt Resistance on the Photodiode

A shunt resistor across the photodiode/EXT\_INx does not generally affect the output level of the device in operation because the effective impedance of the TIA is very low, especially if the photodiode is held to 0 V in operation. However, such resistance can add noise to the system, degrading performance. The best way to detect photodiode leakage, also called photodiode shunt resistance, is to place the device in TIA ADC mode in the dark and vary the operation mode cathode voltage. Setting the cathode to 1.3 V places 0 V across the photodiode because the anode is always at 1.3 V while in operation. Setting the cathode to 1.8 V places 0.5 V across the photodiode. Using the register settings in Table 1 to control the cathode voltage, measure the TIA ADC value at both voltages. Next, divide the voltage difference of 0.5 V by the difference of the ADC result after converting it to a current. This result is the approximate shunt resistance. Values greater than 10 MΩ may be difficult to measure, but this method is useful in identifying gross failures.

## Measuring TIA Input Shunt Resistance

A resistance to develop between the TIA input and another supply or ground on the PCB is an example of another problem that can occur. These resistances can force the TIA into saturation prematurely. This premature saturation, in turn, takes away dynamic range from the device in operation and adds a Johnson noise component to the input. To measure these resistances, place the device in TIA ADC mode in the dark and start by measuring the TIA ADC offset level with the photodiode inputs disconnected (Register 0x14, Bits[11:8] = 0 or Register 0x14, Bits[7:4] = 0). From this, subtract the value of TIA ADC mode with the darkened photodiode connected and convert the difference into a current. If the value is positive, and the ADC signal decreased, the resistance is to a voltage higher than 1.3 V, such as VDD. Current entering the TIA causes the output to drop. If the output difference is negative due to an increase of codes at the ADC, current is being pulled out of the TIA and there is a shunt resistance to a lower potential than 1.3 V, such as ground.

## Using the EXT\_IN 1 and EXT\_IN 2 Inputs with a Voltage Source

The ADPD188GG can be used for voltage inputs. Voltage inputs can be measured in normal mode or in TIA ADC mode. If these inputs are not a result of stimulation from the LED driver, TIA ADC mode is preferred. To understand the conversion gain from a voltage through a series resistor, RS, the current can be determined by following the schematic in Figure 34.

Figure 34. ADPD188GG Used for Voltage Inputs

<!-- image -->

Input Current = ( VIN -TIA\_VREF )/( RS + R\_IN )

Values for R\_IN are listed in Table 2. R\_IN is not needed for photodiode or other current inputs because the current of these inputs are not a function of the input resistance. Conversion from input current in amps to ADC codes (LSBs) follows Table 19 in TIA ADC mode. Current conversion in normal mode is listed in Table 2. The offset level shown in Table 19 represents the expected code value with zero current input. The conversion gain in nA/LSB can be added onto this for nonzero input currents.

Table 19. Analog Specifications for TIA ADC Mode and Digital Integrate Mode

| Parameter            | Test Conditions/Comments                                                                                                                            |   Typ | Unit   |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| TIA ADC Offset Level | Floating input (Input current = 0A); Register 0x43 and Register 0x45 = 0xAE65; Register 0x42 and Register 0x44, Bit 7 = 1, Register 0x58, Bit 7 = 1 |       |        |
|                      | TIA_VREF = Register 0x42 and Register 0x44, Bits[5:4] = 0 (1.14 V)                                                                                  | 11400 | LSB    |
|                      | TIA_VREF = Register 0x42 and Register 0x44, Bits[5:4] = 1 (1.01 V)                                                                                  |  9700 | LSB    |
|                      | TIA_VREF = Register 0x42 and Register 0x44, Bits[5:4] = 2 (0.89 V)                                                                                  |  8100 | LSB    |
|                      | TIA_VREF =Register 0x42 andRegister 0x44, Bits[5:4] =3(1.27 V);recommendedforPDinputs                                                               | 13200 | LSB    |

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Parameter            | Test Conditions/Comments                                  |   Typ | Unit   |
|----------------------|-----------------------------------------------------------|-------|--------|
| TIA ADC Saturation 1 | Values expressed per channel, per sample; buffer gain = 1 |       |        |
| Levels               | 25 kΩ                                                     | 38.32 | μA     |
|                      | 50 kΩ                                                     | 19.16 | μA     |
|                      | 100 kΩ                                                    |  9.58 | μA     |
|                      | 200 kΩ                                                    |  4.79 | μA     |
| TIA ADC Resolution   | Values expressed per channel, per sample; buffer gain = 1 |       |        |
|                      | 25 kΩ                                                     |  2.92 | nA/LSB |
|                      | 50 kΩ                                                     |   1.5 | nA/LSB |
|                      | 100 kΩ                                                    |  0.73 | nA/LSB |
|                      | 200 kΩ                                                    |  0.37 | nA/LSB |

Table 20. Configuration Registers to Switch Between Normal Sample Mode and TIA ADC Mode

| Address   | Data Bits   | BitName          | Normal ModeValue   | TIAADC ModeValue   | Description                                                                                                                                                                       |
|-----------|-------------|------------------|--------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x42      | [15:10]     | SLOTA_AFE_MODE   | 0x07               | Not applicable     | In normal mode, this setting configures the integrator block for optimal operation. This setting is not important for TIA ADC mode.                                               |
| 0x42      | [9]         | SLOTA_BUF_GAIN   | 0x0                | 0x0                | 0: buffer gain = 1.0. 1: buffer gain = 0.7.                                                                                                                                       |
| 0x42      | [7]         | SLOTA_INT_AS_BUF | 0x0                | 0x1                | 0: normal integrator configuration. 1: convert integrator to buffer amplifierinTIAADCmode (required for 0x43 =0xAE65).                                                            |
| 0x43      | [15:0]      | SLOTA_AFE_CFG    | 0xADA5             | 0xAE65             | Time Slot A AFE connection. 0xAE65: bypasses the band-pass filter. 0xB065: can also be used in TIA ADC mode. This setting bypasses the BPF and the integrator.                    |
| 0x44      | [15:10      | SLOTB_AFE_MODE   | 0x07               | Not applicable     | In normal mode, this setting configures the integrator block for optimal operation. This setting is not important for TIA ADC mode.                                               |
| 0x44      | [9]         | SLOTB_BUF_GAIN   | 0x0                | 0x0                | 0: buffer gain = 1.0. 1: buffer gain = 0.7.                                                                                                                                       |
| 0x44      | [7]         | SLOTB_INT_AS_BUF | 0x0                | 0x1                | 0: normal integrator configuration. 1: convert integrator to buffer amplifier (required for0x45= 0xAE65).                                                                         |
| 0x45      | [15:0]      | SLOTB_AFE_CFG    | 0xADA5             | 0xAE65             | Time Slot B AFE connection. 0xAE65: bypasses the band-pass filter. 0xB065: can also be used in TIA ADC mode. This setting bypasses the band-pass filter (BPF) and the integrator. |
| 0x58      | [7]         | ENA_INT_AS_BUF   | 0x0                | 0x1                | Enables the ability to configure the integrator as a buffer in TIA ADC mode                                                                                                       |

## PULSE CONNECT MODE

In pulse connect mode, the photodiode input connections are pulsed according to the timing set up in the LED pulse timing registers. In this mode, if the LED pulse timing is set up to provide a 2 µs LED pulse, the device pulses the connection to the photodiode input for 2 µs instead of providing a 2 µs LED pulse. This mode is an alternate to TIA ADC mode, allowing the entire signal path, including the band-pass filter and integrator, to be used to measure ambient light as well as other types of measurements with different types of sensors (for example, ECG).

To enable pulse connect mode, the device is configured identically to normal mode, except that Register 0x14, Bits[3:2] = 0 for Time Slot B, and Register 0x14, Bits[1:0] = 0 for Time Slot A.

## SYNCHRONOUS ECG AND PPG MEASUREMENT USING TIA ADC MODE

In wearable devices developed for monitoring the health care of patients, it is often necessary to have synchronized measurements of biomedical signals. For example, a synchronous measurement of patient ECG and PPG can be used to determine the pulse wave transit time (PWTT), which can then be used to estimate blood pressure.

The circuit shown in Figure 36 shows a synchronous ECG and PPG measurement using the AD8233 and the ADPD188GG. The AD8233 implements a two-pole, high-pass filter with a cutoff frequency at 0.3 Hz, and a two-pole, low-pass filter with a cutoff frequency of 37 Hz. The output of the AD8233 is fed to the EXT\_IN1 current input of the ADPD188GG through a 200 kΩ resistor to convert the voltage output of the AD8233 into a current.

The ADPD188GG is configured to alternately measure the photodiode signal and the ECG signal from the AD8233 on consecutive time slots to provide fully synchronized PPG and ECG measurements. Data can be read out of the on-chip FIFO or straight from data registers. The ADPD188GG channel used to process the ECG signal is set up in TIA ADC mode and the input bias voltage must be set to the 0.90 V setting using Bits[5:4] of Register 0x42 if the ECG signal is on Time Slot A, or Register 0x44 on Time Slot B. The TIA gain setting can be set to optimize the dynamic range of the signal path. The channel used to process the PPG signal is configured in its normal operating mode. Figure 35 shows a plot of a synchronized ECG and PPG measurement using the AD8233 with the ADPD188GG.

Figure 35. Plot of Synchronized ECG and PPG Waveforms

<!-- image -->

Figure 36. Synchronized PPG and ECG Measurement Using the ADPD188GG with the AD8233

<!-- image -->

## Data Sheet

## FLOAT MODE

The ADPD188GG has a unique operating mode, float mode, that allows excellent SNR at low power in low light situations. In float mode, the photodiode is first preconditioned to a known state and then the photodiode anode is disconnected from the receive path of the ADPD188GG for a preset amount of float time. During the float time, light falls on the photodiode, either from ambient light, pulsed LED light, or a combination of the two depending on the operating mode. Charge from the sensor is stored directly on the capacitance of the sensor. At the end of the float time, the photodiode switches back into the receive path of the ADPD188GG and an inrush of the accumulated charge occurs, which is subsequently integrated by the integrator of the ADPD188GG, allowing the maximum amount of charge to be processed per pulse with the minimum amount of noise added by the signal path. The charge is integrated externally on the capacitance of the photodiode for as long as it takes to acquire maximum charge, independent of the amplifiers of the signal path, which adds noise to the signal.

Amplifier and ADC noise values are constant for a given measurement. For optimal SNR, it is desirable to have a greater amount of signal (charge) per measurement. In normal mode, because the pulse time is fixed, the charge per measurement can be increased only by increasing the LED drive current. For high light conditions, this is sufficient. In low light conditions, however, there is a limit to the available current. In addition, high current pulses can cause ground noise in some systems. Green LEDs have lower efficiency at high currents, and many battery designs do not deliver high current pulses as efficiently. Float mode allows the user the flexibility to increase the amount of charge per measurement by either increasing the LED drive current or by increasing the float time. This flexibility is especially useful in low current transfer ratio (CTR) conditions, for example, 10 nA/mA, where normal mode requires multiple pulses to achieve an acceptable level of SNR.

In float mode, the signal path bypasses the BPF and uses only the TIA and integrator. In normal mode, the shape of the pulse is known (typically either 2 µs or 3 µs) and is consistent across devices and conditions. The shape of the signal coming through the BPF is also predictable, which allows a user to align the integrator timing with the zero crossing of the filtered signal. In float mode, the shape of the signal produced by the charge dump can differ across devices and conditions. A filtered signal cannot be reliably aligned; therefore, the BPF cannot be used. In float mode, the entire charge dump is integrated in the negative cycle of the integrator and the positive cycle cancels any offsets.

## Float Mode Measurement Cycle

Figure 37 shows the float mode measurement cycle timing diagram, and the following details the points shown:

- The precondition period is shown prior to Point A. The photodiode is connected to the TIA, and the photocurrent flows into the TIA. The photodiode anode is held at 0.9 V (Register 0x42 and Register 0x44, Bits[5:4] = 0x2 sets TIA\_ VREF = 0.9 V). The photodiode is reverse biased to a maximum reverse bias of ~250 mV by setting Register 0x54, Bit 7 = 1 and Register 0x54, Bits[9:8] = 0x2 (for Time Slot A). At this point, the output of the TIA (TIA\_OUT) = TIA\_VREF - (IPD × RF), where IPD is the current flowing from the PD into the ADPD1080/ADPD1081 input, and the integrator is off.
- At Point A, the photodiode is disconnected from the receive path. Light continues to fall on the photodiode producing a charge that accumulates directly on the photodiode capacitance. As the charge accumulates, the voltage at the floating photo-diode anode rises. The TIA is disconnected from the input to the ADPD188GG so that no current flows through the TIA, and the TIA output is at TIA\_VREF. Just prior to Point B, the integrator resets to 0. In the Float Mode for Synchronous LED Measurements section, the LED pulses during the time period between Point A and Point D. Float times of &lt;4 µs are not allowed.
- At Point B, the integrator begins its positive integration phase. Small dc offsets between the TIA output and the integrator reference causes the integrator output to ramp up for positive offsets or ramp down for negative offsets. The photodiode continues to accumulate charge during this period.
- At Point C, the integrator begins its negative integration phase. This reversal in polarity begins to cancel any signal caused by offsets. This offset cancellation continues through Point F, where all offsets are cancelled completely.
- At Point D, the photodiode switches into the receive path where all the charge that has accumulated on the photodiode capacitance during the float time is dumped into the TIA. The typical charge dump time is less than 2 µs. As the current flows through the TIA, the output of the TIA responds with a large negative signal. Because the integrator is in the negative integration phase at this point, the output of the integrator rises as the input current to the device integrates back to total charge. Between Point D and Point E, any light incident on the photodiode produces additional photocurrent, which is immediately integrated by the integrator as charge.
- At Point E, the TIA disconnects from the receive path and the TIA output returns to TIA\_VREF. Between Point E and Point F, the integrator completes the negative integration phase and cancellation of the offsets.
- At Point F, the integrator output is held until sampled by the ADC.

## Float Mode Limitations

When using float mode, the limitations of the mode must be well understood. For example, there is a finite amount of charge that can accumulate on the capacitance of the photodiode, and there is also a maximum amount of charge that can be integrated by the integrator. Based on an initial reverse bias of 250 mV on the photodiode and assuming that the photodiode begins to become nonlinear at ~200 mV of forward bias, there is ~450 mV of headroom for the anode voltage to increase from its starting point at the beginning of the float time before the charge ceases to accumulate in a linear fashion. It is desirable to operate only in the linear region of the photodiode (see Figure 38). To verify that float mode is operating in the linear region of the diode, the user can perform a simple check. Record data at a desired float time, and then record data at half the float time. It is recommended that the ratio of the two received signals be 2:1. If this ratio does not hold true, the diode is likely beginning to forward bias at the longer float time and becomes nonlinear.

Figure 38. Transfer Function of Integrated Charge on the Photodiode vs. Float Time

<!-- image -->

The maximum amount of charge that can be stored on the photodiode capacitance and remain in the linear operating region of the sensor can be estimated by

Q = CV

where:

Q is the integrated charge.

C is the capacitance of the photodiode.

Figure 37. Float Mode Measurement Cycle Timing Diagram

<!-- image -->

V is the amount of voltage change across the photodiode before the photodiode becomes nonlinear.

For a typical discrete optical design using a 7 mm 2 photodiode with 70 pF capacitance and 450 mV of headroom, the maximum amount of charge that can be stored on the photodiode capacitance is 31.5 pC.

In addition, consider the maximum amount of charge the integrator of the ADPD188GG can integrate. The integrator can integrate up to 7.6 pC. When this charge is referred back to the input, consider the TIA gain. When the TIA gain is at 200 kΩ, the input referred charge is at a 1:1 ratio to the integrated charge on the integrator. For 100 kΩ gain, it is 2:1; for 50 kΩ gain, it is 4:1; and for 25 kΩ gain, it is 8:1. For the previous example using a photodiode with 70 pF capacitance, use 50 kΩ TIA gain and set the float timing such that, for a single pulse, the output of the ADC is at 70% of full scale, which is a typical operating condition. Under these operating conditions, 5.3 pC integrates per pulse by the integrator for 21.2 pC of charge accumulated on the photodiode capacitance. For small CTR, however, it can take a long time to accumulate 21.2 pC of charge on the photodiode capacitance, in which case, use higher TIA gains according to how much charge can be accumulated in a given amount of time. Ultimately, float times are determined by the type of measurement being made (ambient or pulsed LED), the photodiode capacitance, and the CTR of the system.

## Float Mode for Ambient Light Measurements

Float mode is used for ambient light measurements where the background light is sufficiently small. Use TIA ADC mode for ambient light measurements of higher intensities. Small amounts of light can be measured with adequate float times, allowing the incoming charge to accumulate to levels large enough to be measured above the noise floor of the system. The source of this light can be any combination of synchronous light (for example, from a pulsed LED) and asynchronous light (that is, background). If there is no system generated light source, the measurement is simply a measure of the background light.

## Data Sheet

Use a two pulse differential measurement technique to cancel out electrical drifts and offsets. Take two measurements, each of a different float time. The first float time is considerably shorter than the second pulse. After the two measurements are taken, Measurement 1 is subtracted from Measurement 2, which effectively cancels out any offset and drift common to both measurements. What is left is an ambient light measurement based on an amount of charge that is integrated over a time that is the difference of the first and second float times. For example, if Float Time 1 is 6 µs and Float Time 2 is

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

26 µs, the ambient light measurement is based on 20 µs of charge integrated on the photodiode capacitance with any offset and drift removed. In float mode for ambient light, the number of pulses must be set to two to cancel drifts and offsets because only the first pulse can be short. More than two pulses can be used; however, pulses two through n are always the same length. If drift cancellation is not required, any number of pulses can be used and added together. Figure 39 shows an example of float ambient mode timing, and Table 21 details the relevant registers that must be configured.

Figure 39. Example of Float Ambient Mode Timing

<!-- image -->

Table 21. Float Ambient Mode Registers

|                      |                                                                                                                       | Register                                                                                                                              | Register                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Group                | RegisterName                                                                                                          | Time SlotA                                                                                                                            | Time Slot B                                                                                                                           | Float ModeDescription                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Float Mode Operation | SLOTx_LED_SEL FLT_EN_x FLT_MATH12_x SLOTx_AFE_CFG SLOTx_TIA_VREF SLOTx_V_CATHODE REG54_VCAT_ENABLE                    | 0x14, Bits[1:0] 0x5E, Bits[14:13] 0x58, Bits[2:1] 0x43, Bits[15:0] 0x42, Bits[5:4] 0x54, Bits[9:8] 0x54, Bit 7                        | 0x14, Bits[3:2] 0x59, Bits[14:13] 0x58, Bits[6:5] 0x45, Bits[15:0] 0x44, Bits[5:4] 0x54, Bits[11:10] 0x54, Bit 7                      | Set to 0 to enable float mode. Set to 3 to enable float between connect pulses. Set to 2 to subtract first pulse and add second pulse. Set to 0xAE65 for TIA and integrator, bypass BPF. Set to 2 for TIA_VREF = 0.9 V. Set to 2 for 250 mVreverse bias on the photodiode at the precondition. Setto1to override Register 0x3C cathode voltage settings.                                                                                                                                                                                                                             |
| Float Mode Timing    | FLT_PRECON_x SLOTx_PERIOD SLOTx_PERIOD SLOTx_LED_WIDTH SLOTx_LED_OFFSET SLOTx_AFE_WIDTH SLOTx_AFE_OFFSET SLOTx_PULSES | 0x5E, Bits[12:8] 0x31, Bits[7:0] 0x37, Bits[1:0] 0x30, Bits[12:8] 0x30, Bits[7:0] 0x39, Bits[15:11] 0x39, Bits[10:0] 0x31, Bits[15:8] | 0x59, Bits[12:8] 0x36, Bits[7:0] 0x37, Bits[9:8] 0x35, Bits[12:8] 0x35, Bits[7:0] 0x3B, Bits[15:11] 0x3B, Bits[10:0] 0x36, Bits[15:8] | Precondition time (to start of Float 1 time). 8 LSBs of float period in µs; Float2time= SLOTx_PERIOD 2 MSBs of float period. Connect time in µs; this is the amount of time given to dump the accumulated charge from the photodiode capacitance; typically, this is set to 2µs. Time to first charge dump; Float 1 time = (SLOTx_LED_OFFSET + SLOTx_LED_WIDTH) - FLT_PRECONx. Integration time in µs; set to FLT_CONNx + 1. Integrator start time in 31.25 ns increments; set to (SLOTx_LED_OFFSETx - SLOTx_AFE_WIDTH - 9.25) µs. Number of pulses; set to 2for float ambient mode. |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## Float Mode for Synchronous LED Measurements

In float LED mode, photocurrent is generated from ambient light and pulsed LED light during the float time. Float LED mode is desirable in low signal conditions where the CTR is &lt;10 nA/mA. In addition, float mode is a good option in situations where the user wants to limit the LED drive current of the green LEDs in a heart rate measurement to keep the forward voltage drop of the green LED to a level that allows the elimination of a boost converter for the LED supply. For example, the LED current can be limited to 10 mA to ensure that the LED voltage drop is ~3 V so that it can operate directly from the battery without the need of a boost converter. Float mode accumulates the received charge during longer LED pulses without adding noise from the signal path, effectively yielding the highest SNR and/or photon attainable.

As with float ambient mode, multiple pulses cancel electrical offsets and drifts; however, in float LED mode, the ambient light must also be cancelled because only the reflected return from the LED pulses is desired. To achieve this, use an even number of equal length pulses. For every pair of pulses, the LED flashes in one of the pulses and does not flash in the other.

Table 22. Float LED Mode Registers

|                      |                                                                                                                                  | Register Address                                                                                                                                 | Register Address                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Group                | RegisterName                                                                                                                     | Time SlotA                                                                                                                                       | Time Slot B                                                                                                                                    | Float ModeDescription                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Float Mode Operation | SLOTx_LED_SEL FLT_EN_x FLT_MATH12_x FLT_MATH34_x SLOTx_AFE_CFG SLOTx_TIA_VREF SLOTx_V_CATHODE REG54_VCAT_ENABLE FLT_LED_SELECT_x | 0x14, Bits[1:0] 0x5E, Bits[14:13] 0x58, Bits[2:1] 0x58, Bits[9:8] 0x43, Bits[15:0] 0x42, Bits[5:4] 0x54, Bits[9:8] 0x54, Bit 7 0x3E, Bits[15:14] | 0x14, Bits[3:2] 0x59, Bits[14:13] 0x58, Bits[6:5] 0x58, Bits[11:10] 0x45, Bits[15:0] 0x44, Bits[5:4] 0x54, Bits[11:10] 0x54, Bit 7 0x3F[15:14] | Set to 0 to enable float mode. Set to 3 to enable float between connect pulses. Set to 2 to subtract first pulse and add second pulse. Set to 1 to add third pulse and subtract fourth pulse. Set to 0xAE65 for TIA + integrator, bypass BPF. Set to 2 for TIA_VREF = 0.9 V. Set to 2 for 250 mVreverse bias on the photodiode at the precondition. Setto1to override Register 0x3C cathode voltage settings. LED selection for float LED mode. 00 = no LED. 01 = LED1. 10 = LED2. |
| Float Mode Timing    | FLT_PRECON_x SLOTx_PERIOD                                                                                                        | 0x5E, Bits[12:8] 0x31, Bits[7:0]                                                                                                                 | 0x59, Bits[12:8] 0x36, Bits[7:0]                                                                                                               | 11 = LED3. Precondition time (to start of float 1 time). 8 LSBs of float period in µs. Float2time= SLOTx_PERIOD. Float 2 time is valid for every pulse subsequent to the first pulse. Float 1 time must be set equal to Float 2 time in float LED mode.                                                                                                                                                                                                                            |
|                      | SLOTx_PERIOD SLOTx_LED_WIDTH                                                                                                     | 0x37, Bits[1:0] 0x30, Bits[12:8]                                                                                                                 | 0x37, Bits[9:8] 0x35, Bits[12:8]                                                                                                               | 2 MSBs of float period. Connect time in µs, which is the amount of time given to dump the accumulated charge from the photodiode capacitance. Typically, it is set to 2µs.                                                                                                                                                                                                                                                                                                         |
|                      | SLOTx_LED_OFFSET                                                                                                                 | 0x30, Bits[7:0]                                                                                                                                  | 0x35, Bits[7:0]                                                                                                                                | Time to first charge dump. Float 1 time = (SLOTx_LED_OFFSET + SLOTx_LED_WIDTH) - FLT_PRECONx. Float 1 time must be equal to Float 2 time for float LED mode.                                                                                                                                                                                                                                                                                                                       |

The return from the LED + ambient + offset is present in one of the pulses. In the other, only the ambient light and offset is present. A subtraction of the two pulses is made that eliminates ambient light as well as any offset and drift. It is recommended to use groups of four pulses for measurement where the LED is flashed on Pulse 2 and Pulse 3. The accumulator adds Pulse 2 and Pulse 3 and then subtract Pulse 1 and Pulse 4. To gain additional SNR, use multiple groups of four pulses.

The settings of FLT\_LED\_FIRE\_x, Register 0x5A, Bits[15:8] determine if the LED fires in which pulse position. Which pulse positions are added or subtracted is configured in the FLT\_ MATH12x and FLT\_MATH34x bits of Register 0x58. These sequences are repeated in groups of four pulses. The value written to the FIFO or data registers is dependent on the total number of pulses per sample period. For example, if the device is setup for 32 pulses, the 4 pulse sequence, as defined in FLT\_ LED\_FIRE\_x and FLT\_MATHxxx, repeats eight times and a single register or FIFO write of the final value based on 32 pulses executes. Table 22 details the relevant registers for float LED mode.

## Data Sheet

|       |                                  | Register Address   | Register Address   | Float ModeDescription                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------|----------------------------------|--------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Group | RegisterName                     | Time SlotA         | Time Slot B        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       | SLOTx_AFE_WIDTH SLOTx_AFE_OFFSET | 0x39,Bits[15:11]   | 0x3B, Bits[15:11]  | Integration time in µs. set to FLT_CONN + 1. Integrator start time in 31.25 ns increments. Set to (SLOTx_LED_OFFSET - SLOTx_AFE_WIDTH - 9.25) µs. Number of pulses; must be set in multiples of 2, minimum 2. LED pulse width for float LED mode in µs. Time of first LED pulse in float LED mode. In any given sequence of four pulses, fire the LED in the selected position. Selections are active low (that is, fire if 0). For example, in a sequence of four pulses onTimeSlot Register 0x5A, Bit 12 is the first pulse, and Register 0x5A, Bit 15 is the fourth pulse. For a sequence of four pulses, the LED in the second and third pulses by writing 0x9 to Register 0x5A, Bits[15:12]. |
|       |                                  | 0x39, Bits[10:0]   | 0x3B, Bits[10:0]   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       | SLOTx_PULSES                     | 0x31, Bits[15:8]   | 0x36, Bits[15:8]   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       | FLT_LED_WIDTH_x                  | 0x3E, Bits[12:8]   | 0x3F, Bits[12:8]   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       | FLT_LED_OFFSET_x                 | 0x3E, Bits[7:0]    | 0x3F, Bits[7:0]    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       | FLT_LED_FIRE_x                   | 0x5A, Bits[11:8]   | 0x5A, Bits[15:12]  | LED B, fire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

A timing diagram for a four pulse float LED sequence for Time Slot B is shown in Figure 40. In this example, the device is set up for LED pulses of 12 µs that fall within a float period of 16 µs, 2 µs of which are used for dumping of the accumulated charge on the photodiode. The integration time is set to 3 µs, which is 1 µs more than the charge dump time to allow for timing margin when integrating the incoming charge. Note, there is a 9 µs offset built into the integration start time. Take this offset into account when setting the SLOTx\_AFE\_OFFSET value. As shown in Figure 40, the time of the first charge dump is set to 30 µs. SLOTx\_ AFE\_OFFSET is set to 0x238 (17.75 µs), taking into account the 3 µs integration time, the 9 µs offset, and an additional 250 ns for edge placement margin.

To calculate SLOTx\_AFE\_OFFSET, use the following equation:

## SLOTx\_AFE\_OFFSET = SLOTx\_LED\_OFFSET -SLOTx\_AFE\_WIDTH - 9.25 µs

Placement of the integration period is such that the negative phase of the integration is centered on the charge dump phase. The TIA is an inverting stage, therefore, placing the negative phase of the integration during the dumping of the charge from the photodiode causes the integrator to increase with the negative going output signal from the TIA.

The LED flashes in the second and third pulses of the four pulse sequence. Setting Register 0x58, Bits[6:5] = 2 and Register 0x58, Bits[11:10] = 1 forces the device to add the second and third pulses while subtracting the first and fourth pulses, effectively cancelling out the ambient light and electrical offsets and drift.

<!-- image -->

Figure 40. Example Timing Diagram of Four Pulse Float LED Mode Sequence

<!-- image -->

A comparison of float ambient mode vs. float LED mode is shown in Table 23 and Table 24.

## Table 23. Float Ambient Mode-Measure Ambient Light Level

|   Pulse | Float Time     | Integrated Charge                | Calculation    | Result                                                 |
|---------|----------------|----------------------------------|----------------|--------------------------------------------------------|
|       1 | Shorter        | Offset, Ambient 1 (shorter time) | Subtract       | Ambient Measurement =Ambient2-Ambient1(offset cancels) |
|       2 | Longer         | Offset, Ambient 1 (shorter time) | Add            |                                                        |
|       3 | Not applicable | Not applicable                   | Not applicable |                                                        |
|       4 | Not applicable | Not applicable                   | Not applicable |                                                        |

## Table 24. Float LED Mode-Measurement Synchronous Reflected Light from LED

|   Pulse | Float Time   | Integrated Charge      | Calculation   | Result                                                               |
|---------|--------------|------------------------|---------------|----------------------------------------------------------------------|
|       1 | Equal        | Offset + Ambient       | Subtract      | Sync LED response = reflected LED return (offset and ambient cancel) |
|       2 | Equal        | Offset + Ambient + LED | Add           |                                                                      |
|       3 | Equal        | Offset + Ambient + LED | Add           |                                                                      |
|       4 | Equal        | Offset + Ambient       | Subtract      |                                                                      |

16111-039

## Data Sheet

## Monitoring Ambient Light Levels in Float LED Mode

In real-world applications, it is common for the ambient light levels to change constantly. When using float LED mode, increasing amounts of ambient light can approach levels where it uses an unacceptable amount of the dynamic range of the charge that can stored on the photodiode capacitance. For this reason, it is required that the ambient light level is monitored so that configuration changes can be made when necessary, for example, float time, TIA gain, and operating mode. There are two ways to monitor ambient light levels. One way is to use TIA ADC mode in the alternate time slot and continuously monitor the ambient light level. The other way is to use a feature of the ADPD188GG where the ambient light level is automatically monitored in the background during float mode operation and is compared against a user-defined threshold. If the ambient light level exceeds this threshold by some userdefined number of times, a flag is set by the device that can be read by the user or can be output to a GPIO. Table 25 lists all the registers used to monitor the ambient light level while in float LED mode.

The user sets an ambient level threshold in the BG\_THRESH register, which is the threshold by which the ADC result of the subtract cycles in float LED mode are compared against. The subtract cycles in float LED mode are the positions in the pulse sequence in which the LED pulse is masked; therefore, it is the background level measurement. The ADC result is equal to the raw ADC output minus the contents of the ADC offset register (Register 0x18 to Register 0x1B and Register 0x1E to Register 0x21). In the BG\_COUNT register, the user sets a limit on the number of cycles that BG\_THRESH is exceeded by the ADC result before the BG\_STATUS bit is set for any particular channel. Every time the BG\_THRESH value is exceeded by the ADC result during a subtract cycle, an internal counter increments. Each channel has its own counter. When this count exceeds the limit set in the BG\_COUNT register, the BG\_STATUS bit is set for the channel. The user can periodically monitor the BG\_STATUS register to check for asserted bits. Alternatively, a GPIOx pin can be asserted if a BG\_STATUS flag is set. See Table 25 for the various logical combinations of BG\_STATUS flags and interrupts that can be brought out on a GPIOx.

Table 25. Registers for Monitoring the Ambient Light Level in Float LED Mode

|                        | Register          | Register        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Float ModeRegisterName | Time SlotA        | Time Slot B     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| BG_STATUS_x            | 0x04, Bits[3:0]   | 0x04, Bits[7:4] | Status of comparison between background light level and background threshold value (BG_THRESH). A1in any bit location means the threshold has been crossed BG_COUNT number of times. This register is cleared once it is read. Bit 0: Time Slot A, Channel 1 exceeded threshold count. Bit 1: Time Slot A, Channel 2 exceeded threshold count. Bit 2: Time Slot A, Channel 3 exceeded threshold count. Bit 3: Time Slot A, Channel 4 exceeded threshold count. Bit 4: Time Slot B, Channel 1 exceeded threshold count. Bit 5: Time Slot B, Channel 2 exceeded threshold count. Bit 6: Time Slot B, Channel 3 exceeded threshold count. Bit 7: Time Slot B, Channel 4 exceeded threshold count. |
| BG_THRESH_x            | 0x16, Bits[13:0]  | 0x1C[13:0]      | The background threshold that is compared against the ADC result during the subtract cycles during float mode. If the ADC result exceeds the value in this register, BG_COUNT is incremented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| BG_COUNT_x             | 0x16, Bits[15:14] | 0x1C[15:14]     | This is the number of times the ADC value exceeds the BG_THRESH_x value during the float mode subtract cycles before the BG_STATUS bit is set. 0x0: never set BG_STATUS. 0x1: set when BG_THRESH_x is exceeded 1 time. 0x02: set when BG_THRESH_x is exceeded 4 times. 0x03: set when BG_THRESH_x is exceeded 16 times.                                                                                                                                                                                                                                                                                                                                                                        |
| GPIO0_ALT_CFG          | 0x0B[4:0]         | 0x0B[4:0]       | GPIO0 asserts for the following conditions: 0x10: logical OR of BG_STATUS_x, Bits[3:0]. 0x1A: logical OR of BG_STATUS_x, Bits[7:4]. 0x1B: logical OR of BG_STATUS_x, Bits[7:0]. 0x1C: logical OR of BG_STATUS_x, Bits[7:0] and INT.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| GPIO1_ALT_CFG          | 0x0B[12:8]        | 0x0B[12:8]      | GPIO1 asserts for the following conditions: 0x10: logical OR of BG_STATUS_x, Bits[3:0]. 0x1A: logical OR of BG_STATUS_x, Bits[7:4]. 0x1B: logical OR of BG_STATUS_x, Bits[7:0]. 0x1C: logical OR of BG_STATUS_x, Bits[7:0] and INT.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## REGISTER LISTING

The recommended values are not shown. Only power-on reset values are shown in Table 26. The recommended values are largely dependent on use case.

## Table 26. Numeric Register Listing

| Hex.   |              |              | Bit 15                                                               | Bit 14                                                               | Bit 13 Bit 12                                                        | Bit                                                                  | 11 Bit 10                                                            | Bit 9                                                                | Bit 8                                                                |                                                                      |     |
|--------|--------------|--------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|-----|
| Addr.  | Name         | Bits         | Bit 7 Bit                                                            | 6                                                                    | Bit 5 Bit 4                                                          | Bit                                                                  | 3 Bit 2                                                              | Bit 1                                                                | Bit 0                                                                | Reset                                                                | R/W |
| 0x00   | Status       | [15:8] [7:0] | Reserved                                                             | FIFO_SAMPLES[7:0]                                                    | FIFO_SAMPLES[7:0]                                                    | FIFO_SAMPLES[7:0]                                                    | FIFO_SAMPLES[7:0]                                                    | FIFO_SAMPLES[7:0]                                                    | FIFO_SAMPLES[7:0]                                                    | 0x0000                                                               | R/W |
| 0x01   | INT_MASK     |              | SLOTB_INT                                                            | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   | SLOTA_INT Reserved                                                   |     |
|        |              | [15:8]       |                                                                      |                                                                      |                                                                      | Reserved                                                             |                                                                      |                                                                      | FIFO_INT_ MASK                                                       | 0x00FF                                                               | R/W |
|        |              | [7:0]        | Reserved SLOTB_INT_ MASK                                             | MASK                                                                 | SLOTA_INT_                                                           |                                                                      | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             |     |
| 0x02   | GPIO_        |              |                                                                      |                                                                      | Reserved                                                             |                                                                      |                                                                      |                                                                      |                                                                      |                                                                      |     |
|        | DRV          | [15:8] [7:0] | GPIO1_DRV GPIO1_POL                                                  | Reserved                                                             | GPIO1_DRV GPIO1_POL                                                  | GPIO1_DRV GPIO1_POL                                                  | GPIO0_ENA                                                            | GPIO0_DRV                                                            | GPIO0_POL                                                            | 0x0000                                                               | R/W |
| 0x04   | BG_          | [15:8]       | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | 0x0000                                                               | R/W |
|        | STATUS       | [7:0]        | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     | BG_STATUS_A[3:0]                                                     |     |
| 0x06   | FIFO_        | [15:8]       | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | Reserved FIFO_THRESH[5:0]                                            | 0x0000                                                               | R/W |
|        | THRESH       | [7:0]        | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             |     |
| 0x08   | DEVID        | [15:8]       | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | REV_NUM[7:0]                                                         | 0x0A16                                                               | R   |
|        |              | [7:0]        | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          | DEV_ID[7:0]                                                          |     |
| 0x09   | I2CS_ID      | [15:8]       | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | ADDRESS_WRITE_KEY[7:0]                                               | 0x00C8                                                               | R/W |
|        |              | [7:0]        | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          | SLAVE_ADDRESS[6:0] Reserved                                          |     |
| 0x0A   | CLK_         | [15:8]       | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | Reserved CLK_RATIO[11:8]                                             | 0x0000                                                               | R   |
|        | RATIO        | [7:0]        | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       | CLK_RATIO[7:0]                                                       |     |
| 0x0B   | GPIO_        | [15:8]       | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | Reserved GPIO1_ALT_CFG[4:0]                                          | 0x0000                                                               | R/W |
|        | CTRL         | [7:0]        | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   | GPIO0_ALT_CFG[4:0]                                                   |     |
| 0x0D   | SLAVE_       | [15:8]       | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | SLAVE_ADDRESS_KEY[15:8]                                              | 0x0000                                                               | R/W |
|        | ADDRESS_ KEY | [7:0]        | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               | SLAVE_ADDRESS_KEY[7:0]                                               |     |
| 0x0F   | SW_RESET     | [15:8]       | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | 0x0000                                                               | R/W |
|        |              | [7:0]        |                                                                      |                                                                      | Reserved                                                             |                                                                      |                                                                      |                                                                      | SW_RESET                                                             |                                                                      |     |
| 0x10   | Mode         | [15:8]       | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | 0x0000                                                               | R/W |
|        |              | [7:0]        | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   | Reserved Mode[1:0]                                                   |     |
| 0x11   | SLOT_EN      | [15:8]       | Reserved                                                             | RDOUT_ MODE                                                          | FIFO_OVRN_ PREVENT                                                   |                                                                      | Reserved SLOTB_ FIFO_                                                | Reserved SLOTB_ FIFO_                                                | Reserved SLOTB_ FIFO_                                                | 0x1000                                                               | R/W |
|        |              | [7:0]        | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN | SLOTB_FIFO_MODE[1:0] SLOTB_EN SLOTA_FIFO_MODE[2:0] Reserved SLOTA_EN |     |
| 0x12   | FSAMPLE      | [15:8]       |                                                                      |                                                                      |                                                                      | FSAMPLE[15:8]                                                        |                                                                      |                                                                      |                                                                      | 0x0028                                                               | R/W |
| 0x14   | PD_LED_      | [15:8]       |                                                                      |                                                                      |                                                                      |                                                                      |                                                                      |                                                                      |                                                                      |                                                                      |     |
|        |              |              | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | Reserved SLOTB_PD_SEL[3:0]                                           | 0x0541                                                               | R/W |
|        | SELECT       | [7:0]        | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              | SLOTA_PD_SEL[3:0] SLOTB_LED_SEL[1:0] SLOTA_LED_SEL[1:0]              |     |
| 0x15   | NUM_         | [15:8]       | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | Reserved SLOTB_NUM_AVG[2:0]                                          | 0x0600                                                               | R/W |
|        | AVG          | [7:0]        | Reserved                                                             |                                                                      | SLOTA_NUM_AVG[2:0]                                                   |                                                                      |                                                                      | Reserved                                                             |                                                                      |                                                                      |     |
| 0x16   | BG_          | [15:8]       | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | BG_COUNT_A[1:0] BG_THRESH_A[13:8]                                    | 0x0000                                                               | R/W |
|        | MEAS_A       | [7:0]        | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     | BG_THRESH_A[7:0]                                                     |     |
| 0x17   | INT_SEQ_A    | [15:8]       | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | Reserved                                                             | 0x0000                                                               | R/  |
|        |              | [7:0]        | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | INTEG_ORDER_A[3:0]                                                   | W   |
| 0x18   | SLOTA_ CH1_  | [15:8]       |                                                                      |                                                                      |                                                                      | SLOTA_CH1_OFFSET[15:8]                                               |                                                                      |                                                                      |                                                                      | 0x2000                                                               | R/W |
|        | OFFSET       | [7:0]        | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | SLOTA_CH1_OFFSET[7:0]                                                | R/W |
| 0x19   | SLOTA_       | [15:8]       | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | SLOTA_CH2_OFFSET[15:8]                                               | 0x2000                                                               |     |
|        | CH2_ OFFSET  | [7:0]        |                                                                      |                                                                      |                                                                      | SLOTA_CH2_OFFSET[7:0]                                                |                                                                      |                                                                      |                                                                      |                                                                      |     |
| 0x1A   | SLOTA_ CH3_  | [15:8]       | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | SLOTA_CH3_OFFSET[15:8]                                               | 0x2000                                                               | R/W |
|        | OFFSET       | [7:0]        | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                | SLOTA_CH3_OFFSET[7:0]                                                |     |
| 0x1B   | SLOTA_       | [15:8]       | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | SLOTA_CH4_OFFSET[15:8]                                               | 0x2000                                                               | R/W |
|        | CH4_ OFFSET  | [7:0]        | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                | SLOTA_CH4_OFFSET[7:0]                                                |     |
| 0x1C   | BG_MEAS_B    | [15:8        | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | BG_COUNT_B[1:0] BG_THRESH_B[13:8]                                    | 0x0000                                                               | R/W |
|        |              |              | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     | BG_THRESH_B[7:0]                                                     |     |

Data Sheet

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Hex.      |                          |                     | Bit 15                                                                         | Bit 14                                                                         | Bit 13 Bit                                                                     | 12                                                                             | Bit 11                                                                         | Bit 10                                                                         | Bit 9                                                                          | Bit 8                                                                          |               |         |
|-----------|--------------------------|---------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|---------------|---------|
| Addr.     | Name                     | Bits                | Bit 7                                                                          | Bit 6                                                                          | Bit 5 Bit                                                                      | 4 Bit 3                                                                        | Bit 2                                                                          | Bit 1                                                                          | Bit                                                                            | 0                                                                              | Reset         | R/W     |
| 0x1D      | INT_SEQ_B                | [15:8]              | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | 0x0000        | R/      |
|           |                          | [7:0]               | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | Reserved                                                                       | INTEG_ORDER_B[3:0]                                                             | Reserved                                                                       | Reserved                                                                       |               | W       |
| 0x1E      | SLOTB_CH1_               | [15:8]              | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | SLOTB_CH1_OFFSET[15:8]                                                         | 0x2000        | R/W     |
|           | OFFSET                   | [7:0]               | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          | SLOTB_CH1_OFFSET[7:0]                                                          |               |         |
| 0x1F      | SLOTB_CH2_ OFFSET        | [15:8]              | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | SLOTB_CH2_OFFSET[15:8]                                                         | 0x2000        | R/W     |
| 0x20      |                          | [7:0]               | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          | SLOTB_CH2_OFFSET[7:0]                                                          |               |         |
|           | SLOTB_CH3_               | [15:8]              | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | SLOTB_CH3_OFFSET[15:8]                                                         | 0x2000        | R/W     |
|           | OFFSET                   | [7:0]               |                                                                                |                                                                                |                                                                                | SLOTB_CH3_OFFSET[7:0]                                                          |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x21 0x22 | SLOTB_CH4_ OFFSET ILED3_ | [15:8] [7:0] [15:8] | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | Reserved ILED3_SCALE Reserved                                                  | 0x2000 0x3000 | R/W R/W |
|           | COARSE                   | [7:0]               | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     | Reserved ILED3_SLEW[2:0] ILED3_COARSE[3:0]                                     |               |         |
| 0x23      | ILED1_                   | [15:8]              | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | Reserved ILED1_SCALE Reserved                                                  | 0x3000        | R/W     |
|           | COARSE                   | [7:0]               |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x24      | ILED2_                   | [15:8]              | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | Reserved ILED1_SLEW[2:0] ILED1_COARSE[3:0] Reserved ILED2_SCALE Reserved       | 0x3000        | R/W     |
|           | COARSE                   | [7:0]               | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     | Reserved ILED2_SLEW[2:0] ILED2_COARSE[3:0]                                     |               |         |
| 0x25      | ILED_FINE                | [15:8]              | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | ILED3_FINE[4:0] ILED2_FINE[4:2]                                                | 0x630C        | R/W     |
|           |                          | [7:0]               | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       | ILED2_FINE[1:0] Reserved ILED1_FINE[4:0]                                       |               |         |
| 0x30      | SLOTA_LED_               | [15:8]              | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | Reserved SLOTA_LED_WIDTH[4:0]                                                  | 0x0320        | R/W     |
|           | PULSE                    | [7:0]               | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          | SLOTA_LED_OFFSET[7:0]                                                          |               |         |
| 0x31      | SLOTA_                   | [15:8]              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | SLOTA_PULSES[7:0]                                                              | 0x0818        | R/W     |
|           | NUMPULSES                | [7:0]               |                                                                                |                                                                                |                                                                                | SLOTA_PERIOD[7:0]                                                              |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x34      | LED_                     | [15:8]              | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | Reserved SLOTB_ SLOTA_                                                         | 0x0000        | R/W     |
|           | DISABLE                  | [7:0]               | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                | LED_DIS LED_DIS                                                                |               |         |
| 0x35      | SLOTB_                   | [15:8]              | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved                                                                       | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved SLOTB_LED_WIDTH[4:0]                                                  | Reserved SLOTB_LED_WIDTH[4:0]                                                  | 0x0320        | R/W     |
|           | NUMPULSES                | [7:0]               |                                                                                |                                                                                |                                                                                | SLOTB_PERIOD[7:0]                                                              |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x36      | SLOTB_                   | [15:8]              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | SLOTB_PULSES[7:0]                                                              | 0x0818        | R/W     |
|           |                          |                     |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               | R/W     |
| 0x37      | ALT_PWR_                 | [15:8]              | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | CH34_DISABLE[15:13] CH2_DISABLE[12:10] SLOTB_PERIOD[9:8]                       | 0x0000        |         |
|           | DN                       | [7:0]               | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              | Reserved SLOTA_PERIOD[9:8] EXT_SYNC_STARTUP[15:8]                              |               |         |
| 0x38      | EXT_SYNC_ STARTUP        | [15:8] [7:0] [15:8] | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | SLOTA_AFE_WIDTH[4:0] SLOTA_AFE_OFFSET[10:8]                                    | 0x000 0x22FC  | R/W R/W |
| 0x39      | SLOTA_AFE_ WINDOW        |                     |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x3B      | SLOTB_ AFE_              | [7:0] [15:8]        |                                                                                |                                                                                | SLOTB_AFE_WIDTH[4:0]                                                           | SLOTA_AFE_OFFSET[7:0]                                                          |                                                                                |                                                                                | SLOTB_AFE_OFFSET[10:8]                                                         |                                                                                | 0x22FC        | R/W     |
|           | WINDOW                   | [7:0]               |                                                                                |                                                                                |                                                                                | SLOTB_AFE_OFFSET[7:0]                                                          |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x3C      | AFE_PWR_ CFG1            | [15:8]              | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | Reserved Reserved Reserved V_CATHODE AFE_                                      | POWER- DOWN[5]                                                                 | 0x3006        | R/W     |
|           |                          | [7:0]               | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    | AFE_POWERDOWN[4:0] Reserved                                                    |               |         |
| 0x3E      | SLOTA_                   | [15:8]              |                                                                                | FLT_LED_SELECT_A[1:0]                                                          | Reserved                                                                       |                                                                                |                                                                                | FLT_LED_WIDTH_A[4:0]                                                           |                                                                                |                                                                                | 0x0320        | R/W     |
|           | FLOAT_LED                | [7:0]               | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          | FLT_LED_OFFSET_A[7:0]                                                          |               |         |
| 0x3F      | SLOTB_                   | [15:8]              | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | FLT_LED_SELECT_B[1:0] Reserved FLT_LED_WIDTH_B[4:0]                            | 0x0320        | R/W     |
|           | FLOAT_LED                | [7:0]               | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          | FLT_LED_OFFSET_B[7:0]                                                          |               |         |
| 0x42      | SLOTA_ TIA_CFG           | [15:8]              |                                                                                |                                                                                | SLOTA_AFE_MODE[5:0]                                                            |                                                                                |                                                                                | SLOTA_                                                                         | BUF_GAIN                                                                       | Reserved                                                                       | 0x1C38        | R/W     |
|           |                          |                     |                                                                                | SLOTA_TIA_                                                                     | SLOTA_TIA_VREF[1:0]                                                            |                                                                                | (write 0x1)                                                                    |                                                                                | SLOTA_TIA_GAIN[1:0]                                                            | SLOTA_TIA_GAIN[1:0]                                                            |               |         |
|           |                          | [7:0] AS_BUF        | SLOTA_INT_                                                                     | IND_EN                                                                         |                                                                                |                                                                                | Reserved                                                                       |                                                                                |                                                                                |                                                                                |               |         |
| 0x43      | SLOTA_ AFE_CFG           | [15:8] [7:0]        | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | SLOTA_AFE_CFG[15:8]                                                            | 0xADA5        | R/W     |
|           |                          | [7:0]               |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               | R/W     |
|           | SLOTB_                   | [15:8]              | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | SLOTA_AFE_CFG[7:0] SLOTB_ Reserved                                             | 0x1C38        |         |
|           |                          |                     | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] | SLOTB_INT_ SLOTB_ SLOTB_TIA_VREF[1:0] Reserved (write 0x1) SLOTB_TIA_GAIN[1:0] |               |         |
| 0x44      | TIA_CFG                  |                     | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    | SLOTB_AFE_MODE[5:0] BUF_GAIN TIA_IND_EN SLOTB_AFE_CFG[15:8]                    |               |         |
|           |                          |                     | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      | AS_BUF SLOTB_AFE_CFG[7:0]                                                      |               |         |
| 0x45      | SLOTB_                   | [15:8]              |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                | 0xADA5        | R/W     |
|           | AFE_CFG                  | [7:0]               |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
| 0x4B      | SAMPLE_ CLK              | [15:8]              | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | CLK32K_                                                                        | 0x2612        | R/W     |
|           |                          | [7:0] CLK32K_EN     |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |                                                                                |               |         |
|           |                          |                     | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       | Reserved BYP Reserved CLK32K_ADJUST[5:0]                                       |               |         |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

## Data Sheet

| Hex.   |                                    |                           | Bit 15                                                                                                                      | Bit 14                                                                                                                      | Bit 13                                                                                                                      | Bit 12 Bit 10                                                                                                               | Bit 11                                                                                                                      | Bit 9                                                                                                                       | Bit 8                                                                                                                       |                                                                                         |     |
|--------|------------------------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-----|
| Addr.  | Name                               | Bits                      | Bit 7                                                                                                                       | Bit 6 Bit                                                                                                                   | Bit 5                                                                                                                       | Bit 4 2                                                                                                                     | 3 Bit                                                                                                                       | Bit 1                                                                                                                       | Bit 0                                                                                                                       | Reset                                                                                   | R/W |
| 0x4D   | CLK32M_ ADJUST                     | [15:8]                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | 0x0098                                                                                  | R/W |
|        |                                    | [7:0]                     | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                                                          | CLK32M_ADJUST[7:0]                                                                      | R/W |
| 0x4F   | EXT_SYNC_ SEL                      | [15:8] [7:0] Reserved     |                                                                                                                             | GPIO1_OE                                                                                                                    | GPIO1_IE                                                                                                                    | Reserved Reserved                                                                                                           | EXT_SYNC_SEL[1:0]                                                                                                           | GPIO0_IE                                                                                                                    | Reserved                                                                                                                    | 0x2090                                                                                  |     |
| 0x50   | CLK32M_ CAL_EN GPIO1_CTRL CAL_EN   | [15:8] [7:0] Reserved     |                                                                                                                             | Reserved                                                                                                                    | CLK32M_                                                                                                                     | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                | R/W |
| 0x54   | AFE_PWR_ CFG2                      | [15:8] [7:0] ENABLE       | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | Reserved SLEEP_V_CATHODE[1:0] SLOTB_V_CATHODE[1:0] SLOTA_V_CATHODE[1:0] REG54_ VCAT_ Reserved                               | 0x0020                                                                                  | R/W |
| 0x55   | TIA_INDEP_ GAIN Reserved           | [15:8]                    |                                                                                                                             |                                                                                                                             |                                                                                                                             | SLOTB_TIA_GAIN_4[1:0]                                                                                                       |                                                                                                                             | SLOTB_TIA_GAIN_3[1:0]                                                                                                       |                                                                                                                             | 0x0000                                                                                  | R/W |
|        | Math                               | [7:0]                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0]                                     | SLOTB_TIA_GAIN_2[1:0] SLOTA_TIA_GAIN_4[1:0] SLOTA_TIA_GAIN_3[1:0] SLOTA_TIA_GAIN_2[1:0] | R/W |
| 0x58   |                                    | [15:8] [7:0]              | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | Reserved FLT_MATH34_B[1:0] FLT_MATH34_A[1:0] ENA_INT_ AS_BUF FLT_MATH12_B[1:0] Reserved Reserved FLT_MATH12_A[1:0] Reserved | 0x0000                                                                                  | R/W |
| 0x59   | FLT_ CONFIG_B                      | [15:8] [7:0]              | Reserved                                                                                                                    | FLT_EN_B[1:0]                                                                                                               | FLT_EN_B[1:0]                                                                                                               | FLT_PRECON_B[4:0] Reserved                                                                                                  | FLT_PRECON_B[4:0] Reserved                                                                                                  | FLT_PRECON_B[4:0] Reserved                                                                                                  | FLT_PRECON_B[4:0] Reserved                                                                                                  | 0x0808                                                                                  |     |
| 0x5A   | FLT_ LED_FIRE                      | [15:8] [7:0]              |                                                                                                                             | FLT_LED_FIRE_B[3:0] Reserved                                                                                                | FLT_LED_FIRE_B[3:0] Reserved                                                                                                | (write 0x10)                                                                                                                | FLT_LED_FIRE_A[3:0]                                                                                                         | FLT_LED_FIRE_A[3:0]                                                                                                         | FLT_LED_FIRE_A[3:0]                                                                                                         | 0x0010                                                                                  | R/W |
| 0x5E   | FLT_ CONFIG_A FLT_EN_A[1:0] 0x5F   | [15:8] Reserved [7:0]     | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                                                    | Reserved                                                                                | R/W |
|        | DATA_ ACCESS_CTL                   | [15:8] [7:0]              | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | Reserved Reserved SLOTB_ DATA_ SLOTA_ DATA_ DIGITAL_ CLOCK_                                                                 | 0x0000                                                                                  | R/W |
| 0x60   | FIFO_ ACCESS 0x64 SLOTA_ PD1_16BIT | [15:8] [7:0] [15:8] [7:0] |                                                                                                                             | FIFO_DATA[15:8] FIFO_DATA[7:0] SLOTA_CH1_16BIT[15:8] SLOTA_CH1_16BIT[7:0]                                                   |                                                                                                                             | HOLD                                                                                                                        |                                                                                                                             | HOLD ENA                                                                                                                    |                                                                                                                             | 0x0000 0x0000                                                                           | R R |
| 0x65   | SLOTA_ PD2_16BIT                   | [15:8] [7:0]              |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             | 0x0000                                                                                  | R   |
| 0x66   | SLOTA_                             |                           | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                                                       | SLOTA_CH2_16BIT[15:8]                                                                   |     |
|        | PD3_16BIT                          | [15:8] [7:0]              | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | SLOTA_CH2_16BIT[7:0] SLOTA_CH3_16BIT[15:8]                                                                                  | 0x0000                                                                                  | R   |
| 0x67   | SLOTA_ PD4_16BIT                   | [15:8] [7:0]              | SLOTA_CH3_16BIT[7:0]                                                                                                        | SLOTA_CH4_16BIT[15:8] SLOTA_CH4_16BIT[7:0]                                                                                  | SLOTA_CH3_16BIT[7:0]                                                                                                        | SLOTA_CH3_16BIT[7:0]                                                                                                        | SLOTA_CH3_16BIT[7:0]                                                                                                        | SLOTA_CH3_16BIT[7:0]                                                                                                        | SLOTA_CH3_16BIT[7:0]                                                                                                        | 0x0000                                                                                  | R   |
| 0x68   | SLOTB_ PD1_16BIT                   | [15:8]                    |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |
| 0x69   | SLOTB_                             | [7:0] [15:8] [7:0]        | SLOTB_CH1_16BIT[15:8]                                                                                                       | SLOTB_CH1_16BIT[7:0]                                                                                                        | SLOTB_CH1_16BIT[15:8]                                                                                                       | SLOTB_CH1_16BIT[15:8]                                                                                                       | SLOTB_CH1_16BIT[15:8]                                                                                                       | SLOTB_CH1_16BIT[15:8]                                                                                                       | SLOTB_CH1_16BIT[15:8]                                                                                                       | 0x0000                                                                                  | R   |
| 0x6A   | PD2_16BIT SLOTB_                   | [15:8]                    | SLOTB_CH2_16BIT[15:8]                                                                                                       | SLOTB_CH2_16BIT[7:0]                                                                                                        | SLOTB_CH2_16BIT[15:8]                                                                                                       | SLOTB_CH2_16BIT[15:8]                                                                                                       | SLOTB_CH2_16BIT[15:8]                                                                                                       | SLOTB_CH2_16BIT[15:8]                                                                                                       | SLOTB_CH2_16BIT[15:8]                                                                                                       | 0x0000 0x0000                                                                           | R R |
| 0x6B   | PD3_16BIT SLOTB_ PD4_16BIT         | [7:0] [15:8] [7:0]        | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | SLOTB_CH3_16BIT[15:8] SLOTB_CH3_16BIT[7:0]                                                                                  | 0x0000                                                                                  | R   |
|        | 0x70 A_PD1_LOW                     | [15:8]                    | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                                                                  | SLOTB_CH4_16BIT[15:8] SLOTB_CH4_16BIT[7:0]                                              |     |
| 0x71   | A_PD2_LOW                          | [7:0] [15:8] [7:0]        | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | SLOTA_CH1_LOW[15:8] SLOTA_CH1_LOW[7:0]                                                                                      | 0x0000                                                                                  | R   |
| 0x72   | A_PD3_LOW                          | [15:8] [7:0]              | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | SLOTA_CH2_LOW[15:8] SLOTA_CH2_LOW[7:0]                                                                                      | 0x0000 0x0000                                                                           | R R |
| 0x73   | A_PD4_LOW                          | [15:8] [7:0]              | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | SLOTA_CH3_LOW[15:8] SLOTA_CH3_LOW[7:0] SLOTA_CH4_LOW[15:8]                                                                  | 0x0000                                                                                  | R   |
|        |                                    |                           | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                                                     | SLOTA_CH4_LOW[7:0] SLOTA_CH1_HIGH[15:8]                                                 |     |
| 0x74   |                                    | [15:8]                    |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             | 0x0000                                                                                  | R   |
|        | A_PD1_HIGH                         | [7:0]                     | SLOTA_CH1_HIGH[7:0] SLOTA_CH2_HIGH[15:8]                                                                                    |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             | 0x0000                                                                                  | R   |
| 0x75   | A_PD2_HIGH                         | [15:8] [7:0]              | SLOTA_CH2_HIGH[7:0]                                                                                                         |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |
|        |                                    |                           |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             | 0x0000                                                                                  | R   |
| 0x76   |                                    | [15:8] [7:0]              | SLOTA_CH3_HIGH[15:8]                                                                                                        |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |
|        |                                    | [15:8]                    | SLOTA_CH4_HIGH[15:8]                                                                                                        | SLOTA_CH3_HIGH[7:0]                                                                                                         |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         | R   |
| 0x77   |                                    |                           |                                                                                                                             |                                                                                                                             |                                                                                                                             | SLOTA_CH4_HIGH[7:0]                                                                                                         |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |
|        | A_PD4_HIGH                         |                           |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             | 0x0000                                                                                  |     |
|        | A_PD3_HIGH                         |                           |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |
|        |                                    | [7:0]                     |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                                                             |                                                                                         |     |

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Hex. Addr.   | Name       | Bits   | Bit 15 Bit 7   | Bit 14 Bit 6   | Bit 13 Bit 5   | Bit 12 Bit 4         | Bit 11 Bit 3         | Bit 10 Bit 2   | Bit 9 Bit 1   | Bit 8 Bit 0   |        |    |
|--------------|------------|--------|----------------|----------------|----------------|----------------------|----------------------|----------------|---------------|---------------|--------|----|
| 0x78         | B_PD1_LOW  | [15:8] |                |                |                | SLOTB_CH1_LOW[15:8]  | SLOTB_CH1_LOW[15:8]  |                |               |               | 0x0000 | R  |
| 0x78         | B_PD1_LOW  | [7:0]  |                |                |                | SLOTB_CH1_LOW[7:0]   | SLOTB_CH1_LOW[7:0]   |                |               |               | 0x0000 | R  |
| 0x79         | B_PD2_LOW  | [15:8] |                |                |                | SLOTB_CH2_LOW[15:8]  | SLOTB_CH2_LOW[15:8]  |                |               |               | 0x0000 | R  |
| 0x79         | B_PD2_LOW  | [7:0]  |                |                |                | SLOTB_CH2_LOW[7:0]   | SLOTB_CH2_LOW[7:0]   |                |               |               | 0x0000 | R  |
| 0x7A         | B_PD3_LOW  | [15:8] |                |                |                | SLOTB_CH3_LOW[15:8]  | SLOTB_CH3_LOW[15:8]  |                |               |               | 0x0000 | R  |
| 0x7A         | B_PD3_LOW  | [7:0]  |                |                |                | SLOTB_CH3_LOW[7:0]   | SLOTB_CH3_LOW[7:0]   |                |               |               | 0x0000 | R  |
| 0x7B         | B_PD4_LOW  | [15:8] |                |                |                | SLOTB_CH4_LOW[15:8]  | SLOTB_CH4_LOW[15:8]  |                |               |               | 0x0000 | R  |
| 0x7B         | B_PD4_LOW  | [7:0]  |                |                |                | SLOTB_CH4_LOW[7:0]   | SLOTB_CH4_LOW[7:0]   |                |               |               | 0x0000 | R  |
| 0x7C         | B_PD1_HIGH | [15:8] |                |                |                | SLOTB_CH1_HIGH[15:8] | SLOTB_CH1_HIGH[15:8] |                |               |               | 0x0000 | R  |
| 0x7C         | B_PD1_HIGH | [7:0]  |                |                |                | SLOTB_CH1_HIGH[7:0]  | SLOTB_CH1_HIGH[7:0]  |                |               |               | 0x0000 | R  |
| 0x7D         | B_PD2_HIGH | [15:8] |                |                |                | SLOTB_CH2_HIGH[15:8] | SLOTB_CH2_HIGH[15:8] |                |               |               | 0x0000 | R  |
| 0x7D         | B_PD2_HIGH | [7:0]  |                |                |                | SLOTB_CH2_HIGH[7:0]  | SLOTB_CH2_HIGH[7:0]  |                |               |               | 0x0000 | R  |
| 0x7E         | B_PD3_HIGH | [15:8] |                |                |                | SLOTB_CH3_HIGH[15:8] | SLOTB_CH3_HIGH[15:8] |                |               |               | 0x0000 | R  |
| 0x7E         | B_PD3_HIGH | [7:0]  |                |                |                | SLOTB_CH3_HIGH[7:0]  | SLOTB_CH3_HIGH[7:0]  |                |               |               | 0x0000 | R  |
| 0x7F         | B_PD4_HIGH | [15:8] |                |                |                | SLOTB_CH4_HIGH[15:8] | SLOTB_CH4_HIGH[15:8] |                |               |               | 0x0000 | R  |
| 0x7F         | B_PD4_HIGH | [7:0]  |                |                |                | SLOTB_CH4_HIGH[7:0]  | SLOTB_CH4_HIGH[7:0]  |                |               |               | 0x0000 | R  |

## LED CONTROL REGISTERS

## Table 27. LED Control Registers

| Address   | Data Bit   | Default Value   | Access   | Name          | Description                                                                                                                                                                                                                                                                                                                                                                       |
|-----------|------------|-----------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x14      | [15:12]    | 0x0             | R/W      | Reserved      | Write 0x0 to these bits for proper operation.                                                                                                                                                                                                                                                                                                                                     |
|           | [11:8]     | 0x5             | R/W      | SLOTB_PD_SEL  | PDxconnectionselection for Time Slot B.SeetheTime Slot Switch section for detailed descriptions.                                                                                                                                                                                                                                                                                  |
|           | [7:4]      | 0x4             | R/W      | SLOTA_PD_SEL  | PDxconnectionselection for Time SlotA.SeetheTime Slot Switch section for detailed descriptions.                                                                                                                                                                                                                                                                                   |
|           | [3:2]      | 0x0             | R/W      | SLOTB_LED_SEL | Time Slot B LED configuration. These bits determine which LED is associated with Time Slot B. 0x0: pulse PDx connection to AFE. Float mode and pulse connect mode enable. 0x1: LEDX1 pulses during Time Slot B. 0x2: LEDX2 pulses during Time Slot B. 0x3: LEDX3 pulses during Time Slot B.                                                                                       |
|           | [1:0]      | 0x1             | R/W      | SLOTA_LED_SEL | Time Slot A LED configuration. These bits determine which LED is associated with Time Slot A. 0x0: pulse PDx connection to AFE. Float mode and pulse connect mode enable. 0x1: LEDX1 pulses during Time Slot A. 0x2: LEDX2 pulses during Time Slot A. 0x3: LEDX3 pulses during Time Slot A.                                                                                       |
| 0x22      | [15:14]    | 0x0             | R/W      | Reserved      | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                        |
|           | 13         | 0x1             | R/W      | ILED3_SCALE   | LEDX3 current scale factor. 1: 100% strength. 0: 10% strength; sets the LEDX3 driver in low power mode. LEDX3 Current Scale = 0.1 + 0.9 × (Register 0x22, Bit 13).                                                                                                                                                                                                                |
|           | 12         | 0x1             | R/W      | Reserved      | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                        |
|           | [11:7]     | 0x0             | R/W      | Reserved      | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                        |
|           | [6:4]      | 0x0             | R/W      | ILED3_SLEW    | LEDX3 driver slew rate control. The slower the slew rate, the safer the performance in terms of reducing the risk of overvoltage of the LEDdriver. 0x0: the slowest slew rate. … 0x7: the fastest slew rate.                                                                                                                                                                      |
|           | [3:0] 1    | 0x0             | R/W      | ILED3_COARSE  | LEDX3 coarse current setting. Coarse current sink target value of LEDX3 in standard operation. 0x0: lowest coarse setting. … 0xF: highest coarse setting. LED3 PEAK = LED3 COARSE × LED3 FINE × LED3 SCALE where: LED3 PEAK is the LEDX3 peak target value (mA). LED3 COARSE = 44.5 + 17.8 × (Register 0x22, Bits[3:0]). LED3 FINE = 0.73 + 0.022 × (Register 0x25, Bits[15:11]). |
| 0x23      | [15:14]    | 0x0             | R/W      | Reserved      | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                        |
|           | 13         | 0x1             | R/W      | ILED1_SCALE   | LEDX1 current scale factor. 1: 100% strength. 0: 10% strength; sets the LEDX1 driver in low power mode. LEDX1 Current Scale = 0.1 + 0.9 × (Register 0x23, Bit 13).                                                                                                                                                                                                                |
|           | 12         | 0x1             | R/W      | Reserved      | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                        |
|           | [11:7]     | 0x0             | R/W      | Reserved      | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                        |

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------|------------|-----------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [6:4]      | 0x0             | R/W      | ILED1_SLEW   | LEDX1 driver slew rate control. The slower the slew rate, the safer the performance in terms of reducing the risk of overvoltage of the LEDdriver. 0: the slowest slew rate. … 7: the fastest slew rate.                                                                                                                                                                                                                    |
|           | [3:0] 1    | 0x0             | R/W      | ILED1_COARSE | LEDX1 coarse current setting. Coarse current sink target value of LEDX1 in standard operation. 0x0: lowest coarse setting. … 0xF: highest coarse setting. LED1 PEAK = LED1 COARSE × LED1 FINE × LED1 SCALE where: LED1 PEAK is the LEDX1 peak target value (mA). LED1 COARSE = 44.5 + 17.8 × (Register 0x23, Bits[3:0]). LED1 FINE = 0.73 + 0.022 × (Register 0x25, Bits[4:0]). LED1 = 0.1 + 0.9 × (Register 0x23, Bit 13). |
| 0x24      | [15:14]    | 0x0             | R/W      | Reserved     | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | 13         | 0x1             | R/W      | ILED2_SCALE  | LEDX2 current scale factor. 1: 100% strength. 0: 40% strength; sets the LEDX2 driver in low power mode. LED2 Current Scale = 0.1 + 0.9 × (Register 0x24, Bit 13)                                                                                                                                                                                                                                                            |
|           | 12         | 0x1             | R/W      | Reserved     | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | [11:7]     | 0x0             | R/W      | Reserved     | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | [6:4]      | 0x0             | R/W      | ILED2_SLEW   | LEDX2 driver slew rate control. The slower the slew rate, the safer the performance in terms of reducing the risk of overvoltage of the LEDdriver. 0: the slowest slew rate. … 7: the fastest slew rate.                                                                                                                                                                                                                    |
|           | [3:0] 1    | 0x0             | R/W      | ILED2_COARSE | LEDX2 coarse current setting. Coarse current sink target value of LEDX2 in standard operation. 0x0: lowest coarse setting. … 0xF: highest coarse setting. LED2 PEAK = LED2 COARSE × LED2 FINE × LED2 SCALE where: LED2 PEAK is the LEDX2 peak target value (mA). LED2 COARSE = 44.5 + 17.8 × (Register 0x24, Bits[3:0]). LED2 FINE = 0.73 + 0.022 × (Register 0x25, Bits[10:6]).                                            |
| 0x25 1    | [15:11]    | 0xC             | R/W      | ILED3_FINE   | LEDX3 fine adjust. Current adjust multiplier for LED3. LEDX3 fine adjust = 0.73 + 0.022 × (Register 0x25, Bits[15:11]). See Register 0x22, Bits[3:0], for the full LED3 formula.                                                                                                                                                                                                                                            |
|           | [10:6]     | 0xC             | R/W      | ILED2_FINE   | LEDX2 fine adjust. Current adjust multiplier for LED2. LEDX2 fine adjust = 0.73 + 0.022 × (Register 0x25, Bits[10:6]). See Register 0x24, Bits[3:0], for the full LED2 formula.                                                                                                                                                                                                                                             |
|           | 5          | 0x0             | R/W      | Reserved     | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | [4:0]      | 0xC             | R/W      | ILED1_FINE   | LEDX1 fine adjust. Current adjust multiplier for LED1. LEDX1 Fine Adjust = 0.73 + 0.022 × (Register 0x25, Bits[4:0]). See Register 0x23, Bits[3:0], for the full LED1 formula.                                                                                                                                                                                                                                              |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name             | Description                                                                                                                                                                                                                                                                                                                               |
|-----------|------------|-----------------|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x30      | [15:13]    | 0x0             | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                |
| 0x30      | [12:8]     | 0x3             | R/W      | SLOTA_LED_WIDTH  | LED pulse width (in 1 µs step) for Time Slot A.                                                                                                                                                                                                                                                                                           |
| 0x30      | [7:0]      | 0x20            | R/W      | SLOTA_LED_OFFSET | LED offset width (in 1 µs step) for Time Slot A.                                                                                                                                                                                                                                                                                          |
| 0x31      | [15:8]     | 0x08            | R/W      | SLOTA_PULSES     | LED Time Slot A pulse count. n A : number of LED pulses in Time Slot A.                                                                                                                                                                                                                                                                   |
| 0x31      | [7:0]      | 0x18            | R/W      | SLOTA_PERIOD     | 8 LSBs of LED Time Slot A pulse period (in 1 µs step).                                                                                                                                                                                                                                                                                    |
| 0x34      | [15:10]    | 0x00            | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                |
| 0x34      | 9          | 0x0             | R/W      | SLOTB_LED_DIS    | TimeSlot BLEDdisable. 1: disables the LEDassigned toTimeSlot B. Register 0x34 keeps the drivers active and prevents them from pulsing current to the LEDs. Disabling both LEDs via this register is often used to measure the dark level. Use Register 0x11 instead to enable or disable the actual time slot usage and not only the LED. |
| 0x34      | 8          | 0x0             | R/W      | SLOTA_LED_DIS    | Time Slot ALEDdisable. 1: disables the LEDassigned toTimeSlot A. Use Register 0x11 instead to enable or disable the actual time slot usage and not only the LED.                                                                                                                                                                          |
| 0x34      | [7:0]      | 0x00            | R/W      | Reserved         | Write 0x00.                                                                                                                                                                                                                                                                                                                               |
| 0x35      | [15:13]    | 0x0             | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                |
| 0x35      | [12:8]     | 0x3             |          | SLOTB_LED_WIDTH  | LED pulse width (in 1 µs step) for Time Slot B.                                                                                                                                                                                                                                                                                           |
| 0x35      | [7:0]      | 0x20            |          | SLOTB_LED_OFFSET | LED offset width (in 1 µs step) for Time Slot B.                                                                                                                                                                                                                                                                                          |
| 0x36      | [15:8]     | 0x08            | R/W      | SLOTB_PULSES     | LEDTimeSlot Bpulse count.n B : numberofLEDpulses in Time Slot B.                                                                                                                                                                                                                                                                          |
| 0x36      | [7:0]      | 0x18            | R/W      | SLOTB_PERIOD     | 8 LSBs of LED Time Slot B pulse period (in 1 µs step).                                                                                                                                                                                                                                                                                    |

## AFE CONFIGURATION REGISTERS

## Table 28. AFE Global Configuration Registers

| Address   | Data Bit   | Default Value   | Access   | Name         | Description                                                                                                                                                                                                     |
|-----------|------------|-----------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x37      | [15:13]    | 0x0             | R/W      | CH34_DISABLE | Power-down options for Channel 3 and Channel 4 only. Bit 13: power down Channel 3, Channel 4 TIA op amp. Bit 14: power down Channel 3, Channel 4 BPF op amp. Bit 15: powerdownChannel3,Channel4integratoropamp. |
|           | [12:10]    | 0x0             | R/W      | CH2_DISABLE  | Bit 10: power down Channel 2 TIA op amp. Bit 11: power down Channel 2 BPF op amp. Bit 12: power down Channel 2 integrator op amp.                                                                               |
|           | [9:8]      | 0x0             | R/W      | SLOTB_PERIOD | 8 MSBs of LED Time Slot B pulse period.                                                                                                                                                                         |
|           | [7:2]      | 0x00            | R/W      | Reserved     | Write 0x00                                                                                                                                                                                                      |
|           | [1:0]      | 0x0             | R/W      | SLOTA_PERIOD | 8 MSBs of LED Time Slot A pulse period.                                                                                                                                                                         |
| 0x3C      | [15:14]    | 0x0             | R/W      | Reserved     | Write 0x0.                                                                                                                                                                                                      |
|           | [13:11]    | 0x6             | R/W      | Reserved     | Write 0x6.                                                                                                                                                                                                      |
|           | 10         | 0x0             | R/W      | Reserved     | Reserved.                                                                                                                                                                                                       |
|           | 9          | 0x0             | R/W      | V_CATHODE    | 0x0: 1.3 V(identical to anodevoltage). 0x1: 1.8 V (reverse bias photodiode by 550 mV). This setting may add noise.                                                                                              |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name              | Description                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|------------|-----------------|----------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [8:3]      | 0x00            | R/W      | AFE_POWERDOWN     | AFE channels power-down select. 0x0: keeps all channels on. Bit 3: power down Channel 1 TIA op amp. Bit 4: power down Channel 1 BPF op amp. Bit 5: power down Channel 1 integrator op amp. Bit 6: power down Channel 2, Channel 3, and Channel 4 TIA op amp. Bit 7: power down Channel 2, Channel 3, and Channel 4 BPF op amp. Bit 8: power down Channel 2, Channel 3, and Channel 4 integrator op amp. |
|           | [2:0]      | 0x6             | R/W      | Reserved          | Write 0x6.                                                                                                                                                                                                                                                                                                                                                                                              |
| 0x54      | [15:14]    | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                              |
|           | [13:12]    | 0x0             | R/W      | SLEEP_V_CATHODE   | If Bit 7 = 1; this setting is applied to the cathode voltage while the device is in sleep mode. 0x0: V DD . 0x1:AFE VREF during idle, V DD during sleep. 0x2: floating. 0x3: 0.0 V.                                                                                                                                                                                                                     |
|           | [11:10]    | 0x0             | R/W      | SLOTB_V_CATHODE   | If Bit 7 = 1; this setting is applied to the cathode voltage while the device is in Time Slot B operation. The anode voltage is determined by Register 0x44, Bits[5:4]. 0x0: V DD (1.8 V). 0x1: equal to PD anode voltage. 0x2: sets a reverse PD bias of ~250 mV(recommended setting).                                                                                                                 |
|           | [9:8]      | 0x0             | R/W      | SLOTA_V_CATHODE   | If Bit 7 = 1; this setting is applied to the cathode voltage while the device is in Time Slot A operation. The anode voltage is determined by Register 0x42, Bits[5:4]. 0x0: V DD (1.8 V). 0x1: equal to PD anode voltage. 0x2: sets a reverse PD bias of ~250 mV(recommended setting).                                                                                                                 |
|           | 7          | 0x0             | R/W      | REG54_VCAT_ENABLE | 0: use the cathode voltage settings defined byRegister 0x3C, Bit 9. 1: override Register 0x3C, Bit 9 with cathode settings defined by Register 0x54, Bits[13:8].                                                                                                                                                                                                                                        |
|           | [6:0]      | 0x20            | R/W      | Reserved          | Reserved.                                                                                                                                                                                                                                                                                                                                                                                               |
| 0x55      | [15:12]    | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                              |
|           | [11:10]    | 0x0             | R/W      | SLOTB_TIA_GAIN_4  | TIA gain for Time Slot B, Channel 4 when Register 0x44, Bit 6 = 1. 0: 200 kΩ. 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ.                                                                                                                                                                                                                                                                                            |
|           | [9:8]      | 0x0             | R/W      | SLOTB_TIA_GAIN_3  | TIA gain for Time Slot B, Channel 3 when Register 0x44, Bit 6 = 1. 0: 200 kΩ 1: 100 kΩ. 2: 50 kΩ.                                                                                                                                                                                                                                                                                                       |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name             | Description                                                                                                 |
|-----------|------------|-----------------|----------|------------------|-------------------------------------------------------------------------------------------------------------|
|           | [7:6]      | 0x0             | R/W      | SLOTB_TIA_GAIN_2 | TIA gain for Time Slot B, Channel 2 when Register 0x44, Bit 6 = 1. 0: 200 kΩ 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |
|           | [5:4]      | 0x0             | R/W      | SLOTA_TIA_GAIN_4 | TIA gain for Time Slot A, Channel 4 when Register 0x42, Bit 6 = 1. 0: 200 kΩ 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |
|           | [3:2]      | 0x0             | R/W      | SLOTA_TIA_GAIN_3 | TIA gain for Time Slot A, Channel 3 when Register 0x42, Bit 6 = 1. 0: 200 kΩ 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |
|           | [1:0]      | 0x0             | R/W      | SLOTA_TIA_GAIN_2 | TIA gain for Time Slot A, Channel 2 when Register 0x42, Bit 6 = 1. 0: 200 kΩ 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |

## Table 29. AFE Configuration Registers, Time Slot A

| Address   | Data Bit   | Default Value   | Access   | Name             | Description                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------|------------|-----------------|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x17      | [15:4]     | 0x000           | R/W      | Reserved         | Write 0x000                                                                                                                                                                                                                                                                                                                                                                                         |
| 0x17      | [3:0]      | 0x0             | R/W      | INTEG_ORDER_A    | Integration sequence order for Time Slot A. Each bit corresponds to the polarity of the integration sequence of a single pulse in a four-pulse sequence. Bit 0 controls the integration sequence of Pulse 1, Bit 1 controls Pulse 2, Bit 2 controls Pulse 3, and Bit 3 controls Pulse 4. After four pulses, the sequence repeats. 0: normal integration sequence. 1: reversed integration sequence. |
| 0x39      | [15:11]    | 0x4             | R/W      | SLOTA_AFE_WIDTH  | AFE integration window width (in 1 µs step) for Time Slot A.                                                                                                                                                                                                                                                                                                                                        |
| 0x39      | [10:0]     | 0x2FC           | R/W      | SLOTA_AFE_OFFSET | AFE integration window offset for Time Slot A in 31.25 ns steps.                                                                                                                                                                                                                                                                                                                                    |
| 0x42      | [15:10]    | 0x07            | R/W      | SLOTA_AFE_MODE   | Set to 0x07.                                                                                                                                                                                                                                                                                                                                                                                        |
| 0x42      | 9          | 0x0             | R/W      | SLOTA_BUF_GAIN   | 0: integrator as buffer gain = 1. 1: integrator as buffer gain = 0.7.                                                                                                                                                                                                                                                                                                                               |
| 0x42      | 8          | 0x0             | R/W      | Reserved         | Set to 0.                                                                                                                                                                                                                                                                                                                                                                                           |
| 0x42      | 7          | 0x0             | R/W      | SLOTA_INT_AS_BUF | 0: normal integrator configuration. 1: converts integrator to buffer amplifier (used in TIA ADC mode only).                                                                                                                                                                                                                                                                                         |
| 0x42      | 6          | 0x0             | R/W      | SLOTA_TIA_IND_EN | Enable Time Slot A TIA gain individual settings. When it is enabled, the Channel 1 TIA gain is set via Register 0x42, Bits[1:0], and the Channel 2 through Channel 4 TIA gain is set via Register 0x55, Bits[5:0]. 0: disable TIA gain individual setting. 1: enable TIA gain individual setting.                                                                                                   |
| 0x42      | [5:4]      | 0x3             | R/W      | SLOTA_TIA_VREF   | Set V REF of the TIA for Time Slot A. 0: 1.14 V. 1: 1.01 V. 2: 0.90 V. 3: 1.27 V (default recommended).                                                                                                                                                                                                                                                                                             |

<!-- image -->

| Address   | Data Bit   | Default Value   | Access   | Name           | Description                                                                                                                                                                                                                                                                |
|-----------|------------|-----------------|----------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [3:2]      | 0x2             | R/W      | Reserved       | Reserved. Write 0x1.                                                                                                                                                                                                                                                       |
|           | [1:0]      | 0x0             | R/W      | SLOTA_TIA_GAIN | Transimpedance amplifier gain for Time Slot A. When SLOTA_TIA_IND_EN is enabled, this value is for Time Slot B, Channel 1 TIA gain. When SLOTA_TIA_IND_EN is disabled, it is for all four Time Slot A channel TIA gain settings. 0: 200 kΩ. 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |
| 0x43      | [15:0]     | 0xADA5          | R/W      | SLOTA_AFE_CFG  | AFE connection in Time Slot A. 0xADA5: analog full path mode (TIA → BPF → INT → ADC). 0xAE65: TIA ADC mode (must set Register 0x42, Bit 7 = 1 and Register 0x58, Bit 7 = 1). 0xB065: TIA ADC mode (if Register 0x42, Bit 7 = 0). Others: reserved.                         |

## Table 30. AFE Configuration Registers, Time Slot B

| Address   | Data Bit   | Default Value   | Access   | Name             | Description                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------|------------|-----------------|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x1D      | [15:4]     | 0x000           | R/W      | Reserved         | Write 0x000                                                                                                                                                                                                                                                                                                                                                                                        |
| 0x1D      | [3:0]      | 0x0             | R/W      | INTEG_ORDER_B    | Integration sequence order for Time Slot B. Each bit corresponds to the polarity of the integration sequence of a single pulse in a four-pulse sequence. Bit 0 controls the integration sequence of Pulse 1, Bit 1 controls Pulse 2, Bit 2 controls Pulse 3, and Bit 3 controls Pulse 4. After four pulses, the sequence repeats. 0: normal integration sequence. 1: reversed integration sequence |
| 0x3B      | [15:11]    | 0x04            | R/W      | SLOTB_AFE_WIDTH  | AFEintegration windowwidth(in 1µsstep) forTime Slot B.                                                                                                                                                                                                                                                                                                                                             |
| 0x3B      | [10:0]     | 0x17            | R/W      | SLOTB_AFE_OFFSET | AFE integration window offset for Time Slot B in 31.25 ns steps.                                                                                                                                                                                                                                                                                                                                   |
| 0x44      | [15:10]    | 0x07            | R/W      | SLOTB_AFE_MODE   | Set to 0x07.                                                                                                                                                                                                                                                                                                                                                                                       |
| 0x44      | 9          | 0x0             | R/W      | SLOTB_BUF_GAIN   | 0: integrator as buffer gain = 1.                                                                                                                                                                                                                                                                                                                                                                  |
| 0x44      |            |                 |          |                  | 1: integrator as buffer gain = 0.7.                                                                                                                                                                                                                                                                                                                                                                |
| 0x44      | 8          | 0x0             | R/W      | Reserved         | Set to 0.                                                                                                                                                                                                                                                                                                                                                                                          |
| 0x44      | 7          | 0x0             | R/W      | SLOTB_INT_AS_BUF | 0: normal integrator configuration. 1: convert integrator to buffer amplifier (used in TIA ADC mode only).                                                                                                                                                                                                                                                                                         |
| 0x44      | 6          | 0x0             | R/W      | SLOTB_TIA_IND_EN | Enable Time Slot B TIA gain individual settings. When it is enabled, the Channel 1 TIA gain is set via Register 0x44, Bits[1:0], and the Channel 2 through Channel 4 TIA gain is set via Register 0x55, Bits[11:6]. 0: disable TIA gain individual setting. 1: enable TIA gain individual setting.                                                                                                 |
| 0x44      | [5:4]      | 0x3             | R/W      | SLOTB_TIA_VREF   | Set VREF of the TIA for Time Slot B. 0: 1.14 V. 1: 1.01 V. 2: 0.90 V. 3: 1.27 V (default recommended).                                                                                                                                                                                                                                                                                             |
| 0x44      | [3:2]      | 0x2             | R/W      | Reserved         | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                                         |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name           | Description                                                                                                                                                                                                                                                             |
|-----------|------------|-----------------|----------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [1:0]      | 0x0             | R/W      | SLOTB_TIA_GAIN | Transimpedance amplifier gain for Time Slot B.WhenSLOTB_TIA_IND_ENis enabled, this value is for Time Slot B, Channel 1 TIA gain. When SLOTB_TIA_IND_EN is disabled, it is for all four Time Slot B channel TIA gain settings. 0: 200 kΩ. 1: 100 kΩ. 2: 50 kΩ. 3: 25 kΩ. |
| 0x45      | [15:0]     | 0xADA5          | R/W      | SLOTB_AFE_CFG  | AFE connection in Time Slot B. 0xADA5: analog full path mode (TIA → BPF → INT → ADC). 0xAE65: TIA ADC mode (must set Register 0x44, Bit 7 = 1 and Register 0x58, Bit 7 = 1). 0xB065: TIA ADC mode (if Register 0x44, Bit 7 = 0). Others: reserved.                      |

## FLOAT MODE REGISTERS

## Table 31. Float Mode Registers

| Address   | Data Bit   | Default Value   | Access   | Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------|------------|-----------------|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x04      | [15:8]     | 0x0             | R        | Reserved    | Not applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|           | [7:4]      | 0x0             | R        | BG_STATUS_B | Status of comparison between background light level and background threshold value for Time Slot B (BG_THRESH_B). A 1 in any bit location means the threshold has been crossed BG_COUNT_B number of times. This register is cleared once it is read. Bit 4: Time Slot B, Channel 1 exceeded threshold count. Bit 5: Time Slot B, Channel 2 exceeded threshold count. Bit 6: Time Slot B, Channel 3 exceeded threshold count. Bit 7: Time Slot B, Channel 4 exceeded threshold count. |
|           | [3:0]      | 0x0             | R        | BG_STATUS_A | Status of comparison between background light level and background threshold value for Time Slot A (BG_THRESH_A). A 1 in any bit location means the threshold has been crossed BG_COUNT_Anumberoftimes.Thisregister is cleared once it is read. Bit 0: Time Slot A, Channel 1 exceeded threshold count. Bit 1: Time Slot A, Channel 2 exceeded threshold count. Bit 2: Time Slot A, Channel 3 exceeded threshold count. Bit 3: Time Slot A, Channel 4 exceeded threshold count.      |
| 0x16      | [15:14]    | 0x0             | R/W      | BG_COUNT_A  | For Time Slot A, this is the number of times the ADC value exceeds the BG_THRESH_A value during the float mode subtract cycles before the BG_STATUS_A bit is set. 0: never set BG_STATUS_A. 1: set when BG_THRESH_A is exceeded 1 time. 2: set when BG_THRESH_A is exceeded 4 times. 3: set when BG_THRESH_A is exceeded 16 times.                                                                                                                                                   |
|           | [13:0]     | 0x0             | R/W      | BG_THRESH_A | The background threshold for Time Slot A that is compared against the ADC result during the subtract cycles during float mode. If the ADC result exceeds the value in this register, BG_COUNT_A is incremented.                                                                                                                                                                                                                                                                      |

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name             | Description                                                                                                                                                                                                                                                                                                                        |
|-----------|------------|-----------------|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x1C      | [15:14]    | 0x0             | R/W      | BG_COUNT_B       | For Time Slot B, this is the number of times the ADC value exceeds the BG_THRESH_B value during the float mode subtract cycles before the BG_STATUS_B bit is set. 0: never set BG_STATUS_B. 1: set when BG_THRESH_B is exceeded 1 time. 2: set when BG_THRESH_B is exceeded 4 times. 3: set when BG_THRESH_B is exceeded 16 times. |
| 0x1C      | [13:0]     | 0x0             | R/W      | BG_THRESH_B      | The background threshold for Time Slot B that is compared against the ADC result during the subtract cycles during float mode. If the ADC result exceeds the value in this register, BG_COUNT_B is incremented.                                                                                                                    |
| 0x3E      | [15:14]    | 0x0             | R/W      | FLT_LED_SELECT_A | TimeSlot ALEDselection for floatLEDmode. 0: noLEDselected. 1: LED1. 2: LED2. 3: LED3.                                                                                                                                                                                                                                              |
| 0x3E      | 13         | 0               | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                         |
| 0x3E      | [12:8]     | 0x03            | R/W      | FLT_LED_WIDTH_A  | Time Slot A LED pulse width for LED float mode in 1 µs steps.                                                                                                                                                                                                                                                                      |
| 0x3E      | [7:0]      | 0x20            | R/W      | FLT_LED_OFFSET_A | Time to first LED pulse in float mode for Time Slot A.                                                                                                                                                                                                                                                                             |
| 0x3F      | [15:14]    | 0x0             | R/W      | FLT_LED_SELECT_B | TimeSlot BLEDselection for floatLEDmode. 0: noLEDselected. 1: LED1. 2: LED2. 3: LED3.                                                                                                                                                                                                                                              |
| 0x3F      | 13         | 0               | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                         |
| 0x3F      | [12:8]     | 0x03            | R/W      | FLT_LED_WIDTH_B  | Time Slot B LED pulse width for LED float mode in 1 µs steps.                                                                                                                                                                                                                                                                      |
| 0x3F      | [7:0]      | 0x20            | R/W      | FLT_LED_OFFSET_B | Time to first LED pulse in Float mode for Time Slot A.                                                                                                                                                                                                                                                                             |
| 0x58      | [15:12]    | 0x0             | R/W      | Reserved         | Reserved.                                                                                                                                                                                                                                                                                                                          |
| 0x58      | [11:10]    | 0x0             | R/W      | FLT_MATH34_B     | Time Slot B control for adding and subtracting Sample 3 and Sample 4 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 15 and Sample 16 in a 16-pulse sequence). 00: add third and fourth. 01: add third and subtract fourth. 10: subtract third and add fourth. 11: subtract third and fourth.        |
| 0x58      | [9:8]      | 0x0             | R/W      | FLT_MATH34_A     | Time Slot A control for adding and subtracting Sample 3 and Sample 4 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 15 and Sample 16 in a 16-pulse sequence). 00: add third and fourth. 01: add third and subtract fourth. 10: subtract third and add fourth.                                       |
| 0x58      | 7          | 0x0             | R/W      | ENA_INT_AS_BUF   | Set to 1 to enable the configuration of the integrator as a buffer in TIA ADC mode.                                                                                                                                                                                                                                                |
| 0x58      | [6:5]      | 0x0             | R/W      | FLT_MATH12_B     | Time Slot B control for adding and subtracting Sample 1 and Sample 2 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 13 and Sample 14 in a 16-pulse sequence). 00: add first and second. 01: add first and subtract second. 10: subtract first and add second. 11: subtract first and second.        |
| 0x58      | [4:3]      | 0x0             | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                         |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name           | Description                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|------------|-----------------|----------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [2:1]      | 0x0             | R/W      | FLT_MATH12_A   | Time Slot A control for adding and subtracting Sample 1 and Sample 2 in a four-pulse sequence (or any multiple of four pulses, for example, Sample 13 and Sample 14 in a 16-pulse sequence). 00: add first and second. 01: add first and subtract second. 10: subtract first and add second. 11: subtract first and second.                                                             |
|           | 0          | 0x0             | R/W      | Reserved       | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                              |
| 0x59      | 15         | 0x0             | R/W      | Reserved       | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                              |
|           | [14:13]    | 0x0             | R/W      | FLT_EN_B       | 0: default setting, float disabled for Time Slot B. 1: reserved. 2: reserved. 3: enable float mode.                                                                                                                                                                                                                                                                                     |
|           | [12:8]     | 0x08            | R/W      | FLT_PRECON_B   | Float mode preconditioning time for Time Slot B. Time to start of first float time, which is typically 16 µs.                                                                                                                                                                                                                                                                           |
|           | [7:0]      | 0x08            | R/W      | Reserved       | Write 0x08.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x5A      | [15:12]    | 0x0             | R/W      | FLT_LED_FIRE_B | In any given sequence of four pulses, fire the LED in the selected position by writing a zero into that pulse position. Mask the LED pulse (that is, do not fire LED) by writing a 1 into that position. In a sequence of four pulses on Time Slot B, Register 0x5A, Bit 12, is the first pulse, Bit 13 is the second pulse, Bit 14 is the third pulse, and Bit 15 is the fourth pulse. |
|           | [11:8]     | 0x0             | R/W      | FLT_LED_FIRE_A | In any given sequence of four pulses, fire the LED in the selected position by writing a zero into that pulse position. Mask the LED pulse (that is, do not fire LED) by writing a 1 into that position. In a sequence of four pulses on Time Slot A, Register 0x5A, Bit 8, is the first pulse, Bit 9 is the second pulse, Bit 10 is the third pulse, and Bit 11 is the fourth pulse.   |
|           | [7:0]      | 0x10            | R/W      | Reserved       | Write 0x10.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x5E      | 15         | 0x0             | R/W      | Reserved       | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                              |
|           | [14:13]    | 0x0             | R/W      | FLT_EN_A       | 0: default setting, float disabled for Time Slot A. 1: reserved 2: reserved 3: enable float mode in Time Slot A.                                                                                                                                                                                                                                                                        |
|           | [12:8]     | 0x08            | R/W      | FLT_PRECON_A   | Float mode preconditioning time for Time Slot A. Time to start of first float time, which is typically 16 µs.                                                                                                                                                                                                                                                                           |
|           | [7:0]      | 0x08            | R/W      | Reserved       | Write 0x08.                                                                                                                                                                                                                                                                                                                                                                             |

## SYSTEM REGISTERS

Table 32. System Registers

| Address   | Data Bit   | Default Value   | Access   | Name           | Description                                                                                                                                                                                                                                                                                                          |
|-----------|------------|-----------------|----------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x00      | [15:8]     | 0x00            | R/W      | FIFO_SAMPLES   | FIFO status. Number of available bytes to be read from the FIFO. When comparing this to the FIFO length threshold (Register 0x06, Bits[13:8]), note that the FIFO status value is in bytes and the FIFO length threshold is in words, where one word = two bytes. Write 1toBit 15 to clear the contents of the FIFO. |
| 0x00      | 7          | 0x0             | R/W      | Reserved       | Write 0x1 to clear this bit to 0x0.                                                                                                                                                                                                                                                                                  |
| 0x00      | 6          | 0x0             | R/W      | SLOTB_INT      | Time Slot B interrupt. Describes the type of interrupt event. A 1 indicates an interrupt of a particular event type has occurred. Write a 1 to clear the corresponding interrupt. After clearing, the register goes to 0. Writing a 0 to this register has no effect.                                                |
| 0x00      | 5          | 0x0             | R/W      | SLOTA_INT      | Time Slot Ainterrupt. Describes the type of interrupt event.A1 indicates an interrupt of a particular event type has occurred. Write a 1 to clear the corresponding interrupt. After clearing, the register goes to 0. Writing a 0 to this register has no effect.                                                   |
| 0x00      | [4:0]      | 0x00            | R/W      | Reserved       | Write 0x1F to clear these bits to 0x00.                                                                                                                                                                                                                                                                              |
| 0x01      | [15:9]     | 0x00            | R/W      | Reserved       | Write 0x00.                                                                                                                                                                                                                                                                                                          |
| 0x01      | 8          | 0x1             | R/W      | FIFO_INT_MASK  | Sends an interrupt when the FIFO data length has exceeded the FIFO length threshold in Register 0x06, Bits[13:8]. A 0 enables the interrupt.                                                                                                                                                                         |
| 0x01      | 7          | 0x1             | R/W      | Reserved       | Write 0x1.                                                                                                                                                                                                                                                                                                           |
| 0x01      | 6          | 0x1             | R/W      | SLOTB_INT_MASK | Sends an interrupt on the Time Slot B sample. Write a 1 to disable the interrupt. Write a 0 to enable the interrupt.                                                                                                                                                                                                 |
| 0x01      | 5          | 0x1             | R/W      | SLOTA_INT_MASK | Sends an interrupt on the Time Slot A sample. Write a 1 to disable the interrupt. Write a 0 to enable the interrupt.                                                                                                                                                                                                 |
| 0x01      | [4:0]      | 0x1F            | R/W      | Reserved       | Write 0x1F.                                                                                                                                                                                                                                                                                                          |
| 0x02      | [15:10]    | 0x00            | R/W      | Reserved       | Write 0x0000.                                                                                                                                                                                                                                                                                                        |
| 0x02      | 9          | 0x0             | R/W      | GPIO1_DRV      | GPIO1 drive. 0: the GPIO1 pin is always driven. 1: the GPIO1 pin is driven when the interrupt is asserted; otherwise, it is left floating and requires a pull-up or pull-down resistor, depending on polarity (operates as open drain). Use this setting if multiple devices must share the GPIO1 pin.               |
| 0x02      | 8          | 0x0             | R/W      | GPIO1_POL      | GPIO1 polarity. 0: the GPIO1 pin is active high. 1: the GPIO1 pin is active low.                                                                                                                                                                                                                                     |
| 0x02      | [7:3]      | 0x00            | R/W      | Reserved       | Write 0x00.                                                                                                                                                                                                                                                                                                          |
| 0x02      | 2          | 0x0             | R/W      | GPIO0_ENA      | GPIO0 pin enable. 0: disable the GPIO0 pin. The GPIO0 pin floats, regardless of interrupt status. The status register (Address 0x00) remains active. 1: enable the GPIO0 pin.                                                                                                                                        |
| 0x02      | 1          | 0x0             | R/W      | GPIO0_DRV      | GPIO0 drive. 0: the GPIO0 pin is always driven. 1: the GPIO0 pin is driven when the interrupt is asserted; otherwise, it is left floating and requires a pull-up or pull-down resistor, depending on polarity (operates as open drain). Use this setting if multiple devices must share the GPIO0 pin.               |
| 0x02      | 0          | 0x0             | R/W      | GPIO0_POL      | GPIO0 polarity. 0: the GPIO0 pin is active high. 1: the GPIO0 pin is active low.                                                                                                                                                                                                                                     |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------|------------|-----------------|----------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x06      | [15:14]    | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x06      | [13:8]     | 0x00            | R/W      | FIFO_THRESH       | FIFO length threshold. Aninterrupt isgeneratedwhenthenumberof data-words in the FIFO exceeds the value in FIFO_THRESH. Theinterrupt pin automatically deasserts whenthenumberofdata-wordsavailable in the FIFO nolonger exceeds the value in FIFO_THRESH.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0x06      | [7:0]      | 0x00            | R/W      | Reserved          | Write 0x00.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0x08      | [15:8]     | 0x0A            | R        | REV_NUM           | Revision number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0x08      | [7:0]      | 0x16            | R        | DEV_ID            | Device ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x09      | [15:8]     | 0x00            | W        | ADDRESS_WRITE_KEY | Write0xADwhenwritingtoSLAVE_ADDRESS. Otherwise,donot access.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0x09      | [7:1]      | 0x64            | R/W      | SLAVE_ADDRESS     | I 2 C slave address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0x09      | 0          | 0x0             | R        | Reserved          | Do not access.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0x0A      | [15:12]    | 0x0             | R        | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x0A      | [11:0]     | 0x000           | R        | CLK_RATIO         | When the CLK32M_CAL_EN bit (Register 0x50, Bit 5) is set, the device calculates the number of 32 MHz clock cycles in two cycles of the 32 kHz clock. The result, nominally 2000 (0x07D0), is stored in the CLK_RATIO bits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x0B      | [15:13]    | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x0B      | [12:8]     | 0x00            | R/W      | GPIO1_ALT_CFG     | Alternate configuration for the GPIO1 pin. 0x00: GPIO1 is backward compatible to the ADPD103 PDSO pin functionality. 0x01: interrupt function providedonGPIO1, as defined in Register 0x01. 0x02: asserts at the start of the first time slot, deasserts at end of last time slot. 0x05: Time Slot A pulse output. 0x06: Time Slot B pulse output. 0x07: pulse output of both time slots. 0x0C: output data cycle occurred for Time Slot A. 0x0D: output data cycle occurred for Time Slot B. 0x0E: output data cycle occurred. 0x0F: toggles on every sample, which provides a signal at half the sampling rate. 0x10: output = 0. 0x11: output = 1. 0x13: 32 kHz oscillator output.                      |
| [7:5]     |            | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [4:0]     |            | 0x00            | R/W      | GPIO0_ALT_CFG     | Alternate configuration for the GPIO0 pin. 0x0: GPIO0is backward compatibletotheADPD103INTpin functionality. 0x1: interrupt function providedonGPIO0, as defined in Register 0x01. 0x2: asserts at the start of the first time slot, deasserts at end of last time slot. 0x5: Time Slot A pulse output. 0x6: Time Slot B pulse output. 0x7: pulse output of both time slots. 0xC: output data cycle occurred for Time Slot A. 0xD: output data cycle occurred for Time Slot B. 0xE: output data cycle occurred. 0xF: toggles on every sample, which provides a signal at half the sampling rate. 0x10: output = 0. 0x11: output = 1. 0x13: 32 kHz oscillator output. Remaining settings are not supported. |

## Data Sheet

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

<!-- image -->

| Address   | Data Bit   | Default Value   | Access   | Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|------------|-----------------|----------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x0D      | [15:0]     | 0x0000          | R/W      | SLAVE_ADDRESS_KEY | Enable changing the I 2 C address using Register 0x09. 0x04AD: enable address change always. 0x44AD: enable address change if GPIO0 is high. 0x84AD: enable address change if GPIO1 is high. 0xC4AD: enable address change if both GPIO0 and GPIO1 are high.                                                                                                                                                                                                                                                  |
| 0x0F      | [15:1]     | 0x0000          | R        | Reserved          | Write 0x0000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0x0F      | 0          | 0x0             | R/W      | SW_RESET          | Software reset. Write 0x1 to reset the device. This bit clears itself after a reset. For I 2 C communications, this command returns an acknowledge and the device subsequently returns to standby mode with all registers reset to the default state.                                                                                                                                                                                                                                                         |
| 0x10      | [15:2]     | 0x0000          | R/W      | Reserved          | Write 0x000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0x10      | [1:0]      | 0x0             | R/W      | Mode              | Determines the operating mode of the ADPD1080/ADPD1081. 0x0: standby. 0x1: program. 0x2: normal operation.                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0x11      | [15:14]    | 0x0             | R/W      | Reserved          | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x11      | 13         | 0x0             | R/W      | RDOUT_MODE        | Readback data mode for extended data registers. 0x0: block sum of Nsamples. 0x1: block average of Nsamples.                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0x11      | 12         | 0x1             | R/W      | FIFO_OVRN_PREVENT | 0x0: wrap around FIFO, overwriting old data with new. 0x1: new data if FIFO is not full (recommended setting).                                                                                                                                                                                                                                                                                                                                                                                                |
| 0x11      | [11:9]     | 0x0             | R/W      | Reserved          | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x11      | [8:6]      | 0x0             | R/W      | SLOTB_FIFO_MODE   | Time Slot B FIFO data format. 0: no data to FIFO. 1: 16-bit sum of all four channels. 2: 32-bit sum of all four channels. 4: four channels of 16-bit sample data for Time Slot B. 6: four channels of 32-bit extended sample data for Time Slot B. Others: reserved. The selected Time Slot B data is saved in the FIFO. Available only if Time Slot A has the sameaveraging factor, N(Register 0x15, Bits[10:8] =Bits[6:4]), or if Time Slot Ais not saving data to the FIFO (Register 0x11, Bits[4:2] = 0). |
| 0x11      | 5          | 0x0             | R/W      | SLOTB_EN          | Time Slot B enable. 1: enables Time                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0x11      | [4:2]      | 0x0             | R/W      | SLOTA_FIFO_MODE   | Slot B. Time Slot A FIFO data format. 0: no data to FIFO. 1: 16-bit sum of all four channels. 2: 32-bit sum of all four channels. 4: four channels of 16-bit sample data for Time Slot A. 6: four channels of 32-bit extended sample data for Time Slot A.                                                                                                                                                                                                                                                    |
| 0x11      | 1          | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0x11      | 0          | 0x0             | R/W      | SLOTA_EN          | Time Slot A enable. 1: enables Time Slot A.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0x38      | [15:0]     | 0x0000          | R/W      | EXT_SYNC_STARTUP  | Write0x4000whenEXT_SYNC_SELis01 or 10. Otherwise, write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0x4B      | [15:9]     | 0x13            | R/W      | Reserved          | Write 0x13.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0x4B      | 8          | 0x0             | R/W      | CLK32K_BYP        | Bypass internal 32 kHz oscillator. 0x0: normal operation. 0x1: provide external clock on the GPIO1 pin. The user must set Register 0x4F, Bits[6:5] = 01 to enable the GPIO1 pin as an input.                                                                                                                                                                                                                                                                                                                  |
| 0x4B      | 7          | 0x0             | R/W      | CLK32K_EN         | Sample clock power-up. Enables the data sample clock. 0x0: clock disabled. 0x1: normal operation.                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0x4B      | 6          | 0x0             | R/W      | Reserved          | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   | Data Bit   | Default Value   | Access   | Name            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------|------------|-----------------|----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | [5:0]      | 0x12            | R/W      | CLK32K_ADJUST   | Data sampling (32 kHz) clock frequency adjust. This register is used to calibrate the sample frequency of the device to achieve high precision on the data rate as defined in Register 0x12. Adjusts the sample master 32 kHz clock by 0.6 kHz per LSB. For a 100 Hz sample rate as defined in Register 0x12, 1 LSB of Register 0x4B, Bits[5:0], is 1.9 Hz. Note that a larger value produces a lower frequency. See the Clocks and Timing Calibration section for more information regarding clock adjustment. 00 0000: maximum frequency. 10 0010: typical center frequency. |
| 0x4D      | [15:8]     | 0x00            | R/W      | Reserved        | Write 0x00.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0x4D      | [7:0]      | 0x98            | R/W      | CLK32M_ADJUST   | Internal timing (32 MHz) clock frequency adjust. This register is used to calibrate the internal clock of the device to achieve precisely timed LED pulses. Adjusts the 32 MHz clock by 109 kHz per LSB. See the Clocks and Timing Calibration section for more information regarding clock adjustment. 0000 0000: minimum frequency. 1001 1000: default frequency. 1111 1111: maximum frequency.                                                                                                                                                                              |
| 0x4F      | [15:8]     | 0x20            | R/W      | Reserved        | Write 0x20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0x4F      | 7          | 0x1             | R/W      | Reserved        | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x4F      | 6          | 0x0             | R/W      | GPIO1_OE        | GPIO1 pin output enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0x4F      | 5          | 0x0             | R/W      | GPIO1_IE        | GPIO1 pin input enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0x4F      | 4          | 0x1             | R/W      | Reserved        | Write 0x1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x4F      | [3:2]      | 0x0             | R/W      | EXT_SYNC_SEL    | Sample sync select. 00: use the internal 32 kHz clock with FSAMPLE to select sample timings. 01: use the GPIO0 pin to trigger sample cycle. 10: use the GPIO1 pin to trigger sample cycle. 11: reserved.                                                                                                                                                                                                                                                                                                                                                                       |
| 0x4F      | 1          | 0x0             | R/W      | GPIO0_IE        | GPIO0 pin input enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0x4F      | 0          | 0x0             | R/W      | Reserved        | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x50      | [15:7]     | 0x000           | R/W      | Reserved        | Write 0x000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0x50      | 6          | 0x0             | R/W      | GPIO1_CTRL      | Controls the GPIO1 output when the GPIO1 output is enabled (GPIO1_OE =0x1). 0x0: GPIO1 output driven low. 0x1: GPIO1 output driven by the AFE power-down signal.                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0x50      | 5          | 0x0             | R/W      | CLK32M_CAL_EN   | As part of the 32 MHz clock calibration routine, write 1 to begin the clock ratio calculation. Read the result of this calculation from the CLK_RATIO bits in Register 0x0A. Reset this bit to 0 prior to reinitiating the calculation.                                                                                                                                                                                                                                                                                                                                        |
| 0x50      | [4:0]      | 0x00            | R/W      | Reserved        | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0x5F      | [15:3]     | 0x0000          | R/W      | Reserved        | Write 0x0000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0x5F      | 2          | 0x0             | R/W      | SLOTB_DATA_HOLD | Setting this bit prevents the update of the data registers corresponding toTimeSlot B. Set this bit to ensure that unread data registers are not updated, guaranteeing a contiguous set of data from all four photodiode channels. 1: hold data registers for Time Slot B.                                                                                                                                                                                                                                                                                                     |

<!-- image -->

## [ADPD188GG](http://www.analog.com/ADPD188GG?doc=ADPD188GG.pdf)

| Address   |   Data Bit | Default Value   | Access   | Name              | Description                                                                                                                                                                                                                                                                                               |
|-----------|------------|-----------------|----------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           |          1 | 0x0             | R/W      | SLOTA_DATA_HOLD   | Setting this bit prevents the update of the data registers corresponding toTimeSlot A. Set this bit to ensure that unread data registers are not updated, guaranteeing a contiguous set of data from all four photodiode channels. 1: hold data registers for Time Slot A. 0: allow data register update. |
|           |          0 | 0x0             | R/W      | DIGITAL_CLOCK_ENA | Set to 1 in order to enable the32MHzclockwhencalibrating the 32MHz clock. Always disable the 32 MHz clock following the calibration by resetting this bit to 0.                                                                                                                                           |

## ADC REGISTERS

Table 33. ADC Registers

| Address   | Data Bits   | Default Value   | Access   | Name             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|-------------|-----------------|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x12      | [15:0]      | 0x0028          | R/W      | FSAMPLE          | Sampling frequency: f SAMPLE = 32 kHz/(Register 0x12, Bits[15:0] × 4). For example, 100 Hz = 0x0050; 200 Hz = 0x0028.                                                                                                                                                                                                                                                                                                                                                                     |
| 0x15      | [15:11]     | 0x00            | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0x15      | [10:8]      | 0x6             | R/W      | SLOTB_NUM_AVG    | Sample sum/average for Time Slot B. Specifies the averaging factor, N B , whichisthenumberof consecutivesamplesthatissummedand averaged after the ADC.Register 0x70 to Register 0x7F hold the data sum. Register 0x64 to Register 0x6B andthedatabuffer in Register 0x60 hold the data average, which can be used to increase SNR without clipping, in 16-bit registers. The data rate is decimated by the value of the SLOTB_NUMB_AVG bits. 0: 1. 1: 2. 2: 4. 3: 8. 4: 16. 5: 32. 6: 64. |
| 0x15      | 7           | 0x0             | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0x15      | [6:4]       | 0x0             | R/W      | SLOTA_NUM_AVG    | Sample sum/average for Time Slot A.N A : same as Bits[10:8] but for Time Slot A. See description in Register 0x15, Bits[10:8].                                                                                                                                                                                                                                                                                                                                                            |
| 0x15      | [3:0]       | 0x0             | R/W      | Reserved         | Write 0x0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0x18      | [15:0]      | 0x2000          | R/W      | SLOTA_CH1_OFFSET | Time Slot A Channel 1 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x19      | [15:0]      | 0x2000          | R/W      | SLOTA_CH2_OFFSET | Time Slot A Channel 2 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x1A      | [15:0]      | 0x2000          | R/W      | SLOTA_CH3_OFFSET | Time Slot A Channel 3 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x1B      | [15:0]      | 0x2000          | R/W      | SLOTA_CH4_OFFSET | Time Slot A Channel 4 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x1E      | [15:0]      | 0x2000          | R/W      | SLOTB_CH1_OFFSET | Time Slot B Channel 1 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x1F      | [15:0]      | 0x2000          | R/W      | SLOTB_CH2_OFFSET | Time Slot B Channel 2 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x20      | [15:0]      | 0x2000          | R/W      | SLOTB_CH3_OFFSET | Time Slot B Channel 3 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |
| 0x21      | [15:0]      | 0x2000          | R/W      | SLOTB_CH4_OFFSET | Time Slot B Channel 4 ADC offset. The value to subtract from the raw ADC value. A value of 0x2000 is typical.                                                                                                                                                                                                                                                                                                                                                                             |

## DATA REGISTERS

## Table 34. Data Registers

| Address   | Data Bits   | Access   | Name            | Description                                  |
|-----------|-------------|----------|-----------------|----------------------------------------------|
| 0x60      | [15:0]      | R        | FIFO_DATA       | Next available word in FIFO.                 |
| 0x64      | [15:0]      | R        | SLOTA_CH1_16BIT | 16-bit value of Channel1 in Time Slot A.     |
| 0x65      | [15:0]      | R        | SLOTA_CH2_16BIT | 16-bit value of Channel 2 in Time Slot A.    |
| 0x66      | [15:0]      | R        | SLOTA_CH3_16BIT | 16-bit value of Channel 3 in Time Slot A.    |
| 0x67      | [15:0]      | R        | SLOTA_CH4_16BIT | 16-bit value of Channel 4 in Time Slot A.    |
| 0x68      | [15:0]      | R        | SLOTB_CH1_16BIT | 16-bit value of Channel 1 in Time Slot B.    |
| 0x69      | [15:0]      | R        | SLOTB_CH2_16BIT | 16-bit value of Channel 2 in Time Slot B.    |
| 0x6A      | [15:0]      | R        | SLOTB_CH3_16BIT | 16-bit value of Channel 3 in Time Slot B.    |
| 0x6B      | [15:0]      | R        | SLOTB_CH4_16BIT | 16-bit value of Channel 4 in Time Slot B.    |
| 0x70      | [15:0]      | R        | SLOTA_CH1_LOW   | Low data-word for Channel 1 in Time Slot A.  |
| 0x71      | [15:0]      | R        | SLOTA_CH2_LOW   | Low data-word for Channel 2 in Time Slot A.  |
| 0x72      | [15:0]      | R        | SLOTA_CH3_LOW   | Low data-word for Channel 3 in Time Slot A.  |
| 0x73      | [15:0]      | R        | SLOTA_CH4_LOW   | Low data-word for Channel 4 in Time Slot A.  |
| 0x74      | [15:0]      | R        | SLOTA_CH1_HIGH  | High data-word for Channel 1 in Time Slot A. |
| 0x75      | [15:0]      | R        | SLOTA_CH2_HIGH  | High data-word for Channel 2 in Time Slot A. |
| 0x76      | [15:0]      | R        | SLOTA_CH3_HIGH  | High data-word for Channel 3 in Time Slot A. |
| 0x77      | [15:0]      | R        | SLOTA_CH4_HIGH  | High data-word for Channel 4 in Time Slot A. |
| 0x78      | [15:0]      | R        | SLOTB_CH1_LOW   | Low data-word for Channel 1 in Time Slot B.  |
| 0x79      | [15:0]      | R        | SLOTB_CH2_LOW   | Low data-word for Channel 2 in Time Slot B.  |
| 0x7A      | [15:0]      | R        | SLOTB_CH3_LOW   | Low data-word for Channel 3 in Time Slot B.  |
| 0x7B      | [15:0]      | R        | SLOTB_CH4_LOW   | Low data-word for Channel 4 in Time Slot B.  |
| 0x7C      | [15:0]      | R        | SLOTB_CH1_HIGH  | High data-word for Channel 1 in Time Slot B. |
| 0x7D      | [15:0]      | R        | SLOTB_CH2_HIGH  | High data-word for Channel 2 in Time Slot B. |
| 0x7E      | [15:0]      | R        | SLOTB_CH3_HIGH  | High data-word for Channel 3 in Time Slot B. |
| 0x7F      | [15:0]      | R        | SLOTB_CH4_HIGH  | High data-word for Channel 4 in Time Slot B. |

## OUTLINE DIMENSIONS

<!-- image -->

11-14-2016-A

PKG-005283

Figure 41. 24-Terminal Chip Array Small Outline No Lead Cavity [LGA\_CAV] 3.80 mm × 5.00 mm Body and 0.9 mm Package Height (CE-24-1)

Dimensions shown in millimeters

| Model 1, 2       | Temperature Range   | Package Description                                                              | Package Option   |
|------------------|---------------------|----------------------------------------------------------------------------------|------------------|
| ADPD188GG-ACEZR7 | -40°C to +85°C      | 24-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV], 7' Tape and Reel  | CE-24-1          |
| ADPD188GG-ACEZRL | -40°C to +85°C      | 24-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV], 13' Tape and Reel | CE-24-1          |
| EVAL-ADPD188GGZ  |                     | Evaluation Board                                                                 |                  |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

2  EVAL-ADPDUCZ is the microcontroller board, ordered separately, required to interface with the EVAL-ADPD188GGZ evaluation board.

<!-- image -->