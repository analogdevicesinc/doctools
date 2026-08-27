<!-- lastmod 2022-08-03 -->
## General Description

The MAX109 evaluation kit (EV kit) is a fully assembled and tested PCB that contains all the components necessary to evaluate the performance of the MAX109 8bit,  2.2Gsps analog-to-digital converter (ADC) with track/hold amplifier and 1:4 demultiplexed LVDS outputs. The MAX109 EV kit analog and clock input signals can either be differential or single-ended. The EV kit circuit provides connectors to configure the ADC's control inputs. The demultiplexed ADC LVDS digital outputs can be captured with a user-supplied high-speed logic analyzer or data-acquisition system. A heatsink-fan module is provided to better control the MAX109 die temperature and further improve the converter's dynamic performance.

| DESIGNATION                          |   QTY | DESCRIPTION                                                                                   |
|--------------------------------------|-------|-----------------------------------------------------------------------------------------------|
| CLKN, CLKP, RSTINN, RSTINP, INN, INP |     6 | SMA edge-mount connectors                                                                     |
| C1-C7, C9, C11, C51-C82              |    41 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) TDK C1005X7R1E103K Taiyo Yuden TMK105BJ103KV   |
| C8                                   |     1 | 3.3µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J335K Taiyo Yuden JMK212BJ335KG |
| C10, C22-C27                         |     7 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K Taiyo Yuden LMK107BJ105KA      |
| C12-C16                              |     5 | 330µF ±20%, 10V tantalum capacitors (D) AVX TPSD337M010R0050                                  |
| C17-C21                              |     5 | 33µF ±20%, 10V tantalum capacitors (B) AVX TPSB336M010R0250                                   |

<!-- image -->

<!-- image -->

Features

- ♦ 2.2Gsps Maximum Sampling Rate
- ♦ LVDS Data Outputs
- ♦ Separate Analog and Digital Power and Ground Connections
- ♦ Optimized Six-Layer PCB Design
- ♦ Pin-Header Connectors Ease Connection to a Logic Analyzer
- ♦ On-Board Cooling Fan
- ♦ Fully Assembled and Tested

## Ordering Information

| PART        | TYPE   |
|-------------|--------|
| MAX109EVKIT | EV Kit |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                                     |
|---------------------|-------|-------------------------------------------------------------------------------------------------|
| C28-C47, C49, C50   |    22 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K Taiyo Yuden LMK105BJ104KV      |
| C48                 |     0 | Not installed, ceramic capacitor (1210)                                                         |
| D1                  |     1 | 20V, 1A Schottky diode (SOD-123) Central Semiconductor CMMSH1- 20+, lead-free (Top Mark: CS20F) |
| GNDI, GNDA          |     2 | Test point (black)                                                                              |
| J1, J2, J3          |     3 | Dual-row (2 x 25) 50-pin headers                                                                |
| JU1, JU2, JU3       |     3 | 2-pin headers                                                                                   |
| JU4-JU10            |     7 | 3-pin headers                                                                                   |
| R1, R2              |     2 | 10k multiturn potentiometer, 1/4in                                                              |
| R3, R4              |     2 | 49.9 ±1% resistors (0603)                                                                       |
| R5-R39              |    35 | 100 ±1% resistors (0402)                                                                        |
| R40                 |     1 | 60.4k ±1% resistor (0603)                                                                       |
| R41                 |     1 | 100k ±1% resistors (0603)                                                                       |
| TEMP, TP1, TP2, VTT |     4 | Test points (red)                                                                               |

## MAX109 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| U1            |     1 | 8-bit, 2.2Gsps ADC with LVDS outputs (256 SBGA) Maxim MAX109EHF-D                                           |
| U2            |     1 | 500mA adjustable LDO (6 SOT23) Maxim MAX1818EUT15# (Top Mark: AAS0) or Maxim MAX1818EUT20# (Top Mark: AANV) |
| -             |     1 | Heatsink with fan (30mm x 30mm x 10mm) Cofan 30-1101 02                                                     |
| -             |     9 | Shunts (JU1-JU9)                                                                                            |
| -             |     1 | PCB: MAX109 Evaluation Kit                                                                                  |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| AVX Corp.             | 843-946-0238 | www.avxcorp.com       |
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Taiyo Yuden           | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX109 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX109 EV kit
- Six DC power supplies:
- Signal generator with low-phase noise and low jitter for clock input (e.g., HP/Agilent 8663A)
- Signal generator for analog signal input (e.g., HP/Agilent 8663A)

- 1) VCCI

- +5V, 250mA

- 2) VEE -5V, 300mA

- 3) VCCA

- +5V, 1A

- 4) VCCD +5V, 500mA

- 5) VCCO +3.3V, 500mA

- 6) VFAN

- +5V, 200mA

## Procedure

The MAX109 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on power supplies or enable signal generators until all connections are completed.

- 1) Verify that shunts are installed across jumpers JU1 (REFIN = REFOUT), JU2 (VOSADJ adjustable), and JU3 (SAMPADJ adjustable).
- 2) Verify  that  shunts  are  installed  across  pins  1-2  of jumper JU4 and pins 2-3 of jumper JU5 (time delay between T/H and quantizer = 25ps).
- 3) Verify  that  shunts  are  installed  across  pins  2-3  of jumpers JU6 and JU7 (SDR mode/DCO speed = f CLK/4).
- 4) Verify  that  shunts  are  installed  across  pins  2-3  of jumper JU8 (PRN disabled).
- 5) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU9 (U2 enabled).
- 6) Verify that the fan is connected to jumper JU10.
- 7) Connect the voltmeter across test points TEMP and GNDI (die temperature reading).
- 8) Connect the clock generator output to the clock bandpass filter input.
- 9) a) Single-ended clock signal configuration: Connect the bandpass filter output to the CLKP SMA connector on the EV kit board. Reverse-terminate the CLKN input with a 50 Ω resistor  to  GNDI  or  an SMA end terminator with built-in 50 Ω resistance.
- b) Differential clock signal configuration: Connect the bandpass filter output to the H-9 balun transformer. The outputs (true and complementary) of the balun transformer must then be connected to the CLKP and CLKN SMA connectors on the EV kit board.
- 10) Connect the analog signal generator to the analog signal bandpass filter input.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Balun transformers for single-ended to differentialsignal conversion (e.g., M/A-COM H-9)
- Logic analyzer or data-acquisition system (e.g., Tektronix TLA714)
- Tunable bandpass filters (e.g., K&amp;L Microwave) for analog and clock input signals
- Digital voltmeter

- 11) a) Single-ended analog signal configuration: Connect the bandpass filter output to the INP SMA connector on the EV kit board. Reverse-terminate the INN input with a 50 Ω resistor to GNDI or an SMA end terminator with built-in 50 Ω resistance.
- b) Differential analog signal configuration: Connect the bandpass filter output to the H-9 balun transformer. The outputs (true and complementary) of the balun transformer must then be connected to the INP and INN SMA connectors on the EV kit board.

Note: It is recommended that a 3dB or 6dB attenuation pad be used to reduce distortion pickup from signal generator and balun transformer.

- 12) Connect the logic analyzer to the square-pin headers (J1, J2, and J3) to access the PortA, PortB, PortC, or PortD LVDS output signals. Refer to the EV kit  silkscreen  or  see  Figure  2  for  bit  locations.  The data output synchronization clock signal is available on DCOP and DCON. Pins located on the outside of the headers are the positive (P) or true signals. Pins located on the inside are the negative (N) or complementary signals.
- 13) Connect the +5V, 250mA power supply to VCCI. Connect the ground terminal of this supply to the corresponding GNDI pad.
- 14) Connect the -5V, 300mA power supply to VEE. Connect the ground terminal of this supply to the corresponding GNDI pad.
- 15) Connect the +5V, 1A power supply to VCCA. Connect the ground terminal of this supply to the corresponding GNDA pad.
- 16) Connect the +5V, 500mA power supply to VCCD. Connect the ground terminal of this supply to the corresponding GNDD pad.
- 17) Connect the +3.3V, 500mA power supply to VCCO. Connect the ground terminal of this supply to the corresponding GNDO pad.
- 18) Connect the +5V, 200mA power supply to VFAN. Connect the ground terminal of this supply to the corresponding GNDF pad.
- 19) Turn on the -5V power supply (VEE).
- 20) Turn on the +5V power supplies (VCCI, VCCA, VCCD, and VFAN).
- 21) Turn on the +3.3V power supply (VCCO).
- 22) Enable the signal generators.

<!-- image -->

## MAX109 Evaluation Kit

- 23) Set the clock signal generator for an output amplitude of +10dBm to +13dBm and the frequency (fCLK) to 2.2GHz.
- 24) Set the analog input signal generator for an output amplitude less than or equal to 500mVP-P and to the desired frequency.
- 25) For coherent sampling conditions, verify that the two signal generators are properly synchronized. Adjust the output power level of the signal generators  to  compensate for cable, bandpass filter, and attenuation pad losses at the input.
- 26) Enable the logic analyzer.
- 27) Capture data using the logic analyzer.

## Detailed Description

The MAX109 EV kit is a fully assembled and tested PCB that contains all the components necessary to evaluate the performance of the MAX109 8-bit, 2.2Gsps converter with 1:4 demultiplexed LVDS outputs. The MAX109 EV kit analog and clock input signals can be either differential or single-ended. The EV kit circuit provides multiple jumpers, which allows the user to configure the ADC's operating modes and perform necessary adjustments for performance enhancement and optimization.

The MAX109 LVDS digital outputs can be captured with a user-supplied high-speed logic analyzer or dataacquisition system connected to headers J1, J2, and J3. The differential DCO clock signal can be accessed at  pins  J2-17/18 to synchronize the output data to the logic analyzer. The EV kit circuit features several jumpers to configure the ADC's operating modes and to make sampling event or offset adjustments. The EV kit  requires  separate +5V, -5V, and +3.3V power supplies  to  power  the  different  circuit  power  planes.  The EV kit PCB is designed as a six-layer board with controlled impedance to optimize the converter's dynamic performance.

## Power Supplies

The MAX109 EV kit requires six separate power supplies for best performance. A -5V power supply powers the VEE negative rail of the analog circuit block. Three separate +5V power supplies provide power to the VCCA and VCCI analog circuit blocks and the VCCD digital circuit block. A +3.3V power supply powers the VCCO LVDS output circuit block. An additional +5V power supply must be connected across the VFAN pad (positive rail) and GNDF (ground) to power the heatsink-cooling-fan module.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

## Clock Input

The MAX109 EV kit operates with either single-ended or differential, low-phase noise, sine-wave clock input signals.  Each clock input is terminated with an on-chip, laser-trimmed 50 Ω resistor to the CLKCOM pin (clocktermination return). In single-ended mode, a +10dBm clock signal must be connected to the CLKP SMA connector, and the CLKN SMA must be terminated with a 50 Ω resistor  to  GNDI  or  an  SMA  end terminator with built-in  50 Ω resistance. In differential mode, connect the differential clock signal across the CLKP (true) and CLKN (complementary) SMA connectors. Note: Since most signal generators only provide a single-ended output, follow the Procedure section and implement a balun transformer to create the true and complementary signals for the differential clock configuration.

## Input Analog Signal

The MAX109 EV kit is designed to operate with singleended or differential analog inputs; however, for optimum dynamic performance, it is recommended that the inputs be driven differentially. Inputs INP (true) and INN (complementary) feature on-chip, laser-trimmed 50 Ω termination resistors. For differential analog-input operation, connect the true signal to the INP SMA connector and the complementary signal to the INN SMA connector. To obtain a full-scale digital output with differential input drive, 500mVP-P must be applied to INP and INN (INP = +250mV and INN = -250mV). In a typical singleended configuration, the analog input signal is connected to the INP SMA connector, while the inverted input INN is reverse-terminated to GNDI with an external  50 Ω resistor.  Single-ended operation allows for a maximum input amplitude of ±250mV (or 500mVP-P). Refer  to  the Single-Ended  Analog  Inputs  and Differential  Analog Inputs  sections in the MAX109 IC data sheet for detailed analog input vs. digital output code information.

## Reference Voltage

The MAX109 requires an input reference voltage at its REFIN pin to set the full-scale analog signal range for the data converter. The ADC features an on-chip 2.5V precision bandgap reference that can be used for this purpose and is available at the REFOUT pin. Install a shunt on jumper JU1 to connect REFOUT to REFIN. Alternatively,  an  adjustable  external  reference  can  be used to adjust the converter's full-scale range. To use an external reference supply, remove the shunt from jumper JU1 and connect a stable, low-noise, external voltage reference directly to pin 1 of jumper JU1. To configure jumper JU1, see Table 1.

The REFOUT voltage output is also connected to potentiometers R1 and R2, which are used to adjust the voltage at the MAX109 VOSADJ and SAMPADJ pins.

Table 1. Reference Voltage (Jumper JU1)

| SHUNT POSITION   | REFIN PIN           | EV KIT OPERATION                                                                                                                                  |
|------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Installed        | Connected to REFOUT | REFIN connected to 2.5V precision reference REFOUT                                                                                                |
| Not installed    | Not connected       | User-supplied reference voltage must be connected to pin 1 of jumper JU1 (connect the ground connection of the voltage reference to the GNDI pad) |

## Offset Adjustment

The MAX109 provides a VOSADJ pin that can be used to  compensate for system offsets. The EV kit features jumper JU2, which allows the user to set the VOSADJ voltage to 1.25V (one-half the reference voltage), or adjust the voltage between 0 and 2.5V with the 10k Ω potentiometer, R1. See Table 2 for jumper JU2 configurations. Refer to the Offset Adjust section in the MAX109 IC data sheet for detailed information on the VOSADJ pin. The VOSADJ voltage can be monitored at test point TP1.

## Table 2. VOSADJ (Jumper JU2)

| SHUNT POSITION   | VOSADJ PIN                    | EV KIT OPERATION                                             |
|------------------|-------------------------------|--------------------------------------------------------------|
| Installed        | Connected to potentiometer R1 | VOSADJ pin voltage can be adjusted from 0 to 2.5V through R1 |
| Not installed    | Internally connected          | VOSADJ pin voltage set to 1.25V                              |

## Sampling Adjustment

The MAX109 provides a SAMPADJ pin that can be used to  adjust the proper sampling time. The EV kit features jumper JU3, which allows the user to set the SAMPADJ voltage to 1.25V (one-half the reference voltage), or adjust the voltage between 0 and 2.5V, correlating with up to 32ps timing adjustments, with the 10k Ω potentiometer, R2. See Table 3 for jumper JU3 configurations. Refer to the Sampling Point Adjustment (SAMPADJ) section in the MAX109 IC data sheet for detailed information on the SAMPADJ pin. The SAMPADJ voltage can be monitored at test point TP2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. SAMPADJ (Jumper JU3)

| SHUNT POSITION   | SAMPADJ PIN                   | EV KIT OPERATION                                              |
|------------------|-------------------------------|---------------------------------------------------------------|
| Installed        | Connected to potentiometer R2 | SAMPADJ pin voltage can be adjusted from 0 to 2.5V through R2 |
| Not installed    | Internally connected          | SAMPADJ pin voltage set to 0V                                 |

## T/H-Amplifier-to-Quantizer Capture Adjustment

The MAX109 DELGATE0 and DELGATE1 pins are used to configure the proper quantizer capture point between the T/H amplifier and the ADC core, depending on the selected sampling speed. DELGATE0 and DELGATE1 set  the  timing  of  the  capture  point.  This  timing  feature enables the MAX109 T/H amplifier to settle its output properly before the quantizer captures and digitizes the data, thereby achieving the best dynamic performance for  any  application.  The EV kit features jumpers JU4 and JU5 to allow the user to configure DELGATE0 and DELGATE1, respectively. Jumpers JU4 and JU5 connect their respective pin to GNDA ground or to voltage VCCA. Configure DELGATE0 and DELGATE1 to set the time,  after  which  the  quantizer  latches  data  from  the T/H amplifier between 25ps and 50ps. See Table 4 to configure jumpers JU4 and JU5.

Table 4. Timing Adjustments for T/H Amplifier and Quantizer (Jumpers JU4 and JU5)

| SAMPLING CLOCK SPEED        | JUMPER JU4 (DELGATE0) SHUNT POSITION   | JUMPER JU5 (DELGATE1) SHUNT POSITION   | TIME DELAY BETWEEN T/H AND QUANTIZER   |
|-----------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| f CLK = 2.2Gsps             | 1-2                                    | 2-3                                    | 25ps                                   |
| f CLK = 1.75Gsps to 2.2Gsps | 2-3                                    | 1-2                                    | 50ps                                   |

Note: Jumpers JU4 and JU5 1-2/1-2 and 2-3/2-3 shunt config- urations are not allowed.

<!-- image -->

## Digital LVDS Outputs

The MAX109 EV kit provides three 50-pin header connectors (J1, J2, and J3) to provide easy access to the differential  LVDS output data in offset binary format, four  output  ports  (PortA,  PortB,  PortC,  and  PortD),  the DCO (data clock output), the DOR (data out-of-range), and the RSTOUT (reset output) signals. All LVDS outputs are powered from the output driver supply (VCCO), which may be operated at +3.3V ±10%. The LVDS outputs provide a differential output voltage swing of ±300mV with a common-mode voltage of +1.2V. Each output transmission line pair (a true/positive and a complementary/negative signal) is differentially terminated near the output headers with a 100 Ω resistor. See Tables 6 and 7 for the output data, DCO, DOR, and RSTOUT signal's location on headers J1, J2, and J3. Each differential signal is also labeled on the EV kit PCB silkscreen. The true signals are available on the header pins closest to the edge of the EV kit board and the complementary signals are available on the inside.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

## Demultiplexer Setting

The MAX109's internal 1:4 demultiplexer spreads the ADC core's 8-bit data across 32 true LVDS output pairs and allows for easy data capture in three different modes: SDR (standard data rate), DDR (double data rate),  and  QDR (quadruple data rate). The different modes allow the user to update and process the outputs at one-quarter (SDR mode), one-eighth (DDR mode), or one-sixteenth (QDR mode) of the sampling clock rate. MAX109 EV kit jumpers JU6 and JU7 set the SDR, DDR, and QDR modes for the converter and configure the output to one of the three aforementioned modes. Refer to the Demultiplexer Operation section in the MAX109 IC data sheet for further details. See Table 5 for jumpers JU6 and JU7 configurations.

## Table 5. Data Rate Selection for Demultiplexer Operation Setting (Jumpers JU6 and JU7)

| JU6 SHUNT POSITION (QDR)   | JU7 SHUNT POSITION (DDR)   | DEMULTIPLEXER OPERATION   | DCO SPEED   |
|----------------------------|----------------------------|---------------------------|-------------|
| X                          | 2-3                        | SDR mode                  | f CLK /4    |
| 2-3                        | 1-2                        | DDR mode                  | f CLK /8    |
| 1-2                        | 1-2                        | QDR mode                  | f CLK /16   |

X = Don't care.

## MAX109 Evaluation Kit

Table 6. Output Bit Locations

| CHANNEL   | BIT D7 (P/N)   | BIT D6 (P/N)   | BIT D5 (P/N)   | BIT D4 (P/N)   | BIT D3 (P/N)   | BIT D2 (P/N)   | BIT D1 (P/N)   | BIT D0 (P/N)   |
|-----------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|
| A         | J3-28/27       | J3-8/7         | J2-42/41       | J2-26/25       | J2-2/1         | J1-36/35       | J1-20/19       | J1-4/3         |
| B         | J3-32/31       | J3-12/11       | J2-46/45       | J2-30/29       | J2-6/5         | J1-40/39       | J1-24/23       | J1-8/7         |
| C         | J3-36/35       | J3-16/15       | J2-50/49       | J2-34/33       | J2-10/9        | J1-44/43       | J1-28/27       | J1-12/11       |
| D         | J3-40/39       | J3-20/19       | J3-4/3         | J2-38/37       | J2-14/13       | J1-48/47       | J1-32/31       | J1-16/15       |

P = True/positive.

N = Complementary/negative.

Table 7. Output Bit Locations

| SIGNAL   | LOCATION (P/N)   |
|----------|------------------|
| J2-18/17 | DCO              |
| J2-22/21 | DOR              |
| J3-24/23 | RSTOUT           |

P = True/positive.

N = Complementary/negative.

## Die Temperature

For applications that require monitoring of the MAX109 die temperature, it is possible to determine this temperature by monitoring the voltage between the TEMPMON output pin and GNDI. The MAX109 EV kit provides a test point to access the TEMPMON pin. Connect a voltmeter across test points TEMP and GNDI to measure the voltage. The corresponding voltage is proportional to the actual die temperature of the converter and can be calculated as follows:

TDIE ( ° C) = [(VTEMPMON - VGNDI) x 1303.5] - 371

The MAX109 exhibits a typical TEMPMON voltage of +350mV, resulting in an overall die temperature of +170°F or +77°C. The converter's die temperature can be lowered to improve the ADC's dynamic performance by 'cooling' the MAX109 using the on-board heatsinkfan module. Connect a +5V power source across the VFAN and GNDF PCB pads to turn on the fan (the fan cable must be connected to JU10).

## Board Layout

Proper PCB layout strongly influences the MAX109's dynamic performance. The MAX109 EV kit PCB layout was designed to achieve the optimum dynamic performance. The EV kit is a six-layer printed PCB with separate ground and power-supply planes. Each power and ground plane is separated into corresponding power (VEE, VCCI, VCCA, VCCD, and VCCO) and ground (GNDA, GNDI, GNDO, and GNDD) sections. All the ground planes are connected at only one point. Digital signal traces run above the digital ground plane and analog signal traces run above the analog ground plane. The digital signals are routed away from the sensitive analog inputs, reference inputs, and clock inputs. High-speed analog inputs, clock inputs, and digital input signal lines are routed on 50 Ω impedance, matched-length microstrip lines. High-speed LVDS digital  output  signals are routed on differential 100 Ω impedance, matched-length microstrip lines. Roger's dielectric material is used between layers 1 and 2 and layers 5 and 6 to maintain a consistent dielectric constant value ( ε = 3.54) for operation up to 2.5GHz.

## Reset Input

The MAX109 EV kit provides SMA connectors (RSTINP and RSTINN) that allow the user to provide a differential signal to test the ADC's internal demultiplexer. These inputs accept LVDS input signals. For applications that do not require a synchronizing reset, the reset inputs may be left open.

## Pseudorandom Number Generator

The MAX109 features a pseudorandom number (PRN) generator for testing the demultiplexed digital outputs at speed and with a known test pattern. The 8-bit test pattern is demultiplexed to the four output ports. The MAX109 EV kit features jumper JU8 to configure the PRN pin.  Refer  to  the  Pseudorandom  Number  (PRN) Generator section in the MAX109 IC data sheet for further details. See Table 8 for jumper JU8 configurations.

Table 8. PRN Settings (Jumper JU8)

| SHUNT POSITION   | PRN PIN           | PRN GENERATOR   |
|------------------|-------------------|-----------------|
| 1-2              | Connected to VCCD | Enabled         |
| 2-3              | Connected to GNDD | Disabled        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX109 Evaluation Kit

<!-- image -->

Figure 1a. MAX109 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

<!-- image -->

Figure 1b. MAX109 EV Kit Schematic (Sheet 2 of 3)

## MAX109 Evaluation Kit

<!-- image -->

Figure 1c. MAX109 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

Figure 2. MAX109 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX109 Evaluation Kit

<!-- image -->

Figure 3. MAX109 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

Figure 4. MAX109 EV Kit PCB Layout-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX109 Evaluation Kit

<!-- image -->

Figure 5. MAX109 EV Kit PCB Layout-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

Figure 6. MAX109 EV Kit PCB Layout-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX109 Evaluation Kit

<!-- image -->

Figure 7. MAX109 EV Kit PCB Layout-Ground Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX109 Evaluation Kit

Figure 8. MAX109 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX109 Evaluation Kit

Figure 9. MAX109 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_