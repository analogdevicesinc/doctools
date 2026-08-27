<!-- lastmod 2020-06-03 -->
<!-- image -->

## Known Good Die

## FEATURES

Fast throughput rate: 1 MSPS Low power

Specified for AVDD of 2.7 V to 5.25 V 6 mW maximum at 1 MSPS with 3 V supplies 13.5 mW maximum at 1 MSPS with 5 V supplies 4 single-ended inputs with sequencer Wide input bandwidth: 70 dB SNR at 50 kHz input frequency Flexible power/serial clock speed management No pipeline delays High speed serial interface: SPI/QSPI™/MICROWIRE™/DSP compatible Shutdown mode: 0.5 µA maximum 16-lead TSSOP package Qualified for automotive applications Known good die (KGD): these die are fully guaranteed to data sheet specifications.

## GENERAL DESCRIPTION

The AD7924-KGD is a 12-bit, high speed, low power, 4-channel successive approximation ADCs. The parts operate from a single 2.7 V to 5.25 V power supply and feature throughput rates up to 1 MSPS. The part contains a low noise, wide bandwidth track-andhold amplifier that can handle input frequencies in excess of 8 MHz.

The conversion process and data acquisition are controlled using CS and the serial clock signal, allowing the device to easily interface with microprocessors or DSPs. The input signal is sampled on the falling edge of CS and conversion is initiated at this point. There are no pipeline delays associated with the part.

The AD7924-KGD uses advanced design techniques to achieve very low power dissipation at maximum throughput rates. At maximum throughput rates, the AD7924-KGD consumes 2 mA maximum with 3 V supplies; with 5 V supplies, the current consumption is 2.7 mA maximum.

Through the configuration of the control register, the analog input range for the part can be selected as 0 V to REFIN or 0 V to 2 × REFIN, with either straight binary or twos complement output coding. The AD7924-KGD features four single-ended analog inputs with a channel sequencer to allow a preprogrammed selection of channels to be converted sequentially.

The conversion time for the AD7924-KGD is determined by the SCLK frequency, which is also used as the master clock to control the conversion.

Additional application and technical information can be found in the AD7924 data sheet.

[Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=AD7924-KGD.pdf&product=AD7924-KGD&rev=A)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However ,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## 4-Channel, 1 MSPS, 12-Bit ADC with

## Sequencer in 16-Lead TSSOP

[AD7924-KGD](http://www.analog.com/AD7924?doc=AD7924-KGD.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## PRODUCT HIGHLIGHTS

1. High Throughput with Low Power Consumption. The AD7924-KGD offers throughput rates up to 1 MSPS. At the maximum throughput rate with 3 V supplies, the AD7924-KGD dissipates only 6 mW of power maximum.
2. Four Single-Ended Inputs with Channel Sequencer. A consecutive sequence of channels can be selected, through which the ADC will cycle and convert on.
3. Single-Supply Operation with VDRIVE Function. The AD7924-KGD operates from a single 2.7 V to 5.25 V supply. The VDRIVE function allows the serial interface to connect directly to 3 V or 5 V processor systems, independent of VDD.
4. Flexible Power/Serial Clock Speed Management. The conversion rate is determined by the serial clock, allowing the conversion time to be reduced by increasing the serial clock speed. The part also features two shutdown modes to maximize power efficiency at lower throughput rates. Current consumption is 0.5 µA maximum when in full shutdown.
5. No Pipeline Delay.
6. The part features a standard successive approximation ADC with accurate control of the sampling instant via the CS input and once-off conversion control.

## AD7924-KGD

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Product Highlights ........................................................................... 1            |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Timing Specifications .................................................................. 5                  |

## REVISION HISTORY

## 11/14-Rev. 0 to Rev. A

Change to Bond Pad Composition Value, Table 5 ....................... 8

10/11-Revision 0: Initial Version

| Absolute Maximum Ratings ............................................................6          |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................6 |
| Pin Configuration and Function Descriptions..............................7                      |
| Outline Dimensions..........................................................................8   |
| Die Specifications and Assembly Recommendations ..............8                                 |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS

AVDD = VDRIVE = 2.7 V to 5.25 V , REFIN = 2.5 V , fSCLK = 20 MHz, TA = TMIN to TMAX, unless otherwise noted. T emperature range is -40°C to +85°C.

Table 1.

| Parameter                             | Min         |   Typ | Max         | Unit   | Test Conditions/Comments                    |
|---------------------------------------|-------------|-------|-------------|--------|---------------------------------------------|
| DYNAMIC PERFORMANCE                   |             |       |             |        | f IN = 50 kHz sine wave, f SCLK = 20 MHz    |
| Signal-to-(Noise + Distortion), SINAD | 70 69       |       |             | dB     | @5V                                         |
|                                       | 70          |       |             | dB dB  | @3V, typically 69.5 dB                      |
| Signal-to-Noise Ratio, SNR            |             |       |             |        |                                             |
| Total Harmonic Distortion,THD         |             |       | -77         | dB     | @5V, typically -84 dB                       |
|                                       |             |       | -73         | dB     | @3V, typically -77 dB                       |
| Peak Harmonic or Spurious Noise, SFDR |             |       | -78         | dB     | @5V, typically -86 dB                       |
| Intermodulation Distortion, IMD       |             |       |             |        | fa = 40.1 kHz, fb = 41.5 kHz                |
| Second-Order Terms                    |             |   -90 |             | dB     |                                             |
| Third-Order Terms                     |             |   -90 |             | dB     |                                             |
| Aperture Delay                        |             |    10 |             | ns     |                                             |
| Aperture Jitter                       |             |    50 |             | ps     |                                             |
| Channel-to-Channel Isolation          |             |   -85 |             | dB     | f IN = 400 kHz                              |
| Full Power Bandwidth                  |             |   8.2 |             | MHz    | @3dB                                        |
|                                       |             |   1.6 |             | MHz    | @0.1 dB                                     |
| DC ACCURACY                           |             |       |             |        |                                             |
| Resolution                            | 12          |       |             | Bits   |                                             |
| Integral Nonlinearity, INL            |             |       | ±1          | LSB    |                                             |
| Differential Nonlinearity, DNL        |             |       | -0.9/+1.5   | LSB    | Guaranteed no missed codes to 12 bits       |
| 0V to REF IN Input Range              |             |       |             |        | Straight binary output coding               |
| Offset Error                          |             |       | ±8          | LSB    | Typically ±0.5 LSB                          |
| Offset Error Match                    |             |       | ±0.5        | LSB    |                                             |
| Gain Error                            |             |       | ±1.5        | LSB    |                                             |
| Gain Error Match                      |             |       | ±0.5        | LSB    |                                             |
| 0V to 2 × REF IN Input Range          |             |       |             |        | -REF IN to +REF IN biased about REF IN with |
| Positive Gain Error                   |             |       | ±1.5        | LSB    |                                             |
| Positive Gain Error Match             |             |       | ±0.5        | LSB    |                                             |
| Zero Code Error                       |             |       | ±8          | LSB    | Typically ±0.8 LSB                          |
| Zero Code Error Match                 |             |       | ±0.5        | LSB    |                                             |
| Negative Gain Error                   |             |       | ±1          | LSB    |                                             |
| Negative Gain Error Match             |             |       | ±0.5        | LSB    |                                             |
| ANALOG INPUT                          |             |       |             |        |                                             |
|                                       | 0           |       | REF IN      | V      | RANGE bit set to 1                          |
| Input Voltage Range                   | 0           |       | 2×REF IN    | V      | RANGEbitset to 0,AV /V =4.75Vto5.25V        |
| DC Leakage Current                    |             |       | ±1          | μA     | DD DRIVE                                    |
| Input Capacitance                     |             |    20 |             | pF     |                                             |
| REFERENCE INPUT                       |             |       |             |        |                                             |
| REF IN Input Voltage                  |             |   2.5 |             | V      | ±1% specified performance                   |
| DC Leakage Current                    |             |       |             |        |                                             |
|                                       |             |       | ±1          | μA     |                                             |
| REF IN Input Impedance                |             |    36 |             | kΩ     | f SAMPLE = 1 MSPS                           |
| LOGIC INPUTS                          |             |       |             |        |                                             |
| Input High Voltage,V INH              | 0.7×V DRIVE |       |             | V      |                                             |
| Input LowVoltage,V INL                |             |       | 0.3×V DRIVE | V      |                                             |
| Input Current, I IN                   |             |       | ±1          | μA     | Typically 10 nA,V IN = 0V orV DRIVE         |
| Input Capacitance, C IN 1             |             |       | 10          | pF     |                                             |

## AD7924-KGD

| Parameter                           | Min                                | Typ    | Max Unit   | Test Conditions/Comments                 |
|-------------------------------------|------------------------------------|--------|------------|------------------------------------------|
| LOGIC OUTPUTS                       |                                    |        |            |                                          |
| Output High Voltage,V OH            | V DRIVE - 0.2                      |        | V          | I SOURCE = 200 μA, AV DD = 2.7V to 5.25V |
| Output LowVoltage,V OL              |                                    | 0.4    | V          | I SINK = 200 μA                          |
| Floating-State Leakage Current      |                                    | ±1     | μA         |                                          |
| Floating-State Output Capacitance 1 |                                    | 10     | pF         |                                          |
| Output Coding                       | Straight (natural) Twos complement | binary |            | CODING bit set to 1 CODING bit set to 0  |
| CONVERSION RATE                     |                                    |        |            |                                          |
| Conversion Time                     |                                    | 800    | ns         | 16 SCLK cycles with SCLK at 20 MHz       |
| Track-and-Hold Acquisition Time     |                                    | 300    | ns         | Sine wave input                          |
|                                     |                                    | 300    | ns         | Full-scale step input                    |
| Throughput Rate                     |                                    | 1      | MSPS       |                                          |
| POWER REQUIREMENTS                  |                                    |        |            |                                          |
| V DD                                | 2.7                                | 5.25   | V          |                                          |
| V DRIVE                             | 2.7                                | 5.25   | V          |                                          |
| I DD                                |                                    |        |            | Digital inputs = 0V orV DRIVE            |
| Normal Mode (Static)                |                                    | 600    | μA         | AV DD = 2.7V to 5.25 V, SCLK on or off   |
| Normal Mode (Operational)           |                                    | 2.7    | mA         | AV DD = 4.75V to 5.25 V, f SCLK = 20MHz  |
|                                     |                                    | 2      | mA         | AV DD = 2.7V to 3.6 V, f SCLK = 20 MHz   |
| Auto Shutdown Mode                  |                                    | 960    | μA         | f SAMPLE = 250 kSPS                      |
|                                     |                                    | 0.5    | μA         | Static                                   |
| Full Shutdown Mode                  |                                    | 0.5    | μA         | SCLK on or off (20 nA typ)               |
| Power Dissipation                   |                                    |        |            |                                          |
| Normal Mode (Operational)           |                                    | 13.5   | mW         | AV DD = 5 V, f SCLK = 20 MHz             |
|                                     |                                    | 6      | mW         | AV DD = 3 V, f SCLK = 20 MHz             |
| Auto Shutdown Mode (Static)         |                                    | 2.5    | μW         | AV DD = 5V                               |
|                                     |                                    | 1.5    | μW         | AV DD = 3V                               |
| Full Shutdown Mode                  |                                    | 2.5    | μW         | AV DD = 5V                               |
|                                     |                                    | 1.5    | μW         | AV DD = 3V                               |

## TIMING SPECIFICATIONS

AVDD = 2.7 V to 5.25 V , VDRIVE ≤ AVDD, REFIN = 2.5 V , TA = TMIN to TMAX, unless otherwise noted.

## Table 2.

|             | Limit atT MIN ,T MAX   | Limit atT MIN ,T MAX   | Limit atT MIN ,T MAX   |                                                                                             |
|-------------|------------------------|------------------------|------------------------|---------------------------------------------------------------------------------------------|
| Parameter 1 | AV DD =3V              | AV DD =5V              | Unit                   | Description                                                                                 |
| f SCLK 2    | 10                     | 10                     | kHz min                |                                                                                             |
| t CONVERT   | 16 × t SCLK            | 16 × t SCLK            |                        |                                                                                             |
| t QUIET     | 50                     | 50                     | ns min                 | Minimum quiet time required between the CS rising edge and the start of the next conversion |
| t 2         | 10                     | 10                     | ns min                 | CS to SCLK setup time                                                                       |
| t 3 3       | 35                     | 30                     | ns max                 | Delay from CS until DOUT three-state disabled                                               |
| t 4 3       | 40                     | 40                     | ns max                 | Data access time after SCLK falling edge                                                    |
| t 5         | 0.4 × t SCLK           | 0.4 × t SCLK           | ns min                 | SCLK low pulse width                                                                        |
| t 6         | 0.4 × t SCLK           | 0.4 × t SCLK           | ns min                 | SCLK high pulse width                                                                       |
| t 7         | 10                     | 10                     | ns min                 | SCLK to DOUT valid hold time                                                                |
| t 8 4       | 15/45                  | 15/35                  | ns min/ns max          | SCLK falling edge to DOUT high impedance                                                    |
| t 9         | 10                     | 10                     | ns min                 | DIN setup time prior to SCLK falling edge                                                   |
| t 10        | 5                      | 5                      | ns min                 | DIN hold time after SCLK falling edge                                                       |
| t 11        | 20                     | 20                     | ns min                 | 16th SCLK falling edge to CS high                                                           |
| t 12        | 1                      | 1                      | μs max                 | Power-up time from full shutdown/auto shutdown modes                                        |

- 1 Sample tested at 25°C to ensure compliance. All input signals are specified with tR = tF = 5 ns (10% to 90% of AVDD) and timed from a voltage level of 1.6 V (see Figure 2). The 3 V operating range spans from 2.7 V to 3.6 V. The 5 V operating range spans from 4.75 V to 5.25 V.

2 Mark/space ratio for the SCLK input is 40/60 to 60/40.

- 3 Measured with the load circuit of Figure 2 and defined as the time required for the output to cross 0.4 V or 0.7 × VDRIVE.
- 4  t8 is derived from the measured time taken by the data outputs to change 0.5 V when loaded with the circuit of Figure 2. The measured number is then extrapolated back to remove the effects of charging or discharging the 50 pF capacitor. This means that the time, t8, quoted in the timing characteristics is the true bus relinquish time of the part and is independent of the bus loading.

10106-002

Figure 2. Load Circuit for Digital Output Timing Specifications

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

## Table 3.

| Parameter                                  | Rating                |
|--------------------------------------------|-----------------------|
| AV DD toAGND                               | -0.3V to +7V          |
| V DRIVE toAGND                             | -0.3V to AV DD + 0.3V |
| Analog Input Voltage toAGND                | -0.3V to AV DD + 0.3V |
| Digital Input Voltage toAGND               | -0.3V to +7V          |
| Digital Output Voltage toAGND              | -0.3V to AV DD + 0.3V |
| REF IN toAGND                              | -0.3V to AV DD + 0.3V |
| Input Current to Any Pin Except Supplies 1 | ±10mA                 |
| Operating Temperature Range                | -40°C to +85°C        |
| Storage Temperature Range                  | -65°C to +150°C       |
| Junction Temperature                       | 150°C                 |
| Lead Temperature, Soldering                |                       |
| Vapor Phase (60 secs)                      | 215°C                 |
| Infrared (15 secs)                         | 220°C                 |
| ESD                                        | 1.5 kV                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.   |   X-Axis (µm) |   Y-Axis (µm) | Mnemonic   | PadType   | Description                             |
|-----------|---------------|---------------|------------|-----------|-----------------------------------------|
| 1         |        -580.3 |       +965.95 | SCLK       | Single    | Serial Clock                            |
| 2         |        -815.4 |       +932.75 | DIN        | Single    | Data In, Logic Input.                   |
| 3         |        -815.4 |        +677.6 | CS         | Single    | Chip Select.                            |
| 4A        |       -850.85 |          +416 | AGND       | Double    | Analog Ground.                          |
| 4B        |       -850.85 |          +316 | AGND       | Double    | Analog Ground.                          |
| 5         |       -854.15 |        +50.35 | AVDD       | Double    | Analog Power Supply Input.              |
| 6         |        -854.4 |        -258.7 | AVDD       | Double    | Analog Power Supply Input.              |
| 7A        |       -850.45 |          -546 | VREF       | Double    | Reference Input.                        |
| 7B        |       -850.45 |          -646 | VREF       | Double    | Reference Input.                        |
| 8         |        -854.2 |        -877.9 | NC         | Single    | No Connect. Do not connect to this pin. |
| 9         |        -854.2 |       -1070.1 | AGND       | Single    | Analog Ground.                          |
| 10        |       -712.45 |       -1070.1 | AGND       | Single    | Analog Ground.                          |
| 11        |       -458.95 |       -1054.1 | NC         | Single    | No Connect. Do not connect to this pin. |
| 12        |       -108.95 |       -1054.1 | NC         | Single    | No Connect. Do not connect to this pin. |
| 13        |       +200.85 |       -1054.1 | NC         | Single    | No Connect. Do not connect to this pin. |
| 14        |       +550.85 |       -1054.1 | NC         | Single    | No Connect. Do not connect to this pin. |
| 15        |        +916.2 |      -1021.15 | VIN3       | Single    | Analog Input 0.                         |
| 16        |        +916.2 |       -671.15 | VIN2       | Single    | Analog Input 1.                         |
| 17        |        +916.2 |       -510.75 | VIN1       | Single    | Analog Input 2.                         |
| 18        |        +916.2 |       -160.75 | VIN0       | Single    | Analog Input 3.                         |
| 19A       |        880.85 |           144 | AGND       | Double    | Analog Ground.                          |
| 19B       |        880.85 |           244 | AGND       | Double    | Analog Ground.                          |
| 20        |        896.05 |        537.15 | DOUT       | Single    | Data Output.                            |
| 21        |        865.35 |         885.8 | VDRIVE     | Single    | Logic Power Supply Input.               |
| 22        |        865.35 |        1025.8 | VDRIVE     | Single    | Logic Power Supply Input.               |
| 23        |        725.35 |        1025.8 | NC         | Single    | No Connect. Do not connect to this pin. |
| 24A       |          -191 |        +997.4 | AGND       | Double    | Analog Ground.                          |
| 24B       |          -291 |        +997.4 | AGND       | Double    | Analog Ground.                          |

## OUTLINE DIMENSIONS

09-12-2011-A

Figure 4. 24-Pad Bare Die [CHIP] (C-24-1)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 5. Die Specifications

| Parameter            | Value               | Unit           |
|----------------------|---------------------|----------------|
| Chip Size            | 2180 (x) × 2450 (y) | µm             |
| Scribe Line Width    | 120 (x) × 170 (y)   | µm             |
| Die Size             | 2300 (x) × 2620 (y) | µm             |
| Thickness            | 500                 | µm             |
| Backside             | Silicon             | Not applicable |
| Passivation          | Nitride             | Not applicable |
| Bond Pads (Minimum)  | 92 × 92             | µm             |
| Bond Pad Composition | 99.5% Al, 0.5% Cu   | %              |
| ESD                  | 1.5                 | kV             |

## Table 6. Assembly Recommendations

| Assembly Component   | Recommendation              |
|----------------------|-----------------------------|
| Die Attach           | No special recommendations  |
| Bonding Method       | Gold ball or aluminum wedge |
| Bonding Sequence     | 9 and 10                    |

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description    | Package Option   |
|---------------|---------------------|------------------------|------------------|
| AD7924-KGD-DF | -40°C to +85°C      | 24-Pad Bare Die [CHIP] | C-24-1           |

<!-- image -->