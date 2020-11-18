using System;
using System.IO;

namespace CopyAndRenameFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string pathfile = @"C:\Users\krist\Downloads\CIA output";

            string[] filePaths = Directory.GetFiles(pathfile);

            foreach (string filePath in filePaths)
            {
                try
                {
                    string dire = Path.GetDirectoryName(filePath);
                    string name = Path.GetFileNameWithoutExtension(filePath);
                    string exte = Path.GetExtension(filePath);
                    name = name.Substring(6);
                    Console.WriteLine("Copying file for: " + name);
                    File.Copy($"{filePath}", $"{pathfile}\\Output\\{name}-New{exte}");
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error File Copy");
                }
            }
        }
    }
}
