<!-- lastmod 2022-08-02 -->
<!-- image -->

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## General Description

The MAX2839AS direct conversion, zero-IF, RF transceiver is  designed specifically for 2.3GHz to 2.7GHz 802.16e MIMO mobile WiMAX™ systems. The device incorporates one transmitter and two receivers, with &gt; 40dB isolation  between  each  receiver.  The  MAX2839AS completely integrates all circuitry required to implement the RF transceiver function, providing RF to baseband receive path, and baseband to RF transmit path, VCO, frequency synthesizer, crystal oscillator, and baseband/control interface. The device includes a fast-settling sigma-delta RF synthesizer with smaller than 40Hz frequency steps and a crystal oscillator that allows the use of a low-cost crystal in place of a TCXO. The transceiver IC also integrates circuits for on-chip DC-offset cancellation, I/Q error, and carrier leakage detection circuits. An internal transmit to receive loopback mode allows for receiver I/Q imbalance calibration. The local oscillator  I/Q  quadrature  phase error can be digitally corrected in approximately 0.125° steps. Only an RF bandpass filter (BPF), crystal, RF switch, PA, and a small number of passive components are needed to form a complete wireless broadband RF radio solution.

The MAX2839AS completely eliminates the need for an external SAW filter by implementing on-chip programmable monolithic filters for both the receiver and transmitter, for all 2GHz and 802.16e profiles and WiBro. The baseband filters along with the Rx and Tx signal paths are optimized to meet the stringent noise figure and linearity  specifications.  The  device  supports  up  to  2048 FFT OFDM and implements programmable channel filters for 3.5MHz to 20MHz RF channel bandwidths. The transceiver requires only 2µs Tx-Rx switching time. The IC is  available  in  a  small  wafer-level  package  (WLP) measuring 5.16mm x 3.66mm x 0.5mm.

## Applications

802.16e Mobile WiMAX Systems Korean WiBro Systems

Proprietary Wireless Broadband Systems

802.11g or n WLAN with MRC or MIMO Down Link

WiMAX is a trademark of the WiMAX Forum. SPI is a trademark of Motorola, Inc.

Features

- ♦ 2.3GHz to 2.7GHz Wideband Operation
- ♦ Dual Receivers for MIMO, Single Transmitter
- ♦ Complete RF Transceiver, PA Driver, and Crystal Oscillator
- 3.5dB Rx Noise Figure on Each Receiver with Balun
- -35dB Rx EVM for 64QAM Signal

0dBm Linear OFDM Transmit Power (64QAM)

- -70dBr Tx Spectral Emission Mask
- -35dBc LO Leakage

Automatic Rx DC Offset Correction

Monolithic Low-Noise VCO with -39dBc

Integrated Phase Noise

Programmable Rx I/Q Lowpass Channel Filters

Programmable Tx I/Q Lowpass Anti-Aliasing Filters

Sigma-Delta Fractional-N PLL with 28.61Hz Minimum Step Size

62dB Tx Gain Control Range with 1dB Step Size, Digitally Controlled

95dB Rx Gain Control Range with 1dB Step Size, Digitally Controlled

60dB Analog RSSI Instantaneous Dynamic Range

4-Wire SPI™ Digital Interface

I/Q Analog Baseband Interface Digital Tx/Rx Mode Control

Digitally Tuned Crystal Oscillator

On-Chip Digital Temperature Sensor Readout

- ♦ +2.7V to +3.6V Transceiver Supply
- ♦ Low-Power Shutdown Current
- ♦ Small WLP Package (5.16mm x 3.66mm x 0.5mm)

## Ordering Information

| PART           | TEMP RANGE     | PIN-PACKAGE   |
|----------------|----------------|---------------|
| MAX2839ASEWO+T | -40°C to +85°C | 73 WLP        |

Bump Configuration and Typical Operating Circuit appear at end of data sheet.

1

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## ABSOLUTE MAXIMUM RATINGS

| V CC_ Pins to GND..................................................-0.3V                                       | to +3.9V                                  |
|----------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| RF Inputs: RXINA+, RXINA-, RXINB+, RXINB- to GND............................................AC-Coupled         | Only                                      |
| RF Outputs: TXOUT+, TXOUT- to                                                                                  | GND.................-0.3V to +3.9V        |
| Analog Inputs: TXBBI+, TXBBI-, TXBBQ+, TXBBQ- to GND.................................................-0.3V     | to +3.9V                                  |
| Analog Input: REFCLK, XTAL1.........................-0.3V                                                      | to +3.9V P-P                              |
| Analog Outputs: RXBBIA+, RXBBIA-, RXBBQA+, RXBBIB+, RXBBIB-, RXBBQB+, RXBBQB-, CPOUT+, CPOUT-, PABIAS, RSSI to | RXBBQA-,                                  |
| Digital Inputs: TXRX, CS , SCLK, DIN, B7:B0,                                                                   | GND........................-0.3V to +3.9V |
| CLKOUT_DIV, RXHP, ENABLE to GND............-0.3V                                                               | to +3.9V                                  |

| Digital Outputs: DOUT, CLKOUT..........................-0.3V                     | to +3.9V                                              |
|----------------------------------------------------------------------------------|-------------------------------------------------------|
| Bias Voltages: VCOBYP                                                            | .......................................-0.3V to +3.9V |
| Short-Circuit Duration on All Output Pins                                        | ...............................10s                    |
| RF Input Power: All RXIN_..............................................+10dBm    |                                                       |
| RF Output Differential Load VSWR: All TXOUT.......................6:1            |                                                       |
| Continuous Power Dissipation (T A = +70°C) 73-Bump WLP (derate 31.3mW/°C above   | +70°C).....2500mW                                     |
| Operating Temperature Range                                                      | ...........................-40°C to +85°C             |
| Junction Temperature......................................................+150°C |                                                       |
| Storage Temperature Range.............................-65°C                      | to +160°C                                             |
| Soldering Temperature (reflow)                                                   | .........................(Note 1) +260°C              |

Note 1: Refer to Application Note 1891: Understanding the Basics of the Wafer-Level Chip-Scale Package (WL-CSP) available at www.maxim-ic.com .

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

<!-- image -->

## DC ELECTRICAL CHARACTERISTICS

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.7V to 3.6V, TA = -40°C to +85°C, Rx set to the maximum gain. ENABLE and TXRX set according to operating mode. CS = high, SCLK = DIN = low, no input signal at RF inputs, all RF inputs and outputs terminated into 50 Ω . 90mVRMS differential I and Q signals (1MHz) applied to I, Q baseband inputs of transmitter in transmit mode, all registers set to recommended settings. Typical values are at VCC\_ = 2.8V, fLO = 2.5GHz, and TA = +25°C.) (Note 2)

| PARAMETER                                                           | CONDITIONS                                                          |                                                                     | MIN        |   TYP |   MAX | UNITS   |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|------------|-------|-------|---------|
| Supply Voltage                                                      | V CC _                                                              | V CC _                                                              | 2.7        |       |   3.6 | V       |
|                                                                     | Shutdown mode, T A = +25°C; all logic inputs equal 0 or V CC        | Shutdown mode, T A = +25°C; all logic inputs equal 0 or V CC        |            |     2 |       | µA      |
|                                                                     | Clock-out only mode                                                 | Clock-out only mode                                                 |            |   2.7 |   3.8 |         |
|                                                                     | Standby mode                                                        | Standby mode                                                        |            |    33 |    50 |         |
| Supply Current                                                      |                                                                     | One receiver on                                                     |            |    79 |   101 |         |
|                                                                     | Both                                                                | receivers on                                                        |            |   120 |   148 |         |
|                                                                     |                                                                     | 16 QAM                                                              |            |   116 |   148 | mA      |
|                                                                     | 64 QAM (Note                                                        | 3)                                                                  |            |   145 |   183 |         |
|                                                                     | Rx calibration mode, both receivers on                              | Rx calibration mode, both receivers on                              |            |   153 |   200 |         |
|                                                                     | Tx calibration mode                                                 | Tx calibration mode                                                 |            |   102 |   145 |         |
| Rx I/Q Output Common-Mode Voltage                                   | D[9:8] = 00 in A[4:0] = 00100                                       | D[9:8] = 00 in A[4:0] = 00100                                       | 0.8        |  1.05 |  1.35 | V       |
| Rx I/Q Output Common-Mode Voltage                                   | D[9:8] = 01 in A[4:0] = 00100                                       | D[9:8] = 01 in A[4:0] = 00100                                       |            |  1.15 |       | V       |
| Rx I/Q Output Common-Mode Voltage                                   | D[9:8] = 10 in A[4:0] = 00100                                       | D[9:8] = 10 in A[4:0] = 00100                                       |            |  1.25 |       | V       |
| Rx I/Q Output Common-Mode Voltage                                   | D[9:8] = 11 in A[4:0] = 00100                                       | D[9:8] = 11 in A[4:0] = 00100                                       |            |  1.45 |       | V       |
| Tx Baseband Input Common- Mode Voltage Operating Range              | DC-coupled                                                          | DC-coupled                                                          | 0.5        |       |   1.2 | V       |
| Tx Baseband Input Bias Current                                      | Source current                                                      | Source current                                                      |            |    10 |    20 | µA      |
| LOGIC INPUTS: TXRX, ENABLE, SCLK, DIN, CS , B7:B0, CLKOUT_DIV, RXHP | LOGIC INPUTS: TXRX, ENABLE, SCLK, DIN, CS , B7:B0, CLKOUT_DIV, RXHP | LOGIC INPUTS: TXRX, ENABLE, SCLK, DIN, CS , B7:B0, CLKOUT_DIV, RXHP |            |       |       |         |
| Digital Input-Voltage High, V IH                                    |                                                                     |                                                                     | V CC - 0.4 |       |       | V       |
| Digital Input-Voltage Low, V IL                                     |                                                                     |                                                                     |            |       |   0.4 | V       |
| Digital Input-Current High, I IH                                    |                                                                     |                                                                     | -1         |       |    +1 | µA      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## DC ELECTRICAL CHARACTERISTICS (continued)

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.7V to 3.6V, TA = -40°C to +85°C, Rx set to the maximum gain. ENABLE and TXRX set according to operating mode. CS = high, SCLK = DIN = low, no input signal at RF inputs, all RF inputs and outputs terminated into 50 Ω . 90mVRMS differential I and Q signals (1MHz) applied to I, Q baseband inputs of transmitter in transmit mode, all registers set to recommended settings. Typical values are at VCC\_ = 2.8V, fLO = 2.5GHz, and TA = +25°C.) (Note 2)

| PARAMETER                         | CONDITIONS                  | MIN        | TYP   |   MAX | UNITS   |
|-----------------------------------|-----------------------------|------------|-------|-------|---------|
| Digital Input-Current Low, I      | IL                          | -1         |       |    +1 | µA      |
| LOGIC OUTPUTS: DOUT, CLKOUT       | LOGIC OUTPUTS: DOUT, CLKOUT |            |       |       |         |
| Digital Output-Voltage High, V OH | Sourcing 100µA              | V CC - 0.4 |       |       | V       |
| Digital Output-Voltage Low, V OL  | Sinking 100µA               |            |       |   0.4 | V       |

## AC ELECTRICAL CHARACTERISTICS-Rx MODE

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, TA = +25°C, fRF = 2.4999GHz, fLO = 2.5GHz; baseband output signal frequency = 100kHz, fREF = 40MHz, ENABLE = TXRX = CS = high, SCLK = DIN = low, with power matching for the differential RF pins using the Typical Operating Circuit and registers set to default settings. Lowpass filter is set to 10MHz RF channel BW. Unmodulated single-tone RF input signal is used.) (Note 2)

| PARAMETER                                                 | CONDITIONS                                                                                         |                                                                                                    | MIN                                     | TYP                                     | MAX                                     | UNITS                                   |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| RF INPUT TO I, Q BASEBAND-LOADED OUTPUT                   | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT                                                            | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT                                                            | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT | RF INPUT TO I, Q BASEBAND-LOADED OUTPUT |
| RF Input Frequency Range                                  |                                                                                                    |                                                                                                    | 2.3                                     |                                         | 2.7                                     | GHz                                     |
| Peak-to-Peak Gain Variation over RF Input Frequency Range | Tested at band edges and band center                                                               | Tested at band edges and band center                                                               |                                         | 1.5                                     |                                         | dB                                      |
| RF Input Return Loss                                      | All LNA settings                                                                                   | All LNA settings                                                                                   |                                         | 12                                      |                                         | dB                                      |
| Total Voltage Gain                                        | T A = -40°C to +85°C                                                                               | Maximum gain, B7:B0 = 0000000                                                                      | 92                                      | 99                                      |                                         | dB                                      |
| Total Voltage Gain                                        |                                                                                                    | Minimum gain, B7:B0 = 1111111                                                                      |                                         | 4                                       | 10                                      | dB                                      |
| RF Gain Steps                                             | From max RF gain (B7:B6 = 00) to max RF gain - 8dB (B7:B6 = 01)                                    | From max RF gain (B7:B6 = 00) to max RF gain - 8dB (B7:B6 = 01)                                    |                                         | 8                                       |                                         | dB                                      |
| RF Gain Steps                                             | From max RF gain to max RF gain - 16dB (B7:B6 = 10)                                                | From max RF gain to max RF gain - 16dB (B7:B6 = 10)                                                |                                         | 16                                      |                                         | dB                                      |
| RF Gain Steps                                             | From max RF gain to max RF gain - 32dB (B7:B6 = 11)                                                | From max RF gain to max RF gain - 32dB (B7:B6 = 11)                                                |                                         | 32                                      |                                         | dB                                      |
| Gain Change Settling Time                                 | Any RF or baseband gain change; gain settling to within ±1dB of steady state; RXHP = 1             | Any RF or baseband gain change; gain settling to within ±1dB of steady state; RXHP = 1             |                                         | 200                                     |                                         | ns                                      |
| Gain Change Settling Time                                 | Any RF or baseband gain change; gain settling to within ±0.1dB of steady state; RXHP = 1           | Any RF or baseband gain change; gain settling to within ±0.1dB of steady state; RXHP = 1           |                                         | 2000                                    |                                         | ns                                      |
| Baseband Gain Range                                       | From maximum baseband gain (B5:B0 = 000000) to minimum gain (B5:B0 = 111111), T A = -40°C to +85°C | From maximum baseband gain (B5:B0 = 000000) to minimum gain (B5:B0 = 111111), T A = -40°C to +85°C | 60.5                                    | 63                                      | 65.5                                    | dB                                      |
| Baseband Gain Step Size                                   |                                                                                                    |                                                                                                    |                                         | 1                                       |                                         | dB                                      |
| DSB Noise Figure (Including Balun Loss)                   | Voltage gain = 65dB with max RF gain (B7:B6 = 00)                                                  | Voltage gain = 65dB with max RF gain (B7:B6 = 00)                                                  |                                         | 3.5                                     |                                         | dB                                      |
| DSB Noise Figure (Including Balun Loss)                   | Voltage gain = 50dB with max RF gain - 8dB (B7:B6 = 01)                                            | Voltage gain = 50dB with max RF gain - 8dB (B7:B6 = 01)                                            |                                         | 8.5                                     |                                         | dB                                      |
| DSB Noise Figure (Including Balun Loss)                   | Voltage gain = 45dB with max RF gain - 16dB (B7:B6 = 10)                                           | Voltage gain = 45dB with max RF gain - 16dB (B7:B6 = 10)                                           |                                         | 14.5                                    |                                         | dB                                      |
| DSB Noise Figure (Including Balun Loss)                   | Voltage gain = 15dB with max RF gain - 32dB (B7:B6 = 11)                                           | Voltage gain = 15dB with max RF gain - 32dB (B7:B6 = 11)                                           |                                         | 32                                      |                                         | dB                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## AC ELECTRICAL CHARACTERISTICS-Rx MODE (continued)

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, TA = +25°C, fRF = 2.4999GHz, fLO = 2.5GHz; baseband output signal frequency = 100kHz, fREF = 40MHz, ENABLE = TXRX = CS = high, SCLK = DIN = low, with power matching for the differential RF pins using the Typical Operating Circuit and registers set to default settings. Lowpass filter is set to 10MHz RF channel BW. Unmodulated single-tone RF input signal is used.) (Note 2)

| PARAMETER                                    | CONDITIONS                                                                                                               |                                                                                                                          | MIN                       | TYP                       | MAX                       | UNITS                     |
|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| Out-of-Band Input IP3 (Note 4)               | AGC set for -65dBm wanted signal, max RF gain (B7:B6 = 00)                                                               | AGC set for -65dBm wanted signal, max RF gain (B7:B6 = 00)                                                               | -13                       | -13                       | -13                       | dBm                       |
| Out-of-Band Input IP3 (Note 4)               | AGC set for -55dBm wanted signal, max RF gain - 8dB (B7:B6 = 01)                                                         | AGC set for -55dBm wanted signal, max RF gain - 8dB (B7:B6 = 01)                                                         | -9                        | -9                        | -9                        | dBm                       |
| Out-of-Band Input IP3 (Note 4)               | AGC set for -40dBm wanted signal, max RF gain - 16dB (B7:B6 = 10)                                                        | AGC set for -40dBm wanted signal, max RF gain - 16dB (B7:B6 = 10)                                                        | -7                        | -7                        | -7                        | dBm                       |
| Out-of-Band Input IP3 (Note 4)               | AGC set for -30dBm wanted signal, max RF gain - 32dB (B7:B6 = 11)                                                        | AGC set for -30dBm wanted signal, max RF gain - 32dB (B7:B6 = 11)                                                        | +16                       | +16                       | +16                       | dBm                       |
| Inband Input P-1dB                           | Max RF gain (B7:B6 = 00)                                                                                                 | Max RF gain (B7:B6 = 00)                                                                                                 | -37                       | -37                       | -37                       | dBm                       |
| Inband Input P-1dB                           | Max RF gain - 8dB (B7:B6 = 01)                                                                                           | Max RF gain - 8dB (B7:B6 = 01)                                                                                           | -29                       | -29                       | -29                       | dBm                       |
| Inband Input P-1dB                           | Max RF gain - 16dB (B7:B6 = 01)                                                                                          | Max RF gain - 16dB (B7:B6 = 01)                                                                                          | -21                       | -21                       | -21                       | dBm                       |
| Inband Input P-1dB                           | Max RF gain - 32dB (B7:B6 = 11)                                                                                          | Max RF gain - 32dB (B7:B6 = 11)                                                                                          | -4                        | -4                        | -4                        | dBm                       |
| Maximum Output Signal Level                  | Over passband frequency range at VGA gain between max and max - 54dB; 1dB compression point                              | Over passband frequency range at VGA gain between max and max - 54dB; 1dB compression point                              | 1.15                      | 1.15                      | 1.15                      | V P-P                     |
| I/Q Gain Imbalance                           | 100kHz IQ baseband output; 1 σ variation                                                                                 | 100kHz IQ baseband output; 1 σ variation                                                                                 | 0.05                      | 0.05                      | 0.05                      | dB                        |
| I/Q Phase Error                              | 100kHz IQ baseband output; 1 σ variation                                                                                 | 100kHz IQ baseband output; 1 σ variation                                                                                 | 0.25                      | 0.25                      | 0.25                      | Degrees                   |
| Rx I/Q Output Load Impedance                 | Minimum differential resistance                                                                                          | Minimum differential resistance                                                                                          | 10                        | 10                        | 10                        | k Ω                       |
| (R &#124;&#124; C)                           | Maximum differential capacitance                                                                                         | Maximum differential capacitance                                                                                         | 5                         | 5                         | 5                         | pF                        |
| Loopback Gain (for Receiver I/Q Calibration) | Transmitter I/Q input to receiver I/Q output; transmitter B6:B1 = 000011, receiver B5:B0 = 101010 programmed through SPI | Transmitter I/Q input to receiver I/Q output; transmitter B6:B1 = 000011, receiver B5:B0 = 101010 programmed through SPI | -6                        | -1                        | +4.5                      | dB                        |
| I/Q Output DC Droop                          | After switching RXHP to 0; average over 1µs after any gain change, or 2µs after receive enabled with 100Hz AC-coupling   | After switching RXHP to 0; average over 1µs after any gain change, or 2µs after receive enabled with 100Hz AC-coupling   | 1                         | 1                         | 1                         | V/s                       |
| I/Q Static DC Offset                         | No RF input signal; measure at 3µs after receive enable; RXHP = 1 for 0 to 2µs and set to 0 after 2µs, 1 σ variation     | No RF input signal; measure at 3µs after receive enable; RXHP = 1 for 0 to 2µs and set to 0 after 2µs, 1 σ variation     | 1                         | 1                         | 1                         | mV                        |
| Isolation Between Rx Channels A and B        | Any RF gain settings                                                                                                     | Any RF gain settings                                                                                                     | 40                        | 40                        | 40                        | dB                        |
| RECEIVER BASEBAND FILTERS                    | RECEIVER BASEBAND FILTERS                                                                                                | RECEIVER BASEBAND FILTERS                                                                                                | RECEIVER BASEBAND FILTERS | RECEIVER BASEBAND FILTERS | RECEIVER BASEBAND FILTERS | RECEIVER BASEBAND FILTERS |
| Baseband Filter Rejection                    | At 15MHz                                                                                                                 | At 15MHz                                                                                                                 | 57                        | 57                        | 57                        | dB                        |
| Baseband Filter Rejection                    | At 20MHz                                                                                                                 | At 20MHz                                                                                                                 | 75                        | 75                        | 75                        | dB                        |
| Baseband Filter Rejection                    | At > 40MHz                                                                                                               | At > 40MHz                                                                                                               | 75                        | 75                        | 75                        | dB                        |
| Baseband Highpass Filter Corner Frequency    | RXHP = 1 (used before AGC completion)                                                                                    | RXHP = 1 (used before AGC completion)                                                                                    | 650                       | 650                       | 650                       | kHz                       |
|                                              | D[5:4] (used after AGC address A[4:0] = 01110                                                                            | D[5:4] = 00                                                                                                              | 0.1                       | 0.1                       | 0.1                       | kHz                       |
|                                              |                                                                                                                          | = 01                                                                                                                     | 1                         | 1                         | 1                         | kHz                       |
|                                              |                                                                                                                          | D[5:4] = 10                                                                                                              | 30                        | 30                        | 30                        | kHz                       |
|                                              |                                                                                                                          | D[5:4] = 11                                                                                                              | 100                       | 100                       | 100                       | kHz                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## AC ELECTRICAL CHARACTERISTICS-Rx MODE (continued)

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, TA = +25°C, fRF = 2.4999GHz, fLO = 2.5GHz; baseband output signal frequency = 100kHz, fREF = 40MHz, ENABLE = TXRX = CS = high, SCLK = DIN = low, with power matching for the differential RF pins using the Typical Operating Circuit and registers set to default settings. Lowpass filter is set to 10MHz RF channel BW. Unmodulated single-tone RF input signal is used.) (Note 2)

| PARAMETER                                         | CONDITIONS                               | CONDITIONS                               | MIN   | TYP   | MAX   | UNITS   |
|---------------------------------------------------|------------------------------------------|------------------------------------------|-------|-------|-------|---------|
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0000 | A[4:0] = 00100 serial bits D[9:6] = 0000 |       | 1.75  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0001 | A[4:0] = 00100 serial bits D[9:6] = 0001 |       | 2.25  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0010 | A[4:0] = 00100 serial bits D[9:6] = 0010 |       | 3.5   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0011 | A[4:0] = 00100 serial bits D[9:6] = 0011 |       | 5.0   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0100 | A[4:0] = 00100 serial bits D[9:6] = 0100 |       | 5.5   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0101 | A[4:0] = 00100 serial bits D[9:6] = 0101 |       | 6.0   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0110 | A[4:0] = 00100 serial bits D[9:6] = 0110 |       | 7.0   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 0111 | A[4:0] = 00100 serial bits D[9:6] = 0111 |       | 8.0   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1000 | A[4:0] = 00100 serial bits D[9:6] = 1000 |       | 9.0   |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1001 | A[4:0] = 00100 serial bits D[9:6] = 1001 |       | 10.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1010 | A[4:0] = 00100 serial bits D[9:6] = 1010 |       | 12.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1011 | A[4:0] = 00100 serial bits D[9:6] = 1011 |       | 14.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1100 | A[4:0] = 00100 serial bits D[9:6] = 1100 |       | 15.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1101 | A[4:0] = 00100 serial bits D[9:6] = 1101 |       | 20.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1110 | A[4:0] = 00100 serial bits D[9:6] = 1110 |       | 24.0  |       | MHz     |
| RF Channel BW Supported by Baseband Filter        | A[4:0] = 00100 serial bits D[9:6] = 1111 | A[4:0] = 00100 serial bits D[9:6] = 1111 |       | 28.0  |       | MHz     |
| Baseband Gain Ripple                              | 0 to 2.3MHz for RF BW = 5MHz             | 0 to 2.3MHz for RF BW = 5MHz             |       | 1.3   |       | dB P-P  |
| Baseband Gain Ripple                              | 0 to 4.6MHz for RF BW = 10MHz            | 0 to 4.6MHz for RF BW = 10MHz            |       | 1.3   |       | dB P-P  |
| Baseband Group Delay Ripple                       | 0 to 2.3MHz for RF BW = 5MHz             | 0 to 2.3MHz for RF BW = 5MHz             |       | 90    |       | ns P-P  |
| Baseband Group Delay Ripple                       | 0 to 4.6MHz for RF BW = 10MHz            | 0 to 4.6MHz for RF BW = 10MHz            |       | 50    |       | ns P-P  |
| Baseband Filter Rejection for 5MHz RF Channel BW  | At 2.3MHz                                | At 2.3MHz                                |       | 1.8   |       | dB      |
| Baseband Filter Rejection for 5MHz RF Channel BW  | At > 8.75MHz                             | At > 8.75MHz                             |       | 75    |       | dB      |
| Baseband Filter Rejection for 10MHz RF Channel BW | At 4.6MHz                                | At 4.6MHz                                |       | 1.6   |       | dB      |
| Baseband Filter Rejection for 10MHz RF Channel BW | At > 17.5MHz                             | At > 17.5MHz                             |       | 75    |       | dB      |
| RSSI                                              | RSSI                                     | RSSI                                     | RSSI  | RSSI  | RSSI  | RSSI    |
| RSSI Minimum Output Voltage                       | R LOAD ≥ 10k Ω                           | R LOAD ≥ 10k Ω                           |       | 0.6   |       | V       |
| RSSI Maximum Output Voltage                       | R LOAD ≥ 10k Ω                           | R LOAD ≥ 10k Ω                           |       | 2.1   |       | V       |
| RSSI                                              | Slope                                    | Slope                                    |       | 29    |       | mV/dB   |
| RSSI Output Settling Time                         | To within 3dB of steady state            | +32dB signal step                        |       | 200   |       | ns      |
| RSSI Output Settling Time                         | To within 3dB of steady state            | -32dB signal step                        |       | 800   |       | ns      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## AC ELECTRICAL CHARACTERISTICS-Tx MODE

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, TA = +25°C, fRF = 2.501GHz, fLO = 2.5GHz, fREF = 40MHz, ENABLE = CS = high, TXRX = SCLK = DIN = low, with power matching for the differential RF pins using the Typical Operating Circuit and registers set to default settings. Lowpass filter is set to 10MHz RF channel BW. 1MHz 90mVRMS cosine and sine signals applied to I/Q baseband inputs of transmitter (differential DC-coupled)). (Note 2)

| PARAMETER                                           | CONDITIONS                                                                                                              | MIN                                  | TYP                                  | MAX                                  | UNITS                                |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|
| Tx BASEBAND I/Q INPUTS TO RF OUTPUTS                | Tx BASEBAND I/Q INPUTS TO RF OUTPUTS                                                                                    | Tx BASEBAND I/Q INPUTS TO RF OUTPUTS | Tx BASEBAND I/Q INPUTS TO RF OUTPUTS | Tx BASEBAND I/Q INPUTS TO RF OUTPUTS | Tx BASEBAND I/Q INPUTS TO RF OUTPUTS |
| RF Output Frequency Range                           |                                                                                                                         | 2.3                                  |                                      | 2.7                                  | GHz                                  |
| Peak-to-Peak Peak Gain Variation over RF Band       |                                                                                                                         |                                      | 1                                    | 2                                    | dB                                   |
| Total Voltage Gain                                  | Max gain - 3dB; at unbalanced 50 Ω matched output                                                                       | 3.5                                  | 8                                    |                                      | dB                                   |
| Max Output Power over Frequency                     | 64 QAM OFDM signal conforming to spectral emission mask and -36dB EVM after I/Q imbalance calibration by modem (Note 5) |                                      | 0                                    |                                      | dBm                                  |
| RF Output Return Loss                               |                                                                                                                         |                                      | 8                                    |                                      | dB                                   |
| RF Gain Control Range                               | B6:B1 = 000000 to 111111                                                                                                |                                      | 62                                   |                                      | dB                                   |
| Unwanted Sideband Suppression                       | Without calibration by modem, and excludes modem I/Q imbalance; P OUT = 0dBm                                            |                                      | 40                                   |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B1                                                                                                                      |                                      | 1                                    |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B2                                                                                                                      |                                      | 2                                    |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B3                                                                                                                      |                                      | 4                                    |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B4                                                                                                                      |                                      | 8                                    |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B5                                                                                                                      |                                      | 16                                   |                                      | dB                                   |
| RF Gain Control Binary Weights                      | B6                                                                                                                      |                                      | 32                                   |                                      | dB                                   |
| Carrier Leakage                                     | Relative to 0dBm output power; without calibration by modem                                                             |                                      | -30                                  |                                      | dBc                                  |
| Tx I/Q Input Impedance (R&#124;&#124;C)             | Differential resistance                                                                                                 |                                      | 100                                  |                                      | k Ω                                  |
| Tx I/Q Input Impedance (R&#124;&#124;C)             | Differential capacitance                                                                                                |                                      | 0.5                                  |                                      | pF                                   |
| Baseband Frequency Response for 5MHz RF Channel BW  | 0 to 3.333MHz                                                                                                           |                                      | 0.9                                  |                                      | dB                                   |
| Baseband Frequency Response for 5MHz RF Channel BW  | At > 9.45MHz                                                                                                            |                                      | 43                                   |                                      | dB                                   |
| Baseband Frequency Response for 10MHz RF Channel BW | 0 to 6.667MHz                                                                                                           |                                      | 0.9                                  |                                      | dB                                   |
| Baseband Frequency Response for 10MHz RF Channel BW | At > 18.9MHz                                                                                                            |                                      | 43                                   |                                      | dB                                   |
| Baseband Group Delay Ripple                         | 0 to 3.333MHz (RF BW = 5MHz)                                                                                            |                                      | 20                                   |                                      | ns                                   |
| Baseband Group Delay Ripple                         | 0 to 6.667MHz (RF BW = 10MHz)                                                                                           |                                      | 12                                   |                                      | ns                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## AC ELECTRICAL CHARACTERISTICS-FREQUENCY SYNTHESIS

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, SCLK = DIN = low, PLL closed-loop unity gain bandwidth = 120kHz. VCO and RF synthesis enabled.) (Note 2)

| PARAMETER                                              | CONDITIONS                                                                                                              | MIN     | TYP     | MAX     | UNITS   |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|---------|---------|
| RF Channel Center Frequency Range                      |                                                                                                                         | 2.3     |         | 2.7     | GHz     |
| Channel Center Frequency Programming Minimum Step Size |                                                                                                                         | 28.61   | 28.61   | 28.61   | Hz      |
| Charge-Pump Comparison Frequency                       |                                                                                                                         | 40      | 40      | 40      | MHz     |
| Reference Frequency Range                              |                                                                                                                         | 15      | 40      | 80      | MHz     |
| Reference Frequency Input Levels                       | AC-coupled to REFCLK pin                                                                                                | 0.6     |         |         | V P-P   |
| Reference Frequency Input Impedance (R&#124;&#124;C)   | Resistance (REFCLK pin)                                                                                                 | 10      | 10      | 10      | k Ω     |
|                                                        | Capacitance (REFCLK pin)                                                                                                | 1       | 1       | 1       | pF      |
| Programmable Reference Divider Values                  |                                                                                                                         | 1       | 2       | 4       |         |
| Closed-Loop Integrated Phase Noise                     | Integrate phase noise from 200Hz to 5MHz; charge- pump comparison frequency = 40MHz                                     | -39     | -39     | -39     | dBc     |
| Charge-Pump Output Current                             | On each differential side                                                                                               | 0.8     | 0.8     | 0.8     | mA      |
|                                                        | f OFFSET = 0 to 1.8MHz                                                                                                  | -40     | -40     | -40     | dBc     |
| Close-In Spur Level                                    | f OFFSET = 1.8MHz to 7MHz                                                                                               | -70     | -70     | -70     | dBc     |
|                                                        | f OFFSET > 7MHz                                                                                                         | -80     | -80     | -80     |         |
| Reference Spur Level                                   |                                                                                                                         | -85     | -85     | -85     | dBc     |
| Turnaround LO Frequency Error                          | Relative to steady state; measured 35µs after Tx-Rx or Rx-Tx switching instant, and 4µs after any receiver gain changes | ±50     | ±50     | ±50     | Hz      |
| Temperature Range Over Which VCO Maintains Lock        | Relative to the ambient temperature T A at initial lock                                                                 | T A ±40 | T A ±40 | T A ±40 | °C      |
| Reference Output Clock Divider                         | CLKOUT_DIV pin = 0                                                                                                      | 1       | 1       | 1       |         |
| Values                                                 | CLKOUT_DIV pin = 1                                                                                                      | 2       | 2       | 2       |         |
| Output Clock Drive Level                               | 20MHz output, A[4:0] = 10100, D5 = 0                                                                                    | 2.4     | 2.4     | 2.4     | V P-P   |
| Output Clock Load Impedance                            | Resistance                                                                                                              | 10      | 10      | 10      | k Ω     |
| (R&#124;&#124;C)                                       | Capacitance                                                                                                             | 2       | 2       | 2       | pF      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## AC ELECTRICAL CHARACTERISTICS-MISCELLANEOUS BLOCKS

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, fREF = 40MHz, CS = high, SCLK = DIN = low, and TA = +25°C.) (Note

| PARAMETER                            | CONDITIONS                                                |                                                           | TYP                        | MAX                        | UNITS                      |                            |
|--------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| PA BIAS DAC: VOLTAGE MODE            | PA BIAS DAC: VOLTAGE MODE                                 | PA BIAS DAC: VOLTAGE MODE                                 | PA BIAS DAC: VOLTAGE MODE  | PA BIAS DAC: VOLTAGE MODE  | PA BIAS DAC: VOLTAGE MODE  | PA BIAS DAC: VOLTAGE MODE  |
| Output High level                    | 10mA source current                                       | 10mA source current                                       | V CC - 0.1                 |                            | V                          |                            |
| Output Low level                     | 100µA sink current                                        | 100µA sink current                                        | 0.1                        |                            | V                          |                            |
| Turn-On Time                         | Excludes programmable delay of 0 to 7µs in steps of 0.5µs | Excludes programmable delay of 0 to 7µs in steps of 0.5µs | 200                        |                            | ns                         |                            |
| CRYSTAL OSCILLATOR                   | CRYSTAL OSCILLATOR                                        | CRYSTAL OSCILLATOR                                        | CRYSTAL OSCILLATOR         | CRYSTAL OSCILLATOR         | CRYSTAL OSCILLATOR         | CRYSTAL OSCILLATOR         |
| On-Chip Tuning Capacitance Range     | Maximum capacitance, A[4:0] = 11000, D[6:0] = 1111111     | Maximum capacitance, A[4:0] = 11000, D[6:0] = 1111111     | 15.5                       |                            | pF                         |                            |
|                                      | Minimum capacitance, A[4:0] = 11000, D[6:0] = 0000000     | Minimum capacitance, A[4:0] = 11000, D[6:0] = 0000000     | 0.5                        |                            | pF                         |                            |
| On-Chip Tuning Capacitance Step Size |                                                           |                                                           | 0.12                       |                            | pF                         |                            |
| ON-CHIP TEMPERATURE SENSOR           | ON-CHIP TEMPERATURE SENSOR                                | ON-CHIP TEMPERATURE SENSOR                                | ON-CHIP TEMPERATURE SENSOR | ON-CHIP TEMPERATURE SENSOR | ON-CHIP TEMPERATURE SENSOR | ON-CHIP TEMPERATURE SENSOR |
| Digital Output Code                  | T A = DOUT pin through SPI 01011, D[4:0]                  | T A = +25°C                                               | 01111                      |                            |                            |                            |
| Digital Output Code                  | T A = DOUT pin through SPI 01011, D[4:0]                  | +85°C                                                     | 11101                      |                            |                            |                            |
| Digital Output Code                  | T A = DOUT pin through SPI 01011, D[4:0]                  | T A = -40°C                                               | 00001                      |                            |                            |                            |

## AC ELECTRICAL CHARACTERISTICS-TIMING

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, fLO = 2.5GHz, fREF = 40MHz, CS = high, SCLK = DIN = low, PLL closed-loop unity gain bandwidth = 120kHz, and TA = +25°C.) (Note 2)

| PARAMETER                           | SYMBOL   | CONDITIONS                                                                        |                                                                             | MIN   |   TYP | MAX   | UNITS   |
|-------------------------------------|----------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------|-------|-------|-------|---------|
| SYSTEM TIMING                       |          |                                                                                   |                                                                             |       |       |       |         |
| Turnaround Time                     |          | Measured from Tx or Rx enable edge; signal settling to within 2dB of steady state | Rx to Tx                                                                    |       |     2 |       | µs      |
| Turnaround Time                     |          | Measured from Tx or Rx enable edge; signal settling to within 2dB of steady state | Tx to Rx, RXHP = 1                                                          |       |     2 |       | µs      |
| Tx Turn-On Time (from Standby Mode) |          | Measured from Tx-enable edge; signal settling to within 2dB of steady state       | Measured from Tx-enable edge; signal settling to within 2dB of steady state |       |     2 |       | µs      |
| Tx Turn-Off Time (to Standby Mode)  |          | From Tx-disable edge                                                              | From Tx-disable edge                                                        |       |   0.1 |       | µs      |
| Rx Turn-On Time (from Standby Mode) |          | Measured from Rx-enable edge; signal settling to within 2dB of steady state       | Measured from Rx-enable edge; signal settling to within 2dB of steady state |       |     2 |       | µs      |
| Rx Turn-Off Time (to Standby Mode)  |          | From Rx-disable edge                                                              | From Rx-disable edge                                                        |       |   0.1 |       | µs      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## AC ELECTRICAL CHARACTERISTICS-TIMING (continued)

(MAX2839AS Evaluation Kit. Unless otherwise noted, VCC\_ = 2.8V, fLO = 2.5GHz, fREF = 40MHz, CS = high, SCLK = DIN = low, PLL closed-loop unity gain bandwidth = 120kHz, and TA = +25°C.) (Note 2)

| PARAMETER                                                                        | SYMBOL                                                 | CONDITIONS                                             | MIN                                                    | TYP                                                    | MAX                                                    | UNITS                                                  |
|----------------------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1)                           | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) | 4-WIRE SERIAL PARALLEL INTERFACE TIMING (see Figure 1) |
| SCLK Rising Edge to CS Falling Edge Wait Time                                    | t CSO                                                  |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| Falling Edge of CS to Rising Edge of First SCLK Time                             | t CSS                                                  |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| DIN to SCLK Setup Time                                                           | t DS                                                   |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| DIN to SCLK Hold Time                                                            | t DH                                                   |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| SCLK Pulse-Width High                                                            | t CH                                                   |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| SCLK Pulse-Width Low                                                             | t CL                                                   |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| Last Rising Edge of SCLK to Rising Edge of CS or Clock to Load Enable Setup Time | t CSH                                                  |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| CS High Pulse Width                                                              | t CSW                                                  |                                                        |                                                        | 20                                                     |                                                        | ns                                                     |
| Time Between Rising Edge of CS and the Next Rising Edge of SCLK                  | t CS1                                                  |                                                        |                                                        | 6                                                      |                                                        | ns                                                     |
| Clock Frequency                                                                  | f CLK                                                  |                                                        |                                                        | 40                                                     |                                                        | MHz                                                    |
| Rise Time                                                                        | t R                                                    |                                                        |                                                        | 0.1/f CLK                                              |                                                        | ns                                                     |
| Fall Time                                                                        | t F                                                    |                                                        |                                                        | 0.1/f CLK                                              |                                                        | ns                                                     |
| SCLK Falling Edge to Valid DOUT                                                  | t D                                                    |                                                        |                                                        | 12.5                                                   |                                                        | ns                                                     |

Note 4: Two tones at +20MHz and +39MHz offset with -35dBm/tone. Measure IM3 at 1MHz.

Note 5: Gain adjusted over max gain and max gain -3dB.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless

## Broadband RF Transceiver

## Typical Operating Characteristics

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

WiMAX EVM vs. OFDM JAMMER (10MHz CHANNEL BANDWIDTH, 64 QAM FUSC) PWANTED = PSENSITIVITY + 3dB = -70.3dBm AT ANTENNA (INCLUDING 4dB FRONT-END LOSS), EVM AT PSENSITIVITY = 6.37%, WITHOUT JAMMER

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless

## Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless

## Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

MAX2839ASWO+T toc33

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

HISTOGRAM: Tx LO LEAKAGE

<!-- image -->

<!-- image -->

<!-- image -->

HISTOGRAM: Tx SIDEBAND SUPPRESSION

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

17

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Typical Operating Characteristics (continued)

(VCC\_ = 2.8V, TA = +25°C, fLO = 2.5GHz, fREF = 40MHz, CS = high, RXHP = SCLK = DIN = low, RF BW = 10MHz, Tx output at 50 Ω unbalanced output of balun, using the MAX2839AS Evaluation Kit.)

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## Bump Description

| BUMP   | NAME              | FUNCTION                                                                                                                                              |
|--------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | GNDRXLNA_A        | Receiver A LNA Ground                                                                                                                                 |
| 2      | V CCRXLNA_A       | Receiver A LNA Supply Voltage. Bypass with a 22pF capacitor as close as possible to the pin.                                                          |
| 3      | V CCRXLNA_B       | Receiver B LNA Supply Voltage. Bypass with a 22pF capacitor as close as possible to the pin.                                                          |
| 4      | GND_LNA_B         | Receiver B LNA Ground                                                                                                                                 |
| 5      | RXINB+            | Receiver B LNA Differential Input Plus. Input is internally DC-coupled.                                                                               |
| 6      | GND_MXR_B         | Receiver B Mixer Ground                                                                                                                               |
| 7      | B2                | Receiver and Transmitter Gain-Control Logic Input Bit 2                                                                                               |
| 8      | B3                | Receiver and Transmitter Gain-Control Logic Input Bit 3                                                                                               |
| 9      | B4                | Receiver and Transmitter Gain-Control Logic Input Bit 4                                                                                               |
| 10     | V CCTXPAD         | Supply Voltage for Transmitter Power Amplifier Driver. Bypass with a 22pF capacitor as close as possible to the pin.                                  |
| 11     | GND1_PAD_RF       | Transmit Power Amplifier Driver Ground                                                                                                                |
| 12     | GND2_PAD_RF       | Transmit Power Amplifier Driver Ground                                                                                                                |
| 13     | PABIAS            | Transmit External Power Amplifier Bias DAC Output                                                                                                     |
| 14     | GND_TXMX          | Transmit Upconverter Ground                                                                                                                           |
| 15     | SCLK              | Serial-Clock Logic Input of 4-Wire Serial Interface                                                                                                   |
| 16     | REFCLK            | Reference Clock Input. AC-couple a reference clock to this analog input.                                                                              |
| 17     | V CCXTAL          | Crystal Oscillator Supply Voltage. Bypass with a 100nF capacitor as close as possible to the pin.                                                     |
| 18     | V CCCP            | PLL Charge-Pump Supply Voltage. Bypass with a 100nF capacitor as close as possible to the pin.                                                        |
| 19     | GNDCP             | Charge-Pump Ground                                                                                                                                    |
| 20     | CPOUT+            | Differential Charge-Pump Output Plus. Connect the frequency synthesizer's loop filter between CPOUT+ and CPOUT- (see the Typical Operating Circuit ). |
| 21     | GNDVCO            | VCO Ground                                                                                                                                            |
| 22     | VCOBYP            | On-Chip VCO Regulator Output Bypass. Bypass with a 1µF capacitor to GND. Do not connect other circuitry to this point.                                |
| 23     | V CCVCO           | VCO Supply Voltage. Bypass with a 22nF capacitor as close as possible to the pin.                                                                     |
| 24     | GND_LO            | Local Oscillator Generation Ground                                                                                                                    |
| 25     | CS                | Active-Low Chip-Select Logic Input of 4-Wire Serial Interface                                                                                         |
| 26     | GND_RXBB_B        | Receiver B Baseband Ground                                                                                                                            |
| 27     | RXBBIB+           | Receiver B Baseband I-Channel Differential Output Plus                                                                                                |
| 28     | RXBBQB+           | Receiver B Baseband Q-Channel Differential Output Plus                                                                                                |
| 29     | B6                | Receiver and Transmitter Gain-Control Logic Input Bit 6                                                                                               |
| 30     | RXBBQA-           | Receiver A Baseband Q-Channel Differential Output Minus                                                                                               |
| 31     | RXBBQA+           | Receiver A Baseband Q-Channel Differential Output Plus                                                                                                |
| 32     | V CCRXVGA         | Receiver VGA Supply Voltage. Bypass with a 100nF capacitor as close as possible to the pin.                                                           |
| 33     | GND_RXBB_A        | Receiver A Baseband Ground                                                                                                                            |
| 34     | GND_RXLOGEN       | Receiver Divide-by-2 Ground                                                                                                                           |
| 35     | GND_MXR_A         | Receiver A Mixer Ground                                                                                                                               |
| 36     | GND_LNA_A         | Receiver A LNA Ground                                                                                                                                 |
| 37 38  | TXBBQ- CLKOUT_DIV | Transmitter Baseband Q-Channel Differential Input Minus Clockout Divide Ratio Select Logic Input                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Bump Description (continued)

| BUMP   | NAME         | FUNCTION                                                                                                                                               |
|--------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 39     | GNDRXLNA_B   | Receiver B LNA Ground                                                                                                                                  |
| 40     | RXINB-       | Receiver B LNA Differential Input Minus. Input is internally DC-coupled.                                                                               |
| 41     | TXRX         | Transmit/Receive Mode Enable Logic Input                                                                                                               |
| 42     | B5           | Receiver and Transmitter Gain-Control Logic Input Bit 5                                                                                                |
| 43     | TXOUT+       | Power Amplifier Driver Differential Output Plus. The pin is biased at V CC /2 internally.                                                              |
| 44     | B1           | Receiver and Transmitter Gain-Control Logic Input Bit 1                                                                                                |
| 45     | TXOUT-       | Power Amplifier Driver Differential Output Minus. The pin is biased at V CC /2 internally.                                                             |
| 46     | V CCTXMX     | Transmitter Upconverter Supply Voltage. Bypass with a 22pF capacitor as close as possible to the pin.                                                  |
| 47     | CLKOUT       | Reference Clock Buffer Output                                                                                                                          |
| 48     | GND_XTAL     | Crystal Oscillator Ground                                                                                                                              |
| 49     | GND_DIG      | PLL Digital Ground                                                                                                                                     |
| 50     | V CC_DIG     | PLL Digital Supply Voltage. Bypass with a 100nF capacitor as close as possible to the pin.                                                             |
| 51     | CPOUT-       | Differential Charge-Pump Output Minus. Connect the frequency synthesizer's loop filter between CPOUT+ and CPOUT- (see the Typical Operating Circuit ). |
| 52, 67 | GND          | Ground. Connect to the PCB ground plane.                                                                                                               |
| 53     | DIN          | Data Logic Input of 4-Wire Serial Interface                                                                                                            |
| 54     | GND_PAD_BIAS | Transmit Bias Ground                                                                                                                                   |
| 55     | XTAL1        | XTAL Input. AC-couple crystal to this analog pin.                                                                                                      |
| 56     | RXHP         | Receiver I- and Q-Channel AC-Coupling Highpass Corner Frequency Selection Logic Input                                                                  |
| 57     | RXBBIA-      | Receiver A Baseband I-Channel Differential Output Minus                                                                                                |
| 58     | RXBBIA+      | Receiver A Baseband I-Channel Differential Output Plus                                                                                                 |
| 59     | TXBBI+       | Transmitter Baseband I-Channel Differential Input Plus                                                                                                 |
| 60     | TXBBQ+       | Transmitter Baseband Q-Channel Differential Input Plus                                                                                                 |
| 61     | V CCRXMX     | Receiver Downconverters Supply Voltage. Bypass with a 22pF capacitor as close as possible to the pin.                                                  |
| 62     | RXINA-       | Receiver A LNA Differential Input Minus. Input is internally DC-coupled.                                                                               |
| 63     | RXINA+       | Receiver A LNA Differential Input Plus. Input is internally DC-coupled.                                                                                |
| 64     | B0           | Receiver and Transmitter Gain-Control Logic Input Bit 0                                                                                                |
| 65     | ENABLE       | Transceiver Enable Logic Input                                                                                                                         |
| 66     | DOUT         | Data Logic Output of 4-Wire Serial Interface                                                                                                           |
| 68     | RXBBIB-      | Receiver B Baseband I-Channel Differential Output Minus                                                                                                |
| 69     | RXBBQB-      | Receiver B Baseband Q-Channel Differential Output Minus                                                                                                |
| 70     | RSSI         | Receiver Signal Strength Output                                                                                                                        |
| 71     | B7           | Receiver Gain-Control Logic Input Bit 7                                                                                                                |
| 72     | V CCRXFL     | Receiver Baseband Filter Supply Voltage. Bypass with a 100nF capacitor as close as possible to the pin.                                                |
| 73     | TXBBI-       | Transmitter Baseband I-Channel Differential Input Minus                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Operating Mode

|                             | MODE CONTROL LOGIC INPUTS   | MODE CONTROL LOGIC INPUTS   | MODE CONTROL LOGIC INPUTS   | MODE CONTROL LOGIC INPUTS   | CIRCUIT BLOCK STATES   | CIRCUIT BLOCK STATES   | CIRCUIT BLOCK STATES   | CIRCUIT BLOCK STATES          | CIRCUIT BLOCK STATES   |
|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|------------------------|------------------------|------------------------|-------------------------------|------------------------|
| MODE                        | ENABLE PIN                  | TXRX PIN                    | SPI REG1 D<3>               | SPI REG16 D<1:0>            | Rx PATH                | Tx PATH                | PLL, VCO, LO GEN       | CALIBRATION SECTIONS ON       | CLOCK OUTPUT           |
| Shutdown                    | 0                           | 0                           | X                           | XX                          | Off                    | Off                    | Off                    | None                          | Off                    |
| Clock-Out Only              | 1                           | X                           | X                           | X0                          | Off                    | Off                    | Off                    | None                          | On                     |
| Clock-Out Only              | X                           | 1                           | X                           | X0                          | Off                    | Off                    | Off                    | None                          | On                     |
| Standby                     | 0                           | 1                           | X                           | 01                          | Off                    | Off                    | On or Off              | None                          | On                     |
| Rx (1x2 MIMO)               | 1                           | 1                           | 1                           | 01                          | On                     | Off                    | On                     | None                          | On                     |
| Rx (1x1 SISO)               | 1                           | 1                           | 0                           | 01                          | On (RX_A)              | Off                    | On                     | None                          | On                     |
| Tx                          | 1                           | 0                           | X                           | 01                          | Off                    | On                     | On                     | None                          | On                     |
| Tx Calibration              | 1                           | 0                           | X                           | 11                          | Off                    | On (except PA driver)  | On SPI REG7D<7> = 1    | AM detector + Rx I, Q buffers | On                     |
| RX_A Calibration (Loopback) | 1                           | 1                           | 0                           | 11                          | On (except LNA)        | On (except PA driver)  | On SPIREG26D<3>=1      | Loopback                      | On                     |
| RX_B Calibration (Loopback) | 1                           | 1                           | 1                           | 11                          | On (except LNA)        | On (except PA driver)  | On SPIREG26D<3>=1      | Loopback                      | On                     |

## Detailed Description

## Modes of Operation

The modes of operation for the MAX2839AS are shutdown, clock-out only, standby, receive, transmit, transmitter calibration, and receiver calibration. See Table 1 for  a  summary of the modes of operation. When the parts are active, various blocks can be shutdown individually by programming different SPI registers.

## Shutdown Mode

The MAX2839AS features a low-power shutdown mode. In shutdown mode, all circuit blocks are powered down, except the 4-wire serial bus and its internal programmable registers.

## Clock-Out Only

In  clock-out  mode, the entire transceiver is off except the divided reference clock output on the CLKOUT pin and the clock divider, which remain on.

## Standby Mode

The standby mode is used to enable the frequency synthesizer block while the rest of the device is powered down. In this mode, the PLL, VCO, and LO gener- ator are on so that Tx or Rx modes can be quickly enabled from this mode. These and other blocks can be selectively enabled in this mode by programming different SPI registers.

<!-- image -->

## Receive (Rx) Mode

In  receive  mode, all Rx circuit blocks are powered on and active. Antenna signal is applied; RF is downconverted, filtered, and buffered at Rx BB I and Q outputs. Either receiver A or both receivers can be enabled. Receiver B cannot be enabled by itself.

## Transmit (Tx) Mode

In transmit mode, all Tx circuit blocks are powered on. The external PA is powered on after a programmable delay using the on-chip PA bias DAC.

## Transmitter (Tx) Calibration Mode

All  Tx  circuit  blocks  except  PA  driver  and  external  PA are powered on and active. The AM detector and receiver I/Q channel buffers are also on, along with multiplexers in the receiver side to route this AM detector's  signal  to  each  I  and  Q  differential  outputs.  When required, the I/Q lowpass filter can be bypassed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Receiver (Rx) Calibration or Loopback

Part of the Rx and Tx circuit blocks except LNA and PA driver  are  powered on and active. The transmitter I/Q input signals are upconverted to RF, and the output of the Tx gain control block (VGA) is fed to the receiver at the input of the downconverter. Either receiver A or both receivers can be connected to the transmitter and powered on. The I/Q lowpass filters are not present in the transmitter signal path (they are bypassed).

## Programmable Registers and 4-Wire SPI Interface

The MAX2839AS includes 32 programmable 16-bit registers.  The  most  significant  bit  (MSB)  is  the  read/write selection bit. The next 5 bits are register address. The

10 least significant bits (LSBs) are register data. Register data i s l oaded through the 4-wire SPI/MICROWIRE™-compatible serial interface. Data at DIN is shifted in MSB first and is framed by CS .  When CS is low, the clock is active, and input data is shifted at the rising edge of the clock. During the read mode, register data selected by address bits is shifted out to DOUT at the falling edges of the clock. At the CS rising edge, the 10-bit data bits are latched into the register selected by address bits. See Figure 1. The register values are preserved in shutdown mode as long as the power-supply voltage is maintained. After power-up, the user must program all register values.

Figure 1. 4-Wire SPI Serial-Interface Timing Diagram

<!-- image -->

MICROWIRE is a trademark of National Semiconductor Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## SPI Register Definitions

(All values in the register definition table are typical numbers. The MAX2839AS SPI does not have a power-on-default feature; the user must program all SPI addresses for normal operation. Prior to use of any untested settings, contact the factory.)

Table 2. MAX2839AS Register Summary

|   REGISTER NO. | REGISTER NAME   | DEFAULT   | FUNCTIONS                                                                                                                                                                                                           |
|----------------|-----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|              0 | RX_ENABLE       | 000       | Reserved for internal use                                                                                                                                                                                           |
|              1 | RX_RF_1         | 00C       | • LNA band select, MIMO mode select • Rx I/Q phase error correction                                                                                                                                                 |
|              2 | RX_RF_2         | 081       | • LNA gain SPI control enable • Rx I/Q phase error SPI control enable                                                                                                                                               |
|              3 | RX_RF/LPF       | 1B9       | Reserved for internal use                                                                                                                                                                                           |
|              4 | LPF             | 3E6       | • RF channel bandwidth select                                                                                                                                                                                       |
|              5 | LPF/VGA_1       | 100       | • RX_A LNA and VGA gain controls • LPF operating mode select                                                                                                                                                        |
|              6 | LPF/VGA_2       | 000       | • RX_B LNA and VGA gain controls • Rx VGA common-mode select                                                                                                                                                        |
|              7 | RSSI/VGA        | 208       | • RSSI pin output select, operating mode as a function of RXHP, and receiver select • Rx baseband outputs routing select                                                                                            |
|              8 | RX_TOP_SPI_1    | 222       | • Rx VGA gain SPI control enable • LPF operating mode select enable                                                                                                                                                 |
|              9 | RX_TOP_SPI_2    | 018       | • Temperature sensor enable, and ADC readout trigger • DOUT output selection, drive select, three-state output select                                                                                               |
|             10 | TX_TOP_ SPI     | 00C       | • Tx AM detector gain and filter bandwidth controls                                                                                                                                                                 |
|             11 | TEMP_SEN        | 004       | • Temperature sensor ADC readout                                                                                                                                                                                    |
|             12 | HPFSM 1         | 24F       | • 10MHz HPC duration select when triggered by RXEN or LNA gain • 600kHz HPC duration select when triggered by RXEN or LNA gain                                                                                      |
|             13 | HPFSM 2         | 150       | • 100kHz HPC duration select when triggered by RXEN or LNA gain • 30kHz HPC duration select when triggered by RXEN or LNA gain • 1kHz HPC duration select when triggered by RXEN                                    |
|             14 | HPFSM 3         | 3C5       | • 1kHz HPC duration select when triggered by LNA gain • HPC rising edge delay and final highpass corner select • HPC on-hold corner select as a function of RXHP • HPC state machine retriggered by LNA gain enable |
|             15 | HPFSM 4         | 201       | • HPC state machine clock divider, sequence bypass, and RXHP dependent select                                                                                                                                       |
|             16 | BLK_SPI_EN      | 01C       | • Block enabled by SPI                                                                                                                                                                                              |
|             17 | FRAC_DIV_1      | 155       | • Last 10 of 20 fractional divider bits                                                                                                                                                                             |
|             18 | FRAC_DIV_2      | 155       | • First 10 of 20 fractional divider bits                                                                                                                                                                            |
|             19 | INT_DIV         | 153       | • Integer divider bits • LO generation band select                                                                                                                                                                  |
|             20 | SYNTH_CONFIG_1  | 249       | • Reference divider ratio • CLKOUT buffer drive select                                                                                                                                                              |
|             21 | SYNTH_CONFIG_2  | 02D       | Reserved for internal use                                                                                                                                                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Table 2. MAX2839AS Register Summary (continued)

|   REGISTER NO. | REGISTER NAME   | DEFAULT   | FUNCTIONS                                                                                                                                    |
|----------------|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------|
|             22 | VAS_CONFIG      | 1A9       | • VAS operating mode select, relock location, clock divide ratio, delay counter ratio, and triggering                                        |
|             23 | LO_MISC_CONFIG  | 24F       | • VAS sub-band SPI overwrite • Crystal oscillator bias select                                                                                |
|             24 | XTAL_CONFIG     | 180       | • Crystal oscillator core enable, and frequency tuning                                                                                       |
|             25 | VCO_CONFIG      | 000       | Reserved for internal use                                                                                                                    |
|             26 | LOGEN_CONFIG    | 3C0       | • VAS test signal select • VTUNE test signal select • LOGEN Gm enable                                                                        |
|             27 | TXLO_I/Q_CONFIG | 280       | • Tx LO I/Q phase adjustment by SPI enable, and phase adjustment select • Tx DC correction by SPI enable • Tx VGA gain control by SPI enable |
|             28 | PA_BIAS_ DAC    | 0C0       | • PA DAC output current select, and turn-on delay control                                                                                    |
|             29 | TX_GAIN_CONFIG  | 03F       | • Tx VGA gain control                                                                                                                        |
|             30 | TX_DC CORR_1    | 380       | • Tx DC offset correction for I-channel • PA DAC output type select, and voltage mode output select                                          |
|             31 | TX_DC_CORR_2    | 340       | • Tx DC offset correction for Q-channel • PA DAC clock-divide ratio                                                                          |

| REGISTER NAME   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   |
|-----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| REGISTER NAME   | A4             | A3             | A2             | A1             | A0             | D9             | D8          | D7          | D6          | D5          | D4          | D3          | D2          | D1          | D0          |
| RX_ENABLE       | 0              | 0              | 0              | 0              | 0              | 0              | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| RX_RF_1         | 0              | 0              | 0              | 0              | 1              | 0              | 0           | 0           | 0           | 0           | 0           | 1           | 1           | 0           | 0           |
| RX_RF_2         | 0              | 0              | 0              | 1              | 0              | 0              | 0           | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 1           |
| RX_RF/LPF       | 0              | 0              | 0              | 1              | 1              | 0              | 1           | 1           | 0           | 1           | 1           | 1           | 0           | 0           | 1           |
| LPF             | 0              | 0              | 1              | 0              | 0              | 1              | 1           | 1           | 1           | 1           | 0           | 0           | 1           | 1           | 0           |
| LPF/VGA_1       | 0              | 0              | 1              | 0              | 1              | 0              | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| LPF/VGA_2       | 0              | 0              | 1              | 1              | 0              | 0              | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| RSSI/VGA        | 0              | 0              | 1              | 1              | 1              | 1              | 0           | 0           | 0           | 0           | 0           | 1           | 0           | 0           | 0           |
| RX_TOP_SPI_1    | 0              | 1              | 0              | 0              | 0              | 1              | 0           | 0           | 0           | 1           | 0           | 0           | 0           | 1           | 0           |
| RX_TOP_SPI_2    | 0              | 1              | 0              | 0              | 1              | 0              | 0           | 0           | 0           | 0           | 1           | 1           | 0           | 0           | 0           |
| TX_TOP_ SPI     | 0              | 1              | 0              | 1              | 0              | 0              | 0           | 0           | 0           | 0           | 0           | 1           | 1           | 0           | 0           |
| TEMP_SEN        | 0              | 1              | 0              | 1              | 1              | 0              | 0           | 0           | 0           | 0           | 0           | 0           | 1           | 0           | 0           |
| HPFSM 1         | 0              | 1              | 1              | 0              | 0              | 1              | 0           | 0           | 1           | 0           | 0           | 1           | 1           | 1           | 1           |
| HPFSM 2         | 0              | 1              | 1              | 0              | 1              | 0              | 1           | 0           | 1           | 0           | 1           | 0           | 0           | 0           | 0           |
| HPFSM 3         | 0              | 1              | 1              | 1              | 0              | 1              | 1           | 1           | 1           | 0           | 0           | 0           | 1           | 0           | 1           |
| HPFSM 4         | 0              | 1              | 1              | 1              | 1              | 1              | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 1           |
| BLK_SPI_EN      | 1              | 0              | 0              | 0              | 0              | 0              | 0           | 0           | 0           | 0           | 1           | 1           | 1           | 0           | 0           |
| FRAC_DIV_1      | 1              | 0              | 0              | 0              | 1              | 0              | 1           | 0           | 1           | 0           | 1           | 0           | 1           | 0           | 1           |
| FRAC_DIV_2      | 1              | 0              | 0              | 1              | 0              | 0              | 1           | 0           | 1           | 0           | 1           | 0           | 1           | 0           | 1           |
| INT_DIV         | 1              | 0              | 0              | 1              | 1              | 0              | 1           | 0           | 1           | 0           | 1           | 0           | 0           | 1           | 1           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 2. MAX2839AS Register Summary (continued)

| REGISTER NAME   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | ADDRESS BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   | DATA BITS   |
|-----------------|----------------|----------------|----------------|----------------|----------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| REGISTER NAME   | A4             | A3             | A2             | A1             | A0             | D9          | D8          | D7          | D6          | D5          | D4          | D3          | D2          | D1          | D0          |
| SYNTH_CONFIG_1  | 1              | 0              | 1              | 0              | 0              | 1           | 0           | 0           | 1           | 0           | 0           | 1           | 0           | 0           | 1           |
| SYNTH_CONFIG_2  | 1              | 0              | 1              | 0              | 1              | 0           | 0           | 0           | 0           | 1           | 0           | 1           | 1           | 0           | 1           |
| VAS_CONFIG      | 1              | 0              | 1              | 1              | 0              | 0           | 1           | 1           | 0           | 1           | 0           | 1           | 0           | 0           | 1           |
| LO_MISC_CONFIG  | 1              | 0              | 1              | 1              | 1              | 1           | 0           | 0           | 1           | 0           | 0           | 1           | 1           | 1           | 1           |
| XTAL_CONFIG     | 1              | 1              | 0              | 0              | 0              | 0           | 1           | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| VCO_CONFIG      | 1              | 1              | 0              | 0              | 1              | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| LOGEN_CONFIG    | 1              | 1              | 0              | 1              | 0              | 1           | 1           | 1           | 1           | 0           | 0           | 0           | 0           | 0           | 0           |
| TXLO_I/Q_CONFIG | 1              | 1              | 0              | 1              | 1              | 1           | 0           | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| PA_BIAS_ DAC    | 1              | 1              | 1              | 0              | 0              | 0           | 0           | 1           | 1           | 0           | 0           | 0           | 0           | 0           | 0           |
| TX_GAIN_CONFIG  | 1              | 1              | 1              | 0              | 1              | 0           | 0           | 0           | 0           | 1           | 1           | 1           | 1           | 1           | 1           |
| TX_DC CORR_1    | 1              | 1              | 1              | 1              | 0              | 1           | 1           | 1           | 0           | 0           | 0           | 0           | 0           | 0           | 0           |
| TX_DC_CORR_2    | 1              | 1              | 1              | 1              | 1              | 1           | 1           | 0           | 1           | 0           | 0           | 0           | 0           | 0           | 0           |

Table 3. Register 0: RX\_ENABLE Register (Address = 00000, Default = 000HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                  |
|------------|--------------------------|------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default |

Table 4. Register 1: RX\_RF\_1 Register (Address = 00001, Default = 00CHEX)

| BIT NAME      | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                     |
|---------------|--------------------------|-------------------------------------------------------------------------------------------------|
| RESERVED      | 9:4                      | Reserved bits-set to default                                                                    |
| MIMO_MODE_SEL | 3                        | MIMO mode selection. 0 = RX_A 1 = RX_A + RX_B (default)                                         |
| RESERVED      | 2:1                      | Reserved bits-set to default                                                                    |
| LNA_BAND      | 0                        | LNA output LC tank center frequency select. 0 = 2.3GHz to 2.5GHz (default) 1 = 2.5GHz to 2.7GHz |

Table 5. Register 2: RX\_RF\_2 Register (Address = 00010, Default = 081HEX)

| BIT NAME        | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                      |
|-----------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED        | 9:1                      | Reserved bits-set to default                                                                                                                     |
| LNA_GAIN_SPI_EN | 0                        | LNA gain control select. 0 = LNA gain controlled by external pins B7 and B6 1 = LNA gain controlled by SPI through register 6 bits 1:0 (default) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 6. Register 3: RX\_RF/LPF Register (Address = 00011, Default = 1B9HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                  |
|------------|--------------------------|------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default |

Table 7. Register 4: LPF Register (Address = 00100, Default = 3E6HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                                                                         |
|------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FT<3:0>    | 9:6                      | RF channel bandwidth select. Test at RFBW 5MHz, 10MHz, and 28MHz. 0000 = 1.75MHz 0001 = 2.5MHz 0010 = 3.5MHz 0011 = 5.0MHz 0100 = 5.5MHz 0101 = 6.0MHz 0110 = 7.0MHz 0111 = 8.0MHz 1000 = 9.0MHz 1001 = 10.0MHz 1010 = 12.0MHz 1011 = 14.0MHz 1100 = 15.0MHz 1101 = 20.0MHz 1110 = 24.0MHz 1111 = 28.0MHz (default) |
| RESERVED   | 5:0                      | Reserved bits-set to default                                                                                                                                                                                                                                                                                        |

Table 8. Register 5: LPF/VGA\_1 Register (Address = 00101, Default = 100HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                           |
|------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED   | 9:8                      | Reserved bits-set to default                                                                                                                                                                                                                                          |
| VGA1<5:0>  | 7:2                      | Receiver 1 VGA attenuation settings through SPI. Active when register 8 D<1> = 1. 000000 = Max gain (default) 000001 = Max - 1dB ………. 111110 = Max - 62dB 111111 = Max - 63dB (min gain) Test at settings 000000, 000001, 001000, 010000, 100000, 110110, and 111111. |
| LNA1<1:0>  | 1:0                      | Receiver 1 LNA gain settings through SPI. Active when register 2 D<0> = 1. 00 = Max gain (default) 01 = Max - 8dB 10 = Max - 16dB 11 = Max - 32dB                                                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 9. Register 6: LPF/VGA\_2 Register (Address = 00110, Default = 000HEX)

| BIT NAME      | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                           |
|---------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BUFF_VCM<1:0> | 9:8                      | Rx VGA output common-mode voltage select. 00 = 1.05V (default) 01 = 1.15V 10 = 1.25V 11 = 1.45V                                                                                                                                                                       |
| VGA2<5:0>     | 7:2                      | Receiver 2 VGA attenuation settings through SPI. Active when register 8 D<1> = 1. 000000 = Max gain (default) 000001 = Max - 1dB ………. 111110 = Max - 62dB 111111 = Max - 63dB (min gain) Test at settings 000000, 000001, 001000, 010000, 100000, 110110, and 111111. |
| LNA2<1:0>     | 1:0                      | Receiver 2 LNA gain settings through SPI. Active when register 2 D<0> = 1. 00 = Max gain (default) 01 = Max - 8dB 10 = Max - 16dB 11 = Max - 32dB                                                                                                                     |

Table 10. Register 7: RSSI/VGA Register (Address = 00111, Default = 208HEX)

| BIT NAME    | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                |
|-------------|--------------------------|--------------------------------------------------------------------------------------------|
| RSSI_RXSEL  | 9                        | RSSI for receiver 1 or 2 select. 0 = RSSI for receiver 2 1 = RSSI for receiver 1 (default) |
| RESERVED    | 8                        | Reserved bits-set to default                                                               |
| SEL_IN1_IN2 | 7                        | RXBBI output select. 0 = Select Rx VGA output (default) 1 = Select Tx AM detector output   |
| RESERVED    | 6:0                      | Reserved bits-set to default                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 11. Register 8: RX\_TOP\_SPI\_1 Register (Address = 01000, Default = 222HEX)

| BIT NAME         | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                           |
|------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED         | 9:3                      | Reserved bits-set to default                                                                                                                                                                          |
| LPF_MODE_SEL     | 2                        | LPF operating mode select. 0 = LPF response changes automatically between Tx and Rx by TXRX pin (default) 1 = LPF response fixed in Tx, Rx, calibration, or trim mode as defined in register 5 D<9:8> |
| VGA_GAIN _SPI_EN | 1                        | Rx VGA gain control through SPI. 0 = Rx VGA gain controlled by external pins B5:B1 1 = Rx VGA gain controlled by SPI (default)                                                                        |
| RESERVED         | 0                        | Reserved bits-set to default                                                                                                                                                                          |

Table 12. Register 9: RX\_TOP\_SPI\_2 Register (Address = 01001, Default = 018HEX)

| BIT NAME      | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                         |
|---------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED      | 9:8                      | Reserved bits-set to default                                                                                                                                                                        |
| DOUT_SEL<2:0> | 7:5                      | DOUT pin multiplexed output select. 000 = SPI register (default) 001 = PLL lock detect. Set register 21 D<9:7> = 000 for lock-detect out. 010 = VAS and VTUNE outputs defined by register 26 D<9:6> |
| DOUT_CSB_SEL  | 4                        | DOUT pin three-state control. 0 = DOUT pin is independent of CSB pin 1 = DOUT pin is in three-state mode when CSB is high (default)                                                                 |
| DOUT_DRVH     | 3                        | DOUT pin output drive select. 0 = 1x drive. Delay < 4.4ns. 1 = 4x drive. Delay < 3.1ns (default).                                                                                                   |
| RESERVED      | 2                        | Reserved bits-set to default                                                                                                                                                                        |
| TS_EN         | 1                        | Temperature sensor comparator and clock enable. 0 = Disabled (default) 1 = Enabled                                                                                                                  |
| TS_ADC_TRIG   | 0                        | Temperature sensor ADC trigger. 0 = Not trigger ADC readout (default) 1 = Trigger ADC readout. ADC is disabled automatically after readout finishes.                                                |

Table 13. Register 10: TX\_TOP\_SPI Register (Address = 01010, Default = 00CHEX)

| BIT NAME        | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                     |
|-----------------|--------------------------|-----------------------------------------------------------------------------------------------------------------|
| RESERVED        | 9:2                      | Reserved bits-set to default                                                                                    |
| TXCAL_GAIN<1:0> | 1:0                      | Transmit AM detector baseband gain control select. 00 = Minimum gain (default) 01 = +10dB 10 = +20dB 11 = +30dB |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 14. Register 11: TEMP\_SEN Register (Address = 01011, Default = 004HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                          |
|------------|--------------------------|--------------------------------------------------------------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default. Readout at DOUT pin through SPI A[4:0] = 01011, D[4:0] |

Table 15. Register 12: HPFSM 1 Register (Address = 01100,  Default = 24FHEX)

| BIT NAME           | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                              |
|--------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HPC_600k_GAIN<2:0> | 9:7                      | Rx VGA highpass corner duration at 600kHz. Triggered by LNA gain change. Test at settings 000, 001, and 011. 000 = 0µs 001 = 0.8µs 010 = 1.6µs 011 = 2.4µs 100 = 3.2µs (default) 101 = 4.0µs 110 = 4.8µs 111 = stay '1'  |
| HPC_600k<2:0>      | 6:4                      | Rx VGA highpass corner duration at 600kHz. Triggered by RXEN rising edge. Test at settings 000, 100, and 110. 000 = 0µs 001 = 0.8µs 010 = 1.6µs 011 = 2.4µs 100 = 3.2µs (default) 101 = 4.0µs 110 = 4.8µs 111 = stay '1' |
| HPC_10M_GAIN<1:0>  | 3:2                      | Rx VGA highpass corner duration at 10MHz. Triggered by LNA gain change. Test at settings 00, 01, and 11. 00 = 0µs 01 = 0.4µs 10 = 0.8µs 11 = 1.2µs (default)                                                             |
| HPC_10M<1:0>       | 1:0                      | Rx VGA highpass corner duration 10MHz. Triggered by RXEN rising edge. Test at settings 00 and 11. 00 = 0µs 01 = 0.4µs 10 = 0.8µs 11 = 1.2µs (default)                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 16. Register 13: HPFSM 2 Register (Address = 01101, Default = 150HEX)

| BIT NAME           | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                    |
|--------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HPC_1k<1:0>        | 9:8                      | Rx VGA highpass corner duration at 1kHz. Triggered by RXEN rising edge. Test at settings 00, 01, and 11. 00 = 0µs 01 = 3.2µs (default) 10 = 6.4µs 11 = 9.6µs   |
| HPC_30k_GAIN<1:0>  | 7:6                      | Rx VGA highpass corner duration at 30kHz. Triggered by LNA gain change. Test at settings 00 and 01. 00 = 0µs 01 = 3.2µs (default) 10 = 6.4µs 11 = 9.6µs        |
| HPC_30k<1:0>       | 5:4                      | Rx VGA highpass corner duration at 30kHz. Triggered by RXEN rising edge. Test at settings 00, 01, and 10. 00 = 0µs 01 = 3.2µs (default) 10 = 6.4µs 11 = 9.6µs  |
| HPC_100k_GAIN<1:0> | 3:2                      | Rx VGA highpass corner duration at 100kHz. Triggered by LNA gain change. Test at settings 00 and 11. 00 = 0µs (default) 01 = 3.2µs 10 = 6.4µs 11 = 9.6µs       |
| HPC_100k<1:0>      | 1:0                      | Rx VGA highpass corner duration at 100kHz. Triggered by RXEN rising edge. Test at settings 00, 01, and 11. 00 = 0µs (default) 01 = 3.2µs 10 = 6.4µs 11 = 9.6µs |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 17. Register 14: HPFSM 3 Register (Address = 01110, Default = 3C5HEX)

| BIT NAME         | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                 |
|------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TXGATE_EN        | 9                        | PA driver and DAC on/off state gated by PLL lock detect. 0 = Independent of PLL lock detect 1 = Disable PA driver when PLL lock detect = 0 (default)                        |
| RESERVED         | 8                        | Reserved bits-set to default                                                                                                                                                |
| HPC_STOP_M2<1:0> | 7:6                      | Rx VGA on-hold highpass corner when RXHP = 1. Test at settings 00, 01, and 11. Only active when Reg15_D9 = 1. 00 = 1kHz 01 = 30kHz 10 = 100kHz 11 = 600kHz (default)        |
| HPC_STOP<1:0>    | 5:4                      | Rx VGA final highpass corner selection. Test at settings 00, 01, and 11. 00 = 100Hz (default) 01 = 1kHz 10 = 30kHz 11 = 100kHz                                              |
| HPC_DELAY<1:0>   | 3:2                      | Rx VGA HPC A and HPC D rising edge delay for 100k, 30k, 1k, and 100Hz highpass corner. Test at settings 00, 01, and 11. 00 = 0µs 01 = 0.2µs (default) 10 = 0.4µs 11 = 0.6µs |
| HPC_1k_GAIN<1:0> | 1:0                      | Rx VGA highpass corner duration at 1kHz. Triggered by LNA gain change. Test at settings 00, 01, and 10. 00 = 0µs 01 = 3.2µs (default) 10 = 6.4µs 11 = 9.6µs                 |

Table 18. Register 15: HPFSM 4 Register (Address = 01111, Default = 201HEX)

| BIT NAME    | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                    |
|-------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HP_MODE     | 9                        | Highpass corner control using RXHP. 0 = Highpass corner switches automatically without RXHP 1 = Highpass corner switches dependent on RXHP (default)                                                                                                                                                                                           |
| RESERVED    | 8:7                      | Reserved bits-set to default                                                                                                                                                                                                                                                                                                                   |
| HPC_SEQ_BYP | 6                        | Highpass corner switching sequence bypassed during RXHP transition from 1 to 0. 0 = Start switching from highpass corner set by HPC_STOP_M2<1:0> in register 14 and continue with programmed sequence (default) 1 = Switch from highpass corner set by HPC_STOP_M2<1:0> directly to final highpass corner set by HPC_STOP<1:0> in register 14. |
| RESERVED    | 5:0                      | Reserved bits-set to default                                                                                                                                                                                                                                                                                                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 19. Register 16: BLK\_SPI\_EN Register (Address = 10000, Default = 01CHEX)

| BIT NAME     | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                   |
|--------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED     | 9:8                      | Reserved bits-set to default                                                                                                                                                  |
| PADAC_TX_EN  | 7                        | PA bias DAC Tx mode enable bit. Enables PA bias DAC only in Tx mode. Turn-on delay is controlled by bits 9:6 of register 28. 0 = Disabled (default) 1 = Enabled when TXRX = 0 |
| PADAC_SPI_EN | 6                        | PA bias DAC SPI enable bit. Turn-on delay is controlled by bits 9:6 of register 28. 0 = Disabled (default) 1 = Enabled in all modes except for shutdown                       |
| RESERVED     | 5:2                      | Reserved bits-set to default                                                                                                                                                  |
| CAL_SPI      | 1                        | Receive and transmit calibration mode enable bit. Rx or Tx calibration mode is selected by TXRX pin. 0 = Normal receive or transmit mode (default) 1 = Calibration mode       |
| EN_SPI       | 0                        | Transceiver enable bit. 0 = Disabled (default) 1 = Enabled. Enable pin must also be 1 to turn on transceiver.                                                                 |

Table 20. Register 17: FRAC\_DIV\_1 Register (Address = 10001, Default = 155HEX)

| BIT NAME         | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                             |
|------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SYN_CONFIG0<9:0> | 9:0                      | Bits 9:0 of the 20-bit fractional divide ratio. The remaining bits 19:10 reside in register 18. Both registers are combined to form the 20-bit fractional word. Program register 17 to engage the stored values of registers 18 and 19. |

Table 21. Register 18: FRAC\_DIV\_2 Register (Address = 10010, Default = 155HEX)

| BIT NAME           | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                             |
|--------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SYN_CONFIG0<19:10> | 9:0                      | Bits 19:10 of the 20-bit fractional divide ratio. The remaining bits 9:0 reside in register 17. Both registers are combined to form the 20-bit fractional word. Program register 18 before register 17. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 22. Register 19: INT\_DIV Register (Address = 10011, Default = 153HEX)

| BIT NAME         | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                     |
|------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LOGEN_BSW<1:0>   | 9:8                      | LO generation band switch control for optimal transmit spur. 00 = 2300MHz to 2399.99MHz 01 = 2400MHz to 2499.99MHz (default) 10 = 2500MHz to 2599.99MHz 11 = 2600MHz to 2700MHz |
| SYN_CONFIG1<7:0> | 7:0                      | Synthesizer 8-bit integer divide ratio. Program register 19 before register 17. Test at settings between 76 and 90 to support LO frequency between 2300MHz and 2700MHz.         |

Table 23. Register 20: SYNTH\_CONFIG\_1 Register (Address = 10100, Default = 249HEX)

| BIT NAME         | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                    |
|------------------|--------------------------|------------------------------------------------------------------------------------------------|
| RESERVED         | 9:6                      | Reserved bits-set to default                                                                   |
| CLKOUT_DRV       | 5                        | Reference clock output buffer drive selection. 0 = 1x drive (default) 1 = 4x drive             |
| RESERVED         | 4:3                      | Reserved bits-set to default                                                                   |
| SYN_CONFIG1<1:0> | 2:1                      | Reference divide ratio selection. 00 = Divide by 1 (default) 01 = Divide by 2 10 = Divide by 4 |
| RESERVED         | 0                        | Reserved bit-set to default                                                                    |

Table 24. Register 21: SYNTH\_CONFIG\_2 Register (Address = 10101, Default = 02DHEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                  |
|------------|--------------------------|------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default |

Table 25. Register 22: VAS\_CONFIG Register (Address = 10110, Default = 1A9HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                      |
|------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED   | 9:1                      | Reserved bits-set to default                                                                                                                                     |
| VAS_MODE   | 0                        | VCO autoselect (VAS) operating mode selection. 0 = Manually select VCO sub-band by SPI register 23 D[4:0] 1 = Select VCO sub-band automatically by VAS (default) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 26. Register 23: LO\_ MISC\_CONFIG Register (Address = 10111, Default = 24FHEX)

| BIT NAME     | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                              |
|--------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED     | 9:5                      | Reserved bits-set to default                                                                                                                                                                                                             |
| VAS_SPI<4:0> | 4:0                      | VCO autoselect (VAS) sub-band SPI overwrite. Active when register 22 D0 = 0. 00000 = Minimum frequency - sub-band 0 00001 = Sub-band 1 ……… 01111 = Sub-band 15 (default) ……… 11110 = Sub band 30 11111 = Maximum frequency - sub-band 31 |

Table 27. Register 24: XTAL\_CONFIG Register (Address = 11000, Default = 180HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                |
|------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------|
| RESERVED   | 9:7                      | Reserved bits-set to default                                                                                               |
| XTAL<6:0>  | 6:0                      | Crystal oscillator frequency tuning. 0000000 = Minimum frequency tuning (default) …………. 1111111 = Maximum frequency tuning |

Table 28. Register 25: VCO\_CONFIG Register (Address = 11001, Default = 000HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                  |
|------------|--------------------------|------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

Table 29. Register 26: LOGEN\_CONFIG Register (Address = 11010, Default = 3C0HEX)

| BIT NAME     | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VAS_TST<3:0> | 9:6                      | VCO autoselect (VAS) sub-band and VCO tune voltage test signal output select. Results are delivered to DOUT pin by setting register 9 D<7:5> = 010. VCO_BSW<4:0>= 5VCO sub-band bits representing sub-band number 0 to 31. 0000 = VCO_BSW<0> 0001 = VCO_BSW<1> 0010 = VCO_BSW<2> 0011 = VCO_BSW<3> 0100 = VCO_BSW<4> VTUNE_ADC<2:0> = 3-bit ADC output representing VCO tune voltage. 0101 = VTUNE_ADC<0> 0110 = VTUNE_ADC<1> 0111 = VTUNE_ADC<2> 1111 = 0 (default) |
| RESERVED     | 5:4                      | Reserved bits-set to default                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| LOGEN_2GM    | 3                        | LO generation Gm enable. 0 = Function of TXRX and ENABLE pins (default) 1 = Enable both Rx/Tx output (required for Rx loopback calibration)                                                                                                                                                                                                                                                                                                                          |
| RESERVED     | 2:0                      | Reserved bits-set to default                                                                                                                                                                                                                                                                                                                                                                                                                                         |

Table 30. Register 27: TXLO\_I/Q\_CONFIG Register (Address = 11011, Default = 280HEX)

| BIT NAME          | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                      |
|-------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED          | 9:8                      | Reserved bits-set to default                                                                                                                     |
| TXVGA_GAIN_SPI_EN | 7                        | Transmit VGA gain control through SPI enable bit. 0 = Tx VGA gain control by pins B6:B1. 1 = Tx VGA gain control by register 29 D[5:0] (default) |
| RESERVED          | 6:0                      | Reserved bits-set to default                                                                                                                     |

Table 31. Register 28: PA\_BIAS\_DAC Register (Address = 11100, Default = 0C0HEX)

| BIT NAME       | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                               |
|----------------|--------------------------|-----------------------------------------------------------------------------------------------------------|
| PADAC_DLY<3:0> | 9:6                      | PA bias DAC turn-on delay control. 0000 = 0µs 0001 = 0µs 0010 = 0.5µs 0011 = 1.0µs (default) 1111 = 7.0µs |
| RESERVED       | 5:0                      | Reserved bits-set to default                                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

Table 32. Register 29: TX\_GAIN\_CONFIG Register (Address = 11101, Default = 03FHEX)

| BIT NAME            | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                                                                                                                                                                      |
|---------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESERVED            | 9:6                      | Reserved bits-set to default                                                                                                                                                                                                                                     |
| TXVGA_GAIN_SPI<5:0> | 5:0                      | Tx VGA gain control through SPI. Active when register 27 D7 = 1. 000000 = 0dB attenuation (max gain) 000001 = Max - 1dB ………. 011111 = Max - 31dB ………. 111111 = Max - 63dB (default) Test at settings 000000, 000011, 001001, 001010, 011101, 011110, and 111111. |

Table 33. Register 30: TX\_DC\_CORR\_1 Register (Address = 11110, Default = 380HEX)

| BIT NAME    | BIT LOCATION (0 = LSB)   | DESCRIPTION                                                                                                           |
|-------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------|
| PADAC_VMODE | 9                        | PA DAC voltage mode output select Active when register 30 D8 = 0. 0 = Logic '0' output 1 = Logic '1' output (default) |
| RESERVED    | 8:0                      | Reserved bits-set to default                                                                                          |

Table 34. Register 31: TX\_DC\_CORR\_2 Configuration Register (Address = 11111, Default = 340HEX)

| BIT NAME   | BIT LOCATION (0 = LSB)   | DESCRIPTION                  |
|------------|--------------------------|------------------------------|
| RESERVED   | 9:0                      | Reserved bits-set to default |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless BroadbandRF Transceiver

## Typical Operating Circuit

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

<!-- image -->

## Chip Information

## Bump Configuration

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 73 WLP         | W733A5+1       | 21-0146        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

PROCESS: BiCMOS

## 2.3GHz to 2.7GHz MIMO Wireless Broadband RF Transceiver

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/09            | Initial release                                                                                                           | -               |
|                 1 | 5/10            | Added soldering temperature to Absolute Maximum Ratings ; corrected name in global references to MAX2839AS Evaluation Kit | 2-18            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.