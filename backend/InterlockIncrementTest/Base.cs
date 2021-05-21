using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace InterlockIncrementTest
{
    public abstract class Base
    {
        const string MODEL_ID_PREFIX = "dispel";
        static Int64 idCounter = 0;

        public virtual void Foo()
        {
            var uniqueIndex = Interlocked.Increment(ref idCounter);
            var id = MODEL_ID_PREFIX + uniqueIndex;
            Console.WriteLine(id);
        }
    }
}
